import React, { useState, useEffect, useCallback } from 'react';
import {
  Compass,
  Sliders,
  Eye,
  Sparkles,
  ArrowUpRight,
  Layers,
  X,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import {
  KeelCanvas3D,
  CameraPreset,
  MarbleFinish,
  HotspotScreenCoord,
} from './components/KeelCanvas3D';

interface SculptureSpec {
  id: string;
  title: string;
  era: string;
  material: string;
  elevation: string;
  description: string;
  metrics: { label: string; value: string }[];
}

const SCULPTURE_SPECS: Record<string, SculptureSpec> = {
  'beacon-apex': {
    id: 'beacon-apex',
    title: 'Harmonic Light Apex',
    era: 'Neo-Hellenistic Synthesis IV',
    material: 'Photonic Concentric Luminance + Parian Silver',
    elevation: '+42.8m Above Stylobate',
    description:
      'Five concentric sky rings radiate from the raised hand of the Acropolis figure, calibrating atmospheric perspective across the cerulean horizon.',
    metrics: [
      { label: 'Ring Count', value: '5 Concentric Halos' },
      { label: 'Luminous Flux', value: '14,800 cd/m²' },
      { label: 'Harmonic Lock', value: 'Phase-Coherent' },
    ],
  },
  'corinthian-capital': {
    id: 'corinthian-capital',
    title: 'Corinthian Entablature & Shaft',
    era: 'Vitruvian Proportion 1:10',
    material: 'Weathered Liquid-Silver Carrara Marble',
    elevation: '+28.4m Capital Bell',
    description:
      'Twenty-four concave flutes ascend with classical entasis to a double-tiered acanthus capital crowned by four corner helical volutes and a molded abacus slab.',
    metrics: [
      { label: 'Flute Geometry', value: '24 Concave Channels' },
      { label: 'Capital Order', value: 'Corinthian Double-Tier' },
      { label: 'Surface Albedo', value: '0.84 Specular Silver' },
    ],
  },
  'scholar-frieze': {
    id: 'scholar-frieze',
    title: 'Stoa Colonnade Frieze',
    era: 'Athenian Agora Progression',
    material: 'Cast Silver-Patina Pentelic Marble',
    elevation: '+12.0m Lower Peristyle',
    description:
      'Five draped philosopher sculptures ascend diagonally toward the primary beacon column, each carved with harmonic chiton and himation folds.',
    metrics: [
      { label: 'Ensemble Figures', value: '5 Draped Scholars' },
      { label: 'Drapery Relief', value: 'Harmonic Vertex Wave' },
      { label: 'Colonnade Pitch', value: '14.2° Ascent' },
    ],
  },
  'sculpted-pear': {
    id: 'sculpted-pear',
    title: 'Precision Mastery Motif',
    era: 'Close-Up Atelier Study',
    material: 'High-Chrome Carrara Alloy',
    elevation: 'Eye-Level Sculptor Plane',
    description:
      'In the second movement, the sculptor-philosopher holds a lathe-turned silver pear opposite a tapered paring blade, embodying deliberate craft and discipline.',
    metrics: [
      { label: 'Curly Lock Count', value: '58 Sculpted Volutes' },
      { label: 'Focal Distance', value: '1.85m Macro Portrait' },
      { label: 'Finish Grade', value: 'Mirror-Honed Patina' },
    ],
  },
};

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>('monument');
  const [harmonicFreq, setHarmonicFreq] = useState(1.25);
  const [ringIntensity, setRingIntensity] = useState(1.0);
  const [marbleFinish, setMarbleFinish] = useState<MarbleFinish>('silver-carrara');
  const [hotspots, setHotspots] = useState<HotspotScreenCoord[]>([]);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [showHotspotMarkers, setShowHotspotMarkers] = useState(true);
  const [isAscentModalOpen, setIsAscentModalOpen] = useState(false);
  const [ascentSubmitted, setAscentSubmitted] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [architectRole, setArchitectRole] = useState('Principal Brand Architect');

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const current = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setScrollProgress(current);

      if (current < 0.34 && cameraPreset === 'sculptor') {
        setCameraPreset('monument');
      } else if (current >= 0.34 && current < 0.72 && cameraPreset === 'monument') {
        setCameraPreset('sculptor');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cameraPreset]);

  const handleUpdateHotspots = useCallback((coords: HotspotScreenCoord[]) => {
    setHotspots(coords);
  }, []);

  const scrollToSection = (index: number, preset: CameraPreset) => {
    setCameraPreset(preset);
    const targetY = index * window.innerHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const activeSpec = selectedHotspot ? SCULPTURE_SPECS[selectedHotspot] : null;

  return (
    <div className="relative min-h-[300vh] w-full text-white font-ui select-none">
      {/* Real-Time Three.js WebGL Classical Colonnade & Concentric Light Rings */}
      <KeelCanvas3D
        scrollProgress={scrollProgress}
        cameraPreset={cameraPreset}
        harmonicFreq={harmonicFreq}
        ringIntensity={ringIntensity}
        marbleFinish={marbleFinish}
        selectedHotspot={selectedHotspot}
        onSelectHotspot={setSelectedHotspot}
        onUpdateHotspots={handleUpdateHotspots}
      />

      {/* Interactive 3D Projected Hotspot Pins */}
      {showHotspotMarkers && (
        <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
          {hotspots
            .filter((h) => h.visible)
            .map((h) => {
              const isSelected = selectedHotspot === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => setSelectedHotspot(isSelected ? null : h.id)}
                  style={{
                    transform: `translate3d(${h.x}px, ${h.y}px, 0)`,
                  }}
                  className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 group flex items-center gap-2.5 focus:outline-none"
                >
                  <span
                    className={`relative flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#14181F] border-white scale-110 shadow-[0_0_24px_rgba(255,255,255,0.9)]'
                        : 'bg-[#14181F]/70 border-white/75 hover:bg-[#14181F] hover:scale-110'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-ping absolute" />
                    <span className="w-2 h-2 rounded-full bg-white relative" />
                  </span>
                  <span className="hidden sm:flex flex-col items-start px-3 py-1 rounded-full bg-[#14181F]/80 backdrop-blur-md border border-white/20 text-left opacity-90 group-hover:opacity-100 transition">
                    <span className="text-[11px] font-medium tracking-wide text-white leading-tight">
                      {h.label}
                    </span>
                  </span>
                </button>
              );
            })}
        </div>
      )}

      {/* Minimal Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-30 px-6 sm:px-12 py-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection(0, 'monument')}
          className="font-editorial text-2xl sm:text-3xl tracking-tight text-white drop-shadow-sm flex items-center gap-2.5 cursor-pointer"
        >
          <span>KEEL</span>
          <span className="text-[10px] font-ui uppercase tracking-[0.28em] px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md">
            MMXXVI
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#14181F]/45 backdrop-blur-xl border border-white/20">
          {[
            { label: 'Emergence', section: 0, preset: 'monument' as CameraPreset },
            { label: 'Mastery', section: 1, preset: 'sculptor' as CameraPreset },
            { label: 'Colonnade', section: 2, preset: 'frieze' as CameraPreset },
            { label: 'Zenith', section: 0, preset: 'zenith' as CameraPreset },
          ].map((item) => {
            const active = cameraPreset === item.preset;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.section, item.preset)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wider transition-all cursor-pointer ${
                  active
                    ? 'bg-white text-[#14181F] font-medium shadow-sm'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowHotspotMarkers((prev) => !prev)}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md text-xs tracking-wide transition cursor-pointer"
            title="Toggle 3D Architectural Telemetry Pins"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showHotspotMarkers ? 'Nodes On' : 'Nodes Off'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setAscentSubmitted(false);
              setIsAscentModalOpen(true);
            }}
            className="bg-[#14181F] hover:bg-[#1E2430] text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium shadow-lg border border-white/15 flex items-center gap-2 transition cursor-pointer"
          >
            <span>Begin Ascent</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* SECTION 1: c_intro_28.jpg — "Keel helps you emerge" */}
      <section className="relative h-screen w-full flex items-center px-8 sm:px-16 lg:px-24 z-10 pointer-events-none">
        <div className="max-w-xl pointer-events-auto mt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] uppercase tracking-[0.22em] text-white/95 mb-5">
            <Sparkles className="w-3 h-3" />
            <span>Chapter I · Celestial Colonnade</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[68px] font-normal tracking-tight text-white leading-[1.06] drop-shadow-[0_4px_24px_rgba(20,42,78,0.35)]">
            Keel helps you emerge
          </h1>

          <p className="mt-5 text-sm sm:text-base text-white/90 max-w-md leading-relaxed font-normal drop-shadow-sm">
            Monumental systems sculpted in liquid-silver Carrara marble and calibrated by five
            concentric rings of atmospheric light.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection(1, 'sculptor')}
              className="bg-[#14181F] hover:bg-[#0B0E13] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium shadow-[0_12px_32px_rgba(12,18,28,0.45)] transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Mastery
            </button>

            <button
              type="button"
              onClick={() => setSelectedHotspot('beacon-apex')}
              className="px-5 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-xs uppercase tracking-[0.16em] text-white transition cursor-pointer"
            >
              Inspect Beacon
            </button>
          </div>

          {/* Subtle Architectural Specs Below CTA */}
          <div className="mt-12 grid grid-cols-3 gap-6 pt-6 border-t border-white/25 max-w-md">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">Order</div>
              <div className="font-editorial text-lg text-white mt-0.5">Corinthian IV</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">Luminance</div>
              <div className="font-editorial text-lg text-white mt-0.5">5 Sky Halos</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">Patina</div>
              <div className="font-editorial text-lg text-white mt-0.5">Silver Marble</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: c_intro_29.jpg — "We excel at what it takes." (Sculptor Close-Up with Pear & Blade) */}
      <section className="relative h-screen w-full flex items-center px-8 sm:px-16 lg:px-24 z-10 pointer-events-none">
        <div className="max-w-xl pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14181F]/55 backdrop-blur-md border border-white/25 text-[11px] uppercase tracking-[0.22em] text-white/95 mb-5">
            <Compass className="w-3.5 h-3.5" />
            <span>Chapter II · Sculptor Close-Up</span>
          </div>

          <h2 className="font-editorial text-5xl sm:text-6xl lg:text-[66px] font-normal tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(20,42,78,0.38)]">
            We excel at
            <br />
            what it takes.
          </h2>

          <p className="mt-5 text-sm sm:text-base text-white/90 max-w-md leading-relaxed drop-shadow-sm">
            Every fold of drapery, every curly volute, and the poised balance between the sculpted
            silver pear and paring blade are rendered in real time.
          </p>

          {/* Interactive Harmonic Ring & Camera Control Console */}
          <div className="mt-8 p-5 rounded-2xl bg-[#14181F]/70 backdrop-blur-xl border border-white/20 max-w-md shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-white/80 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>Harmonic Ring Frequency</span>
              </span>
              <span className="text-xs font-mono text-white bg-white/15 px-2.5 py-0.5 rounded-full">
                {harmonicFreq.toFixed(2)} Hz
              </span>
            </div>

            <input
              type="range"
              min={0.3}
              max={3.0}
              step={0.05}
              value={harmonicFreq}
              onChange={(e) => setHarmonicFreq(parseFloat(e.target.value))}
              aria-label="Harmonic Ring Frequency"
              className="w-full accent-white cursor-pointer h-1.5 bg-white/25 rounded-lg"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs uppercase tracking-[0.18em] text-white/80">
                Halo Luminosity
              </span>
              <span className="text-xs font-mono text-white/90">
                {Math.round(ringIntensity * 100)}%
              </span>
            </div>

            <input
              type="range"
              min={0.4}
              max={1.5}
              step={0.05}
              value={ringIntensity}
              onChange={(e) => setRingIntensity(parseFloat(e.target.value))}
              aria-label="Halo Luminosity"
              className="w-full accent-white cursor-pointer h-1.5 bg-white/25 rounded-lg"
            />

            <div className="pt-2 flex flex-wrap gap-2">
              {(
                [
                  { id: 'silver-carrara', label: 'Silver Carrara' },
                  { id: 'parian-white', label: 'Parian Marble' },
                  { id: 'celestial-chrome', label: 'Celestial Chrome' },
                ] as { id: MarbleFinish; label: string }[]
              ).map((mat) => (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setMarbleFinish(mat.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition cursor-pointer ${
                    marbleFinish === mat.id
                      ? 'bg-white text-[#14181F] font-semibold'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {mat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Colonnade Frieze & Camera Preset Deck */}
      <section className="relative h-screen w-full flex items-end pb-16 px-8 sm:px-16 lg:px-24 z-10 pointer-events-none">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pointer-events-auto">
          <div className="max-w-lg bg-[#14181F]/65 backdrop-blur-xl border border-white/20 p-7 rounded-3xl shadow-2xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/75 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Chapter III · Classical Peristyle</span>
            </div>
            <h3 className="font-editorial text-4xl sm:text-5xl text-white mt-2 leading-tight">
              Built to outlast the horizon.
            </h3>
            <p className="text-sm text-white/85 mt-3 leading-relaxed">
              Switch between the full monumental colonnade, the macro sculptor study with the
              silver pear and blade, or the zenith halo alignment.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {(
                [
                  { id: 'monument', label: 'Monument View' },
                  { id: 'sculptor', label: 'Sculptor Close-Up' },
                  { id: 'zenith', label: 'Celestial Zenith' },
                  { id: 'frieze', label: 'Colonnade Frieze' },
                ] as { id: CameraPreset; label: string }[]
              ).map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setCameraPreset(preset.id)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition cursor-pointer flex items-center gap-1.5 ${
                    cameraPreset === preset.id
                      ? 'bg-white text-[#14181F] font-semibold shadow-md'
                      : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                  }`}
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>{preset.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Bottom Quick Spec Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            {Object.values(SCULPTURE_SPECS).map((spec) => (
              <button
                key={spec.id}
                type="button"
                onClick={() => setSelectedHotspot(spec.id)}
                className={`p-4 rounded-2xl text-left transition backdrop-blur-xl border cursor-pointer ${
                  selectedHotspot === spec.id
                    ? 'bg-white text-[#14181F] border-white shadow-xl'
                    : 'bg-[#14181F]/60 text-white border-white/20 hover:bg-[#14181F]/80'
                }`}
              >
                <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">
                  {spec.era.split(' ')[0]}
                </div>
                <div className="font-editorial text-lg leading-snug mt-1">{spec.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active 3D Sculpture Inspection Drawer */}
      {activeSpec && (
        <aside className="fixed bottom-6 right-6 z-40 w-[92vw] max-w-sm rounded-3xl bg-[#14181F]/90 backdrop-blur-2xl border border-white/25 p-6 shadow-2xl text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-sky-300">
                {activeSpec.era}
              </span>
              <h4 className="font-editorial text-2xl text-white mt-0.5">{activeSpec.title}</h4>
            </div>
            <button
              type="button"
              onClick={() => setSelectedHotspot(null)}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition cursor-pointer"
              aria-label="Close Sculpture Telemetry"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-white/85 leading-relaxed mt-3">{activeSpec.description}</p>

          <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-3 gap-2">
            {activeSpec.metrics.map((m) => (
              <div key={m.label} className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/60">{m.label}</div>
                <div className="text-xs font-medium text-white mt-1">{m.value}</div>
              </div>
            ))}
          </div>
        </aside>
      )}

      {/* Begin Ascent Interactive Modal */}
      {isAscentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1526]/70 backdrop-blur-md p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-[#14181F] border border-white/20 p-7 text-white shadow-2xl">
            <button
              type="button"
              onClick={() => setIsAscentModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-[10px] uppercase tracking-[0.24em] text-sky-300">
              KEEL Architectural Commission
            </div>
            <h3 className="font-editorial text-3xl mt-1">Initiate Your Emergence</h3>

            {ascentSubmitted ? (
              <div className="mt-6 p-5 rounded-2xl bg-white/10 border border-white/20 space-y-3">
                <div className="flex items-center gap-2.5 text-sky-300 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Commission Dossier Registered</span>
                </div>
                <p className="text-xs text-white/85 leading-relaxed">
                  Your architectural brief for{' '}
                  <span className="font-semibold text-white">
                    {projectName || 'overeign Monument'}
                  </span>{' '}
                  ({architectRole}) has been locked to the 5-ring harmonic beacon at{' '}
                  {harmonicFreq.toFixed(2)} Hz.
                </p>
                <button
                  type="button"
                  onClick={() => setIsAscentModalOpen(false)}
                  className="w-full py-3 rounded-full bg-white text-[#14181F] text-xs font-semibold uppercase tracking-widest mt-2 cursor-pointer"
                >
                  Return to Colonnade
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setAscentSubmitted(true);
                }}
                className="mt-5 space-y-4"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/75 mb-1.5">
                    Monument or Initiative Title
                  </label>
                  <input
                    type="text"
                    required
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Enter initiative designation"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/75 mb-1.5">
                    Architectural Discipline
                  </label>
                  <select
                    value={architectRole}
                    onChange={(e) => setArchitectRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1E2530] border border-white/20 text-sm text-white focus:outline-none focus:border-white"
                  >
                    <option value="Principal Brand Architect">Principal Brand Architect</option>
                    <option value="Spatial WebGL Director">Spatial WebGL Director</option>
                    <option value="Classical Sculpture Curator">Classical Sculpture Curator</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white hover:bg-sky-50 text-[#14181F] text-xs font-semibold uppercase tracking-[0.2em] transition cursor-pointer mt-2"
                >
                  Confirm Ascent Coordinates
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
