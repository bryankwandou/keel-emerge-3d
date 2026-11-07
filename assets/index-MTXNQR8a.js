(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function xx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var od={exports:{}},cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function VM(){if(i_)return cl;i_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return cl.Fragment=e,cl.jsx=i,cl.jsxs=i,cl}var a_;function XM(){return a_||(a_=1,od.exports=VM()),od.exports}var gt=XM(),ld={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function kM(){if(s_)return le;s_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function U(D,W,vt){this.props=D,this.context=W,this.refs=x,this.updater=vt||b}U.prototype.isReactComponent={},U.prototype.setState=function(D,W){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,W,"setState")},U.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=U.prototype;function R(D,W,vt){this.props=D,this.context=W,this.refs=x,this.updater=vt||b}var Y=R.prototype=new L;Y.constructor=R,M(Y,U.prototype),Y.isPureReactComponent=!0;var I=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function w(D,W,vt){var lt=vt.ref;return{$$typeof:o,type:D,key:W,ref:lt!==void 0?lt:null,props:vt}}function z(D,W){return w(D.type,W,D.props)}function it(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function nt(D){var W={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(vt){return W[vt]})}var dt=/\/+/g;function ut(D,W){return typeof D=="object"&&D!==null&&D.key!=null?nt(""+D.key):W.toString(36)}function k(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(P,P):(D.status="pending",D.then(function(W){D.status==="pending"&&(D.status="fulfilled",D.value=W)},function(W){D.status==="pending"&&(D.status="rejected",D.reason=W)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function st(D,W,vt,lt,bt){var wt=typeof D;(wt==="undefined"||wt==="boolean")&&(D=null);var Dt=!1;if(D===null)Dt=!0;else switch(wt){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(D.$$typeof){case o:case e:Dt=!0;break;case v:return Dt=D._init,st(Dt(D._payload),W,vt,lt,bt)}}if(Dt)return bt=bt(D),Dt=lt===""?"."+ut(D,0):lt,I(bt)?(vt="",Dt!=null&&(vt=Dt.replace(dt,"$&/")+"/"),st(bt,W,vt,"",function(ie){return ie})):bt!=null&&(it(bt)&&(bt=z(bt,vt+(bt.key==null||D&&D.key===bt.key?"":(""+bt.key).replace(dt,"$&/")+"/")+Dt)),W.push(bt)),1;Dt=0;var Tt=lt===""?".":lt+":";if(I(D))for(var At=0;At<D.length;At++)lt=D[At],wt=Tt+ut(lt,At),Dt+=st(lt,W,vt,wt,bt);else if(At=E(D),typeof At=="function")for(D=At.call(D),At=0;!(lt=D.next()).done;)lt=lt.value,wt=Tt+ut(lt,At++),Dt+=st(lt,W,vt,wt,bt);else if(wt==="object"){if(typeof D.then=="function")return st(k(D),W,vt,lt,bt);throw W=String(D),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function J(D,W,vt){if(D==null)return D;var lt=[],bt=0;return st(D,lt,"","",function(wt){return W.call(vt,wt,bt++)}),lt}function yt(D){if(D._status===-1){var W=D._result,vt=W();vt.then(function(lt){(D._status===0||D._status===-1)&&(D._status=1,D._result=lt,vt.status===void 0&&(vt.status="fulfilled",vt.value=lt))},function(lt){(D._status===0||D._status===-1)&&(D._status=2,D._result=lt,vt.status===void 0&&(vt.status="rejected",vt.reason=lt))}),D._status===-1&&(D._status=0,D._result=vt)}if(D._status===1)return D._result.default;throw D._result}var St=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ht(D){var W=F.T,vt={};vt.types=W!==null?W.types:null,F.T=vt;try{var lt=D(),bt=F.S;bt!==null&&bt(vt,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(P,St)}catch(wt){St(wt)}finally{W!==null&&vt.types!==null&&(W.types=vt.types),F.T=W}}function re(D){var W=F.T;if(W!==null){var vt=W.types;vt===null?W.types=[D]:vt.indexOf(D)===-1&&vt.push(D)}else Ht(re.bind(null,D))}var ee={map:J,forEach:function(D,W,vt){J(D,function(){W.apply(this,arguments)},vt)},count:function(D){var W=0;return J(D,function(){W++}),W},toArray:function(D){return J(D,function(W){return W})||[]},only:function(D){if(!it(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return le.Activity=m,le.Children=ee,le.Component=U,le.Fragment=i,le.Profiler=l,le.PureComponent=R,le.StrictMode=s,le.Suspense=p,le.ViewTransition=y,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,le.__COMPILER_RUNTIME={__proto__:null,c:function(D){return F.H.useMemoCache(D)}},le.addTransitionType=re,le.cache=function(D){return function(){return D.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(D,W,vt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var lt=M({},D.props),bt=D.key;if(W!=null)for(wt in W.key!==void 0&&(bt=""+W.key),W)!N.call(W,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&W.ref===void 0||(lt[wt]=W[wt]);var wt=arguments.length-2;if(wt===1)lt.children=vt;else if(1<wt){for(var Dt=Array(wt),Tt=0;Tt<wt;Tt++)Dt[Tt]=arguments[Tt+2];lt.children=Dt}return w(D.type,bt,lt)},le.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},le.createElement=function(D,W,vt){var lt,bt={},wt=null;if(W!=null)for(lt in W.key!==void 0&&(wt=""+W.key),W)N.call(W,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(bt[lt]=W[lt]);var Dt=arguments.length-2;if(Dt===1)bt.children=vt;else if(1<Dt){for(var Tt=Array(Dt),At=0;At<Dt;At++)Tt[At]=arguments[At+2];bt.children=Tt}if(D&&D.defaultProps)for(lt in Dt=D.defaultProps,Dt)bt[lt]===void 0&&(bt[lt]=Dt[lt]);return w(D,wt,bt)},le.createRef=function(){return{current:null}},le.forwardRef=function(D){return{$$typeof:d,render:D}},le.isValidElement=it,le.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:yt}},le.memo=function(D,W){return{$$typeof:g,type:D,compare:W===void 0?null:W}},le.startTransition=Ht,le.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},le.use=function(D){return F.H.use(D)},le.useActionState=function(D,W,vt){return F.H.useActionState(D,W,vt)},le.useCallback=function(D,W){return F.H.useCallback(D,W)},le.useContext=function(D){return F.H.useContext(D)},le.useDebugValue=function(){},le.useDeferredValue=function(D,W){return F.H.useDeferredValue(D,W)},le.useEffect=function(D,W){return F.H.useEffect(D,W)},le.useEffectEvent=function(D){return F.H.useEffectEvent(D)},le.useId=function(){return F.H.useId()},le.useImperativeHandle=function(D,W,vt){return F.H.useImperativeHandle(D,W,vt)},le.useInsertionEffect=function(D,W){return F.H.useInsertionEffect(D,W)},le.useLayoutEffect=function(D,W){return F.H.useLayoutEffect(D,W)},le.useMemo=function(D,W){return F.H.useMemo(D,W)},le.useOptimistic=function(D,W){return F.H.useOptimistic(D,W)},le.useReducer=function(D,W,vt){return F.H.useReducer(D,W,vt)},le.useRef=function(D){return F.H.useRef(D)},le.useState=function(D){return F.H.useState(D)},le.useSyncExternalStore=function(D,W,vt){return F.H.useSyncExternalStore(D,W,vt)},le.useTransition=function(){return F.H.useTransition()},le.version="19.3.1",le}var r_;function Up(){return r_||(r_=1,ld.exports=kM()),ld.exports}var Qe=Up();const qM=xx(Qe);var cd={exports:{}},ul={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function YM(){return o_||(o_=1,(function(o){function e(k,st){var J=k.length;k.push(st);t:for(;0<J;){var yt=J-1>>>1,St=k[yt];if(0<l(St,st))k[yt]=st,k[J]=St,J=yt;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var st=k[0],J=k.pop();if(J!==st){k[0]=J;t:for(var yt=0,St=k.length,Ht=St>>>1;yt<Ht;){var re=2*(yt+1)-1,ee=k[re],D=re+1,W=k[D];if(0>l(ee,J))D<St&&0>l(W,ee)?(k[yt]=W,k[D]=J,yt=D):(k[yt]=ee,k[re]=J,yt=re);else if(D<St&&0>l(W,J))k[yt]=W,k[D]=J,yt=D;else break t}}return st}function l(k,st){var J=k.sortIndex-st.sortIndex;return J!==0?J:k.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],v=1,m=null,y=3,S=!1,E=!1,b=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(k){for(var st=i(g);st!==null;){if(st.callback===null)s(g);else if(st.startTime<=k)s(g),st.sortIndex=st.expirationTime,e(p,st);else break;st=i(g)}}function Y(k){if(b=!1,R(k),!E)if(i(p)!==null)E=!0,I||(I=!0,it());else{var st=i(g);st!==null&&ut(Y,st.startTime-k)}}var I=!1,P=-1,F=5,N=-1;function w(){return M?!0:!(o.unstable_now()-N<F)}function z(){if(M=!1,I){var k=o.unstable_now();N=k;var st=!0;try{t:{E=!1,b&&(b=!1,U(P),P=-1),S=!0;var J=y;try{e:{for(R(k),m=i(p);m!==null&&!(m.expirationTime>k&&w());){var yt=m.callback;if(typeof yt=="function"){m.callback=null,y=m.priorityLevel;var St=yt(m.expirationTime<=k);if(k=o.unstable_now(),typeof St=="function"){m.callback=St,R(k),st=!0;break e}m===i(p)&&s(p),R(k)}else s(p);m=i(p)}if(m!==null)st=!0;else{var Ht=i(g);Ht!==null&&ut(Y,Ht.startTime-k),st=!1}}break t}finally{m=null,y=J,S=!1}st=void 0}}finally{st?it():I=!1}}}var it;if(typeof L=="function")it=function(){L(z)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,dt=nt.port2;nt.port1.onmessage=z,it=function(){dt.postMessage(null)}}else it=function(){x(z,0)};function ut(k,st){P=x(function(){k(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(k){switch(y){case 1:case 2:case 3:var st=3;break;default:st=y}var J=y;y=st;try{return k()}finally{y=J}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,st){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var J=y;y=k;try{return st()}finally{y=J}},o.unstable_scheduleCallback=function(k,st,J){var yt=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?yt+J:yt):J=yt,k){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=J+St,k={id:v++,callback:st,priorityLevel:k,startTime:J,expirationTime:St,sortIndex:-1},J>yt?(k.sortIndex=J,e(g,k),i(p)===null&&k===i(g)&&(b?(U(P),P=-1):b=!0,ut(Y,J-yt))):(k.sortIndex=St,e(p,k),E||S||(E=!0,I||(I=!0,it()))),k},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(k){var st=y;return function(){var J=y;y=st;try{return k.apply(this,arguments)}finally{y=J}}}})(fd)),fd}var l_;function WM(){return l_||(l_=1,ud.exports=YM()),ud.exports}var hd={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function jM(){if(c_)return wn;c_=1;var o=Up();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:m,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.browser=function(v){return{$$typeof:u,_reason:v}},wn.createPortal=function(v,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(v,m,null,y)},wn.flushSync=function(v){var m=p.T,y=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=y,s.d.f()}},wn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},wn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},wn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var y=m.as,S=g(y,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:b}):y==="script"&&s.d.X(v,{crossOrigin:S,integrity:E,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},wn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,S=g(y,m.crossOrigin);s.d.L(v,y,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(v,m){if(typeof v=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},wn.requestFormReset=function(v){s.d.r(v)},wn.unstable_batchedUpdates=function(v,m){return v(m)},wn.useFormState=function(v,m,y){return p.H.useFormState(v,m,y)},wn.useFormStatus=function(){return p.H.useHostTransitionStatus()},wn.version="19.3.1",wn}var u_;function ZM(){if(u_)return hd.exports;u_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hd.exports=jM(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function KM(){if(f_)return ul;f_=1;var o=WM(),e=Up(),i=ZM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,T=c.child;T;){if(T===a){_=!0,a=c,r=f;break}if(T===r){_=!0,r=c,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,r=c;break}if(T===r){_=!0,r=f,a=c;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,c,f))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=y(t);return a===null||b(n,t,a.child,{foundSelf:!1}),n}function b(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&b(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,U=null;function L(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function R(t,n,a){return t===a?(U=t,!1):t===n?(U!==null&&(x=t),!0):!1}function Y(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function I(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,F=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),it=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),ee=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),W=Symbol.for("react.recoverable"),vt=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=vt&&t[vt]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case nt:return"Profiler";case it:return"StrictMode";case st:return"Suspense";case J:return"SuspenseList";case Ht:return"Activity";case D:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ut:return t.displayName||"Context";case dt:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yt:return n=t.displayName||null,n!==null?n:wt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return wt(t(n))}catch{}}return null}var Dt=Array.isArray,Tt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},X=[],Be=-1;function ne(t){return{current:t}}function jt(t){0>Be||(t.current=X[Be],X[Be]=null,Be--)}function Ct(t,n){Be++,X[Be]=t.current,t.current=n}var fe=ne(null),Bt=ne(null),O=ne(null),A=ne(null);function tt(t,n){switch(Ct(O,n),Ct(Bt,t),Ct(fe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?hv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=hv(n),t=dv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}jt(fe),Ct(fe,t)}function mt(){jt(fe),jt(Bt),jt(O)}function xt(t){var n=t.memoizedState;n!==null&&(Pr._currentValue=n.memoizedState,Ct(A,t)),n=fe.current;var a=dv(n,t.type);n!==a&&(Ct(Bt,t),Ct(fe,a))}function pt(t){Bt.current===t&&(jt(fe),jt(Bt)),A.current===t&&(jt(A),Pr._currentValue=ie)}var Yt,Ut;function Pt(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",Ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+Ut}var ye=!1;function Mt(t,n){if(!t||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ht=function(){throw Error()};if(Object.defineProperty(ht.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ht,[])}catch(Rt){var q=Rt}Reflect.construct(t,[],ht)}else{try{ht.call()}catch(Rt){q=Rt}ht=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ht=!0,new t}finally{ht&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(Rt){q=Rt}(ht=t())&&typeof ht.catch=="function"&&ht.catch(function(){})}}catch(Rt){if(Rt&&q&&typeof Rt.stack=="string")return[Rt.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var B=_.split(`
`),Z=T.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===Z.length)for(r=B.length-1,c=Z.length-1;1<=r&&0<=c&&B[r]!==Z[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==Z[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==Z[c]){var at=`
`+B[r].replace(" at new "," at ");return t.displayName&&at.includes("<anonymous>")&&(at=at.replace("<anonymous>",t.displayName)),at}while(1<=r&&0<=c);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Pt(a):""}function Xt(t,n){switch(t.tag){case 26:case 27:case 5:return Pt(t.type);case 16:return Pt("Lazy");case 13:return t.child!==n&&n!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return Mt(t.type,!1);case 11:return Mt(t.type.render,!1);case 1:return Mt(t.type,!0);case 31:return Pt("Activity");case 30:return Pt("ViewTransition");default:return""}}function ae(t){try{var n="",a=null;do n+=Xt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var oe=Object.prototype.hasOwnProperty,Vt=o.unstable_scheduleCallback,xe=o.unstable_cancelCallback,he=o.unstable_shouldYield,Fe=o.unstable_requestPaint,V=o.unstable_now,Lt=o.unstable_getCurrentPriorityLevel,ct=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,Ot=o.unstable_NormalPriority,Ft=o.unstable_LowPriority,ce=o.unstable_IdlePriority,Ze=o.log,gn=o.unstable_setDisableYieldValue,be=null,je=null;function vn(t){if(typeof Ze=="function"&&gn(t),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(be,t)}catch{}}var Cn=Math.clz32?Math.clz32:_o,Nl=Math.log,ia=Math.LN2;function _o(t){return t>>>=0,t===0?32:31-(Nl(t)/ia|0)|0}var ms=256,gs=262144,aa=4194304;function Bi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function sa(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?c=Bi(r):(_&=T,_!==0?c=Bi(_):a||(a=T&~t,a!==0&&(c=Bi(a))))):(T=r&~f,T!==0?c=Bi(T):_!==0?c=Bi(_):a||(a=r&~t,a!==0&&(c=Bi(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Na(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function xo(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Cn(a),c=1<<r;n|=t[r],a&=~c}return n}function zu(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(){var t=aa;return aa<<=1,(aa&62914560)===0&&(aa=4194304),t}function yo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function C(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function K(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,Z=t.hiddenUpdates;for(a=_&~a;0<a;){var at=31-Cn(a),ht=1<<at;T[at]=0,B[at]=-1;var q=Z[at];if(q!==null)for(Z[at]=null,at=0;at<q.length;at++){var et=q[at];et!==null&&(et.lane&=-536870913)}a&=~ht}r!==0&&rt(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function rt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Cn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function ot(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Cn(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Q(t,n){var a=n&-n;return a=(a&42)!==0?1:Et(a),(a&(t.suspendedLanes|n))!==0?0:a}function Et(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zt(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:Kv(t.type))}function Kt(t,n){var a=At.p;try{return At.p=t,n()}finally{At.p=a}}var te=Math.random().toString(36).slice(2),Qt="__reactFiber$"+te,It="__reactProps$"+te,ve="__reactContainer$"+te,Oe="__reactEvents$"+te,ke="__reactListeners$"+te,Rn="__reactHandles$"+te,Re="__reactResources$"+te,Wt="__reactMarker$"+te,Yn="__reactLoad$"+te;function Ae(t){delete t[Qt],delete t[It],delete t[ke],delete t[Rn]}function un(t){var n;if(n=t[Qt])return n;for(var a=t.parentNode;a;){if(n=a[ve]||a[Qt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Dv(t);t!==null;){if(a=t[Qt])return a;t=Dv(t)}return n}t=a,a=t.parentNode}return null}function $n(t){if(t=t[Qt]||t[ve]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function hi(t){var n=t[Re];return n||(n=t[Re]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ue(t){t[Wt]=!0}function ti(t){t[Yn]=void 0}var Ua=new Set,Pn={};function Dn(t,n){In(t,n),In(t+"Capture",n)}function In(t,n){for(Pn[t]=n,t=0;t<n.length;t++)Ua.add(n[t])}var Ll=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kp={},Qp={};function oy(t){return oe.call(Qp,t)?!0:oe.call(Kp,t)?!1:Ll.test(t)?Qp[t]=!0:(Kp[t]=!0,!1)}var Ne=!1;function Jp(){var t=Ne;return Ne=!1,t}function Ol(t,n,a){if(oy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function zl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ra(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ei(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ly(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pu(t){if(!t._valueTracker){var n=$p(t)?"checked":"value";t._valueTracker=ly(t,n,""+t[n])}}function tm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=$p(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var cy=/[\n"\\]/g;function di(t){return t.replace(cy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Iu(t,n,a,r,c,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ei(n)):t.value!==""+ei(n)&&(t.value=""+ei(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Bu(t,ei(t.value)):Bu(t,ei(n)):a!=null?Bu(t,ei(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ei(T):t.removeAttribute("name")}function em(t,n,a,r,c,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Pu(t);return}a=a!=null?""+ei(a):"",n=n!=null?""+ei(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Pu(t)}function Bu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function tr(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ei(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function nm(t,n,a){if(n!=null&&(n=""+ei(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ei(a):""}function im(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Dt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ei(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Pu(t)}function er(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var uy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function am(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||uy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function sm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ne=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(am(t,c,r),Ne=!0)}else for(var f in n)n.hasOwnProperty(f)&&am(t,f,n[f])}function Fu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return hy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Hu=null;function Gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function rm(t){var n=$n(t);if(n&&(t=n.stateNode)){var a=t[It]||null;t:switch(t=n.stateNode,n.type){case"input":if(Iu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+di(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[It]||null;if(!c)throw Error(s(90));Iu(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&tm(r)}break t;case"textarea":nm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tr(t,!!a.multiple,n,!1)}}}var Vu=!1;function om(t,n,a){if(Vu)return t(n,a);Vu=!0;try{var r=t(n);return r}finally{if(Vu=!1,(nr!==null||ir!==null)&&(Pc(),nr&&(n=nr,t=ir,ir=nr=null,rm(n),t)))for(n=0;n<t.length;n++)rm(t[n])}}function So(t,n){var a=t.stateNode;if(a===null)return null;var r=a[It]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(oa)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Xu=!1}var La=null,ku=null,Il=null;function lm(){if(Il)return Il;var t,n=ku,a=n.length,r,c="value"in La?La.value:La.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return Il=c.slice(t,1<r?1-r:void 0)}function Bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function cm(){return!1}function Bn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Fl:cm,this.isPropagationStopped=cm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),n}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Bn(Oa),Eo=P({},Oa,{view:0,detail:0}),dy=Bn(Eo),qu,Yu,To,Gl=P({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(qu=t.screenX-To.screenX,Yu=t.screenY-To.screenY):Yu=qu=0,To=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),um=Bn(Gl),py=P({},Gl,{dataTransfer:0}),my=Bn(py),gy=P({},Eo,{relatedTarget:0}),Wu=Bn(gy),vy=P({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),_y=Bn(vy),xy=P({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yy=Bn(xy),Sy=P({},Oa,{data:0}),fm=Bn(Sy),My={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ty[t])?!!n[t]:!1}function ju(){return by}var Ay=P({},Eo,{key:function(t){if(t.key){var n=My[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wy=Bn(Ay),Cy=P({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=Bn(Cy),Ry=P({},Oa,{submitter:0}),Dy=Bn(Ry),Ny=P({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),Uy=Bn(Ny),Ly=P({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=Bn(Ly),zy=P({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=Bn(zy),Iy=P({},Oa,{newState:0,oldState:0,source:0}),By=Bn(Iy),Fy=[9,13,27,32],Zu=oa&&"CompositionEvent"in window,bo=null;oa&&"documentMode"in document&&(bo=document.documentMode);var Hy=oa&&"TextEvent"in window&&!bo,dm=oa&&(!Zu||bo&&8<bo&&11>=bo),pm=" ",mm=!1;function gm(t,n){switch(t){case"keyup":return Fy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function Gy(t,n){switch(t){case"compositionend":return vm(n);case"keypress":return n.which!==32?null:(mm=!0,pm);case"textInput":return t=n.data,t===pm&&mm?null:t;default:return null}}function Vy(t,n){if(ar)return t==="compositionend"||!Zu&&gm(t,n)?(t=lm(),Il=ku=La=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dm&&n.locale!=="ko"?null:n.data;default:return null}}var Xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Xy[t.type]:n==="textarea"}function xm(t,n,a,r){nr?ir?ir.push(r):ir=[r]:nr=r,n=Vc(n,"onChange"),0<n.length&&(a=new Hl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Ao=null,wo=null;function ky(t){rv(t,0)}function Vl(t){var n=fn(t);if(tm(n))return t}function ym(t,n){if(t==="change")return n}var Sm=!1;if(oa){var Ku;if(oa){var Qu="oninput"in document;if(!Qu){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),Qu=typeof Mm.oninput=="function"}Ku=Qu}else Ku=!1;Sm=Ku&&(!document.documentMode||9<document.documentMode)}function Em(){Ao&&(Ao.detachEvent("onpropertychange",Tm),wo=Ao=null)}function Tm(t){if(t.propertyName==="value"&&Vl(wo)){var n=[];xm(n,wo,t,Gu(t)),om(ky,n)}}function qy(t,n,a){t==="focusin"?(Em(),Ao=n,wo=a,Ao.attachEvent("onpropertychange",Tm)):t==="focusout"&&Em()}function Yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(wo)}function Wy(t,n){if(t==="click")return Vl(n)}function jy(t,n){if(t==="input"||t==="change")return Vl(n)}function Zy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:Zy;function Co(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!oe.call(n,c)||!ni(t[c],n[c]))return!1}return!0}function Ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,n){var a=bm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=bm(a)}}function wm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?wm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ju(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ju(t.document)}return n}function $u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ky=oa&&"documentMode"in document&&11>=document.documentMode,sr=null,tf=null,Ro=null,ef=!1;function Rm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ef||sr==null||sr!==Ju(r)||(r=sr,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ro&&Co(Ro,r)||(Ro=r,r=Vc(tf,"onSelect"),0<r.length&&(n=new Hl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=sr)))}function vs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var rr={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},nf={},Dm={};oa&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function _s(t){if(nf[t])return nf[t];if(!rr[t])return t;var n=rr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dm)return nf[t]=n[a];return t}var Nm=_s("animationend"),Um=_s("animationiteration"),Lm=_s("animationstart"),Qy=_s("transitionrun"),Jy=_s("transitionstart"),$y=_s("transitioncancel"),Om=_s("transitionend"),zm=new Map,af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");af.push("scrollEnd");function bi(t,n){zm.set(t,n),Dn(n,[t])}var tS=0;function la(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ri.identifierPrefix;var a=tS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Pm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ar;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function ca(t,n){return t=Pm(t),n=Pm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],or=0,sf=0;function kl(){for(var t=or,n=sf=or=0;n<t;){var a=pi[n];pi[n++]=null;var r=pi[n];pi[n++]=null;var c=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&Im(a,c,f)}}function ql(t,n,a,r){pi[or++]=t,pi[or++]=n,pi[or++]=a,pi[or++]=r,sf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function rf(t,n,a,r){return ql(t,n,a,r),Yl(t)}function xs(t,n){return ql(t,null,null,n),Yl(t)}function Im(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Cn(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Yl(t){if(50<Qo)throw Qo=0,zc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var lr={};function eS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new eS(t,n,a,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Wl(t,n,a,r,c,f){var _=0;if(r=t,typeof r=="function")of(r)&&(_=1);else if(typeof r=="string")_=RM(t,a,fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ht:return t=Wn(31,a,n,c),t.elementType=Ht,t.lanes=f,t;case z:return ys(a.children,c,f,n);case it:_=8,c|=24;break;case nt:return t=Wn(12,a,n,c|2),t.elementType=nt,t.lanes=f,t;case st:return t=Wn(13,a,n,c),t.elementType=st,t.lanes=f,t;case J:return t=Wn(19,a,n,c),t.elementType=J,t.lanes=f,t;case re:case D:return t=c|32,t=Wn(30,a,n,t),t.elementType=D,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ut:_=10;break t;case dt:_=9;break t;case k:_=11;break t;case yt:_=14;break t;case St:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ys(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function lf(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Fm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function cf(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Hm=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var a=Hm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ae(n)},Hm.set(t,n),n)}return{value:t,source:n,stack:ae(n)}}var cr=[],ur=0,jl=null,Do=0,gi=[],vi=0,za=null,Hi=1,Gi="";function fa(t,n){cr[ur++]=Do,cr[ur++]=jl,jl=t,Do=n}function Gm(t,n,a){gi[vi++]=Hi,gi[vi++]=Gi,gi[vi++]=za,za=t;var r=Hi;t=Gi;var c=32-Cn(r)-1;r&=~(1<<c),a+=1;var f=32-Cn(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Hi=1<<32-Cn(n)+c|a<<c|r,Gi=f+t}else Hi=1<<f|a<<c|r,Gi=t}function Zl(t){t.return!==null&&(fa(t,1),Gm(t,1,0))}function uf(t){for(;t===jl;)jl=cr[--ur],cr[ur]=null,Do=cr[--ur],cr[ur]=null;for(;t===za;)za=gi[--vi],gi[vi]=null,Gi=gi[--vi],gi[vi]=null,Hi=gi[--vi],gi[vi]=null}function Vm(t,n){gi[vi++]=Hi,gi[vi++]=Gi,gi[vi++]=za,Hi=n.id,Gi=n.overflow,za=t}var _n=null,Ye=null,_e=!1,Pa=null,_i=!1,ff=Error(s(519));function Ia(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(mi(n,t)),ff}function Xm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Qt]=t,n[It]=r,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<$o.length;a++)Me($o[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),em(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),im(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||uv(n.textContent,a)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||Ia(t,!0)}function Kl(t){for(_n=t.return;_n;)switch(_n.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:_n=_n.return}}function fr(t){if(t!==_n)return!1;if(!_e)return Kl(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gh(t.type,t.memoizedProps)),a=!a),a&&Ye&&Ia(t),Kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=Rv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=Rv(t)}else n===27?(n=Ye,$a(t.type)?(t=Kh,Kh=null,Ye=t):Ye=n):Ye=_n?yi(t.stateNode.nextSibling):null;return!0}function Ss(){Ye=_n=null,_e=!1}function hf(){var t=Pa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Pa=null),t}function No(t){Pa===null?Pa=[t]:Pa.push(t)}var df=ne(null),Ms=null,ha=null;function Ba(t,n,a){Ct(df,n._currentValue),n._currentValue=a}function da(t){t._currentValue=df.current,jt(df)}function Ql(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function pf(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ql(f.return,a,t),r||(_=null);break t}f=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Ql(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),Ql(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Es(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=c.type;ni(c.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(c===A.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Pr):t=[Pr])}c=c.return}return t!==null&&pf(n,t,a,r),n.flags|=262144,t!==null}function Jl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Ms=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return km(Ms,t)}function $l(t,n){return Ms===null&&Ts(t),km(t,n)}function km(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(t===null)throw Error(s(308));ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ha=ha.next=n;return a}var nS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},iS=o.unstable_scheduleCallback,aS=o.unstable_NormalPriority,sn={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mf(){return{controller:new nS,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&iS(aS,function(){t.controller.abort()})}function qm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Lo=null;function sS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Oo=null,gf=0,bs=0,hr=null;function rS(t,n){if(Oo===null){var a=Oo=[];gf=0,bs=Uh(),hr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return gf++,n.then(Ym,Ym),n}function Ym(){if(--gf===0&&(Lo=null,Oo!==null)){hr!==null&&(hr.status="fulfilled");var t=Oo;Oo=null,bs=0,hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function oS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Wm=Tt.S;Tt.S=function(t,n){if(Fg=V(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rS(t,n),Lo!==null)for(var a=Dr;a!==null;)qm(a,Lo),a=a.next;if(a=t.types,a!==null){for(var r=Dr;r!==null;)qm(r,a),r=r.next;if(bs!==0){r=Lo,r===null&&(r=Lo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}Wm!==null&&Wm(t,n)};var As=ne(null);function vf(){var t=As.current;return t!==null?t:qe.pooledCache}function tc(t,n){n===null?Ct(As,As.current):Ct(As,n.pool)}function jm(){var t=vf();return t===null?null:{parent:sn._currentValue,pool:t}}var dr=Error(s(460)),_f=Error(s(474)),ec=Error(s(542)),nc={then:function(){}};function Zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Km(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jm(t),t}throw Cs=n,dr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,dr):a}}var Cs=null;function Qm(){if(Cs===null)throw Error(s(459));var t=Cs;return Cs=null,t}function Jm(t){if(t===dr||t===ec)throw Error(s(483))}var pr=null,zo=0;function ic(t){var n=zo;return zo+=1,pr===null&&(pr=[]),Km(pr,t,n)}function Fa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ac(t,n){throw n.$$typeof===F?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $m(t){function n(j,H){if(t){var $=j.deletions;$===null?(j.deletions=[H],j.flags|=16):$.push(H)}}function a(j,H){if(!t)return null;for(;H!==null;)n(j,H),H=H.sibling;return null}function r(j){for(var H=new Map;j!==null;)j.key===null?H.set(j.index,j):H.set(j.key,j),j=j.sibling;return H}function c(j,H){return j=ua(j,H),j.index=0,j.sibling=null,j}function f(j,H,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<H?(j.flags|=2,H):$):(j.flags|=134217730,H)):(j.flags|=1048576,H)}function _(j){return t&&j.alternate===null&&(j.flags|=134217730),j}function T(j,H,$,ft){return H===null||H.tag!==6?(H=lf($,j.mode,ft),H.return=j,H):(H=c(H,$),H.return=j,H)}function B(j,H,$,ft){var Gt=$.type;return Gt===z?(j=at(j,H,$.props.children,ft,$.key),Fa(j,$),j):H!==null&&(H.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===St&&ws(Gt)===H.type)?(H=c(H,$.props),Fa(H,$),H.return=j,H):(H=Wl($.type,$.key,$.props,null,j.mode,ft),Fa(H,$),H.return=j,H)}function Z(j,H,$,ft){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=cf($,j.mode,ft),H.return=j,H):(H=c(H,$.children||[]),H.return=j,H)}function at(j,H,$,ft,Gt){return H===null||H.tag!==7?(H=ys($,j.mode,ft,Gt),H.return=j,H):(H=c(H,$),H.return=j,H)}function ht(j,H,$){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=lf(""+H,j.mode,$),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case N:return $=Wl(H.type,H.key,H.props,null,j.mode,$),Fa($,H),$.return=j,$;case w:return H=cf(H,j.mode,$),H.return=j,H;case St:return H=ws(H),ht(j,H,$)}if(Dt(H)||lt(H))return H=ys(H,j.mode,$,null),H.return=j,H;if(typeof H.then=="function")return ht(j,ic(H),$);if(H.$$typeof===ut)return ht(j,$l(j,H),$);ac(j,H)}return null}function q(j,H,$,ft){var Gt=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Gt!==null?null:T(j,H,""+$,ft);if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return $.key===Gt?B(j,H,$,ft):null;case w:return $.key===Gt?Z(j,H,$,ft):null;case St:return $=ws($),q(j,H,$,ft)}if(Dt($)||lt($))return Gt!==null?null:at(j,H,$,ft,null);if(typeof $.then=="function")return q(j,H,ic($),ft);if($.$$typeof===ut)return q(j,H,$l(j,$),ft);ac(j,$)}return null}function et(j,H,$,ft,Gt){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return j=j.get($)||null,T(H,j,""+ft,Gt);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case N:return j=j.get(ft.key===null?$:ft.key)||null,B(H,j,ft,Gt);case w:return j=j.get(ft.key===null?$:ft.key)||null,Z(H,j,ft,Gt);case St:return ft=ws(ft),et(j,H,$,ft,Gt)}if(Dt(ft)||lt(ft))return j=j.get($)||null,at(H,j,ft,Gt,null);if(typeof ft.then=="function")return et(j,H,$,ic(ft),Gt);if(ft.$$typeof===ut)return et(j,H,$,$l(H,ft),Gt);ac(H,ft)}return null}function Rt(j,H,$,ft){for(var Gt=null,Te=null,$t=H,se=H=0,ln=null;$t!==null&&se<$.length;se++){$t.index>se?(ln=$t,$t=null):ln=$t.sibling;var Ce=q(j,$t,$[se],ft);if(Ce===null){$t===null&&($t=ln);break}t&&$t&&Ce.alternate===null&&n(j,$t),H=f(Ce,H,se),Te===null?Gt=Ce:Te.sibling=Ce,Te=Ce,$t=ln}if(se===$.length)return a(j,$t),_e&&fa(j,se),Gt;if($t===null){for(;se<$.length;se++)$t=ht(j,$[se],ft),$t!==null&&(H=f($t,H,se),Te===null?Gt=$t:Te.sibling=$t,Te=$t);return _e&&fa(j,se),Gt}for($t=r($t);se<$.length;se++)ln=et($t,j,se,$[se],ft),ln!==null&&(t&&(Ce=ln.alternate,Ce!==null&&$t.delete(Ce.key===null?se:Ce.key)),H=f(ln,H,se),Te===null?Gt=ln:Te.sibling=ln,Te=ln);return t&&$t.forEach(function(as){return n(j,as)}),_e&&fa(j,se),Gt}function qt(j,H,$,ft){if($==null)throw Error(s(151));for(var Gt=null,Te=null,$t=H,se=H=0,ln=null,Ce=$.next();$t!==null&&!Ce.done;se++,Ce=$.next()){$t.index>se?(ln=$t,$t=null):ln=$t.sibling;var as=q(j,$t,Ce.value,ft);if(as===null){$t===null&&($t=ln);break}t&&$t&&as.alternate===null&&n(j,$t),H=f(as,H,se),Te===null?Gt=as:Te.sibling=as,Te=as,$t=ln}if(Ce.done)return a(j,$t),_e&&fa(j,se),Gt;if($t===null){for(;!Ce.done;se++,Ce=$.next())Ce=ht(j,Ce.value,ft),Ce!==null&&(H=f(Ce,H,se),Te===null?Gt=Ce:Te.sibling=Ce,Te=Ce);return _e&&fa(j,se),Gt}for($t=r($t);!Ce.done;se++,Ce=$.next())Ce=et($t,j,se,Ce.value,ft),Ce!==null&&(t&&(ln=Ce.alternate,ln!==null&&$t.delete(ln.key===null?se:ln.key)),H=f(Ce,H,se),Te===null?Gt=Ce:Te.sibling=Ce,Te=Ce);return t&&$t.forEach(function(GM){return n(j,GM)}),_e&&fa(j,se),Gt}function pe(j,H,$,ft){if(typeof $=="object"&&$!==null&&$.type===z&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case N:t:{for(var Gt=$.key;H!==null;){if(H.key===Gt){if(Gt=$.type,Gt===z){if(H.tag===7){a(j,H.sibling),ft=c(H,$.props.children),Fa(ft,$),ft.return=j,j=ft;break t}}else if(H.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===St&&ws(Gt)===H.type){a(j,H.sibling),ft=c(H,$.props),Fa(ft,$),ft.return=j,j=ft;break t}a(j,H);break}else n(j,H);H=H.sibling}$.type===z?(ft=ys($.props.children,j.mode,ft,$.key),Fa(ft,$),ft.return=j,j=ft):(ft=Wl($.type,$.key,$.props,null,j.mode,ft),Fa(ft,$),ft.return=j,j=ft)}return _(j);case w:t:{for(Gt=$.key;H!==null;){if(H.key===Gt)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){a(j,H.sibling),ft=c(H,$.children||[]),ft.return=j,j=ft;break t}else{a(j,H);break}else n(j,H);H=H.sibling}ft=cf($,j.mode,ft),ft.return=j,j=ft}return _(j);case St:return $=ws($),pe(j,H,$,ft)}if(Dt($))return Rt(j,H,$,ft);if(lt($)){if(Gt=lt($),typeof Gt!="function")throw Error(s(150));return $=Gt.call($),qt(j,H,$,ft)}if(typeof $.then=="function")return pe(j,H,ic($),ft);if($.$$typeof===ut)return pe(j,H,$l(j,$),ft);ac(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,H!==null&&H.tag===6?(a(j,H.sibling),ft=c(H,$),ft.return=j,j=ft):(a(j,H),ft=lf($,j.mode,ft),ft.return=j,j=ft),_(j)):a(j,H)}return function(j,H,$,ft){try{zo=0;var Gt=pe(j,H,$,ft);return pr=null,Gt}catch($t){if($t===dr||$t===ec)throw $t;var Te=Wn(29,$t,null,j.mode);return Te.lanes=ft,Te.return=j,Te}finally{}}}var Rs=$m(!0),t0=$m(!1),Ha=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Yl(t),Im(t,null,a),n}return ql(t,r,n,a),Yl(t)}function Po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ot(t,a)}}function Sf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Mf=!1;function Io(){if(Mf){var t=hr;if(t!==null)throw t}}function Bo(t,n,a,r){Mf=!1;var c=t.updateQueue;Ha=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,Z=B.next;B.next=null,_===null?f=Z:_.next=Z,_=B;var at=t.alternate;at!==null&&(at=at.updateQueue,T=at.lastBaseUpdate,T!==_&&(T===null?at.firstBaseUpdate=Z:T.next=Z,at.lastBaseUpdate=B))}if(f!==null){var ht=c.baseState;_=0,at=Z=B=null,T=f;do{var q=T.lane&-536870913,et=q!==T.lane;if(et?(Ee&q)===q:(r&q)===q){q!==0&&q===bs&&(Mf=!0),at!==null&&(at=at.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Rt=t,qt=T;q=n;var pe=a;switch(qt.tag){case 1:if(Rt=qt.payload,typeof Rt=="function"){ht=Rt.call(pe,ht,q);break t}ht=Rt;break t;case 3:Rt.flags=Rt.flags&-65537|128;case 0:if(Rt=qt.payload,q=typeof Rt=="function"?Rt.call(pe,ht,q):Rt,q==null)break t;ht=P({},ht,q);break t;case 2:Ha=!0}}q=T.callback,q!==null&&(t.flags|=64,et&&(t.flags|=8192),et=c.callbacks,et===null?c.callbacks=[q]:et.push(q))}else et={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},at===null?(Z=at=et,B=ht):at=at.next=et,_|=q;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;et=T,T=et.next,et.next=null,c.lastBaseUpdate=et,c.shared.pending=null}}while(!0);at===null&&(B=ht),c.baseState=B,c.firstBaseUpdate=Z,c.lastBaseUpdate=at,f===null&&(c.shared.lanes=0),Za|=_,t.lanes=_,t.memoizedState=ht}}function e0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function n0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)e0(a[t],n)}var Xa=ne(null),sc=ne(0);function i0(t,n){t=_a,Ct(sc,t),Ct(Xa,n),_a=t|n.baseLanes}function Ef(){Ct(sc,_a),Ct(Xa,Xa.current)}function Tf(){_a=sc.current,jt(Xa),jt(sc)}var En=ne(null),Nn=null;function ka(t){var n=t.alternate;Ct(Tn,Tn.current&1),Ct(En,t),Nn===null&&(n===null||Xa.current!==null||n.memoizedState!==null)&&(Nn=t)}function bf(t){Ct(Tn,Tn.current),Ct(En,t),Nn===null&&(Nn=t)}function a0(t){t.tag===22?(Ct(Tn,Tn.current),Ct(En,t),Nn===null&&(Nn=t)):qa()}function qa(){Ct(Tn,Tn.current),Ct(En,En.current)}function ii(t){jt(En),Nn===t&&(Nn=null),jt(Tn)}var Tn=ne(0);function Fo(t,n){Ct(En,En.current),Ct(Tn,n)}function Af(t){jt(Tn),jt(En),Nn===t&&(Nn=null)}function rc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jh(a)||Zh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,de=null,He=null,rn=null,oc=!1,mr=!1,Ds=!1,lc=0,Ho=0,gr=null,lS=0;function en(){throw Error(s(321))}function wf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Cf(t,n,a,r,c,f){return pa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=t===null||t.memoizedState===null?G0:V0,Ds=!1,f=a(r,c),Ds=!1,mr&&(f=r0(n,a,r,c)),s0(t),f}function s0(t){Tt.H=mc;var n=He!==null&&He.next!==null;if(pa=0,rn=He=de=null,oc=!1,Ho=0,gr=null,n)throw Error(s(300));t===null||on||(t=t.dependencies,t!==null&&Jl(t)&&(on=!0))}function r0(t,n,a,r){de=t;var c=0;do{if(mr&&(gr=null),Ho=0,mr=!1,25<=c)throw Error(s(301));if(c+=1,rn=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Tt.H=gS,f=n(a,r)}while(mr);return f}function cS(){var t=Tt.H,n=t.useState()[0];return n=typeof n.then=="function"?Go(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(de.flags|=1024),n}function Rf(){var t=lc!==0;return lc=0,t}function Df(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nf(t){if(oc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}oc=!1}pa=0,rn=He=de=null,mr=!1,Ho=lc=0,gr=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?de.memoizedState=rn=t:rn=rn.next=t,rn}function an(){if(He===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=rn===null?de.memoizedState:rn.next;if(n!==null)rn=n,He=t;else{if(t===null)throw de.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},rn===null?de.memoizedState=rn=t:rn=rn.next=t}return rn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var n=Ho;return Ho+=1,gr===null&&(gr=[]),t=Km(gr,t,n),n=de,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?G0:V0),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===W)return;if(t.$$typeof===ut)return Mn(t)}throw Error(s(438,String(t)))}function Uf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cc(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=ee;return n.index++,a}function ma(t,n){return typeof n=="function"?n(t):n}function fc(t){var n=an();return Lf(n,He,t)}function Lf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=_=null,B=null,Z=n,at=!1;do{var ht=Z.lane&-536870913;if(ht!==Z.lane?(Ee&ht)===ht:(pa&ht)===ht){var q=Z.revertLane;if(q===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ht===bs&&(at=!0);else if((pa&q)===q){Z=Z.next,q===bs&&(at=!0);continue}else ht={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},B===null?(T=B=ht,_=f):B=B.next=ht,de.lanes|=q,Za|=q;ht=Z.action,Ds&&a(f,ht),f=Z.hasEagerState?Z.eagerState:a(f,ht)}else q={lane:ht,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},B===null?(T=B=q,_=f):B=B.next=q,de.lanes|=ht,Za|=ht;Z=Z.next}while(Z!==null&&Z!==n);if(B===null?_=f:B.next=T,!ni(f,t.memoizedState)&&(on=!0,at&&(a=hr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Of(t){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);ni(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function o0(t,n,a){var r=de,c=an(),f=_e;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ni((He||c).memoizedState,a);if(_&&(c.memoizedState=a,on=!0),c=c.queue,If(u0.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||_||rn!==null&&(rn.memoizedState.tag&1)!==0,vr(t?9:8,{destroy:void 0},c0.bind(null,r,c,a,n),null),t){if(r.flags|=2048,qe===null)throw Error(s(349));f||(pa&127)!==0||l0(r,n,a)}return a}function l0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=cc(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function c0(t,n,a,r){n.value=a,n.getSnapshot=r,f0(n)&&h0(t)}function u0(t,n,a){return a(function(){f0(n)&&h0(t)})}function f0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function h0(t){var n=xs(t,2);n!==null&&Qn(n,t,2)}function zf(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Ds){vn(!0);try{a()}finally{vn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},n}function d0(t,n,a,r){return t.baseState=a,Lf(t,He,typeof r=="function"?r:ma)}function uS(t,n,a,r,c){if(pc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};Tt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,p0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function p0(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=Tt.T,_={};_.types=f!==null?f.types:null,Tt.T=_;try{var T=a(c,r),B=Tt.S;B!==null&&B(_,T),m0(t,n,T)}catch(Z){Pf(t,n,Z)}finally{f!==null&&_.types!==null&&(f.types=_.types),Tt.T=f}}else try{f=a(c,r),m0(t,n,f)}catch(Z){Pf(t,n,Z)}}function m0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){g0(t,n,r)},function(r){return Pf(t,n,r)}):g0(t,n,a)}function g0(t,n,a){n.status="fulfilled",n.value=a,v0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,p0(t,a)))}function Pf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,v0(n),n=n.next;while(n!==r)}t.action=null}function v0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function _0(t,n){return n}function x0(t,n){if(_e){var a=qe.formState;if(a!==null){t:{var r=de;if(_e){if(Ye){e:{for(var c=Ye,f=_i;c.nodeType!==8;){if(!f){c=null;break e}if(c=yi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=yi(c.nextSibling),r=c.data==="F!";break t}}Ia(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_0,lastRenderedState:n},a.queue=r,a=B0.bind(null,de,r),r.dispatch=a,r=zf(!1),f=Vf.bind(null,de,!1,r.queue),r=Fn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=uS.bind(null,de,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function y0(t){var n=an();return S0(n,He,t)}function S0(t,n,a){if(n=Lf(t,n,_0)[0],t=fc(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Go(n)}catch(_){throw _===dr?ec:_}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,vr(9,{destroy:void 0},fS.bind(null,c,a),null)),[r,f,t]}function fS(t,n){t.action=n}function M0(t){var n=an(),a=He;if(a!==null)return S0(n,a,t);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function vr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=cc(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function E0(){return an().memoizedState}function hc(t,n,a,r){var c=Fn();de.flags|=t,c.memoizedState=vr(1|n,{destroy:void 0},a,r===void 0?null:r)}function dc(t,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;He!==null&&r!==null&&wf(r,He.memoizedState.deps)?c.memoizedState=vr(n,f,a,r):(de.flags|=t,c.memoizedState=vr(1|n,f,a,r))}function T0(t,n){hc(8390656,8,t,n)}function If(t,n){dc(2048,8,t,n)}function hS(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=cc(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function b0(t){var n=an().memoizedState;return hS({ref:n,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function A0(t,n){return dc(4,2,t,n)}function w0(t,n){return dc(4,4,t,n)}function C0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function R0(t,n,a){a=a!=null?a.concat([t]):null,dc(4,4,C0.bind(null,n,t),a)}function Bf(){}function D0(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&wf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function N0(t,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&wf(n,r[1]))return r[0];if(r=t(),Ds){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[r,n],r}function Ff(t,n,a){return a===void 0||(pa&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Gg(),de.lanes|=t,Za|=t,a)}function U0(t,n,a,r){return ni(a,n)?a:Xa.current!==null?(t=Ff(t,a,r),ni(t,n)||(on=!0),t):(pa&106)===0||(pa&1073741824)!==0&&(Ee&261930)===0?(on=!0,t.memoizedState=a):(t=Gg(),de.lanes|=t,Za|=t,n)}function L0(t,n,a,r,c){var f=At.p;At.p=f!==0&&8>f?f:8;var _=Tt.T,T={};T.types=_!==null?_.types:null,Tt.T=T,Vf(t,!1,n,a);try{var B=c(),Z=Tt.S;if(Z!==null&&Z(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var at=oS(B,r);Vo(t,n,at,oi(t))}else Vo(t,n,r,oi(t))}catch(ht){Vo(t,n,{then:function(){},status:"rejected",reason:ht},oi())}finally{At.p=f,_!==null&&T.types!==null&&(_.types=T.types),Tt.T=_}}function dS(){}function Hf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=O0(t).queue;L0(t,c,n,ie,a===null?dS:function(){return z0(t),a(r)})}function O0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function z0(t){var n=O0(t);n.next===null&&(n=t.alternate.memoizedState),Vo(t,n.next.queue,{},oi())}function Gf(){return Mn(Pr)}function P0(){return an().memoizedState}function I0(){return an().memoizedState}function pS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Ga(a);var r=Va(n,t,a);r!==null&&(Qn(r,n,a),Po(r,n,a)),n={cache:mf()},t.payload=n;return}n=n.return}}function mS(t,n,a){var r=oi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pc(t)?F0(n,a):(a=rf(t,n,a,r),a!==null&&(Qn(a,t,r),H0(a,n,r)))}function B0(t,n,a){var r=oi();Vo(t,n,a,r)}function Vo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pc(t))F0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(c.hasEagerState=!0,c.eagerState=T,ni(T,_))return ql(t,n,c,0),qe===null&&kl(),!1}catch{}finally{}if(a=rf(t,n,c,r),a!==null)return Qn(a,t,r),H0(a,n,r),!0}return!1}function Vf(t,n,a,r){if(r={lane:2,revertLane:Uh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(n)throw Error(s(479))}else n=rf(t,a,r,2),n!==null&&Qn(n,t,2)}function pc(t){var n=t.alternate;return t===de||n!==null&&n===de}function F0(t,n){mr=oc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function H0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ot(t,a)}}var mc={readContext:Mn,use:uc,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},G0={readContext:Mn,use:uc,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:T0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hc(4194308,4,C0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hc(4194308,4,t,n)},useInsertionEffect:function(t,n){hc(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(Ds){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var c=a(n);if(Ds){vn(!0);try{a(n)}finally{vn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=mS.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=zf(t);var n=t.queue,a=B0.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Bf,useDeferredValue:function(t,n){var a=Fn();return Ff(a,t,n)},useTransition:function(){var t=zf(!1);return t=L0.bind(null,de,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=de,c=Fn();if(_e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Ee&127)!==0||l0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,T0(u0.bind(null,r,f,t),[t]),r.flags|=2048,vr(9,{destroy:void 0},c0.bind(null,r,f,a,n),null),a},useId:function(){var t=Fn(),n=qe.identifierPrefix;if(_e){var a=Gi,r=Hi;a=(r&~(1<<32-Cn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=lc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=lS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gf,useFormState:x0,useActionState:x0,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vf.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Uf,useCacheRefresh:function(){return Fn().memoizedState=pS.bind(null,de)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},V0={readContext:Mn,use:uc,useCallback:D0,useContext:Mn,useEffect:If,useImperativeHandle:R0,useInsertionEffect:A0,useLayoutEffect:w0,useMemo:N0,useReducer:fc,useRef:E0,useState:function(){return fc(ma)},useDebugValue:Bf,useDeferredValue:function(t,n){var a=an();return U0(a,He.memoizedState,t,n)},useTransition:function(){var t=fc(ma)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:o0,useId:P0,useHostTransitionStatus:Gf,useFormState:y0,useActionState:y0,useOptimistic:function(t,n){var a=an();return d0(a,He,t,n)},useMemoCache:Uf,useCacheRefresh:I0,useEffectEvent:b0},gS={readContext:Mn,use:uc,useCallback:D0,useContext:Mn,useEffect:If,useImperativeHandle:R0,useInsertionEffect:A0,useLayoutEffect:w0,useMemo:N0,useReducer:Of,useRef:E0,useState:function(){return Of(ma)},useDebugValue:Bf,useDeferredValue:function(t,n){var a=an();return He===null?Ff(a,t,n):U0(a,He.memoizedState,t,n)},useTransition:function(){var t=Of(ma)[0],n=an().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:o0,useId:P0,useHostTransitionStatus:Gf,useFormState:M0,useActionState:M0,useOptimistic:function(t,n){var a=an();return He!==null?d0(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:I0,useEffectEvent:b0};function Xf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=oi(),c=Ga(r);c.payload=n,a!=null&&(c.callback=a),n=Va(t,c,r),n!==null&&(Qn(n,t,r),Po(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=oi(),c=Ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Va(t,c,r),n!==null&&(Qn(n,t,r),Po(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),r=Ga(a);r.tag=2,n!=null&&(r.callback=n),n=Va(t,r,a),n!==null&&(Qn(n,t,a),Po(n,t,a))}};function X0(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Co(a,r)||!Co(c,f):!0}function k0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&kf.enqueueReplaceState(n,n.state,null)}function Ns(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function q0(t){Xl(t)}function Y0(t){console.error(t)}function W0(t){Xl(t)}function gc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function j0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qf(t,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){gc(t,n)},a}function Z0(t){return t=Ga(t),t.tag=3,t}function K0(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){j0(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){j0(n,a,r),typeof c!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function vS(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Es(n,a,c,!0),a=En.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Nn===null?Ic():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===nc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Rh(t,r,c)),!1;case 22:return a.flags|=65536,r===nc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Rh(t,r,c)),!1}throw Error(s(435,a.tag))}return Rh(t,r,c),Ic(),!1}if(_e)return n=En.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ff&&(t=Error(s(422),{cause:r}),No(mi(t,a)))):(r!==ff&&(n=Error(s(423),{cause:r}),No(mi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=mi(r,a),c=qf(t.stateNode,r,c),Sf(t,c),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=mi(f,a),Ko===null?Ko=[f]:Ko.push(f),nn!==4&&(nn=2),n===null)return!0;r=mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=qf(a.stateNode,r,t),Sf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ka===null||!Ka.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Z0(c),K0(c,t,a,r),Sf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Yf=Error(s(461)),on=!1;function hn(t,n,a,r){n.child=t===null?t0(n,null,a,r):Rs(n,t.child,a,r)}function Q0(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var T in r)T!=="ref"&&(_[T]=r[T])}else _=r;return Ts(n),r=Cf(t,n,a,_,f,c),T=Rf(),t!==null&&!on?(Df(t,n,c),ga(t,n,c)):(_e&&T&&Zl(n),n.flags|=1,hn(t,n,r,c),n.child)}function J0(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!of(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,$0(t,n,f,r,c)):(t=Wl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!th(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(_,r)&&t.ref===n.ref)return ga(t,n,c)}return n.flags|=1,t=ua(f,r),t.ref=n.ref,t.return=n,n.child=t}function $0(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Co(f,r)&&t.ref===n.ref)if(on=!1,n.pendingProps=r=f,th(t,c))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,ga(t,n,c)}return Wf(t,n,a,r,c)}function tg(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return eg(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tc(n,f!==null?f.cachePool:null),f!==null?i0(n,f):Ef(),a0(n);else return r=n.lanes=536870912,eg(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(tc(n,f.cachePool),i0(n,f),qa(),n.memoizedState=null):(t!==null&&tc(n,null),Ef(),qa());return hn(t,n,c,a),n.child}function Xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function eg(t,n,a,r,c){var f=vf();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&tc(n,null),Ef(),a0(n),t!==null&&Es(t,n,r,!0),n.childLanes=c,null}function vc(t,n){return n=_c({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ng(t,n,a){return Rs(n,t.child,null,a),t=vc(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function _S(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=vc(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Xo(null,t);if(bf(n),(t=Ye)?(t=Cv(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(t),a.return=n,n.child=a,_n=n,Ye=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return vc(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(bf(n),c)if(n.flags&256)n.flags&=-257,n=ng(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||Es(t,n,a,!1),c=(a&t.childLanes)!==0,on||c){if(Xa.current===null){if(r=qe,r!==null&&(_=Q(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,xs(t,_),Qn(r,t,_),Yf;Ic()}n=ng(t,n,a)}else t=f.treeContext,Ye=yi(_.nextSibling),_n=n,_e=!0,Pa=null,_i=!1,t!==null&&Vm(n,t),n=vc(n,r),n.flags|=134221824;return n}return t=ua(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _r(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Wf(t,n,a,r,c){return Ts(n),a=Cf(t,n,a,r,void 0,c),r=Rf(),t!==null&&!on?(Df(t,n,c),ga(t,n,c)):(_e&&r&&Zl(n),n.flags|=1,hn(t,n,a,c),n.child)}function ig(t,n,a,r,c,f){return Ts(n),n.updateQueue=null,a=r0(n,r,a,c),s0(t),r=Rf(),t!==null&&!on?(Df(t,n,f),ga(t,n,f)):(_e&&r&&Zl(n),n.flags|=1,hn(t,n,a,f),n.child)}function ag(t,n,a,r,c){if(Ts(n),n.stateNode===null){var f=lr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=kf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},xf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):lr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Xf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&kf.enqueueReplaceState(f,f.state,null),Bo(n,r,f,c),Io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Ns(a,T);f.props=B;var Z=f.context,at=a.contextType;_=lr,typeof at=="object"&&at!==null&&(_=Mn(at));var ht=a.getDerivedStateFromProps;at=typeof ht=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,at||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Z!==_)&&k0(n,f,r,_),Ha=!1;var q=n.memoizedState;f.state=q,Bo(n,r,f,c),Io(),Z=n.memoizedState,T||q!==Z||Ha?(typeof ht=="function"&&(Xf(n,a,ht,r),Z=n.memoizedState),(B=Ha||X0(n,a,B,r,q,Z,_))?(at||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Z),f.props=r,f.state=Z,f.context=_,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,yf(t,n),_=n.memoizedProps,at=Ns(a,_),f.props=at,ht=n.pendingProps,q=f.context,Z=a.contextType,B=lr,typeof Z=="object"&&Z!==null&&(B=Mn(Z)),T=a.getDerivedStateFromProps,(Z=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ht||q!==B)&&k0(n,f,r,B),Ha=!1,q=n.memoizedState,f.state=q,Bo(n,r,f,c),Io();var et=n.memoizedState;_!==ht||q!==et||Ha||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof T=="function"&&(Xf(n,a,T,r),et=n.memoizedState),(at=Ha||X0(n,a,at,r,q,et,B)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,et,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,et,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=B,r=at):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,_r(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Rs(n,t.child,null,c),n.child=Rs(n,null,a,c)):hn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ga(t,n,c),t}function sg(t,n,a,r){return Ss(),n.flags|=256,hn(t,n,a,r),n.child}var jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(t){return{baseLanes:t,cachePool:jm()}}function Kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function rg(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Tn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(c?ka(n):qa(),(t=Ye)?(t=Cv(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(t),a.return=n,n.child=a,_n=n,Ye=null)):t=null,t===null)throw Ia(n);return Zh(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(qa(),c=n.mode,f=_c({mode:"hidden",children:f},c),r=ys(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=Zf(a),r.childLanes=Kf(t,_,a),n.memoizedState=jf,Xo(null,r)):(ka(n),Qf(n,f))}var T=t.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return xS(t,n,f,_,r,B,T,a)}return c?(qa(),c=r.fallback,f=n.mode,T=t.child,B=T.sibling,r=ua(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,B!==null?c=ua(B,c):(c=ys(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Xo(null,r),r=n.child,c=t.child.memoizedState,c===null?c=Zf(a):(f=c.cachePool,f!==null?(T=sn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=jm(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=Kf(t,_,a),n.memoizedState=jf,Xo(t.child,r)):(ka(n),a=t.child,t=a.sibling,a=ua(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Qf(t,n){return n=_c({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _c(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function xc(t,n,a){return Rs(n,t.child,null,a),t=Qf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function xS(t,n,a,r,c,f,_,T){if(a)return n.flags&256?(ka(n),n.flags&=-257,xc(t,n,T)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,null):(qa(),f=c.fallback,_=n.mode,c=_c({mode:"visible",children:c.children},_),f=ys(f,_,T,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Rs(n,t.child,null,T),c=n.child,c.memoizedState=Zf(T),c.childLanes=Kf(t,r,T),n.memoizedState=jf,Xo(null,c));if(ka(n),Zh(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,No({value:c,source:null,stack:null})),xc(t,n,T)}if(on||Es(t,n,T,!1),r=(T&t.childLanes)!==0,on||r){if(Xa.current!==null)return xc(t,n,T);if(r=qe,r!==null&&(c=Q(r,T),c!==0&&c!==_.retryLane))throw _.retryLane=c,xs(t,c),Qn(r,t,c),Yf;return jh(f)||Ic(),xc(t,n,T)}return jh(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ye=yi(f.nextSibling),_n=n,_e=!0,Pa=null,_i=!1,t!==null&&Vm(n,t),n=Qf(n,c.children),n.flags|=134221824,n)}function og(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ql(t.return,n,a)}function lg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&rc(a)===null&&(n=t),t=t.sibling}return n}function yc(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Jf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function $f(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=Tn.current;if(n.flags&128)return Fo(n,_),null;var T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,Fo(n,_),c==="backwards"&&t!==null?(Jf(t),hn(t,n,r,a),Jf(t)):hn(t,n,r,a),r=_e?Do:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,a,n);else if(t.tag===19)og(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=lg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Jf(n)),yc(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&rc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}yc(n,!0,a,null,f,r);break;case"together":yc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=lg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),yc(n,!1,c,a,f,r)}return n.child}function cg(t,n,a){var r=n.pendingProps;return Ba(n,n.type,r.value),hn(t,n,r.children,a),n.child}function ga(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Es(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function th(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function yS(t,n,a){switch(n.tag){case 3:tt(n,n.stateNode.containerInfo),Ba(n,sn,t.memoizedState.cache),Ss();break;case 27:case 5:xt(n);break;case 4:tt(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,bf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ka(n),n.flags|=128,null;r=Es(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?rg(t,n,a):(ka(n),t=ga(t,n,a),t!==null?t.sibling:null)}ka(n);break;case 19:if(n.flags&128)return $f(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Es(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return $f(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Fo(n,Tn.current),r)break;return null;case 22:return n.lanes=0,tg(t,n,a,n.pendingProps);case 24:Ba(n,sn,t.memoizedState.cache)}return ga(t,n,a)}function ug(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!th(t,a)&&(n.flags&128)===0)return on=!1,yS(t,n,a);on=(t.flags&131072)!==0}else on=!1,_e&&(n.flags&1048576)!==0&&Gm(n,Do,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")of(t)?(r=Ns(t,r),n.tag=1,n=ag(null,n,t,r,a)):(n.tag=0,n=Wf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===k){n.tag=11,n=Q0(null,n,t,r,a);break t}else if(c===yt){n.tag=14,n=J0(null,n,t,r,a);break t}else if(c===ut){n.tag=10,n.type=t,n=cg(null,n,a);break t}}throw n=wt(t)||t,Error(s(306,n,""))}}return n;case 0:return Wf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ns(r,n.pendingProps),ag(t,n,r,c,a);case 3:t:{if(tt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,yf(t,n),Bo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ba(n,sn,r),r!==f.cache&&pf(n,[sn],a,!0),Io(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=sg(t,n,r,a);break t}else if(r!==c){c=mi(Error(s(424)),n),No(c),n=sg(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=yi(t.firstChild),_n=n,_e=!0,Pa=null,_i=!0,a=t0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ss(),r===c){n=ga(t,n,a);break t}hn(t,n,r,a)}n=n.child}return n;case 26:return _r(t,n),t===null?(a=zv(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=pv(n.type,n.pendingProps,O.current,n)):n.memoizedState=zv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return xt(n),t===null&&_e&&(r=n.stateNode=Nv(n.type,n.pendingProps,O.current),_n=n,_i=!0,c=Ye,$a(n.type)?(Kh=c,Ye=yi(r.firstChild)):Ye=c),hn(t,n,n.pendingProps.children,a),_r(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((c=r=Ye)&&(r=pM(r,n.type,n.pendingProps,_i),r!==null?(n.stateNode=r,_n=n,Ye=yi(r.firstChild),_i=!1,c=!0):c=!1),c||Ia(n)),xt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Gh(c,f)?r=null:_!==null&&Gh(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Cf(t,n,cS,null,null,a),Pr._currentValue=c),_r(t,n),hn(t,n,r,a),n.child;case 6:return t===null&&_e&&((t=a=Ye)&&(a=mM(a,n.pendingProps,_i),a!==null?(n.stateNode=a,_n=n,Ye=null,t=!0):t=!1),t||Ia(n)),null;case 13:return rg(t,n,a);case 4:return tt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Rs(n,null,r,a):hn(t,n,r,a),n.child;case 11:return Q0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,_r(t,n),hn(t,n,r,a),n.child;case 8:return hn(t,n,n.pendingProps.children,a),n.child;case 12:return hn(t,n,n.pendingProps.children,a),n.child;case 10:return cg(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Ts(n),c=Mn(c),r=r(c),n.flags|=1,hn(t,n,r,a),n.child;case 14:return J0(t,n,n.type,n.pendingProps,a);case 15:return $0(t,n,n.type,n.pendingProps,a);case 19:return $f(t,n,a);case 31:return _S(t,n,a);case 22:return tg(t,n,a,n.pendingProps);case 24:return Ts(n),r=Mn(sn),t===null?(c=vf(),c===null&&(c=qe,f=mf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},xf(n),Ba(n,sn,c)):((t.lanes&a)!==0&&(yf(t,n),Bo(n,null,null,a),Io()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ba(n,sn,r)):(r=f.cache,Ba(n,sn,r),r!==c.cache&&pf(n,[sn],a,!0))),hn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Zl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:_r(t,n),hn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function va(t){t.flags|=4}function eh(t,n,a,r,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?Fv(n,r):Fv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(qg())t.flags|=8192;else throw Cs=nc,_f}else t.flags&=-16777217}function fg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hv(n))if(qg())t.flags|=8192;else throw Cs=nc,_f}function Sc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ul():536870912,t.lanes|=n,Er|=n)}function ko(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function SS(t,n,a){var r=n.pendingProps;switch(uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),da(sn),mt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fr(n)?va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hf())),We(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(va(n),f!==null?(We(n),fg(n,f)):(We(n),eh(n,c,null,r,a))):f?f!==t.memoizedState?(va(n),We(n),fg(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&va(n),We(n),eh(n,c,t,r,a)),null;case 27:if(pt(n),a=O.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&va(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),n.subtreeFlags&=-33554433,null}t=fe.current,fr(n)?Xm(n):(t=Nv(c,r,a),n.stateNode=t,va(n))}return We(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&va(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),n.subtreeFlags&=-33554433,null}if(f=fe.current,fr(n))Xm(n);else{var _=el(O.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[Qt]=n,f[It]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(An(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&va(n)}}return We(n),n.subtreeFlags&=-33554433,eh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&va(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=O.current,fr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=_n,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Qt]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||uv(t.nodeValue,a)),t||Ia(n,!0)}else t=el(t).createTextNode(r),t[Qt]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=fr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Qt]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return We(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=fr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Qt]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=hf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Sc(n,n.updateQueue),We(n),null);case 4:return mt(),t===null&&Ph(n.stateNode.containerInfo),n.flags|=67108864,We(n),null;case 10:return da(n.type),We(n),null;case 19:if(Af(n),r=n.memoizedState,r===null)return We(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)ko(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=rc(t),f!==null){for(n.flags|=128,ko(r,!1),t=f.updateQueue,n.updateQueue=t,Sc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bm(a,t),a=a.sibling;return Fo(n,Tn.current&1|2),_e&&fa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&V()>Lc&&(n.flags|=128,c=!0,ko(r,!1),n.lanes=4194304)}else{if(!c)if(t=rc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Sc(n,t),ko(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!_e)return We(n),null}else 2*V()-r.renderingStartTime>Lc&&a!==536870912&&(n.flags|=128,c=!0,ko(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=V(),t.sibling=null,f=Tn.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||_e?Fo(n,f):(a=f,Ct(En,n),Ct(Tn,a),Nn===null&&(Nn=n)),_e&&fa(n,r.treeForkCount),t}return We(n),null;case 22:case 23:return ii(n),Tf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Sc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&jt(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(sn),We(n),null;case 25:return null;case 30:return n.flags|=33554432,We(n),null}throw Error(s(156,n.tag))}function MS(t,n){switch(uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(sn),mt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Af(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return mt(),null;case 10:return da(n.type),null;case 22:case 23:return ii(n),Tf(),t!==null&&jt(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(sn),null;case 25:return null;default:return null}}function hg(t,n){switch(uf(n),n.tag){case 3:da(sn),mt();break;case 26:case 27:case 5:pt(n);break;case 4:mt();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Af(n);break;case 10:da(n.type);break;case 22:case 23:ii(n),Tf(),t!==null&&jt(As);break;case 24:da(sn)}}function qo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(T){Pe(n,n.return,T)}}function Ya(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var B=a,Z=T;try{Z()}catch(at){Pe(c,B,at)}}}r=r.next}while(r!==f)}}catch(at){Pe(n,n.return,at)}}function dg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{n0(n,a)}catch(r){Pe(t,t.return,r)}}}function pg(t,n,a){a.props=Ns(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Pe(t,n,r)}}function Vi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,f=la(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=Sv(f)),r=c.ref;break;case 7:if(t.stateNode===null){var _=new li(t);m(t.child,!1,hM,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(T){Pe(t,n,T)}}function bn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function Mc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)wv(t.stateNode,n[a])}function mg(t){for(var n=t.return;n!==null&&(ih(n)&&wv(t.stateNode,n.stateNode),!nh(n));)n=n.return}function Yo(t){for(var n=t.return;n!==null&&(ih(n)&&dM(t.stateNode,n.stateNode),!nh(n));)n=n.return}function nh(t){return t.tag===5||t.tag===3||t.tag===27}function ih(t){return t&&t.tag===7&&t.stateNode!==null}function ah(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function sh(t,n,a){try{var r=t.stateNode;jS(r,t.type,a,n),r[It]=n}catch(c){Pe(t,t.return,c)}}function gg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function rh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi)),Mc(t,r),Ne=!0;else if(c!==4&&(c===27&&(Mc(t,r),r=null,$a(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(oh(t,n,a,r),t=t.sibling;t!==null;)oh(t,n,a,r),t=t.sibling}function Ec(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Mc(t,r),Ne=!0;else if(c!==4&&(c===27&&(Mc(t,r),r=null,$a(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Ec(t,n,a,r),t=t.sibling;t!==null;)Ec(t,n,a,r),t=t.sibling}function vg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,r,a),n[Qt]=t,n[It]=a}catch(f){Pe(t,t.return,f)}}var Tc=!1,ai=null;function _g(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Tc=!0)}var Xi=null;function xg(){var t=Xi;return Xi=null,t}var jn=0;function xr(t,n,a,r,c){return jn=0,yg(t.child,n,a,r,c)}function yg(t,n,a,r,c){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var T=kh(_);r.push(T),T.view&&(f=!0)}else f||kh(_).view&&(f=!0);Tc=!0,xv(_,jn===0?n:n+"_"+jn,a),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||yg(t.child,n,a,r,c)&&(f=!0));t=t.sibling}return f}function ki(t,n){for(;t!==null;)t.tag===5?yv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ki(t.child,n)),t=t.sibling}function bc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(bc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ca(n.default,n.share),n!=="none"&&(xr(t,a,n,null,!1)||ki(t.child,!1))}t=t.sibling}}function lh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=la(r,a),f=ca(r.default,a.paired?r.share:r.enter);f!=="none"?xr(t,c,f,null,!1)?(bc(t),a.paired||n||wr(t,r.onEnter)):ki(t.child,!1):bc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)lh(t,n),t=t.sibling;else bc(t)}function ch(t){if(ai!==null&&ai.size!==0){var n=ai;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=ca(a.default,a.share);if(f!=="none"&&(xr(t,r,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,wr(t,a.onShare)):ki(t.child,!1)),n.delete(r),n.size===0)break}}}ch(t)}t=t.sibling}}}function uh(t){if(t.tag===30){var n=t.memoizedProps,a=la(n,t.stateNode),r=ai!==null?ai.get(a):void 0,c=ca(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(xr(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,ai.delete(a),wr(t,n.onShare)):wr(t,n.onExit):ki(t.child,!1)),ai!==null&&ch(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)uh(t),t=t.sibling;else ai!==null&&ch(t)}function Sg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=la(n,t.stateNode);n=ca(n.default,n.update),t.flags&=-5,n!=="none"&&xr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Sg(t);t=t.sibling}}function fh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ki(t.child,!1))}fh(t)}t=t.sibling}}function Ac(t){if(t.tag===30)t.stateNode.paired=null,ki(t.child,!1),fh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ac(t),t=t.sibling;else fh(t)}function Mg(t){for(t=t.child;t!==null;)t.tag===30?ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&Mg(t),t=t.sibling}function hh(t,n,a,r,c,f,_){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&jn<f.length){var Z=f[jn],at=kh(B);(Z.view||at.view)&&(T=!0);var ht;if(ht=(t.flags&4)===0)if(at.clip)ht=!0;else{ht=Z.rect;var q=at.rect;ht=ht.y!==q.y||ht.x!==q.x||ht.height!==q.height||ht.width!==q.width}ht&&(t.flags|=4),at.abs?at=!Z.abs:(Z=Z.rect,at=at.rect,at=Z.height!==at.height||Z.width!==at.width),at&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&xv(B,jn===0?a:a+"_"+jn,c),T&&(t.flags&4)!==0||(Xi===null&&(Xi=[]),Xi.push(B,jn===0?r:r+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:hh(t,n.child,a,r,c,f,_)&&(T=!0));n=n.sibling}return T}function Eg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=la(a,r),f=ca(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var T=t.child;jn=0,c=hh(r,T,c,c,f,_,!1),(t.flags&4)!==0&&c&&wr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Eg(t);t=t.sibling}}var xn=!1,Le=!1,qi=!1,dh=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,yn=null,Yi=!1,Wo=!1,wc=!1,ph=!1;function ES(t,n,a){if(t=t.containerInfo,Fh=Ir,t=Cm(t),$u(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var T=0,B=-1,Z=-1,at=0,ht=0,q=t,et=null;e:for(;;){for(var Rt;q!==r||f!==0&&q.nodeType!==3||(B=T+f),q!==_||c!==0&&q.nodeType!==3||(Z=T+c),q.nodeType===3&&(T+=q.nodeValue.length),(Rt=q.firstChild)!==null;)et=q,q=Rt;for(;;){if(q===t)break e;if(et===r&&++at===f&&(B=T),et===_&&++ht===c&&(Z=T),(Rt=q.nextSibling)!==null)break;q=et,et=q.parentNode}q=Rt}r=B===-1||Z===-1?null:{start:B,end:Z}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hh={focusedElem:t,selectionRange:r},Ir=!1,a=(a&335544064)===a,yn=n,n=a?9270:1024;yn!==null;){if(t=yn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&uh(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&_g(t),Cc(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&uh(r),Cc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&_g(t),Cc(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,yn=r):(a&&Sg(t),Cc(a))}}ai=null}function Cc(t){for(;yn!==null;){var n=yn,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=Ns(n.type,c);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){Pe(n,n.return,T)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Wh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Wh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=la(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=ca(c.default,c.update),c!=="none"&&xr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,yn=r;break}yn=n.return}}function bg(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),r&4&&qo(5,a);break;case 1:if(Wi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Pe(a,a.return,_)}else{var c=Ns(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Pe(a,a.return,_)}}r&64&&dg(a),r&512&&Vi(a,a.return);break;case 3:if(Wi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{n0(t,n)}catch(_){Pe(a,a.return,_)}}break;case 27:n===null&&r&4&&vg(a);case 26:case 5:Wi(t,a),n===null&&r&4&&ah(a),r&512&&Vi(a,a.return);break;case 12:Wi(t,a);break;case 31:Wi(t,a),r&4&&Rg(t,a);break;case 13:Wi(t,a),r&4&&Dg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=zS.bind(null,a),gM(t,a))));break;case 22:if(r=a.memoizedState!==null||xn,!r){var f=n!==null&&n.memoizedState!==null||Le;n=xn,c=Le,xn=r,(Le=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(t,a,r)):Wi(t,a),xn=n,Le=c}break;case 30:Wi(t,a),r&512&&Vi(a,a.return);break;case 7:r&512&&Vi(a,a.return);default:Wi(t,a)}}function mh(t,n){for(t=t.child;t!==null;)Ag(t,n),t=t.sibling}function Ag(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(B){Pe(t,t.return,B)}gh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ne=!0}catch(B){Pe(t,t.return,B)}break;case 18:try{var T=t.stateNode;n?_v(T,!0):_v(t.stateNode,!1)}catch(B){Pe(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&mh(t,n);break;default:mh(t,n)}}function gh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:Ag(a,r);break t;case 22:a.memoizedState===null&&gh(a,r);break t;default:gh(a,r)}}t=t.sibling}}function wg(t){var n=t.alternate;n!==null&&(t.alternate=null,wg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ae(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,Zn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)Cg(t,n,a),a=a.sibling}function Cg(t,n,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:Le||bn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Le&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||bn(a,n),Yo(a);var r=Ke,c=Zn;$a(a.type)&&(Ke=a.stateNode,Zn=!1),Ai(t,n,a),Uv(a.stateNode,a.type,a.memoizedProps),Ke=r,Zn=c;break;case 5:Le||bn(a,n),Yo(a);case 6:if(a.tag===6&&Yo(a),r=Ke,c=Zn,Ke=null,Ai(t,n,a),Ke=r,Zn=c,Ke!==null)if(Zn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode),Ne=!0}catch(f){Pe(a,n,f)}else try{Ke.removeChild(a.stateNode),Ne=!0}catch(f){Pe(a,n,f)}break;case 18:Ke!==null&&(Zn?(t=Ke,vv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Br(t)):vv(Ke,a.stateNode));break;case 4:r=Ke,c=Zn,Ke=a.stateNode.containerInfo,Zn=!0,Ai(t,n,a),Ke=r,Zn=c;break;case 0:case 11:case 14:case 15:Ya(2,a,n),Le||Ya(4,a,n),Ai(t,n,a);break;case 1:Le||(bn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&pg(a,n,r)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:Le=(r=Le)||a.memoizedState!==null,Ai(t,n,a),Le=r;break;case 30:bn(a,n),Ai(t,n,a);break;case 7:Le||bn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function Rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Br(t)}catch(a){Pe(n,n.return,a)}}}function Dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Br(t)}catch(a){Pe(n,n.return,a)}}function TS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Tg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Tg),n;default:throw Error(s(435,t.tag))}}function Rc(t,n){var a=TS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=PS.bind(null,t,r);r.then(c,c)}})}function Hn(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],_=t,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if($a(B.type)){Ke=B.stateNode,Zn=!1;break t}break;case 5:Ke=B.stateNode,Zn=!1;break t;case 3:case 4:Ke=B.stateNode.containerInfo,Zn=!0;break t}B=B.return}if(Ke===null)throw Error(s(160));Cg(_,T,f),Ke=null,Zn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ng(n,t,a),n=n.sibling}var wi=null;function Ng(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}Hn(n,t,a),Gn(t),c&4&&(Ya(3,t,t.return),qo(3,t),Ya(5,t,t.return));break;case 1:Hn(n,t,a),Gn(t),c&512&&(Le||r===null||bn(r,r.return)),c&64&&xn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=wi,Hn(n,t,a),Gn(t),c&512&&(Le||r===null||bn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(xn)t.stateNode=pv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Wt]||r[Qt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),An(r,n,a),r[Qt]=t,ue(r),n=r;break t;case"link":if(f=Bv("link","href",c).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}r=c.createElement(n),An(r,n,a),c.head.appendChild(r);break;case"meta":if(f=Bv("meta","content",c).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}r=c.createElement(n),An(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Qt]=t,ue(r),n=r}t.stateNode=n}else xn||td(f,t.type,t.stateNode);else t.stateNode=Iv(f,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Le||n.parentNode.removeChild(n)):c.count--,a===null?xn||td(f,t.type,t.stateNode):Iv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&sh(t,t.memoizedProps,r.memoizedProps);break;case 27:Hn(n,t,a),Gn(t),c&512&&(Le||r===null||bn(r,r.return)),r!==null&&c&4&&sh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=qi,qi=!1,Hn(n,t,a),qi=f,Gn(t),c&512&&(Le||r===null||bn(r,r.return)),t.flags&32){n=t.stateNode;try{er(n,""),Ne=!0}catch(at){Pe(t,t.return,at)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,sh(t,n,r!==null?r.memoizedProps:n)),c&1024&&(dh=!0);break;case 6:if(Hn(n,t,a),Gn(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ne=!0}catch(at){Pe(t,t.return,at)}}break;case 3:if(Ne=!1,kc=null,f=wi,wi=nl(n.containerInfo),Hn(n,t,a),wi=f,Gn(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Br(n.containerInfo)}catch(at){Pe(t,t.return,at)}dh&&(dh=!1,Ug(t)),Ne=!1;break;case 4:c=qi,qi=xn,r=Jp(),f=wi,wi=nl(t.stateNode.containerInfo),Hn(n,t,a),Gn(t),wi=f,Ne&&Wo&&(wc=!0),Ne=r,qi=c;break;case 12:Hn(n,t,a),Gn(t);break;case 31:Hn(n,t,a),Gn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Rc(t,n)));break;case 13:Hn(n,t,a),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Uc=V()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Rc(t,n)));break;case 22:f=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var T=xn,B=Le,Z=qi;xn=T||f,qi=Z||f,Le=B||_,Hn(n,t,a),Le=B,qi=Z,xn=T,Gn(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||xn||Le||(n=_||Le,a=xn,r=Le,xn=f||xn,Le=n,Wa(t,2),xn=a,Le=r),!f&&qi||mh(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Rc(t,a))));break;case 19:Hn(n,t,a),Gn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Rc(t,n)));break;case 30:c&512&&(Le||r===null||bn(r,r.return)),c=Jp(),f=Wo,_=(a&335544064)===a,T=t.memoizedProps,Wo=_&&ca(T.default,T.update)!=="none",Hn(n,t,a),Gn(t),_&&r!==null&&Ne&&(t.flags|=4),Wo=f,Ne=c;break;case 21:break;case 7:c&512&&(Le||r===null||bn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Hn(n,t,a),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(gg(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(ih(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(nh(c))break;c=c.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,B=rh(t);Ec(t,B,T,_);break;case 5:var Z=a.stateNode;a.flags&32&&(er(Z,""),a.flags&=-33);var at=rh(t);Ec(t,at,Z,_);break;case 3:case 4:var ht=a.stateNode.containerInfo,q=rh(t);oh(t,q,ht,_);break;default:throw Error(s(161))}}catch(et){Pe(t,t.return,et)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ug(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ir=!0,n.reset(),Ir=!1),t=t.sibling}}function yr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Lg(n,t),n=n.sibling;else Eg(n)}function Lg(t,n){var a=t.alternate;if(a===null)lh(t,!1);else switch(t.tag){case 3:if(ph=Yi=!1,xg(),yr(n,t),!Yi&&!wc){if(t=Xi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];yv(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ph=!0}Xi=null;break;case 5:yr(n,t);break;case 4:r=Yi,Yi=!1,yr(n,t),Yi&&(wc=!0),Yi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?lh(t,!1):yr(n,t));break;case 30:r=Yi,c=xg(),Yi=!1,yr(n,t),Yi&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=la(f,_),_=la(a.memoizedProps,_);var T=ca(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,jn=0,n=hh(t,a,n,_,T,f,!0),jn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(wr(t,t.memoizedProps.onUpdate),Xi=c):c!==null&&(c.push.apply(c,Xi),Xi=c),Yi=(t.flags&32)!==0?!0:r;break;default:yr(n,t)}}function Wi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bg(t,n.alternate,n),n=n.sibling}function Wa(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ya(4,a,a.return),Wa(a,r);break;case 1:bn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&pg(a,a.return,c),Wa(a,r);break;case 27:(r&2)!==0&&Uv(a.stateNode,a.type,a.memoizedProps);case 5:bn(a,a.return),a.tag!==5&&a.tag!==27||Yo(a),Wa(a,r);break;case 6:Yo(a);break;case 26:bn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Le||c.parentNode.removeChild(c),Wa(a,r);break;case 22:a.memoizedState===null&&Wa(a,r);break;case 30:bn(a,a.return),Wa(a,r);break;case 7:bn(a,a.return);default:Wa(a,r)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ci(c,f,a),qo(4,f);break;case 1:if(Ci(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(at){Pe(r,r.return,at)}if(r=f,c=r.updateQueue,c!==null){var B=r.stateNode;try{var Z=c.shared.hiddenCallbacks;if(Z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<Z.length;c++)e0(Z[c],B)}catch(at){Pe(r,r.return,at)}}T&&_&64&&dg(f),Vi(f,f.return);break;case 27:(a&2)!==0&&vg(f);case 5:f.tag!==5&&f.tag!==27||mg(f),Ci(c,f,a),T&&r===null&&_&4&&ah(f),Vi(f,f.return);break;case 6:mg(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||xn||td(nl(B.ownerDocument),f.type,B),Ci(c,f,a),T&&r===null&&_&4&&ah(f),Vi(f,f.return);break;case 12:Ci(c,f,a);break;case 31:Ci(c,f,a),T&&_&4&&Rg(c,f);break;case 13:Ci(c,f,a),T&&_&4&&Dg(c,f);break;case 22:f.memoizedState===null&&Ci(c,f,a),Vi(f,f.return);break;case 30:Ci(c,f,a),Vi(f,f.return);break;case 7:Vi(f,f.return);default:Ci(c,f,a)}n=n.sibling}}function vh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Uo(a))}function _h(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Uo(t))}function xi(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Og(t,n,a,r),n=n.sibling;else c&&Mg(n)}function Og(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ac(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),f&2048&&qo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),c&&ph&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Uo(f)));break;case 12:if(f&2048){xi(t,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,T=_.id,B=_.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(Z){Pe(n,n.return,Z)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,T=n.alternate,n.memoizedState!==null?(c&&T!==null&&T.memoizedState===null&&Ac(T),_._visibility&2?xi(t,n,a,r):jo(t,n)):(c&&T!==null&&T.memoizedState!==null&&Ac(n),_._visibility&2?xi(t,n,a,r):(_._visibility|=2,Sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&vh(T,n);break;case 24:xi(t,n,a,r),f&2048&&_h(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ki(f.child,!0),ki(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function Sr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,B=r,Z=_.flags;switch(_.tag){case 0:case 11:case 15:Sr(f,_,T,B,c),qo(8,_);break;case 23:break;case 22:var at=_.stateNode;_.memoizedState!==null?at._visibility&2?Sr(f,_,T,B,c):jo(f,_):(at._visibility|=2,Sr(f,_,T,B,c)),c&&Z&2048&&vh(_.alternate,_);break;case 24:Sr(f,_,T,B,c),c&&Z&2048&&_h(_.alternate,_);break;default:Sr(f,_,T,B,c)}n=n.sibling}}function jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:jo(a,r),c&2048&&vh(r.alternate,r);break;case 24:jo(a,r),c&2048&&_h(r.alternate,r);break;default:jo(a,r)}n=n.sibling}}var Us=8192;function Ls(t,n,a){if(t.subtreeFlags&Us)for(t=t.child;t!==null;)zg(t,n,a),t=t.sibling}function zg(t,n,a){switch(t.tag){case 26:Ls(t,n,a),t.flags&Us&&(t.memoizedState!==null?DM(a,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Vv(a,t)));break;case 5:Ls(t,n,a),t.flags&Us&&(t=t.stateNode,(n&335544128)===n&&Vv(a,t));break;case 3:case 4:var r=wi;wi=nl(t.stateNode.containerInfo),Ls(t,n,a),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Us,Us=16777216,Ls(t,n,a),Us=r):Ls(t,n,a));break;case 30:if((t.flags&Us)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,ai===null&&(ai=new Map),ai.set(r,c)}Ls(t,n,a);break;default:Ls(t,n,a)}}function Pg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,Bg(r,t)}Pg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&Ya(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dc(t)):Zo(t);break;default:Zo(t)}}function Dc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,Bg(r,t)}Pg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),Dc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dc(n));break;default:Dc(n)}t=t.sibling}}function Bg(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,yn=r;else t:for(a=t;yn!==null;){r=yn;var c=r.sibling,f=r.return;if(wg(r),r===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}var bS={getCacheForType:function(t){var n=Mn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},AS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,qe=null,Se=null,Ee=0,ze=0,si=null,ja=!1,Mr=!1,xh=!1,_a=0,nn=0,Za=0,Os=0,Nc=0,ri=0,Er=0,Ko=null,Kn=null,yh=!1,Uc=0,Fg=0,Lc=1/0,Oc=null,Ka=null,$e=0,Ri=null,zs=null,ji=0,Sh=0,Mh=null,Hg=null,Tr=null,br=null,Ar=null,Qo=0,zc=null;function oi(){return(Ue&2)!==0&&Ee!==0?Ee&-Ee:Tt.T!==null?Uh():Zt()}function Gg(){if(ri===0)if((Ee&536870912)===0||_e){var t=gs;gs<<=1,(gs&3932160)===0&&(gs=262144),ri=t}else ri=536870912;return t=En.current,t!==null&&(t.flags|=32),ri}function wr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=Sv(la(t.memoizedProps,a))),br===null&&(br=[]),br.push(n.bind(null,r))}}function Qn(t,n,a){(t===qe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Cr(t,0),Qa(t,Ee,ri,!1)),C(t,a),((Ue&2)===0||t!==qe)&&(t===qe&&((Ue&2)===0&&(Os|=a),nn===4&&Qa(t,Ee,ri,!1)),Zi(t))}function Vg(t,n,a){if((Ue&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Na(t,n),c=r?RS(t,n):Th(t,n,!0),f=r;do{if(c===0){Mr&&!r&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!wS(a)){c=Th(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;c=Ko;var B=T.current.memoizedState.isDehydrated;if(B&&(Cr(T,_).flags|=256),_=Th(T,_,!1),_!==2&&_!==6){if(xh&&!B){T.errorRecoveryDisabledLanes|=f,Os|=f,c=4;break t}f=Kn,Kn=c,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Cr(t,0),Qa(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Qa(r,n,ri,!ja);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Uc+300-V(),10<c)){if(Qa(r,n,ri,!ja),sa(r,0,!0)!==0)break t;ji=n,r.timeoutHandle=Xh(Xg.bind(null,r,a,Kn,Oc,yh,n,ri,Os,Er,ja,f,"Throttled",-0,0),c);break t}Xg(r,a,Kn,Oc,yh,n,ri,Os,Er,ja,f,null,-0,0)}}break}while(!0);Zi(t)}function Xg(t,n,a,r,c,f,_,T,B,Z,at,ht,q,et){t.timeoutHandle=-1;var Rt=n.subtreeFlags,qt=(f&335544064)===f;if(ht=null,(qt||Rt&8192||(Rt&16785408)===16785408)&&(ht={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},ai=null,zg(n,f,ht),qt&&(Rt=ht,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(Rt.count++,Rt.waitingForViewTransition=!0,Rt=sl.bind(Rt),qt.finished.then(Rt,Rt))),Rt=(f&62914560)===f?Uc-V():(f&4194048)===f?Fg-V():0,Rt=NM(ht,Rt),Rt!==null)){ji=f,t.cancelPendingCommit=Rt(Qg.bind(null,t,n,f,a,r,c,_,T,B,Z,at,ht,null,q,et)),Qa(t,f,_,!Z);return}Qg(t,n,f,a,r,c,_,T,B,Z,at,ht)}function wS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ni(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,r){n=xo(t,n),n&=~Nc,n&=~Os,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Cn(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&rt(t,a,n)}function Pc(){return(Ue&6)===0?(Jo(0),!1):!0}function Eh(){if(Se!==null){if(ze===0)var t=Se.return;else t=Se,ha=Ms=null,Nf(t),pr=null,zo=0,t=Se;for(;t!==null;)hg(t.alternate,t),t=t.return;Se=null}}function Cr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,QS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ji=0,Eh(),qe=t,Se=a=ua(t.current,null),Ee=n,ze=0,si=null,ja=!1,Mr=Na(t,n),xh=!1,Er=ri=Nc=Os=Za=nn=0,Kn=Ko=null,yh=!1,_a=xo(t,n),kl(),a}function kg(t,n){de=null,Tt.H=mc,n===dr||n===ec?(n=Qm(),ze=3):n===_f?(n=Qm(),ze=4):ze=n===Yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Se===null&&(nn=1,gc(t,mi(n,t.current)))}function qg(){var t=En.current;return t===null?!0:(Ee&4194048)===Ee?Nn===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Nn:!1}function Yg(){var t=Tt.H;return Tt.H=mc,t===null?mc:t}function Wg(){var t=Tt.A;return Tt.A=bS,t}function Ic(){nn=4,ja||(Ee&4194048)!==Ee&&En.current!==null||(Mr=!0),(Za&134217727)===0&&(Os&134217727)===0||qe===null||Qa(qe,Ee,ri,!1)}function Th(t,n,a){var r=Ue;Ue|=2;var c=Yg(),f=Wg();(qe!==t||Ee!==n)&&(Oc=null,Cr(t,n)),n=!1;var _=nn;t:do try{if(ze!==0&&Se!==null){var T=Se,B=si;switch(ze){case 8:Eh(),_=6;break t;case 3:case 2:case 9:case 6:En.current===null&&(n=!0);var Z=ze;if(ze=0,si=null,Rr(t,T,B,Z),a&&Mr){_=0;break t}break;default:Z=ze,ze=0,si=null,Rr(t,T,B,Z)}}CS(),_=nn;break}catch(at){kg(t,at)}while(!0);return n&&t.shellSuspendCounter++,ha=Ms=null,Ue=r,Tt.H=c,Tt.A=f,Se===null&&(qe=null,Ee=0,kl()),_}function CS(){for(;Se!==null;)jg(Se)}function RS(t,n){var a=Ue;Ue|=2;var r=Yg(),c=Wg();qe!==t||Ee!==n?(Oc=null,Lc=V()+500,Cr(t,n)):Mr=Na(t,n);t:do try{if(ze!==0&&Se!==null){n=Se;var f=si;e:switch(ze){case 1:ze=0,si=null,Rr(t,n,f,1);break;case 2:case 9:if(Zm(f)){ze=0,si=null,Zg(n);break}n=function(){ze!==2&&ze!==9||qe!==t||(ze=7),Zi(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Zm(f)?(ze=0,si=null,Zg(n)):(ze=0,si=null,Rr(t,n,f,7));break;case 5:var _=null;switch(Se.tag){case 26:_=Se.memoizedState;case 5:case 27:var T=Se;if(_?Hv(_):T.stateNode.complete){ze=0,si=null;var B=T.sibling;if(B!==null)Se=B;else{var Z=T.return;Z!==null?(Se=Z,Bc(Z)):Se=null}break e}}ze=0,si=null,Rr(t,n,f,5);break;case 6:ze=0,si=null,Rr(t,n,f,6);break;case 8:Eh(),nn=6;break t;default:throw Error(s(462))}}DS();break}catch(at){kg(t,at)}while(!0);return ha=Ms=null,Tt.H=r,Tt.A=c,Ue=a,Se!==null?0:(qe=null,Ee=0,kl(),nn)}function DS(){for(;Se!==null&&!he();)jg(Se)}function jg(t){var n=ug(t.alternate,t,_a);t.memoizedProps=t.pendingProps,n===null?Bc(t):Se=n}function Zg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ig(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=ig(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Nf(n);var r=n;r===_n&&(_e?(Kl(r),r.tag===5&&r.stateNode!=null&&(Ye=r.stateNode)):(Kl(r),_e=!0));default:hg(a,n),n=Se=Bm(n,_a),n=ug(a,n,_a)}t.memoizedProps=t.pendingProps,n===null?Bc(t):Se=n}function Rr(t,n,a,r){ha=Ms=null,Nf(n),pr=null,zo=0;var c=n.return;try{if(vS(t,c,n,a,Ee)){nn=1,gc(t,mi(a,t.current)),Se=null;return}}catch(f){if(c!==null)throw Se=c,f;nn=1,gc(t,mi(a,t.current)),Se=null;return}n.flags&32768?(_e||r===1?t=!0:Mr||(Ee&536870912)!==0?t=!1:(ja=t=!0,(r===2||r===9||r===3||r===6)&&(r=En.current,r!==null&&r.tag===13&&(r.flags|=16384))),Kg(n,t)):Bc(n)}function Bc(t){var n=t;do{if((n.flags&32768)!==0){Kg(n,ja);return}t=n.return;var a=SS(n.alternate,n,_a);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);nn===0&&(nn=5)}function Kg(t,n){do{var a=MS(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);nn=6,Se=null}function Qg(t,n,a,r,c,f,_,T,B,Z,at,ht){t.cancelPendingCommit=null;do Fc();while($e!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===qe&&(Se=qe=null,Ee=0),zs=n,Ri=t,ji=a,Mh=c,Hg=r,NS(t,n,a,_,T,B,ht)}}function NS(t,n,a,r,c,f,_){var T=n.lanes|n.childLanes;if(Sh=T,T|=sf,K(t,a,T,r,c,f),br=null,(a&335544064)===a?(Ar=sS(t),r=10262):(Ar=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,IS(Ot,function(){return Ch(),null})):(t.callbackNode=null,t.callbackPriority=0),Tc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,c=At.p,At.p=2,f=Ue,Ue|=4;try{ES(t,n,a)}finally{Ue=f,At.p=c,Tt.T=r}}$e=1,Tc?Tr=iM(_,t.containerInfo,Ar,bh,Ah,LS,wh,Ch,US):(bh(),Ah(),wh())}function US(t){if($e!==0){var n=Ri.onRecoverableError;n(t,{componentStack:null})}}function LS(){$e===3&&($e=0,Lg(zs,Ri),$e=4)}function bh(){if($e===1){$e=0;var t=Ri,n=zs,a=ji,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var c=At.p;At.p=2;var f=Ue;Ue|=4;try{Wo=wc=!1,Ng(n,t,a),a=Hh;var _=Cm(t.containerInfo),T=a.focusedElem,B=a.selectionRange;if(_!==T&&T&&T.ownerDocument&&wm(T.ownerDocument.documentElement,T)){if(B!==null&&$u(T)){var Z=B.start,at=B.end;if(at===void 0&&(at=Z),"selectionStart"in T)T.selectionStart=Z,T.selectionEnd=Math.min(at,T.value.length);else{var ht=T.ownerDocument||document,q=ht&&ht.defaultView||window;if(q.getSelection){var et=q.getSelection(),Rt=T.textContent.length,qt=Math.min(B.start,Rt),pe=B.end===void 0?qt:Math.min(B.end,Rt);!et.extend&&qt>pe&&(_=pe,pe=qt,qt=_);var j=Am(T,qt),H=Am(T,pe);if(j&&H&&(et.rangeCount!==1||et.anchorNode!==j.node||et.anchorOffset!==j.offset||et.focusNode!==H.node||et.focusOffset!==H.offset)){var $=ht.createRange();$.setStart(j.node,j.offset),et.removeAllRanges(),qt>pe?(et.addRange($),et.extend(H.node,H.offset)):($.setEnd(H.node,H.offset),et.addRange($))}}}}for(ht=[],et=T;et=et.parentNode;)et.nodeType===1&&ht.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ht.length;T++){var ft=ht[T];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Ir=!!Fh,Hh=Fh=null}finally{Ue=f,At.p=c,Tt.T=r}}t.current=n,$e=2}}function Ah(){if($e===2){$e=0;var t=Ri,n=zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Tt.T,Tt.T=null;var r=At.p;At.p=2;var c=Ue;Ue|=4;try{bg(t,n.alternate,n)}finally{Ue=c,At.p=r,Tt.T=a}}$e=3}}function wh(){if($e===4||$e===3){$e=0;var t=Tr;Tr=null,Fe();var n=Ri,a=zs,r=ji,c=Hg,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?$e=5:($e=0,zs=Ri=null,Jg(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Ka=null),zt(r),a=a.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Tt.T,f=At.p,At.p=2,Tt.T=null;try{for(var _=n.onRecoverableError,T=0;T<c.length;T++){var B=c[T];_(B.value,{componentStack:B.stack})}}finally{Tt.T=a,At.p=f}}if(c=br,_=Ar,Ar=null,c!==null&&(br=null,_===null&&(_=[]),t!==null))for(B=0;B<c.length;B++)a=(0,c[B])(_),a!==void 0&&t.finished.finally(a);(ji&3)!==0&&Fc(),Zi(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===zc?Qo++:(Qo=0,zc=n):(Qo=0,zc=null),Jo(0)}}function Jg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Uo(n)))}function Fc(){return Tr!==null&&(Tr.skipTransition(),Tr=null),bh(),Ah(),wh(),Ch()}function Ch(){if($e!==5)return!1;var t=Ri,n=Sh;Sh=0;var a=zt(ji),r=Tt.T,c=At.p;try{At.p=32>a?32:a,Tt.T=null,a=Mh,Mh=null;var f=Ri,_=ji;if($e=0,zs=Ri=null,ji=0,(Ue&6)!==0)throw Error(s(331));var T=Ue;if(Ue|=4,Ig(f.current),Og(f,f.current,_,a),Ue=T,Jo(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{At.p=c,Tt.T=r,Jg(t,n)}}function $g(t,n,a){n=mi(a,n),n=qf(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(C(t,2),Zi(t))}function Pe(t,n,a){if(t.tag===3)$g(t,t,a);else for(;n!==null;){if(n.tag===3){$g(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){t=mi(a,t),a=Z0(2),r=Va(n,a,2),r!==null&&(K0(a,r,n,t),C(r,2),Zi(r));break}}n=n.return}}function Rh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new AS;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(xh=!0,c.add(a),t=OS.bind(null,t,n,a),n.then(t,t))}function OS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Ee&a)===a&&((nn===4||nn===3&&(Ee&62914560)===Ee&&300>V()-Uc)&&(Ue&2)===0?Cr(t,0):Nc|=a,Er===Ee&&(Er=0)),Zi(t)}function tv(t,n){n===0&&(n=Ul()),t=xs(t,n),t!==null&&(C(t,n),Zi(t))}function zS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),tv(t,a)}function PS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),tv(t,a)}function IS(t,n){return Vt(t,n)}var Dr=null,Nr=null,Dh=!1,Hc=!1,Nh=!1,Ja=0;function Zi(t){t!==Nr&&t.next===null&&(Nr===null?Dr=Nr=t:Nr=Nr.next=t),Hc=!0,Dh||(Dh=!0,FS())}function Jo(t,n){if(!Nh&&Hc){Nh=!0;do for(var a=!1,r=Dr;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Cn(42|t)+1)-1,f&=c&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,av(r,f))}else f=Ee,f=sa(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Na(r,f)||(a=!0,av(r,f));r=r.next}while(a);Nh=!1}}function BS(){ev()}function ev(){Hc=Dh=!1;var t=0;Ja!==0&&KS()&&(t=Ja);for(var n=V(),a=null,r=Dr;r!==null;){var c=r.next,f=nv(r,n);f===0?(r.next=null,a===null?Dr=c:a.next=c,c===null&&(Nr=a)):(a=r,(t!==0||(f&3)!==0)&&(Hc=!0)),r=c}$e!==0&&$e!==5||Jo(t),Ja!==0&&(Ja=0)}function nv(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Cn(f),T=1<<_,B=c[_];B===-1?((T&a)===0||(T&r)!==0)&&(c[_]=zu(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=qe,a=Ee,a=sa(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&xe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Na(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&xe(r),zt(a)){case 2:case 8:a=_t;break;case 32:a=Ot;break;case 268435456:a=ce;break;default:a=Ot}return r=iv.bind(null,t),a=Vt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&xe(r),t.callbackPriority=2,t.callbackNode=null,2}function iv(t,n){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Fc()&&t.callbackNode!==a)return null;var r=Ee;return r=sa(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Vg(t,r,n),nv(t,V()),t.callbackNode!=null&&t.callbackNode===a?iv.bind(null,t):null)}function av(t,n){if(Fc())return null;Vg(t,n,!0)}function FS(){JS(function(){(Ue&6)!==0?Vt(ct,BS):ev()})}function Uh(){if(Ja===0){var t=bs;t===0&&(t=ms,ms<<=1,(ms&261888)===0&&(ms=256)),Ja=t}return Ja}function sv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(t)}function HS(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=sv((c[It]||null).action),_=r.submitter;_&&(n=(n=_[It]||null)?sv(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new Hl("action","action",null,r,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ja!==0){var B=new FormData(c,_);Hf(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=new FormData(c,_),Hf(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Lh=0;Lh<af.length;Lh++){var Oh=af[Lh],GS=Oh.toLowerCase(),VS=Oh[0].toUpperCase()+Oh.slice(1);bi(GS,"on"+VS)}bi(Nm,"onAnimationEnd"),bi(Um,"onAnimationIteration"),bi(Lm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Qy,"onTransitionRun"),bi(Jy,"onTransitionStart"),bi($y,"onTransitionCancel"),bi(Om,"onTransitionEnd"),In("onMouseEnter",["mouseout","mouseover"]),In("onMouseLeave",["mouseout","mouseover"]),In("onPointerEnter",["pointerout","pointerover"]),In("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function rv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var T=r[_],B=T.instance,Z=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Z;try{f(c)}catch(at){Xl(at)}c.currentTarget=null,f=B}else for(_=0;_<r.length;_++){if(T=r[_],B=T.instance,Z=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=Z;try{f(c)}catch(at){Xl(at)}c.currentTarget=null,f=B}}}}function Me(t,n){var a=n[Oe];a===void 0&&(a=n[Oe]=new Set);var r=t+"__bubble";a.has(r)||(ov(n,t,2,!1),a.add(r))}function zh(t,n,a){var r=0;n&&(r|=4),ov(a,t,r,n)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function Ph(t){if(!t[Gc]){t[Gc]=!0,Ua.forEach(function(a){a!=="selectionchange"&&(XS.has(a)||zh(a,!1,t),zh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Gc]||(n[Gc]=!0,zh("selectionchange",!1,n))}}function ov(t,n,a,r){switch(Kv(n)){case 2:var c=zM;break;case 8:c=PM;break;default:c=nd}a=c.bind(null,n,a,t),c=void 0,!Xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Ih(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var T=r.stateNode.containerInfo;if(T===c)break;if(_===4)for(_=r.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;T!==null;){if(_=un(T),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){r=f=_;continue t}T=T.parentNode}}r=r.return}om(function(){var Z=f,at=Gu(a),ht=[];t:{var q=zm.get(t);if(q!==void 0){var et=Hl,Rt=t;switch(t){case"keypress":if(Bl(a)===0)break t;case"keydown":case"keyup":et=wy;break;case"focusin":Rt="focus",et=Wu;break;case"focusout":Rt="blur",et=Wu;break;case"beforeblur":case"afterblur":et=Wu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=Uy;break;case Nm:case Um:case Lm:et=_y;break;case Om:et=Oy;break;case"scroll":case"scrollend":et=dy;break;case"wheel":et=Py;break;case"copy":case"cut":case"paste":et=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=hm;break;case"submit":et=Dy;break;case"toggle":case"beforetoggle":et=By}var qt=(n&4)!==0,pe=!qt&&(t==="scroll"||t==="scrollend"),j=qt?q!==null?q+"Capture":null:q;qt=[];for(var H=Z,$;H!==null;){var ft=H;if($=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||$===null||j===null||(ft=So(H,j),ft!=null&&qt.push(tl(H,ft,$))),pe)break;H=H.return}0<qt.length&&(q=new et(q,Rt,null,a,at),ht.push({event:q,listeners:qt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",et&&a!==Hu&&(Rt=a.relatedTarget||a.fromElement)&&(un(Rt)||Rt[ve]))break t;(q||et)&&(Rt=at.window===at?at:(et=at.ownerDocument)?et.defaultView||et.parentWindow:window,q?(et=a.relatedTarget||a.toElement,q=Z,et=et?un(et):null,et!==null&&(pe=u(et),qt=et.tag,et!==pe||qt!==5&&qt!==27&&qt!==6)&&(et=null)):(q=null,et=Z),q!==et&&(qt=um,ft="onMouseLeave",j="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(qt=hm,ft="onPointerLeave",j="onPointerEnter",H="pointer"),pe=q==null?Rt:fn(q),$=et==null?Rt:fn(et),Rt=new qt(ft,H+"leave",q,a,at),Rt.target=pe,Rt.relatedTarget=$,ft=null,un(at)===Z&&(qt=new qt(j,H+"enter",et,a,at),qt.target=$,qt.relatedTarget=pe,ft=qt),pe=ft,qt=q&&et?I(q,et,kS):null,q!==null&&lv(ht,Rt,q,qt,!1),et!==null&&pe!==null&&lv(ht,pe,et,qt,!0)))}t:{if(q=Z?fn(Z):window,et=q.nodeName&&q.nodeName.toLowerCase(),et==="select"||et==="input"&&q.type==="file")var Gt=ym;else if(_m(q))if(Sm)Gt=jy;else{Gt=Yy;var Te=qy}else et=q.nodeName,!et||et.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?Z&&Fu(Z.elementType)&&(Gt=ym):Gt=Wy;if(Gt&&(Gt=Gt(t,Z))){xm(ht,Gt,a,at);break t}Te&&Te(t,q,Z)}switch(Te=Z?fn(Z):window,t){case"focusin":(_m(Te)||Te.contentEditable==="true")&&(sr=Te,tf=Z,Ro=null);break;case"focusout":Ro=tf=sr=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Rm(ht,a,at);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":Rm(ht,a,at)}var $t;if(Zu)t:{switch(t){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else ar?gm(t,a)&&(se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(dm&&a.locale!=="ko"&&(ar||se!=="onCompositionStart"?se==="onCompositionEnd"&&ar&&($t=lm()):(La=at,ku="value"in La?La.value:La.textContent,ar=!0)),Te=Vc(Z,se),0<Te.length&&(se=new fm(se,t,null,a,at),ht.push({event:se,listeners:Te}),$t?se.data=$t:($t=vm(a),$t!==null&&(se.data=$t)))),($t=Hy?Gy(t,a):Vy(t,a))&&(se=Vc(Z,"onBeforeInput"),0<se.length&&(Te=new fm("onBeforeInput","beforeinput",null,a,at),ht.push({event:Te,listeners:se}),Te.data=$t)),HS(ht,t,Z,a,at)}rv(ht,n)})}function tl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Vc(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=So(t,a),c!=null&&r.unshift(tl(t,c,f)),c=So(t,n),c!=null&&r.push(tl(t,c,f))),t.tag===3)return r;t=t.return}return[]}function kS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function lv(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var T=a,B=T.alternate,Z=T.stateNode;if(T=T.tag,B!==null&&B===r)break;T!==5&&T!==26&&T!==27||Z===null||(B=Z,c?(Z=So(a,f),Z!=null&&_.unshift(tl(a,Z,B))):c||(Z=So(a,f),Z!=null&&_.push(tl(a,Z,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var qS=/\r\n?/g,YS=/\u0000|\uFFFD/g;function cv(t){return(typeof t=="string"?t:""+t).replace(qS,`
`).replace(YS,"")}function uv(t,n){return n=cv(n),cv(t)===n}function Ie(t,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||er(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&er(t,""+r);else return;break;case"className":zl(t,"class",r);break;case"tabIndex":zl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":zl(t,a,r);break;case"style":sm(t,r,f);return;case"data":if(n!=="object"){zl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Pl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Pl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Fi);return;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Pl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Me("beforetoggle",t),Me("toggle",t),Ol(t,"popover",r);break;case"xlinkActuate":ra(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ra(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ra(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ra(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ra(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ra(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ra(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ra(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ra(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ol(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=fy.get(a)||a,Ol(t,a,r);else return}Ne=!0}function Bh(t,n,a,r,c,f){switch(a){case"style":sm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")er(t,r);else if(typeof r=="number"||typeof r=="bigint")er(t,""+r);else return;break;case"onScroll":r!=null&&Me("scroll",t);return;case"onScrollEnd":r!=null&&Me("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Fi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Pn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[It]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,c);break t}Ne=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ol(t,a,r)}return}Ne=!0}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,f,_,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),r&&Ie(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var T=f=_=c=null,B=null,Z=null;for(r in a)if(a.hasOwnProperty(r)){var at=a[r];if(at!=null)switch(r){case"name":c=at;break;case"type":_=at;break;case"checked":B=at;break;case"defaultChecked":Z=at;break;case"value":f=at;break;case"defaultValue":T=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Ie(t,n,r,at,a,null)}}em(t,f,T,B,Z,_,c,!1);return;case"select":Me("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":r=T;default:Ie(t,n,c,T,a,null)}n=f,a=_,t.multiple=!!r,n!=null?tr(t,!!r,n,!1):a!=null&&tr(t,!!r,a,!0);return;case"textarea":Me("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ie(t,n,_,T,a,null)}im(t,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ie(t,n,B,r,a,null)}return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(r=0;r<$o.length;r++)Me($o[r],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(r=a[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,Z,r,a,null)}return;default:if(Fu(n)){for(at in a)a.hasOwnProperty(at)&&(r=a[at],r!==void 0&&Bh(t,n,at,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Ie(t,n,T,r,a,null))}var WS={};function jS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,T=null,B=null,Z=null,at=null;for(et in a){var ht=a[et];if(a.hasOwnProperty(et)&&ht!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":B=ht;default:r.hasOwnProperty(et)||Ie(t,n,et,null,r,ht)}}for(var q in r){var et=r[q];if(ht=a[q],r.hasOwnProperty(q)&&(et!=null||ht!=null))switch(q){case"type":et!==ht&&(Ne=!0),f=et;break;case"name":et!==ht&&(Ne=!0),c=et;break;case"checked":et!==ht&&(Ne=!0),Z=et;break;case"defaultChecked":et!==ht&&(Ne=!0),at=et;break;case"value":et!==ht&&(Ne=!0),_=et;break;case"defaultValue":et!==ht&&(Ne=!0),T=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:et!==ht&&Ie(t,n,q,et,r,ht)}}Iu(t,_,T,B,Z,at,f,c);return;case"select":et=_=T=q=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":et=B;default:r.hasOwnProperty(f)||Ie(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":f!==B&&(Ne=!0),q=f;break;case"defaultValue":f!==B&&(Ne=!0),T=f;break;case"multiple":f!==B&&(Ne=!0),_=f;default:f!==B&&Ie(t,n,c,f,r,B)}n=T,a=_,r=et,q!=null?tr(t,!!a,q,!1):!!r!=!!a&&(n!=null?tr(t,!!a,n,!0):tr(t,!!a,a?[]:"",!1));return;case"textarea":et=q=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(t,n,T,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":c!==f&&(Ne=!0),q=c;break;case"defaultValue":c!==f&&(Ne=!0),et=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ie(t,n,_,c,r,f)}nm(t,q,et);return;case"option":for(var Rt in a)if(q=a[Rt],a.hasOwnProperty(Rt)&&q!=null&&!r.hasOwnProperty(Rt))switch(Rt){case"selected":t.selected=!1;break;default:Ie(t,n,Rt,null,r,q)}for(B in r)if(q=r[B],et=a[B],r.hasOwnProperty(B)&&q!==et&&(q!=null||et!=null))switch(B){case"selected":q!==et&&(Ne=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ie(t,n,B,q,r,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)q=a[qt],a.hasOwnProperty(qt)&&q!=null&&!r.hasOwnProperty(qt)&&Ie(t,n,qt,null,r,q);for(Z in r)if(q=r[Z],et=a[Z],r.hasOwnProperty(Z)&&q!==et&&(q!=null||et!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,n));break;default:Ie(t,n,Z,q,r,et)}return;default:if(Fu(n)){for(var pe in a)q=a[pe],a.hasOwnProperty(pe)&&q!==void 0&&!r.hasOwnProperty(pe)&&Bh(t,n,pe,void 0,r,q);for(at in r)q=r[at],et=a[at],!r.hasOwnProperty(at)||q===et||q===void 0&&et===void 0||Bh(t,n,at,q,r,et);return}}for(var j in a)q=a[j],a.hasOwnProperty(j)&&q!=null&&!r.hasOwnProperty(j)&&Ie(t,n,j,null,r,q);for(ht in r)q=r[ht],et=a[ht],!r.hasOwnProperty(ht)||q===et||q==null&&et==null||Ie(t,n,ht,q,r,et)}function fv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,T=c.duration;if(f&&T&&fv(_)){for(_=0,T=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],Z=B.startTime;if(Z>T)break;var at=B.transferSize,ht=B.initiatorType;at&&fv(ht)&&(B=B.responseEnd,_+=at*(B<T?1:(T-Z)/(B-Z)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Fh=null,Hh=null;function el(t){return t.nodeType===9?t:t.ownerDocument}function hv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function pv(t,n,a,r){return a=el(a).createElement(t),a[Qt]=r,a[It]=n,An(a,t,n),ue(a),a}function Gh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vh=null;function KS(){var t=window.event;return t&&t.type==="popstate"?t===Vh?!1:(Vh=t,!0):(Vh=null,!1)}var Xh=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,mv=typeof Promise=="function"?Promise:void 0,gv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Xh,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof mv<"u"?function(t){return mv.resolve(null).then(t).catch($S)}:Xh;function $S(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function vv(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Br(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Qh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Qh(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[Wt]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Qh(t.ownerDocument.body);a=c}while(a);Br(n)}function _v(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function xv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function yv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function tM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function kh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return tM(n,a,t)}function eM(t){return t.documentElement.clientHeight}function nM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function iM(t,n,a,r,c,f,_,T,B){var Z=n.nodeType===9?n:n.ownerDocument;try{var at=Z.startViewTransition({update:function(){var q=Z.defaultView,et=q.navigation&&q.navigation.transition,Rt=Z.fonts.status;r();var qt=[];if(Rt==="loaded"&&(eM(Z),Z.fonts.status==="loading"&&qt.push(Z.fonts.ready)),Rt=qt.length,t!==null)for(var pe=t.suspenseyImages,j=0,H=0;H<pe.length;H++){var $=pe[H];if(!$.complete){var ft=$.getBoundingClientRect();if(0<ft.bottom&&0<ft.right&&ft.top<q.innerHeight&&ft.left<q.innerWidth){if(j+=Gv($),j>qc){qt.length=Rt;break}$=new Promise(nM.bind($)),qt.push($)}}}if(0<qt.length)return q=Promise.race([Promise.all(qt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(c,c),(et?Promise.allSettled([et.finished,q]):q).then(f,f);if(c(),et)return et.finished.then(f,f);f()},types:a});Z.__reactViewTransition=at;var ht=[];return at.ready.then(function(){for(var q=Z.documentElement.getAnimations({subtree:!0}),et=0;et<q.length;et++){var Rt=q[et],qt=Rt.effect,pe=qt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){ht.push(Rt),Rt=qt.getKeyframes();for(var j=pe=void 0,H=!0,$=0;$<Rt.length;$++){var ft=Rt[$],Gt=ft.width;if(pe===void 0)pe=Gt;else if(pe!==Gt){H=!1;break}if(Gt=ft.height,j===void 0)j=Gt;else if(j!==Gt){H=!1;break}delete ft.width,delete ft.height,ft.transform==="none"&&delete ft.transform}H&&pe!==void 0&&j!==void 0&&(qt.setKeyframes(Rt),H=getComputedStyle(qt.target,qt.pseudoElement),H.width!==pe||H.height!==j)&&(H=Rt[0],H.width=pe,H.height=j,H=Rt[Rt.length-1],H.width=pe,H.height=j,qt.setKeyframes(Rt))}}_()},function(q){Z.__reactViewTransition===at&&(Z.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&B(q)}finally{r(),c(),_()}}),at.finished.finally(function(){for(var q=0;q<ht.length;q++)ht[q].cancel();Z.__reactViewTransition===at&&(Z.__reactViewTransition=null),T()}),at}catch{return r(),c(),_(),null}}function Ps(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ps.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ps.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[c])}return r},Ps.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Sv(t){return{name:t,group:new Ps("group",t),imagePair:new Ps("image-pair",t),old:new Ps("old",t),new:new Ps("new",t)}}function li(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}li.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Ev(f,t,n,a)===-1){var _=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(c=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Ur(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:c}),m(this._fragmentFiber.child,!1,aM,t,T,r)}this._eventListeners=f}};function aM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}li.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=Ev(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=Ur(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,sM,t,a,c),r.splice(n,1),f!==null&&f()}};function sM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Ur(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Mv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Ev(t,n,a,r){if(t.length===0)return-1;r=Mv(r);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&Mv(f.optionsOrUseCapture)===r)return c}return-1}li.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,Ur(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,Ur(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},li.prototype.focus=function(t){m(this._fragmentFiber.child,!0,Tv,t,void 0,void 0)};function Tv(t,n){return t.tag===6?!1:(t=M(t),vM(t,n))}li.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,qh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Tv(n[a],t);a--);};function qh(t,n){return n.push(t),!1}li.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=M(t),t=el(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,rM,t,void 0,void 0))};function rM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}li.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,oM,t,void 0,void 0)};function oM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}li.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,lM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Di[n++]=r}Di.length=n}};function lM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Di=[],Yh=!1;function cM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),Yh||(Yh=!0,_M(function(){Yh=!1;var r=Di;Di=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}li.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,uM,t,void 0,void 0),t};function uM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}li.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},li.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,qh,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),T=c.compareDocumentPosition(t),B=_&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&c===t||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||fM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function fM(t,n,a,r,c){var f=un(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=y(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=I(a,f,Y),n===null?n=!1:(m(n,!0,L,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=I(r,f,Y),n===null?n=!1:(m(n,!0,R,f,r),f=x,U=x=null,n=f!==null)),n):!1}function bv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}li.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,qh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),bv(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),bv(c,a)):M(c).scrollIntoView(t),r+=a?-1:1}};function hM(t,n){return t=M(t),Av(t,n),!1}function Av(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function wv(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,Ur(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,T=0;T<Di.length;T++){var B=Di[T];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(Di[_++]=B)}Di.length=_,f.observe(t)}),Av(t,n))}function dM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,Ur(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?cM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Wh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wh(a),Ae(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function pM(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Wt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function mM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function Cv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function jh(t){return t.data==="$?"||t.data==="$~"}function Zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kh=null;function Rv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Dv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function vM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function _M(t){gv(function(){gv(function(n){return t(n)})})}function Nv(t,n,a){switch(n=el(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Uv(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Ie(t,n,r,null,WS,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Fi&&(t.onclick=null),Ae(t)}function Qh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ae(t)}var Si=new Map,Lv=new Set;function nl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var xa=At.d;At.d={f:xM,r:yM,D:SM,C:MM,L:EM,m:TM,X:AM,S:bM,M:wM};function xM(){var t=xa.f(),n=Pc();return t||n}function yM(t){var n=$n(t);n!==null&&n.tag===5&&n.type==="form"?z0(n):xa.r(t)}var Lr=typeof document>"u"?null:document;function Ov(t,n,a){var r=Lr;if(r&&typeof n=="string"&&n){var c=di(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Lv.has(c)||(Lv.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),An(n,"link",t),ue(n),r.head.appendChild(n)))}}function SM(t){xa.D(t),Ov("dns-prefetch",t,null)}function MM(t,n){xa.C(t,n),Ov("preconnect",t,n)}function EM(t,n,a){xa.L(t,n,a);var r=Lr;if(r&&t&&n){var c='link[rel="preload"][as="'+di(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+di(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+di(a.imageSizes)+'"]')):c+='[href="'+di(t)+'"]';var f=c;switch(n){case"style":f=Or(t);break;case"script":f=zr(t)}if(!(Si.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(il(f))||n==="script"&&r.querySelector(al(f))))){var _=r.createElement("link");An(_,"link",t),n==="style"&&(_[Yn]=!0,_.onload=_.onerror=function(){ti(_)}),ue(_),r.head.appendChild(_)}}}function TM(t,n){xa.m(t,n);var a=Lr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+di(r)+'"][href="'+di(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=zr(t)}if(!Si.has(f)&&(t=P({rel:"modulepreload",href:t},n),Si.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(f)))return}r=a.createElement("link"),An(r,"link",t),ue(r),a.head.appendChild(r)}}}function bM(t,n,a){xa.S(t,n,a);var r=Lr;if(r&&t){var c=hi(r).hoistableStyles,f=Or(t);n=n||"default";var _=c.get(f);if(!_){var T={loading:0,preload:null};if(_=r.querySelector(il(f)))T.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(f))&&Jh(t,a);var B=_=r.createElement("link");ue(B),An(B,"link",t),B._p=new Promise(function(Z,at){B.onload=Z,B.onerror=at}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Xc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(f,_)}}}function AM(t,n){xa.X(t,n);var a=Lr;if(a&&t){var r=hi(a).hoistableScripts,c=zr(t),f=r.get(c);f||(f=a.querySelector(al(c)),f||(t=P({src:t,async:!0},n),(n=Si.get(c))&&$h(t,n),f=a.createElement("script"),ue(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function wM(t,n){xa.M(t,n);var a=Lr;if(a&&t){var r=hi(a).hoistableScripts,c=zr(t),f=r.get(c);f||(f=a.querySelector(al(c)),f||(t=P({src:t,async:!0,type:"module"},n),(n=Si.get(c))&&$h(t,n),f=a.createElement("script"),ue(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function zv(t,n,a,r){var c=(c=O.current)?nl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Or(a.href),n=hi(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Or(a.href);var f=hi(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(il(t)))?f._p||(_.instance=f,_.state.loading=5):(f=Si.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,f)),CM(c,t,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=zr(a),n=hi(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Or(t){return'href="'+di(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function Pv(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function CM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Yn]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Yn]=!0,n.onload=n.onerror=ti.bind(null,n),An(n,"link",a),ue(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function zr(t){return'[src="'+di(t)+'"]'}function al(t){return"script[async]"+t}function Iv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+di(a.href)+'"]');if(r)return n.instance=r,ue(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),ue(r),An(r,"style",c),Xc(r,a.precedence,t),n.instance=r;case"stylesheet":c=Or(a.href);var f=t.querySelector(il(c));if(f)return n.state.loading|=4,n.instance=f,ue(f),f;r=Pv(a),(c=Si.get(c))&&Jh(r,c),f=(t.ownerDocument||t).createElement("link"),ue(f);var _=f;return _._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),An(f,"link",r),n.state.loading|=4,Xc(f,a.precedence,t),n.instance=f;case"script":return f=zr(a.src),(c=t.querySelector(al(f)))?(n.instance=c,ue(c),c):(r=a,(c=Si.get(f))&&(r=P({},a),$h(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),ue(c),An(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xc(r,a.precedence,t));return n.instance}function Xc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var T=r[_];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var kc=null;function Bv(t,n,a){if(kc===null){var r=new Map,c=kc=new Map;c.set(a,r)}else c=kc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Wt]||f[Qt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=r.get(_);T?T.push(f):r.set(_,[f])}}return r}function td(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function RM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Hv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Gv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Vv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Gv(n),t.suspenseyImages.push(n)),t=UM.bind(t),n.decode().then(t,t))}function DM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Or(r.href),f=n.querySelector(il(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,ue(f);return}f=n.ownerDocument||n,r=Pv(r),(c=Si.get(c))&&Jh(r,c),f=f.createElement("link"),ue(f);var _=f;_._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),An(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var qc=0;function NM(t,n){return t.stylesheets&&t.count===0&&Wc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Wc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&qc===0&&(qc=62500*ZS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>qc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Xv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Wc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function sl(){this.count--,Xv(this)}function UM(){this.imgCount--,Xv(this)}var Yc=null;function Wc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yc=new Map,n.forEach(LM,t),Yc=null,sl.call(t))}function LM(t,n){if(!(n.state.loading&4)){var a=Yc.get(t);if(a)var r=a.get(null);else{a=new Map,Yc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=sl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Pr={$$typeof:ut,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function OM(t,n,a,r,c,f,_,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.hiddenUpdates=yo(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function kv(t,n,a,r,c,f,_,T,B,Z,at,ht){return t=new OM(t,n,a,_,B,Z,at,ht,T),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=mf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},xf(f),t}function qv(t){return t?(t=lr,t):lr}function Yv(t,n,a,r,c,f){c=qv(c),r.context===null?r.context=c:r.pendingContext=c,r=Ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Va(t,r,n),a!==null&&(Qn(a,t,n),Po(a,t,n))}function Wv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ed(t,n){Wv(t,n),(t=t.alternate)&&Wv(t,n)}function jv(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&Qn(n,t,67108864),ed(t,67108864)}}function Zv(t){if(t.tag===13||t.tag===31){var n=oi();n=Et(n);var a=xs(t,n);a!==null&&Qn(a,t,n),ed(t,n)}}var Ir=!0;function zM(t,n,a,r){var c=Tt.T;Tt.T=null;var f=At.p;try{At.p=2,nd(t,n,a,r)}finally{At.p=f,Tt.T=c}}function PM(t,n,a,r){var c=Tt.T;Tt.T=null;var f=At.p;try{At.p=8,nd(t,n,a,r)}finally{At.p=f,Tt.T=c}}function nd(t,n,a,r){if(Ir){var c=id(r);if(c===null)Ih(t,n,r,jc,a),Qv(t,r);else if(BM(c,t,n,a,r))r.stopPropagation();else if(Qv(t,r),n&4&&-1<IM.indexOf(t)){for(;c!==null;){var f=$n(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Bi(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var B=1<<31-Cn(_);T.entanglements[1]|=B,_&=~B}Zi(f),(Ue&6)===0&&(Lc=V()+500,Jo(0))}}break;case 31:case 13:T=xs(f,2),T!==null&&Qn(T,f,2),Pc(),ed(f,2)}if(f=id(r),f===null&&Ih(t,n,r,jc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Ih(t,n,r,null,a)}}function id(t){return t=Gu(t),ad(t)}var jc=null;function ad(t){if(jc=null,t=un(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return jc=t,null}function Kv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case ct:return 2;case _t:return 8;case Ot:case Ft:return 32;case ce:return 268435456;default:return 32}default:return 32}}var sd=!1,ts=null,es=null,ns=null,rl=new Map,ol=new Map,is=[],IM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qv(t,n){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":rl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(n.pointerId)}}function ll(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=$n(n),n!==null&&jv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function BM(t,n,a,r,c){switch(n){case"focusin":return ts=ll(ts,t,n,a,r,c),!0;case"dragenter":return es=ll(es,t,n,a,r,c),!0;case"mouseover":return ns=ll(ns,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return rl.set(f,ll(rl.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,ol.set(f,ll(ol.get(f)||null,t,n,a,r,c)),!0}return!1}function Jv(t){var n=un(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Kt(t.priority,function(){Zv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Kt(t.priority,function(){Zv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=id(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Hu=r,a.target.dispatchEvent(r),Hu=null}else return n=$n(a),n!==null&&jv(n),t.blockedOn=a,!1;n.shift()}return!0}function $v(t,n,a){Zc(t)&&a.delete(n)}function FM(){sd=!1,ts!==null&&Zc(ts)&&(ts=null),es!==null&&Zc(es)&&(es=null),ns!==null&&Zc(ns)&&(ns=null),rl.forEach($v),ol.forEach($v)}function Kc(t,n){t.blockedOn===n&&(t.blockedOn=null,sd||(sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,FM)))}var Qc=null;function t_(t){Qc!==t&&(Qc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Qc===t&&(Qc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(ad(r||a)===null)continue;break}var f=$n(a);f!==null&&(t.splice(n,3),n-=3,Hf(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Br(t){function n(B){return Kc(B,t)}ts!==null&&Kc(ts,t),es!==null&&Kc(es,t),ns!==null&&Kc(ns,t),rl.forEach(n),ol.forEach(n);for(var a=0;a<is.length;a++){var r=is[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)Jv(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[It]||null;if(typeof f=="function")_||t_(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[It]||null)T=_.formAction;else if(ad(c)!==null)continue}else T=_.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),t_(a)}}}function e_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function rd(t){this._internalRoot=t}Jc.prototype.render=rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=oi();Yv(a,r,t,n,null,null)},Jc.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Yv(t.current,2,null,t,null,null),Pc(),n[ve]=null}};function Jc(t){this._internalRoot=t}Jc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&Jv(t)}};var n_=e.version;if(n_!=="19.3.1")throw Error(s(527,n_,"19.3.1"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var HM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$c.isDisabled&&$c.supportsFiber)try{be=$c.inject(HM),je=$c}catch{}}return ul.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=q0,f=Y0,_=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=kv(t,1,!1,null,null,a,r,null,c,f,_,e_),t[ve]=n.current,Ph(t),new rd(n)},ul.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=q0,_=Y0,T=W0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=kv(t,1,!0,n,a??null,r,c,B,f,_,T,e_),n.context=qv(null),a=n.current,r=oi(),r=Et(r),c=Ga(r),c.callback=null,Va(a,c,r),a=r,n.current.lanes=a,C(n,a),Zi(n),t[ve]=n.current,Ph(t),new Jc(n)},ul.version="19.3.1",ul}var h_;function QM(){if(h_)return cd.exports;h_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),cd.exports=KM(),cd.exports}var JM=QM();const $M=xx(JM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yx=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var e1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=Qe.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},p)=>Qe.createElement("svg",{ref:p,...e1,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:yx("lucide",l),...d},[...h.map(([g,v])=>Qe.createElement(g,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=(o,e)=>{const i=Qe.forwardRef(({className:s,...l},u)=>Qe.createElement(n1,{ref:u,iconNode:e,className:yx(`lucide-${t1(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=Da("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=Da("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=Da("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Da("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=Da("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=Da("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=Da("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=Da("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=Da("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lp="170",f1=0,p_=1,h1=2,Sx=1,d1=2,ba=3,ps=0,kn=1,Ti=2,hs=0,ao=1,eo=2,m_=3,g_=4,p1=5,qs=100,m1=101,g1=102,v1=103,_1=104,x1=200,y1=201,S1=202,M1=203,Yd=204,Wd=205,E1=206,T1=207,b1=208,A1=209,w1=210,C1=211,R1=212,D1=213,N1=214,jd=0,Zd=1,Kd=2,oo=3,Qd=4,Jd=5,$d=6,tp=7,Mx=0,U1=1,L1=2,ds=0,O1=1,z1=2,P1=3,Ex=4,I1=5,B1=6,F1=7,Tx=300,lo=301,co=302,ep=303,np=304,Nu=306,El=1e3,Ws=1001,ip=1002,Ii=1003,H1=1004,tu=1005,Qi=1006,dd=1007,js=1008,Ra=1009,bx=1010,Ax=1011,Tl=1012,Op=1013,Zs=1014,Aa=1015,Al=1016,zp=1017,Pp=1018,uo=1020,wx=35902,Cx=1021,Rx=1022,zi=1023,Dx=1024,Nx=1025,so=1026,fo=1027,Ux=1028,Ip=1029,Lx=1030,Bp=1031,Fp=1033,Mu=33776,Eu=33777,Tu=33778,bu=33779,ap=35840,sp=35841,rp=35842,op=35843,lp=36196,cp=37492,up=37496,fp=37808,hp=37809,dp=37810,pp=37811,mp=37812,gp=37813,vp=37814,_p=37815,xp=37816,yp=37817,Sp=37818,Mp=37819,Ep=37820,Tp=37821,Au=36492,bp=36494,Ap=36495,Ox=36283,wp=36284,Cp=36285,Rp=36286,G1=3200,V1=3201,zx=0,X1=1,fs="",Ei="srgb",po="srgb-linear",Uu="linear",Ge="srgb",Fr=7680,v_=519,k1=512,q1=513,Y1=514,Px=515,W1=516,j1=517,Z1=518,K1=519,__=35044,x_="300 es",wa=2e3,Cu=2001;class mo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let y_=1234567;const _l=Math.PI/180,bl=180/Math.PI;function go(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function dn(o,e,i){return Math.max(e,Math.min(i,o))}function Hp(o,e){return(o%e+e)%e}function Q1(o,e,i,s,l){return s+(o-e)*(l-s)/(i-e)}function J1(o,e,i){return o!==e?(i-o)/(e-o):0}function xl(o,e,i){return(1-i)*o+i*e}function $1(o,e,i,s){return xl(o,e,1-Math.exp(-i*s))}function tE(o,e=1){return e-Math.abs(Hp(o,e*2)-e)}function eE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function nE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function iE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function aE(o,e){return o+Math.random()*(e-o)}function sE(o){return o*(.5-Math.random())}function rE(o){o!==void 0&&(y_=o);let e=y_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oE(o){return o*_l}function lE(o){return o*bl}function cE(o){return(o&o-1)===0&&o!==0}function uE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function fE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function hE(o,e,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),g=u((e+s)/2),v=h((e+s)/2),m=u((e-s)/2),y=h((e-s)/2),S=u((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":o.set(d*v,p*m,p*y,d*g);break;case"YZY":o.set(p*y,d*v,p*m,d*g);break;case"ZXZ":o.set(p*m,p*y,d*v,d*g);break;case"XZX":o.set(d*v,p*E,p*S,d*g);break;case"YXY":o.set(p*S,d*v,p*E,d*g);break;case"ZYZ":o.set(p*E,p*S,d*v,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function to(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Hr={DEG2RAD:_l,RAD2DEG:bl,generateUUID:go,clamp:dn,euclideanModulo:Hp,mapLinear:Q1,inverseLerp:J1,lerp:xl,damp:$1,pingpong:tE,smoothstep:eE,smootherstep:nE,randInt:iE,randFloat:aE,randFloatSpread:sE,seededRandom:rE,degToRad:oE,radToDeg:lE,isPowerOfTwo:cE,ceilPowerOfTwo:uE,floorPowerOfTwo:fE,setQuaternionFromProperEuler:hE,normalize:Vn,denormalize:to};class kt{constructor(e=0,i=0){kt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(e,i,s,l,u,h,d,p,g){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,p,g)}set(e,i,s,l,u,h,d,p,g){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],v=s[4],m=s[7],y=s[2],S=s[5],E=s[8],b=l[0],M=l[3],x=l[6],U=l[1],L=l[4],R=l[7],Y=l[2],I=l[5],P=l[8];return u[0]=h*b+d*U+p*Y,u[3]=h*M+d*L+p*I,u[6]=h*x+d*R+p*P,u[1]=g*b+v*U+m*Y,u[4]=g*M+v*L+m*I,u[7]=g*x+v*R+m*P,u[2]=y*b+S*U+E*Y,u[5]=y*M+S*L+E*I,u[8]=y*x+S*R+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8];return i*h*v-i*d*g-s*u*v+s*d*p+l*u*g-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],m=v*h-d*g,y=d*p-v*u,S=g*u-h*p,E=i*m+s*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=m*b,e[1]=(l*g-v*s)*b,e[2]=(d*s-l*h)*b,e[3]=y*b,e[4]=(v*i-l*p)*b,e[5]=(l*u-d*i)*b,e[6]=S*b,e[7]=(s*p-g*i)*b,e[8]=(h*i-s*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const p=Math.cos(u),g=Math.sin(u);return this.set(s*p,s*g,-s*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(pd.makeScale(e,i)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,i){return this.premultiply(pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new me;function Ix(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ru(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dE(){const o=Ru("canvas");return o.style.display="block",o}const S_={};function gl(o){o in S_||(S_[o]=!0,console.warn(o))}function pE(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function mE(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gE(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const De={enabled:!0,workingColorSpace:po,spaces:{},convert:function(o,e,i){return this.enabled===!1||e===i||!e||!i||(this.spaces[e].transfer===Ge&&(o.r=Ca(o.r),o.g=Ca(o.g),o.b=Ca(o.b)),this.spaces[e].primaries!==this.spaces[i].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[i].fromXYZ)),this.spaces[i].transfer===Ge&&(o.r=ro(o.r),o.g=ro(o.g),o.b=ro(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===fs?Uu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,i){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[i].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const M_=[.64,.33,.3,.6,.15,.06],E_=[.2126,.7152,.0722],T_=[.3127,.329],b_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);De.define({[po]:{primaries:M_,whitePoint:T_,transfer:Uu,toXYZ:b_,fromXYZ:A_,luminanceCoefficients:E_,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:M_,whitePoint:T_,transfer:Ge,toXYZ:b_,fromXYZ:A_,luminanceCoefficients:E_,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}});let Gr;class vE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=Ru("canvas")),Gr.width=e.width,Gr.height=e.height;const s=Gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Gr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ru("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ca(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _E=0;class Bx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(md(l[h].image)):u.push(md(l[h]))}else u=md(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function md(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?vE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;class qn extends mo{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=Ws,l=Ws,u=Qi,h=js,d=zi,p=Ra,g=qn.DEFAULT_ANISOTROPY,v=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=go(),this.name="",this.source=new Bx(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case El:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case El:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Tx;qn.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,i=0,s=0,l=1){Ve.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const p=e.elements,g=p[0],v=p[4],m=p[8],y=p[1],S=p[5],E=p[9],b=p[2],M=p[6],x=p[10];if(Math.abs(v-y)<.01&&Math.abs(m-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(m+b)<.1&&Math.abs(E+M)<.1&&Math.abs(g+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(g+1)/2,R=(S+1)/2,Y=(x+1)/2,I=(v+y)/4,P=(m+b)/4,F=(E+M)/4;return L>R&&L>Y?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=I/s,u=P/s):R>Y?R<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),s=I/l,u=F/l):Y<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(Y),s=P/u,l=F/u),this.set(s,l,u,i),this}let U=Math.sqrt((M-E)*(M-E)+(m-b)*(m-b)+(y-v)*(y-v));return Math.abs(U)<.001&&(U=1),this.x=(M-E)/U,this.y=(m-b)/U,this.z=(y-v)/U,this.w=Math.acos((g+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yE extends mo{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ve(0,0,e,i),this.scissorTest=!1,this.viewport=new Ve(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new qn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Bx(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends yE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Fx extends qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let p=s[l+0],g=s[l+1],v=s[l+2],m=s[l+3];const y=u[h+0],S=u[h+1],E=u[h+2],b=u[h+3];if(d===0){e[i+0]=p,e[i+1]=g,e[i+2]=v,e[i+3]=m;return}if(d===1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=b;return}if(m!==b||p!==y||g!==S||v!==E){let M=1-d;const x=p*y+g*S+v*E+m*b,U=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const Y=Math.sqrt(L),I=Math.atan2(Y,x*U);M=Math.sin(M*I)/Y,d=Math.sin(d*I)/Y}const R=d*U;if(p=p*M+y*R,g=g*M+S*R,v=v*M+E*R,m=m*M+b*R,M===1-d){const Y=1/Math.sqrt(p*p+g*g+v*v+m*m);p*=Y,g*=Y,v*=Y,m*=Y}}e[i]=p,e[i+1]=g,e[i+2]=v,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],p=s[l+1],g=s[l+2],v=s[l+3],m=u[h],y=u[h+1],S=u[h+2],E=u[h+3];return e[i]=d*E+v*m+p*S-g*y,e[i+1]=p*E+v*y+g*m-d*S,e[i+2]=g*E+v*S+d*y-p*m,e[i+3]=v*E-d*m-p*y-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(s/2),v=d(l/2),m=d(u/2),y=p(s/2),S=p(l/2),E=p(u/2);switch(h){case"XYZ":this._x=y*v*m+g*S*E,this._y=g*S*m-y*v*E,this._z=g*v*E+y*S*m,this._w=g*v*m-y*S*E;break;case"YXZ":this._x=y*v*m+g*S*E,this._y=g*S*m-y*v*E,this._z=g*v*E-y*S*m,this._w=g*v*m+y*S*E;break;case"ZXY":this._x=y*v*m-g*S*E,this._y=g*S*m+y*v*E,this._z=g*v*E+y*S*m,this._w=g*v*m-y*S*E;break;case"ZYX":this._x=y*v*m-g*S*E,this._y=g*S*m+y*v*E,this._z=g*v*E-y*S*m,this._w=g*v*m+y*S*E;break;case"YZX":this._x=y*v*m+g*S*E,this._y=g*S*m+y*v*E,this._z=g*v*E-y*S*m,this._w=g*v*m-y*S*E;break;case"XZY":this._x=y*v*m-g*S*E,this._y=g*S*m-y*v*E,this._z=g*v*E+y*S*m,this._w=g*v*m+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],g=i[2],v=i[6],m=i[10],y=s+d+m;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-g)*S,this._z=(h-l)*S}else if(s>d&&s>m){const S=2*Math.sqrt(1+s-d-m);this._w=(v-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(u+g)/S}else if(d>m){const S=2*Math.sqrt(1+d-s-m);this._w=(u-g)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+m-s-d);this._w=(h-l)/S,this._x=(u+g)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,p=i._y,g=i._z,v=i._w;return this._x=s*v+h*d+l*g-u*p,this._y=l*v+h*p+u*d-s*g,this._z=u*v+h*g+s*p-l*d,this._w=h*v-s*d-l*p-u*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,d),m=Math.sin((1-i)*v)/g,y=Math.sin(i*v)/g;return this._w=h*m+this._w*y,this._x=s*m+this._x*y,this._y=l*m+this._y*y,this._z=u*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,i=0,s=0){G.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(w_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(w_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*s),v=2*(d*i-u*l),m=2*(u*s-h*i);return this.x=i+p*g+h*m-d*v,this.y=s+p*v+d*g-u*m,this.z=l+p*m+u*v-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gd=new G,w_=new wl;class Cl{constructor(e=new G(1/0,1/0,1/0),i=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(u,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),eu.copy(s.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),nu.subVectors(this.max,fl),Vr.subVectors(e.a,fl),Xr.subVectors(e.b,fl),kr.subVectors(e.c,fl),ss.subVectors(Xr,Vr),rs.subVectors(kr,Xr),Is.subVectors(Vr,kr);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Is.z,Is.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Is.z,0,-Is.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Is.y,Is.x,0];return!vd(i,Vr,Xr,kr,nu)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,Vr,Xr,kr,nu))?!1:(iu.crossVectors(ss,rs),i=[iu.x,iu.y,iu.z],vd(i,Vr,Xr,kr,nu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ya=[new G,new G,new G,new G,new G,new G,new G,new G],Ni=new G,eu=new Cl,Vr=new G,Xr=new G,kr=new G,ss=new G,rs=new G,Is=new G,fl=new G,nu=new G,iu=new G,Bs=new G;function vd(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Bs.fromArray(o,u);const d=l.x*Math.abs(Bs.x)+l.y*Math.abs(Bs.y)+l.z*Math.abs(Bs.z),p=e.dot(Bs),g=i.dot(Bs),v=s.dot(Bs);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>d)return!1}return!0}const ME=new Cl,hl=new G,_d=new G;class Gp{constructor(e=new G,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):ME.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);const i=hl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(hl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(_d)),this.expandByPoint(hl.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sa=new G,xd=new G,au=new G,os=new G,yd=new G,su=new G,Sd=new G;class EE{constructor(e=new G,i=new G(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){xd.copy(e).add(i).multiplyScalar(.5),au.copy(i).sub(e).normalize(),os.copy(this.origin).sub(xd);const u=e.distanceTo(i)*.5,h=-this.direction.dot(au),d=os.dot(this.direction),p=-os.dot(au),g=os.lengthSq(),v=Math.abs(1-h*h);let m,y,S,E;if(v>0)if(m=h*p-d,y=h*d-p,E=u*v,m>=0)if(y>=-E)if(y<=E){const b=1/v;m*=b,y*=b,S=m*(m+h*y+2*d)+y*(h*m+y+2*p)+g}else y=u,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;else y=-u,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;else y<=-E?(m=Math.max(0,-(-h*u+d)),y=m>0?-u:Math.min(Math.max(-u,-p),u),S=-m*m+y*(y+2*p)+g):y<=E?(m=0,y=Math.min(Math.max(-u,-p),u),S=y*(y+2*p)+g):(m=Math.max(0,-(h*u+d)),y=m>0?u:Math.min(Math.max(-u,-p),u),S=-m*m+y*(y+2*p)+g);else y=h>0?-u:u,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(xd).addScaledVector(au,y),S}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,p;const g=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,y=this.origin;return g>=0?(s=(e.min.x-y.x)*g,l=(e.max.x-y.x)*g):(s=(e.max.x-y.x)*g,l=(e.min.x-y.x)*g),v>=0?(u=(e.min.y-y.y)*v,h=(e.max.y-y.y)*v):(u=(e.max.y-y.y)*v,h=(e.min.y-y.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-y.z)*m,p=(e.max.z-y.z)*m):(d=(e.max.z-y.z)*m,p=(e.min.z-y.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,s,l,u){yd.subVectors(i,e),su.subVectors(s,e),Sd.crossVectors(yd,su);let h=this.direction.dot(Sd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;os.subVectors(this.origin,e);const p=d*this.direction.dot(su.crossVectors(os,su));if(p<0)return null;const g=d*this.direction.dot(yd.cross(os));if(g<0||p+g>h)return null;const v=-d*os.dot(Sd);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,i,s,l,u,h,d,p,g,v,m,y,S,E,b,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,p,g,v,m,y,S,E,b,M)}set(e,i,s,l,u,h,d,p,g,v,m,y,S,E,b,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=p,x[2]=g,x[6]=v,x[10]=m,x[14]=y,x[3]=S,x[7]=E,x[11]=b,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/qr.setFromMatrixColumn(e,0).length(),u=1/qr.setFromMatrixColumn(e,1).length(),h=1/qr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),v=Math.cos(u),m=Math.sin(u);if(e.order==="XYZ"){const y=h*v,S=h*m,E=d*v,b=d*m;i[0]=p*v,i[4]=-p*m,i[8]=g,i[1]=S+E*g,i[5]=y-b*g,i[9]=-d*p,i[2]=b-y*g,i[6]=E+S*g,i[10]=h*p}else if(e.order==="YXZ"){const y=p*v,S=p*m,E=g*v,b=g*m;i[0]=y+b*d,i[4]=E*d-S,i[8]=h*g,i[1]=h*m,i[5]=h*v,i[9]=-d,i[2]=S*d-E,i[6]=b+y*d,i[10]=h*p}else if(e.order==="ZXY"){const y=p*v,S=p*m,E=g*v,b=g*m;i[0]=y-b*d,i[4]=-h*m,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*v,i[9]=b-y*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const y=h*v,S=h*m,E=d*v,b=d*m;i[0]=p*v,i[4]=E*g-S,i[8]=y*g+b,i[1]=p*m,i[5]=b*g+y,i[9]=S*g-E,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const y=h*p,S=h*g,E=d*p,b=d*g;i[0]=p*v,i[4]=b-y*m,i[8]=E*m+S,i[1]=m,i[5]=h*v,i[9]=-d*v,i[2]=-g*v,i[6]=S*m+E,i[10]=y-b*m}else if(e.order==="XZY"){const y=h*p,S=h*g,E=d*p,b=d*g;i[0]=p*v,i[4]=-m,i[8]=g*v,i[1]=y*m+b,i[5]=h*v,i[9]=S*m-E,i[2]=E*m-S,i[6]=d*v,i[10]=b*m+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TE,e,bE)}lookAt(e,i,s){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ls.crossVectors(s,ci),ls.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ls.crossVectors(s,ci)),ls.normalize(),ru.crossVectors(ci,ls),l[0]=ls.x,l[4]=ru.x,l[8]=ci.x,l[1]=ls.y,l[5]=ru.y,l[9]=ci.y,l[2]=ls.z,l[6]=ru.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],v=s[1],m=s[5],y=s[9],S=s[13],E=s[2],b=s[6],M=s[10],x=s[14],U=s[3],L=s[7],R=s[11],Y=s[15],I=l[0],P=l[4],F=l[8],N=l[12],w=l[1],z=l[5],it=l[9],nt=l[13],dt=l[2],ut=l[6],k=l[10],st=l[14],J=l[3],yt=l[7],St=l[11],Ht=l[15];return u[0]=h*I+d*w+p*dt+g*J,u[4]=h*P+d*z+p*ut+g*yt,u[8]=h*F+d*it+p*k+g*St,u[12]=h*N+d*nt+p*st+g*Ht,u[1]=v*I+m*w+y*dt+S*J,u[5]=v*P+m*z+y*ut+S*yt,u[9]=v*F+m*it+y*k+S*St,u[13]=v*N+m*nt+y*st+S*Ht,u[2]=E*I+b*w+M*dt+x*J,u[6]=E*P+b*z+M*ut+x*yt,u[10]=E*F+b*it+M*k+x*St,u[14]=E*N+b*nt+M*st+x*Ht,u[3]=U*I+L*w+R*dt+Y*J,u[7]=U*P+L*z+R*ut+Y*yt,u[11]=U*F+L*it+R*k+Y*St,u[15]=U*N+L*nt+R*st+Y*Ht,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],p=e[9],g=e[13],v=e[2],m=e[6],y=e[10],S=e[14],E=e[3],b=e[7],M=e[11],x=e[15];return E*(+u*p*m-l*g*m-u*d*y+s*g*y+l*d*S-s*p*S)+b*(+i*p*S-i*g*y+u*h*y-l*h*S+l*g*v-u*p*v)+M*(+i*g*m-i*d*S-u*h*m+s*h*S+u*d*v-s*g*v)+x*(-l*d*v-i*p*m+i*d*y+l*h*m-s*h*y+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],p=e[6],g=e[7],v=e[8],m=e[9],y=e[10],S=e[11],E=e[12],b=e[13],M=e[14],x=e[15],U=m*M*g-b*y*g+b*p*S-d*M*S-m*p*x+d*y*x,L=E*y*g-v*M*g-E*p*S+h*M*S+v*p*x-h*y*x,R=v*b*g-E*m*g+E*d*S-h*b*S-v*d*x+h*m*x,Y=E*m*p-v*b*p-E*d*y+h*b*y+v*d*M-h*m*M,I=i*U+s*L+l*R+u*Y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=U*P,e[1]=(b*y*u-m*M*u-b*l*S+s*M*S+m*l*x-s*y*x)*P,e[2]=(d*M*u-b*p*u+b*l*g-s*M*g-d*l*x+s*p*x)*P,e[3]=(m*p*u-d*y*u-m*l*g+s*y*g+d*l*S-s*p*S)*P,e[4]=L*P,e[5]=(v*M*u-E*y*u+E*l*S-i*M*S-v*l*x+i*y*x)*P,e[6]=(E*p*u-h*M*u-E*l*g+i*M*g+h*l*x-i*p*x)*P,e[7]=(h*y*u-v*p*u+v*l*g-i*y*g-h*l*S+i*p*S)*P,e[8]=R*P,e[9]=(E*m*u-v*b*u-E*s*S+i*b*S+v*s*x-i*m*x)*P,e[10]=(h*b*u-E*d*u+E*s*g-i*b*g-h*s*x+i*d*x)*P,e[11]=(v*d*u-h*m*u-v*s*g+i*m*g+h*s*S-i*d*S)*P,e[12]=Y*P,e[13]=(v*b*l-E*m*l+E*s*y-i*b*y-v*s*M+i*m*M)*P,e[14]=(E*d*l-h*b*l-E*s*p+i*b*p+h*s*M-i*d*M)*P,e[15]=(h*m*l-v*d*l+v*s*p-i*m*p-h*s*y+i*d*y)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,p=e.z,g=u*h,v=u*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,v*d+s,v*p-l*h,0,g*p-l*d,v*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,g=u+u,v=h+h,m=d+d,y=u*g,S=u*v,E=u*m,b=h*v,M=h*m,x=d*m,U=p*g,L=p*v,R=p*m,Y=s.x,I=s.y,P=s.z;return l[0]=(1-(b+x))*Y,l[1]=(S+R)*Y,l[2]=(E-L)*Y,l[3]=0,l[4]=(S-R)*I,l[5]=(1-(y+x))*I,l[6]=(M+U)*I,l[7]=0,l[8]=(E+L)*P,l[9]=(M-U)*P,l[10]=(1-(y+b))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=qr.set(l[0],l[1],l[2]).length();const h=qr.set(l[4],l[5],l[6]).length(),d=qr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Ui.copy(this);const g=1/u,v=1/h,m=1/d;return Ui.elements[0]*=g,Ui.elements[1]*=g,Ui.elements[2]*=g,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=m,Ui.elements[9]*=m,Ui.elements[10]*=m,i.setFromRotationMatrix(Ui),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=wa){const p=this.elements,g=2*u/(i-e),v=2*u/(s-l),m=(i+e)/(i-e),y=(s+l)/(s-l);let S,E;if(d===wa)S=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Cu)S=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=wa){const p=this.elements,g=1/(i-e),v=1/(s-l),m=1/(h-u),y=(i+e)*g,S=(s+l)*v;let E,b;if(d===wa)E=(h+u)*m,b=-2*m;else if(d===Cu)E=u*m,b=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const qr=new G,Ui=new Je,TE=new G(0,0,0),bE=new G(1,1,1),ls=new G,ru=new G,ci=new G,C_=new Je,R_=new wl;class ta{constructor(e=0,i=0,s=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],g=l[5],v=l[9],m=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,u),this._z=0);break;case"ZXY":this._x=Math.asin(dn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-dn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(dn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-m,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return C_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return R_.setFromEuler(this),this.setFromQuaternion(R_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Hx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AE=0;const D_=new G,Yr=new wl,Ma=new Je,ou=new G,dl=new G,wE=new G,CE=new wl,N_=new G(1,0,0),U_=new G(0,1,0),L_=new G(0,0,1),O_={type:"added"},RE={type:"removed"},Wr={type:"childadded",child:null},Md={type:"childremoved",child:null};class zn extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new G,i=new ta,s=new wl,l=new G(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new me}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Yr.setFromAxisAngle(e,i),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,i){return Yr.setFromAxisAngle(e,i),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(N_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(L_,e)}translateOnAxis(e,i){return D_.copy(e).applyQuaternion(this.quaternion),this.position.add(D_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(N_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(L_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ou.copy(e):ou.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(dl,ou,this.up):Ma.lookAt(ou,dl,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Yr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O_),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(RE),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O_),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,e,wE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,CE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const m=p[g];u(e.shapes,m)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(u(e.materials,this.material[p]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),v=h(e.images),m=h(e.shapes),y=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const g in d){const v=d[g];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new G(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new G,Ea=new G,Ed=new G,Ta=new G,jr=new G,Zr=new G,z_=new G,Td=new G,bd=new G,Ad=new G,wd=new Ve,Cd=new Ve,Rd=new Ve;class Oi{constructor(e=new G,i=new G,s=new G){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Li.subVectors(l,i),Ea.subVectors(s,i),Ed.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(Ea),p=Li.dot(Ed),g=Ea.dot(Ea),v=Ea.dot(Ed),m=h*g-d*d;if(m===0)return u.set(0,0,0),null;const y=1/m,S=(g*p-d*v)*y,E=(h*v-d*p)*y;return u.set(1-S-E,E,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,s,l,u,h,d,p){return this.getBarycoord(e,i,s,l,Ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ta.x),p.addScaledVector(h,Ta.y),p.addScaledVector(d,Ta.z),p)}static getInterpolatedAttribute(e,i,s,l,u,h){return wd.setScalar(0),Cd.setScalar(0),Rd.setScalar(0),wd.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,s),Rd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(wd,u.x),h.addScaledVector(Cd,u.y),h.addScaledVector(Rd,u.z),h}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),Ea.subVectors(e,i),Li.cross(Ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Li.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;jr.subVectors(l,s),Zr.subVectors(u,s),Td.subVectors(e,s);const p=jr.dot(Td),g=Zr.dot(Td);if(p<=0&&g<=0)return i.copy(s);bd.subVectors(e,l);const v=jr.dot(bd),m=Zr.dot(bd);if(v>=0&&m<=v)return i.copy(l);const y=p*m-v*g;if(y<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(jr,h);Ad.subVectors(e,u);const S=jr.dot(Ad),E=Zr.dot(Ad);if(E>=0&&S<=E)return i.copy(u);const b=S*g-p*E;if(b<=0&&g>=0&&E<=0)return d=g/(g-E),i.copy(s).addScaledVector(Zr,d);const M=v*E-S*m;if(M<=0&&m-v>=0&&S-E>=0)return z_.subVectors(u,l),d=(m-v)/(m-v+(S-E)),i.copy(l).addScaledVector(z_,d);const x=1/(M+b+y);return h=b*x,d=y*x,i.copy(s).addScaledVector(jr,h).addScaledVector(Zr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},lu={h:0,s:0,l:0};function Dd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class we{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=s,De.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=De.workingColorSpace){if(e=Hp(e,1),i=dn(i,0,1),s=dn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Dd(h,u,e+1/3),this.g=Dd(h,u,e),this.b=Dd(h,u,e-1/3)}return De.toWorkingColorSpace(this,l),this}setStyle(e,i=Ei){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const s=Gx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return De.fromWorkingColorSpace(Ln.copy(this),e),Math.round(dn(Ln.r*255,0,255))*65536+Math.round(dn(Ln.g*255,0,255))*256+Math.round(dn(Ln.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.fromWorkingColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,u=Ln.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,g;const v=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=v<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-u)/m+(l<u?6:0);break;case l:p=(u-s)/m+2;break;case u:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=v,e}getRGB(e,i=De.workingColorSpace){return De.fromWorkingColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Ei){De.fromWorkingColorSpace(Ln.copy(this),e);const i=Ln.r,s=Ln.g,l=Ln.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+i,cs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(cs),e.getHSL(lu);const s=xl(cs.h,lu.h,i),l=xl(cs.s,lu.s,i),u=xl(cs.l,lu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new we;we.NAMES=Gx;let DE=0;class Rl extends mo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=go(),this.name="",this.blending=ao,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=Wd,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Yd&&(s.blendSrc=this.blendSrc),this.blendDst!==Wd&&(s.blendDst=this.blendDst),this.blendEquation!==qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class no extends Rl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new G,cu=new kt;class $i{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=__,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cu.fromBufferAttribute(this,i),cu.applyMatrix3(e),this.setXY(i,cu.x,cu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=to(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=to(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=to(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=to(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=to(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==__&&(e.usage=this.usage),e}}class Vx extends $i{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Xx extends $i{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Xe extends $i{constructor(e,i,s){super(new Float32Array(e),i,s)}}let NE=0;const Mi=new Je,Nd=new zn,Kr=new G,ui=new Cl,pl=new Cl,Sn=new G;class Jn extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ix(e)?Xx:Vx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new me().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Xe(s,3))}else{for(let s=0,l=i.count;s<l;s++){const u=e[s];i.setXYZ(s,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ui.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];pl.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ui.min,pl.min),ui.expandByPoint(Sn),Sn.addVectors(ui.max,pl.max),ui.expandByPoint(Sn)):(ui.expandByPoint(pl.min),ui.expandByPoint(pl.max))}ui.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)Sn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)Sn.fromBufferAttribute(d,g),p&&(Kr.fromBufferAttribute(e,g),Sn.add(Kr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let F=0;F<s.count;F++)d[F]=new G,p[F]=new G;const g=new G,v=new G,m=new G,y=new kt,S=new kt,E=new kt,b=new G,M=new G;function x(F,N,w){g.fromBufferAttribute(s,F),v.fromBufferAttribute(s,N),m.fromBufferAttribute(s,w),y.fromBufferAttribute(u,F),S.fromBufferAttribute(u,N),E.fromBufferAttribute(u,w),v.sub(g),m.sub(g),S.sub(y),E.sub(y);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(z),M.copy(m).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(z),d[F].add(b),d[N].add(b),d[w].add(b),p[F].add(M),p[N].add(M),p[w].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let F=0,N=U.length;F<N;++F){const w=U[F],z=w.start,it=w.count;for(let nt=z,dt=z+it;nt<dt;nt+=3)x(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const L=new G,R=new G,Y=new G,I=new G;function P(F){Y.fromBufferAttribute(l,F),I.copy(Y);const N=d[F];L.copy(N),L.sub(Y.multiplyScalar(Y.dot(N))).normalize(),R.crossVectors(I,N);const z=R.dot(p[F])<0?-1:1;h.setXYZW(F,L.x,L.y,L.z,z)}for(let F=0,N=U.length;F<N;++F){const w=U[F],z=w.start,it=w.count;for(let nt=z,dt=z+it;nt<dt;nt+=3)P(e.getX(nt+0)),P(e.getX(nt+1)),P(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new $i(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new G,u=new G,h=new G,d=new G,p=new G,g=new G,v=new G,m=new G;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),b=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),d.add(v),p.add(v),g.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const g=d.array,v=d.itemSize,m=d.normalized,y=new g.constructor(p.length*v);let S=0,E=0;for(let b=0,M=p.length;b<M;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*v;for(let x=0;x<v;x++)y[E++]=g[S++]}return new $i(y,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,s);i.setAttribute(d,g)}const u=this.morphAttributes;for(const d in u){const p=[],g=u[d];for(let v=0,m=g.length;v<m;v++){const y=g[v],S=e(y,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let m=0,y=g.length;m<y;m++){const S=g[m];v.push(S.toJSON(e.data))}v.length>0&&(l[p]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const u=e.morphAttributes;for(const g in u){const v=[],m=u[g];for(let y=0,S=m.length;y<S;y++)v.push(m[y].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,v=h.length;g<v;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const P_=new Je,Fs=new EE,uu=new Gp,I_=new G,fu=new G,hu=new G,du=new G,Ud=new G,pu=new G,B_=new G,mu=new G;class Jt extends zn{constructor(e=new Jn,i=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){pu.set(0,0,0);for(let p=0,g=u.length;p<g;p++){const v=d[p],m=u[p];v!==0&&(Ud.fromBufferAttribute(m,e),h?pu.addScaledVector(Ud,v):pu.addScaledVector(Ud.sub(i),v))}i.add(pu)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uu.copy(s.boundingSphere),uu.applyMatrix4(u),Fs.copy(e.ray).recast(e.near),!(uu.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(uu,I_)===null||Fs.origin.distanceToSquared(I_)>(e.far-e.near)**2))&&(P_.copy(u).invert(),Fs.copy(e.ray).applyMatrix4(P_),!(s.boundingBox!==null&&Fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Fs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,g=u.attributes.uv,v=u.attributes.uv1,m=u.attributes.normal,y=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const M=y[E],x=h[M.materialIndex],U=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let R=U,Y=L;R<Y;R+=3){const I=d.getX(R),P=d.getX(R+1),F=d.getX(R+2);l=gu(this,x,e,s,g,v,m,I,P,F),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const U=d.getX(M),L=d.getX(M+1),R=d.getX(M+2);l=gu(this,h,e,s,g,v,m,U,L,R),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,b=y.length;E<b;E++){const M=y[E],x=h[M.materialIndex],U=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let R=U,Y=L;R<Y;R+=3){const I=R,P=R+1,F=R+2;l=gu(this,x,e,s,g,v,m,I,P,F),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let M=E,x=b;M<x;M+=3){const U=M,L=M+1,R=M+2;l=gu(this,h,e,s,g,v,m,U,L,R),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function UE(o,e,i,s,l,u,h,d){let p;if(e.side===kn?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,e.side===ps,d),p===null)return null;mu.copy(d),mu.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(mu);return g<i.near||g>i.far?null:{distance:g,point:mu.clone(),object:o}}function gu(o,e,i,s,l,u,h,d,p,g){o.getVertexPosition(d,fu),o.getVertexPosition(p,hu),o.getVertexPosition(g,du);const v=UE(o,e,i,s,fu,hu,du,B_);if(v){const m=new G;Oi.getBarycoord(B_,fu,hu,du,m),l&&(v.uv=Oi.getInterpolatedAttribute(l,d,p,g,m,new kt)),u&&(v.uv1=Oi.getInterpolatedAttribute(u,d,p,g,m,new kt)),h&&(v.normal=Oi.getInterpolatedAttribute(h,d,p,g,m,new G),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:g,normal:new G,materialIndex:0};Oi.getNormal(fu,hu,du,y.normal),v.face=y,v.barycoord=m}return v}class $s extends Jn{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],g=[],v=[],m=[];let y=0,S=0;E("z","y","x",-1,-1,s,i,e,h,u,0),E("z","y","x",1,-1,s,i,-e,h,u,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(m,2));function E(b,M,x,U,L,R,Y,I,P,F,N){const w=R/P,z=Y/F,it=R/2,nt=Y/2,dt=I/2,ut=P+1,k=F+1;let st=0,J=0;const yt=new G;for(let St=0;St<k;St++){const Ht=St*z-nt;for(let re=0;re<ut;re++){const ee=re*w-it;yt[b]=ee*U,yt[M]=Ht*L,yt[x]=dt,g.push(yt.x,yt.y,yt.z),yt[b]=0,yt[M]=0,yt[x]=I>0?1:-1,v.push(yt.x,yt.y,yt.z),m.push(re/P),m.push(1-St/F),st+=1}}for(let St=0;St<F;St++)for(let Ht=0;Ht<P;Ht++){const re=y+Ht+ut*St,ee=y+Ht+ut*(St+1),D=y+(Ht+1)+ut*(St+1),W=y+(Ht+1)+ut*St;p.push(re,ee,W),p.push(ee,D,W),J+=6}d.addGroup(S,J,N),S+=J,y+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Xn(o){const e={};for(let i=0;i<o.length;i++){const s=ho(o[i]);for(const l in s)e[l]=s[l]}return e}function LE(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function kx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const OE={clone:ho,merge:Xn};var zE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Rl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zE,this.fragmentShader=PE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qx extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=wa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new G,F_=new kt,H_=new kt;class fi extends qx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,F_,H_),i.subVectors(H_,F_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(_l*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qr=-90,Jr=1;class IE extends zn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Qr,Jr,e,i);l.layers=this.layers,this.add(l);const u=new fi(Qr,Jr,e,i);u.layers=this.layers,this.add(u);const h=new fi(Qr,Jr,e,i);h.layers=this.layers,this.add(h);const d=new fi(Qr,Jr,e,i);d.layers=this.layers,this.add(d);const p=new fi(Qr,Jr,e,i);p.layers=this.layers,this.add(p);const g=new fi(Qr,Jr,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const g of i)this.remove(g);if(e===wa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,g,v]=this.children,m=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(m,y,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Yx extends qn{constructor(e,i,s,l,u,h,d,p,g,v){e=e!==void 0?e:[],i=i!==void 0?i:lo,super(e,i,s,l,u,h,d,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BE extends Ks{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Yx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new $s(5,5,5),u=new ea({name:"CubemapFromEquirect",uniforms:ho(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:hs});u.uniforms.tEquirect.value=i;const h=new Jt(l,u),d=i.minFilter;return i.minFilter===js&&(i.minFilter=Qi),new IE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}const Ld=new G,FE=new G,HE=new me;class Xs{constructor(e=new G(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ld.subVectors(s,i).cross(FE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ld),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||HE.getNormalMatrix(e),l=this.coplanarPoint(Ld).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new Gp,vu=new G;class Vp{constructor(e=new Xs,i=new Xs,s=new Xs,l=new Xs,u=new Xs,h=new Xs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=wa){const s=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],g=l[4],v=l[5],m=l[6],y=l[7],S=l[8],E=l[9],b=l[10],M=l[11],x=l[12],U=l[13],L=l[14],R=l[15];if(s[0].setComponents(p-u,y-g,M-S,R-x).normalize(),s[1].setComponents(p+u,y+g,M+S,R+x).normalize(),s[2].setComponents(p+h,y+v,M+E,R+U).normalize(),s[3].setComponents(p-h,y-v,M-E,R-U).normalize(),s[4].setComponents(p-d,y-m,M-b,R-L).normalize(),i===wa)s[5].setComponents(p+d,y+m,M+b,R+L).normalize();else if(i===Cu)s[5].setComponents(d,m,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(vu.x=l.normal.x>0?e.max.x:e.min.x,vu.y=l.normal.y>0?e.max.y:e.min.y,vu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wx(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function GE(o){const e=new WeakMap;function i(d,p){const g=d.array,v=d.usage,m=g.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,g,v),d.onUploadCallback();let S;if(g instanceof Float32Array)S=o.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=o.SHORT;else if(g instanceof Uint32Array)S=o.UNSIGNED_INT;else if(g instanceof Int32Array)S=o.INT;else if(g instanceof Int8Array)S=o.BYTE;else if(g instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const v=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,v);else{m.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<m.length;S++){const E=m[y],b=m[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,m[y]=b)}m.length=y+1;for(let S=0,E=m.length;S<E;S++){const b=m[S];o.bufferSubData(g,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:u,update:h}}class Dl extends Jn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,v=p+1,m=e/d,y=i/p,S=[],E=[],b=[],M=[];for(let x=0;x<v;x++){const U=x*y-h;for(let L=0;L<g;L++){const R=L*m-u;E.push(R,-U,0),b.push(0,0,1),M.push(L/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<d;U++){const L=U+g*x,R=U+g*(x+1),Y=U+1+g*(x+1),I=U+1+g*x;S.push(L,R,I),S.push(R,Y,I)}this.setIndex(S),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var VE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",xT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ib=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ub=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ab=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:VE,alphahash_pars_fragment:XE,alphamap_fragment:kE,alphamap_pars_fragment:qE,alphatest_fragment:YE,alphatest_pars_fragment:WE,aomap_fragment:jE,aomap_pars_fragment:ZE,batching_pars_vertex:KE,batching_vertex:QE,begin_vertex:JE,beginnormal_vertex:$E,bsdfs:tT,iridescence_fragment:eT,bumpmap_pars_fragment:nT,clipping_planes_fragment:iT,clipping_planes_pars_fragment:aT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:rT,color_fragment:oT,color_pars_fragment:lT,color_pars_vertex:cT,color_vertex:uT,common:fT,cube_uv_reflection_fragment:hT,defaultnormal_vertex:dT,displacementmap_pars_vertex:pT,displacementmap_vertex:mT,emissivemap_fragment:gT,emissivemap_pars_fragment:vT,colorspace_fragment:_T,colorspace_pars_fragment:xT,envmap_fragment:yT,envmap_common_pars_fragment:ST,envmap_pars_fragment:MT,envmap_pars_vertex:ET,envmap_physical_pars_fragment:OT,envmap_vertex:TT,fog_vertex:bT,fog_pars_vertex:AT,fog_fragment:wT,fog_pars_fragment:CT,gradientmap_pars_fragment:RT,lightmap_pars_fragment:DT,lights_lambert_fragment:NT,lights_lambert_pars_fragment:UT,lights_pars_begin:LT,lights_toon_fragment:zT,lights_toon_pars_fragment:PT,lights_phong_fragment:IT,lights_phong_pars_fragment:BT,lights_physical_fragment:FT,lights_physical_pars_fragment:HT,lights_fragment_begin:GT,lights_fragment_maps:VT,lights_fragment_end:XT,logdepthbuf_fragment:kT,logdepthbuf_pars_fragment:qT,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:WT,map_fragment:jT,map_pars_fragment:ZT,map_particle_fragment:KT,map_particle_pars_fragment:QT,metalnessmap_fragment:JT,metalnessmap_pars_fragment:$T,morphinstance_vertex:tb,morphcolor_vertex:eb,morphnormal_vertex:nb,morphtarget_pars_vertex:ib,morphtarget_vertex:ab,normal_fragment_begin:sb,normal_fragment_maps:rb,normal_pars_fragment:ob,normal_pars_vertex:lb,normal_vertex:cb,normalmap_pars_fragment:ub,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:db,iridescence_pars_fragment:pb,opaque_fragment:mb,packing:gb,premultiplied_alpha_fragment:vb,project_vertex:_b,dithering_fragment:xb,dithering_pars_fragment:yb,roughnessmap_fragment:Sb,roughnessmap_pars_fragment:Mb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Tb,shadowmap_vertex:bb,shadowmask_pars_fragment:Ab,skinbase_vertex:wb,skinning_pars_vertex:Cb,skinning_vertex:Rb,skinnormal_vertex:Db,specularmap_fragment:Nb,specularmap_pars_fragment:Ub,tonemapping_fragment:Lb,tonemapping_pars_fragment:Ob,transmission_fragment:zb,transmission_pars_fragment:Pb,uv_pars_fragment:Ib,uv_pars_vertex:Bb,uv_vertex:Fb,worldpos_vertex:Hb,background_vert:Gb,background_frag:Vb,backgroundCube_vert:Xb,backgroundCube_frag:kb,cube_vert:qb,cube_frag:Yb,depth_vert:Wb,depth_frag:jb,distanceRGBA_vert:Zb,distanceRGBA_frag:Kb,equirect_vert:Qb,equirect_frag:Jb,linedashed_vert:$b,linedashed_frag:tA,meshbasic_vert:eA,meshbasic_frag:nA,meshlambert_vert:iA,meshlambert_frag:aA,meshmatcap_vert:sA,meshmatcap_frag:rA,meshnormal_vert:oA,meshnormal_frag:lA,meshphong_vert:cA,meshphong_frag:uA,meshphysical_vert:fA,meshphysical_frag:hA,meshtoon_vert:dA,meshtoon_frag:pA,points_vert:mA,points_frag:gA,shadow_vert:vA,shadow_frag:_A,sprite_vert:xA,sprite_frag:yA},Nt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Xn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Xn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Xn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Xn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Xn([Nt.points,Nt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Xn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Xn([Nt.common,Nt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Xn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Xn([Nt.sprite,Nt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Xn([Nt.common,Nt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Xn([Nt.lights,Nt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const _u={r:0,b:0,g:0},Gs=new ta,SA=new Je;function MA(o,e,i,s,l,u,h){const d=new we(0);let p=u===!0?0:1,g,v,m=null,y=0,S=null;function E(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?i:e).get(L)),L}function b(U){let L=!1;const R=E(U);R===null?x(d,p):R&&R.isColor&&(x(R,1),L=!0);const Y=o.xr.getEnvironmentBlendMode();Y==="additive"?s.buffers.color.setClear(0,0,0,1,h):Y==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,L){const R=E(L);R&&(R.isCubeTexture||R.mapping===Nu)?(v===void 0&&(v=new Jt(new $s(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:ho(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(Y,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Gs.copy(L.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Gs)),v.material.toneMapped=De.getTransfer(R.colorSpace)!==Ge,(m!==R||y!==R.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,m=R,y=R.version,S=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(g===void 0&&(g=new Jt(new Dl(2,2),new ea({name:"BackgroundMaterial",uniforms:ho(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=R,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.toneMapped=De.getTransfer(R.colorSpace)!==Ge,R.matrixAutoUpdate===!0&&R.updateMatrix(),g.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||y!==R.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,m=R,y=R.version,S=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function x(U,L){U.getRGB(_u,kx(o)),s.buffers.color.setClear(_u.r,_u.g,_u.b,L,h)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),p=L,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(d,p)},render:b,addToRenderList:M}}function EA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,h=!1;function d(w,z,it,nt,dt){let ut=!1;const k=m(nt,it,z);u!==k&&(u=k,g(u.object)),ut=S(w,nt,it,dt),ut&&E(w,nt,it,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,R(w,z,it,nt),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function p(){return o.createVertexArray()}function g(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function m(w,z,it){const nt=it.wireframe===!0;let dt=s[w.id];dt===void 0&&(dt={},s[w.id]=dt);let ut=dt[z.id];ut===void 0&&(ut={},dt[z.id]=ut);let k=ut[nt];return k===void 0&&(k=y(p()),ut[nt]=k),k}function y(w){const z=[],it=[],nt=[];for(let dt=0;dt<i;dt++)z[dt]=0,it[dt]=0,nt[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:it,attributeDivisors:nt,object:w,attributes:{},index:null}}function S(w,z,it,nt){const dt=u.attributes,ut=z.attributes;let k=0;const st=it.getAttributes();for(const J in st)if(st[J].location>=0){const St=dt[J];let Ht=ut[J];if(Ht===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(Ht=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(Ht=w.instanceColor)),St===void 0||St.attribute!==Ht||Ht&&St.data!==Ht.data)return!0;k++}return u.attributesNum!==k||u.index!==nt}function E(w,z,it,nt){const dt={},ut=z.attributes;let k=0;const st=it.getAttributes();for(const J in st)if(st[J].location>=0){let St=ut[J];St===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const Ht={};Ht.attribute=St,St&&St.data&&(Ht.data=St.data),dt[J]=Ht,k++}u.attributes=dt,u.attributesNum=k,u.index=nt}function b(){const w=u.newAttributes;for(let z=0,it=w.length;z<it;z++)w[z]=0}function M(w){x(w,0)}function x(w,z){const it=u.newAttributes,nt=u.enabledAttributes,dt=u.attributeDivisors;it[w]=1,nt[w]===0&&(o.enableVertexAttribArray(w),nt[w]=1),dt[w]!==z&&(o.vertexAttribDivisor(w,z),dt[w]=z)}function U(){const w=u.newAttributes,z=u.enabledAttributes;for(let it=0,nt=z.length;it<nt;it++)z[it]!==w[it]&&(o.disableVertexAttribArray(it),z[it]=0)}function L(w,z,it,nt,dt,ut,k){k===!0?o.vertexAttribIPointer(w,z,it,dt,ut):o.vertexAttribPointer(w,z,it,nt,dt,ut)}function R(w,z,it,nt){b();const dt=nt.attributes,ut=it.getAttributes(),k=z.defaultAttributeValues;for(const st in ut){const J=ut[st];if(J.location>=0){let yt=dt[st];if(yt===void 0&&(st==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),st==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const St=yt.normalized,Ht=yt.itemSize,re=e.get(yt);if(re===void 0)continue;const ee=re.buffer,D=re.type,W=re.bytesPerElement,vt=D===o.INT||D===o.UNSIGNED_INT||yt.gpuType===Op;if(yt.isInterleavedBufferAttribute){const lt=yt.data,bt=lt.stride,wt=yt.offset;if(lt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<J.locationSize;Dt++)x(J.location+Dt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Dt=0;Dt<J.locationSize;Dt++)M(J.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,ee);for(let Dt=0;Dt<J.locationSize;Dt++)L(J.location+Dt,Ht/J.locationSize,D,St,bt*W,(wt+Ht/J.locationSize*Dt)*W,vt)}else{if(yt.isInstancedBufferAttribute){for(let lt=0;lt<J.locationSize;lt++)x(J.location+lt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let lt=0;lt<J.locationSize;lt++)M(J.location+lt);o.bindBuffer(o.ARRAY_BUFFER,ee);for(let lt=0;lt<J.locationSize;lt++)L(J.location+lt,Ht/J.locationSize,D,St,Ht*W,Ht/J.locationSize*lt*W,vt)}}else if(k!==void 0){const St=k[st];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(J.location,St);break;case 3:o.vertexAttrib3fv(J.location,St);break;case 4:o.vertexAttrib4fv(J.location,St);break;default:o.vertexAttrib1fv(J.location,St)}}}}U()}function Y(){F();for(const w in s){const z=s[w];for(const it in z){const nt=z[it];for(const dt in nt)v(nt[dt].object),delete nt[dt];delete z[it]}delete s[w]}}function I(w){if(s[w.id]===void 0)return;const z=s[w.id];for(const it in z){const nt=z[it];for(const dt in nt)v(nt[dt].object),delete nt[dt];delete z[it]}delete s[w.id]}function P(w){for(const z in s){const it=s[z];if(it[w.id]===void 0)continue;const nt=it[w.id];for(const dt in nt)v(nt[dt].object),delete nt[dt];delete it[w.id]}}function F(){N(),h=!0,u!==l&&(u=l,g(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:N,dispose:Y,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:U}}function TA(o,e,i){let s;function l(g){s=g}function u(g,v){o.drawArrays(s,g,v),i.update(v,s,1)}function h(g,v,m){m!==0&&(o.drawArraysInstanced(s,g,v,m),i.update(v,s,m))}function d(g,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,m);let S=0;for(let E=0;E<m;E++)S+=v[E];i.update(S,s,1)}function p(g,v,m,y){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g.length;E++)h(g[E],v[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,g,0,v,0,y,0,m);let E=0;for(let b=0;b<m;b++)E+=v[b]*y[b];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function bA(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==zi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const F=P===Al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ra&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Aa&&!F)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const m=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Y=E>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:Y,maxSamples:I}}function AA(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new Xs,d=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const S=m.length!==0||y||s!==0||l;return l=y,s=m.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(m,y){i=v(m,y,0)},this.setState=function(m,y,S){const E=m.clippingPlanes,b=m.clipIntersection,M=m.clipShadows,x=o.get(m);if(!l||E===null||E.length===0||u&&!M)u?v(null):g();else{const U=u?0:s,L=U*4;let R=x.clippingState||null;p.value=R,R=v(E,y,L,S);for(let Y=0;Y!==L;++Y)R[Y]=i[Y];x.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(m,y,S,E){const b=m!==null?m.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const x=S+b*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,R=S;L!==b;++L,R+=4)h.copy(m[L]).applyMatrix4(U,d),h.normal.toArray(M,R),M[R+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}function wA(o){let e=new WeakMap;function i(h,d){return d===ep?h.mapping=lo:d===np&&(h.mapping=co),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ep||d===np)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new BE(p.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class jx extends qx{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,h=u+g*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const io=4,G_=[.125,.215,.35,.446,.526,.582],Ys=20,Od=new jx,V_=new we;let zd=null,Pd=0,Id=0,Bd=!1;const ks=(1+Math.sqrt(5))/2,$r=1/ks,X_=[new G(-ks,$r,0),new G(ks,$r,0),new G(-$r,0,ks),new G($r,0,ks),new G(0,ks,-$r),new G(0,ks,$r),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){zd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Pd,Id),this._renderer.xr.enabled=Bd,e.scissorTest=!1,xu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:Al,format:zi,colorSpace:po,depthBuffer:!1},l=k_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CA(u)),this._blurMaterial=RA(u,e,i)}return l}_compileMaterial(e){const i=new Jt(this._lodPlanes[0],e);this._renderer.compile(i,Od)}_sceneToCubeUV(e,i,s,l){const d=new fi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(V_),v.toneMapping=ds,v.autoClear=!1;const S=new no({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new Jt(new $s,S);let b=!1;const M=e.background;M?M.isColor&&(S.color.copy(M),e.background=null,b=!0):(S.color.copy(V_),b=!0);for(let x=0;x<6;x++){const U=x%3;U===0?(d.up.set(0,p[x],0),d.lookAt(g[x],0,0)):U===1?(d.up.set(0,0,p[x]),d.lookAt(0,g[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,g[x]));const L=this._cubeSize;xu(l,U*L,x>2?L:0,L,L),v.setRenderTarget(l),b&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=y,v.autoClear=m,e.background=M}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===lo||e.mapping===co;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Jt(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;xu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Od)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=X_[(l-u-1)%X_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new Jt(this._lodPlanes[l],g),y=g.uniforms,S=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Ys-1),b=u/E,M=isFinite(u)?1+Math.floor(v*b):Ys;M>Ys&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ys}`);const x=[];let U=0;for(let P=0;P<Ys;++P){const F=P/b,N=Math.exp(-F*F/2);x.push(N),P===0?U+=N:P<M&&(U+=2*N)}for(let P=0;P<x.length;P++)x[P]=x[P]/U;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const R=this._sizeLods[l],Y=3*R*(l>L-io?l-L+io:0),I=4*(this._cubeSize-R);xu(i,Y,I,3*R,2*R),p.setRenderTarget(i),p.render(m,Od)}}function CA(o){const e=[],i=[],s=[];let l=o;const u=o-io+1+G_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-io?p=G_[h-o+io-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),v=-g,m=1+g,y=[v,v,m,v,m,m,v,v,m,m,v,m],S=6,E=6,b=3,M=2,x=1,U=new Float32Array(b*E*S),L=new Float32Array(M*E*S),R=new Float32Array(x*E*S);for(let I=0;I<S;I++){const P=I%3*2/3-1,F=I>2?0:-1,N=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];U.set(N,b*E*I),L.set(y,M*E*I);const w=[I,I,I,I,I,I];R.set(w,x*E*I)}const Y=new Jn;Y.setAttribute("position",new $i(U,b)),Y.setAttribute("uv",new $i(L,M)),Y.setAttribute("faceIndex",new $i(R,x)),e.push(Y),l>io&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function k_(o,e,i){const s=new Ks(o,e,i);return s.texture.mapping=Nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xu(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function RA(o,e,i){const s=new Float32Array(Ys),l=new G(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function q_(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Y_(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function Xp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DA(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===ep||p===np,v=p===lo||p===co;if(g||v){let m=e.get(d);const y=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new Dp(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Dp(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function NA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function UA(o,e,i,s){const l={},u=new WeakMap;function h(m){const y=m.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const b=y.morphAttributes[E];for(let M=0,x=b.length;M<x;M++)e.remove(b[M])}y.removeEventListener("dispose",h),delete l[y.id];const S=u.get(y);S&&(e.remove(S),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(m,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(m){const y=m.attributes;for(const E in y)e.update(y[E],o.ARRAY_BUFFER);const S=m.morphAttributes;for(const E in S){const b=S[E];for(let M=0,x=b.length;M<x;M++)e.update(b[M],o.ARRAY_BUFFER)}}function g(m){const y=[],S=m.index,E=m.attributes.position;let b=0;if(S!==null){const U=S.array;b=S.version;for(let L=0,R=U.length;L<R;L+=3){const Y=U[L+0],I=U[L+1],P=U[L+2];y.push(Y,I,I,P,P,Y)}}else if(E!==void 0){const U=E.array;b=E.version;for(let L=0,R=U.length/3-1;L<R;L+=3){const Y=L+0,I=L+1,P=L+2;y.push(Y,I,I,P,P,Y)}}else return;const M=new(Ix(y)?Xx:Vx)(y,1);M.version=b;const x=u.get(m);x&&e.remove(x),u.set(m,M)}function v(m){const y=u.get(m);if(y){const S=m.index;S!==null&&y.version<S.version&&g(m)}else g(m);return u.get(m)}return{get:d,update:p,getWireframeAttribute:v}}function LA(o,e,i){let s;function l(y){s=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function p(y,S){o.drawElements(s,S,u,y*h),i.update(S,s,1)}function g(y,S,E){E!==0&&(o.drawElementsInstanced(s,S,u,y*h,E),i.update(S,s,E))}function v(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,s,1)}function m(y,S,E,b){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)g(y[x]/h,S[x],b[x]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,u,y,0,b,0,E);let x=0;for(let U=0;U<E;U++)x+=S[U]*b[U];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function OA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function zA(o,e,i){const s=new WeakMap,l=new Ve;function u(h,d,p){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==m){let w=function(){F.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var S=w;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),M===!0&&(R=3);let Y=d.attributes.position.count*R,I=1;Y>e.maxTextureSize&&(I=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const P=new Float32Array(Y*I*4*m),F=new Fx(P,Y,I,m);F.type=Aa,F.needsUpdate=!0;const N=R*4;for(let z=0;z<m;z++){const it=x[z],nt=U[z],dt=L[z],ut=Y*I*4*z;for(let k=0;k<it.count;k++){const st=k*N;E===!0&&(l.fromBufferAttribute(it,k),P[ut+st+0]=l.x,P[ut+st+1]=l.y,P[ut+st+2]=l.z,P[ut+st+3]=0),b===!0&&(l.fromBufferAttribute(nt,k),P[ut+st+4]=l.x,P[ut+st+5]=l.y,P[ut+st+6]=l.z,P[ut+st+7]=0),M===!0&&(l.fromBufferAttribute(dt,k),P[ut+st+8]=l.x,P[ut+st+9]=l.y,P[ut+st+10]=l.z,P[ut+st+11]=dt.itemSize===4?l.w:1)}}y={count:m,texture:F,size:new kt(Y,I)},s.set(d,y),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<g.length;M++)E+=g[M];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function PA(o,e,i,s){let l=new WeakMap;function u(p){const g=s.render.frame,v=p.geometry,m=e.get(p,v);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}class Zx extends qn{constructor(e,i,s,l,u,h,d,p,g,v=so){if(v!==so&&v!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===so&&(s=Zs),s===void 0&&v===fo&&(s=uo),super(null,l,u,h,d,p,v,s,g),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ii,this.minFilter=p!==void 0?p:Ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Kx=new qn,W_=new Zx(1,1),Qx=new Fx,Jx=new SE,$x=new Yx,j_=[],Z_=[],K_=new Float32Array(16),Q_=new Float32Array(9),J_=new Float32Array(4);function vo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=j_[l];if(u===void 0&&(u=new Float32Array(l),j_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Lu(o,e){let i=Z_[e];i===void 0&&(i=new Int32Array(e),Z_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function IA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function BA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function FA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function HA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function GA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;J_.set(s),o.uniformMatrix2fv(this.addr,!1,J_),mn(i,s)}}function VA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;Q_.set(s),o.uniformMatrix3fv(this.addr,!1,Q_),mn(i,s)}}function XA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;K_.set(s),o.uniformMatrix4fv(this.addr,!1,K_),mn(i,s)}}function kA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function qA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function YA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function WA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function jA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ZA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function KA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function QA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function JA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(W_.compareFunction=Px,u=W_):u=Kx,i.setTexture2D(e||u,l)}function $A(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Jx,l)}function t2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||$x,l)}function e2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Qx,l)}function n2(o){switch(o){case 5126:return IA;case 35664:return BA;case 35665:return FA;case 35666:return HA;case 35674:return GA;case 35675:return VA;case 35676:return XA;case 5124:case 35670:return kA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return WA;case 5125:return jA;case 36294:return ZA;case 36295:return KA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return e2}}function i2(o,e){o.uniform1fv(this.addr,e)}function a2(o,e){const i=vo(e,this.size,2);o.uniform2fv(this.addr,i)}function s2(o,e){const i=vo(e,this.size,3);o.uniform3fv(this.addr,i)}function r2(o,e){const i=vo(e,this.size,4);o.uniform4fv(this.addr,i)}function o2(o,e){const i=vo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function l2(o,e){const i=vo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function c2(o,e){const i=vo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function u2(o,e){o.uniform1iv(this.addr,e)}function f2(o,e){o.uniform2iv(this.addr,e)}function h2(o,e){o.uniform3iv(this.addr,e)}function d2(o,e){o.uniform4iv(this.addr,e)}function p2(o,e){o.uniform1uiv(this.addr,e)}function m2(o,e){o.uniform2uiv(this.addr,e)}function g2(o,e){o.uniform3uiv(this.addr,e)}function v2(o,e){o.uniform4uiv(this.addr,e)}function _2(o,e,i){const s=this.cache,l=e.length,u=Lu(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Kx,u[h])}function x2(o,e,i){const s=this.cache,l=e.length,u=Lu(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Jx,u[h])}function y2(o,e,i){const s=this.cache,l=e.length,u=Lu(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||$x,u[h])}function S2(o,e,i){const s=this.cache,l=e.length,u=Lu(i,l);pn(s,u)||(o.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Qx,u[h])}function M2(o){switch(o){case 5126:return i2;case 35664:return a2;case 35665:return s2;case 35666:return r2;case 35674:return o2;case 35675:return l2;case 35676:return c2;case 5124:case 35670:return u2;case 35667:case 35671:return f2;case 35668:case 35672:return h2;case 35669:case 35673:return d2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return _2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return S2}}class E2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=n2(i.type)}}class T2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=M2(i.type)}}class b2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Fd=/(\w+)(\])?(\[|\.)?/g;function $_(o,e){o.seq.push(e),o.map[e.id]=e}function A2(o,e,i){const s=o.name,l=s.length;for(Fd.lastIndex=0;;){const u=Fd.exec(s),h=Fd.lastIndex;let d=u[1];const p=u[2]==="]",g=u[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){$_(i,g===void 0?new E2(d,o,e):new T2(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new b2(d),$_(i,m)),i=m}}}class wu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);A2(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function tx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const w2=37297;let C2=0;function R2(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const ex=new me;function D2(o){De._getMatrix(ex,De.workingColorSpace,o);const e=`mat3( ${ex.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Uu:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function nx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+R2(o.getShaderSource(e),h)}else return l}function N2(o,e){const i=D2(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function U2(o,e){let i;switch(e){case O1:i="Linear";break;case z1:i="Reinhard";break;case P1:i="Cineon";break;case Ex:i="ACESFilmic";break;case B1:i="AgX";break;case F1:i="Neutral";break;case I1:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const yu=new G;function L2(){De.getLuminanceCoefficients(yu);const o=yu.x.toFixed(4),e=yu.y.toFixed(4),i=yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function z2(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function P2(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function vl(o){return o!==""}function ix(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ax(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Np(o){return o.replace(I2,F2)}const B2=new Map;function F2(o,e){let i=ge[e];if(i===void 0){const s=B2.get(e);if(s!==void 0)i=ge[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Np(i)}const H2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sx(o){return o.replace(H2,G2)}function G2(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function rx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V2(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===d1?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ba&&(e="SHADOWMAP_TYPE_VSM"),e}function X2(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k2(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function q2(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Mx:e="ENVMAP_BLENDING_MULTIPLY";break;case U1:e="ENVMAP_BLENDING_MIX";break;case L1:e="ENVMAP_BLENDING_ADD";break}return e}function Y2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function W2(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=V2(i),g=X2(i),v=k2(i),m=q2(i),y=Y2(i),S=O2(i),E=z2(u),b=l.createProgram();let M,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(vl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(vl).join(`
`),x.length>0&&(x+=`
`)):(M=[rx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),x=[rx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ds?"#define TONE_MAPPING":"",i.toneMapping!==ds?ge.tonemapping_pars_fragment:"",i.toneMapping!==ds?U2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,N2("linearToOutputTexel",i.outputColorSpace),L2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),h=Np(h),h=ix(h,i),h=ax(h,i),d=Np(d),d=ix(d,i),d=ax(d,i),h=sx(h),d=sx(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=U+M+h,R=U+x+d,Y=tx(l,l.VERTEX_SHADER,L),I=tx(l,l.FRAGMENT_SHADER,R);l.attachShader(b,Y),l.attachShader(b,I),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(z){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(b).trim(),nt=l.getShaderInfoLog(Y).trim(),dt=l.getShaderInfoLog(I).trim();let ut=!0,k=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,Y,I);else{const st=nx(l,Y,"vertex"),J=nx(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+it+`
`+st+`
`+J)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(nt===""||dt==="")&&(k=!1);k&&(z.diagnostics={runnable:ut,programLog:it,vertexShader:{log:nt,prefix:M},fragmentShader:{log:dt,prefix:x}})}l.deleteShader(Y),l.deleteShader(I),F=new wu(l,b),N=P2(l,b)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,w2)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=C2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=Y,this.fragmentShader=I,this}let j2=0;class Z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new K2(e),i.set(e,s)),s}}class K2{constructor(e){this.id=j2++,this.code=e,this.usedTimes=0}}function Q2(o,e,i,s,l,u,h){const d=new Hx,p=new Z2,g=new Set,v=[],m=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(N){return g.add(N),N===0?"uv":`uv${N}`}function M(N,w,z,it,nt){const dt=it.fog,ut=nt.geometry,k=N.isMeshStandardMaterial?it.environment:null,st=(N.isMeshStandardMaterial?i:e).get(N.envMap||k),J=st&&st.mapping===Nu?st.image.height:null,yt=E[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ht=St!==void 0?St.length:0;let re=0;ut.morphAttributes.position!==void 0&&(re=1),ut.morphAttributes.normal!==void 0&&(re=2),ut.morphAttributes.color!==void 0&&(re=3);let ee,D,W,vt;if(yt){const be=Ki[yt];ee=be.vertexShader,D=be.fragmentShader}else ee=N.vertexShader,D=N.fragmentShader,p.update(N),W=p.getVertexShaderID(N),vt=p.getFragmentShaderID(N);const lt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),wt=nt.isInstancedMesh===!0,Dt=nt.isBatchedMesh===!0,Tt=!!N.map,At=!!N.matcap,ie=!!st,X=!!N.aoMap,Be=!!N.lightMap,ne=!!N.bumpMap,jt=!!N.normalMap,Ct=!!N.displacementMap,fe=!!N.emissiveMap,Bt=!!N.metalnessMap,O=!!N.roughnessMap,A=N.anisotropy>0,tt=N.clearcoat>0,mt=N.dispersion>0,xt=N.iridescence>0,pt=N.sheen>0,Yt=N.transmission>0,Ut=A&&!!N.anisotropyMap,Pt=tt&&!!N.clearcoatMap,ye=tt&&!!N.clearcoatNormalMap,Mt=tt&&!!N.clearcoatRoughnessMap,Xt=xt&&!!N.iridescenceMap,ae=xt&&!!N.iridescenceThicknessMap,oe=pt&&!!N.sheenColorMap,Vt=pt&&!!N.sheenRoughnessMap,xe=!!N.specularMap,he=!!N.specularColorMap,Fe=!!N.specularIntensityMap,V=Yt&&!!N.transmissionMap,Lt=Yt&&!!N.thicknessMap,ct=!!N.gradientMap,_t=!!N.alphaMap,Ot=N.alphaTest>0,Ft=!!N.alphaHash,ce=!!N.extensions;let Ze=ds;N.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ze=o.toneMapping);const gn={shaderID:yt,shaderType:N.type,shaderName:N.name,vertexShader:ee,fragmentShader:D,defines:N.defines,customVertexShaderID:W,customFragmentShaderID:vt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Dt,batchingColor:Dt&&nt._colorsTexture!==null,instancing:wt,instancingColor:wt&&nt.instanceColor!==null,instancingMorph:wt&&nt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:po,alphaToCoverage:!!N.alphaToCoverage,map:Tt,matcap:At,envMap:ie,envMapMode:ie&&st.mapping,envMapCubeUVHeight:J,aoMap:X,lightMap:Be,bumpMap:ne,normalMap:jt,displacementMap:y&&Ct,emissiveMap:fe,normalMapObjectSpace:jt&&N.normalMapType===X1,normalMapTangentSpace:jt&&N.normalMapType===zx,metalnessMap:Bt,roughnessMap:O,anisotropy:A,anisotropyMap:Ut,clearcoat:tt,clearcoatMap:Pt,clearcoatNormalMap:ye,clearcoatRoughnessMap:Mt,dispersion:mt,iridescence:xt,iridescenceMap:Xt,iridescenceThicknessMap:ae,sheen:pt,sheenColorMap:oe,sheenRoughnessMap:Vt,specularMap:xe,specularColorMap:he,specularIntensityMap:Fe,transmission:Yt,transmissionMap:V,thicknessMap:Lt,gradientMap:ct,opaque:N.transparent===!1&&N.blending===ao&&N.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ot,alphaHash:Ft,combine:N.combine,mapUv:Tt&&b(N.map.channel),aoMapUv:X&&b(N.aoMap.channel),lightMapUv:Be&&b(N.lightMap.channel),bumpMapUv:ne&&b(N.bumpMap.channel),normalMapUv:jt&&b(N.normalMap.channel),displacementMapUv:Ct&&b(N.displacementMap.channel),emissiveMapUv:fe&&b(N.emissiveMap.channel),metalnessMapUv:Bt&&b(N.metalnessMap.channel),roughnessMapUv:O&&b(N.roughnessMap.channel),anisotropyMapUv:Ut&&b(N.anisotropyMap.channel),clearcoatMapUv:Pt&&b(N.clearcoatMap.channel),clearcoatNormalMapUv:ye&&b(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&b(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&b(N.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&b(N.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&b(N.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(N.sheenRoughnessMap.channel),specularMapUv:xe&&b(N.specularMap.channel),specularColorMapUv:he&&b(N.specularColorMap.channel),specularIntensityMapUv:Fe&&b(N.specularIntensityMap.channel),transmissionMapUv:V&&b(N.transmissionMap.channel),thicknessMapUv:Lt&&b(N.thicknessMap.channel),alphaMapUv:_t&&b(N.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(jt||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ut.attributes.uv&&(Tt||_t),fog:!!dt,useFog:N.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:bt,skinning:nt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Tt&&N.map.isVideoTexture===!0&&De.getTransfer(N.map.colorSpace)===Ge,decodeVideoTextureEmissive:fe&&N.emissiveMap.isVideoTexture===!0&&De.getTransfer(N.emissiveMap.colorSpace)===Ge,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Ti,flipSided:N.side===kn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ce&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&N.extensions.multiDraw===!0||Dt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return gn.vertexUv1s=g.has(1),gn.vertexUv2s=g.has(2),gn.vertexUv3s=g.has(3),g.clear(),gn}function x(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const z in N.defines)w.push(z),w.push(N.defines[z]);return N.isRawShaderMaterial===!1&&(U(w,N),L(w,N),w.push(o.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function U(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function L(N,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),N.push(d.mask)}function R(N){const w=E[N.type];let z;if(w){const it=Ki[w];z=OE.clone(it.uniforms)}else z=N.uniforms;return z}function Y(N,w){let z;for(let it=0,nt=v.length;it<nt;it++){const dt=v[it];if(dt.cacheKey===w){z=dt,++z.usedTimes;break}}return z===void 0&&(z=new W2(o,w,N,u),v.push(z)),z}function I(N){if(--N.usedTimes===0){const w=v.indexOf(N);v[w]=v[v.length-1],v.pop(),N.destroy()}}function P(N){p.remove(N)}function F(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:R,acquireProgram:Y,releaseProgram:I,releaseShaderCache:P,programs:v,dispose:F}}function J2(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function $2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ox(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function lx(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(m,y,S,E,b,M){let x=o[e];return x===void 0?(x={id:m.id,object:m,geometry:y,material:S,groupOrder:E,renderOrder:m.renderOrder,z:b,group:M},o[e]=x):(x.id=m.id,x.object=m,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=b,x.group=M),e++,x}function d(m,y,S,E,b,M){const x=h(m,y,S,E,b,M);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function p(m,y,S,E,b,M){const x=h(m,y,S,E,b,M);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function g(m,y){i.length>1&&i.sort(m||$2),s.length>1&&s.sort(y||ox),l.length>1&&l.sort(y||ox)}function v(){for(let m=e,y=o.length;m<y;m++){const S=o[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:g}}function tw(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new lx,o.set(s,[h])):l>=u.length?(h=new lx,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function ew(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new G,color:new we};break;case"SpotLight":i={position:new G,direction:new G,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=i,i}}}function nw(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let iw=0;function aw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sw(o){const e=new ew,i=nw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new G);const l=new G,u=new Je,h=new Je;function d(g){let v=0,m=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,E=0,b=0,M=0,x=0,U=0,L=0,R=0,Y=0,I=0,P=0;g.sort(aw);for(let N=0,w=g.length;N<w;N++){const z=g[N],it=z.color,nt=z.intensity,dt=z.distance,ut=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=it.r*nt,m+=it.g*nt,y+=it.b*nt;else if(z.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(z.sh.coefficients[k],nt);P++}else if(z.isDirectionalLight){const k=e.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const st=z.shadow,J=i.get(z);J.shadowIntensity=st.intensity,J.shadowBias=st.bias,J.shadowNormalBias=st.normalBias,J.shadowRadius=st.radius,J.shadowMapSize=st.mapSize,s.directionalShadow[S]=J,s.directionalShadowMap[S]=ut,s.directionalShadowMatrix[S]=z.shadow.matrix,U++}s.directional[S]=k,S++}else if(z.isSpotLight){const k=e.get(z);k.position.setFromMatrixPosition(z.matrixWorld),k.color.copy(it).multiplyScalar(nt),k.distance=dt,k.coneCos=Math.cos(z.angle),k.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),k.decay=z.decay,s.spot[b]=k;const st=z.shadow;if(z.map&&(s.spotLightMap[Y]=z.map,Y++,st.updateMatrices(z),z.castShadow&&I++),s.spotLightMatrix[b]=st.matrix,z.castShadow){const J=i.get(z);J.shadowIntensity=st.intensity,J.shadowBias=st.bias,J.shadowNormalBias=st.normalBias,J.shadowRadius=st.radius,J.shadowMapSize=st.mapSize,s.spotShadow[b]=J,s.spotShadowMap[b]=ut,R++}b++}else if(z.isRectAreaLight){const k=e.get(z);k.color.copy(it).multiplyScalar(nt),k.halfWidth.set(z.width*.5,0,0),k.halfHeight.set(0,z.height*.5,0),s.rectArea[M]=k,M++}else if(z.isPointLight){const k=e.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity),k.distance=z.distance,k.decay=z.decay,z.castShadow){const st=z.shadow,J=i.get(z);J.shadowIntensity=st.intensity,J.shadowBias=st.bias,J.shadowNormalBias=st.normalBias,J.shadowRadius=st.radius,J.shadowMapSize=st.mapSize,J.shadowCameraNear=st.camera.near,J.shadowCameraFar=st.camera.far,s.pointShadow[E]=J,s.pointShadowMap[E]=ut,s.pointShadowMatrix[E]=z.shadow.matrix,L++}s.point[E]=k,E++}else if(z.isHemisphereLight){const k=e.get(z);k.skyColor.copy(z.color).multiplyScalar(nt),k.groundColor.copy(z.groundColor).multiplyScalar(nt),s.hemi[x]=k,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=y;const F=s.hash;(F.directionalLength!==S||F.pointLength!==E||F.spotLength!==b||F.rectAreaLength!==M||F.hemiLength!==x||F.numDirectionalShadows!==U||F.numPointShadows!==L||F.numSpotShadows!==R||F.numSpotMaps!==Y||F.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+Y-I,s.spotLightMap.length=Y,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=P,F.directionalLength=S,F.pointLength=E,F.spotLength=b,F.rectAreaLength=M,F.hemiLength=x,F.numDirectionalShadows=U,F.numPointShadows=L,F.numSpotShadows=R,F.numSpotMaps=Y,F.numLightProbes=P,s.version=iw++)}function p(g,v){let m=0,y=0,S=0,E=0,b=0;const M=v.matrixWorldInverse;for(let x=0,U=g.length;x<U;x++){const L=g[x];if(L.isDirectionalLight){const R=s.directional[m];R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),m++}else if(L.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),h.identity(),u.copy(L.matrixWorld),u.premultiply(M),h.extractRotation(u),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const R=s.point[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),y++}else if(L.isHemisphereLight){const R=s.hemi[b];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:s}}function cx(o){const e=new sw(o),i=[],s=[];function l(v){g.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function rw(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new cx(o),e.set(l,[d])):u>=h.length?(d=new cx(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}class ow extends Rl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=G1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lw extends Rl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fw(o,e,i){let s=new Vp;const l=new kt,u=new kt,h=new Ve,d=new ow({depthPacking:V1}),p=new lw,g={},v=i.maxTextureSize,m={[ps]:kn,[kn]:ps,[Ti]:Ti},y=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:cw,fragmentShader:uw}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Jn;E.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Jt(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sx;let x=this.type;this.render=function(I,P,F){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const N=o.getRenderTarget(),w=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),it=o.state;it.setBlending(hs),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const nt=x!==ba&&this.type===ba,dt=x===ba&&this.type!==ba;for(let ut=0,k=I.length;ut<k;ut++){const st=I[ut],J=st.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;l.copy(J.mapSize);const yt=J.getFrameExtents();if(l.multiply(yt),u.copy(J.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/yt.x),l.x=u.x*yt.x,J.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/yt.y),l.y=u.y*yt.y,J.mapSize.y=u.y)),J.map===null||nt===!0||dt===!0){const Ht=this.type!==ba?{minFilter:Ii,magFilter:Ii}:{};J.map!==null&&J.map.dispose(),J.map=new Ks(l.x,l.y,Ht),J.map.texture.name=st.name+".shadowMap",J.camera.updateProjectionMatrix()}o.setRenderTarget(J.map),o.clear();const St=J.getViewportCount();for(let Ht=0;Ht<St;Ht++){const re=J.getViewport(Ht);h.set(u.x*re.x,u.y*re.y,u.x*re.z,u.y*re.w),it.viewport(h),J.updateMatrices(st,Ht),s=J.getFrustum(),R(P,F,J.camera,st,this.type)}J.isPointLightShadow!==!0&&this.type===ba&&U(J,F),J.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(N,w,z)};function U(I,P){const F=e.update(b);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ks(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(P,null,F,y,b,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(P,null,F,S,b,null)}function L(I,P,F,N){let w=null;const z=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)w=z;else if(w=F.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const it=w.uuid,nt=P.uuid;let dt=g[it];dt===void 0&&(dt={},g[it]=dt);let ut=dt[nt];ut===void 0&&(ut=w.clone(),dt[nt]=ut,P.addEventListener("dispose",Y)),w=ut}if(w.visible=P.visible,w.wireframe=P.wireframe,N===ba?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:m[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const it=o.properties.get(w);it.light=F}return w}function R(I,P,F,N,w){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===ba)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const nt=e.update(I),dt=I.material;if(Array.isArray(dt)){const ut=nt.groups;for(let k=0,st=ut.length;k<st;k++){const J=ut[k],yt=dt[J.materialIndex];if(yt&&yt.visible){const St=L(I,yt,N,w);I.onBeforeShadow(o,I,P,F,nt,St,J),o.renderBufferDirect(F,null,nt,St,I,J),I.onAfterShadow(o,I,P,F,nt,St,J)}}}else if(dt.visible){const ut=L(I,dt,N,w);I.onBeforeShadow(o,I,P,F,nt,ut,null),o.renderBufferDirect(F,null,nt,ut,I,null),I.onAfterShadow(o,I,P,F,nt,ut,null)}}const it=I.children;for(let nt=0,dt=it.length;nt<dt;nt++)R(it[nt],P,F,N,w)}function Y(I){I.target.removeEventListener("dispose",Y);for(const F in g){const N=g[F],w=I.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const hw={[jd]:Zd,[Kd]:$d,[Qd]:tp,[oo]:Jd,[Zd]:jd,[$d]:Kd,[tp]:Qd,[Jd]:oo};function dw(o,e){function i(){let V=!1;const Lt=new Ve;let ct=null;const _t=new Ve(0,0,0,0);return{setMask:function(Ot){ct!==Ot&&!V&&(o.colorMask(Ot,Ot,Ot,Ot),ct=Ot)},setLocked:function(Ot){V=Ot},setClear:function(Ot,Ft,ce,Ze,gn){gn===!0&&(Ot*=Ze,Ft*=Ze,ce*=Ze),Lt.set(Ot,Ft,ce,Ze),_t.equals(Lt)===!1&&(o.clearColor(Ot,Ft,ce,Ze),_t.copy(Lt))},reset:function(){V=!1,ct=null,_t.set(-1,0,0,0)}}}function s(){let V=!1,Lt=!1,ct=null,_t=null,Ot=null;return{setReversed:function(Ft){if(Lt!==Ft){const ce=e.get("EXT_clip_control");Lt?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT);const Ze=Ot;Ot=null,this.setClear(Ze)}Lt=Ft},getReversed:function(){return Lt},setTest:function(Ft){Ft?lt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Ft){ct!==Ft&&!V&&(o.depthMask(Ft),ct=Ft)},setFunc:function(Ft){if(Lt&&(Ft=hw[Ft]),_t!==Ft){switch(Ft){case jd:o.depthFunc(o.NEVER);break;case Zd:o.depthFunc(o.ALWAYS);break;case Kd:o.depthFunc(o.LESS);break;case oo:o.depthFunc(o.LEQUAL);break;case Qd:o.depthFunc(o.EQUAL);break;case Jd:o.depthFunc(o.GEQUAL);break;case $d:o.depthFunc(o.GREATER);break;case tp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ft}},setLocked:function(Ft){V=Ft},setClear:function(Ft){Ot!==Ft&&(Lt&&(Ft=1-Ft),o.clearDepth(Ft),Ot=Ft)},reset:function(){V=!1,ct=null,_t=null,Ot=null,Lt=!1}}}function l(){let V=!1,Lt=null,ct=null,_t=null,Ot=null,Ft=null,ce=null,Ze=null,gn=null;return{setTest:function(be){V||(be?lt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(be){Lt!==be&&!V&&(o.stencilMask(be),Lt=be)},setFunc:function(be,je,vn){(ct!==be||_t!==je||Ot!==vn)&&(o.stencilFunc(be,je,vn),ct=be,_t=je,Ot=vn)},setOp:function(be,je,vn){(Ft!==be||ce!==je||Ze!==vn)&&(o.stencilOp(be,je,vn),Ft=be,ce=je,Ze=vn)},setLocked:function(be){V=be},setClear:function(be){gn!==be&&(o.clearStencil(be),gn=be)},reset:function(){V=!1,Lt=null,ct=null,_t=null,Ot=null,Ft=null,ce=null,Ze=null,gn=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let v={},m={},y=new WeakMap,S=[],E=null,b=!1,M=null,x=null,U=null,L=null,R=null,Y=null,I=null,P=new we(0,0,0),F=0,N=!1,w=null,z=null,it=null,nt=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,st=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(J)[1]),k=st>=1):J.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),k=st>=2);let yt=null,St={};const Ht=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),ee=new Ve().fromArray(Ht),D=new Ve().fromArray(re);function W(V,Lt,ct,_t){const Ot=new Uint8Array(4),Ft=o.createTexture();o.bindTexture(V,Ft),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ce=0;ce<ct;ce++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ot):o.texImage2D(Lt+ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ot);return Ft}const vt={};vt[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),vt[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),vt[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(o.DEPTH_TEST),h.setFunc(oo),ne(!1),jt(p_),lt(o.CULL_FACE),X(hs);function lt(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function bt(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function wt(V,Lt){return m[V]!==Lt?(o.bindFramebuffer(V,Lt),m[V]=Lt,V===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Lt),V===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Dt(V,Lt){let ct=S,_t=!1;if(V){ct=y.get(Lt),ct===void 0&&(ct=[],y.set(Lt,ct));const Ot=V.textures;if(ct.length!==Ot.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Ft=0,ce=Ot.length;Ft<ce;Ft++)ct[Ft]=o.COLOR_ATTACHMENT0+Ft;ct.length=Ot.length,_t=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ct)}function Tt(V){return E!==V?(o.useProgram(V),E=V,!0):!1}const At={[qs]:o.FUNC_ADD,[m1]:o.FUNC_SUBTRACT,[g1]:o.FUNC_REVERSE_SUBTRACT};At[v1]=o.MIN,At[_1]=o.MAX;const ie={[x1]:o.ZERO,[y1]:o.ONE,[S1]:o.SRC_COLOR,[Yd]:o.SRC_ALPHA,[w1]:o.SRC_ALPHA_SATURATE,[b1]:o.DST_COLOR,[E1]:o.DST_ALPHA,[M1]:o.ONE_MINUS_SRC_COLOR,[Wd]:o.ONE_MINUS_SRC_ALPHA,[A1]:o.ONE_MINUS_DST_COLOR,[T1]:o.ONE_MINUS_DST_ALPHA,[C1]:o.CONSTANT_COLOR,[R1]:o.ONE_MINUS_CONSTANT_COLOR,[D1]:o.CONSTANT_ALPHA,[N1]:o.ONE_MINUS_CONSTANT_ALPHA};function X(V,Lt,ct,_t,Ot,Ft,ce,Ze,gn,be){if(V===hs){b===!0&&(bt(o.BLEND),b=!1);return}if(b===!1&&(lt(o.BLEND),b=!0),V!==p1){if(V!==M||be!==N){if((x!==qs||R!==qs)&&(o.blendEquation(o.FUNC_ADD),x=qs,R=qs),be)switch(V){case ao:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eo:o.blendFunc(o.ONE,o.ONE);break;case m_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case g_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ao:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eo:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case m_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case g_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,L=null,Y=null,I=null,P.set(0,0,0),F=0,M=V,N=be}return}Ot=Ot||Lt,Ft=Ft||ct,ce=ce||_t,(Lt!==x||Ot!==R)&&(o.blendEquationSeparate(At[Lt],At[Ot]),x=Lt,R=Ot),(ct!==U||_t!==L||Ft!==Y||ce!==I)&&(o.blendFuncSeparate(ie[ct],ie[_t],ie[Ft],ie[ce]),U=ct,L=_t,Y=Ft,I=ce),(Ze.equals(P)===!1||gn!==F)&&(o.blendColor(Ze.r,Ze.g,Ze.b,gn),P.copy(Ze),F=gn),M=V,N=!1}function Be(V,Lt){V.side===Ti?bt(o.CULL_FACE):lt(o.CULL_FACE);let ct=V.side===kn;Lt&&(ct=!ct),ne(ct),V.blending===ao&&V.transparent===!1?X(hs):X(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const _t=V.stencilWrite;d.setTest(_t),_t&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(V){w!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),w=V)}function jt(V){V!==f1?(lt(o.CULL_FACE),V!==z&&(V===p_?o.cullFace(o.BACK):V===h1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),z=V}function Ct(V){V!==it&&(k&&o.lineWidth(V),it=V)}function fe(V,Lt,ct){V?(lt(o.POLYGON_OFFSET_FILL),(nt!==Lt||dt!==ct)&&(o.polygonOffset(Lt,ct),nt=Lt,dt=ct)):bt(o.POLYGON_OFFSET_FILL)}function Bt(V){V?lt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function O(V){V===void 0&&(V=o.TEXTURE0+ut-1),yt!==V&&(o.activeTexture(V),yt=V)}function A(V,Lt,ct){ct===void 0&&(yt===null?ct=o.TEXTURE0+ut-1:ct=yt);let _t=St[ct];_t===void 0&&(_t={type:void 0,texture:void 0},St[ct]=_t),(_t.type!==V||_t.texture!==Lt)&&(yt!==ct&&(o.activeTexture(ct),yt=ct),o.bindTexture(V,Lt||vt[V]),_t.type=V,_t.texture=Lt)}function tt(){const V=St[yt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function mt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(V){ee.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function Vt(V){D.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),D.copy(V))}function xe(V,Lt){let ct=g.get(Lt);ct===void 0&&(ct=new WeakMap,g.set(Lt,ct));let _t=ct.get(V);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,V.name),ct.set(V,_t))}function he(V,Lt){const _t=g.get(Lt).get(V);p.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,V.__bindingPointIndex),p.set(Lt,_t))}function Fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,St={},m={},y=new WeakMap,S=[],E=null,b=!1,M=null,x=null,U=null,L=null,R=null,Y=null,I=null,P=new we(0,0,0),F=0,N=!1,w=null,z=null,it=null,nt=null,dt=null,ee.set(0,0,o.canvas.width,o.canvas.height),D.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:lt,disable:bt,bindFramebuffer:wt,drawBuffers:Dt,useProgram:Tt,setBlending:X,setMaterial:Be,setFlipSided:ne,setCullFace:jt,setLineWidth:Ct,setPolygonOffset:fe,setScissorTest:Bt,activeTexture:O,bindTexture:A,unbindTexture:tt,compressedTexImage2D:mt,compressedTexImage3D:xt,texImage2D:Xt,texImage3D:ae,updateUBOMapping:xe,uniformBlockBinding:he,texStorage2D:ye,texStorage3D:Mt,texSubImage2D:pt,texSubImage3D:Yt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Pt,scissor:oe,viewport:Vt,reset:Fe}}function ux(o,e,i,s){const l=pw(s);switch(i){case Cx:return o*e;case Dx:return o*e;case Nx:return o*e*2;case Ux:return o*e/l.components*l.byteLength;case Ip:return o*e/l.components*l.byteLength;case Lx:return o*e*2/l.components*l.byteLength;case Bp:return o*e*2/l.components*l.byteLength;case Rx:return o*e*3/l.components*l.byteLength;case zi:return o*e*4/l.components*l.byteLength;case Fp:return o*e*4/l.components*l.byteLength;case Mu:case Eu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tu:case bu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sp:case op:return Math.max(o,16)*Math.max(e,8)/4;case ap:case rp:return Math.max(o,8)*Math.max(e,8)/2;case lp:case cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case up:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case xp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Au:case bp:case Ap:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ox:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Cp:case Rp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pw(o){switch(o){case Ra:case bx:return{byteLength:1,components:1};case Tl:case Ax:case Al:return{byteLength:2,components:1};case zp:case Pp:return{byteLength:2,components:4};case Zs:case Op:case Aa:return{byteLength:4,components:1};case wx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function mw(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new kt,v=new WeakMap;let m;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,A){return S?new OffscreenCanvas(O,A):Ru("canvas")}function b(O,A,tt){let mt=1;const xt=Bt(O);if((xt.width>tt||xt.height>tt)&&(mt=tt/Math.max(xt.width,xt.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pt=Math.floor(mt*xt.width),Yt=Math.floor(mt*xt.height);m===void 0&&(m=E(pt,Yt));const Ut=A?E(pt,Yt):m;return Ut.width=pt,Ut.height=Yt,Ut.getContext("2d").drawImage(O,0,0,pt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+pt+"x"+Yt+")."),Ut}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),O;return O}function M(O){return O.generateMipmaps}function x(O){o.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,A,tt,mt,xt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt=A;if(A===o.RED&&(tt===o.FLOAT&&(pt=o.R32F),tt===o.HALF_FLOAT&&(pt=o.R16F),tt===o.UNSIGNED_BYTE&&(pt=o.R8)),A===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.R8UI),tt===o.UNSIGNED_SHORT&&(pt=o.R16UI),tt===o.UNSIGNED_INT&&(pt=o.R32UI),tt===o.BYTE&&(pt=o.R8I),tt===o.SHORT&&(pt=o.R16I),tt===o.INT&&(pt=o.R32I)),A===o.RG&&(tt===o.FLOAT&&(pt=o.RG32F),tt===o.HALF_FLOAT&&(pt=o.RG16F),tt===o.UNSIGNED_BYTE&&(pt=o.RG8)),A===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RG16UI),tt===o.UNSIGNED_INT&&(pt=o.RG32UI),tt===o.BYTE&&(pt=o.RG8I),tt===o.SHORT&&(pt=o.RG16I),tt===o.INT&&(pt=o.RG32I)),A===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),tt===o.UNSIGNED_INT&&(pt=o.RGB32UI),tt===o.BYTE&&(pt=o.RGB8I),tt===o.SHORT&&(pt=o.RGB16I),tt===o.INT&&(pt=o.RGB32I)),A===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(pt=o.RGBA32UI),tt===o.BYTE&&(pt=o.RGBA8I),tt===o.SHORT&&(pt=o.RGBA16I),tt===o.INT&&(pt=o.RGBA32I)),A===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),A===o.RGBA){const Yt=xt?Uu:De.getTransfer(mt);tt===o.FLOAT&&(pt=o.RGBA32F),tt===o.HALF_FLOAT&&(pt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(pt=Yt===Ge?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function R(O,A){let tt;return O?A===null||A===Zs||A===uo?tt=o.DEPTH24_STENCIL8:A===Aa?tt=o.DEPTH32F_STENCIL8:A===Tl&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Zs||A===uo?tt=o.DEPTH_COMPONENT24:A===Aa?tt=o.DEPTH_COMPONENT32F:A===Tl&&(tt=o.DEPTH_COMPONENT16),tt}function Y(O,A){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ii&&O.minFilter!==Qi?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function I(O){const A=O.target;A.removeEventListener("dispose",I),F(A),A.isVideoTexture&&v.delete(A)}function P(O){const A=O.target;A.removeEventListener("dispose",P),w(A)}function F(O){const A=s.get(O);if(A.__webglInit===void 0)return;const tt=O.source,mt=y.get(tt);if(mt){const xt=mt[A.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&N(O),Object.keys(mt).length===0&&y.delete(tt)}s.remove(O)}function N(O){const A=s.get(O);o.deleteTexture(A.__webglTexture);const tt=O.source,mt=y.get(tt);delete mt[A.__cacheKey],h.memory.textures--}function w(O){const A=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let xt=0;xt<A.__webglFramebuffer[mt].length;xt++)o.deleteFramebuffer(A.__webglFramebuffer[mt][xt]);else o.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)o.deleteFramebuffer(A.__webglFramebuffer[mt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const tt=O.textures;for(let mt=0,xt=tt.length;mt<xt;mt++){const pt=s.get(tt[mt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(tt[mt])}s.remove(O)}let z=0;function it(){z=0}function nt(){const O=z;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),z+=1,O}function dt(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function ut(O,A){const tt=s.get(O);if(O.isVideoTexture&&Ct(O),O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){const mt=O.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(tt,O,A);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+A)}function k(O,A){const tt=s.get(O);if(O.version>0&&tt.__version!==O.version){D(tt,O,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+A)}function st(O,A){const tt=s.get(O);if(O.version>0&&tt.__version!==O.version){D(tt,O,A);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+A)}function J(O,A){const tt=s.get(O);if(O.version>0&&tt.__version!==O.version){W(tt,O,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+A)}const yt={[El]:o.REPEAT,[Ws]:o.CLAMP_TO_EDGE,[ip]:o.MIRRORED_REPEAT},St={[Ii]:o.NEAREST,[H1]:o.NEAREST_MIPMAP_NEAREST,[tu]:o.NEAREST_MIPMAP_LINEAR,[Qi]:o.LINEAR,[dd]:o.LINEAR_MIPMAP_NEAREST,[js]:o.LINEAR_MIPMAP_LINEAR},Ht={[k1]:o.NEVER,[K1]:o.ALWAYS,[q1]:o.LESS,[Px]:o.LEQUAL,[Y1]:o.EQUAL,[Z1]:o.GEQUAL,[W1]:o.GREATER,[j1]:o.NOTEQUAL};function re(O,A){if(A.type===Aa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Qi||A.magFilter===dd||A.magFilter===tu||A.magFilter===js||A.minFilter===Qi||A.minFilter===dd||A.minFilter===tu||A.minFilter===js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,yt[A.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,yt[A.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,yt[A.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,St[A.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,St[A.minFilter]),A.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Ht[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ii||A.minFilter!==tu&&A.minFilter!==js||A.type===Aa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function ee(O,A){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",I));const mt=A.source;let xt=y.get(mt);xt===void 0&&(xt={},y.set(mt,xt));const pt=dt(A);if(pt!==O.__cacheKey){xt[pt]===void 0&&(xt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),xt[pt].usedTimes++;const Yt=xt[O.__cacheKey];Yt!==void 0&&(xt[O.__cacheKey].usedTimes--,Yt.usedTimes===0&&N(A)),O.__cacheKey=pt,O.__webglTexture=xt[pt].texture}return tt}function D(O,A,tt){let mt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=o.TEXTURE_3D);const xt=ee(O,A),pt=A.source;i.bindTexture(mt,O.__webglTexture,o.TEXTURE0+tt);const Yt=s.get(pt);if(pt.version!==Yt.__version||xt===!0){i.activeTexture(o.TEXTURE0+tt);const Ut=De.getPrimaries(De.workingColorSpace),Pt=A.colorSpace===fs?null:De.getPrimaries(A.colorSpace),ye=A.colorSpace===fs||Ut===Pt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Mt=b(A.image,!1,l.maxTextureSize);Mt=fe(A,Mt);const Xt=u.convert(A.format,A.colorSpace),ae=u.convert(A.type);let oe=L(A.internalFormat,Xt,ae,A.colorSpace,A.isVideoTexture);re(mt,A);let Vt;const xe=A.mipmaps,he=A.isVideoTexture!==!0,Fe=Yt.__version===void 0||xt===!0,V=pt.dataReady,Lt=Y(A,Mt);if(A.isDepthTexture)oe=R(A.format===fo,A.type),Fe&&(he?i.texStorage2D(o.TEXTURE_2D,1,oe,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,oe,Mt.width,Mt.height,0,Xt,ae,null));else if(A.isDataTexture)if(xe.length>0){he&&Fe&&i.texStorage2D(o.TEXTURE_2D,Lt,oe,xe[0].width,xe[0].height);for(let ct=0,_t=xe.length;ct<_t;ct++)Vt=xe[ct],he?V&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Vt.width,Vt.height,Xt,ae,Vt.data):i.texImage2D(o.TEXTURE_2D,ct,oe,Vt.width,Vt.height,0,Xt,ae,Vt.data);A.generateMipmaps=!1}else he?(Fe&&i.texStorage2D(o.TEXTURE_2D,Lt,oe,Mt.width,Mt.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Xt,ae,Mt.data)):i.texImage2D(o.TEXTURE_2D,0,oe,Mt.width,Mt.height,0,Xt,ae,Mt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){he&&Fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,oe,xe[0].width,xe[0].height,Mt.depth);for(let ct=0,_t=xe.length;ct<_t;ct++)if(Vt=xe[ct],A.format!==zi)if(Xt!==null)if(he){if(V)if(A.layerUpdates.size>0){const Ot=ux(Vt.width,Vt.height,A.format,A.type);for(const Ft of A.layerUpdates){const ce=Vt.data.subarray(Ft*Ot/Vt.data.BYTES_PER_ELEMENT,(Ft+1)*Ot/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,Ft,Vt.width,Vt.height,1,Xt,ce)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Vt.width,Vt.height,Mt.depth,Xt,Vt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,oe,Vt.width,Vt.height,Mt.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Vt.width,Vt.height,Mt.depth,Xt,ae,Vt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,oe,Vt.width,Vt.height,Mt.depth,0,Xt,ae,Vt.data)}else{he&&Fe&&i.texStorage2D(o.TEXTURE_2D,Lt,oe,xe[0].width,xe[0].height);for(let ct=0,_t=xe.length;ct<_t;ct++)Vt=xe[ct],A.format!==zi?Xt!==null?he?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Vt.width,Vt.height,Xt,Vt.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,oe,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?V&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Vt.width,Vt.height,Xt,ae,Vt.data):i.texImage2D(o.TEXTURE_2D,ct,oe,Vt.width,Vt.height,0,Xt,ae,Vt.data)}else if(A.isDataArrayTexture)if(he){if(Fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,oe,Mt.width,Mt.height,Mt.depth),V)if(A.layerUpdates.size>0){const ct=ux(Mt.width,Mt.height,A.format,A.type);for(const _t of A.layerUpdates){const Ot=Mt.data.subarray(_t*ct/Mt.data.BYTES_PER_ELEMENT,(_t+1)*ct/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Xt,ae,Ot)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Xt,ae,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,oe,Mt.width,Mt.height,Mt.depth,0,Xt,ae,Mt.data);else if(A.isData3DTexture)he?(Fe&&i.texStorage3D(o.TEXTURE_3D,Lt,oe,Mt.width,Mt.height,Mt.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Xt,ae,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,oe,Mt.width,Mt.height,Mt.depth,0,Xt,ae,Mt.data);else if(A.isFramebufferTexture){if(Fe)if(he)i.texStorage2D(o.TEXTURE_2D,Lt,oe,Mt.width,Mt.height);else{let ct=Mt.width,_t=Mt.height;for(let Ot=0;Ot<Lt;Ot++)i.texImage2D(o.TEXTURE_2D,Ot,oe,ct,_t,0,Xt,ae,null),ct>>=1,_t>>=1}}else if(xe.length>0){if(he&&Fe){const ct=Bt(xe[0]);i.texStorage2D(o.TEXTURE_2D,Lt,oe,ct.width,ct.height)}for(let ct=0,_t=xe.length;ct<_t;ct++)Vt=xe[ct],he?V&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Xt,ae,Vt):i.texImage2D(o.TEXTURE_2D,ct,oe,Xt,ae,Vt);A.generateMipmaps=!1}else if(he){if(Fe){const ct=Bt(Mt);i.texStorage2D(o.TEXTURE_2D,Lt,oe,ct.width,ct.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Xt,ae,Mt)}else i.texImage2D(o.TEXTURE_2D,0,oe,Xt,ae,Mt);M(A)&&x(mt),Yt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function W(O,A,tt){if(A.image.length!==6)return;const mt=ee(O,A),xt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+tt);const pt=s.get(xt);if(xt.version!==pt.__version||mt===!0){i.activeTexture(o.TEXTURE0+tt);const Yt=De.getPrimaries(De.workingColorSpace),Ut=A.colorSpace===fs?null:De.getPrimaries(A.colorSpace),Pt=A.colorSpace===fs||Yt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ye=A.isCompressedTexture||A.image[0].isCompressedTexture,Mt=A.image[0]&&A.image[0].isDataTexture,Xt=[];for(let _t=0;_t<6;_t++)!ye&&!Mt?Xt[_t]=b(A.image[_t],!0,l.maxCubemapSize):Xt[_t]=Mt?A.image[_t].image:A.image[_t],Xt[_t]=fe(A,Xt[_t]);const ae=Xt[0],oe=u.convert(A.format,A.colorSpace),Vt=u.convert(A.type),xe=L(A.internalFormat,oe,Vt,A.colorSpace),he=A.isVideoTexture!==!0,Fe=pt.__version===void 0||mt===!0,V=xt.dataReady;let Lt=Y(A,ae);re(o.TEXTURE_CUBE_MAP,A);let ct;if(ye){he&&Fe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,xe,ae.width,ae.height);for(let _t=0;_t<6;_t++){ct=Xt[_t].mipmaps;for(let Ot=0;Ot<ct.length;Ot++){const Ft=ct[Ot];A.format!==zi?oe!==null?he?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,0,0,Ft.width,Ft.height,oe,Ft.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,xe,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,0,0,Ft.width,Ft.height,oe,Vt,Ft.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,xe,Ft.width,Ft.height,0,oe,Vt,Ft.data)}}}else{if(ct=A.mipmaps,he&&Fe){ct.length>0&&Lt++;const _t=Bt(Xt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,xe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){he?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt[_t].width,Xt[_t].height,oe,Vt,Xt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,xe,Xt[_t].width,Xt[_t].height,0,oe,Vt,Xt[_t].data);for(let Ot=0;Ot<ct.length;Ot++){const ce=ct[Ot].image[_t].image;he?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,0,0,ce.width,ce.height,oe,Vt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,xe,ce.width,ce.height,0,oe,Vt,ce.data)}}else{he?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,oe,Vt,Xt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,xe,oe,Vt,Xt[_t]);for(let Ot=0;Ot<ct.length;Ot++){const Ft=ct[Ot];he?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,0,0,oe,Vt,Ft.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,xe,oe,Vt,Ft.image[_t])}}}M(A)&&x(o.TEXTURE_CUBE_MAP),pt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function vt(O,A,tt,mt,xt,pt){const Yt=u.convert(tt.format,tt.colorSpace),Ut=u.convert(tt.type),Pt=L(tt.internalFormat,Yt,Ut,tt.colorSpace),ye=s.get(A),Mt=s.get(tt);if(Mt.__renderTarget=A,!ye.__hasExternalTextures){const Xt=Math.max(1,A.width>>pt),ae=Math.max(1,A.height>>pt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,pt,Pt,Xt,ae,A.depth,0,Yt,Ut,null):i.texImage2D(xt,pt,Pt,Xt,ae,0,Yt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),jt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,xt,Mt.__webglTexture,0,ne(A)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,xt,Mt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function lt(O,A,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),A.depthBuffer){const mt=A.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,pt=R(A.stencilBuffer,xt),Yt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=ne(A);jt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,pt,A.width,A.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,pt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,pt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,O)}else{const mt=A.textures;for(let xt=0;xt<mt.length;xt++){const pt=mt[xt],Yt=u.convert(pt.format,pt.colorSpace),Ut=u.convert(pt.type),Pt=L(pt.internalFormat,Yt,Ut,pt.colorSpace),ye=ne(A);tt&&jt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ye,Pt,A.width,A.height):jt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ye,Pt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Pt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(A.depthTexture);mt.__renderTarget=A,(!mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ut(A.depthTexture,0);const xt=mt.__webglTexture,pt=ne(A);if(A.depthTexture.format===so)jt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(A.depthTexture.format===fo)jt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function wt(O){const A=s.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){const xt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),A.__depthDisposeCallback=xt}A.__boundDepthTexture=mt}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");bt(A.__webglFramebuffer,O)}else if(tt){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=o.createRenderbuffer(),lt(A.__webglDepthbuffer[mt],O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),lt(A.__webglDepthbuffer,O,!1);else{const mt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,xt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(O,A,tt){const mt=s.get(O);A!==void 0&&vt(mt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&wt(O)}function Tt(O){const A=O.texture,tt=s.get(O),mt=s.get(A);O.addEventListener("dispose",P);const xt=O.textures,pt=O.isWebGLCubeRenderTarget===!0,Yt=xt.length>1;if(Yt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=A.version,h.memory.textures++),pt){tt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer[Ut]=[];for(let Pt=0;Pt<A.mipmaps.length;Pt++)tt.__webglFramebuffer[Ut][Pt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)tt.__webglFramebuffer[Ut]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Ut=0,Pt=xt.length;Ut<Pt;Ut++){const ye=s.get(xt[Ut]);ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&jt(O)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<xt.length;Ut++){const Pt=xt[Ut];tt.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut]);const ye=u.convert(Pt.format,Pt.colorSpace),Mt=u.convert(Pt.type),Xt=L(Pt.internalFormat,ye,Mt,Pt.colorSpace,O.isXRRenderTarget===!0),ae=ne(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,Xt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),lt(tt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),re(o.TEXTURE_CUBE_MAP,A);for(let Ut=0;Ut<6;Ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)vt(tt.__webglFramebuffer[Ut][Pt],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Pt);else vt(tt.__webglFramebuffer[Ut],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(A)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Ut=0,Pt=xt.length;Ut<Pt;Ut++){const ye=xt[Ut],Mt=s.get(ye);i.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),re(o.TEXTURE_2D,ye),vt(tt.__webglFramebuffer,O,ye,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),M(ye)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),re(Ut,A),A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)vt(tt.__webglFramebuffer[Pt],O,A,o.COLOR_ATTACHMENT0,Ut,Pt);else vt(tt.__webglFramebuffer,O,A,o.COLOR_ATTACHMENT0,Ut,0);M(A)&&x(Ut),i.unbindTexture()}O.depthBuffer&&wt(O)}function At(O){const A=O.textures;for(let tt=0,mt=A.length;tt<mt;tt++){const xt=A[tt];if(M(xt)){const pt=U(O),Yt=s.get(xt).__webglTexture;i.bindTexture(pt,Yt),x(pt),i.unbindTexture()}}}const ie=[],X=[];function Be(O){if(O.samples>0){if(jt(O)===!1){const A=O.textures,tt=O.width,mt=O.height;let xt=o.COLOR_BUFFER_BIT;const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=s.get(O),Ut=A.length>1;if(Ut)for(let Pt=0;Pt<A.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Pt=0;Pt<A.length;Pt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Pt]);const ye=s.get(A[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,tt,mt,0,0,tt,mt,xt,o.NEAREST),p===!0&&(ie.length=0,X.length=0,ie.push(o.COLOR_ATTACHMENT0+Pt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ie.push(pt),X.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,X)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Pt=0;Pt<A.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Pt]);const ye=s.get(A[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,ye,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const A=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function ne(O){return Math.min(l.maxSamples,O.samples)}function jt(O){const A=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(O){const A=h.render.frame;v.get(O)!==A&&(v.set(O,A),O.update())}function fe(O,A){const tt=O.colorSpace,mt=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==po&&tt!==fs&&(De.getTransfer(tt)===Ge?(mt!==zi||xt!==Ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),A}function Bt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=nt,this.resetTextureUnits=it,this.setTexture2D=ut,this.setTexture2DArray=k,this.setTexture3D=st,this.setTextureCube=J,this.rebindTextures=Dt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=jt}function gw(o,e){function i(s,l=fs){let u;const h=De.getTransfer(l);if(s===Ra)return o.UNSIGNED_BYTE;if(s===zp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Pp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===wx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===bx)return o.BYTE;if(s===Ax)return o.SHORT;if(s===Tl)return o.UNSIGNED_SHORT;if(s===Op)return o.INT;if(s===Zs)return o.UNSIGNED_INT;if(s===Aa)return o.FLOAT;if(s===Al)return o.HALF_FLOAT;if(s===Cx)return o.ALPHA;if(s===Rx)return o.RGB;if(s===zi)return o.RGBA;if(s===Dx)return o.LUMINANCE;if(s===Nx)return o.LUMINANCE_ALPHA;if(s===so)return o.DEPTH_COMPONENT;if(s===fo)return o.DEPTH_STENCIL;if(s===Ux)return o.RED;if(s===Ip)return o.RED_INTEGER;if(s===Lx)return o.RG;if(s===Bp)return o.RG_INTEGER;if(s===Fp)return o.RGBA_INTEGER;if(s===Mu||s===Eu||s===Tu||s===bu)if(h===Ge)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Mu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Eu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Mu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Eu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ap||s===sp||s===rp||s===op)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===ap)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===op)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lp||s===cp||s===up)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===lp||s===cp)return h===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===up)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===vp||s===_p||s===xp||s===yp||s===Sp||s===Mp||s===Ep||s===Tp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===fp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_p)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ep)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tp)return h===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Au||s===bp||s===Ap)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Au)return h===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ap)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ox||s===wp||s===Cp||s===Rp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Au)return u.COMPRESSED_RED_RGTC1_EXT;if(s===wp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===uo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class vw extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class On extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _w={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const b of e.hand.values()){const M=i.getJointPose(b,s),x=this._getHandJoint(g,b);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],y=v.position.distanceTo(m.position),S=.02,E=.005;g.inputState.pinching&&y>S+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=S-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_w)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new On;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new qn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:xw,fragmentShader:yw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Jt(new Dl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mw extends mo{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,g=null,v=null,m=null,y=null,S=null,E=null;const b=new Sw,M=i.getContextAttributes();let x=null,U=null;const L=[],R=[],Y=new kt;let I=null;const P=new fi;P.viewport=new Ve;const F=new fi;F.viewport=new Ve;const N=[P,F],w=new vw;let z=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let W=L[D];return W===void 0&&(W=new Hd,L[D]=W),W.getTargetRaySpace()},this.getControllerGrip=function(D){let W=L[D];return W===void 0&&(W=new Hd,L[D]=W),W.getGripSpace()},this.getHand=function(D){let W=L[D];return W===void 0&&(W=new Hd,L[D]=W),W.getHandSpace()};function nt(D){const W=R.indexOf(D.inputSource);if(W===-1)return;const vt=L[W];vt!==void 0&&(vt.update(D.inputSource,D.frame,g||h),vt.dispatchEvent({type:D.type,data:D.inputSource}))}function dt(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",ut);for(let D=0;D<L.length;D++){const W=R[D];W!==null&&(R[D]=null,L[D].disconnect(W))}z=null,it=null,b.reset(),e.setRenderTarget(x),S=null,y=null,m=null,l=null,U=null,ee.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(Y.width,Y.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){u=D,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){d=D,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(D){g=D},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(D){if(l=D,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",ut),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(Y),l.renderState.layers===void 0){const W={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,W),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Ks(S.framebufferWidth,S.framebufferHeight,{format:zi,type:Ra,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let W=null,vt=null,lt=null;M.depth&&(lt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,W=M.stencil?fo:so,vt=M.stencil?uo:Zs);const bt={colorFormat:i.RGBA8,depthFormat:lt,scaleFactor:u};m=new XRWebGLBinding(l,i),y=m.createProjectionLayer(bt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Ks(y.textureWidth,y.textureHeight,{format:zi,type:Ra,depthTexture:new Zx(y.textureWidth,y.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),ee.setContext(l),ee.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ut(D){for(let W=0;W<D.removed.length;W++){const vt=D.removed[W],lt=R.indexOf(vt);lt>=0&&(R[lt]=null,L[lt].disconnect(vt))}for(let W=0;W<D.added.length;W++){const vt=D.added[W];let lt=R.indexOf(vt);if(lt===-1){for(let wt=0;wt<L.length;wt++)if(wt>=R.length){R.push(vt),lt=wt;break}else if(R[wt]===null){R[wt]=vt,lt=wt;break}if(lt===-1)break}const bt=L[lt];bt&&bt.connect(vt)}}const k=new G,st=new G;function J(D,W,vt){k.setFromMatrixPosition(W.matrixWorld),st.setFromMatrixPosition(vt.matrixWorld);const lt=k.distanceTo(st),bt=W.projectionMatrix.elements,wt=vt.projectionMatrix.elements,Dt=bt[14]/(bt[10]-1),Tt=bt[14]/(bt[10]+1),At=(bt[9]+1)/bt[5],ie=(bt[9]-1)/bt[5],X=(bt[8]-1)/bt[0],Be=(wt[8]+1)/wt[0],ne=Dt*X,jt=Dt*Be,Ct=lt/(-X+Be),fe=Ct*-X;if(W.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(fe),D.translateZ(Ct),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),bt[10]===-1)D.projectionMatrix.copy(W.projectionMatrix),D.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Bt=Dt+Ct,O=Tt+Ct,A=ne-fe,tt=jt+(lt-fe),mt=At*Tt/O*Bt,xt=ie*Tt/O*Bt;D.projectionMatrix.makePerspective(A,tt,mt,xt,Bt,O),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function yt(D,W){W===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(W.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(l===null)return;let W=D.near,vt=D.far;b.texture!==null&&(b.depthNear>0&&(W=b.depthNear),b.depthFar>0&&(vt=b.depthFar)),w.near=F.near=P.near=W,w.far=F.far=P.far=vt,(z!==w.near||it!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,it=w.far),P.layers.mask=D.layers.mask|2,F.layers.mask=D.layers.mask|4,w.layers.mask=P.layers.mask|F.layers.mask;const lt=D.parent,bt=w.cameras;yt(w,lt);for(let wt=0;wt<bt.length;wt++)yt(bt[wt],lt);bt.length===2?J(w,P,F):w.projectionMatrix.copy(P.projectionMatrix),St(D,w,lt)};function St(D,W,vt){vt===null?D.matrix.copy(W.matrixWorld):(D.matrix.copy(vt.matrixWorld),D.matrix.invert(),D.matrix.multiply(W.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(W.projectionMatrix),D.projectionMatrixInverse.copy(W.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=bl*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(D){p=D,y!==null&&(y.fixedFoveation=D),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=D)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(w)};let Ht=null;function re(D,W){if(v=W.getViewerPose(g||h),E=W,v!==null){const vt=v.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let lt=!1;vt.length!==w.cameras.length&&(w.cameras.length=0,lt=!0);for(let wt=0;wt<vt.length;wt++){const Dt=vt[wt];let Tt=null;if(S!==null)Tt=S.getViewport(Dt);else{const ie=m.getViewSubImage(y,Dt);Tt=ie.viewport,wt===0&&(e.setRenderTargetTextures(U,ie.colorTexture,y.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(U))}let At=N[wt];At===void 0&&(At=new fi,At.layers.enable(wt),At.viewport=new Ve,N[wt]=At),At.matrix.fromArray(Dt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Dt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),wt===0&&(w.matrix.copy(At.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),lt===!0&&w.cameras.push(At)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const wt=m.getDepthInformation(vt[0]);wt&&wt.isValid&&wt.texture&&b.init(e,wt,l.renderState)}}for(let vt=0;vt<L.length;vt++){const lt=R[vt],bt=L[vt];lt!==null&&bt!==void 0&&bt.update(lt,W,g||h)}Ht&&Ht(D,W),W.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:W}),E=null}const ee=new Wx;ee.setAnimationLoop(re),this.setAnimationLoop=function(D){Ht=D},this.dispose=function(){}}}const Vs=new ta,Ew=new Je;function Tw(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,kx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,U,L,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),m(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x)):x.isMeshStandardMaterial?(u(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,R)):x.isMeshMatcapMaterial?(u(M,x),E(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),b(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,U,L):x.isSpriteMaterial?g(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===kn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===kn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const U=e.get(x),L=U.envMap,R=U.envMapRotation;L&&(M.envMap.value=L,Vs.copy(R),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),M.envMapRotation.value.setFromMatrix4(Ew.makeRotationFromEuler(Vs)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,U,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*U,M.scale.value=L*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function m(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,U){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function b(M,x){const U=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function bw(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,L){const R=L.program;s.uniformBlockBinding(U,R)}function g(U,L){let R=l[U.id];R===void 0&&(E(U),R=v(U),l[U.id]=R,U.addEventListener("dispose",M));const Y=L.program;s.updateUBOMapping(U,Y);const I=e.render.frame;u[U.id]!==I&&(y(U),u[U.id]=I)}function v(U){const L=m();U.__bindingPointIndex=L;const R=o.createBuffer(),Y=U.__size,I=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,Y,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,R),R}function m(){for(let U=0;U<d;U++)if(h.indexOf(U)===-1)return h.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=l[U.id],R=U.uniforms,Y=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let I=0,P=R.length;I<P;I++){const F=Array.isArray(R[I])?R[I]:[R[I]];for(let N=0,w=F.length;N<w;N++){const z=F[N];if(S(z,I,N,Y)===!0){const it=z.__offset,nt=Array.isArray(z.value)?z.value:[z.value];let dt=0;for(let ut=0;ut<nt.length;ut++){const k=nt[ut],st=b(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,it+dt,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,dt),dt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(U,L,R,Y){const I=U.value,P=L+"_"+R;if(Y[P]===void 0)return typeof I=="number"||typeof I=="boolean"?Y[P]=I:Y[P]=I.clone(),!0;{const F=Y[P];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return Y[P]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function E(U){const L=U.uniforms;let R=0;const Y=16;for(let P=0,F=L.length;P<F;P++){const N=Array.isArray(L[P])?L[P]:[L[P]];for(let w=0,z=N.length;w<z;w++){const it=N[w],nt=Array.isArray(it.value)?it.value:[it.value];for(let dt=0,ut=nt.length;dt<ut;dt++){const k=nt[dt],st=b(k),J=R%Y,yt=J%st.boundary,St=J+yt;R+=yt,St!==0&&Y-St<st.storage&&(R+=Y-St),it.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=R,R+=st.storage}}}const I=R%Y;return I>0&&(R+=Y-I),U.__size=R,U.__cache={},this}function b(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function M(U){const L=U.target;L.removeEventListener("dispose",M);const R=h.indexOf(L.__bindingPointIndex);h.splice(R,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function x(){for(const U in l)o.deleteBuffer(l[U]);h=[],l={},u={}}return{bind:p,update:g,dispose:x}}class Aw{constructor(e={}){const{canvas:i=dE(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,x=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ei,this.toneMapping=ds,this.toneMappingExposure=1;const R=this;let Y=!1,I=0,P=0,F=null,N=-1,w=null;const z=new Ve,it=new Ve;let nt=null;const dt=new we(0);let ut=0,k=i.width,st=i.height,J=1,yt=null,St=null;const Ht=new Ve(0,0,k,st),re=new Ve(0,0,k,st);let ee=!1;const D=new Vp;let W=!1,vt=!1;const lt=new Je,bt=new Je,wt=new G,Dt=new Ve,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function ie(){return F===null?J:1}let X=s;function Be(C,K){return i.getContext(C,K)}try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Lp}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Ft,!1),X===null){const K="webgl2";if(X=Be(K,C),X===null)throw Be(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ne,jt,Ct,fe,Bt,O,A,tt,mt,xt,pt,Yt,Ut,Pt,ye,Mt,Xt,ae,oe,Vt,xe,he,Fe,V;function Lt(){ne=new NA(X),ne.init(),he=new gw(X,ne),jt=new bA(X,ne,e,he),Ct=new dw(X,ne),jt.reverseDepthBuffer&&y&&Ct.buffers.depth.setReversed(!0),fe=new OA(X),Bt=new J2,O=new mw(X,ne,Ct,Bt,jt,he,fe),A=new wA(R),tt=new DA(R),mt=new GE(X),Fe=new EA(X,mt),xt=new UA(X,mt,fe,Fe),pt=new PA(X,xt,mt,fe),oe=new zA(X,jt,O),Mt=new AA(Bt),Yt=new Q2(R,A,tt,ne,jt,Fe,Mt),Ut=new Tw(R,Bt),Pt=new tw,ye=new rw(ne),ae=new MA(R,A,tt,Ct,pt,S,p),Xt=new fw(R,pt,jt),V=new bw(X,fe,jt,Ct),Vt=new TA(X,ne,fe),xe=new LA(X,ne,fe),fe.programs=Yt.programs,R.capabilities=jt,R.extensions=ne,R.properties=Bt,R.renderLists=Pt,R.shadowMap=Xt,R.state=Ct,R.info=fe}Lt();const ct=new Mw(R,X);this.xr=ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(k,st,!1))},this.getSize=function(C){return C.set(k,st)},this.setSize=function(C,K,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,st=K,i.width=Math.floor(C*J),i.height=Math.floor(K*J),rt===!0&&(i.style.width=C+"px",i.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(k*J,st*J).floor()},this.setDrawingBufferSize=function(C,K,rt){k=C,st=K,J=rt,i.width=Math.floor(C*rt),i.height=Math.floor(K*rt),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(Ht)},this.setViewport=function(C,K,rt,ot){C.isVector4?Ht.set(C.x,C.y,C.z,C.w):Ht.set(C,K,rt,ot),Ct.viewport(z.copy(Ht).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,K,rt,ot){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,K,rt,ot),Ct.scissor(it.copy(re).multiplyScalar(J).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){Ct.setScissorTest(ee=C)},this.setOpaqueSort=function(C){yt=C},this.setTransparentSort=function(C){St=C},this.getClearColor=function(C){return C.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(C=!0,K=!0,rt=!0){let ot=0;if(C){let Q=!1;if(F!==null){const Et=F.texture.format;Q=Et===Fp||Et===Bp||Et===Ip}if(Q){const Et=F.texture.type,zt=Et===Ra||Et===Zs||Et===Tl||Et===uo||Et===zp||Et===Pp,Zt=ae.getClearColor(),Kt=ae.getClearAlpha(),te=Zt.r,Qt=Zt.g,It=Zt.b;zt?(E[0]=te,E[1]=Qt,E[2]=It,E[3]=Kt,X.clearBufferuiv(X.COLOR,0,E)):(b[0]=te,b[1]=Qt,b[2]=It,b[3]=Kt,X.clearBufferiv(X.COLOR,0,b))}else ot|=X.COLOR_BUFFER_BIT}K&&(ot|=X.DEPTH_BUFFER_BIT),rt&&(ot|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Ft,!1),Pt.dispose(),ye.dispose(),Bt.dispose(),A.dispose(),tt.dispose(),pt.dispose(),Fe.dispose(),V.dispose(),Yt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Cn),ct.removeEventListener("sessionend",Nl),ia.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const C=fe.autoReset,K=Xt.enabled,rt=Xt.autoUpdate,ot=Xt.needsUpdate,Q=Xt.type;Lt(),fe.autoReset=C,Xt.enabled=K,Xt.autoUpdate=rt,Xt.needsUpdate=ot,Xt.type=Q}function Ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const K=C.target;K.removeEventListener("dispose",ce),Ze(K)}function Ze(C){gn(C),Bt.remove(C)}function gn(C){const K=Bt.get(C).programs;K!==void 0&&(K.forEach(function(rt){Yt.releaseProgram(rt)}),C.isShaderMaterial&&Yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,rt,ot,Q,Et){K===null&&(K=Tt);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,Zt=zu(C,K,rt,ot,Q);Ct.setMaterial(ot,zt);let Kt=rt.index,te=1;if(ot.wireframe===!0){if(Kt=xt.getWireframeAttribute(rt),Kt===void 0)return;te=2}const Qt=rt.drawRange,It=rt.attributes.position;let ve=Qt.start*te,Oe=(Qt.start+Qt.count)*te;Et!==null&&(ve=Math.max(ve,Et.start*te),Oe=Math.min(Oe,(Et.start+Et.count)*te)),Kt!==null?(ve=Math.max(ve,0),Oe=Math.min(Oe,Kt.count)):It!=null&&(ve=Math.max(ve,0),Oe=Math.min(Oe,It.count));const ke=Oe-ve;if(ke<0||ke===1/0)return;Fe.setup(Q,ot,Zt,rt,Kt);let Rn,Re=Vt;if(Kt!==null&&(Rn=mt.get(Kt),Re=xe,Re.setIndex(Rn)),Q.isMesh)ot.wireframe===!0?(Ct.setLineWidth(ot.wireframeLinewidth*ie()),Re.setMode(X.LINES)):Re.setMode(X.TRIANGLES);else if(Q.isLine){let Wt=ot.linewidth;Wt===void 0&&(Wt=1),Ct.setLineWidth(Wt*ie()),Q.isLineSegments?Re.setMode(X.LINES):Q.isLineLoop?Re.setMode(X.LINE_LOOP):Re.setMode(X.LINE_STRIP)}else Q.isPoints?Re.setMode(X.POINTS):Q.isSprite&&Re.setMode(X.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Wt=Q._multiDrawStarts,Yn=Q._multiDrawCounts,Ae=Q._multiDrawCount,un=Kt?mt.get(Kt).bytesPerElement:1,$n=Bt.get(ot).currentProgram.getUniforms();for(let fn=0;fn<Ae;fn++)$n.setValue(X,"_gl_DrawID",fn),Re.render(Wt[fn]/un,Yn[fn])}else if(Q.isInstancedMesh)Re.renderInstances(ve,ke,Q.count);else if(rt.isInstancedBufferGeometry){const Wt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Yn=Math.min(rt.instanceCount,Wt);Re.renderInstances(ve,ke,Yn)}else Re.render(ve,ke)};function be(C,K,rt){C.transparent===!0&&C.side===Ti&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,sa(C,K,rt),C.side=ps,C.needsUpdate=!0,sa(C,K,rt),C.side=Ti):sa(C,K,rt)}this.compile=function(C,K,rt=null){rt===null&&(rt=C),x=ye.get(rt),x.init(K),L.push(x),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),C!==rt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const ot=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let zt=0;zt<Et.length;zt++){const Zt=Et[zt];be(Zt,rt,Q),ot.add(Zt)}else be(Et,rt,Q),ot.add(Et)}),L.pop(),x=null,ot},this.compileAsync=function(C,K,rt=null){const ot=this.compile(C,K,rt);return new Promise(Q=>{function Et(){if(ot.forEach(function(zt){Bt.get(zt).currentProgram.isReady()&&ot.delete(zt)}),ot.size===0){Q(C);return}setTimeout(Et,10)}ne.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let je=null;function vn(C){je&&je(C)}function Cn(){ia.stop()}function Nl(){ia.start()}const ia=new Wx;ia.setAnimationLoop(vn),typeof self<"u"&&ia.setContext(self),this.setAnimationLoop=function(C){je=C,ct.setAnimationLoop(C),C===null?ia.stop():ia.start()},ct.addEventListener("sessionstart",Cn),ct.addEventListener("sessionend",Nl),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(K),K=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,K,F),x=ye.get(C,L.length),x.init(K),L.push(x),bt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),D.setFromProjectionMatrix(bt),vt=this.localClippingEnabled,W=Mt.init(this.clippingPlanes,vt),M=Pt.get(C,U.length),M.init(),U.push(M),ct.enabled===!0&&ct.isPresenting===!0){const Et=R.xr.getDepthSensingMesh();Et!==null&&_o(Et,K,-1/0,R.sortObjects)}_o(C,K,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(yt,St),At=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,At&&ae.addToRenderList(M,C),this.info.render.frame++,W===!0&&Mt.beginShadows();const rt=x.state.shadowsArray;Xt.render(rt,C,K),W===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,Q=M.transmissive;if(x.setupLights(),K.isArrayCamera){const Et=K.cameras;if(Q.length>0)for(let zt=0,Zt=Et.length;zt<Zt;zt++){const Kt=Et[zt];gs(ot,Q,C,Kt)}At&&ae.render(C);for(let zt=0,Zt=Et.length;zt<Zt;zt++){const Kt=Et[zt];ms(M,C,Kt,Kt.viewport)}}else Q.length>0&&gs(ot,Q,C,K),At&&ae.render(C),ms(M,C,K);F!==null&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(R,C,K),Fe.resetDefaultState(),N=-1,w=null,L.pop(),L.length>0?(x=L[L.length-1],W===!0&&Mt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?M=U[U.length-1]:M=null};function _o(C,K,rt,ot){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||D.intersectsSprite(C)){ot&&Dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const zt=pt.update(C),Zt=C.material;Zt.visible&&M.push(C,zt,Zt,rt,Dt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||D.intersectsObject(C))){const zt=pt.update(C),Zt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Dt.copy(C.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Dt.copy(zt.boundingSphere.center)),Dt.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(Zt)){const Kt=zt.groups;for(let te=0,Qt=Kt.length;te<Qt;te++){const It=Kt[te],ve=Zt[It.materialIndex];ve&&ve.visible&&M.push(C,zt,ve,rt,Dt.z,It)}}else Zt.visible&&M.push(C,zt,Zt,rt,Dt.z,null)}}const Et=C.children;for(let zt=0,Zt=Et.length;zt<Zt;zt++)_o(Et[zt],K,rt,ot)}function ms(C,K,rt,ot){const Q=C.opaque,Et=C.transmissive,zt=C.transparent;x.setupLightsView(rt),W===!0&&Mt.setGlobalState(R.clippingPlanes,rt),ot&&Ct.viewport(z.copy(ot)),Q.length>0&&aa(Q,K,rt),Et.length>0&&aa(Et,K,rt),zt.length>0&&aa(zt,K,rt),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function gs(C,K,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ot.id]===void 0&&(x.state.transmissionRenderTarget[ot.id]=new Ks(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Al:Ra,minFilter:js,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Et=x.state.transmissionRenderTarget[ot.id],zt=ot.viewport||z;Et.setSize(zt.z,zt.w);const Zt=R.getRenderTarget();R.setRenderTarget(Et),R.getClearColor(dt),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),At&&ae.render(rt);const Kt=R.toneMapping;R.toneMapping=ds;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),x.setupLightsView(ot),W===!0&&Mt.setGlobalState(R.clippingPlanes,ot),aa(C,rt,ot),O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let It=0,ve=K.length;It<ve;It++){const Oe=K[It],ke=Oe.object,Rn=Oe.geometry,Re=Oe.material,Wt=Oe.group;if(Re.side===Ti&&ke.layers.test(ot.layers)){const Yn=Re.side;Re.side=kn,Re.needsUpdate=!0,Bi(ke,rt,ot,Rn,Re,Wt),Re.side=Yn,Re.needsUpdate=!0,Qt=!0}}Qt===!0&&(O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et))}R.setRenderTarget(Zt),R.setClearColor(dt,ut),te!==void 0&&(ot.viewport=te),R.toneMapping=Kt}function aa(C,K,rt){const ot=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Et=C.length;Q<Et;Q++){const zt=C[Q],Zt=zt.object,Kt=zt.geometry,te=ot===null?zt.material:ot,Qt=zt.group;Zt.layers.test(rt.layers)&&Bi(Zt,K,rt,Kt,te,Qt)}}function Bi(C,K,rt,ot,Q,Et){C.onBeforeRender(R,K,rt,ot,Q,Et),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(R,K,rt,ot,C,Et),Q.transparent===!0&&Q.side===Ti&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,R.renderBufferDirect(rt,K,ot,Q,C,Et),Q.side=ps,Q.needsUpdate=!0,R.renderBufferDirect(rt,K,ot,Q,C,Et),Q.side=Ti):R.renderBufferDirect(rt,K,ot,Q,C,Et),C.onAfterRender(R,K,rt,ot,Q,Et)}function sa(C,K,rt){K.isScene!==!0&&(K=Tt);const ot=Bt.get(C),Q=x.state.lights,Et=x.state.shadowsArray,zt=Q.state.version,Zt=Yt.getParameters(C,Q.state,Et,K,rt),Kt=Yt.getProgramCacheKey(Zt);let te=ot.programs;ot.environment=C.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(C.isMeshStandardMaterial?tt:A).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,te===void 0&&(C.addEventListener("dispose",ce),te=new Map,ot.programs=te);let Qt=te.get(Kt);if(Qt!==void 0){if(ot.currentProgram===Qt&&ot.lightsStateVersion===zt)return xo(C,Zt),Qt}else Zt.uniforms=Yt.getUniforms(C),C.onBeforeCompile(Zt,R),Qt=Yt.acquireProgram(Zt,Kt),te.set(Kt,Qt),ot.uniforms=Zt.uniforms;const It=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(It.clippingPlanes=Mt.uniform),xo(C,Zt),ot.needsLights=yo(C),ot.lightsStateVersion=zt,ot.needsLights&&(It.ambientLightColor.value=Q.state.ambient,It.lightProbe.value=Q.state.probe,It.directionalLights.value=Q.state.directional,It.directionalLightShadows.value=Q.state.directionalShadow,It.spotLights.value=Q.state.spot,It.spotLightShadows.value=Q.state.spotShadow,It.rectAreaLights.value=Q.state.rectArea,It.ltc_1.value=Q.state.rectAreaLTC1,It.ltc_2.value=Q.state.rectAreaLTC2,It.pointLights.value=Q.state.point,It.pointLightShadows.value=Q.state.pointShadow,It.hemisphereLights.value=Q.state.hemi,It.directionalShadowMap.value=Q.state.directionalShadowMap,It.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,It.spotShadowMap.value=Q.state.spotShadowMap,It.spotLightMatrix.value=Q.state.spotLightMatrix,It.spotLightMap.value=Q.state.spotLightMap,It.pointShadowMap.value=Q.state.pointShadowMap,It.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=Qt,ot.uniformsList=null,Qt}function Na(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=wu.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function xo(C,K){const rt=Bt.get(C);rt.outputColorSpace=K.outputColorSpace,rt.batching=K.batching,rt.batchingColor=K.batchingColor,rt.instancing=K.instancing,rt.instancingColor=K.instancingColor,rt.instancingMorph=K.instancingMorph,rt.skinning=K.skinning,rt.morphTargets=K.morphTargets,rt.morphNormals=K.morphNormals,rt.morphColors=K.morphColors,rt.morphTargetsCount=K.morphTargetsCount,rt.numClippingPlanes=K.numClippingPlanes,rt.numIntersection=K.numClipIntersection,rt.vertexAlphas=K.vertexAlphas,rt.vertexTangents=K.vertexTangents,rt.toneMapping=K.toneMapping}function zu(C,K,rt,ot,Q){K.isScene!==!0&&(K=Tt),O.resetTextureUnits();const Et=K.fog,zt=ot.isMeshStandardMaterial?K.environment:null,Zt=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:po,Kt=(ot.isMeshStandardMaterial?tt:A).get(ot.envMap||zt),te=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),It=!!rt.morphAttributes.position,ve=!!rt.morphAttributes.normal,Oe=!!rt.morphAttributes.color;let ke=ds;ot.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ke=R.toneMapping);const Rn=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Re=Rn!==void 0?Rn.length:0,Wt=Bt.get(ot),Yn=x.state.lights;if(W===!0&&(vt===!0||C!==w)){const Pn=C===w&&ot.id===N;Mt.setState(ot,C,Pn)}let Ae=!1;ot.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Yn.state.version||Wt.outputColorSpace!==Zt||Q.isBatchedMesh&&Wt.batching===!1||!Q.isBatchedMesh&&Wt.batching===!0||Q.isBatchedMesh&&Wt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Wt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Wt.instancing===!1||!Q.isInstancedMesh&&Wt.instancing===!0||Q.isSkinnedMesh&&Wt.skinning===!1||!Q.isSkinnedMesh&&Wt.skinning===!0||Q.isInstancedMesh&&Wt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Wt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Wt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Wt.instancingMorph===!1&&Q.morphTexture!==null||Wt.envMap!==Kt||ot.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Mt.numPlanes||Wt.numIntersection!==Mt.numIntersection)||Wt.vertexAlphas!==te||Wt.vertexTangents!==Qt||Wt.morphTargets!==It||Wt.morphNormals!==ve||Wt.morphColors!==Oe||Wt.toneMapping!==ke||Wt.morphTargetsCount!==Re)&&(Ae=!0):(Ae=!0,Wt.__version=ot.version);let un=Wt.currentProgram;Ae===!0&&(un=sa(ot,K,Q));let $n=!1,fn=!1,hi=!1;const ue=un.getUniforms(),ti=Wt.uniforms;if(Ct.useProgram(un.program)&&($n=!0,fn=!0,hi=!0),ot.id!==N&&(N=ot.id,fn=!0),$n||w!==C){Ct.buffers.depth.getReversed()?(lt.copy(C.projectionMatrix),mE(lt),gE(lt),ue.setValue(X,"projectionMatrix",lt)):ue.setValue(X,"projectionMatrix",C.projectionMatrix),ue.setValue(X,"viewMatrix",C.matrixWorldInverse);const Dn=ue.map.cameraPosition;Dn!==void 0&&Dn.setValue(X,wt.setFromMatrixPosition(C.matrixWorld)),jt.logarithmicDepthBuffer&&ue.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ue.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,fn=!0,hi=!0)}if(Q.isSkinnedMesh){ue.setOptional(X,Q,"bindMatrix"),ue.setOptional(X,Q,"bindMatrixInverse");const Pn=Q.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),ue.setValue(X,"boneTexture",Pn.boneTexture,O))}Q.isBatchedMesh&&(ue.setOptional(X,Q,"batchingTexture"),ue.setValue(X,"batchingTexture",Q._matricesTexture,O),ue.setOptional(X,Q,"batchingIdTexture"),ue.setValue(X,"batchingIdTexture",Q._indirectTexture,O),ue.setOptional(X,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ue.setValue(X,"batchingColorTexture",Q._colorsTexture,O));const Ua=rt.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0)&&oe.update(Q,rt,un),(fn||Wt.receiveShadow!==Q.receiveShadow)&&(Wt.receiveShadow=Q.receiveShadow,ue.setValue(X,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(ti.envMap.value=Kt,ti.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(ti.envMapIntensity.value=K.environmentIntensity),fn&&(ue.setValue(X,"toneMappingExposure",R.toneMappingExposure),Wt.needsLights&&Ul(ti,hi),Et&&ot.fog===!0&&Ut.refreshFogUniforms(ti,Et),Ut.refreshMaterialUniforms(ti,ot,J,st,x.state.transmissionRenderTarget[C.id]),wu.upload(X,Na(Wt),ti,O)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(wu.upload(X,Na(Wt),ti,O),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ue.setValue(X,"center",Q.center),ue.setValue(X,"modelViewMatrix",Q.modelViewMatrix),ue.setValue(X,"normalMatrix",Q.normalMatrix),ue.setValue(X,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Pn=ot.uniformsGroups;for(let Dn=0,In=Pn.length;Dn<In;Dn++){const Ll=Pn[Dn];V.update(Ll,un),V.bind(Ll,un)}}return un}function Ul(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function yo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,K,rt){Bt.get(C.texture).__webglTexture=K,Bt.get(C.depthTexture).__webglTexture=rt;const ot=Bt.get(C);ot.__hasExternalTextures=!0,ot.__autoAllocateDepthBuffer=rt===void 0,ot.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,K){const rt=Bt.get(C);rt.__webglFramebuffer=K,rt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,rt=0){F=C,I=K,P=rt;let ot=!0,Q=null,Et=!1,zt=!1;if(C){const Kt=Bt.get(C);if(Kt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(X.FRAMEBUFFER,null),ot=!1;else if(Kt.__webglFramebuffer===void 0)O.setupRenderTarget(C);else if(Kt.__hasExternalTextures)O.rebindTextures(C,Bt.get(C.texture).__webglTexture,Bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const It=C.depthTexture;if(Kt.__boundDepthTexture!==It){if(It!==null&&Bt.has(It)&&(C.width!==It.image.width||C.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(C)}}const te=C.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(zt=!0);const Qt=Bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[K])?Q=Qt[K][rt]:Q=Qt[K],Et=!0):C.samples>0&&O.useMultisampledRTT(C)===!1?Q=Bt.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?Q=Qt[rt]:Q=Qt,z.copy(C.viewport),it.copy(C.scissor),nt=C.scissorTest}else z.copy(Ht).multiplyScalar(J).floor(),it.copy(re).multiplyScalar(J).floor(),nt=ee;if(Ct.bindFramebuffer(X.FRAMEBUFFER,Q)&&ot&&Ct.drawBuffers(C,Q),Ct.viewport(z),Ct.scissor(it),Ct.setScissorTest(nt),Et){const Kt=Bt.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Kt.__webglTexture,rt)}else if(zt){const Kt=Bt.get(C.texture),te=K||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Kt.__webglTexture,rt||0,te)}N=-1},this.readRenderTargetPixels=function(C,K,rt,ot,Q,Et,zt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Zt=Zt[zt]),Zt){Ct.bindFramebuffer(X.FRAMEBUFFER,Zt);try{const Kt=C.texture,te=Kt.format,Qt=Kt.type;if(!jt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ot&&rt>=0&&rt<=C.height-Q&&X.readPixels(K,rt,ot,Q,he.convert(te),he.convert(Qt),Et)}finally{const Kt=F!==null?Bt.get(F).__webglFramebuffer:null;Ct.bindFramebuffer(X.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(C,K,rt,ot,Q,Et,zt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=Bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(Zt=Zt[zt]),Zt){const Kt=C.texture,te=Kt.format,Qt=Kt.type;if(!jt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=C.width-ot&&rt>=0&&rt<=C.height-Q){Ct.bindFramebuffer(X.FRAMEBUFFER,Zt);const It=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,It),X.bufferData(X.PIXEL_PACK_BUFFER,Et.byteLength,X.STREAM_READ),X.readPixels(K,rt,ot,Q,he.convert(te),he.convert(Qt),0);const ve=F!==null?Bt.get(F).__webglFramebuffer:null;Ct.bindFramebuffer(X.FRAMEBUFFER,ve);const Oe=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await pE(X,Oe,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,It),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Et),X.deleteBuffer(It),X.deleteSync(Oe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,K=null,rt=0){C.isTexture!==!0&&(gl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1]);const ot=Math.pow(2,-rt),Q=Math.floor(C.image.width*ot),Et=Math.floor(C.image.height*ot),zt=K!==null?K.x:0,Zt=K!==null?K.y:0;O.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,rt,0,0,zt,Zt,Q,Et),Ct.unbindTexture()},this.copyTextureToTexture=function(C,K,rt=null,ot=null,Q=0){C.isTexture!==!0&&(gl("WebGLRenderer: copyTextureToTexture function signature has changed."),ot=arguments[0]||null,C=arguments[1],K=arguments[2],Q=arguments[3]||0,rt=null);let Et,zt,Zt,Kt,te,Qt,It,ve,Oe;const ke=C.isCompressedTexture?C.mipmaps[Q]:C.image;rt!==null?(Et=rt.max.x-rt.min.x,zt=rt.max.y-rt.min.y,Zt=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,te=rt.min.y,Qt=rt.isBox3?rt.min.z:0):(Et=ke.width,zt=ke.height,Zt=ke.depth||1,Kt=0,te=0,Qt=0),ot!==null?(It=ot.x,ve=ot.y,Oe=ot.z):(It=0,ve=0,Oe=0);const Rn=he.convert(K.format),Re=he.convert(K.type);let Wt;K.isData3DTexture?(O.setTexture3D(K,0),Wt=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(O.setTexture2DArray(K,0),Wt=X.TEXTURE_2D_ARRAY):(O.setTexture2D(K,0),Wt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);const Yn=X.getParameter(X.UNPACK_ROW_LENGTH),Ae=X.getParameter(X.UNPACK_IMAGE_HEIGHT),un=X.getParameter(X.UNPACK_SKIP_PIXELS),$n=X.getParameter(X.UNPACK_SKIP_ROWS),fn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,ke.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ke.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Kt),X.pixelStorei(X.UNPACK_SKIP_ROWS,te),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Qt);const hi=C.isDataArrayTexture||C.isData3DTexture,ue=K.isDataArrayTexture||K.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const ti=Bt.get(C),Ua=Bt.get(K),Pn=Bt.get(ti.__renderTarget),Dn=Bt.get(Ua.__renderTarget);Ct.bindFramebuffer(X.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let In=0;In<Zt;In++)hi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Bt.get(C).__webglTexture,Q,Qt+In),C.isDepthTexture?(ue&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Bt.get(K).__webglTexture,Q,Oe+In),X.blitFramebuffer(Kt,te,Et,zt,It,ve,Et,zt,X.DEPTH_BUFFER_BIT,X.NEAREST)):ue?X.copyTexSubImage3D(Wt,Q,It,ve,Oe+In,Kt,te,Et,zt):X.copyTexSubImage2D(Wt,Q,It,ve,Oe+In,Kt,te,Et,zt);Ct.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ue?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Wt,Q,It,ve,Oe,Et,zt,Zt,Rn,Re,ke.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(Wt,Q,It,ve,Oe,Et,zt,Zt,Rn,ke.data):X.texSubImage3D(Wt,Q,It,ve,Oe,Et,zt,Zt,Rn,Re,ke):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Q,It,ve,Et,zt,Rn,Re,ke.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Q,It,ve,ke.width,ke.height,Rn,ke.data):X.texSubImage2D(X.TEXTURE_2D,Q,It,ve,Et,zt,Rn,Re,ke);X.pixelStorei(X.UNPACK_ROW_LENGTH,Yn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ae),X.pixelStorei(X.UNPACK_SKIP_PIXELS,un),X.pixelStorei(X.UNPACK_SKIP_ROWS,$n),X.pixelStorei(X.UNPACK_SKIP_IMAGES,fn),Q===0&&K.generateMipmaps&&X.generateMipmap(Wt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(C,K,rt=null,ot=null,Q=0){return C.isTexture!==!0&&(gl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,ot=arguments[1]||null,C=arguments[2],K=arguments[3],Q=arguments[4]||0),gl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,rt,ot,Q)},this.initRenderTarget=function(C){Bt.get(C).__webglFramebuffer===void 0&&O.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),Ct.unbindTexture()},this.resetState=function(){I=0,P=0,F=null,Ct.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}class ty extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ww extends qn{constructor(e,i,s,l,u,h,d,p,g){super(e,i,s,l,u,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class na{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i){const s=this.getLengths();let l=0;const u=s.length;let h;i?h=i:h=e*s[u-1];let d=0,p=u-1,g;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),g=s[l]-h,g<0)d=l+1;else if(g>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(u-1);const v=s[l],y=s[l+1]-v,S=(h-v)/y;return(l+S)/(u-1)}getTangent(e,i){let l=e-1e-4,u=e+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new kt:new G);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i){const s=new G,l=[],u=[],h=[],d=new G,p=new Je;for(let S=0;S<=e;S++){const E=S/e;l[S]=this.getTangentAt(E,new G)}u[0]=new G,h[0]=new G;let g=Number.MAX_VALUE;const v=Math.abs(l[0].x),m=Math.abs(l[0].y),y=Math.abs(l[0].z);v<=g&&(g=v,s.set(1,0,0)),m<=g&&(g=m,s.set(0,1,0)),y<=g&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let S=1;S<=e;S++){if(u[S]=u[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(dn(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(d,E))}h[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(dn(u[0].dot(u[e]),-1,1));S/=e,l[0].dot(d.crossVectors(u[0],u[e]))>0&&(S=-S);for(let E=1;E<=e;E++)u[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kp extends na{constructor(e=0,i=0,s=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,i=new kt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+e*u;let p=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),m=Math.sin(this.aRotation),y=p-this.aX,S=g-this.aY;p=y*v-S*m+this.aX,g=y*m+S*v+this.aY}return s.set(p,g)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Cw extends kp{constructor(e,i,s,l,u,h){super(e,i,s,s,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function qp(){let o=0,e=0,i=0,s=0;function l(u,h,d,p){o=u,e=d,i=-3*u+3*h-2*d-p,s=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,g){l(h,d,g*(d-u),g*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,g,v,m){let y=(h-u)/g-(d-u)/(g+v)+(d-h)/v,S=(d-h)/v-(p-h)/(v+m)+(p-d)/m;y*=v,S*=v,l(h,d,y,S)},calc:function(u){const h=u*u,d=h*u;return o+e*u+i*h+s*d}}}const Su=new G,Gd=new qp,Vd=new qp,Xd=new qp;class Rw extends na{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new G){const s=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let g,v;this.closed||d>0?g=l[(d-1)%u]:(Su.subVectors(l[0],l[1]).add(l[0]),g=Su);const m=l[d%u],y=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Su.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Su),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(g.distanceToSquared(m),S),b=Math.pow(m.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(v),S);b<1e-4&&(b=1),E<1e-4&&(E=b),M<1e-4&&(M=b),Gd.initNonuniformCatmullRom(g.x,m.x,y.x,v.x,E,b,M),Vd.initNonuniformCatmullRom(g.y,m.y,y.y,v.y,E,b,M),Xd.initNonuniformCatmullRom(g.z,m.z,y.z,v.z,E,b,M)}else this.curveType==="catmullrom"&&(Gd.initCatmullRom(g.x,m.x,y.x,v.x,this.tension),Vd.initCatmullRom(g.y,m.y,y.y,v.y,this.tension),Xd.initCatmullRom(g.z,m.z,y.z,v.z,this.tension));return s.set(Gd.calc(p),Vd.calc(p),Xd.calc(p)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new G().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fx(o,e,i,s,l){const u=(s-e)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+h)*p+(-3*i+3*s-2*u-h)*d+u*o+i}function Dw(o,e){const i=1-o;return i*i*e}function Nw(o,e){return 2*(1-o)*o*e}function Uw(o,e){return o*o*e}function yl(o,e,i,s){return Dw(o,e)+Nw(o,i)+Uw(o,s)}function Lw(o,e){const i=1-o;return i*i*i*e}function Ow(o,e){const i=1-o;return 3*i*i*o*e}function zw(o,e){return 3*(1-o)*o*o*e}function Pw(o,e){return o*o*o*e}function Sl(o,e,i,s,l){return Lw(o,e)+Ow(o,i)+zw(o,s)+Pw(o,l)}class ey extends na{constructor(e=new kt,i=new kt,s=new kt,l=new kt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new kt){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Sl(e,l.x,u.x,h.x,d.x),Sl(e,l.y,u.y,h.y,d.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Iw extends na{constructor(e=new G,i=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new G){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Sl(e,l.x,u.x,h.x,d.x),Sl(e,l.y,u.y,h.y,d.y),Sl(e,l.z,u.z,h.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ny extends na{constructor(e=new kt,i=new kt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new kt){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new kt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bw extends na{constructor(e=new G,i=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new G){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new G){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iy extends na{constructor(e=new kt,i=new kt,s=new kt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new kt){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(yl(e,l.x,u.x,h.x),yl(e,l.y,u.y,h.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fw extends na{constructor(e=new G,i=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new G){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(yl(e,l.x,u.x,h.x),yl(e,l.y,u.y,h.y),yl(e,l.z,u.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ay extends na{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new kt){const s=i,l=this.points,u=(l.length-1)*e,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],g=l[h],v=l[h>l.length-2?l.length-1:h+1],m=l[h>l.length-3?l.length-1:h+2];return s.set(fx(d,p.x,g.x,v.x,m.x),fx(d,p.y,g.y,v.y,m.y)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new kt().fromArray(l))}return this}}var hx=Object.freeze({__proto__:null,ArcCurve:Cw,CatmullRomCurve3:Rw,CubicBezierCurve:ey,CubicBezierCurve3:Iw,EllipseCurve:kp,LineCurve:ny,LineCurve3:Bw,QuadraticBezierCurve:iy,QuadraticBezierCurve3:Fw,SplineCurve:ay});class Hw extends na{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(i)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hx[s](i,e))}return this}getPoint(e,i){const s=e*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=s){const h=l[u]-s,d=this.curves[u],p=d.getLength(),g=p===0?0:1-h/p;return d.getPointAt(g,i)}u++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),e.push(i);return this.cacheLengths=e,e}getSpacedPoints(e=40){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return this.autoClose&&i.push(i[0]),i}getPoints(e=12){const i=[];let s;for(let l=0,u=this.curves;l<u.length;l++){const h=u[l],d=h.isEllipseCurve?e*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?e*h.points.length:e,p=h.getPoints(d);for(let g=0;g<p.length;g++){const v=p[g];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let i=0,s=e.curves.length;i<s;i++){const l=e.curves[i];this.curves.push(l.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];e.curves.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let i=0,s=e.curves.length;i<s;i++){const l=e.curves[i];this.curves.push(new hx[l.type]().fromJSON(l))}return this}}class Gw extends Hw{constructor(e){super(),this.type="Path",this.currentPoint=new kt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let i=1,s=e.length;i<s;i++)this.lineTo(e[i].x,e[i].y);return this}moveTo(e,i){return this.currentPoint.set(e,i),this}lineTo(e,i){const s=new ny(this.currentPoint.clone(),new kt(e,i));return this.curves.push(s),this.currentPoint.set(e,i),this}quadraticCurveTo(e,i,s,l){const u=new iy(this.currentPoint.clone(),new kt(e,i),new kt(s,l));return this.curves.push(u),this.currentPoint.set(s,l),this}bezierCurveTo(e,i,s,l,u,h){const d=new ey(this.currentPoint.clone(),new kt(e,i),new kt(s,l),new kt(u,h));return this.curves.push(d),this.currentPoint.set(u,h),this}splineThru(e){const i=[this.currentPoint.clone()].concat(e),s=new ay(i);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,i,s,l,u,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+d,i+p,s,l,u,h),this}absarc(e,i,s,l,u,h){return this.absellipse(e,i,s,s,l,u,h),this}ellipse(e,i,s,l,u,h,d,p){const g=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+g,i+v,s,l,u,h,d,p),this}absellipse(e,i,s,l,u,h,d,p){const g=new kp(e,i,s,l,u,h,d,p);if(this.curves.length>0){const m=g.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(g);const v=g.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ou extends Jn{constructor(e=[new kt(0,-.5),new kt(.5,0),new kt(0,.5)],i=12,s=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:i,phiStart:s,phiLength:l},i=Math.floor(i),l=dn(l,0,Math.PI*2);const u=[],h=[],d=[],p=[],g=[],v=1/i,m=new G,y=new kt,S=new G,E=new G,b=new G;let M=0,x=0;for(let U=0;U<=e.length-1;U++)switch(U){case 0:M=e[U+1].x-e[U].x,x=e[U+1].y-e[U].y,S.x=x*1,S.y=-M,S.z=x*0,b.copy(S),S.normalize(),p.push(S.x,S.y,S.z);break;case e.length-1:p.push(b.x,b.y,b.z);break;default:M=e[U+1].x-e[U].x,x=e[U+1].y-e[U].y,S.x=x*1,S.y=-M,S.z=x*0,E.copy(S),S.x+=b.x,S.y+=b.y,S.z+=b.z,S.normalize(),p.push(S.x,S.y,S.z),b.copy(E)}for(let U=0;U<=i;U++){const L=s+U*v*l,R=Math.sin(L),Y=Math.cos(L);for(let I=0;I<=e.length-1;I++){m.x=e[I].x*R,m.y=e[I].y,m.z=e[I].x*Y,h.push(m.x,m.y,m.z),y.x=U/i,y.y=I/(e.length-1),d.push(y.x,y.y);const P=p[3*I+0]*R,F=p[3*I+1],N=p[3*I+0]*Y;g.push(P,F,N)}}for(let U=0;U<i;U++)for(let L=0;L<e.length-1;L++){const R=L+U*e.length,Y=R,I=R+e.length,P=R+e.length+1,F=R+1;u.push(Y,I,F),u.push(P,F,I)}this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2)),this.setAttribute("normal",new Xe(g,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.points,e.segments,e.phiStart,e.phiLength)}}class Du extends Ou{constructor(e=1,i=1,s=4,l=8){const u=new Gw;u.absarc(0,-i/2,e,Math.PI*1.5,0),u.absarc(0,i/2,e,0,Math.PI*.5),super(u.getPoints(s),l),this.type="CapsuleGeometry",this.parameters={radius:e,length:i,capSegments:s,radialSegments:l}}static fromJSON(e){return new Du(e.radius,e.length,e.capSegments,e.radialSegments)}}class Yp extends Jn{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const u=[],h=[],d=[],p=[],g=new G,v=new kt;h.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let m=0,y=3;m<=i;m++,y+=3){const S=s+m/i*l;g.x=e*Math.cos(S),g.y=e*Math.sin(S),h.push(g.x,g.y,g.z),d.push(0,0,1),v.x=(h[y]/e+1)/2,v.y=(h[y+1]/e+1)/2,p.push(v.x,v.y)}for(let m=1;m<=i;m++)u.push(m,m+1,0);this.setIndex(u),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tn extends Jn{constructor(e=1,i=1,s=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const g=this;l=Math.floor(l),u=Math.floor(u);const v=[],m=[],y=[],S=[];let E=0;const b=[],M=s/2;let x=0;U(),h===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(S,2));function U(){const R=new G,Y=new G;let I=0;const P=(i-e)/s;for(let F=0;F<=u;F++){const N=[],w=F/u,z=w*(i-e)+e;for(let it=0;it<=l;it++){const nt=it/l,dt=nt*p+d,ut=Math.sin(dt),k=Math.cos(dt);Y.x=z*ut,Y.y=-w*s+M,Y.z=z*k,m.push(Y.x,Y.y,Y.z),R.set(ut,P,k).normalize(),y.push(R.x,R.y,R.z),S.push(nt,1-w),N.push(E++)}b.push(N)}for(let F=0;F<l;F++)for(let N=0;N<u;N++){const w=b[N][F],z=b[N+1][F],it=b[N+1][F+1],nt=b[N][F+1];(e>0||N!==0)&&(v.push(w,z,nt),I+=3),(i>0||N!==u-1)&&(v.push(z,it,nt),I+=3)}g.addGroup(x,I,0),x+=I}function L(R){const Y=E,I=new kt,P=new G;let F=0;const N=R===!0?e:i,w=R===!0?1:-1;for(let it=1;it<=l;it++)m.push(0,M*w,0),y.push(0,w,0),S.push(.5,.5),E++;const z=E;for(let it=0;it<=l;it++){const dt=it/l*p+d,ut=Math.cos(dt),k=Math.sin(dt);P.x=N*k,P.y=M*w,P.z=N*ut,m.push(P.x,P.y,P.z),y.push(0,w,0),I.x=ut*.5+.5,I.y=k*.5*w+.5,S.push(I.x,I.y),E++}for(let it=0;it<l;it++){const nt=Y+it,dt=z+it;R===!0?v.push(dt,dt+1,nt):v.push(dt+1,dt,nt),F+=3}g.addGroup(x,F,R===!0?1:2),x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qs extends tn{constructor(e=1,i=1,s=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,e,i,s,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(e){return new Qs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ml extends Jn{constructor(e=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],g=[],v=[];let m=e;const y=(i-e)/l,S=new G,E=new kt;for(let b=0;b<=l;b++){for(let M=0;M<=s;M++){const x=u+M/s*h;S.x=m*Math.cos(x),S.y=m*Math.sin(x),p.push(S.x,S.y,S.z),g.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,v.push(E.x,E.y)}m+=y}for(let b=0;b<l;b++){const M=b*(s+1);for(let x=0;x<s;x++){const U=x+M,L=U,R=U+s+1,Y=U+s+2,I=U+1;d.push(L,R,I),d.push(R,Y,I)}}this.setIndex(d),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pi extends Jn{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let g=0;const v=[],m=new G,y=new G,S=[],E=[],b=[],M=[];for(let x=0;x<=s;x++){const U=[],L=x/s;let R=0;x===0&&h===0?R=.5/i:x===s&&p===Math.PI&&(R=-.5/i);for(let Y=0;Y<=i;Y++){const I=Y/i;m.x=-e*Math.cos(l+I*u)*Math.sin(h+L*d),m.y=e*Math.cos(h+L*d),m.z=e*Math.sin(l+I*u)*Math.sin(h+L*d),E.push(m.x,m.y,m.z),y.copy(m).normalize(),b.push(y.x,y.y,y.z),M.push(I+R,1-L),U.push(g++)}v.push(U)}for(let x=0;x<s;x++)for(let U=0;U<i;U++){const L=v[x][U+1],R=v[x][U],Y=v[x+1][U],I=v[x+1][U+1];(x!==0||h>0)&&S.push(L,R,I),(x!==s-1||p<Math.PI)&&S.push(R,Y,I)}this.setIndex(S),this.setAttribute("position",new Xe(E,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Js extends Jn{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],g=[],v=new G,m=new G,y=new G;for(let S=0;S<=s;S++)for(let E=0;E<=l;E++){const b=E/l*u,M=S/s*Math.PI*2;m.x=(e+i*Math.cos(M))*Math.cos(b),m.y=(e+i*Math.cos(M))*Math.sin(b),m.z=i*Math.sin(M),d.push(m.x,m.y,m.z),v.x=e*Math.cos(b),v.y=e*Math.sin(b),y.subVectors(m,v).normalize(),p.push(y.x,y.y,y.z),g.push(E/l),g.push(S/s)}for(let S=1;S<=s;S++)for(let E=1;E<=l;E++){const b=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,U=(l+1)*S+E;h.push(b,M,U),h.push(M,x,U)}this.setIndex(h),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(p,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wp extends Jn{constructor(e=1,i=.4,s=64,l=8,u=2,h=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:s,radialSegments:l,p:u,q:h},s=Math.floor(s),l=Math.floor(l);const d=[],p=[],g=[],v=[],m=new G,y=new G,S=new G,E=new G,b=new G,M=new G,x=new G;for(let L=0;L<=s;++L){const R=L/s*u*Math.PI*2;U(R,u,h,e,S),U(R+.01,u,h,e,E),M.subVectors(E,S),x.addVectors(E,S),b.crossVectors(M,x),x.crossVectors(b,M),b.normalize(),x.normalize();for(let Y=0;Y<=l;++Y){const I=Y/l*Math.PI*2,P=-i*Math.cos(I),F=i*Math.sin(I);m.x=S.x+(P*x.x+F*b.x),m.y=S.y+(P*x.y+F*b.y),m.z=S.z+(P*x.z+F*b.z),p.push(m.x,m.y,m.z),y.subVectors(m,S).normalize(),g.push(y.x,y.y,y.z),v.push(L/s),v.push(Y/l)}}for(let L=1;L<=s;L++)for(let R=1;R<=l;R++){const Y=(l+1)*(L-1)+(R-1),I=(l+1)*L+(R-1),P=(l+1)*L+R,F=(l+1)*(L-1)+R;d.push(Y,I,F),d.push(I,P,F)}this.setIndex(d),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(g,3)),this.setAttribute("uv",new Xe(v,2));function U(L,R,Y,I,P){const F=Math.cos(L),N=Math.sin(L),w=Y/R*L,z=Math.cos(w);P.x=I*(2+z)*.5*F,P.y=I*(2+z)*N*.5,P.z=I*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Vw extends Rl{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zx,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xw extends Vw{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jp extends zn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const kd=new Je,dx=new G,px=new G;class sy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vp,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;dx.setFromMatrixPosition(e.matrixWorld),i.position.copy(dx),px.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(px),i.updateMatrixWorld(),kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mx=new Je,ml=new G,qd=new G;class kw extends sy{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),ml.setFromMatrixPosition(e.matrixWorld),s.position.copy(ml),qd.copy(s.position),qd.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(qd),s.updateMatrixWorld(),l.makeTranslation(-ml.x,-ml.y,-ml.z),mx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mx)}}class qw extends jp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new kw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yw extends sy{constructor(){super(new jx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gx extends jp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new Yw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ww extends jp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class jw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=vx();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function vx(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lp);const Zw=`
  varying vec2 vUv;
  varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Kw=`
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
`;function Qw(){const o=document.createElement("canvas");o.width=512,o.height=512;const e=o.getContext("2d"),s=o.width/24;for(let u=0;u<o.width;u++){const h=u%s/s;let d=235;if(h>.12&&h<.88){const p=(h-.12)/.76,g=Math.sin(p*Math.PI);d=Math.round(230-g*155)}e.fillStyle=`rgb(${d}, ${d}, ${d})`,e.fillRect(u,0,1,o.height)}const l=new ww(o);return l.wrapS=El,l.wrapT=El,l}function Jw(o){const e=new ty,i=new Pi(20,32,24),s=new ea({side:kn,vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
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
    `});e.add(new Jt(i,s));const l=new Dp(o);l.compileCubemapShader();const u=l.fromScene(e,.025).texture;return l.dispose(),i.dispose(),s.dispose(),u}function Ji(o,e,i,s=1.4){const l=o.attributes.position,u=new G;for(let h=0;h<l.count;h++){u.fromBufferAttribute(l,h);const d=Math.atan2(u.z,u.x),p=u.y,g=Math.sin(d*e+p*s)*i,v=Math.cos(d*(e*2)-p*2.6)*(i*.42),m=Math.sin(p*4.5+Math.cos(d*3))*(i*.35),y=1+g+v+m;u.x*=y,u.z*=y,l.setXYZ(h,u.x,u.y,u.z)}o.computeVertexNormals()}function ry(o,e,i=4.2,s=.44){const l=new On,u=new tn(s*.9,s,i,64,48),h=u.attributes.position,d=new G;for(let E=0;E<h.count;E++){d.fromBufferAttribute(h,E);const b=Math.atan2(d.z,d.x),M=Math.cos(b*24),x=M>.65?.008:-Math.pow(Math.max(0,-M),.7)*.024,U=Math.sqrt(d.x*d.x+d.z*d.z);if(U>.05){const L=(U+x)/U;d.x*=L,d.z*=L,h.setXYZ(E,d.x,d.y,d.z)}}u.computeVertexNormals();const p=new Jt(u,e);p.position.y=-i/2,l.add(p);const g=new Jt(new Js(s*.93,.038,16,48),o);g.rotation.x=Math.PI/2,g.position.y=.02,l.add(g);const v=new tn(s*1.32,s*.88,.66,36,16),m=new Jt(v,o);m.position.y=.35,l.add(m);for(let E=0;E<2;E++){const M=E===0?.19:.42,x=E===0?s*.98:s*1.14;for(let U=0;U<8;U++){const L=U/8*Math.PI*2+E*(Math.PI/8),R=new Qs(.13,.34,12,8);Ji(R,5,.14,2);const Y=new Jt(R,o);Y.position.set(Math.cos(L)*x,M,Math.sin(L)*x),Y.rotation.order="YXZ",Y.rotation.y=-L+Math.PI/2,Y.rotation.x=.38,l.add(Y)}}for(let E=0;E<4;E++){const b=E/4*Math.PI*2+Math.PI/4,M=new Jt(new Js(.13,.042,14,28),o);M.position.set(Math.cos(b)*(s*1.34),.62,Math.sin(b)*(s*1.34)),M.rotation.y=-b+Math.PI/4,l.add(M)}const y=new Jt(new $s(s*2.95,.12,s*2.95),o);y.position.y=.72,l.add(y);const S=new Jt(new tn(s*1.15,s*1.25,.14,32),o);return S.position.y=.82,l.add(S),l}function Zp(o,e=34,i=!1){const s=new On,l=new Pi(.2,32,32);l.scale(.86,1.12,.95);const u=new Jt(l,o);s.add(u);const h=new Jt(new $s(.21,.04,.14),o);h.position.set(0,.055,.13),s.add(h);const d=new Qs(.036,.13,12),p=new Jt(d,o);p.position.set(0,0,.195),p.rotation.x=.25,s.add(p);const g=new tn(.13,.09,.15,20),v=new Jt(g,o);v.position.set(0,-.09,.035),s.add(v);const m=new Jt(new Pi(.042,16,12),o);m.scale.set(1.3,.55,.8),m.position.set(0,-.075,.165),s.add(m);const y=new Jt(new Pi(.048,16,16),o);y.position.set(0,-.135,.155),s.add(y);for(const S of[-1,1]){const E=new Jt(new Pi(.032,16,16),o);E.scale.set(1.2,.75,.7),E.position.set(S*.058,.028,.158),s.add(E)}for(let S=0;S<e;S++){const E=Math.acos(1-2*(S+.5)/e)*.72,b=Math.PI*(1+Math.sqrt(5))*S,M=Math.sin(E)*Math.cos(b)*.19,x=Math.cos(E)*.22+.02,U=Math.sin(E)*Math.sin(b)*.2-.03;if(U>.11&&x<.09)continue;const L=new Wp(.038,.015,20,6,2,3),R=new Jt(L,o);R.position.set(M,x,U),R.rotation.set(S*.7,S*1.1,S*.4),s.add(R)}if(i)for(let S=0;S<14;S++){const E=(S/13-.5)*1.6,b=new Jt(new Qs(.038,.14,10),o);b.position.set(Math.sin(E)*.11,-.16-(1-Math.abs(E))*.04,Math.cos(E)*.13+.03),b.rotation.x=Math.PI+.2,s.add(b)}return s}function $w(o){const e=new On,i=new tn(.34,.48,1.25,48,36);Ji(i,11,.12,2.2);const s=new Jt(i,o);s.position.y=.62,e.add(s);const l=new tn(.38,.31,.92,44,28);Ji(l,9,.09,1.8);const u=new Jt(l,o);u.position.y=1.56,u.rotation.z=-.05,e.add(u);const h=new Js(.39,.12,24,48);Ji(h,8,.11,1.5);const d=new Jt(h,o);d.position.set(-.02,1.58,.02),d.rotation.set(.65,.2,-.55),e.add(d);const p=new tn(.55,.25,1.35,36,24,!0,-.9,1.8);Ji(p,7,.15,2.4);const g=new Jt(p,o);g.position.set(.06,1.52,-.16),g.rotation.set(-.22,.25,-.18),e.add(g);const v=new Jt(new tn(.1,.12,.22,20),o);v.position.set(0,2.08,.02),e.add(v);const m=Zp(o,36,!1);m.position.set(-.02,2.26,.04),m.rotation.set(-.28,-.45,-.08),e.add(m);const y=new Jt(new tn(.095,.115,.56,20),o);y.position.set(-.48,2.08,.12),y.rotation.set(.25,.15,.92),e.add(y);const S=new Jt(new tn(.072,.092,.54,20),o);S.position.set(-.88,2.42,.22),S.rotation.set(.18,.1,.72),e.add(S);const E=new Jt(new Pi(.085,16,16),o);E.scale.set(1.3,.7,.9),E.position.set(-1.12,2.64,.28),e.add(E);const b=new On,M=new Jt(new Qs(.16,.34,24),o),x=new Jt(new Pi(.15,24,16),o);x.position.y=-.14,b.add(M,x),b.position.set(-.98,2.02,.22),b.rotation.z=.18,e.add(b);const U=new Jt(new tn(.095,.115,.55,20),o);U.position.set(.46,1.82,-.02),U.rotation.set(-.1,-.2,-1.08),e.add(U);const L=new Jt(new tn(.072,.09,.52,20),o);return L.position.set(.86,1.62,.05),L.rotation.set(.1,0,-1.24),e.add(L),e}function tC(o){const e=new On,i=new tn(.68,.85,1.65,64,48);Ji(i,14,.095,2.1);const s=new Jt(i,o);s.position.set(.1,-.95,0),e.add(s);const l=new Js(.58,.22,32,64);Ji(l,12,.11,1.8);const u=new Jt(l,o);u.position.set(.14,-.58,.12),u.rotation.set(.75,-.25,-.45),e.add(u);const h=new tn(.24,.28,.52,32),d=new Jt(h,o);d.position.set(.12,.05,.02),d.rotation.z=.06,e.add(d);const p=Zp(o,58,!1);p.scale.setScalar(2.25),p.position.set(.12,.55,.06),p.rotation.set(.08,-.58,-.04),e.add(p);const g=new tn(.15,.19,.85,28);Ji(g,8,.06,1.4);const v=new Jt(g,o);v.position.set(-.62,-.62,.42),v.rotation.set(-.45,.25,-.35),e.add(v);const m=new Jt(new Pi(.14,24,24),o);m.scale.set(.95,1.25,.78),m.position.set(-.74,-.18,.58),e.add(m);for(let I=0;I<4;I++){const P=new Jt(new Du(.032,.14,8,12),o);P.position.set(-.82+I*.045,-.08+I%2*.02,.66),P.rotation.set(.35,0,-.25+I*.12),e.add(P)}const y=[];for(let I=0;I<=24;I++){const P=I/24,F=P*.44,N=Math.sin(P*Math.PI)*(P<.55?.19:.12),w=Math.sin(P*Math.PI*2)*-.032,z=Math.max(.006,N+w);y.push(new kt(z,F))}const S=new Ou(y,36),E=new Jt(S,o);E.position.set(-.73,-.02,.58),E.rotation.z=-.08,e.add(E);const b=new Jt(new tn(.008,.014,.11,12),o);b.position.set(-.71,.45,.58),b.rotation.z=-.22,e.add(b);const M=new Jt(new tn(.14,.18,.88,28),o);M.position.set(.18,-.68,.55),M.rotation.set(-.55,-.35,.58),e.add(M);const x=new Jt(new Pi(.14,24,24),o);x.scale.set(1.15,.92,.85),x.position.set(-.14,-.34,.72),e.add(x);for(let I=0;I<4;I++){const P=new Jt(new Du(.03,.12,8,12),o);P.position.set(-.21,-.26-I*.042,.78),P.rotation.set(.2,.3,1.3),e.add(P)}const U=new On,L=new Jt(new tn(.028,.024,.28,16),o),R=new Qs(.065,.56,4);R.scale(.22,1,1);const Y=new Jt(R,o);return Y.position.y=.4,U.add(L,Y),U.position.set(-.18,-.28,.72),U.rotation.set(-.12,.15,.78),e.add(U),e}function eC(o,e){const i=new On;return[{x:-1.35,y:-2.42,z:-.7,scale:.52,rotY:.25,bearded:!0,armPose:0},{x:-.62,y:-2.28,z:-.5,scale:.58,rotY:.15,bearded:!1,armPose:1},{x:.12,y:-2.14,z:-.35,scale:.65,rotY:-.1,bearded:!0,armPose:2},{x:.88,y:-1.96,z:-.2,scale:.74,rotY:-.18,bearded:!0,armPose:0},{x:1.72,y:-1.74,z:-.05,scale:.88,rotY:-.28,bearded:!1,armPose:1}].forEach((l,u)=>{const h=new On,d=new tn(.35,.46,1.55,36,28);Ji(d,10+u%3,.11,1.9);const p=new Jt(d,o);p.position.y=.75,h.add(p);const g=new Js(.36,.13,20,36);Ji(g,7,.09,1.5);const v=new Jt(g,o);v.position.set(0,1.15,.04),v.rotation.set(.65,.1,u%2===0?-.48:.48),h.add(v);const m=Zp(o,22,l.bearded);m.position.set(0,1.72,.03),m.rotation.set(-.18,l.rotY*.8,0),h.add(m);const y=new Jt(new tn(.08,.1,.58,16),o);l.armPose===0?(y.position.set(-.36,1.38,.16),y.rotation.set(.45,.2,.55)):l.armPose===1?(y.position.set(.36,1.32,.18),y.rotation.set(.55,-.2,-.45)):(y.position.set(-.28,1.24,.24),y.rotation.set(.85,.3,-.2)),h.add(y);const S=ry(o,e,2.4,.32);S.position.y=-.82,h.add(S),h.position.set(l.x,l.y,l.z),h.scale.setScalar(l.scale),h.rotation.y=l.rotY,i.add(h)}),i}const nC=({scrollProgress:o,cameraPreset:e,harmonicFreq:i,ringIntensity:s,marbleFinish:l,onUpdateHotspots:u})=>{const h=Qe.useRef(null),d=Qe.useRef({scrollProgress:o,cameraPreset:e,harmonicFreq:i,ringIntensity:s,marbleFinish:l});return Qe.useEffect(()=>{d.current={scrollProgress:o,cameraPreset:e,harmonicFreq:i,ringIntensity:s,marbleFinish:l}},[o,e,i,s,l]),Qe.useEffect(()=>{const p=h.current;if(!p)return;const g=new Aw({antialias:!0,powerPreference:"high-performance"});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(p.clientWidth,p.clientHeight),g.toneMapping=Ex,g.toneMappingExposure=1.12,p.appendChild(g.domElement);const v=new ty,m=new fi(38,p.clientWidth/p.clientHeight,.1,120);m.position.set(0,.35,7.6);const y=Jw(g);v.environment=y;const S={uTime:{value:0},uBeaconScreen:{value:new kt(.68,.82)}},E=new ea({uniforms:S,vertexShader:Zw,fragmentShader:Kw,depthWrite:!1}),b=new Jt(new Dl(46,28),E);b.position.set(0,.5,-10.5),v.add(b);const M=Qw(),x=new Xw({color:new we("#DCE7F7"),metalness:.72,roughness:.18,clearcoat:.85,clearcoatRoughness:.12,reflectivity:1,envMapIntensity:1.75}),U=x.clone();U.bumpMap=M,U.bumpScale=.035;const L=new Ww("#8CB8F2",1.15);v.add(L);const R=new qw("#FFFFFF",6.5,18,1.4);R.position.set(1.52,2.38,1.2),v.add(R);const Y=new gx("#5EA2F8",3.2);Y.position.set(-5,3.5,2.5),v.add(Y);const I=new gx("#FFFFFF",3.8);I.position.set(3.5,5.2,4.8),v.add(I);const P=new On;v.add(P);const F=ry(x,U,4.6,.52);F.position.set(2.58,-.78,.25),P.add(F);const N=$w(x);N.position.set(2.58,.08,.25),N.scale.setScalar(.92),P.add(N);const w=eC(x,U);P.add(w);const z=new On;z.position.set(1.55,2.52,-.35),v.add(z);const it=[.62,1.42,2.38,3.52,4.88],nt=[];it.forEach((ie,X)=>{const Be=new Ml(ie-.022-X*.003,ie+.022+X*.003,128),ne=new no({color:"#FFFFFF",side:Ti,transparent:!0,opacity:.92-X*.08,blending:eo,depthWrite:!1}),jt=new Jt(Be,ne);nt.push(jt),z.add(jt);const Ct=new Ml(ie-.09,ie+.09,96),fe=new no({color:"#D8ECFF",side:Ti,transparent:!0,opacity:.24-X*.03,blending:eo,depthWrite:!1});z.add(new Jt(Ct,fe))});const dt=new Yp(.32,48),ut=new no({color:"#FFFFFF",transparent:!0,opacity:.96,blending:eo,depthWrite:!1}),k=new Jt(dt,ut);z.add(k);const st=new On,J=tC(x);J.position.set(1.12,-6.25,2.55),st.add(J),v.add(st);const yt=new On;yt.position.set(1.25,-5.55,1.35),v.add(yt);const St=[.68,1.35,2.15,3.08,4.15],Ht=[];St.forEach((ie,X)=>{const Be=new Ml(ie-.018,ie+.018,128),ne=new no({color:"#FFFFFF",side:Ti,transparent:!0,opacity:.78-X*.09,blending:eo,depthWrite:!1}),jt=new Jt(Be,ne);Ht.push(jt),yt.add(jt)});const re=[{id:"beacon-apex",label:"Harmonic Light Apex",subtitle:"5-Ring Concentric Luminance Vector",worldPos:new G(1.55,2.52,.25)},{id:"corinthian-capital",label:"Corinthian Entablature",subtitle:"24-Flute Carrara Silver Column",worldPos:new G(2.58,-.05,.65)},{id:"scholar-frieze",label:"Stoa Colonnade Frieze",subtitle:"Classical Draped Scholar Progression",worldPos:new G(.88,-1.15,.25)},{id:"sculpted-pear",label:"Precision Mastery Motif",subtitle:"Silver-Marble Pear & Sculptor Blade",worldPos:new G(.38,-6.18,3.15)}],ee={x:0,y:0,targetX:0,targetY:0},D=ie=>{const X=p.getBoundingClientRect();ee.targetX=(ie.clientX-X.left)/X.width*2-1,ee.targetY=-((ie.clientY-X.top)/X.height)*2+1};window.addEventListener("mousemove",D);const W=()=>{p&&(m.aspect=p.clientWidth/p.clientHeight,m.updateProjectionMatrix(),g.setSize(p.clientWidth,p.clientHeight))};window.addEventListener("resize",W);const vt=new jw;let lt=0,bt=0;const wt=new G(0,.35,7.6),Dt=new G(.25,.25,0),Tt=new G(.25,.25,0),At=()=>{lt=requestAnimationFrame(At);const ie=vt.getElapsedTime(),{scrollProgress:X,cameraPreset:Be,harmonicFreq:ne,ringIntensity:jt,marbleFinish:Ct}=d.current;S.uTime.value=ie,Ct==="silver-carrara"?(x.color.set("#DCE7F7"),x.metalness=.74,x.roughness=.17):Ct==="parian-white"?(x.color.set("#F5F8FD"),x.metalness=.28,x.roughness=.24):(x.color.set("#B8D0F2"),x.metalness=.92,x.roughness=.09),U.color.copy(x.color),U.metalness=x.metalness,U.roughness=x.roughness,ee.x+=(ee.targetX-ee.x)*.06,ee.y+=(ee.targetY-ee.y)*.06;const fe=Math.min(1,Math.max(0,X*1.45));if(Be==="sculptor"||X>.36){const Bt=Be==="sculptor"?1:Math.min(1,(X-.32)/.38);wt.set(Hr.lerp(0,.15,Bt)+ee.x*.22,Hr.lerp(.35,-5.85,Bt)+ee.y*.16,Hr.lerp(7.6,5.15,Bt)),Dt.set(Hr.lerp(.25,.32,Bt),Hr.lerp(.25,-5.92,Bt),Hr.lerp(0,2.45,Bt))}else Be==="zenith"?(wt.set(1.25+ee.x*.3,1.85+ee.y*.25,5.2),Dt.set(1.85,2.25,.1)):Be==="frieze"?(wt.set(.35+ee.x*.3,-1.05+ee.y*.2,5.4),Dt.set(.55,-1.15,-.2)):(wt.set(ee.x*.28,.35-fe*2.2+ee.y*.18,7.6-fe*.8),Dt.set(.25,.25-fe*2.2,0));if(m.position.lerp(wt,.07),Tt.lerp(Dt,.07),m.lookAt(Tt),b.position.x=m.position.x*.85,b.position.y=m.position.y*.92,nt.forEach((Bt,O)=>{const A=Math.sin(ie*ne*2.2-O*.65),tt=1+A*.025;Bt.scale.setScalar(tt);const mt=Bt.material;mt.opacity=Math.min(1,(.86-O*.08+A*.12)*jt)}),Ht.forEach((Bt,O)=>{const A=Math.sin(ie*ne*2-O*.55);Bt.scale.setScalar(1+A*.022);const tt=Bt.material;tt.opacity=Math.min(1,(.74-O*.08+A*.1)*jt)}),k.scale.setScalar(1+Math.sin(ie*ne*3.4)*.14),N.rotation.y=Math.sin(ie*.45)*.04,J.rotation.y=Math.sin(ie*.38)*.035+ee.x*.06,g.render(v,m),ie-bt>.07){bt=ie;const Bt=p.clientWidth,O=p.clientHeight,A=re.map(tt=>{const mt=tt.worldPos.clone().project(m),xt=(mt.x*.5+.5)*Bt,pt=(-(mt.y*.5)+.5)*O,Yt=mt.z<1&&xt>40&&xt<Bt-40&&pt>60&&pt<O-60;return{id:tt.id,label:tt.label,subtitle:tt.subtitle,x:xt,y:pt,visible:Yt}});u(A)}};return At(),()=>{cancelAnimationFrame(lt),window.removeEventListener("mousemove",D),window.removeEventListener("resize",W),g.dispose(),y.dispose(),M.dispose(),p.contains(g.domElement)&&p.removeChild(g.domElement)}},[u]),gt.jsx("div",{ref:h,className:"fixed inset-0 w-full h-full pointer-events-none z-0","aria-label":"Real-time 3D Classical Colonnade and Concentric Sky Rings Canvas"})},_x={"beacon-apex":{id:"beacon-apex",title:"Harmonic Light Apex",era:"Neo-Hellenistic Synthesis IV",material:"Photonic Concentric Luminance + Parian Silver",elevation:"+42.8m Above Stylobate",description:"Five concentric sky rings radiate from the raised hand of the Acropolis figure, calibrating atmospheric perspective across the cerulean horizon.",metrics:[{label:"Ring Count",value:"5 Concentric Halos"},{label:"Luminous Flux",value:"14,800 cd/m²"},{label:"Harmonic Lock",value:"Phase-Coherent"}]},"corinthian-capital":{id:"corinthian-capital",title:"Corinthian Entablature & Shaft",era:"Vitruvian Proportion 1:10",material:"Weathered Liquid-Silver Carrara Marble",elevation:"+28.4m Capital Bell",description:"Twenty-four concave flutes ascend with classical entasis to a double-tiered acanthus capital crowned by four corner helical volutes and a molded abacus slab.",metrics:[{label:"Flute Geometry",value:"24 Concave Channels"},{label:"Capital Order",value:"Corinthian Double-Tier"},{label:"Surface Albedo",value:"0.84 Specular Silver"}]},"scholar-frieze":{id:"scholar-frieze",title:"Stoa Colonnade Frieze",era:"Athenian Agora Progression",material:"Cast Silver-Patina Pentelic Marble",elevation:"+12.0m Lower Peristyle",description:"Five draped philosopher sculptures ascend diagonally toward the primary beacon column, each carved with harmonic chiton and himation folds.",metrics:[{label:"Ensemble Figures",value:"5 Draped Scholars"},{label:"Drapery Relief",value:"Harmonic Vertex Wave"},{label:"Colonnade Pitch",value:"14.2° Ascent"}]},"sculpted-pear":{id:"sculpted-pear",title:"Precision Mastery Motif",era:"Close-Up Atelier Study",material:"High-Chrome Carrara Alloy",elevation:"Eye-Level Sculptor Plane",description:"In the second movement, the sculptor-philosopher holds a lathe-turned silver pear opposite a tapered paring blade, embodying deliberate craft and discipline.",metrics:[{label:"Curly Lock Count",value:"58 Sculpted Volutes"},{label:"Focal Distance",value:"1.85m Macro Portrait"},{label:"Finish Grade",value:"Mirror-Honed Patina"}]}};function iC(){const[o,e]=Qe.useState(0),[i,s]=Qe.useState("monument"),[l,u]=Qe.useState(1.25),[h,d]=Qe.useState(1),[p,g]=Qe.useState("silver-carrara"),[v,m]=Qe.useState([]),[y,S]=Qe.useState(null),[E,b]=Qe.useState(!0),[M,x]=Qe.useState(!1),[U,L]=Qe.useState(!1),[R,Y]=Qe.useState(""),[I,P]=Qe.useState("Principal Brand Architect");Qe.useEffect(()=>{const z=()=>{const it=document.documentElement.scrollHeight-window.innerHeight;if(it<=0)return;const nt=Math.min(1,Math.max(0,window.scrollY/it));e(nt),nt<.34&&i==="sculptor"?s("monument"):nt>=.34&&nt<.72&&i==="monument"&&s("sculptor")};return window.addEventListener("scroll",z,{passive:!0}),()=>window.removeEventListener("scroll",z)},[i]);const F=Qe.useCallback(z=>{m(z)},[]),N=(z,it)=>{s(it);const nt=z*window.innerHeight;window.scrollTo({top:nt,behavior:"smooth"})},w=y?_x[y]:null;return gt.jsxs("div",{className:"relative min-h-[300vh] w-full text-white font-ui select-none",children:[gt.jsx(nC,{scrollProgress:o,cameraPreset:i,harmonicFreq:l,ringIntensity:h,marbleFinish:p,selectedHotspot:y,onSelectHotspot:S,onUpdateHotspots:F}),E&&gt.jsx("div",{className:"fixed inset-0 pointer-events-none z-20 overflow-hidden",children:v.filter(z=>z.visible).map(z=>{const it=y===z.id;return gt.jsxs("button",{type:"button",onClick:()=>S(it?null:z.id),style:{transform:`translate3d(${z.x}px, ${z.y}px, 0)`},className:"pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 group flex items-center gap-2.5 focus:outline-none",children:[gt.jsxs("span",{className:`relative flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${it?"bg-[#14181F] border-white scale-110 shadow-[0_0_24px_rgba(255,255,255,0.9)]":"bg-[#14181F]/70 border-white/75 hover:bg-[#14181F] hover:scale-110"}`,children:[gt.jsx("span",{className:"w-2 h-2 rounded-full bg-white animate-ping absolute"}),gt.jsx("span",{className:"w-2 h-2 rounded-full bg-white relative"})]}),gt.jsx("span",{className:"hidden sm:flex flex-col items-start px-3 py-1 rounded-full bg-[#14181F]/80 backdrop-blur-md border border-white/20 text-left opacity-90 group-hover:opacity-100 transition",children:gt.jsx("span",{className:"text-[11px] font-medium tracking-wide text-white leading-tight",children:z.label})})]},z.id)})}),gt.jsxs("header",{className:"fixed top-0 left-0 right-0 z-30 px-6 sm:px-12 py-5 flex items-center justify-between",children:[gt.jsxs("button",{type:"button",onClick:()=>N(0,"monument"),className:"font-editorial text-2xl sm:text-3xl tracking-tight text-white drop-shadow-sm flex items-center gap-2.5 cursor-pointer",children:[gt.jsx("span",{children:"KEEL"}),gt.jsx("span",{className:"text-[10px] font-ui uppercase tracking-[0.28em] px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md",children:"MMXXVI"})]}),gt.jsx("nav",{className:"hidden md:flex items-center gap-1 p-1 rounded-full bg-[#14181F]/45 backdrop-blur-xl border border-white/20",children:[{label:"Emergence",section:0,preset:"monument"},{label:"Mastery",section:1,preset:"sculptor"},{label:"Colonnade",section:2,preset:"frieze"},{label:"Zenith",section:0,preset:"zenith"}].map(z=>{const it=i===z.preset;return gt.jsx("button",{type:"button",onClick:()=>N(z.section,z.preset),className:`px-4 py-1.5 rounded-full text-xs tracking-wider transition-all cursor-pointer ${it?"bg-white text-[#14181F] font-medium shadow-sm":"text-white/85 hover:text-white hover:bg-white/10"}`,children:z.label},z.label)})}),gt.jsxs("div",{className:"flex items-center gap-3",children:[gt.jsxs("button",{type:"button",onClick:()=>b(z=>!z),className:"hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md text-xs tracking-wide transition cursor-pointer",title:"Toggle 3D Architectural Telemetry Pins",children:[gt.jsx(r1,{className:"w-3.5 h-3.5"}),gt.jsx("span",{children:E?"Nodes On":"Nodes Off"})]}),gt.jsxs("button",{type:"button",onClick:()=>{L(!1),x(!0)},className:"bg-[#14181F] hover:bg-[#1E2430] text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium shadow-lg border border-white/15 flex items-center gap-2 transition cursor-pointer",children:[gt.jsx("span",{children:"Begin Ascent"}),gt.jsx(i1,{className:"w-3.5 h-3.5"})]})]})]}),gt.jsx("section",{className:"relative h-screen w-full flex items-center px-8 sm:px-16 lg:px-24 z-10 pointer-events-none",children:gt.jsxs("div",{className:"max-w-xl pointer-events-auto mt-8",children:[gt.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] uppercase tracking-[0.22em] text-white/95 mb-5",children:[gt.jsx(u1,{className:"w-3 h-3"}),gt.jsx("span",{children:"Chapter I · Celestial Colonnade"})]}),gt.jsx("h1",{className:"font-editorial text-5xl sm:text-6xl lg:text-[68px] font-normal tracking-tight text-white leading-[1.06] drop-shadow-[0_4px_24px_rgba(20,42,78,0.35)]",children:"Keel helps you emerge"}),gt.jsx("p",{className:"mt-5 text-sm sm:text-base text-white/90 max-w-md leading-relaxed font-normal drop-shadow-sm",children:"Monumental systems sculpted in liquid-silver Carrara marble and calibrated by five concentric rings of atmospheric light."}),gt.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-4",children:[gt.jsx("button",{type:"button",onClick:()=>N(1,"sculptor"),className:"bg-[#14181F] hover:bg-[#0B0E13] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium shadow-[0_12px_32px_rgba(12,18,28,0.45)] transition transform hover:-translate-y-0.5 cursor-pointer",children:"Explore Mastery"}),gt.jsx("button",{type:"button",onClick:()=>S("beacon-apex"),className:"px-5 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-xs uppercase tracking-[0.16em] text-white transition cursor-pointer",children:"Inspect Beacon"})]}),gt.jsxs("div",{className:"mt-12 grid grid-cols-3 gap-6 pt-6 border-t border-white/25 max-w-md",children:[gt.jsxs("div",{children:[gt.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-white/70",children:"Order"}),gt.jsx("div",{className:"font-editorial text-lg text-white mt-0.5",children:"Corinthian IV"})]}),gt.jsxs("div",{children:[gt.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-white/70",children:"Luminance"}),gt.jsx("div",{className:"font-editorial text-lg text-white mt-0.5",children:"5 Sky Halos"})]}),gt.jsxs("div",{children:[gt.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-white/70",children:"Patina"}),gt.jsx("div",{className:"font-editorial text-lg text-white mt-0.5",children:"Silver Marble"})]})]})]})}),gt.jsx("section",{className:"relative h-screen w-full flex items-center px-8 sm:px-16 lg:px-24 z-10 pointer-events-none",children:gt.jsxs("div",{className:"max-w-xl pointer-events-auto",children:[gt.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14181F]/55 backdrop-blur-md border border-white/25 text-[11px] uppercase tracking-[0.22em] text-white/95 mb-5",children:[gt.jsx(s1,{className:"w-3.5 h-3.5"}),gt.jsx("span",{children:"Chapter II · Sculptor Close-Up"})]}),gt.jsxs("h2",{className:"font-editorial text-5xl sm:text-6xl lg:text-[66px] font-normal tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(20,42,78,0.38)]",children:["We excel at",gt.jsx("br",{}),"what it takes."]}),gt.jsx("p",{className:"mt-5 text-sm sm:text-base text-white/90 max-w-md leading-relaxed drop-shadow-sm",children:"Every fold of drapery, every curly volute, and the poised balance between the sculpted silver pear and paring blade are rendered in real time."}),gt.jsxs("div",{className:"mt-8 p-5 rounded-2xl bg-[#14181F]/70 backdrop-blur-xl border border-white/20 max-w-md shadow-2xl space-y-4",children:[gt.jsxs("div",{className:"flex items-center justify-between",children:[gt.jsxs("span",{className:"text-xs uppercase tracking-[0.18em] text-white/80 flex items-center gap-2",children:[gt.jsx(c1,{className:"w-3.5 h-3.5"}),gt.jsx("span",{children:"Harmonic Ring Frequency"})]}),gt.jsxs("span",{className:"text-xs font-mono text-white bg-white/15 px-2.5 py-0.5 rounded-full",children:[l.toFixed(2)," Hz"]})]}),gt.jsx("input",{type:"range",min:.3,max:3,step:.05,value:l,onChange:z=>u(parseFloat(z.target.value)),"aria-label":"Harmonic Ring Frequency",className:"w-full accent-white cursor-pointer h-1.5 bg-white/25 rounded-lg"}),gt.jsxs("div",{className:"flex items-center justify-between pt-1",children:[gt.jsx("span",{className:"text-xs uppercase tracking-[0.18em] text-white/80",children:"Halo Luminosity"}),gt.jsxs("span",{className:"text-xs font-mono text-white/90",children:[Math.round(h*100),"%"]})]}),gt.jsx("input",{type:"range",min:.4,max:1.5,step:.05,value:h,onChange:z=>d(parseFloat(z.target.value)),"aria-label":"Halo Luminosity",className:"w-full accent-white cursor-pointer h-1.5 bg-white/25 rounded-lg"}),gt.jsx("div",{className:"pt-2 flex flex-wrap gap-2",children:[{id:"silver-carrara",label:"Silver Carrara"},{id:"parian-white",label:"Parian Marble"},{id:"celestial-chrome",label:"Celestial Chrome"}].map(z=>gt.jsx("button",{type:"button",onClick:()=>g(z.id),className:`px-3 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition cursor-pointer ${p===z.id?"bg-white text-[#14181F] font-semibold":"bg-white/10 text-white/80 hover:bg-white/20"}`,children:z.label},z.id))})]})]})}),gt.jsx("section",{className:"relative h-screen w-full flex items-end pb-16 px-8 sm:px-16 lg:px-24 z-10 pointer-events-none",children:gt.jsxs("div",{className:"w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pointer-events-auto",children:[gt.jsxs("div",{className:"max-w-lg bg-[#14181F]/65 backdrop-blur-xl border border-white/20 p-7 rounded-3xl shadow-2xl",children:[gt.jsxs("div",{className:"text-[11px] uppercase tracking-[0.22em] text-white/75 flex items-center gap-2",children:[gt.jsx(o1,{className:"w-3.5 h-3.5"}),gt.jsx("span",{children:"Chapter III · Classical Peristyle"})]}),gt.jsx("h3",{className:"font-editorial text-4xl sm:text-5xl text-white mt-2 leading-tight",children:"Built to outlast the horizon."}),gt.jsx("p",{className:"text-sm text-white/85 mt-3 leading-relaxed",children:"Switch between the full monumental colonnade, the macro sculptor study with the silver pear and blade, or the zenith halo alignment."}),gt.jsx("div",{className:"mt-6 flex flex-wrap gap-2.5",children:[{id:"monument",label:"Monument View"},{id:"sculptor",label:"Sculptor Close-Up"},{id:"zenith",label:"Celestial Zenith"},{id:"frieze",label:"Colonnade Frieze"}].map(z=>gt.jsxs("button",{type:"button",onClick:()=>s(z.id),className:`px-4 py-2 rounded-full text-xs tracking-wider uppercase transition cursor-pointer flex items-center gap-1.5 ${i===z.id?"bg-white text-[#14181F] font-semibold shadow-md":"bg-white/15 text-white hover:bg-white/25 border border-white/20"}`,children:[gt.jsx(l1,{className:"w-3 h-3"}),gt.jsx("span",{children:z.label})]},z.id))})]}),gt.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto",children:Object.values(_x).map(z=>gt.jsxs("button",{type:"button",onClick:()=>S(z.id),className:`p-4 rounded-2xl text-left transition backdrop-blur-xl border cursor-pointer ${y===z.id?"bg-white text-[#14181F] border-white shadow-xl":"bg-[#14181F]/60 text-white border-white/20 hover:bg-[#14181F]/80"}`,children:[gt.jsx("div",{className:"text-[10px] uppercase tracking-[0.18em] opacity-70",children:z.era.split(" ")[0]}),gt.jsx("div",{className:"font-editorial text-lg leading-snug mt-1",children:z.title})]},z.id))})]})}),w&&gt.jsxs("aside",{className:"fixed bottom-6 right-6 z-40 w-[92vw] max-w-sm rounded-3xl bg-[#14181F]/90 backdrop-blur-2xl border border-white/25 p-6 shadow-2xl text-white",children:[gt.jsxs("div",{className:"flex items-start justify-between gap-4",children:[gt.jsxs("div",{children:[gt.jsx("span",{className:"text-[10px] uppercase tracking-[0.22em] text-sky-300",children:w.era}),gt.jsx("h4",{className:"font-editorial text-2xl text-white mt-0.5",children:w.title})]}),gt.jsx("button",{type:"button",onClick:()=>S(null),className:"p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition cursor-pointer","aria-label":"Close Sculpture Telemetry",children:gt.jsx(d_,{className:"w-4 h-4"})})]}),gt.jsx("p",{className:"text-xs text-white/85 leading-relaxed mt-3",children:w.description}),gt.jsx("div",{className:"mt-4 pt-4 border-t border-white/15 grid grid-cols-3 gap-2",children:w.metrics.map(z=>gt.jsxs("div",{className:"bg-white/5 rounded-xl p-2.5 border border-white/10",children:[gt.jsx("div",{className:"text-[10px] uppercase tracking-wider text-white/60",children:z.label}),gt.jsx("div",{className:"text-xs font-medium text-white mt-1",children:z.value})]},z.label))})]}),M&&gt.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-[#0B1526]/70 backdrop-blur-md p-4",children:gt.jsxs("div",{className:"relative w-full max-w-md rounded-3xl bg-[#14181F] border border-white/20 p-7 text-white shadow-2xl",children:[gt.jsx("button",{type:"button",onClick:()=>x(!1),className:"absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer","aria-label":"Close Modal",children:gt.jsx(d_,{className:"w-4 h-4"})}),gt.jsx("div",{className:"text-[10px] uppercase tracking-[0.24em] text-sky-300",children:"KEEL Architectural Commission"}),gt.jsx("h3",{className:"font-editorial text-3xl mt-1",children:"Initiate Your Emergence"}),U?gt.jsxs("div",{className:"mt-6 p-5 rounded-2xl bg-white/10 border border-white/20 space-y-3",children:[gt.jsxs("div",{className:"flex items-center gap-2.5 text-sky-300 font-medium text-sm",children:[gt.jsx(a1,{className:"w-5 h-5"}),gt.jsx("span",{children:"Commission Dossier Registered"})]}),gt.jsxs("p",{className:"text-xs text-white/85 leading-relaxed",children:["Your architectural brief for"," ",gt.jsx("span",{className:"font-semibold text-white",children:R||"overeign Monument"})," ","(",I,") has been locked to the 5-ring harmonic beacon at"," ",l.toFixed(2)," Hz."]}),gt.jsx("button",{type:"button",onClick:()=>x(!1),className:"w-full py-3 rounded-full bg-white text-[#14181F] text-xs font-semibold uppercase tracking-widest mt-2 cursor-pointer",children:"Return to Colonnade"})]}):gt.jsxs("form",{onSubmit:z=>{z.preventDefault(),L(!0)},className:"mt-5 space-y-4",children:[gt.jsxs("div",{children:[gt.jsx("label",{className:"block text-xs uppercase tracking-wider text-white/75 mb-1.5",children:"Monument or Initiative Title"}),gt.jsx("input",{type:"text",required:!0,value:R,onChange:z=>Y(z.target.value),placeholder:"Enter initiative designation",className:"w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-white"})]}),gt.jsxs("div",{children:[gt.jsx("label",{className:"block text-xs uppercase tracking-wider text-white/75 mb-1.5",children:"Architectural Discipline"}),gt.jsxs("select",{value:I,onChange:z=>P(z.target.value),className:"w-full px-4 py-3 rounded-xl bg-[#1E2530] border border-white/20 text-sm text-white focus:outline-none focus:border-white",children:[gt.jsx("option",{value:"Principal Brand Architect",children:"Principal Brand Architect"}),gt.jsx("option",{value:"Spatial WebGL Director",children:"Spatial WebGL Director"}),gt.jsx("option",{value:"Classical Sculpture Curator",children:"Classical Sculpture Curator"})]})]}),gt.jsx("button",{type:"submit",className:"w-full py-3.5 rounded-full bg-white hover:bg-sky-50 text-[#14181F] text-xs font-semibold uppercase tracking-[0.2em] transition cursor-pointer mt-2",children:"Confirm Ascent Coordinates"})]})]})})]})}$M.createRoot(document.getElementById("root")).render(gt.jsx(qM.StrictMode,{children:gt.jsx(iC,{})}));
