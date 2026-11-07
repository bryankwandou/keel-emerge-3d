import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type CameraPreset = 'monument' | 'sculptor' | 'zenith' | 'frieze';
export type MarbleFinish = 'silver-carrara' | 'parian-white' | 'celestial-chrome';

export interface HotspotScreenCoord {
  id: string;
  label: string;
  subtitle: string;
  x: number;
  y: number;
  visible: boolean;
}

interface KeelCanvas3DProps {
  scrollProgress: number;
  cameraPreset: CameraPreset;
  harmonicFreq: number;
  ringIntensity: number;
  marbleFinish: MarbleFinish;
  selectedHotspot: string | null;
  onSelectHotspot: (id: string) => void;
  onUpdateHotspots: (coords: HotspotScreenCoord[]) => void;
}

const SKY_VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const SKY_FRAGMENT_SHADER = `
  uniform float uTime;
  uniform vec2 uBeaconScreen;
  varying vec2 vUv;
  varying vec3 vWorldPos;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 0.52;
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 6; i++) {
      value += amp * noise(p);
      p = rot * p * 2.03 + vec2(0.12, -0.07);
      amp *= 0.49;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;

    // Rich cerulean sky gradient matching Viktor Oddy Keel reference
    vec3 zenithBlue = vec3(0.19, 0.41, 0.71);
    vec3 midCerulean = vec3(0.27, 0.51, 0.80);
    vec3 horizonAzure = vec3(0.45, 0.67, 0.90);

    float yGrad = smoothstep(0.0, 1.0, uv.y);
    vec3 skyColor = mix(horizonAzure, midCerulean, smoothstep(0.0, 0.55, yGrad));
    skyColor = mix(skyColor, zenithBlue, smoothstep(0.45, 1.0, yGrad));

    // Volumetric cumulus cloud banks drifting across left-center and lower horizon
    vec2 cloudUv1 = vec2(uv.x * 3.4 - uTime * 0.012, uv.y * 2.6 + 0.3);
    vec2 cloudUv2 = vec2(uv.x * 5.2 + uTime * 0.008 + 1.7, uv.y * 4.0 - 0.4);

    float n1 = fbm(cloudUv1);
    float n2 = fbm(cloudUv2 + n1 * 0.45);
    float cumulusShape = fbm(cloudUv1 * 1.35 + vec2(n2 * 0.55, n1 * 0.35));

    // Concentrate majestic cumulus clouds along the left/center and lower-horizon like the reference
    float cloudMask = smoothstep(0.42, 0.76, cumulusShape);
    float verticalMask = smoothstep(0.95, 0.18, uv.y) * smoothstep(0.0, 0.14, uv.y);
    cloudMask *= (0.45 + 0.55 * verticalMask);

    // Sunlit cloud highlights & cool cerulean cloud undersides
    float lightGrad = fbm(cloudUv1 + vec2(0.14, 0.18));
    vec3 cloudShadow = vec3(0.53, 0.71, 0.91);
    vec3 cloudBright = vec3(0.96, 0.98, 1.0);
    vec3 cloudTone = mix(cloudShadow, cloudBright, smoothstep(0.32, 0.72, lightGrad));

    vec3 finalColor = mix(skyColor, cloudTone, cloudMask * 0.76);

    // Subtle atmospheric bloom around the upper-right beacon
    float distToBeacon = distance(uv, uBeaconScreen);
    float beaconGlow = exp(-distToBeacon * 4.2) * 0.38 + exp(-distToBeacon * 14.0) * 0.55;
    finalColor += vec3(0.92, 0.96, 1.0) * beaconGlow;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function createFlutedBumpTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const flutes = 24;
  const fluteWidth = canvas.width / flutes;

  for (let x = 0; x < canvas.width; x++) {
    const localX = (x % fluteWidth) / fluteWidth;
    // Concave classical flute profile with crisp fillet ridges
    let heightVal = 235;
    if (localX > 0.12 && localX < 0.88) {
      const normalized = (localX - 0.12) / 0.76;
      const concave = Math.sin(normalized * Math.PI);
      heightVal = Math.round(230 - concave * 155);
    }
    ctx.fillStyle = `rgb(${heightVal}, ${heightVal}, ${heightVal})`;
    ctx.fillRect(x, 0, 1, canvas.height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createSilverMarbleEnvCube(renderer: THREE.WebGLRenderer): THREE.Texture {
  const envScene = new THREE.Scene();
  const skyGeo = new THREE.SphereGeometry(20, 32, 24);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: `
      varying vec3 vPos;
      void main() {
        vPos = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vPos;
      void main() {
        float y = vPos.y * 0.5 + 0.5;
        vec3 deepIndigo = vec3(0.11, 0.19, 0.36);
        vec3 cerulean = vec3(0.32, 0.55, 0.84);
        vec3 silverHigh = vec3(0.98, 0.99, 1.0);
        vec3 col = mix(deepIndigo, cerulean, smoothstep(0.1, 0.65, y));
        float studioStrip = pow(max(0.0, dot(vPos, normalize(vec3(0.5, 0.75, 0.6)))), 9.0);
        float rimStrip = pow(max(0.0, dot(vPos, normalize(vec3(-0.7, 0.4, 0.5)))), 6.0);
        col = mix(col, silverHigh, clamp(studioStrip * 0.95 + rimStrip * 0.65, 0.0, 1.0));
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  envScene.add(new THREE.Mesh(skyGeo, skyMat));

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileCubemapShader();
  const envMap = pmremGenerator.fromScene(envScene, 0.025).texture;
  pmremGenerator.dispose();
  skyGeo.dispose();
  skyMat.dispose();
  return envMap;
}

function displaceClassicalDrapery(
  geo: THREE.BufferGeometry,
  foldCount: number,
  foldDepth: number,
  twistFactor = 1.4
) {
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const angle = Math.atan2(v.z, v.x);
    const yNorm = v.y;
    const primaryFold = Math.sin(angle * foldCount + yNorm * twistFactor) * foldDepth;
    const secondaryFold = Math.cos(angle * (foldCount * 2) - yNorm * 2.6) * (foldDepth * 0.42);
    const catenarySwag = Math.sin(yNorm * 4.5 + Math.cos(angle * 3.0)) * (foldDepth * 0.35);
    const radialScale = 1.0 + primaryFold + secondaryFold + catenarySwag;
    v.x *= radialScale;
    v.z *= radialScale;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
}

function buildCorinthianColumn(
  marbleMat: THREE.MeshPhysicalMaterial,
  flutedMat: THREE.MeshPhysicalMaterial,
  shaftHeight = 4.2,
  radius = 0.44
): THREE.Group {
  const group = new THREE.Group();

  // Fluted main shaft with classical entasis
  const shaftGeo = new THREE.CylinderGeometry(radius * 0.9, radius, shaftHeight, 64, 48);
  const pos = shaftGeo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const angle = Math.atan2(v.z, v.x);
    const fluteWave = Math.cos(angle * 24);
    const fluteCarve = fluteWave > 0.65 ? 0.008 : -Math.pow(Math.max(0, -fluteWave), 0.7) * 0.024;
    const r = Math.sqrt(v.x * v.x + v.z * v.z);
    if (r > 0.05) {
      const factor = (r + fluteCarve) / r;
      v.x *= factor;
      v.z *= factor;
      pos.setXYZ(i, v.x, v.y, v.z);
    }
  }
  shaftGeo.computeVertexNormals();
  const shaft = new THREE.Mesh(shaftGeo, flutedMat);
  shaft.position.y = -shaftHeight / 2;
  group.add(shaft);

  // Astragal necking collar
  const neckRing = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.93, 0.038, 16, 48), marbleMat);
  neckRing.rotation.x = Math.PI / 2;
  neckRing.position.y = 0.02;
  group.add(neckRing);

  // Corinthian capital bell
  const bellGeo = new THREE.CylinderGeometry(radius * 1.32, radius * 0.88, 0.66, 36, 16);
  const bell = new THREE.Mesh(bellGeo, marbleMat);
  bell.position.y = 0.35;
  group.add(bell);

  // Two tiers of sculpted Acanthus leaves around the Corinthian capital
  for (let tier = 0; tier < 2; tier++) {
    const leafCount = tier === 0 ? 8 : 8;
    const tierY = tier === 0 ? 0.19 : 0.42;
    const tierRadius = tier === 0 ? radius * 0.98 : radius * 1.14;
    for (let i = 0; i < leafCount; i++) {
      const angle = (i / leafCount) * Math.PI * 2 + tier * (Math.PI / 8);
      const leafGeo = new THREE.ConeGeometry(0.13, 0.34, 12, 8);
      displaceClassicalDrapery(leafGeo, 5, 0.14, 2.0);
      const leaf = new THREE.Mesh(leafGeo, marbleMat);
      leaf.position.set(Math.cos(angle) * tierRadius, tierY, Math.sin(angle) * tierRadius);
      leaf.rotation.order = 'YXZ';
      leaf.rotation.y = -angle + Math.PI / 2;
      leaf.rotation.x = 0.38;
      group.add(leaf);
    }
  }

  // 4 Corner Helical Volutes (Scrolls)
  for (let c = 0; c < 4; c++) {
    const angle = (c / 4) * Math.PI * 2 + Math.PI / 4;
    const volute = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.042, 14, 28), marbleMat);
    volute.position.set(
      Math.cos(angle) * (radius * 1.34),
      0.62,
      Math.sin(angle) * (radius * 1.34)
    );
    volute.rotation.y = -angle + Math.PI / 4;
    group.add(volute);
  }

  // Molded Abacus Slab atop the Corinthian capital
  const abacus = new THREE.Mesh(
    new THREE.BoxGeometry(radius * 2.95, 0.12, radius * 2.95),
    marbleMat
  );
  abacus.position.y = 0.72;
  group.add(abacus);

  const plinth = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 1.15, radius * 1.25, 0.14, 32),
    marbleMat
  );
  plinth.position.y = 0.82;
  group.add(plinth);

  return group;
}

function buildClassicalHead(
  marbleMat: THREE.MeshPhysicalMaterial,
  curlyLocksCount = 34,
  bearded = false
): THREE.Group {
  const headGroup = new THREE.Group();

  // Cranium + sculpted facial structure
  const skullGeo = new THREE.SphereGeometry(0.2, 32, 32);
  skullGeo.scale(0.86, 1.12, 0.95);
  const skull = new THREE.Mesh(skullGeo, marbleMat);
  headGroup.add(skull);

  // Classical brow ridge
  const brow = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.04, 0.14), marbleMat);
  brow.position.set(0, 0.055, 0.13);
  headGroup.add(brow);

  // Classical Grecian nose bridge
  const noseGeo = new THREE.ConeGeometry(0.036, 0.13, 12);
  const nose = new THREE.Mesh(noseGeo, marbleMat);
  nose.position.set(0, 0.0, 0.195);
  nose.rotation.x = 0.25;
  headGroup.add(nose);

  // Sculpted cheekbones & jawline
  const jawGeo = new THREE.CylinderGeometry(0.13, 0.09, 0.15, 20);
  const jaw = new THREE.Mesh(jawGeo, marbleMat);
  jaw.position.set(0, -0.09, 0.035);
  headGroup.add(jaw);

  // Lips & chin prominence
  const lips = new THREE.Mesh(new THREE.SphereGeometry(0.042, 16, 12), marbleMat);
  lips.scale.set(1.3, 0.55, 0.8);
  lips.position.set(0, -0.075, 0.165);
  headGroup.add(lips);

  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.048, 16, 16), marbleMat);
  chin.position.set(0, -0.135, 0.155);
  headGroup.add(chin);

  // Deep-set classical eyes
  for (const side of [-1, 1]) {
    const eyeSocket = new THREE.Mesh(new THREE.SphereGeometry(0.032, 16, 16), marbleMat);
    eyeSocket.scale.set(1.2, 0.75, 0.7);
    eyeSocket.position.set(side * 0.058, 0.028, 0.158);
    headGroup.add(eyeSocket);
  }

  // Curly classical Greco-Roman hair locks
  for (let i = 0; i < curlyLocksCount; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / curlyLocksCount) * 0.72;
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const x = Math.sin(phi) * Math.cos(theta) * 0.19;
    const y = Math.cos(phi) * 0.22 + 0.02;
    const z = Math.sin(phi) * Math.sin(theta) * 0.20 - 0.03;

    // Keep face front clear of hair locks
    if (z > 0.11 && y < 0.09) continue;

    const curlGeo = new THREE.TorusKnotGeometry(0.038, 0.015, 20, 6, 2, 3);
    const curl = new THREE.Mesh(curlGeo, marbleMat);
    curl.position.set(x, y, z);
    curl.rotation.set(i * 0.7, i * 1.1, i * 0.4);
    headGroup.add(curl);
  }

  if (bearded) {
    for (let b = 0; b < 14; b++) {
      const angle = ((b / 13) - 0.5) * 1.6;
      const beardLock = new THREE.Mesh(
        new THREE.ConeGeometry(0.038, 0.14, 10),
        marbleMat
      );
      beardLock.position.set(
        Math.sin(angle) * 0.11,
        -0.16 - (1 - Math.abs(angle)) * 0.04,
        Math.cos(angle) * 0.13 + 0.03
      );
      beardLock.rotation.x = Math.PI + 0.2;
      headGroup.add(beardLock);
    }
  }

  return headGroup;
}

function buildHeroBeaconStatue(marbleMat: THREE.MeshPhysicalMaterial): THREE.Group {
  const statue = new THREE.Group();

  // Flowing lower chiton skirt with deep harmonic folds
  const skirtGeo = new THREE.CylinderGeometry(0.34, 0.48, 1.25, 48, 36);
  displaceClassicalDrapery(skirtGeo, 11, 0.12, 2.2);
  const skirt = new THREE.Mesh(skirtGeo, marbleMat);
  skirt.position.y = 0.62;
  statue.add(skirt);

  // Contrapposto draped torso
  const torsoGeo = new THREE.CylinderGeometry(0.38, 0.31, 0.92, 44, 28);
  displaceClassicalDrapery(torsoGeo, 9, 0.09, 1.8);
  const torso = new THREE.Mesh(torsoGeo, marbleMat);
  torso.position.y = 1.56;
  torso.rotation.z = -0.05;
  statue.add(torso);

  // Diagonal Himation sash sweeping from left shoulder across chest
  const sashGeo = new THREE.TorusGeometry(0.39, 0.12, 24, 48);
  displaceClassicalDrapery(sashGeo, 8, 0.11, 1.5);
  const sash = new THREE.Mesh(sashGeo, marbleMat);
  sash.position.set(-0.02, 1.58, 0.02);
  sash.rotation.set(0.65, 0.2, -0.55);
  statue.add(sash);

  // Billowing wind-swept mantle behind shoulders (creates dramatic classical silhouette)
  const mantleGeo = new THREE.CylinderGeometry(0.55, 0.25, 1.35, 36, 24, true, -0.9, 1.8);
  displaceClassicalDrapery(mantleGeo, 7, 0.15, 2.4);
  const mantle = new THREE.Mesh(mantleGeo, marbleMat);
  mantle.position.set(0.06, 1.52, -0.16);
  mantle.rotation.set(-0.22, 0.25, -0.18);
  statue.add(mantle);

  // Neck & Classical Head looking up toward the radiant sky beacon
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.22, 20), marbleMat);
  neck.position.set(0, 2.08, 0.02);
  statue.add(neck);

  const head = buildClassicalHead(marbleMat, 36, false);
  head.position.set(-0.02, 2.26, 0.04);
  head.rotation.set(-0.28, -0.45, -0.08);
  statue.add(head);

  // Raised Right Arm (viewer's left side of statue) reaching up & left into the Beacon light center!
  const rightUpperArm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.095, 0.115, 0.56, 20),
    marbleMat
  );
  rightUpperArm.position.set(-0.48, 2.08, 0.12);
  rightUpperArm.rotation.set(0.25, 0.15, 0.92);
  statue.add(rightUpperArm);

  const rightForearm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.072, 0.092, 0.54, 20),
    marbleMat
  );
  rightForearm.position.set(-0.88, 2.42, 0.22);
  rightForearm.rotation.set(0.18, 0.1, 0.72);
  statue.add(rightForearm);

  const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.085, 16, 16), marbleMat);
  rightHand.scale.set(1.3, 0.7, 0.9);
  rightHand.position.set(-1.12, 2.64, 0.28);
  statue.add(rightHand);

  // Suspended Classical Bell/Tear Vessel below the raised right arm (matching c_intro_28.jpg!)
  const vesselGroup = new THREE.Group();
  const vesselBody = new THREE.Mesh(
    new THREE.ConeGeometry(0.16, 0.34, 24),
    marbleMat
  );
  const vesselBase = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 24, 16),
    marbleMat
  );
  vesselBase.position.y = -0.14;
  vesselGroup.add(vesselBody, vesselBase);
  vesselGroup.position.set(-0.98, 2.02, 0.22);
  vesselGroup.rotation.z = 0.18;
  statue.add(vesselGroup);

  // Extended Left Arm (viewer's right side of statue) sweeping outward in balance
  const leftUpperArm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.095, 0.115, 0.55, 20),
    marbleMat
  );
  leftUpperArm.position.set(0.46, 1.82, -0.02);
  leftUpperArm.rotation.set(-0.1, -0.2, -1.08);
  statue.add(leftUpperArm);

  const leftForearm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.072, 0.09, 0.52, 20),
    marbleMat
  );
  leftForearm.position.set(0.86, 1.62, 0.05);
  leftForearm.rotation.set(0.1, 0.0, -1.24);
  statue.add(leftForearm);

  return statue;
}

function buildCloseUpMasterySculpture(marbleMat: THREE.MeshPhysicalMaterial): THREE.Group {
  // Matches c_intro_29.jpg: Dramatic close-up of the silver-marble classical sculpture
  // holding a sculpted pear in its right hand and a blade in its left hand
  const group = new THREE.Group();

  // Broad draped classical shoulders & chest with deep metallic-marble pleats
  const chestGeo = new THREE.CylinderGeometry(0.68, 0.85, 1.65, 64, 48);
  displaceClassicalDrapery(chestGeo, 14, 0.095, 2.1);
  const chest = new THREE.Mesh(chestGeo, marbleMat);
  chest.position.set(0.1, -0.95, 0);
  group.add(chest);

  // Heavy draped pallium folds over left & right shoulders
  const leftMantleGeo = new THREE.TorusGeometry(0.58, 0.22, 32, 64);
  displaceClassicalDrapery(leftMantleGeo, 12, 0.11, 1.8);
  const leftMantle = new THREE.Mesh(leftMantleGeo, marbleMat);
  leftMantle.position.set(0.14, -0.58, 0.12);
  leftMantle.rotation.set(0.75, -0.25, -0.45);
  group.add(leftMantle);

  // Sculpted anatomical neck with sternocleidomastoid tendon relief
  const neckGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.52, 32);
  const neck = new THREE.Mesh(neckGeo, marbleMat);
  neck.position.set(0.12, 0.05, 0.02);
  neck.rotation.z = 0.06;
  group.add(neck);

  // High-detail Classical Head turned in three-quarter profile toward the pear (left)
  const head = buildClassicalHead(marbleMat, 58, false);
  head.scale.setScalar(2.25);
  head.position.set(0.12, 0.55, 0.06);
  head.rotation.set(0.08, -0.58, -0.04);
  group.add(head);

  // Right Hand & Forearm (viewer's left) holding up the Sculpted Silver Pear
  const rightArmGeo = new THREE.CylinderGeometry(0.15, 0.19, 0.85, 28);
  displaceClassicalDrapery(rightArmGeo, 8, 0.06, 1.4);
  const rightArm = new THREE.Mesh(rightArmGeo, marbleMat);
  rightArm.position.set(-0.62, -0.62, 0.42);
  rightArm.rotation.set(-0.45, 0.25, -0.35);
  group.add(rightArm);

  const rightPalm = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 24), marbleMat);
  rightPalm.scale.set(0.95, 1.25, 0.78);
  rightPalm.position.set(-0.74, -0.18, 0.58);
  group.add(rightPalm);

  // Sculpted fingers cradling the pear base
  for (let f = 0; f < 4; f++) {
    const finger = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.032, 0.14, 8, 12),
      marbleMat
    );
    finger.position.set(-0.82 + f * 0.045, -0.08 + (f % 2) * 0.02, 0.66);
    finger.rotation.set(0.35, 0, -0.25 + f * 0.12);
    group.add(finger);
  }

  // Lathe-sculpted Classical Pear + stem held in right hand (exact c_intro_29.jpg icon!)
  const pearPoints: THREE.Vector2[] = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    const y = t * 0.44;
    // Pear profile: plump lower bulb tapering to slender upper neck
    const bulb = Math.sin(t * Math.PI) * (t < 0.55 ? 0.19 : 0.12);
    const pinch = Math.sin(t * Math.PI * 2) * -0.032;
    const r = Math.max(0.006, bulb + pinch);
    pearPoints.push(new THREE.Vector2(r, y));
  }
  const pearGeo = new THREE.LatheGeometry(pearPoints, 36);
  const pear = new THREE.Mesh(pearGeo, marbleMat);
  pear.position.set(-0.73, -0.02, 0.58);
  pear.rotation.z = -0.08;
  group.add(pear);

  const pearStem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.008, 0.014, 0.11, 12),
    marbleMat
  );
  pearStem.position.set(-0.71, 0.45, 0.58);
  pearStem.rotation.z = -0.22;
  group.add(pearStem);

  // Left Hand & Forearm holding the Sculpted Silver Blade poised toward the pear
  const leftForearm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.18, 0.88, 28),
    marbleMat
  );
  leftForearm.position.set(0.18, -0.68, 0.55);
  leftForearm.rotation.set(-0.55, -0.35, 0.58);
  group.add(leftForearm);

  const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 24), marbleMat);
  leftHand.scale.set(1.15, 0.92, 0.85);
  leftHand.position.set(-0.14, -0.34, 0.72);
  group.add(leftHand);

  for (let f = 0; f < 4; f++) {
    const gripFinger = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.03, 0.12, 8, 12),
      marbleMat
    );
    gripFinger.position.set(-0.21, -0.26 - f * 0.042, 0.78);
    gripFinger.rotation.set(0.2, 0.3, 1.3);
    group.add(gripFinger);
  }

  // Sculpted Silver Blade & Handle angled from left hand toward the pear
  const bladeGroup = new THREE.Group();
  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.028, 0.024, 0.28, 16),
    marbleMat
  );
  const bladeGeo = new THREE.ConeGeometry(0.065, 0.56, 4);
  bladeGeo.scale(0.22, 1.0, 1.0);
  const blade = new THREE.Mesh(bladeGeo, marbleMat);
  blade.position.y = 0.40;
  bladeGroup.add(handle, blade);
  bladeGroup.position.set(-0.18, -0.28, 0.72);
  bladeGroup.rotation.set(-0.12, 0.15, 0.78);
  group.add(bladeGroup);

  return group;
}

function buildScholarColonnade(
  marbleMat: THREE.MeshPhysicalMaterial,
  flutedMat: THREE.MeshPhysicalMaterial
): THREE.Group {
  const rowGroup = new THREE.Group();
  const configs = [
    { x: -1.35, y: -2.42, z: -0.7, scale: 0.52, rotY: 0.25, bearded: true, armPose: 0 },
    { x: -0.62, y: -2.28, z: -0.5, scale: 0.58, rotY: 0.15, bearded: false, armPose: 1 },
    { x: 0.12, y: -2.14, z: -0.35, scale: 0.65, rotY: -0.1, bearded: true, armPose: 2 },
    { x: 0.88, y: -1.96, z: -0.2, scale: 0.74, rotY: -0.18, bearded: true, armPose: 0 },
    { x: 1.72, y: -1.74, z: -0.05, scale: 0.88, rotY: -0.28, bearded: false, armPose: 1 },
  ];

  configs.forEach((cfg, idx) => {
    const scholar = new THREE.Group();

    // Draped robe body
    const robeGeo = new THREE.CylinderGeometry(0.35, 0.46, 1.55, 36, 28);
    displaceClassicalDrapery(robeGeo, 10 + (idx % 3), 0.11, 1.9);
    const robe = new THREE.Mesh(robeGeo, marbleMat);
    robe.position.y = 0.75;
    scholar.add(robe);

    // Shoulder mantle fold
    const togaGeo = new THREE.TorusGeometry(0.36, 0.13, 20, 36);
    displaceClassicalDrapery(togaGeo, 7, 0.09, 1.5);
    const toga = new THREE.Mesh(togaGeo, marbleMat);
    toga.position.set(0, 1.15, 0.04);
    toga.rotation.set(0.65, 0.1, idx % 2 === 0 ? -0.48 : 0.48);
    scholar.add(toga);

    // Head
    const head = buildClassicalHead(marbleMat, 22, cfg.bearded);
    head.position.set(0, 1.72, 0.03);
    head.rotation.set(-0.18, cfg.rotY * 0.8, 0);
    scholar.add(head);

    // Expressive classical orator arm
    const arm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.1, 0.58, 16),
      marbleMat
    );
    if (cfg.armPose === 0) {
      arm.position.set(-0.36, 1.38, 0.16);
      arm.rotation.set(0.45, 0.2, 0.55);
    } else if (cfg.armPose === 1) {
      arm.position.set(0.36, 1.32, 0.18);
      arm.rotation.set(0.55, -0.2, -0.45);
    } else {
      arm.position.set(-0.28, 1.24, 0.24);
      arm.rotation.set(0.85, 0.3, -0.2);
    }
    scholar.add(arm);

    // Lower colonnade pedestal column beneath scholar
    const miniCol = buildCorinthianColumn(marbleMat, flutedMat, 2.4, 0.32);
    miniCol.position.y = -0.82;
    scholar.add(miniCol);

    scholar.position.set(cfg.x, cfg.y, cfg.z);
    scholar.scale.setScalar(cfg.scale);
    scholar.rotation.y = cfg.rotY;
    rowGroup.add(scholar);
  });

  return rowGroup;
}

export const KeelCanvas3D: React.FC<KeelCanvas3DProps> = ({
  scrollProgress,
  cameraPreset,
  harmonicFreq,
  ringIntensity,
  marbleFinish,
  onUpdateHotspots,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef({
    scrollProgress,
    cameraPreset,
    harmonicFreq,
    ringIntensity,
    marbleFinish,
  });

  useEffect(() => {
    propsRef.current = {
      scrollProgress,
      cameraPreset,
      harmonicFreq,
      ringIntensity,
      marbleFinish,
    };
  }, [scrollProgress, cameraPreset, harmonicFreq, ringIntensity, marbleFinish]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      120
    );
    camera.position.set(0, 0.35, 7.6);

    const envMap = createSilverMarbleEnvCube(renderer);
    scene.environment = envMap;

    // Sky Backdrop Plane
    const skyUniforms = {
      uTime: { value: 0 },
      uBeaconScreen: { value: new THREE.Vector2(0.68, 0.82) },
    };
    const skyMat = new THREE.ShaderMaterial({
      uniforms: skyUniforms,
      vertexShader: SKY_VERTEX_SHADER,
      fragmentShader: SKY_FRAGMENT_SHADER,
      depthWrite: false,
    });
    const skyPlane = new THREE.Mesh(new THREE.PlaneGeometry(46, 28), skyMat);
    skyPlane.position.set(0, 0.5, -10.5);
    scene.add(skyPlane);

    // Shared Liquid-Silver Carrara Marble PBR Materials
    const bumpTex = createFlutedBumpTexture();
    const marbleMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#DCE7F7'),
      metalness: 0.72,
      roughness: 0.18,
      clearcoat: 0.85,
      clearcoatRoughness: 0.12,
      reflectivity: 1.0,
      envMapIntensity: 1.75,
    });

    const flutedMat = marbleMat.clone();
    flutedMat.bumpMap = bumpTex;
    flutedMat.bumpScale = 0.035;

    // Studio & Celestial Lighting
    const ambientLight = new THREE.AmbientLight('#8CB8F2', 1.15);
    scene.add(ambientLight);

    const beaconPointLight = new THREE.PointLight('#FFFFFF', 6.5, 18, 1.4);
    beaconPointLight.position.set(1.52, 2.38, 1.2);
    scene.add(beaconPointLight);

    const ceruleanRimLight = new THREE.DirectionalLight('#5EA2F8', 3.2);
    ceruleanRimLight.position.set(-5.0, 3.5, 2.5);
    scene.add(ceruleanRimLight);

    const silverKeyLight = new THREE.DirectionalLight('#FFFFFF', 3.8);
    silverKeyLight.position.set(3.5, 5.2, 4.8);
    scene.add(silverKeyLight);

    // SCENE 1 GROUP: Monumental Colonnade + Hero Beacon Statue + Scholar Frieze
    const monumentGroup = new THREE.Group();
    scene.add(monumentGroup);

    const mainColumn = buildCorinthianColumn(marbleMat, flutedMat, 4.6, 0.52);
    mainColumn.position.set(2.58, -0.78, 0.25);
    monumentGroup.add(mainColumn);

    const heroStatue = buildHeroBeaconStatue(marbleMat);
    heroStatue.position.set(2.58, 0.08, 0.25);
    heroStatue.scale.setScalar(0.92);
    monumentGroup.add(heroStatue);

    const scholarColonnade = buildScholarColonnade(marbleMat, flutedMat);
    monumentGroup.add(scholarColonnade);

    // 5 CONCENTRIC GLOWING WHITE SKY HALO RINGS + BEACON FLARE
    const ringsGroup = new THREE.Group();
    ringsGroup.position.set(1.55, 2.52, -0.35);
    scene.add(ringsGroup);

    const ringRadii = [0.62, 1.42, 2.38, 3.52, 4.88];
    const ringMeshes: THREE.Mesh[] = [];

    ringRadii.forEach((radius, idx) => {
      const ringGeo = new THREE.RingGeometry(
        radius - 0.022 - idx * 0.003,
        radius + 0.022 + idx * 0.003,
        128
      );
      const ringMat = new THREE.MeshBasicMaterial({
        color: '#FFFFFF',
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.92 - idx * 0.08,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMeshes.push(ringMesh);
      ringsGroup.add(ringMesh);

      // Soft outer halo bloom per ring
      const haloGeo = new THREE.RingGeometry(radius - 0.09, radius + 0.09, 96);
      const haloMat = new THREE.MeshBasicMaterial({
        color: '#D8ECFF',
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.24 - idx * 0.03,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      ringsGroup.add(new THREE.Mesh(haloGeo, haloMat));
    });

    // Radiant Core Star at Beacon Center
    const coreGlowGeo = new THREE.CircleGeometry(0.32, 48);
    const coreGlowMat = new THREE.MeshBasicMaterial({
      color: '#FFFFFF',
      transparent: true,
      opacity: 0.96,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const coreGlow = new THREE.Mesh(coreGlowGeo, coreGlowMat);
    ringsGroup.add(coreGlow);

    // SCENE 2 GROUP: Sculptor Close-Up (Silver-Marble Statue with Pear & Blade)
    const masteryGroup = new THREE.Group();
    const closeUpSculpture = buildCloseUpMasterySculpture(marbleMat);
    closeUpSculpture.position.set(1.12, -6.25, 2.55);
    masteryGroup.add(closeUpSculpture);
    scene.add(masteryGroup);

    // Second set of Concentric Halo Rings behind the Close-Up Sculpture's head (matching c_intro_29.jpg)
    const masteryRingsGroup = new THREE.Group();
    masteryRingsGroup.position.set(1.25, -5.55, 1.35);
    scene.add(masteryRingsGroup);

    const masteryRingRadii = [0.68, 1.35, 2.15, 3.08, 4.15];
    const masteryRingMeshes: THREE.Mesh[] = [];
    masteryRingRadii.forEach((radius, idx) => {
      const rGeo = new THREE.RingGeometry(radius - 0.018, radius + 0.018, 128);
      const rMat = new THREE.MeshBasicMaterial({
        color: '#FFFFFF',
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.78 - idx * 0.09,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const rMesh = new THREE.Mesh(rGeo, rMat);
      masteryRingMeshes.push(rMesh);
      masteryRingsGroup.add(rMesh);
    });

    // 3D Hotspot World Anchors
    const hotspotDefs = [
      {
        id: 'beacon-apex',
        label: 'Harmonic Light Apex',
        subtitle: '5-Ring Concentric Luminance Vector',
        worldPos: new THREE.Vector3(1.55, 2.52, 0.25),
      },
      {
        id: 'corinthian-capital',
        label: 'Corinthian Entablature',
        subtitle: '24-Flute Carrara Silver Column',
        worldPos: new THREE.Vector3(2.58, -0.05, 0.65),
      },
      {
        id: 'scholar-frieze',
        label: 'Stoa Colonnade Frieze',
        subtitle: 'Classical Draped Scholar Progression',
        worldPos: new THREE.Vector3(0.88, -1.15, 0.25),
      },
      {
        id: 'sculpted-pear',
        label: 'Precision Mastery Motif',
        subtitle: 'Silver-Marble Pear & Sculptor Blade',
        worldPos: new THREE.Vector3(0.38, -6.18, 3.15),
      },
    ];

    // Mouse Parallax Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handlePointerMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let frameId = 0;
    let lastHotspotUpdate = 0;

    const targetCamPos = new THREE.Vector3(0, 0.35, 7.6);
    const targetLookAt = new THREE.Vector3(0.25, 0.25, 0);
    const currentLookAt = new THREE.Vector3(0.25, 0.25, 0);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const {
        scrollProgress: sp,
        cameraPreset: preset,
        harmonicFreq: freq,
        ringIntensity: intensity,
        marbleFinish: finish,
      } = propsRef.current;

      skyUniforms.uTime.value = elapsed;

      // Update Marble Material Finish dynamically
      if (finish === 'silver-carrara') {
        marbleMat.color.set('#DCE7F7');
        marbleMat.metalness = 0.74;
        marbleMat.roughness = 0.17;
      } else if (finish === 'parian-white') {
        marbleMat.color.set('#F5F8FD');
        marbleMat.metalness = 0.28;
        marbleMat.roughness = 0.24;
      } else {
        marbleMat.color.set('#B8D0F2');
        marbleMat.metalness = 0.92;
        marbleMat.roughness = 0.09;
      }
      flutedMat.color.copy(marbleMat.color);
      flutedMat.metalness = marbleMat.metalness;
      flutedMat.roughness = marbleMat.roughness;

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Determine Camera Choreography based on Scroll Progress & Active Preset
      const sceneBlend = Math.min(1, Math.max(0, sp * 1.45));

      if (preset === 'sculptor' || sp > 0.36) {
        // Scene 2: Dramatic Close-up on the Silver-Marble Sculpture with Pear & Blade (c_intro_29.jpg)
        const closeFactor = preset === 'sculptor' ? 1 : Math.min(1, (sp - 0.32) / 0.38);
        targetCamPos.set(
          THREE.MathUtils.lerp(0.0, 0.15, closeFactor) + mouse.x * 0.22,
          THREE.MathUtils.lerp(0.35, -5.85, closeFactor) + mouse.y * 0.16,
          THREE.MathUtils.lerp(7.6, 5.15, closeFactor)
        );
        targetLookAt.set(
          THREE.MathUtils.lerp(0.25, 0.32, closeFactor),
          THREE.MathUtils.lerp(0.25, -5.92, closeFactor),
          THREE.MathUtils.lerp(0.0, 2.45, closeFactor)
        );
      } else if (preset === 'zenith') {
        targetCamPos.set(1.25 + mouse.x * 0.3, 1.85 + mouse.y * 0.25, 5.2);
        targetLookAt.set(1.85, 2.25, 0.1);
      } else if (preset === 'frieze') {
        targetCamPos.set(0.35 + mouse.x * 0.3, -1.05 + mouse.y * 0.2, 5.4);
        targetLookAt.set(0.55, -1.15, -0.2);
      } else {
        // Scene 1: Monumental Colonnade & Concentric Light Rings (c_intro_28.jpg)
        targetCamPos.set(
          mouse.x * 0.28,
          0.35 - sceneBlend * 2.2 + mouse.y * 0.18,
          7.6 - sceneBlend * 0.8
        );
        targetLookAt.set(0.25, 0.25 - sceneBlend * 2.2, 0);
      }

      camera.position.lerp(targetCamPos, 0.07);
      currentLookAt.lerp(targetLookAt, 0.07);
      camera.lookAt(currentLookAt);

      // Keep sky backdrop locked cleanly behind camera frustum
      skyPlane.position.x = camera.position.x * 0.85;
      skyPlane.position.y = camera.position.y * 0.92;

      // Animate Concentric Sky Rings with Harmonic Frequency Pulse
      ringMeshes.forEach((ring, idx) => {
        const wave = Math.sin(elapsed * freq * 2.2 - idx * 0.65);
        const scale = 1.0 + wave * 0.025;
        ring.scale.setScalar(scale);
        const mat = ring.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.min(1, (0.86 - idx * 0.08 + wave * 0.12) * intensity);
      });

      masteryRingMeshes.forEach((ring, idx) => {
        const wave = Math.sin(elapsed * freq * 2.0 - idx * 0.55);
        ring.scale.setScalar(1.0 + wave * 0.022);
        const mat = ring.material as THREE.MeshBasicMaterial;
        mat.opacity = Math.min(1, (0.74 - idx * 0.08 + wave * 0.1) * intensity);
      });

      coreGlow.scale.setScalar(1.0 + Math.sin(elapsed * freq * 3.4) * 0.14);

      // Subtle living micro-motion on sculptures
      heroStatue.rotation.y = Math.sin(elapsed * 0.45) * 0.04;
      closeUpSculpture.rotation.y = Math.sin(elapsed * 0.38) * 0.035 + mouse.x * 0.06;

      renderer.render(scene, camera);

      // Project 3D Hotspot Coordinates to 2D Screen Space (~15fps throttle for React UI)
      if (elapsed - lastHotspotUpdate > 0.07) {
        lastHotspotUpdate = elapsed;
        const width = container.clientWidth;
        const height = container.clientHeight;
        const projected: HotspotScreenCoord[] = hotspotDefs.map((h) => {
          const p = h.worldPos.clone().project(camera);
          const x = (p.x * 0.5 + 0.5) * width;
          const y = (-(p.y * 0.5) + 0.5) * height;
          const visible = p.z < 1.0 && x > 40 && x < width - 40 && y > 60 && y < height - 60;
          return {
            id: h.id,
            label: h.label,
            subtitle: h.subtitle,
            x,
            y,
            visible,
          };
        });
        onUpdateHotspots(projected);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      envMap.dispose();
      bumpTex.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [onUpdateHotspots]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-label="Real-time 3D Classical Colonnade and Concentric Sky Rings Canvas"
    />
  );
};
