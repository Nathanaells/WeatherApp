(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Ib(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Hd={exports:{}},Zo={};var Ng;function Hb(){if(Ng)return Zo;Ng=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Zo.Fragment=e,Zo.jsx=n,Zo.jsxs=n,Zo}var Lg;function Vb(){return Lg||(Lg=1,Hd.exports=Hb()),Hd.exports}var te=Vb(),Vd={exports:{}},lt={};var Og;function Gb(){if(Og)return lt;Og=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function b(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function _(F,ae,Ae){this.props=F,this.context=ae,this.refs=y,this.updater=Ae||M}_.prototype.isReactComponent={},_.prototype.setState=function(F,ae){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ae,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function U(){}U.prototype=_.prototype;function D(F,ae,Ae){this.props=F,this.context=ae,this.refs=y,this.updater=Ae||M}var P=D.prototype=new U;P.constructor=D,E(P,_.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(F,ae,Ae){var Ne=Ae.ref;return{$$typeof:a,type:F,key:ae,ref:Ne!==void 0?Ne:null,props:Ae}}function C(F,ae){return w(F.type,ae,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===a}function X(F){var ae={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ae){return ae[Ae]})}var ne=/\/+/g;function pe(F,ae){return typeof F=="object"&&F!==null&&F.key!=null?X(""+F.key):ae.toString(36)}function fe(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(N,N):(F.status="pending",F.then(function(ae){F.status==="pending"&&(F.status="fulfilled",F.value=ae)},function(ae){F.status==="pending"&&(F.status="rejected",F.reason=ae)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function B(F,ae,Ae,Ne,Be){var re=typeof F;(re==="undefined"||re==="boolean")&&(F=null);var me=!1;if(F===null)me=!0;else switch(re){case"bigint":case"string":case"number":me=!0;break;case"object":switch(F.$$typeof){case a:case e:me=!0;break;case x:return me=F._init,B(me(F._payload),ae,Ae,Ne,Be)}}if(me)return Be=Be(F),me=Ne===""?"."+pe(F,0):Ne,I(Be)?(Ae="",me!=null&&(Ae=me.replace(ne,"$&/")+"/"),B(Be,ae,Ae,"",function(Pe){return Pe})):Be!=null&&(G(Be)&&(Be=C(Be,Ae+(Be.key==null||F&&F.key===Be.key?"":(""+Be.key).replace(ne,"$&/")+"/")+me)),ae.push(Be)),1;me=0;var W=Ne===""?".":Ne+":";if(I(F))for(var De=0;De<F.length;De++)Ne=F[De],re=W+pe(Ne,De),me+=B(Ne,ae,Ae,re,Be);else if(De=b(F),typeof De=="function")for(F=De.call(F),De=0;!(Ne=F.next()).done;)Ne=Ne.value,re=W+pe(Ne,De++),me+=B(Ne,ae,Ae,re,Be);else if(re==="object"){if(typeof F.then=="function")return B(fe(F),ae,Ae,Ne,Be);throw ae=String(F),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return me}function K(F,ae,Ae){if(F==null)return F;var Ne=[],Be=0;return B(F,Ne,"","",function(re){return ae.call(Ae,re,Be++)}),Ne}function q(F){if(F._status===-1){var ae=F._result;ae=ae(),ae.then(function(Ae){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ae)},function(Ae){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ae)}),F._status===-1&&(F._status=0,F._result=ae)}if(F._status===1)return F._result.default;throw F._result}var be=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},Te={map:K,forEach:function(F,ae,Ae){K(F,function(){ae.apply(this,arguments)},Ae)},count:function(F){var ae=0;return K(F,function(){ae++}),ae},toArray:function(F){return K(F,function(ae){return ae})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return lt.Activity=g,lt.Children=Te,lt.Component=_,lt.Fragment=n,lt.Profiler=o,lt.PureComponent=D,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.__COMPILER_RUNTIME={__proto__:null,c:function(F){return z.H.useMemoCache(F)}},lt.cache=function(F){return function(){return F.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(F,ae,Ae){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Ne=E({},F.props),Be=F.key;if(ae!=null)for(re in ae.key!==void 0&&(Be=""+ae.key),ae)!Z.call(ae,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&ae.ref===void 0||(Ne[re]=ae[re]);var re=arguments.length-2;if(re===1)Ne.children=Ae;else if(1<re){for(var me=Array(re),W=0;W<re;W++)me[W]=arguments[W+2];Ne.children=me}return w(F.type,Be,Ne)},lt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},lt.createElement=function(F,ae,Ae){var Ne,Be={},re=null;if(ae!=null)for(Ne in ae.key!==void 0&&(re=""+ae.key),ae)Z.call(ae,Ne)&&Ne!=="key"&&Ne!=="__self"&&Ne!=="__source"&&(Be[Ne]=ae[Ne]);var me=arguments.length-2;if(me===1)Be.children=Ae;else if(1<me){for(var W=Array(me),De=0;De<me;De++)W[De]=arguments[De+2];Be.children=W}if(F&&F.defaultProps)for(Ne in me=F.defaultProps,me)Be[Ne]===void 0&&(Be[Ne]=me[Ne]);return w(F,re,Be)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(F){return{$$typeof:d,render:F}},lt.isValidElement=G,lt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:q}},lt.memo=function(F,ae){return{$$typeof:p,type:F,compare:ae===void 0?null:ae}},lt.startTransition=function(F){var ae=z.T,Ae={};z.T=Ae;try{var Ne=F(),Be=z.S;Be!==null&&Be(Ae,Ne),typeof Ne=="object"&&Ne!==null&&typeof Ne.then=="function"&&Ne.then(N,be)}catch(re){be(re)}finally{ae!==null&&Ae.types!==null&&(ae.types=Ae.types),z.T=ae}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(F){return z.H.use(F)},lt.useActionState=function(F,ae,Ae){return z.H.useActionState(F,ae,Ae)},lt.useCallback=function(F,ae){return z.H.useCallback(F,ae)},lt.useContext=function(F){return z.H.useContext(F)},lt.useDebugValue=function(){},lt.useDeferredValue=function(F,ae){return z.H.useDeferredValue(F,ae)},lt.useEffect=function(F,ae){return z.H.useEffect(F,ae)},lt.useEffectEvent=function(F){return z.H.useEffectEvent(F)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(F,ae,Ae){return z.H.useImperativeHandle(F,ae,Ae)},lt.useInsertionEffect=function(F,ae){return z.H.useInsertionEffect(F,ae)},lt.useLayoutEffect=function(F,ae){return z.H.useLayoutEffect(F,ae)},lt.useMemo=function(F,ae){return z.H.useMemo(F,ae)},lt.useOptimistic=function(F,ae){return z.H.useOptimistic(F,ae)},lt.useReducer=function(F,ae,Ae){return z.H.useReducer(F,ae,Ae)},lt.useRef=function(F){return z.H.useRef(F)},lt.useState=function(F){return z.H.useState(F)},lt.useSyncExternalStore=function(F,ae,Ae){return z.H.useSyncExternalStore(F,ae,Ae)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.2.0",lt}var Pg;function Rp(){return Pg||(Pg=1,Vd.exports=Gb()),Vd.exports}var he=Rp();const kb=Ib(he);var Gd={exports:{}},Ko={},kd={exports:{}},Xd={};var Fg;function Xb(){return Fg||(Fg=1,(function(a){function e(B,K){var q=B.length;B.push(K);e:for(;0<q;){var be=q-1>>>1,Te=B[be];if(0<o(Te,K))B[be]=K,B[q]=Te,q=be;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],q=B.pop();if(q!==K){B[0]=q;e:for(var be=0,Te=B.length,F=Te>>>1;be<F;){var ae=2*(be+1)-1,Ae=B[ae],Ne=ae+1,Be=B[Ne];if(0>o(Ae,q))Ne<Te&&0>o(Be,Ae)?(B[be]=Be,B[Ne]=q,be=Ne):(B[be]=Ae,B[ae]=q,be=ae);else if(Ne<Te&&0>o(Be,q))B[be]=Be,B[Ne]=q,be=Ne;else break e}}return K}function o(B,K){var q=B.sortIndex-K.sortIndex;return q!==0?q:B.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],p=[],x=1,g=null,v=3,b=!1,M=!1,E=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var K=n(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=B)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=n(p)}}function I(B){if(E=!1,P(B),!M)if(n(m)!==null)M=!0,N||(N=!0,X());else{var K=n(p);K!==null&&fe(I,K.startTime-B)}}var N=!1,z=-1,Z=5,w=-1;function C(){return y?!0:!(a.unstable_now()-w<Z)}function G(){if(y=!1,N){var B=a.unstable_now();w=B;var K=!0;try{e:{M=!1,E&&(E=!1,U(z),z=-1),b=!0;var q=v;try{t:{for(P(B),g=n(m);g!==null&&!(g.expirationTime>B&&C());){var be=g.callback;if(typeof be=="function"){g.callback=null,v=g.priorityLevel;var Te=be(g.expirationTime<=B);if(B=a.unstable_now(),typeof Te=="function"){g.callback=Te,P(B),K=!0;break t}g===n(m)&&r(m),P(B)}else r(m);g=n(m)}if(g!==null)K=!0;else{var F=n(p);F!==null&&fe(I,F.startTime-B),K=!1}}break e}finally{g=null,v=q,b=!1}K=void 0}}finally{K?X():N=!1}}}var X;if(typeof D=="function")X=function(){D(G)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,pe=ne.port2;ne.port1.onmessage=G,X=function(){pe.postMessage(null)}}else X=function(){_(G,0)};function fe(B,K){z=_(function(){B(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(B){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var q=v;v=K;try{return B()}finally{v=q}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=v;v=B;try{return K()}finally{v=q}},a.unstable_scheduleCallback=function(B,K,q){var be=a.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?be+q:be):q=be,B){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=q+Te,B={id:x++,callback:K,priorityLevel:B,startTime:q,expirationTime:Te,sortIndex:-1},q>be?(B.sortIndex=q,e(p,B),n(m)===null&&B===n(p)&&(E?(U(z),z=-1):E=!0,fe(I,q-be))):(B.sortIndex=Te,e(m,B),M||b||(M=!0,N||(N=!0,X()))),B},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(B){var K=v;return function(){var q=v;v=K;try{return B.apply(this,arguments)}finally{v=q}}}})(Xd)),Xd}var zg;function Wb(){return zg||(zg=1,kd.exports=Xb()),kd.exports}var Wd={exports:{}},On={};var Bg;function qb(){if(Bg)return On;Bg=1;var a=Rp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},On.flushSync=function(m){var p=u.T,x=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=x,r.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:b}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,x){return u.H.useFormState(m,p,x)},On.useFormStatus=function(){return u.H.useHostTransitionStatus()},On.version="19.2.0",On}var Ig;function jb(){if(Ig)return Wd.exports;Ig=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Wd.exports=qb(),Wd.exports}var Hg;function Yb(){if(Hg)return Ko;Hg=1;var a=Wb(),e=Rp(),n=jb();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=h;else{for(var S=!1,A=f.child;A;){if(A===s){S=!0,s=f,l=h;break}if(A===l){S=!0,l=f,s=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===s){S=!0,s=h,l=f;break}if(A===l){S=!0,l=h,s=f;break}A=A.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function x(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=x(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ne?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case D:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case P:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case Z:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var fe=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},be=[],Te=-1;function F(t){return{current:t}}function ae(t){0>Te||(t.current=be[Te],be[Te]=null,Te--)}function Ae(t,i){Te++,be[Te]=t.current,t.current=i}var Ne=F(null),Be=F(null),re=F(null),me=F(null);function W(t,i){switch(Ae(re,i),Ae(Be,t),Ae(Ne,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?tg(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=tg(i),t=ng(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(Ne),Ae(Ne,t)}function De(){ae(Ne),ae(Be),ae(re)}function Pe(t){t.memoizedState!==null&&Ae(me,t);var i=Ne.current,s=ng(i,t.type);i!==s&&(Ae(Be,t),Ae(Ne,s))}function ot(t){Be.current===t&&(ae(Ne),ae(Be)),me.current===t&&(ae(me),Wo._currentValue=q)}var nn,ct;function Et(t){if(nn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);nn=i&&i[1]||"",ct=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nn+t+ct}var V=!1;function ut(t,i){if(!t||V)return"";V=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ue){var oe=ue}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ue){oe=ue}t.call(Se.prototype)}}else{try{throw Error()}catch(ue){oe=ue}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ue){if(ue&&oe&&typeof ue.stack=="string")return[ue.stack,oe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var H=S.split(`
`),ee=A.split(`
`);for(f=l=0;l<H.length&&!H[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ee.length&&!ee[f].includes("DetermineComponentFrameRoot");)f++;if(l===H.length||f===ee.length)for(l=H.length-1,f=ee.length-1;1<=l&&0<=f&&H[l]!==ee[f];)f--;for(;1<=l&&0<=f;l--,f--)if(H[l]!==ee[f]){if(l!==1||f!==1)do if(l--,f--,0>f||H[l]!==ee[f]){var ge=`
`+H[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{V=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Et(s):""}function pt(t,i){switch(t.tag){case 26:case 27:case 5:return Et(t.type);case 16:return Et("Lazy");case 13:return t.child!==i&&i!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return Et("Activity");default:return""}}function Ft(t){try{var i="",s=null;do i+=pt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ve=Object.prototype.hasOwnProperty,Bt=a.unstable_scheduleCallback,Qe=a.unstable_cancelCallback,st=a.unstable_shouldYield,L=a.unstable_requestPaint,T=a.unstable_now,J=a.unstable_getCurrentPriorityLevel,ve=a.unstable_ImmediatePriority,Re=a.unstable_UserBlockingPriority,de=a.unstable_NormalPriority,je=a.unstable_LowPriority,Oe=a.unstable_IdlePriority,qe=a.log,Ye=a.unstable_setDisableYieldValue,we=null,Ue=null;function Ke(t){if(typeof qe=="function"&&Ye(t),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode(we,t)}catch{}}var ke=Math.clz32?Math.clz32:O,He=Math.log,nt=Math.LN2;function O(t){return t>>>=0,t===0?32:31-(He(t)/nt|0)|0}var xe=256,Me=262144,Ce=4194304;function Ee(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~h,l!==0?f=Ee(l):(S&=A,S!==0?f=Ee(S):s||(s=A&~t,s!==0&&(f=Ee(s))))):(A=l&~h,A!==0?f=Ee(A):S!==0?f=Ee(S):s||(s=l&~t,s!==0&&(f=Ee(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Fe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function at(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var t=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),t}function St(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function bn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hn(t,i,s,l,f,h){var S=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(s=S&~s;0<s;){var ge=31-ke(s),Se=1<<ge;A[ge]=0,H[ge]=-1;var oe=ee[ge];if(oe!==null)for(ee[ge]=null,ge=0;ge<oe.length;ge++){var ue=oe[ge];ue!==null&&(ue.lane&=-536870913)}s&=~Se}l!==0&&gr(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~i))}function gr(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ke(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Ki(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ke(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Na(t,i){var s=i&-i;return s=(s&42)!==0?1:Vn(s),(s&(t.suspendedLanes|i))!==0?0:s}function Vn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function La(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Tg(t.type))}function Oa(t,i){var s=K.p;try{return K.p=t,i()}finally{K.p=s}}var Gn=Math.random().toString(36).slice(2),fn="__reactFiber$"+Gn,gn="__reactProps$"+Gn,Qi="__reactContainer$"+Gn,Qr="__reactEvents$"+Gn,Lu="__reactListeners$"+Gn,Ou="__reactHandles$"+Gn,Al="__reactResources$"+Gn,_r="__reactMarker$"+Gn;function so(t){delete t[fn],delete t[gn],delete t[Qr],delete t[Lu],delete t[Ou]}function Pa(t){var i=t[fn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Qi]||s[fn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=cg(t);t!==null;){if(s=t[fn])return s;t=cg(t)}return i}t=s,s=t.parentNode}return null}function R(t){if(t=t[fn]||t[Qi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function j(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function le(t){var i=t[Al];return i||(i=t[Al]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ie(t){t[_r]=!0}var Q=new Set,Le={};function ze(t,i){Ge(t,i),Ge(t+"Capture",i)}function Ge(t,i){for(Le[t]=i,t=0;t<i.length;t++)Q.add(i[t])}var Xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},rt={};function Je(t){return Ve.call(rt,t)?!0:Ve.call(tt,t)?!1:Xe.test(t)?rt[t]=!0:(tt[t]=!0,!1)}function mt(t,i,s){if(Je(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ut(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Nt(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ht(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Yt(t){if(!t._valueTracker){var i=Ht(t)?"checked":"value";t._valueTracker=et(t,i,""+t[i])}}function At(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ht(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fa=/[\n"\\]/g;function Kt(t){return t.replace(Fa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ji(t,i,s,l,f,h,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Tt(i)):t.value!==""+Tt(i)&&(t.value=""+Tt(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?En(t,S,Tt(i)):s!=null?En(t,S,Tt(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Tt(A):t.removeAttribute("name")}function Qt(t,i,s,l,f,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Yt(t);return}s=s!=null?""+Tt(s):"",i=i!=null?""+Tt(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Yt(t)}function En(t,i,s){i==="number"&&Mn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function _n(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Tt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Tn(t,i,s){if(i!=null&&(i=""+Tt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Tt(s):""}function Cn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(fe(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Tt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Yt(t)}function Fi(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var $i=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||$i.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function $p(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Jp(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&Jp(t,h,i[h])}function Pu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(t){return Fy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var Fu=null;function zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,$r=null;function em(t){var i=R(t);if(i&&(t=i.stateNode)){var s=t[gn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ji(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Kt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[gn]||null;if(!f)throw Error(r(90));Ji(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&At(l)}break e;case"textarea":Tn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&_n(t,!!s.multiple,i,!1)}}}var Bu=!1;function tm(t,i,s){if(Bu)return t(i,s);Bu=!0;try{var l=t(i);return l}finally{if(Bu=!1,(Jr!==null||$r!==null)&&(pc(),Jr&&(i=Jr,t=$r,$r=Jr=null,em(i),t)))for(i=0;i<t.length;i++)em(t[i])}}function oo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[gn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(ta)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Iu=!1}var za=null,Hu=null,Cl=null;function nm(){if(Cl)return Cl;var t,i=Hu,s=i.length,l,f="value"in za?za.value:za.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var S=s-t;for(l=1;l<=S&&i[s-l]===f[h-l];l++);return Cl=f.slice(t,1<l?1-l:void 0)}function wl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function im(){return!1}function qn(t){function i(s,l,f,h,S){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Dl:im,this.isPropagationStopped=im,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),i}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=qn(vr),co=g({},vr,{view:0,detail:0}),zy=qn(co),Vu,Gu,uo,Nl=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Vu=t.screenX-uo.screenX,Gu=t.screenY-uo.screenY):Gu=Vu=0,uo=t),Vu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),am=qn(Nl),By=g({},Nl,{dataTransfer:0}),Iy=qn(By),Hy=g({},co,{relatedTarget:0}),ku=qn(Hy),Vy=g({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gy=qn(Vy),ky=g({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xy=qn(ky),Wy=g({},vr,{data:0}),rm=qn(Wy),qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Yy[t])?!!i[t]:!1}function Xu(){return Zy}var Ky=g({},co,{key:function(t){if(t.key){var i=qy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qy=qn(Ky),Jy=g({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=qn(Jy),$y=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),eS=qn($y),tS=g({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=qn(tS),iS=g({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aS=qn(iS),rS=g({},vr,{newState:0,oldState:0}),sS=qn(rS),oS=[9,13,27,32],Wu=ta&&"CompositionEvent"in window,fo=null;ta&&"documentMode"in document&&(fo=document.documentMode);var lS=ta&&"TextEvent"in window&&!fo,om=ta&&(!Wu||fo&&8<fo&&11>=fo),lm=" ",cm=!1;function um(t,i){switch(t){case"keyup":return oS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function cS(t,i){switch(t){case"compositionend":return fm(i);case"keypress":return i.which!==32?null:(cm=!0,lm);case"textInput":return t=i.data,t===lm&&cm?null:t;default:return null}}function uS(t,i){if(es)return t==="compositionend"||!Wu&&um(t,i)?(t=nm(),Cl=Hu=za=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return om&&i.locale!=="ko"?null:i.data;default:return null}}var fS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!fS[t.type]:i==="textarea"}function hm(t,i,s,l){Jr?$r?$r.push(l):$r=[l]:Jr=l,i=Sc(i,"onChange"),0<i.length&&(s=new Ul("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var ho=null,po=null;function dS(t){Zx(t,0)}function Ll(t){var i=j(t);if(At(i))return t}function pm(t,i){if(t==="change")return i}var mm=!1;if(ta){var qu;if(ta){var ju="oninput"in document;if(!ju){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),ju=typeof xm.oninput=="function"}qu=ju}else qu=!1;mm=qu&&(!document.documentMode||9<document.documentMode)}function gm(){ho&&(ho.detachEvent("onpropertychange",_m),po=ho=null)}function _m(t){if(t.propertyName==="value"&&Ll(po)){var i=[];hm(i,po,t,zu(t)),tm(dS,i)}}function hS(t,i,s){t==="focusin"?(gm(),ho=i,po=s,ho.attachEvent("onpropertychange",_m)):t==="focusout"&&gm()}function pS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(po)}function mS(t,i){if(t==="click")return Ll(i)}function xS(t,i){if(t==="input"||t==="change")return Ll(i)}function gS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:gS;function mo(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ve.call(i,f)||!ni(t[f],i[f]))return!1}return!0}function vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ym(t,i){var s=vm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=vm(s)}}function Sm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Sm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function bm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Mn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Mn(t.document)}return i}function Yu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var _S=ta&&"documentMode"in document&&11>=document.documentMode,ts=null,Zu=null,xo=null,Ku=!1;function Mm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ku||ts==null||ts!==Mn(l)||(l=ts,"selectionStart"in l&&Yu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xo&&mo(xo,l)||(xo=l,l=Sc(Zu,"onSelect"),0<l.length&&(i=new Ul("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=ts)))}function yr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ns={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionrun:yr("Transition","TransitionRun"),transitionstart:yr("Transition","TransitionStart"),transitioncancel:yr("Transition","TransitionCancel"),transitionend:yr("Transition","TransitionEnd")},Qu={},Em={};ta&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Sr(t){if(Qu[t])return Qu[t];if(!ns[t])return t;var i=ns[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Em)return Qu[t]=i[s];return t}var Tm=Sr("animationend"),Am=Sr("animationiteration"),Rm=Sr("animationstart"),vS=Sr("transitionrun"),yS=Sr("transitionstart"),SS=Sr("transitioncancel"),Cm=Sr("transitionend"),wm=new Map,Ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ju.push("scrollEnd");function Ai(t,i){wm.set(t,i),ze(i,[t])}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],is=0,$u=0;function Pl(){for(var t=is,i=$u=is=0;i<t;){var s=pi[i];pi[i++]=null;var l=pi[i];pi[i++]=null;var f=pi[i];pi[i++]=null;var h=pi[i];if(pi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}h!==0&&Dm(s,f,h)}}function Fl(t,i,s,l){pi[is++]=t,pi[is++]=i,pi[is++]=s,pi[is++]=l,$u|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ef(t,i,s,l){return Fl(t,i,s,l),zl(t)}function br(t,i){return Fl(t,null,null,i),zl(t)}function Dm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-ke(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function zl(t){if(50<Bo)throw Bo=0,ud=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var as={};function bS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,i,s,l){return new bS(t,i,s,l)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,i){var s=t.alternate;return s===null?(s=ii(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Um(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Bl(t,i,s,l,f,h){var S=0;if(l=t,typeof t=="function")tf(t)&&(S=1);else if(typeof t=="string")S=Rb(t,s,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=ii(31,s,i,f),t.elementType=w,t.lanes=h,t;case E:return Mr(s.children,f,h,i);case y:S=8,f|=24;break;case _:return t=ii(12,s,i,f|2),t.elementType=_,t.lanes=h,t;case I:return t=ii(13,s,i,f),t.elementType=I,t.lanes=h,t;case N:return t=ii(19,s,i,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:S=10;break e;case U:S=9;break e;case P:S=11;break e;case z:S=14;break e;case Z:S=16,l=null;break e}S=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=ii(S,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Mr(t,i,s,l){return t=ii(7,t,l,i),t.lanes=s,t}function nf(t,i,s){return t=ii(6,t,null,i),t.lanes=s,t}function Nm(t){var i=ii(18,null,null,0);return i.stateNode=t,i}function af(t,i,s){return i=ii(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Lm=new WeakMap;function mi(t,i){if(typeof t=="object"&&t!==null){var s=Lm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ft(i)},Lm.set(t,i),i)}return{value:t,source:i,stack:Ft(i)}}var rs=[],ss=0,Il=null,go=0,xi=[],gi=0,Ba=null,zi=1,Bi="";function ia(t,i){rs[ss++]=go,rs[ss++]=Il,Il=t,go=i}function Om(t,i,s){xi[gi++]=zi,xi[gi++]=Bi,xi[gi++]=Ba,Ba=t;var l=zi;t=Bi;var f=32-ke(l)-1;l&=~(1<<f),s+=1;var h=32-ke(i)+f;if(30<h){var S=f-f%5;h=(l&(1<<S)-1).toString(32),l>>=S,f-=S,zi=1<<32-ke(i)+f|s<<f|l,Bi=h+t}else zi=1<<h|s<<f|l,Bi=t}function rf(t){t.return!==null&&(ia(t,1),Om(t,1,0))}function sf(t){for(;t===Il;)Il=rs[--ss],rs[ss]=null,go=rs[--ss],rs[ss]=null;for(;t===Ba;)Ba=xi[--gi],xi[gi]=null,Bi=xi[--gi],xi[gi]=null,zi=xi[--gi],xi[gi]=null}function Pm(t,i){xi[gi++]=zi,xi[gi++]=Bi,xi[gi++]=Ba,zi=i.id,Bi=i.overflow,Ba=t}var wn=null,Jt=null,Rt=!1,Ia=null,_i=!1,of=Error(r(519));function Ha(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(mi(i,t)),of}function Fm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[fn]=t,i[gn]=l,s){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(s=0;s<Ho.length;s++)yt(Ho[s],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":yt("invalid",i),Qt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":yt("invalid",i);break;case"textarea":yt("invalid",i),Cn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||$x(i.textContent,s)?(l.popover!=null&&(yt("beforetoggle",i),yt("toggle",i)),l.onScroll!=null&&yt("scroll",i),l.onScrollEnd!=null&&yt("scrollend",i),l.onClick!=null&&(i.onclick=ea),i=!0):i=!1,i||Ha(t,!0)}function zm(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:wn=wn.return}}function os(t){if(t!==wn)return!1;if(!Rt)return zm(t),Rt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Td(t.type,t.memoizedProps)),s=!s),s&&Jt&&Ha(t),zm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=lg(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Jt=lg(t)}else i===27?(i=Jt,er(t.type)?(t=Dd,Dd=null,Jt=t):Jt=i):Jt=wn?yi(t.stateNode.nextSibling):null;return!0}function Er(){Jt=wn=null,Rt=!1}function lf(){var t=Ia;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ia=null),t}function _o(t){Ia===null?Ia=[t]:Ia.push(t)}var cf=F(null),Tr=null,aa=null;function Va(t,i,s){Ae(cf,i._currentValue),i._currentValue=s}function ra(t){t._currentValue=cf.current,ae(cf)}function uf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ff(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var S=f.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=f;for(var H=0;H<i.length;H++)if(A.context===i[H]){h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),uf(h.return,s,t),l||(S=null);break e}h=A.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(r(341));S.lanes|=s,h=S.alternate,h!==null&&(h.lanes|=s),uf(S,s,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function ls(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=f.type;ni(f.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(f===me.current){if(S=f.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}f=f.return}t!==null&&ff(i,t,s,l),i.flags|=262144}function Hl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ar(t){Tr=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return Bm(Tr,t)}function Vl(t,i){return Tr===null&&Ar(t),Bm(t,i)}function Bm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},aa===null){if(t===null)throw Error(r(308));aa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else aa=aa.next=i;return s}var MS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},ES=a.unstable_scheduleCallback,TS=a.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function df(){return{controller:new MS,data:new Map,refCount:0}}function vo(t){t.refCount--,t.refCount===0&&ES(TS,function(){t.controller.abort()})}var yo=null,hf=0,cs=0,us=null;function AS(t,i){if(yo===null){var s=yo=[];hf=0,cs=xd(),us={status:"pending",value:void 0,then:function(l){s.push(l)}}}return hf++,i.then(Im,Im),i}function Im(){if(--hf===0&&yo!==null){us!==null&&(us.status="fulfilled");var t=yo;yo=null,cs=0,us=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function RS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Hm=B.S;B.S=function(t,i){Mx=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&AS(t,i),Hm!==null&&Hm(t,i)};var Rr=F(null);function pf(){var t=Rr.current;return t!==null?t:Zt.pooledCache}function Gl(t,i){i===null?Ae(Rr,Rr.current):Ae(Rr,i.pool)}function Vm(){var t=pf();return t===null?null:{parent:dn._currentValue,pool:t}}var fs=Error(r(460)),mf=Error(r(474)),kl=Error(r(542)),Xl={then:function(){}};function Gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function km(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ea,ea),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Wm(t),t;default:if(typeof i.status=="string")i.then(ea,ea);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Wm(t),t}throw wr=i,fs}}function Cr(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(wr=s,fs):s}}var wr=null;function Xm(){if(wr===null)throw Error(r(459));var t=wr;return wr=null,t}function Wm(t){if(t===fs||t===kl)throw Error(r(483))}var ds=null,So=0;function Wl(t){var i=So;return So+=1,ds===null&&(ds=[]),km(ds,t,i)}function bo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ql(t,i){throw i.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function qm(t){function i(Y,k){if(t){var $=Y.deletions;$===null?(Y.deletions=[k],Y.flags|=16):$.push(k)}}function s(Y,k){if(!t)return null;for(;k!==null;)i(Y,k),k=k.sibling;return null}function l(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function f(Y,k){return Y=na(Y,k),Y.index=0,Y.sibling=null,Y}function h(Y,k,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<k?(Y.flags|=67108866,k):$):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function S(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,$,ye){return k===null||k.tag!==6?(k=nf($,Y.mode,ye),k.return=Y,k):(k=f(k,$),k.return=Y,k)}function H(Y,k,$,ye){var $e=$.type;return $e===E?ge(Y,k,$.props.children,ye,$.key):k!==null&&(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Z&&Cr($e)===k.type)?(k=f(k,$.props),bo(k,$),k.return=Y,k):(k=Bl($.type,$.key,$.props,null,Y.mode,ye),bo(k,$),k.return=Y,k)}function ee(Y,k,$,ye){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=af($,Y.mode,ye),k.return=Y,k):(k=f(k,$.children||[]),k.return=Y,k)}function ge(Y,k,$,ye,$e){return k===null||k.tag!==7?(k=Mr($,Y.mode,ye,$e),k.return=Y,k):(k=f(k,$),k.return=Y,k)}function Se(Y,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=nf(""+k,Y.mode,$),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case b:return $=Bl(k.type,k.key,k.props,null,Y.mode,$),bo($,k),$.return=Y,$;case M:return k=af(k,Y.mode,$),k.return=Y,k;case Z:return k=Cr(k),Se(Y,k,$)}if(fe(k)||X(k))return k=Mr(k,Y.mode,$,null),k.return=Y,k;if(typeof k.then=="function")return Se(Y,Wl(k),$);if(k.$$typeof===D)return Se(Y,Vl(Y,k),$);ql(Y,k)}return null}function oe(Y,k,$,ye){var $e=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $e!==null?null:A(Y,k,""+$,ye);if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return $.key===$e?H(Y,k,$,ye):null;case M:return $.key===$e?ee(Y,k,$,ye):null;case Z:return $=Cr($),oe(Y,k,$,ye)}if(fe($)||X($))return $e!==null?null:ge(Y,k,$,ye,null);if(typeof $.then=="function")return oe(Y,k,Wl($),ye);if($.$$typeof===D)return oe(Y,k,Vl(Y,$),ye);ql(Y,$)}return null}function ue(Y,k,$,ye,$e){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return Y=Y.get($)||null,A(k,Y,""+ye,$e);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case b:return Y=Y.get(ye.key===null?$:ye.key)||null,H(k,Y,ye,$e);case M:return Y=Y.get(ye.key===null?$:ye.key)||null,ee(k,Y,ye,$e);case Z:return ye=Cr(ye),ue(Y,k,$,ye,$e)}if(fe(ye)||X(ye))return Y=Y.get($)||null,ge(k,Y,ye,$e,null);if(typeof ye.then=="function")return ue(Y,k,$,Wl(ye),$e);if(ye.$$typeof===D)return ue(Y,k,$,Vl(k,ye),$e);ql(k,ye)}return null}function We(Y,k,$,ye){for(var $e=null,Lt=null,Ze=k,xt=k=0,Mt=null;Ze!==null&&xt<$.length;xt++){Ze.index>xt?(Mt=Ze,Ze=null):Mt=Ze.sibling;var Ot=oe(Y,Ze,$[xt],ye);if(Ot===null){Ze===null&&(Ze=Mt);break}t&&Ze&&Ot.alternate===null&&i(Y,Ze),k=h(Ot,k,xt),Lt===null?$e=Ot:Lt.sibling=Ot,Lt=Ot,Ze=Mt}if(xt===$.length)return s(Y,Ze),Rt&&ia(Y,xt),$e;if(Ze===null){for(;xt<$.length;xt++)Ze=Se(Y,$[xt],ye),Ze!==null&&(k=h(Ze,k,xt),Lt===null?$e=Ze:Lt.sibling=Ze,Lt=Ze);return Rt&&ia(Y,xt),$e}for(Ze=l(Ze);xt<$.length;xt++)Mt=ue(Ze,Y,xt,$[xt],ye),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?xt:Mt.key),k=h(Mt,k,xt),Lt===null?$e=Mt:Lt.sibling=Mt,Lt=Mt);return t&&Ze.forEach(function(rr){return i(Y,rr)}),Rt&&ia(Y,xt),$e}function it(Y,k,$,ye){if($==null)throw Error(r(151));for(var $e=null,Lt=null,Ze=k,xt=k=0,Mt=null,Ot=$.next();Ze!==null&&!Ot.done;xt++,Ot=$.next()){Ze.index>xt?(Mt=Ze,Ze=null):Mt=Ze.sibling;var rr=oe(Y,Ze,Ot.value,ye);if(rr===null){Ze===null&&(Ze=Mt);break}t&&Ze&&rr.alternate===null&&i(Y,Ze),k=h(rr,k,xt),Lt===null?$e=rr:Lt.sibling=rr,Lt=rr,Ze=Mt}if(Ot.done)return s(Y,Ze),Rt&&ia(Y,xt),$e;if(Ze===null){for(;!Ot.done;xt++,Ot=$.next())Ot=Se(Y,Ot.value,ye),Ot!==null&&(k=h(Ot,k,xt),Lt===null?$e=Ot:Lt.sibling=Ot,Lt=Ot);return Rt&&ia(Y,xt),$e}for(Ze=l(Ze);!Ot.done;xt++,Ot=$.next())Ot=ue(Ze,Y,xt,Ot.value,ye),Ot!==null&&(t&&Ot.alternate!==null&&Ze.delete(Ot.key===null?xt:Ot.key),k=h(Ot,k,xt),Lt===null?$e=Ot:Lt.sibling=Ot,Lt=Ot);return t&&Ze.forEach(function(Bb){return i(Y,Bb)}),Rt&&ia(Y,xt),$e}function Wt(Y,k,$,ye){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case b:e:{for(var $e=$.key;k!==null;){if(k.key===$e){if($e=$.type,$e===E){if(k.tag===7){s(Y,k.sibling),ye=f(k,$.props.children),ye.return=Y,Y=ye;break e}}else if(k.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===Z&&Cr($e)===k.type){s(Y,k.sibling),ye=f(k,$.props),bo(ye,$),ye.return=Y,Y=ye;break e}s(Y,k);break}else i(Y,k);k=k.sibling}$.type===E?(ye=Mr($.props.children,Y.mode,ye,$.key),ye.return=Y,Y=ye):(ye=Bl($.type,$.key,$.props,null,Y.mode,ye),bo(ye,$),ye.return=Y,Y=ye)}return S(Y);case M:e:{for($e=$.key;k!==null;){if(k.key===$e)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(Y,k.sibling),ye=f(k,$.children||[]),ye.return=Y,Y=ye;break e}else{s(Y,k);break}else i(Y,k);k=k.sibling}ye=af($,Y.mode,ye),ye.return=Y,Y=ye}return S(Y);case Z:return $=Cr($),Wt(Y,k,$,ye)}if(fe($))return We(Y,k,$,ye);if(X($)){if($e=X($),typeof $e!="function")throw Error(r(150));return $=$e.call($),it(Y,k,$,ye)}if(typeof $.then=="function")return Wt(Y,k,Wl($),ye);if($.$$typeof===D)return Wt(Y,k,Vl(Y,$),ye);ql(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(Y,k.sibling),ye=f(k,$),ye.return=Y,Y=ye):(s(Y,k),ye=nf($,Y.mode,ye),ye.return=Y,Y=ye),S(Y)):s(Y,k)}return function(Y,k,$,ye){try{So=0;var $e=Wt(Y,k,$,ye);return ds=null,$e}catch(Ze){if(Ze===fs||Ze===kl)throw Ze;var Lt=ii(29,Ze,null,Y.mode);return Lt.lanes=ye,Lt.return=Y,Lt}finally{}}}var Dr=qm(!0),jm=qm(!1),Ga=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=zl(t),Dm(t,null,s),i}return Fl(t,l,i,s),zl(t)}function Mo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ki(t,s)}}function _f(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=S:h=h.next=S,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var vf=!1;function Eo(){if(vf){var t=us;if(t!==null)throw t}}function To(t,i,s,l){vf=!1;var f=t.updateQueue;Ga=!1;var h=f.firstBaseUpdate,S=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var H=A,ee=H.next;H.next=null,S===null?h=ee:S.next=ee,S=H;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,A=ge.lastBaseUpdate,A!==S&&(A===null?ge.firstBaseUpdate=ee:A.next=ee,ge.lastBaseUpdate=H))}if(h!==null){var Se=f.baseState;S=0,ge=ee=H=null,A=h;do{var oe=A.lane&-536870913,ue=oe!==A.lane;if(ue?(bt&oe)===oe:(l&oe)===oe){oe!==0&&oe===cs&&(vf=!0),ge!==null&&(ge=ge.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var We=t,it=A;oe=i;var Wt=s;switch(it.tag){case 1:if(We=it.payload,typeof We=="function"){Se=We.call(Wt,Se,oe);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=it.payload,oe=typeof We=="function"?We.call(Wt,Se,oe):We,oe==null)break e;Se=g({},Se,oe);break e;case 2:Ga=!0}}oe=A.callback,oe!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=f.callbacks,ue===null?f.callbacks=[oe]:ue.push(oe))}else ue={lane:oe,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ge===null?(ee=ge=ue,H=Se):ge=ge.next=ue,S|=oe;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,f.lastBaseUpdate=ue,f.shared.pending=null}}while(!0);ge===null&&(H=Se),f.baseState=H,f.firstBaseUpdate=ee,f.lastBaseUpdate=ge,h===null&&(f.shared.lanes=0),Za|=S,t.lanes=S,t.memoizedState=Se}}function Ym(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Zm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Ym(s[t],i)}var hs=F(null),jl=F(0);function Km(t,i){t=pa,Ae(jl,t),Ae(hs,i),pa=t|i.baseLanes}function yf(){Ae(jl,pa),Ae(hs,hs.current)}function Sf(){pa=jl.current,ae(hs),ae(jl)}var ai=F(null),vi=null;function Wa(t){var i=t.alternate;Ae(ln,ln.current&1),Ae(ai,t),vi===null&&(i===null||hs.current!==null||i.memoizedState!==null)&&(vi=t)}function bf(t){Ae(ln,ln.current),Ae(ai,t),vi===null&&(vi=t)}function Qm(t){t.tag===22?(Ae(ln,ln.current),Ae(ai,t),vi===null&&(vi=t)):qa()}function qa(){Ae(ln,ln.current),Ae(ai,ai.current)}function ri(t){ae(ai),vi===t&&(vi=null),ae(ln)}var ln=F(0);function Yl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Cd(s)||wd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sa=0,ft=null,kt=null,hn=null,Zl=!1,ps=!1,Ur=!1,Kl=0,Ao=0,ms=null,CS=0;function rn(){throw Error(r(321))}function Mf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ni(t[s],i[s]))return!1;return!0}function Ef(t,i,s,l,f,h){return sa=h,ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?O0:If,Ur=!1,h=s(l,f),Ur=!1,ps&&(h=$m(i,s,l,f)),Jm(t),h}function Jm(t){B.H=wo;var i=kt!==null&&kt.next!==null;if(sa=0,hn=kt=ft=null,Zl=!1,Ao=0,ms=null,i)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Hl(t)&&(pn=!0))}function $m(t,i,s,l){ft=t;var f=0;do{if(ps&&(ms=null),Ao=0,ps=!1,25<=f)throw Error(r(301));if(f+=1,hn=kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=P0,h=i(s,l)}while(ps);return h}function wS(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?Ro(i):i,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ft.flags|=1024),i}function Tf(){var t=Kl!==0;return Kl=0,t}function Af(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Rf(t){if(Zl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Zl=!1}sa=0,hn=kt=ft=null,ps=!1,Ao=Kl=0,ms=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ft.memoizedState=hn=t:hn=hn.next=t,hn}function cn(){if(kt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var i=hn===null?ft.memoizedState:hn.next;if(i!==null)hn=i,kt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},hn===null?ft.memoizedState=hn=t:hn=hn.next=t}return hn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var i=Ao;return Ao+=1,ms===null&&(ms=[]),t=km(ms,t,i),i=ft,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?O0:If),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===D)return Dn(t)}throw Error(r(438,String(t)))}function Cf(t){var i=null,s=ft.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ft.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Ql(),ft.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=C;return i.index++,s}function oa(t,i){return typeof i=="function"?i(t):i}function $l(t){var i=cn();return wf(i,kt,t)}function wf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var S=f.next;f.next=h.next,h.next=S}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var A=S=null,H=null,ee=i,ge=!1;do{var Se=ee.lane&-536870913;if(Se!==ee.lane?(bt&Se)===Se:(sa&Se)===Se){var oe=ee.revertLane;if(oe===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),Se===cs&&(ge=!0);else if((sa&oe)===oe){ee=ee.next,oe===cs&&(ge=!0);continue}else Se={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(A=H=Se,S=h):H=H.next=Se,ft.lanes|=oe,Za|=oe;Se=ee.action,Ur&&s(h,Se),h=ee.hasEagerState?ee.eagerState:s(h,Se)}else oe={lane:Se,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(A=H=oe,S=h):H=H.next=oe,ft.lanes|=Se,Za|=Se;ee=ee.next}while(ee!==null&&ee!==i);if(H===null?S=h:H.next=A,!ni(h,t.memoizedState)&&(pn=!0,ge&&(s=us,s!==null)))throw s;t.memoizedState=h,t.baseState=S,t.baseQueue=H,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Df(t){var i=cn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var S=f=f.next;do h=t(h,S.action),S=S.next;while(S!==f);ni(h,i.memoizedState)||(pn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function e0(t,i,s){var l=ft,f=cn(),h=Rt;if(h){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!ni((kt||f).memoizedState,s);if(S&&(f.memoizedState=s,pn=!0),f=f.queue,Lf(i0.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,xs(9,{destroy:void 0},n0.bind(null,l,f,s,i),null),Zt===null)throw Error(r(349));h||(sa&127)!==0||t0(l,i,s)}return s}function t0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=ft.updateQueue,i===null?(i=Ql(),ft.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function n0(t,i,s,l){i.value=s,i.getSnapshot=l,a0(i)&&r0(t)}function i0(t,i,s){return s(function(){a0(i)&&r0(t)})}function a0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ni(t,s)}catch{return!0}}function r0(t){var i=br(t,2);i!==null&&Qn(i,t,2)}function Uf(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Ur){Ke(!0);try{s()}finally{Ke(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},i}function s0(t,i,s,l){return t.baseState=s,wf(t,kt,typeof l=="function"?l:oa)}function DS(t,i,s,l,f){if(nc(t))throw Error(r(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};B.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,o0(i,h)):(h.next=s.next,i.pending=s.next=h)}}function o0(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=B.T,S={};B.T=S;try{var A=s(f,l),H=B.S;H!==null&&H(S,A),l0(t,i,A)}catch(ee){Nf(t,i,ee)}finally{h!==null&&S.types!==null&&(h.types=S.types),B.T=h}}else try{h=s(f,l),l0(t,i,h)}catch(ee){Nf(t,i,ee)}}function l0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){c0(t,i,l)},function(l){return Nf(t,i,l)}):c0(t,i,s)}function c0(t,i,s){i.status="fulfilled",i.value=s,u0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,o0(t,s)))}function Nf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,u0(i),i=i.next;while(i!==l)}t.action=null}function u0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function f0(t,i){return i}function d0(t,i){if(Rt){var s=Zt.formState;if(s!==null){e:{var l=ft;if(Rt){if(Jt){t:{for(var f=Jt,h=_i;f.nodeType!==8;){if(!h){f=null;break t}if(f=yi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){Jt=yi(f.nextSibling),l=f.data==="F!";break e}}Ha(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:f0,lastRenderedState:i},s.queue=l,s=U0.bind(null,ft,l),l.dispatch=s,l=Uf(!1),h=Bf.bind(null,ft,!1,l.queue),l=kn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=DS.bind(null,ft,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function h0(t){var i=cn();return p0(i,kt,t)}function p0(t,i,s){if(i=wf(t,i,f0)[0],t=$l(oa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ro(i)}catch(S){throw S===fs?kl:S}else l=i;i=cn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(ft.flags|=2048,xs(9,{destroy:void 0},US.bind(null,f,s),null)),[l,h,t]}function US(t,i){t.action=i}function m0(t){var i=cn(),s=kt;if(s!==null)return p0(i,s,t);cn(),i=i.memoizedState,s=cn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function xs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=ft.updateQueue,i===null&&(i=Ql(),ft.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function x0(){return cn().memoizedState}function ec(t,i,s,l){var f=kn();ft.flags|=t,f.memoizedState=xs(1|i,{destroy:void 0},s,l===void 0?null:l)}function tc(t,i,s,l){var f=cn();l=l===void 0?null:l;var h=f.memoizedState.inst;kt!==null&&l!==null&&Mf(l,kt.memoizedState.deps)?f.memoizedState=xs(i,h,s,l):(ft.flags|=t,f.memoizedState=xs(1|i,h,s,l))}function g0(t,i){ec(8390656,8,t,i)}function Lf(t,i){tc(2048,8,t,i)}function NS(t){ft.flags|=4;var i=ft.updateQueue;if(i===null)i=Ql(),ft.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function _0(t){var i=cn().memoizedState;return NS({ref:i,nextImpl:t}),function(){if((zt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function v0(t,i){return tc(4,2,t,i)}function y0(t,i){return tc(4,4,t,i)}function S0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function b0(t,i,s){s=s!=null?s.concat([t]):null,tc(4,4,S0.bind(null,i,t),s)}function Of(){}function M0(t,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Mf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function E0(t,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Mf(i,l[1]))return l[0];if(l=t(),Ur){Ke(!0);try{t()}finally{Ke(!1)}}return s.memoizedState=[l,i],l}function Pf(t,i,s){return s===void 0||(sa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Tx(),ft.lanes|=t,Za|=t,s)}function T0(t,i,s,l){return ni(s,i)?s:hs.current!==null?(t=Pf(t,s,l),ni(t,i)||(pn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(bt&261930)===0?(pn=!0,t.memoizedState=s):(t=Tx(),ft.lanes|=t,Za|=t,i)}function A0(t,i,s,l,f){var h=K.p;K.p=h!==0&&8>h?h:8;var S=B.T,A={};B.T=A,Bf(t,!1,i,s);try{var H=f(),ee=B.S;if(ee!==null&&ee(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ge=RS(H,l);Co(t,i,ge,li(t))}else Co(t,i,l,li(t))}catch(Se){Co(t,i,{then:function(){},status:"rejected",reason:Se},li())}finally{K.p=h,S!==null&&A.types!==null&&(S.types=A.types),B.T=S}}function LS(){}function Ff(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=R0(t).queue;A0(t,f,i,q,s===null?LS:function(){return C0(t),s(l)})}function R0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function C0(t){var i=R0(t);i.next===null&&(i=t.alternate.memoizedState),Co(t,i.next.queue,{},li())}function zf(){return Dn(Wo)}function w0(){return cn().memoizedState}function D0(){return cn().memoizedState}function OS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=li();t=ka(s);var l=Xa(i,t,s);l!==null&&(Qn(l,i,s),Mo(l,i,s)),i={cache:df()},t.payload=i;return}i=i.return}}function PS(t,i,s){var l=li();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},nc(t)?N0(i,s):(s=ef(t,i,s,l),s!==null&&(Qn(s,t,l),L0(s,i,l)))}function U0(t,i,s){var l=li();Co(t,i,s,l)}function Co(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(nc(t))N0(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var S=i.lastRenderedState,A=h(S,s);if(f.hasEagerState=!0,f.eagerState=A,ni(A,S))return Fl(t,i,f,0),Zt===null&&Pl(),!1}catch{}finally{}if(s=ef(t,i,f,l),s!==null)return Qn(s,t,l),L0(s,i,l),!0}return!1}function Bf(t,i,s,l){if(l={lane:2,revertLane:xd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},nc(t)){if(i)throw Error(r(479))}else i=ef(t,s,l,2),i!==null&&Qn(i,t,2)}function nc(t){var i=t.alternate;return t===ft||i!==null&&i===ft}function N0(t,i){ps=Zl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function L0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ki(t,s)}}var wo={readContext:Dn,use:Jl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};wo.useEffectEvent=rn;var O0={readContext:Dn,use:Jl,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Dn,useEffect:g0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,ec(4194308,4,S0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ec(4194308,4,t,i)},useInsertionEffect:function(t,i){ec(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(Ur){Ke(!0);try{t()}finally{Ke(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var f=s(i);if(Ur){Ke(!0);try{s(i)}finally{Ke(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=PS.bind(null,ft,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=Uf(t);var i=t.queue,s=U0.bind(null,ft,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Of,useDeferredValue:function(t,i){var s=kn();return Pf(s,t,i)},useTransition:function(){var t=Uf(!1);return t=A0.bind(null,ft,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=ft,f=kn();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Zt===null)throw Error(r(349));(bt&127)!==0||t0(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,g0(i0.bind(null,l,h,t),[t]),l.flags|=2048,xs(9,{destroy:void 0},n0.bind(null,l,h,s,i),null),s},useId:function(){var t=kn(),i=Zt.identifierPrefix;if(Rt){var s=Bi,l=zi;s=(l&~(1<<32-ke(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Kl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=CS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:zf,useFormState:d0,useActionState:d0,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Bf.bind(null,ft,!0,s),s.dispatch=i,[t,i]},useMemoCache:Cf,useCacheRefresh:function(){return kn().memoizedState=OS.bind(null,ft)},useEffectEvent:function(t){var i=kn(),s={impl:t};return i.memoizedState=s,function(){if((zt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},If={readContext:Dn,use:Jl,useCallback:M0,useContext:Dn,useEffect:Lf,useImperativeHandle:b0,useInsertionEffect:v0,useLayoutEffect:y0,useMemo:E0,useReducer:$l,useRef:x0,useState:function(){return $l(oa)},useDebugValue:Of,useDeferredValue:function(t,i){var s=cn();return T0(s,kt.memoizedState,t,i)},useTransition:function(){var t=$l(oa)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:Ro(t),i]},useSyncExternalStore:e0,useId:w0,useHostTransitionStatus:zf,useFormState:h0,useActionState:h0,useOptimistic:function(t,i){var s=cn();return s0(s,kt,t,i)},useMemoCache:Cf,useCacheRefresh:D0};If.useEffectEvent=_0;var P0={readContext:Dn,use:Jl,useCallback:M0,useContext:Dn,useEffect:Lf,useImperativeHandle:b0,useInsertionEffect:v0,useLayoutEffect:y0,useMemo:E0,useReducer:Df,useRef:x0,useState:function(){return Df(oa)},useDebugValue:Of,useDeferredValue:function(t,i){var s=cn();return kt===null?Pf(s,t,i):T0(s,kt.memoizedState,t,i)},useTransition:function(){var t=Df(oa)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:Ro(t),i]},useSyncExternalStore:e0,useId:w0,useHostTransitionStatus:zf,useFormState:m0,useActionState:m0,useOptimistic:function(t,i){var s=cn();return kt!==null?s0(s,kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Cf,useCacheRefresh:D0};P0.useEffectEvent=_0;function Hf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Vf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=li(),f=ka(l);f.payload=i,s!=null&&(f.callback=s),i=Xa(t,f,l),i!==null&&(Qn(i,t,l),Mo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=li(),f=ka(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Xa(t,f,l),i!==null&&(Qn(i,t,l),Mo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=li(),l=ka(s);l.tag=2,i!=null&&(l.callback=i),i=Xa(t,l,s),i!==null&&(Qn(i,t,s),Mo(i,t,s))}};function F0(t,i,s,l,f,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,S):i.prototype&&i.prototype.isPureReactComponent?!mo(s,l)||!mo(f,h):!0}function z0(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Vf.enqueueReplaceState(i,i.state,null)}function Nr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function B0(t){Ol(t)}function I0(t){console.error(t)}function H0(t){Ol(t)}function ic(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function V0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gf(t,i,s){return s=ka(s),s.tag=3,s.payload={element:null},s.callback=function(){ic(t,i)},s}function G0(t){return t=ka(t),t.tag=3,t}function k0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){V0(i,s,l)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){V0(i,s,l),typeof f!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function FS(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&ls(i,s,f,!0),s=ai.current,s!==null){switch(s.tag){case 31:case 13:return vi===null?mc():s.alternate===null&&sn===0&&(sn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Xl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),hd(t,l,f)),!1;case 22:return s.flags|=65536,l===Xl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),hd(t,l,f)),!1}throw Error(r(435,s.tag))}return hd(t,l,f),mc(),!1}if(Rt)return i=ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==of&&(t=Error(r(422),{cause:l}),_o(mi(t,s)))):(l!==of&&(i=Error(r(423),{cause:l}),_o(mi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=mi(l,s),f=Gf(t.stateNode,l,f),_f(t,f),sn!==4&&(sn=2)),!1;var h=Error(r(520),{cause:l});if(h=mi(h,s),zo===null?zo=[h]:zo.push(h),sn!==4&&(sn=2),i===null)return!0;l=mi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Gf(s.stateNode,l,t),_f(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ka===null||!Ka.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=G0(f),k0(f,t,s,l),_f(s,f),!1}s=s.return}while(s!==null);return!1}var kf=Error(r(461)),pn=!1;function Un(t,i,s,l){i.child=t===null?jm(i,null,s,l):Dr(i,t.child,s,l)}function X0(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return Ar(i),l=Ef(t,i,s,S,h,f),A=Tf(),t!==null&&!pn?(Af(t,i,f),la(t,i,f)):(Rt&&A&&rf(i),i.flags|=1,Un(t,i,l,f),i.child)}function W0(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!tf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,q0(t,i,h,l,f)):(t=Bl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Qf(t,f)){var S=h.memoizedProps;if(s=s.compare,s=s!==null?s:mo,s(S,l)&&t.ref===i.ref)return la(t,i,f)}return i.flags|=1,t=na(h,l),t.ref=i.ref,t.return=i,i.child=t}function q0(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(mo(h,l)&&t.ref===i.ref)if(pn=!1,i.pendingProps=l=h,Qf(t,f))(t.flags&131072)!==0&&(pn=!0);else return i.lanes=t.lanes,la(t,i,f)}return Xf(t,i,s,l,f)}function j0(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return Y0(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(i,h!==null?h.cachePool:null),h!==null?Km(i,h):yf(),Qm(i);else return l=i.lanes=536870912,Y0(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(Gl(i,h.cachePool),Km(i,h),qa(),i.memoizedState=null):(t!==null&&Gl(i,null),yf(),qa());return Un(t,i,f,s),i.child}function Do(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Y0(t,i,s,l,f){var h=pf();return h=h===null?null:{parent:dn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&Gl(i,null),yf(),Qm(i),t!==null&&ls(t,i,l,!0),i.childLanes=f,null}function ac(t,i){return i=sc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Z0(t,i,s){return Dr(i,t.child,null,s),t=ac(i,i.pendingProps),t.flags|=2,ri(i),i.memoizedState=null,t}function zS(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=ac(i,l),i.lanes=536870912,Do(null,t);if(bf(i),(t=Jt)?(t=og(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},s=Nm(t),s.return=i,i.child=s,wn=i,Jt=null)):t=null,t===null)throw Ha(i);return i.lanes=536870912,null}return ac(i,l)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(bf(i),f)if(i.flags&256)i.flags&=-257,i=Z0(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(pn||ls(t,i,s,!1),f=(s&t.childLanes)!==0,pn||f){if(l=Zt,l!==null&&(S=Na(l,s),S!==0&&S!==h.retryLane))throw h.retryLane=S,br(t,S),Qn(l,t,S),kf;mc(),i=Z0(t,i,s)}else t=h.treeContext,Jt=yi(S.nextSibling),wn=i,Rt=!0,Ia=null,_i=!1,t!==null&&Pm(i,t),i=ac(i,l),i.flags|=4096;return i}return t=na(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function rc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Xf(t,i,s,l,f){return Ar(i),s=Ef(t,i,s,l,void 0,f),l=Tf(),t!==null&&!pn?(Af(t,i,f),la(t,i,f)):(Rt&&l&&rf(i),i.flags|=1,Un(t,i,s,f),i.child)}function K0(t,i,s,l,f,h){return Ar(i),i.updateQueue=null,s=$m(i,l,s,f),Jm(t),l=Tf(),t!==null&&!pn?(Af(t,i,h),la(t,i,h)):(Rt&&l&&rf(i),i.flags|=1,Un(t,i,s,h),i.child)}function Q0(t,i,s,l,f){if(Ar(i),i.stateNode===null){var h=as,S=s.contextType;typeof S=="object"&&S!==null&&(h=Dn(S)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Vf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},xf(i),S=s.contextType,h.context=typeof S=="object"&&S!==null?Dn(S):as,h.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Hf(i,s,S,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Vf.enqueueReplaceState(h,h.state,null),To(i,l,h,f),Eo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var A=i.memoizedProps,H=Nr(s,A);h.props=H;var ee=h.context,ge=s.contextType;S=as,typeof ge=="object"&&ge!==null&&(S=Dn(ge));var Se=s.getDerivedStateFromProps;ge=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||ee!==S)&&z0(i,h,l,S),Ga=!1;var oe=i.memoizedState;h.state=oe,To(i,l,h,f),Eo(),ee=i.memoizedState,A||oe!==ee||Ga?(typeof Se=="function"&&(Hf(i,s,Se,l),ee=i.memoizedState),(H=Ga||F0(i,s,H,l,oe,ee,S))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ee),h.props=l,h.state=ee,h.context=S,l=H):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,gf(t,i),S=i.memoizedProps,ge=Nr(s,S),h.props=ge,Se=i.pendingProps,oe=h.context,ee=s.contextType,H=as,typeof ee=="object"&&ee!==null&&(H=Dn(ee)),A=s.getDerivedStateFromProps,(ee=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Se||oe!==H)&&z0(i,h,l,H),Ga=!1,oe=i.memoizedState,h.state=oe,To(i,l,h,f),Eo();var ue=i.memoizedState;S!==Se||oe!==ue||Ga||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof A=="function"&&(Hf(i,s,A,l),ue=i.memoizedState),(ge=Ga||F0(i,s,ge,l,oe,ue,H)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,ue,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,ue,H)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ue),h.props=l,h.state=ue,h.context=H,l=ge):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,rc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Dr(i,t.child,null,f),i.child=Dr(i,null,s,f)):Un(t,i,s,f),i.memoizedState=h.state,t=i.child):t=la(t,i,f),t}function J0(t,i,s,l){return Er(),i.flags|=256,Un(t,i,s,l),i.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(t){return{baseLanes:t,cachePool:Vm()}}function jf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=oi),t}function $0(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(f?Wa(i):qa(),(t=Jt)?(t=og(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},s=Nm(t),s.return=i,i.child=s,wn=i,Jt=null)):t=null,t===null)throw Ha(i);return wd(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(qa(),f=i.mode,A=sc({mode:"hidden",children:A},f),l=Mr(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=qf(s),l.childLanes=jf(t,S,s),i.memoizedState=Wf,Do(null,l)):(Wa(i),Yf(i,A))}var H=t.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(h)i.flags&256?(Wa(i),i.flags&=-257,i=Zf(t,i,s)):i.memoizedState!==null?(qa(),i.child=t.child,i.flags|=128,i=null):(qa(),A=l.fallback,f=i.mode,l=sc({mode:"visible",children:l.children},f),A=Mr(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Dr(i,t.child,null,s),l=i.child,l.memoizedState=qf(s),l.childLanes=jf(t,S,s),i.memoizedState=Wf,i=Do(null,l));else if(Wa(i),wd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ee=S.dgst;S=ee,l=Error(r(419)),l.stack="",l.digest=S,_o({value:l,source:null,stack:null}),i=Zf(t,i,s)}else if(pn||ls(t,i,s,!1),S=(s&t.childLanes)!==0,pn||S){if(S=Zt,S!==null&&(l=Na(S,s),l!==0&&l!==H.retryLane))throw H.retryLane=l,br(t,l),Qn(S,t,l),kf;Cd(A)||mc(),i=Zf(t,i,s)}else Cd(A)?(i.flags|=192,i.child=t.child,i=null):(t=H.treeContext,Jt=yi(A.nextSibling),wn=i,Rt=!0,Ia=null,_i=!1,t!==null&&Pm(i,t),i=Yf(i,l.children),i.flags|=4096);return i}return f?(qa(),A=l.fallback,f=i.mode,H=t.child,ee=H.sibling,l=na(H,{mode:"hidden",children:l.children}),l.subtreeFlags=H.subtreeFlags&65011712,ee!==null?A=na(ee,A):(A=Mr(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,Do(null,l),l=i.child,A=t.child.memoizedState,A===null?A=qf(s):(f=A.cachePool,f!==null?(H=dn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=Vm(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=jf(t,S,s),i.memoizedState=Wf,Do(t.child,l)):(Wa(i),s=t.child,t=s.sibling,s=na(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=s,i.memoizedState=null,s)}function Yf(t,i){return i=sc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function sc(t,i){return t=ii(22,t,null,i),t.lanes=0,t}function Zf(t,i,s){return Dr(i,t.child,null,s),t=Yf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ex(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),uf(t.return,i,s)}function Kf(t,i,s,l,f,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=s,S.tailMode=f,S.treeForkCount=h)}function tx(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var S=ln.current,A=(S&2)!==0;if(A?(S=S&1|2,i.flags|=128):S&=1,Ae(ln,S),Un(t,i,l,s),l=Rt?go:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ex(t,s,i);else if(t.tag===19)ex(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Yl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Kf(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Yl(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Kf(i,!0,s,null,h,l);break;case"together":Kf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function la(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Za|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(ls(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=na(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=na(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Qf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function BS(t,i,s){switch(i.tag){case 3:W(i,i.stateNode.containerInfo),Va(i,dn,t.memoizedState.cache),Er();break;case 27:case 5:Pe(i);break;case 4:W(i,i.stateNode.containerInfo);break;case 10:Va(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,bf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Wa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?$0(t,i,s):(Wa(i),t=la(t,i,s),t!==null?t.sibling:null);Wa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(ls(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return tx(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ae(ln,ln.current),l)break;return null;case 22:return i.lanes=0,j0(t,i,s,i.pendingProps);case 24:Va(i,dn,t.memoizedState.cache)}return la(t,i,s)}function nx(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)pn=!0;else{if(!Qf(t,s)&&(i.flags&128)===0)return pn=!1,BS(t,i,s);pn=(t.flags&131072)!==0}else pn=!1,Rt&&(i.flags&1048576)!==0&&Om(i,go,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Cr(i.elementType),i.type=t,typeof t=="function")tf(t)?(l=Nr(t,l),i.tag=1,i=Q0(null,i,t,l,s)):(i.tag=0,i=Xf(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===P){i.tag=11,i=X0(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=W0(null,i,t,l,s);break e}}throw i=pe(t)||t,Error(r(306,i,""))}}return i;case 0:return Xf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Nr(l,i.pendingProps),Q0(t,i,l,f,s);case 3:e:{if(W(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,gf(t,i),To(i,l,null,s);var S=i.memoizedState;if(l=S.cache,Va(i,dn,l),l!==h.cache&&ff(i,[dn],s,!0),Eo(),l=S.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=J0(t,i,l,s);break e}else if(l!==f){f=mi(Error(r(424)),i),_o(f),i=J0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=yi(t.firstChild),wn=i,Rt=!0,Ia=null,_i=!0,s=jm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Er(),l===f){i=la(t,i,s);break e}Un(t,i,l,s)}i=i.child}return i;case 26:return rc(t,i),t===null?(s=hg(i.type,null,i.pendingProps,null))?i.memoizedState=s:Rt||(s=i.type,t=i.pendingProps,l=bc(re.current).createElement(s),l[fn]=i,l[gn]=t,Nn(l,s,t),ie(l),i.stateNode=l):i.memoizedState=hg(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Pe(i),t===null&&Rt&&(l=i.stateNode=ug(i.type,i.pendingProps,re.current),wn=i,_i=!0,f=Jt,er(i.type)?(Dd=f,Jt=yi(l.firstChild)):Jt=f),Un(t,i,i.pendingProps.children,s),rc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((f=l=Jt)&&(l=pb(l,i.type,i.pendingProps,_i),l!==null?(i.stateNode=l,wn=i,Jt=yi(l.firstChild),_i=!1,f=!0):f=!1),f||Ha(i)),Pe(i),f=i.type,h=i.pendingProps,S=t!==null?t.memoizedProps:null,l=h.children,Td(f,h)?l=null:S!==null&&Td(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Ef(t,i,wS,null,null,s),Wo._currentValue=f),rc(t,i),Un(t,i,l,s),i.child;case 6:return t===null&&Rt&&((t=s=Jt)&&(s=mb(s,i.pendingProps,_i),s!==null?(i.stateNode=s,wn=i,Jt=null,t=!0):t=!1),t||Ha(i)),null;case 13:return $0(t,i,s);case 4:return W(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Dr(i,null,l,s):Un(t,i,l,s),i.child;case 11:return X0(t,i,i.type,i.pendingProps,s);case 7:return Un(t,i,i.pendingProps,s),i.child;case 8:return Un(t,i,i.pendingProps.children,s),i.child;case 12:return Un(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Va(i,i.type,l.value),Un(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ar(i),f=Dn(f),l=l(f),i.flags|=1,Un(t,i,l,s),i.child;case 14:return W0(t,i,i.type,i.pendingProps,s);case 15:return q0(t,i,i.type,i.pendingProps,s);case 19:return tx(t,i,s);case 31:return zS(t,i,s);case 22:return j0(t,i,s,i.pendingProps);case 24:return Ar(i),l=Dn(dn),t===null?(f=pf(),f===null&&(f=Zt,h=df(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},xf(i),Va(i,dn,f)):((t.lanes&s)!==0&&(gf(t,i),To(i,null,null,s),Eo()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Va(i,dn,l)):(l=h.cache,Va(i,dn,l),l!==f.cache&&ff(i,[dn],s,!0))),Un(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ca(t){t.flags|=4}function Jf(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(wx())t.flags|=8192;else throw wr=Xl,mf}else t.flags&=-16777217}function ix(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_g(i))if(wx())t.flags|=8192;else throw wr=Xl,mf}function oc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?It():536870912,t.lanes|=i,ys|=i)}function Uo(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function $t(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function IS(t,i,s){var l=i.pendingProps;switch(sf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return $t(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ra(dn),De(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(os(i)?ca(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,lf())),$t(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(ca(i),h!==null?($t(i),ix(i,h)):($t(i),Jf(i,f,null,l,s))):h?h!==t.memoizedState?(ca(i),$t(i),ix(i,h)):($t(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ca(i),$t(i),Jf(i,f,t,l,s)),null;case 27:if(ot(i),s=re.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ca(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return $t(i),null}t=Ne.current,os(i)?Fm(i):(t=ug(f,l,s),i.stateNode=t,ca(i))}return $t(i),null;case 5:if(ot(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ca(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return $t(i),null}if(h=Ne.current,os(i))Fm(i);else{var S=bc(re.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}h[fn]=i,h[gn]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=h;e:switch(Nn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ca(i)}}return $t(i),Jf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ca(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=re.current,os(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=wn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[fn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||$x(t.nodeValue,s)),t||Ha(i,!0)}else t=bc(t).createTextNode(l),t[fn]=i,i.stateNode=t}return $t(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=os(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[fn]=i}else Er(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),t=!1}else s=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(ri(i),i):(ri(i),null);if((i.flags&128)!==0)throw Error(r(558))}return $t(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=os(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[fn]=i}else Er(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),f=!1}else f=lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ri(i),i):(ri(i),null)}return ri(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),oc(i,i.updateQueue),$t(i),null);case 4:return De(),t===null&&yd(i.stateNode.containerInfo),$t(i),null;case 10:return ra(i.type),$t(i),null;case 19:if(ae(ln),l=i.memoizedState,l===null)return $t(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)Uo(l,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Yl(t),h!==null){for(i.flags|=128,Uo(l,!1),t=h.updateQueue,i.updateQueue=t,oc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Um(s,t),s=s.sibling;return Ae(ln,ln.current&1|2),Rt&&ia(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>dc&&(i.flags|=128,f=!0,Uo(l,!1),i.lanes=4194304)}else{if(!f)if(t=Yl(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,oc(i,t),Uo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Rt)return $t(i),null}else 2*T()-l.renderingStartTime>dc&&s!==536870912&&(i.flags|=128,f=!0,Uo(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,s=ln.current,Ae(ln,f?s&1|2:s&1),Rt&&ia(i,l.treeForkCount),t):($t(i),null);case 22:case 23:return ri(i),Sf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),s=i.updateQueue,s!==null&&oc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ae(Rr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ra(dn),$t(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function HS(t,i){switch(sf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ra(dn),De(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ot(i),null;case 31:if(i.memoizedState!==null){if(ri(i),i.alternate===null)throw Error(r(340));Er()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ri(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Er()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ae(ln),null;case 4:return De(),null;case 10:return ra(i.type),null;case 22:case 23:return ri(i),Sf(),t!==null&&ae(Rr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function ax(t,i){switch(sf(i),i.tag){case 3:ra(dn),De();break;case 26:case 27:case 5:ot(i);break;case 4:De();break;case 31:i.memoizedState!==null&&ri(i);break;case 13:ri(i);break;case 19:ae(ln);break;case 10:ra(i.type);break;case 22:case 23:ri(i),Sf(),t!==null&&ae(Rr);break;case 24:ra(dn)}}function No(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,S=s.inst;l=h(),S.destroy=l}s=s.next}while(s!==f)}}catch(A){Gt(i,i.return,A)}}function ja(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,f=i;var H=s,ee=A;try{ee()}catch(ge){Gt(f,H,ge)}}}l=l.next}while(l!==h)}}catch(ge){Gt(i,i.return,ge)}}function rx(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Zm(i,s)}catch(l){Gt(t,t.return,l)}}}function sx(t,i,s){s.props=Nr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Gt(t,i,l)}}function Lo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Gt(t,i,f)}}function Ii(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Gt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Gt(t,i,f)}else s.current=null}function ox(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Gt(t,t.return,f)}}function $f(t,i,s){try{var l=t.stateNode;lb(l,t.type,s,i),l[gn]=i}catch(f){Gt(t,t.return,f)}}function lx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&er(t.type)||t.tag===4}function ed(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function td(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ea));else if(l!==4&&(l===27&&er(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(td(t,i,s),t=t.sibling;t!==null;)td(t,i,s),t=t.sibling}function lc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&er(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(lc(t,i,s),t=t.sibling;t!==null;)lc(t,i,s),t=t.sibling}function cx(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Nn(i,l,s),i[fn]=t,i[gn]=s}catch(h){Gt(t,t.return,h)}}var ua=!1,mn=!1,nd=!1,ux=typeof WeakSet=="function"?WeakSet:Set,An=null;function VS(t,i){if(t=t.containerInfo,Md=wc,t=bm(t),Yu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var S=0,A=-1,H=-1,ee=0,ge=0,Se=t,oe=null;t:for(;;){for(var ue;Se!==s||f!==0&&Se.nodeType!==3||(A=S+f),Se!==h||l!==0&&Se.nodeType!==3||(H=S+l),Se.nodeType===3&&(S+=Se.nodeValue.length),(ue=Se.firstChild)!==null;)oe=Se,Se=ue;for(;;){if(Se===t)break t;if(oe===s&&++ee===f&&(A=S),oe===h&&++ge===l&&(H=S),(ue=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=ue}s=A===-1||H===-1?null:{start:A,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ed={focusedElem:t,selectionRange:s},wc=!1,An=i;An!==null;)if(i=An,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,An=t;else for(;An!==null;){switch(i=An,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var We=Nr(s.type,f);t=l.getSnapshotBeforeUpdate(We,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(it){Gt(s,s.return,it)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Rd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,An=t;break}An=i.return}}function fx(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:da(t,s),l&4&&No(5,s);break;case 1:if(da(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(S){Gt(s,s.return,S)}else{var f=Nr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Gt(s,s.return,S)}}l&64&&rx(s),l&512&&Lo(s,s.return);break;case 3:if(da(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Zm(t,i)}catch(S){Gt(s,s.return,S)}}break;case 27:i===null&&l&4&&cx(s);case 26:case 5:da(t,s),i===null&&l&4&&ox(s),l&512&&Lo(s,s.return);break;case 12:da(t,s);break;case 31:da(t,s),l&4&&px(t,s);break;case 13:da(t,s),l&4&&mx(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=KS.bind(null,s),xb(t,s))));break;case 22:if(l=s.memoizedState!==null||ua,!l){i=i!==null&&i.memoizedState!==null||mn,f=ua;var h=mn;ua=l,(mn=i)&&!h?ha(t,s,(s.subtreeFlags&8772)!==0):da(t,s),ua=f,mn=h}break;case 30:break;default:da(t,s)}}function dx(t){var i=t.alternate;i!==null&&(t.alternate=null,dx(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&so(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,jn=!1;function fa(t,i,s){for(s=s.child;s!==null;)hx(t,i,s),s=s.sibling}function hx(t,i,s){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(we,s)}catch{}switch(s.tag){case 26:mn||Ii(s,i),fa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:mn||Ii(s,i);var l=en,f=jn;er(s.type)&&(en=s.stateNode,jn=!1),fa(t,i,s),Go(s.stateNode),en=l,jn=f;break;case 5:mn||Ii(s,i);case 6:if(l=en,f=jn,en=null,fa(t,i,s),en=l,jn=f,en!==null)if(jn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(s.stateNode)}catch(h){Gt(s,i,h)}else try{en.removeChild(s.stateNode)}catch(h){Gt(s,i,h)}break;case 18:en!==null&&(jn?(t=en,rg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Cs(t)):rg(en,s.stateNode));break;case 4:l=en,f=jn,en=s.stateNode.containerInfo,jn=!0,fa(t,i,s),en=l,jn=f;break;case 0:case 11:case 14:case 15:ja(2,s,i),mn||ja(4,s,i),fa(t,i,s);break;case 1:mn||(Ii(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&sx(s,i,l)),fa(t,i,s);break;case 21:fa(t,i,s);break;case 22:mn=(l=mn)||s.memoizedState!==null,fa(t,i,s),mn=l;break;default:fa(t,i,s)}}function px(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Cs(t)}catch(s){Gt(i,i.return,s)}}}function mx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Cs(t)}catch(s){Gt(i,i.return,s)}}function GS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ux),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ux),i;default:throw Error(r(435,t.tag))}}function cc(t,i){var s=GS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=QS.bind(null,t,l);l.then(f,f)}})}function Yn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,S=i,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(er(A.type)){en=A.stateNode,jn=!1;break e}break;case 5:en=A.stateNode,jn=!1;break e;case 3:case 4:en=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(en===null)throw Error(r(160));hx(h,S,f),en=null,jn=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)xx(i,t),i=i.sibling}var Ri=null;function xx(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(i,t),Zn(t),l&4&&(ja(3,t,t.return),No(3,t),ja(5,t,t.return));break;case 1:Yn(i,t),Zn(t),l&512&&(mn||s===null||Ii(s,s.return)),l&64&&ua&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ri;if(Yn(i,t),Zn(t),l&512&&(mn||s===null||Ii(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[_r]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Nn(h,l,s),h[fn]=t,ie(h),l=h;break e;case"link":var S=xg("link","href",f).get(l+(s.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(A,1);break t}}h=f.createElement(l),Nn(h,l,s),f.head.appendChild(h);break;case"meta":if(S=xg("meta","content",f).get(l+(s.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(A,1);break t}}h=f.createElement(l),Nn(h,l,s),f.head.appendChild(h);break;default:throw Error(r(468,l))}h[fn]=t,ie(h),l=h}t.stateNode=l}else gg(f,t.type,t.stateNode);else t.stateNode=mg(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?gg(f,t.type,t.stateNode):mg(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&$f(t,t.memoizedProps,s.memoizedProps)}break;case 27:Yn(i,t),Zn(t),l&512&&(mn||s===null||Ii(s,s.return)),s!==null&&l&4&&$f(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Yn(i,t),Zn(t),l&512&&(mn||s===null||Ii(s,s.return)),t.flags&32){f=t.stateNode;try{Fi(f,"")}catch(We){Gt(t,t.return,We)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,$f(t,f,s!==null?s.memoizedProps:f)),l&1024&&(nd=!0);break;case 6:if(Yn(i,t),Zn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(We){Gt(t,t.return,We)}}break;case 3:if(Tc=null,f=Ri,Ri=Mc(i.containerInfo),Yn(i,t),Ri=f,Zn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Cs(i.containerInfo)}catch(We){Gt(t,t.return,We)}nd&&(nd=!1,gx(t));break;case 4:l=Ri,Ri=Mc(t.stateNode.containerInfo),Yn(i,t),Zn(t),Ri=l;break;case 12:Yn(i,t),Zn(t);break;case 31:Yn(i,t),Zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 13:Yn(i,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(fc=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 22:f=t.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,ee=ua,ge=mn;if(ua=ee||f,mn=ge||H,Yn(i,t),mn=ge,ua=ee,Zn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||ua||mn||Lr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(h=H.stateNode,f)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var Se=H.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;A.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(We){Gt(H,H.return,We)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(We){Gt(H,H.return,We)}}}else if(i.tag===18){if(s===null){H=i;try{var ue=H.stateNode;f?sg(ue,!0):sg(H.stateNode,!1)}catch(We){Gt(H,H.return,We)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,cc(t,s))));break;case 19:Yn(i,t),Zn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 30:break;case 21:break;default:Yn(i,t),Zn(t)}}function Zn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(lx(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,h=ed(t);lc(t,h,f);break;case 5:var S=s.stateNode;s.flags&32&&(Fi(S,""),s.flags&=-33);var A=ed(t);lc(t,A,S);break;case 3:case 4:var H=s.stateNode.containerInfo,ee=ed(t);td(t,ee,H);break;default:throw Error(r(161))}}catch(ge){Gt(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function gx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;gx(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function da(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)fx(t,i.alternate,i),i=i.sibling}function Lr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ja(4,i,i.return),Lr(i);break;case 1:Ii(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&sx(i,i.return,s),Lr(i);break;case 27:Go(i.stateNode);case 26:case 5:Ii(i,i.return),Lr(i);break;case 22:i.memoizedState===null&&Lr(i);break;case 30:Lr(i);break;default:Lr(i)}t=t.sibling}}function ha(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,S=h.flags;switch(h.tag){case 0:case 11:case 15:ha(f,h,s),No(4,h);break;case 1:if(ha(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ee){Gt(l,l.return,ee)}if(l=h,f=l.updateQueue,f!==null){var A=l.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)Ym(H[f],A)}catch(ee){Gt(l,l.return,ee)}}s&&S&64&&rx(h),Lo(h,h.return);break;case 27:cx(h);case 26:case 5:ha(f,h,s),s&&l===null&&S&4&&ox(h),Lo(h,h.return);break;case 12:ha(f,h,s);break;case 31:ha(f,h,s),s&&S&4&&px(f,h);break;case 13:ha(f,h,s),s&&S&4&&mx(f,h);break;case 22:h.memoizedState===null&&ha(f,h,s),Lo(h,h.return);break;case 30:break;default:ha(f,h,s)}i=i.sibling}}function id(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&vo(s))}function ad(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&vo(t))}function Ci(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)_x(t,i,s,l),i=i.sibling}function _x(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ci(t,i,s,l),f&2048&&No(9,i);break;case 1:Ci(t,i,s,l);break;case 3:Ci(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&vo(t)));break;case 12:if(f&2048){Ci(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Gt(i,i.return,H)}}else Ci(t,i,s,l);break;case 31:Ci(t,i,s,l);break;case 13:Ci(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,S=i.alternate,i.memoizedState!==null?h._visibility&2?Ci(t,i,s,l):Oo(t,i):h._visibility&2?Ci(t,i,s,l):(h._visibility|=2,gs(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&id(S,i);break;case 24:Ci(t,i,s,l),f&2048&&ad(i.alternate,i);break;default:Ci(t,i,s,l)}}function gs(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,S=i,A=s,H=l,ee=S.flags;switch(S.tag){case 0:case 11:case 15:gs(h,S,A,H,f),No(8,S);break;case 23:break;case 22:var ge=S.stateNode;S.memoizedState!==null?ge._visibility&2?gs(h,S,A,H,f):Oo(h,S):(ge._visibility|=2,gs(h,S,A,H,f)),f&&ee&2048&&id(S.alternate,S);break;case 24:gs(h,S,A,H,f),f&&ee&2048&&ad(S.alternate,S);break;default:gs(h,S,A,H,f)}i=i.sibling}}function Oo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Oo(s,l),f&2048&&id(l.alternate,l);break;case 24:Oo(s,l),f&2048&&ad(l.alternate,l);break;default:Oo(s,l)}i=i.sibling}}var Po=8192;function _s(t,i,s){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)vx(t,i,s),t=t.sibling}function vx(t,i,s){switch(t.tag){case 26:_s(t,i,s),t.flags&Po&&t.memoizedState!==null&&Cb(s,Ri,t.memoizedState,t.memoizedProps);break;case 5:_s(t,i,s);break;case 3:case 4:var l=Ri;Ri=Mc(t.stateNode.containerInfo),_s(t,i,s),Ri=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Po,Po=16777216,_s(t,i,s),Po=l):_s(t,i,s));break;default:_s(t,i,s)}}function yx(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Fo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];An=l,bx(l,t)}yx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sx(t),t=t.sibling}function Sx(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,uc(t)):Fo(t);break;default:Fo(t)}}function uc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];An=l,bx(l,t)}yx(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ja(8,i,i.return),uc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,uc(i));break;default:uc(i)}t=t.sibling}}function bx(t,i){for(;An!==null;){var s=An;switch(s.tag){case 0:case 11:case 15:ja(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,An=l;else e:for(s=t;An!==null;){l=An;var f=l.sibling,h=l.return;if(dx(l),l===s){An=null;break e}if(f!==null){f.return=h,An=f;break e}An=h}}}var kS={getCacheForType:function(t){var i=Dn(dn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Dn(dn).controller.signal}},XS=typeof WeakMap=="function"?WeakMap:Map,zt=0,Zt=null,vt=null,bt=0,Vt=0,si=null,Ya=!1,vs=!1,rd=!1,pa=0,sn=0,Za=0,Or=0,sd=0,oi=0,ys=0,zo=null,Kn=null,od=!1,fc=0,Mx=0,dc=1/0,hc=null,Ka=null,vn=0,Qa=null,Ss=null,ma=0,ld=0,cd=null,Ex=null,Bo=0,ud=null;function li(){return(zt&2)!==0&&bt!==0?bt&-bt:B.T!==null?xd():La()}function Tx(){if(oi===0)if((bt&536870912)===0||Rt){var t=Me;Me<<=1,(Me&3932160)===0&&(Me=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Qn(t,i,s){(t===Zt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(bs(t,0),Ja(t,bt,oi,!1)),bn(t,s),((zt&2)===0||t!==Zt)&&(t===Zt&&((zt&2)===0&&(Or|=s),sn===4&&Ja(t,bt,oi,!1)),Hi(t))}function Ax(t,i,s){if((zt&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Fe(t,i),f=l?jS(t,i):dd(t,i,!0),h=l;do{if(f===0){vs&&!l&&Ja(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!WS(s)){f=dd(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var A=t;f=zo;var H=A.current.memoizedState.isDehydrated;if(H&&(bs(A,S).flags|=256),S=dd(A,S,!1),S!==2){if(rd&&!H){A.errorRecoveryDisabledLanes|=h,Or|=h,f=4;break e}h=Kn,Kn=f,h!==null&&(Kn===null?Kn=h:Kn.push.apply(Kn,h))}f=S}if(h=!1,f!==2)continue}}if(f===1){bs(t,0),Ja(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ja(l,i,oi,!Ya);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=fc+300-T(),10<f)){if(Ja(l,i,oi,!Ya),_e(l,0,!0)!==0)break e;ma=i,l.timeoutHandle=ig(Rx.bind(null,l,s,Kn,hc,od,i,oi,Or,ys,Ya,h,"Throttled",-0,0),f);break e}Rx(l,s,Kn,hc,od,i,oi,Or,ys,Ya,h,null,-0,0)}}break}while(!0);Hi(t)}function Rx(t,i,s,l,f,h,S,A,H,ee,ge,Se,oe,ue){if(t.timeoutHandle=-1,Se=i.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},vx(i,h,Se);var We=(h&62914560)===h?fc-T():(h&4194048)===h?Mx-T():0;if(We=wb(Se,We),We!==null){ma=h,t.cancelPendingCommit=We(Px.bind(null,t,i,h,s,l,f,S,A,H,ge,Se,null,oe,ue)),Ja(t,h,S,!ee);return}}Px(t,i,h,s,l,f,S,A,H)}function WS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!ni(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ja(t,i,s,l){i&=~sd,i&=~Or,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-ke(f),S=1<<h;l[h]=-1,f&=~S}s!==0&&gr(t,s,i)}function pc(){return(zt&6)===0?(Io(0),!1):!0}function fd(){if(vt!==null){if(Vt===0)var t=vt.return;else t=vt,aa=Tr=null,Rf(t),ds=null,So=0,t=vt;for(;t!==null;)ax(t.alternate,t),t=t.return;vt=null}}function bs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,fb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ma=0,fd(),Zt=t,vt=s=na(t.current,null),bt=i,Vt=0,si=null,Ya=!1,vs=Fe(t,i),rd=!1,ys=oi=sd=Or=Za=sn=0,Kn=zo=null,od=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ke(l),h=1<<f;i|=t[f],l&=~h}return pa=i,Pl(),s}function Cx(t,i){ft=null,B.H=wo,i===fs||i===kl?(i=Xm(),Vt=3):i===mf?(i=Xm(),Vt=4):Vt=i===kf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,vt===null&&(sn=1,ic(t,mi(i,t.current)))}function wx(){var t=ai.current;return t===null?!0:(bt&4194048)===bt?vi===null:(bt&62914560)===bt||(bt&536870912)!==0?t===vi:!1}function Dx(){var t=B.H;return B.H=wo,t===null?wo:t}function Ux(){var t=B.A;return B.A=kS,t}function mc(){sn=4,Ya||(bt&4194048)!==bt&&ai.current!==null||(vs=!0),(Za&134217727)===0&&(Or&134217727)===0||Zt===null||Ja(Zt,bt,oi,!1)}function dd(t,i,s){var l=zt;zt|=2;var f=Dx(),h=Ux();(Zt!==t||bt!==i)&&(hc=null,bs(t,i)),i=!1;var S=sn;e:do try{if(Vt!==0&&vt!==null){var A=vt,H=si;switch(Vt){case 8:fd(),S=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(i=!0);var ee=Vt;if(Vt=0,si=null,Ms(t,A,H,ee),s&&vs){S=0;break e}break;default:ee=Vt,Vt=0,si=null,Ms(t,A,H,ee)}}qS(),S=sn;break}catch(ge){Cx(t,ge)}while(!0);return i&&t.shellSuspendCounter++,aa=Tr=null,zt=l,B.H=f,B.A=h,vt===null&&(Zt=null,bt=0,Pl()),S}function qS(){for(;vt!==null;)Nx(vt)}function jS(t,i){var s=zt;zt|=2;var l=Dx(),f=Ux();Zt!==t||bt!==i?(hc=null,dc=T()+500,bs(t,i)):vs=Fe(t,i);e:do try{if(Vt!==0&&vt!==null){i=vt;var h=si;t:switch(Vt){case 1:Vt=0,si=null,Ms(t,i,h,1);break;case 2:case 9:if(Gm(h)){Vt=0,si=null,Lx(i);break}i=function(){Vt!==2&&Vt!==9||Zt!==t||(Vt=7),Hi(t)},h.then(i,i);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Gm(h)?(Vt=0,si=null,Lx(i)):(Vt=0,si=null,Ms(t,i,h,7));break;case 5:var S=null;switch(vt.tag){case 26:S=vt.memoizedState;case 5:case 27:var A=vt;if(S?_g(S):A.stateNode.complete){Vt=0,si=null;var H=A.sibling;if(H!==null)vt=H;else{var ee=A.return;ee!==null?(vt=ee,xc(ee)):vt=null}break t}}Vt=0,si=null,Ms(t,i,h,5);break;case 6:Vt=0,si=null,Ms(t,i,h,6);break;case 8:fd(),sn=6;break e;default:throw Error(r(462))}}YS();break}catch(ge){Cx(t,ge)}while(!0);return aa=Tr=null,B.H=l,B.A=f,zt=s,vt!==null?0:(Zt=null,bt=0,Pl(),sn)}function YS(){for(;vt!==null&&!st();)Nx(vt)}function Nx(t){var i=nx(t.alternate,t,pa);t.memoizedProps=t.pendingProps,i===null?xc(t):vt=i}function Lx(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=K0(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=K0(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:Rf(i);default:ax(s,i),i=vt=Um(i,pa),i=nx(s,i,pa)}t.memoizedProps=t.pendingProps,i===null?xc(t):vt=i}function Ms(t,i,s,l){aa=Tr=null,Rf(i),ds=null,So=0;var f=i.return;try{if(FS(t,f,i,s,bt)){sn=1,ic(t,mi(s,t.current)),vt=null;return}}catch(h){if(f!==null)throw vt=f,h;sn=1,ic(t,mi(s,t.current)),vt=null;return}i.flags&32768?(Rt||l===1?t=!0:vs||(bt&536870912)!==0?t=!1:(Ya=t=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ox(i,t)):xc(i)}function xc(t){var i=t;do{if((i.flags&32768)!==0){Ox(i,Ya);return}t=i.return;var s=IS(i.alternate,i,pa);if(s!==null){vt=s;return}if(i=i.sibling,i!==null){vt=i;return}vt=i=t}while(i!==null);sn===0&&(sn=5)}function Ox(t,i){do{var s=HS(t.alternate,t);if(s!==null){s.flags&=32767,vt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){vt=t;return}vt=t=s}while(t!==null);sn=6,vt=null}function Px(t,i,s,l,f,h,S,A,H){t.cancelPendingCommit=null;do gc();while(vn!==0);if((zt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(h=i.lanes|i.childLanes,h|=$u,Hn(t,s,h,S,A,H),t===Zt&&(vt=Zt=null,bt=0),Ss=i,Qa=t,ma=s,ld=h,cd=f,Ex=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,JS(de,function(){return Hx(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=K.p,K.p=2,S=zt,zt|=4;try{VS(t,i,s)}finally{zt=S,K.p=f,B.T=l}}vn=1,Fx(),zx(),Bx()}}function Fx(){if(vn===1){vn=0;var t=Qa,i=Ss,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=K.p;K.p=2;var f=zt;zt|=4;try{xx(i,t);var h=Ed,S=bm(t.containerInfo),A=h.focusedElem,H=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&Sm(A.ownerDocument.documentElement,A)){if(H!==null&&Yu(A)){var ee=H.start,ge=H.end;if(ge===void 0&&(ge=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(ge,A.value.length);else{var Se=A.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var ue=oe.getSelection(),We=A.textContent.length,it=Math.min(H.start,We),Wt=H.end===void 0?it:Math.min(H.end,We);!ue.extend&&it>Wt&&(S=Wt,Wt=it,it=S);var Y=ym(A,it),k=ym(A,Wt);if(Y&&k&&(ue.rangeCount!==1||ue.anchorNode!==Y.node||ue.anchorOffset!==Y.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var $=Se.createRange();$.setStart(Y.node,Y.offset),ue.removeAllRanges(),it>Wt?(ue.addRange($),ue.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ue.addRange($))}}}}for(Se=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&Se.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Se.length;A++){var ye=Se[A];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}wc=!!Md,Ed=Md=null}finally{zt=f,K.p=l,B.T=s}}t.current=i,vn=2}}function zx(){if(vn===2){vn=0;var t=Qa,i=Ss,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=K.p;K.p=2;var f=zt;zt|=4;try{fx(t,i.alternate,i)}finally{zt=f,K.p=l,B.T=s}}vn=3}}function Bx(){if(vn===4||vn===3){vn=0,L();var t=Qa,i=Ss,s=ma,l=Ex;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?vn=5:(vn=0,Ss=Qa=null,Ix(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ka=null),Pi(s),i=i.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(we,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=K.p,K.p=2,B.T=null;try{for(var h=t.onRecoverableError,S=0;S<l.length;S++){var A=l[S];h(A.value,{componentStack:A.stack})}}finally{B.T=i,K.p=f}}(ma&3)!==0&&gc(),Hi(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===ud?Bo++:(Bo=0,ud=t):Bo=0,Io(0)}}function Ix(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,vo(i)))}function gc(){return Fx(),zx(),Bx(),Hx()}function Hx(){if(vn!==5)return!1;var t=Qa,i=ld;ld=0;var s=Pi(ma),l=B.T,f=K.p;try{K.p=32>s?32:s,B.T=null,s=cd,cd=null;var h=Qa,S=ma;if(vn=0,Ss=Qa=null,ma=0,(zt&6)!==0)throw Error(r(331));var A=zt;if(zt|=4,Sx(h.current),_x(h,h.current,S,s),zt=A,Io(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(we,h)}catch{}return!0}finally{K.p=f,B.T=l,Ix(t,i)}}function Vx(t,i,s){i=mi(s,i),i=Gf(t.stateNode,i,2),t=Xa(t,i,2),t!==null&&(bn(t,2),Hi(t))}function Gt(t,i,s){if(t.tag===3)Vx(t,t,s);else for(;i!==null;){if(i.tag===3){Vx(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ka===null||!Ka.has(l))){t=mi(s,t),s=G0(2),l=Xa(i,s,2),l!==null&&(k0(s,l,i,t),bn(l,2),Hi(l));break}}i=i.return}}function hd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new XS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(rd=!0,f.add(s),t=ZS.bind(null,t,i,s),i.then(t,t))}function ZS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Zt===t&&(bt&s)===s&&(sn===4||sn===3&&(bt&62914560)===bt&&300>T()-fc?(zt&2)===0&&bs(t,0):sd|=s,ys===bt&&(ys=0)),Hi(t)}function Gx(t,i){i===0&&(i=It()),t=br(t,i),t!==null&&(bn(t,i),Hi(t))}function KS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Gx(t,s)}function QS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),Gx(t,s)}function JS(t,i){return Bt(t,i)}var _c=null,Es=null,pd=!1,vc=!1,md=!1,$a=0;function Hi(t){t!==Es&&t.next===null&&(Es===null?_c=Es=t:Es=Es.next=t),vc=!0,pd||(pd=!0,eb())}function Io(t,i){if(!md&&vc){md=!0;do for(var s=!1,l=_c;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var S=l.suspendedLanes,A=l.pingedLanes;h=(1<<31-ke(42|t)+1)-1,h&=f&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,qx(l,h))}else h=bt,h=_e(l,l===Zt?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Fe(l,h)||(s=!0,qx(l,h));l=l.next}while(s);md=!1}}function $S(){kx()}function kx(){vc=pd=!1;var t=0;$a!==0&&ub()&&(t=$a);for(var i=T(),s=null,l=_c;l!==null;){var f=l.next,h=Xx(l,i);h===0?(l.next=null,s===null?_c=f:s.next=f,f===null&&(Es=s)):(s=l,(t!==0||(h&3)!==0)&&(vc=!0)),l=f}vn!==0&&vn!==5||Io(t),$a!==0&&($a=0)}function Xx(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-ke(h),A=1<<S,H=f[S];H===-1?((A&s)===0||(A&l)!==0)&&(f[S]=at(A,i)):H<=i&&(t.expiredLanes|=A),h&=~A}if(i=Zt,s=bt,s=_e(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Qe(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Fe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Qe(l),Pi(s)){case 2:case 8:s=Re;break;case 32:s=de;break;case 268435456:s=Oe;break;default:s=de}return l=Wx.bind(null,t),s=Bt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Qe(l),t.callbackPriority=2,t.callbackNode=null,2}function Wx(t,i){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(gc()&&t.callbackNode!==s)return null;var l=bt;return l=_e(t,t===Zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ax(t,l,i),Xx(t,T()),t.callbackNode!=null&&t.callbackNode===s?Wx.bind(null,t):null)}function qx(t,i){if(gc())return null;Ax(t,i,!0)}function eb(){db(function(){(zt&6)!==0?Bt(ve,$S):kx()})}function xd(){if($a===0){var t=cs;t===0&&(t=xe,xe<<=1,(xe&261888)===0&&(xe=256)),$a=t}return $a}function jx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rl(""+t)}function Yx(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function tb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=jx((f[gn]||null).action),S=l.submitter;S&&(i=(i=S[gn]||null)?jx(i.formAction):S.getAttribute("formAction"),i!==null&&(h=i,S=null));var A=new Ul("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($a!==0){var H=S?Yx(f,S):new FormData(f);Ff(s,{pending:!0,data:H,method:f.method,action:h},null,H)}}else typeof h=="function"&&(A.preventDefault(),H=S?Yx(f,S):new FormData(f),Ff(s,{pending:!0,data:H,method:f.method,action:h},h,H))},currentTarget:f}]})}}for(var gd=0;gd<Ju.length;gd++){var _d=Ju[gd],nb=_d.toLowerCase(),ib=_d[0].toUpperCase()+_d.slice(1);Ai(nb,"on"+ib)}Ai(Tm,"onAnimationEnd"),Ai(Am,"onAnimationIteration"),Ai(Rm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(vS,"onTransitionRun"),Ai(yS,"onTransitionStart"),Ai(SS,"onTransitionCancel"),Ai(Cm,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Zx(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var S=l.length-1;0<=S;S--){var A=l[S],H=A.instance,ee=A.currentTarget;if(A=A.listener,H!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=ee;try{h(f)}catch(ge){Ol(ge)}f.currentTarget=null,h=H}else for(S=0;S<l.length;S++){if(A=l[S],H=A.instance,ee=A.currentTarget,A=A.listener,H!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=ee;try{h(f)}catch(ge){Ol(ge)}f.currentTarget=null,h=H}}}}function yt(t,i){var s=i[Qr];s===void 0&&(s=i[Qr]=new Set);var l=t+"__bubble";s.has(l)||(Kx(i,t,2,!1),s.add(l))}function vd(t,i,s){var l=0;i&&(l|=4),Kx(s,t,l,i)}var yc="_reactListening"+Math.random().toString(36).slice(2);function yd(t){if(!t[yc]){t[yc]=!0,Q.forEach(function(s){s!=="selectionchange"&&(ab.has(s)||vd(s,!1,t),vd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[yc]||(i[yc]=!0,vd("selectionchange",!1,i))}}function Kx(t,i,s,l){switch(Tg(i)){case 2:var f=Nb;break;case 8:f=Lb;break;default:f=Pd}s=f.bind(null,i,s,t),f=void 0,!Iu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Sd(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===f)break;if(S===4)for(S=l.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;A!==null;){if(S=Pa(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){l=h=S;continue e}A=A.parentNode}}l=l.return}tm(function(){var ee=h,ge=zu(s),Se=[];e:{var oe=wm.get(t);if(oe!==void 0){var ue=Ul,We=t;switch(t){case"keypress":if(wl(s)===0)break e;case"keydown":case"keyup":ue=Qy;break;case"focusin":We="focus",ue=ku;break;case"focusout":We="blur",ue=ku;break;case"beforeblur":case"afterblur":ue=ku;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=eS;break;case Tm:case Am:case Rm:ue=Gy;break;case Cm:ue=nS;break;case"scroll":case"scrollend":ue=zy;break;case"wheel":ue=aS;break;case"copy":case"cut":case"paste":ue=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=sm;break;case"toggle":case"beforetoggle":ue=sS}var it=(i&4)!==0,Wt=!it&&(t==="scroll"||t==="scrollend"),Y=it?oe!==null?oe+"Capture":null:oe;it=[];for(var k=ee,$;k!==null;){var ye=k;if($=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||$===null||Y===null||(ye=oo(k,Y),ye!=null&&it.push(Vo(k,ye,$))),Wt)break;k=k.return}0<it.length&&(oe=new ue(oe,We,null,s,ge),Se.push({event:oe,listeners:it}))}}if((i&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",oe&&s!==Fu&&(We=s.relatedTarget||s.fromElement)&&(Pa(We)||We[Qi]))break e;if((ue||oe)&&(oe=ge.window===ge?ge:(oe=ge.ownerDocument)?oe.defaultView||oe.parentWindow:window,ue?(We=s.relatedTarget||s.toElement,ue=ee,We=We?Pa(We):null,We!==null&&(Wt=c(We),it=We.tag,We!==Wt||it!==5&&it!==27&&it!==6)&&(We=null)):(ue=null,We=ee),ue!==We)){if(it=am,ye="onMouseLeave",Y="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(it=sm,ye="onPointerLeave",Y="onPointerEnter",k="pointer"),Wt=ue==null?oe:j(ue),$=We==null?oe:j(We),oe=new it(ye,k+"leave",ue,s,ge),oe.target=Wt,oe.relatedTarget=$,ye=null,Pa(ge)===ee&&(it=new it(Y,k+"enter",We,s,ge),it.target=$,it.relatedTarget=Wt,ye=it),Wt=ye,ue&&We)t:{for(it=rb,Y=ue,k=We,$=0,ye=Y;ye;ye=it(ye))$++;ye=0;for(var $e=k;$e;$e=it($e))ye++;for(;0<$-ye;)Y=it(Y),$--;for(;0<ye-$;)k=it(k),ye--;for(;$--;){if(Y===k||k!==null&&Y===k.alternate){it=Y;break t}Y=it(Y),k=it(k)}it=null}else it=null;ue!==null&&Qx(Se,oe,ue,it,!1),We!==null&&Wt!==null&&Qx(Se,Wt,We,it,!0)}}e:{if(oe=ee?j(ee):window,ue=oe.nodeName&&oe.nodeName.toLowerCase(),ue==="select"||ue==="input"&&oe.type==="file")var Lt=pm;else if(dm(oe))if(mm)Lt=xS;else{Lt=pS;var Ze=hS}else ue=oe.nodeName,!ue||ue.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ee&&Pu(ee.elementType)&&(Lt=pm):Lt=mS;if(Lt&&(Lt=Lt(t,ee))){hm(Se,Lt,s,ge);break e}Ze&&Ze(t,oe,ee),t==="focusout"&&ee&&oe.type==="number"&&ee.memoizedProps.value!=null&&En(oe,"number",oe.value)}switch(Ze=ee?j(ee):window,t){case"focusin":(dm(Ze)||Ze.contentEditable==="true")&&(ts=Ze,Zu=ee,xo=null);break;case"focusout":xo=Zu=ts=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Mm(Se,s,ge);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":Mm(Se,s,ge)}var xt;if(Wu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else es?um(t,s)&&(Mt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Mt="onCompositionStart");Mt&&(om&&s.locale!=="ko"&&(es||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&es&&(xt=nm()):(za=ge,Hu="value"in za?za.value:za.textContent,es=!0)),Ze=Sc(ee,Mt),0<Ze.length&&(Mt=new rm(Mt,t,null,s,ge),Se.push({event:Mt,listeners:Ze}),xt?Mt.data=xt:(xt=fm(s),xt!==null&&(Mt.data=xt)))),(xt=lS?cS(t,s):uS(t,s))&&(Mt=Sc(ee,"onBeforeInput"),0<Mt.length&&(Ze=new rm("onBeforeInput","beforeinput",null,s,ge),Se.push({event:Ze,listeners:Mt}),Ze.data=xt)),tb(Se,t,ee,s,ge)}Zx(Se,i)})}function Vo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Sc(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=oo(t,s),f!=null&&l.unshift(Vo(t,f,h)),f=oo(t,i),f!=null&&l.push(Vo(t,f,h))),t.tag===3)return l;t=t.return}return[]}function rb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qx(t,i,s,l,f){for(var h=i._reactName,S=[];s!==null&&s!==l;){var A=s,H=A.alternate,ee=A.stateNode;if(A=A.tag,H!==null&&H===l)break;A!==5&&A!==26&&A!==27||ee===null||(H=ee,f?(ee=oo(s,h),ee!=null&&S.unshift(Vo(s,ee,H))):f||(ee=oo(s,h),ee!=null&&S.push(Vo(s,ee,H)))),s=s.return}S.length!==0&&t.push({event:i,listeners:S})}var sb=/\r\n?/g,ob=/\u0000|\uFFFD/g;function Jx(t){return(typeof t=="string"?t:""+t).replace(sb,`
`).replace(ob,"")}function $x(t,i){return i=Jx(i),Jx(t)===i}function Xt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Fi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Fi(t,""+l);break;case"className":Ut(t,"class",l);break;case"tabIndex":Ut(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(t,s,l);break;case"style":$p(t,l,h);break;case"data":if(i!=="object"){Ut(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Rl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Xt(t,i,"name",f.name,f,null),Xt(t,i,"formEncType",f.formEncType,f,null),Xt(t,i,"formMethod",f.formMethod,f,null),Xt(t,i,"formTarget",f.formTarget,f,null)):(Xt(t,i,"encType",f.encType,f,null),Xt(t,i,"method",f.method,f,null),Xt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Rl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ea);break;case"onScroll":l!=null&&yt("scroll",t);break;case"onScrollEnd":l!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Rl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":yt("beforetoggle",t),yt("toggle",t),mt(t,"popover",l);break;case"xlinkActuate":Nt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Py.get(s)||s,mt(t,s,l))}}function bd(t,i,s,l,f,h){switch(s){case"style":$p(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Fi(t,l):(typeof l=="number"||typeof l=="bigint")&&Fi(t,""+l);break;case"onScroll":l!=null&&yt("scroll",t);break;case"onScrollEnd":l!=null&&yt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Le.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[gn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):mt(t,s,l)}}}function Nn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var S=s[h];if(S!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Xt(t,i,h,S,s,null)}}f&&Xt(t,i,"srcSet",s.srcSet,s,null),l&&Xt(t,i,"src",s.src,s,null);return;case"input":yt("invalid",t);var A=h=S=f=null,H=null,ee=null;for(l in s)if(s.hasOwnProperty(l)){var ge=s[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":S=ge;break;case"checked":H=ge;break;case"defaultChecked":ee=ge;break;case"value":h=ge;break;case"defaultValue":A=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,i));break;default:Xt(t,i,l,ge,s,null)}}Qt(t,h,A,H,ee,S,f,!1);return;case"select":yt("invalid",t),l=S=h=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:Xt(t,i,f,A,s,null)}i=h,s=S,t.multiple=!!l,i!=null?_n(t,!!l,i,!1):s!=null&&_n(t,!!l,s,!0);return;case"textarea":yt("invalid",t),h=f=l=null;for(S in s)if(s.hasOwnProperty(S)&&(A=s[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":f=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Xt(t,i,S,A,s,null)}Cn(t,l,f,h);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(l=s[H],l!=null))switch(H){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(t,i,H,l,s,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(l=0;l<Ho.length;l++)yt(Ho[l],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in s)if(s.hasOwnProperty(ee)&&(l=s[ee],l!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Xt(t,i,ee,l,s,null)}return;default:if(Pu(i)){for(ge in s)s.hasOwnProperty(ge)&&(l=s[ge],l!==void 0&&bd(t,i,ge,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Xt(t,i,A,l,s,null))}function lb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,S=null,A=null,H=null,ee=null,ge=null;for(ue in s){var Se=s[ue];if(s.hasOwnProperty(ue)&&Se!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":H=Se;default:l.hasOwnProperty(ue)||Xt(t,i,ue,null,l,Se)}}for(var oe in l){var ue=l[oe];if(Se=s[oe],l.hasOwnProperty(oe)&&(ue!=null||Se!=null))switch(oe){case"type":h=ue;break;case"name":f=ue;break;case"checked":ee=ue;break;case"defaultChecked":ge=ue;break;case"value":S=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,i));break;default:ue!==Se&&Xt(t,i,oe,ue,l,Se)}}Ji(t,S,A,H,ee,ge,h,f);return;case"select":ue=S=A=oe=null;for(h in s)if(H=s[h],s.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ue=H;default:l.hasOwnProperty(h)||Xt(t,i,h,null,l,H)}for(f in l)if(h=l[f],H=s[f],l.hasOwnProperty(f)&&(h!=null||H!=null))switch(f){case"value":oe=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==H&&Xt(t,i,f,h,l,H)}i=A,s=S,l=ue,oe!=null?_n(t,!!s,oe,!1):!!l!=!!s&&(i!=null?_n(t,!!s,i,!0):_n(t,!!s,s?[]:"",!1));return;case"textarea":ue=oe=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(t,i,A,null,l,f)}for(S in l)if(f=l[S],h=s[S],l.hasOwnProperty(S)&&(f!=null||h!=null))switch(S){case"value":oe=f;break;case"defaultValue":ue=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==h&&Xt(t,i,S,f,l,h)}Tn(t,oe,ue);return;case"option":for(var We in s)if(oe=s[We],s.hasOwnProperty(We)&&oe!=null&&!l.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Xt(t,i,We,null,l,oe)}for(H in l)if(oe=l[H],ue=s[H],l.hasOwnProperty(H)&&oe!==ue&&(oe!=null||ue!=null))switch(H){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Xt(t,i,H,oe,l,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)oe=s[it],s.hasOwnProperty(it)&&oe!=null&&!l.hasOwnProperty(it)&&Xt(t,i,it,null,l,oe);for(ee in l)if(oe=l[ee],ue=s[ee],l.hasOwnProperty(ee)&&oe!==ue&&(oe!=null||ue!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,i));break;default:Xt(t,i,ee,oe,l,ue)}return;default:if(Pu(i)){for(var Wt in s)oe=s[Wt],s.hasOwnProperty(Wt)&&oe!==void 0&&!l.hasOwnProperty(Wt)&&bd(t,i,Wt,void 0,l,oe);for(ge in l)oe=l[ge],ue=s[ge],!l.hasOwnProperty(ge)||oe===ue||oe===void 0&&ue===void 0||bd(t,i,ge,oe,l,ue);return}}for(var Y in s)oe=s[Y],s.hasOwnProperty(Y)&&oe!=null&&!l.hasOwnProperty(Y)&&Xt(t,i,Y,null,l,oe);for(Se in l)oe=l[Se],ue=s[Se],!l.hasOwnProperty(Se)||oe===ue||oe==null&&ue==null||Xt(t,i,Se,oe,l,ue)}function eg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,S=f.initiatorType,A=f.duration;if(h&&A&&eg(S)){for(S=0,A=f.responseEnd,l+=1;l<s.length;l++){var H=s[l],ee=H.startTime;if(ee>A)break;var ge=H.transferSize,Se=H.initiatorType;ge&&eg(Se)&&(H=H.responseEnd,S+=ge*(H<A?1:(A-ee)/(H-ee)))}if(--l,i+=8*(h+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Md=null,Ed=null;function bc(t){return t.nodeType===9?t:t.ownerDocument}function tg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ng(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Td(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ad=null;function ub(){var t=window.event;return t&&t.type==="popstate"?t===Ad?!1:(Ad=t,!0):(Ad=null,!1)}var ig=typeof setTimeout=="function"?setTimeout:void 0,fb=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,db=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(hb)}:ig;function hb(t){setTimeout(function(){throw t})}function er(t){return t==="head"}function rg(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Cs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Go(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Go(s);for(var h=s.firstChild;h;){var S=h.nextSibling,A=h.nodeName;h[_r]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=S}}else s==="body"&&Go(t.ownerDocument.body);s=f}while(s);Cs(i)}function sg(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Rd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Rd(s),so(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function pb(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[_r])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function mb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=yi(t.nextSibling),t===null))return null;return t}function og(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=yi(t.nextSibling),t===null))return null;return t}function Cd(t){return t.data==="$?"||t.data==="$~"}function wd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function xb(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Dd=null;function lg(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return yi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function cg(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function ug(t,i,s){switch(i=bc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Go(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);so(t)}var Si=new Map,fg=new Set;function Mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=K.d;K.d={f:gb,r:_b,D:vb,C:yb,L:Sb,m:bb,X:Eb,S:Mb,M:Tb};function gb(){var t=xa.f(),i=pc();return t||i}function _b(t){var i=R(t);i!==null&&i.tag===5&&i.type==="form"?C0(i):xa.r(t)}var Ts=typeof document>"u"?null:document;function dg(t,i,s){var l=Ts;if(l&&typeof i=="string"&&i){var f=Kt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),fg.has(f)||(fg.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Nn(i,"link",t),ie(i),l.head.appendChild(i)))}}function vb(t){xa.D(t),dg("dns-prefetch",t,null)}function yb(t,i){xa.C(t,i),dg("preconnect",t,i)}function Sb(t,i,s){xa.L(t,i,s);var l=Ts;if(l&&t&&i){var f='link[rel="preload"][as="'+Kt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Kt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Kt(s.imageSizes)+'"]')):f+='[href="'+Kt(t)+'"]';var h=f;switch(i){case"style":h=As(t);break;case"script":h=Rs(t)}Si.has(h)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Si.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(ko(h))||i==="script"&&l.querySelector(Xo(h))||(i=l.createElement("link"),Nn(i,"link",t),ie(i),l.head.appendChild(i)))}}function bb(t,i){xa.m(t,i);var s=Ts;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Kt(l)+'"][href="'+Kt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Rs(t)}if(!Si.has(h)&&(t=g({rel:"modulepreload",href:t},i),Si.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xo(h)))return}l=s.createElement("link"),Nn(l,"link",t),ie(l),s.head.appendChild(l)}}}function Mb(t,i,s){xa.S(t,i,s);var l=Ts;if(l&&t){var f=le(l).hoistableStyles,h=As(t);i=i||"default";var S=f.get(h);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(ko(h)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Si.get(h))&&Ud(t,s);var H=S=l.createElement("link");ie(H),Nn(H,"link",t),H._p=new Promise(function(ee,ge){H.onload=ee,H.onerror=ge}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ec(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:A},f.set(h,S)}}}function Eb(t,i){xa.X(t,i);var s=Ts;if(s&&t){var l=le(s).hoistableScripts,f=Rs(t),h=l.get(f);h||(h=s.querySelector(Xo(f)),h||(t=g({src:t,async:!0},i),(i=Si.get(f))&&Nd(t,i),h=s.createElement("script"),ie(h),Nn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function Tb(t,i){xa.M(t,i);var s=Ts;if(s&&t){var l=le(s).hoistableScripts,f=Rs(t),h=l.get(f);h||(h=s.querySelector(Xo(f)),h||(t=g({src:t,async:!0,type:"module"},i),(i=Si.get(f))&&Nd(t,i),h=s.createElement("script"),ie(h),Nn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function hg(t,i,s,l){var f=(f=re.current)?Mc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=As(s.href),s=le(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=As(s.href);var h=le(f).hoistableStyles,S=h.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=f.querySelector(ko(t)))&&!h._p&&(S.instance=h,S.state.loading=5),Si.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Si.set(t,s),h||Ab(f,t,s,S.state))),i&&l===null)throw Error(r(528,""));return S}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Rs(s),s=le(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function As(t){return'href="'+Kt(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function pg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ab(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Nn(i,"link",s),ie(i),t.head.appendChild(i))}function Rs(t){return'[src="'+Kt(t)+'"]'}function Xo(t){return"script[async]"+t}function mg(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Kt(s.href)+'"]');if(l)return i.instance=l,ie(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ie(l),Nn(l,"style",f),Ec(l,s.precedence,t),i.instance=l;case"stylesheet":f=As(s.href);var h=t.querySelector(ko(f));if(h)return i.state.loading|=4,i.instance=h,ie(h),h;l=pg(s),(f=Si.get(f))&&Ud(l,f),h=(t.ownerDocument||t).createElement("link"),ie(h);var S=h;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Nn(h,"link",l),i.state.loading|=4,Ec(h,s.precedence,t),i.instance=h;case"script":return h=Rs(s.src),(f=t.querySelector(Xo(h)))?(i.instance=f,ie(f),f):(l=s,(f=Si.get(h))&&(l=g({},s),Nd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),ie(f),Nn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ec(l,s.precedence,t));return i.instance}function Ec(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===i)h=A;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Ud(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Nd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Tc=null;function xg(t,i,s){if(Tc===null){var l=new Map,f=Tc=new Map;f.set(s,l)}else f=Tc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[_r]||h[fn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(i)||"";S=t+S;var A=l.get(S);A?A.push(h):l.set(S,[h])}}return l}function gg(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Rb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function _g(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Cb(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=As(l.href),h=i.querySelector(ko(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Ac.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,ie(h);return}h=i.ownerDocument||i,l=pg(l),(f=Si.get(f))&&Ud(l,f),h=h.createElement("link"),ie(h);var S=h;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Nn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Ac.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Ld=0;function wb(t,i){return t.stylesheets&&t.count===0&&Cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Ld===0&&(Ld=62500*cb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Ld?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rc=null;function Cc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rc=new Map,i.forEach(Db,t),Rc=null,Ac.call(t))}function Db(t,i){if(!(i.state.loading&4)){var s=Rc.get(t);if(s)var l=s.get(null);else{s=new Map,Rc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var S=f[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),l=S)}l&&s.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),h=s.get(S)||l,h===l&&s.set(null,f),s.set(S,f),this.count++,l=Ac.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Wo={$$typeof:D,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Ub(t,i,s,l,f,h,S,A,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=St(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=St(0),this.hiddenUpdates=St(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function vg(t,i,s,l,f,h,S,A,H,ee,ge,Se){return t=new Ub(t,i,s,S,H,ee,ge,Se,A),i=1,h===!0&&(i|=24),h=ii(3,null,null,i),t.current=h,h.stateNode=t,i=df(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},xf(h),t}function yg(t){return t?(t=as,t):as}function Sg(t,i,s,l,f,h){f=yg(f),l.context===null?l.context=f:l.pendingContext=f,l=ka(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=Xa(t,l,i),s!==null&&(Qn(s,t,i),Mo(s,t,i))}function bg(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Od(t,i){bg(t,i),(t=t.alternate)&&bg(t,i)}function Mg(t){if(t.tag===13||t.tag===31){var i=br(t,67108864);i!==null&&Qn(i,t,67108864),Od(t,67108864)}}function Eg(t){if(t.tag===13||t.tag===31){var i=li();i=Vn(i);var s=br(t,i);s!==null&&Qn(s,t,i),Od(t,i)}}var wc=!0;function Nb(t,i,s,l){var f=B.T;B.T=null;var h=K.p;try{K.p=2,Pd(t,i,s,l)}finally{K.p=h,B.T=f}}function Lb(t,i,s,l){var f=B.T;B.T=null;var h=K.p;try{K.p=8,Pd(t,i,s,l)}finally{K.p=h,B.T=f}}function Pd(t,i,s,l){if(wc){var f=Fd(l);if(f===null)Sd(t,i,l,Dc,s),Ag(t,l);else if(Pb(f,t,i,s,l))l.stopPropagation();else if(Ag(t,l),i&4&&-1<Ob.indexOf(t)){for(;f!==null;){var h=R(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ee(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-ke(S);A.entanglements[1]|=H,S&=~H}Hi(h),(zt&6)===0&&(dc=T()+500,Io(0))}}break;case 31:case 13:A=br(h,2),A!==null&&Qn(A,h,2),pc(),Od(h,2)}if(h=Fd(l),h===null&&Sd(t,i,l,Dc,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Sd(t,i,l,null,s)}}function Fd(t){return t=zu(t),zd(t)}var Dc=null;function zd(t){if(Dc=null,t=Pa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Dc=t,null}function Tg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case ve:return 2;case Re:return 8;case de:case je:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Bd=!1,tr=null,nr=null,ir=null,qo=new Map,jo=new Map,ar=[],Ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ag(t,i){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(i.pointerId)}}function Yo(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=R(i),i!==null&&Mg(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Pb(t,i,s,l,f){switch(i){case"focusin":return tr=Yo(tr,t,i,s,l,f),!0;case"dragenter":return nr=Yo(nr,t,i,s,l,f),!0;case"mouseover":return ir=Yo(ir,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return qo.set(h,Yo(qo.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,jo.set(h,Yo(jo.get(h)||null,t,i,s,l,f)),!0}return!1}function Rg(t){var i=Pa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Oa(t.priority,function(){Eg(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Oa(t.priority,function(){Eg(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Fd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Fu=l,s.target.dispatchEvent(l),Fu=null}else return i=R(s),i!==null&&Mg(i),t.blockedOn=s,!1;i.shift()}return!0}function Cg(t,i,s){Uc(t)&&s.delete(i)}function Fb(){Bd=!1,tr!==null&&Uc(tr)&&(tr=null),nr!==null&&Uc(nr)&&(nr=null),ir!==null&&Uc(ir)&&(ir=null),qo.forEach(Cg),jo.forEach(Cg)}function Nc(t,i){t.blockedOn===i&&(t.blockedOn=null,Bd||(Bd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Fb)))}var Lc=null;function wg(t){Lc!==t&&(Lc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Lc===t&&(Lc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(zd(l||s)===null)continue;break}var h=R(s);h!==null&&(t.splice(i,3),i-=3,Ff(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Cs(t){function i(H){return Nc(H,t)}tr!==null&&Nc(tr,t),nr!==null&&Nc(nr,t),ir!==null&&Nc(ir,t),qo.forEach(i),jo.forEach(i);for(var s=0;s<ar.length;s++){var l=ar[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ar.length&&(s=ar[0],s.blockedOn===null);)Rg(s),s.blockedOn===null&&ar.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],S=f[gn]||null;if(typeof h=="function")S||wg(s);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(f=h,S=h[gn]||null)A=S.formAction;else if(zd(f)!==null)continue}else A=S.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),wg(s)}}}function Dg(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Id(t){this._internalRoot=t}Oc.prototype.render=Id.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=li();Sg(s,l,t,i,null,null)},Oc.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Sg(t.current,2,null,t,null,null),pc(),i[Qi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var i=La();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ar.length&&i!==0&&i<ar[s].priority;s++);ar.splice(s,0,t),s===0&&Rg(t)}};var Ug=e.version;if(Ug!=="19.2.0")throw Error(r(527,Ug,"19.2.0"));K.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var zb={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{we=Pc.inject(zb),Ue=Pc}catch{}}return Ko.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=B0,h=I0,S=H0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=vg(t,1,!1,null,null,s,l,null,f,h,S,Dg),t[Qi]=i.current,yd(t),new Id(i)},Ko.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",h=B0,S=I0,A=H0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=vg(t,1,!0,i,s??null,l,f,H,h,S,A,Dg),i.context=yg(null),s=i.current,l=li(),l=Vn(l),f=ka(l),f.callback=null,Xa(s,f,l),s=l,i.current.lanes=s,bn(i,s),Hi(i),t[Qi]=i.current,yd(t),new Oc(i)},Ko.version="19.2.0",Ko}var Vg;function Zb(){if(Vg)return Gd.exports;Vg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Gd.exports=Yb(),Gd.exports}var Kb=Zb();var Gg="popstate";function Qb(a={}){function e(r,o){let{pathname:c,search:u,hash:d}=r.location;return wh("",{pathname:c,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:cl(o)}return $b(e,n,null,a)}function an(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Wi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Jb(){return Math.random().toString(36).substring(2,10)}function kg(a,e){return{usr:a.state,key:a.key,idx:e}}function wh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Js(e):e,state:n,key:e&&e.key||r||Jb()}}function cl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Js(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function $b(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,d="POP",m=null,p=x();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function x(){return(u.state||{idx:null}).idx}function g(){d="POP";let y=x(),_=y==null?null:y-p;p=y,m&&m({action:d,location:E.location,delta:_})}function v(y,_){d="PUSH";let U=wh(E.location,y,_);p=x()+1;let D=kg(U,p),P=E.createHref(U);try{u.pushState(D,"",P)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(P)}c&&m&&m({action:d,location:E.location,delta:1})}function b(y,_){d="REPLACE";let U=wh(E.location,y,_);p=x();let D=kg(U,p),P=E.createHref(U);u.replaceState(D,"",P),c&&m&&m({action:d,location:E.location,delta:0})}function M(y){return eM(y)}let E={get action(){return d},get location(){return a(o,u)},listen(y){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Gg,g),m=y,()=>{o.removeEventListener(Gg,g),m=null}},createHref(y){return e(o,y)},createURL:M,encodeLocation(y){let _=M(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:b,go(y){return u.go(y)}};return E}function eM(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),an(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:cl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function xv(a,e,n="/"){return tM(a,e,n,!1)}function tM(a,e,n,r){let o=typeof e=="string"?Js(e):e,c=Da(o.pathname||"/",n);if(c==null)return null;let u=gv(a);nM(u);let d=null;for(let m=0;d==null&&m<u.length;++m){let p=hM(c);d=fM(u[m],p,r)}return d}function gv(a,e=[],n=[],r="",o=!1){let c=(u,d,m=o,p)=>{let x={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(r)&&m)return;an(x.relativePath.startsWith(r),`Absolute route path "${x.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(r.length)}let g=Ra([r,x.relativePath]),v=n.concat(x);u.children&&u.children.length>0&&(an(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),gv(u.children,e,v,g,m)),!(u.path==null&&!u.index)&&e.push({path:g,score:cM(g,u.index),routesMeta:v})};return a.forEach((u,d)=>{if(u.path===""||!u.path?.includes("?"))c(u,d);else for(let m of _v(u.path))c(u,d,!0,m)}),e}function _v(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=_v(r.join("/")),d=[];return d.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&d.push(...u),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function nM(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:uM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var iM=/^:[\w-]+$/,aM=3,rM=2,sM=1,oM=10,lM=-2,Xg=a=>a==="*";function cM(a,e){let n=a.split("/"),r=n.length;return n.some(Xg)&&(r+=lM),e&&(r+=rM),n.filter(o=>!Xg(o)).reduce((o,c)=>o+(iM.test(c)?aM:c===""?sM:oM),r)}function uM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function fM(a,e,n=!1){let{routesMeta:r}=a,o={},c="/",u=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=xu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),v=m.route;if(!g&&p&&n&&!r[r.length-1].route.index&&(g=xu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:Ra([c,g.pathname]),pathnameBase:gM(Ra([c,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(c=Ra([c,g.pathnameBase]))}return u}function xu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=dM(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((p,{paramName:x,isOptional:g},v)=>{if(x==="*"){let M=d[v]||"";u=c.slice(0,c.length-M.length).replace(/(.)\/+$/,"$1")}const b=d[v];return g&&!b?p[x]=void 0:p[x]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:a}}function dM(a,e=!1,n=!0){Wi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function hM(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Da(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function pM(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?Js(a):a;return{pathname:n?n.startsWith("/")?n:mM(n,e):e,search:_M(r),hash:vM(o)}}function mM(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function qd(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xM(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vv(a){let e=xM(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function yv(a,e,n,r=!1){let o;typeof a=="string"?o=Js(a):(o={...a},an(!o.pathname||!o.pathname.includes("?"),qd("?","pathname","search",o)),an(!o.pathname||!o.pathname.includes("#"),qd("#","pathname","hash",o)),an(!o.search||!o.search.includes("#"),qd("#","search","hash",o)));let c=a===""||o.pathname==="",u=c?"/":o.pathname,d;if(u==null)d=n;else{let g=e.length-1;if(!r&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),g-=1;o.pathname=v.join("/")}d=g>=0?e[g]:"/"}let m=pM(o,d),p=u&&u!=="/"&&u.endsWith("/"),x=(c||u===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var Ra=a=>a.join("/").replace(/\/\/+/g,"/"),gM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),_M=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,vM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function yM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sv=["POST","PUT","PATCH","DELETE"];new Set(Sv);var SM=["GET",...Sv];new Set(SM);var $s=he.createContext(null);$s.displayName="DataRouter";var Su=he.createContext(null);Su.displayName="DataRouterState";he.createContext(!1);var bv=he.createContext({isTransitioning:!1});bv.displayName="ViewTransition";var bM=he.createContext(new Map);bM.displayName="Fetchers";var MM=he.createContext(null);MM.displayName="Await";var Zi=he.createContext(null);Zi.displayName="Navigation";var ml=he.createContext(null);ml.displayName="Location";var Ua=he.createContext({outlet:null,matches:[],isDataRoute:!1});Ua.displayName="Route";var Cp=he.createContext(null);Cp.displayName="RouteError";function EM(a,{relative:e}={}){an(xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=he.useContext(Zi),{hash:o,pathname:c,search:u}=gl(a,{relative:e}),d=c;return n!=="/"&&(d=c==="/"?n:Ra([n,c])),r.createHref({pathname:d,search:u,hash:o})}function xl(){return he.useContext(ml)!=null}function Kr(){return an(xl(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(ml).location}var Mv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ev(a){he.useContext(Zi).static||he.useLayoutEffect(a)}function Tv(){let{isDataRoute:a}=he.useContext(Ua);return a?zM():TM()}function TM(){an(xl(),"useNavigate() may be used only in the context of a <Router> component.");let a=he.useContext($s),{basename:e,navigator:n}=he.useContext(Zi),{matches:r}=he.useContext(Ua),{pathname:o}=Kr(),c=JSON.stringify(vv(r)),u=he.useRef(!1);return Ev(()=>{u.current=!0}),he.useCallback((m,p={})=>{if(Wi(u.current,Mv),!u.current)return;if(typeof m=="number"){n.go(m);return}let x=yv(m,JSON.parse(c),o,p.relative==="path");a==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:Ra([e,x.pathname])),(p.replace?n.replace:n.push)(x,p.state,p)},[e,n,c,o,a])}he.createContext(null);function gl(a,{relative:e}={}){let{matches:n}=he.useContext(Ua),{pathname:r}=Kr(),o=JSON.stringify(vv(n));return he.useMemo(()=>yv(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function AM(a,e){return Av(a,e)}function Av(a,e,n,r,o){an(xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=he.useContext(Zi),{matches:u}=he.useContext(Ua),d=u[u.length-1],m=d?d.params:{},p=d?d.pathname:"/",x=d?d.pathnameBase:"/",g=d&&d.route;{let U=g&&g.path||"";Rv(p,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Kr(),b;if(e){let U=typeof e=="string"?Js(e):e;an(x==="/"||U.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),b=U}else b=v;let M=b.pathname||"/",E=M;if(x!=="/"){let U=x.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(U.length).join("/")}let y=xv(a,{pathname:E});Wi(g||y!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Wi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=UM(y&&y.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:Ra([x,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:Ra([x,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),u,n,r,o);return e&&_?he.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},_):_}function RM(){let a=FM(),e=yM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",a),u=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:c},"ErrorBoundary")," or"," ",he.createElement("code",{style:c},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),n?he.createElement("pre",{style:o},n):null,u)}var CM=he.createElement(RM,null),wM=class extends he.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?he.createElement(Ua.Provider,{value:this.props.routeContext},he.createElement(Cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DM({routeContext:a,match:e,children:n}){let r=he.useContext($s);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(Ua.Provider,{value:a},n)}function UM(a,e=[],n=null,r=null,o=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let c=a,u=n?.errors;if(u!=null){let p=c.findIndex(x=>x.route.id&&u?.[x.route.id]!==void 0);an(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let d=!1,m=-1;if(n)for(let p=0;p<c.length;p++){let x=c[p];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=p),x.route.id){let{loaderData:g,errors:v}=n,b=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!v||v[x.route.id]===void 0);if(x.route.lazy||b){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,x,g)=>{let v,b=!1,M=null,E=null;n&&(v=u&&x.route.id?u[x.route.id]:void 0,M=x.route.errorElement||CM,d&&(m<0&&g===0?(Rv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,E=null):m===g&&(b=!0,E=x.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,g+1)),_=()=>{let U;return v?U=M:b?U=E:x.route.Component?U=he.createElement(x.route.Component,null):x.route.element?U=x.route.element:U=p,he.createElement(DM,{match:x,routeContext:{outlet:p,matches:y,isDataRoute:n!=null},children:U})};return n&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?he.createElement(wM,{location:n.location,revalidation:n.revalidation,component:M,error:v,children:_(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:r}):_()},null)}function wp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NM(a){let e=he.useContext($s);return an(e,wp(a)),e}function LM(a){let e=he.useContext(Su);return an(e,wp(a)),e}function OM(a){let e=he.useContext(Ua);return an(e,wp(a)),e}function Dp(a){let e=OM(a),n=e.matches[e.matches.length-1];return an(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function PM(){return Dp("useRouteId")}function FM(){let a=he.useContext(Cp),e=LM("useRouteError"),n=Dp("useRouteError");return a!==void 0?a:e.errors?.[n]}function zM(){let{router:a}=NM("useNavigate"),e=Dp("useNavigate"),n=he.useRef(!1);return Ev(()=>{n.current=!0}),he.useCallback(async(o,c={})=>{Wi(n.current,Mv),n.current&&(typeof o=="number"?a.navigate(o):await a.navigate(o,{fromRouteId:e,...c}))},[a,e])}var Wg={};function Rv(a,e,n){!e&&!Wg[a]&&(Wg[a]=!0,Wi(!1,n))}he.memo(BM);function BM({routes:a,future:e,state:n,unstable_onError:r}){return Av(a,void 0,n,r,e)}function Cv(a){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IM({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:c=!1}){an(!xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=a.replace(/^\/*/,"/"),d=he.useMemo(()=>({basename:u,navigator:o,static:c,future:{}}),[u,o,c]);typeof n=="string"&&(n=Js(n));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:v="default"}=n,b=he.useMemo(()=>{let M=Da(m,u);return M==null?null:{location:{pathname:M,search:p,hash:x,state:g,key:v},navigationType:r}},[u,m,p,x,g,v,r]);return Wi(b!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:he.createElement(Zi.Provider,{value:d},he.createElement(ml.Provider,{children:e,value:b}))}function HM({children:a,location:e}){return AM(Dh(a),e)}function Dh(a,e=[]){let n=[];return he.Children.forEach(a,(r,o)=>{if(!he.isValidElement(r))return;let c=[...e,o];if(r.type===he.Fragment){n.push.apply(n,Dh(r.props.children,c));return}an(r.type===Cv,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Dh(r.props.children,c)),n.push(u)}),n}var su="get",ou="application/x-www-form-urlencoded";function bu(a){return a!=null&&typeof a.tagName=="string"}function VM(a){return bu(a)&&a.tagName.toLowerCase()==="button"}function GM(a){return bu(a)&&a.tagName.toLowerCase()==="form"}function kM(a){return bu(a)&&a.tagName.toLowerCase()==="input"}function XM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function WM(a,e){return a.button===0&&(!e||e==="_self")&&!XM(a)}var Fc=null;function qM(){if(Fc===null)try{new FormData(document.createElement("form"),0),Fc=!1}catch{Fc=!0}return Fc}var jM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jd(a){return a!=null&&!jM.has(a)?(Wi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`),null):a}function YM(a,e){let n,r,o,c,u;if(GM(a)){let d=a.getAttribute("action");r=d?Da(d,e):null,n=a.getAttribute("method")||su,o=jd(a.getAttribute("enctype"))||ou,c=new FormData(a)}else if(VM(a)||kM(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(r=m?Da(m,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||su,o=jd(a.getAttribute("formenctype"))||jd(d.getAttribute("enctype"))||ou,c=new FormData(d,a),!qM()){let{name:p,type:x,value:g}=a;if(x==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,g)}}else{if(bu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=su,r=null,o=ou,u=a}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Up(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function ZM(a,e,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&Da(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function KM(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function QM(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function JM(a,e,n){let r=await Promise.all(a.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await KM(c,n);return u.links?u.links():[]}return[]}));return n1(r.flat(1).filter(QM).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function qg(a,e,n,r,o,c){let u=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,d=(m,p)=>n[p].pathname!==m.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>u(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let x=r.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(u(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function $M(a,e,{includeHydrateFallback:n}={}){return e1(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function e1(a){return[...new Set(a)]}function t1(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function n1(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let c=JSON.stringify(t1(o));return n.has(c)||(n.add(c),r.push({key:c,link:o})),r},[])}function wv(){let a=he.useContext($s);return Up(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function i1(){let a=he.useContext(Su);return Up(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Np=he.createContext(void 0);Np.displayName="FrameworkContext";function Dv(){let a=he.useContext(Np);return Up(a,"You must render this element inside a <HydratedRouter> element"),a}function a1(a,e){let n=he.useContext(Np),[r,o]=he.useState(!1),[c,u]=he.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,v=he.useRef(null);he.useEffect(()=>{if(a==="render"&&u(!0),a==="viewport"){let E=_=>{_.forEach(U=>{u(U.isIntersecting)})},y=new IntersectionObserver(E,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[a]),he.useEffect(()=>{if(r){let E=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(E)}}},[r]);let b=()=>{o(!0)},M=()=>{o(!1),u(!1)};return n?a!=="intent"?[c,v,{}]:[c,v,{onFocus:Qo(d,b),onBlur:Qo(m,M),onMouseEnter:Qo(p,b),onMouseLeave:Qo(x,M),onTouchStart:Qo(g,b)}]:[!1,v,{}]}function Qo(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function r1({page:a,...e}){let{router:n}=wv(),r=he.useMemo(()=>xv(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?he.createElement(o1,{page:a,matches:r,...e}):null}function s1(a){let{manifest:e,routeModules:n}=Dv(),[r,o]=he.useState([]);return he.useEffect(()=>{let c=!1;return JM(a,e,n).then(u=>{c||o(u)}),()=>{c=!0}},[a,e,n]),r}function o1({page:a,matches:e,...n}){let r=Kr(),{manifest:o,routeModules:c}=Dv(),{basename:u}=wv(),{loaderData:d,matches:m}=i1(),p=he.useMemo(()=>qg(a,e,m,o,r,"data"),[a,e,m,o,r]),x=he.useMemo(()=>qg(a,e,m,o,r,"assets"),[a,e,m,o,r]),g=he.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,E=!1;if(e.forEach(_=>{let U=o.routes[_.route.id];!U||!U.hasLoader||(!p.some(D=>D.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||U.hasClientLoader?E=!0:M.add(_.route.id))}),M.size===0)return[];let y=ZM(a,u,"data");return E&&M.size>0&&y.searchParams.set("_routes",e.filter(_=>M.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[u,d,r,o,p,e,a,c]),v=he.useMemo(()=>$M(x,o),[x,o]),b=s1(x);return he.createElement(he.Fragment,null,g.map(M=>he.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),v.map(M=>he.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),b.map(({key:M,link:E})=>he.createElement("link",{key:M,nonce:n.nonce,...E})))}function l1(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Uv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uv&&(window.__reactRouterVersion="7.9.5")}catch{}function c1({basename:a,children:e,window:n}){let r=he.useRef();r.current==null&&(r.current=Qb({window:n,v5Compat:!0}));let o=r.current,[c,u]=he.useState({action:o.action,location:o.location}),d=he.useCallback(m=>{he.startTransition(()=>u(m))},[u]);return he.useLayoutEffect(()=>o.listen(d),[o,d]),he.createElement(IM,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:o})}var Nv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lv=he.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,state:d,target:m,to:p,preventScrollReset:x,viewTransition:g,...v},b){let{basename:M}=he.useContext(Zi),E=typeof p=="string"&&Nv.test(p),y,_=!1;if(typeof p=="string"&&E&&(y=p,Uv))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),G=Da(C.pathname,M);C.origin===w.origin&&G!=null?p=G+C.search+C.hash:_=!0}catch{Wi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=EM(p,{relative:o}),[D,P,I]=a1(r,v),N=h1(p,{replace:u,state:d,target:m,preventScrollReset:x,relative:o,viewTransition:g});function z(w){e&&e(w),w.defaultPrevented||N(w)}let Z=he.createElement("a",{...v,...I,href:y||U,onClick:_||c?e:z,ref:l1(b,P),target:m,"data-discover":!E&&n==="render"?"true":void 0});return D&&!E?he.createElement(he.Fragment,null,Z,he.createElement(r1,{page:U})):Z});Lv.displayName="Link";var u1=he.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:d,children:m,...p},x){let g=gl(u,{relative:p.relative}),v=Kr(),b=he.useContext(Su),{navigator:M,basename:E}=he.useContext(Zi),y=b!=null&&_1(g)&&d===!0,_=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,U=v.pathname,D=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(U=U.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&E&&(D=Da(D,E)||D);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=U===_||!o&&U.startsWith(_)&&U.charAt(P)==="/",N=D!=null&&(D===_||!o&&D.startsWith(_)&&D.charAt(_.length)==="/"),z={isActive:I,isPending:N,isTransitioning:y},Z=I?e:void 0,w;typeof r=="function"?w=r(z):w=[r,I?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(z):c;return he.createElement(Lv,{...p,"aria-current":Z,className:w,ref:x,style:C,to:u,viewTransition:d},typeof m=="function"?m(z):m)});u1.displayName="NavLink";var f1=he.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:c,method:u=su,action:d,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,...v},b)=>{let M=x1(),E=g1(d,{relative:p}),y=u.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&Nv.test(d),U=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let P=D.nativeEvent.submitter,I=P?.getAttribute("formmethod")||u;M(P||D.currentTarget,{fetcherKey:e,method:I,navigate:n,replace:o,state:c,relative:p,preventScrollReset:x,viewTransition:g})};return he.createElement("form",{ref:b,method:y,action:E,onSubmit:r?m:U,...v,"data-discover":!_&&a==="render"?"true":void 0})});f1.displayName="Form";function d1(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ov(a){let e=he.useContext($s);return an(e,d1(a)),e}function h1(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:c,viewTransition:u}={}){let d=Tv(),m=Kr(),p=gl(a,{relative:c});return he.useCallback(x=>{if(WM(x,e)){x.preventDefault();let g=n!==void 0?n:cl(m)===cl(p);d(a,{replace:g,state:r,preventScrollReset:o,relative:c,viewTransition:u})}},[m,d,p,n,r,e,a,o,c,u])}var p1=0,m1=()=>`__${String(++p1)}__`;function x1(){let{router:a}=Ov("useSubmit"),{basename:e}=he.useContext(Zi),n=PM();return he.useCallback(async(r,o={})=>{let{action:c,method:u,encType:d,formData:m,body:p}=YM(r,e);if(o.navigate===!1){let x=o.fetcherKey||m1();await a.fetch(x,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||d,flushSync:o.flushSync})}else await a.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[a,e,n])}function g1(a,{relative:e}={}){let{basename:n}=he.useContext(Zi),r=he.useContext(Ua);an(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...gl(a||".",{relative:e})},u=Kr();if(a==null){c.search=u.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(x=>x==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let x=d.toString();c.search=x?`?${x}`:""}}return(!a||a===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Ra([n,c.pathname])),cl(c)}function _1(a,{relative:e}={}){let n=he.useContext(bv);an(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ov("useViewTransitionState"),o=gl(a,{relative:e});if(!n.isTransitioning)return!1;let c=Da(n.currentLocation.pathname,r)||n.currentLocation.pathname,u=Da(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xu(o.pathname,u)!=null||xu(o.pathname,c)!=null}const v1=he.createContext(),y1=()=>{const a=he.useContext(v1);return a||{user:null,logout:()=>{},isAuthenticated:!1}};function Pv(a,e){return function(){return a.apply(e,arguments)}}const{toString:S1}=Object.prototype,{getPrototypeOf:Lp}=Object,{iterator:Mu,toStringTag:Fv}=Symbol,Eu=(a=>e=>{const n=S1.call(e);return a[n]||(a[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Oi=a=>(a=a.toLowerCase(),e=>Eu(e)===a),Tu=a=>e=>typeof e===a,{isArray:eo}=Array,qs=Tu("undefined");function _l(a){return a!==null&&!qs(a)&&a.constructor!==null&&!qs(a.constructor)&&$n(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const zv=Oi("ArrayBuffer");function b1(a){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(a):e=a&&a.buffer&&zv(a.buffer),e}const M1=Tu("string"),$n=Tu("function"),Bv=Tu("number"),vl=a=>a!==null&&typeof a=="object",E1=a=>a===!0||a===!1,lu=a=>{if(Eu(a)!=="object")return!1;const e=Lp(a);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Fv in a)&&!(Mu in a)},T1=a=>{if(!vl(a)||_l(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},A1=Oi("Date"),R1=Oi("File"),C1=Oi("Blob"),w1=Oi("FileList"),D1=a=>vl(a)&&$n(a.pipe),U1=a=>{let e;return a&&(typeof FormData=="function"&&a instanceof FormData||$n(a.append)&&((e=Eu(a))==="formdata"||e==="object"&&$n(a.toString)&&a.toString()==="[object FormData]"))},N1=Oi("URLSearchParams"),[L1,O1,P1,F1]=["ReadableStream","Request","Response","Headers"].map(Oi),z1=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function yl(a,e,{allOwnKeys:n=!1}={}){if(a===null||typeof a>"u")return;let r,o;if(typeof a!="object"&&(a=[a]),eo(a))for(r=0,o=a.length;r<o;r++)e.call(null,a[r],r,a);else{if(_l(a))return;const c=n?Object.getOwnPropertyNames(a):Object.keys(a),u=c.length;let d;for(r=0;r<u;r++)d=c[r],e.call(null,a[d],d,a)}}function Iv(a,e){if(_l(a))return null;e=e.toLowerCase();const n=Object.keys(a);let r=n.length,o;for(;r-- >0;)if(o=n[r],e===o.toLowerCase())return o;return null}const Xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Hv=a=>!qs(a)&&a!==Xr;function Uh(){const{caseless:a,skipUndefined:e}=Hv(this)&&this||{},n={},r=(o,c)=>{const u=a&&Iv(n,c)||c;lu(n[u])&&lu(o)?n[u]=Uh(n[u],o):lu(o)?n[u]=Uh({},o):eo(o)?n[u]=o.slice():(!e||!qs(o))&&(n[u]=o)};for(let o=0,c=arguments.length;o<c;o++)arguments[o]&&yl(arguments[o],r);return n}const B1=(a,e,n,{allOwnKeys:r}={})=>(yl(e,(o,c)=>{n&&$n(o)?a[c]=Pv(o,n):a[c]=o},{allOwnKeys:r}),a),I1=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),H1=(a,e,n,r)=>{a.prototype=Object.create(e.prototype,r),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:e.prototype}),n&&Object.assign(a.prototype,n)},V1=(a,e,n,r)=>{let o,c,u;const d={};if(e=e||{},a==null)return e;do{for(o=Object.getOwnPropertyNames(a),c=o.length;c-- >0;)u=o[c],(!r||r(u,a,e))&&!d[u]&&(e[u]=a[u],d[u]=!0);a=n!==!1&&Lp(a)}while(a&&(!n||n(a,e))&&a!==Object.prototype);return e},G1=(a,e,n)=>{a=String(a),(n===void 0||n>a.length)&&(n=a.length),n-=e.length;const r=a.indexOf(e,n);return r!==-1&&r===n},k1=a=>{if(!a)return null;if(eo(a))return a;let e=a.length;if(!Bv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=a[e];return n},X1=(a=>e=>a&&e instanceof a)(typeof Uint8Array<"u"&&Lp(Uint8Array)),W1=(a,e)=>{const r=(a&&a[Mu]).call(a);let o;for(;(o=r.next())&&!o.done;){const c=o.value;e.call(a,c[0],c[1])}},q1=(a,e)=>{let n;const r=[];for(;(n=a.exec(e))!==null;)r.push(n);return r},j1=Oi("HTMLFormElement"),Y1=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),jg=(({hasOwnProperty:a})=>(e,n)=>a.call(e,n))(Object.prototype),Z1=Oi("RegExp"),Vv=(a,e)=>{const n=Object.getOwnPropertyDescriptors(a),r={};yl(n,(o,c)=>{let u;(u=e(o,c,a))!==!1&&(r[c]=u||o)}),Object.defineProperties(a,r)},K1=a=>{Vv(a,(e,n)=>{if($n(a)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=a[n];if($n(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Q1=(a,e)=>{const n={},r=o=>{o.forEach(c=>{n[c]=!0})};return eo(a)?r(a):r(String(a).split(e)),n},J1=()=>{},$1=(a,e)=>a!=null&&Number.isFinite(a=+a)?a:e;function eE(a){return!!(a&&$n(a.append)&&a[Fv]==="FormData"&&a[Mu])}const tE=a=>{const e=new Array(10),n=(r,o)=>{if(vl(r)){if(e.indexOf(r)>=0)return;if(_l(r))return r;if(!("toJSON"in r)){e[o]=r;const c=eo(r)?[]:{};return yl(r,(u,d)=>{const m=n(u,o+1);!qs(m)&&(c[d]=m)}),e[o]=void 0,c}}return r};return n(a,0)},nE=Oi("AsyncFunction"),iE=a=>a&&(vl(a)||$n(a))&&$n(a.then)&&$n(a.catch),Gv=((a,e)=>a?setImmediate:e?((n,r)=>(Xr.addEventListener("message",({source:o,data:c})=>{o===Xr&&c===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Xr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",$n(Xr.postMessage)),aE=typeof queueMicrotask<"u"?queueMicrotask.bind(Xr):typeof process<"u"&&process.nextTick||Gv,rE=a=>a!=null&&$n(a[Mu]),ce={isArray:eo,isArrayBuffer:zv,isBuffer:_l,isFormData:U1,isArrayBufferView:b1,isString:M1,isNumber:Bv,isBoolean:E1,isObject:vl,isPlainObject:lu,isEmptyObject:T1,isReadableStream:L1,isRequest:O1,isResponse:P1,isHeaders:F1,isUndefined:qs,isDate:A1,isFile:R1,isBlob:C1,isRegExp:Z1,isFunction:$n,isStream:D1,isURLSearchParams:N1,isTypedArray:X1,isFileList:w1,forEach:yl,merge:Uh,extend:B1,trim:z1,stripBOM:I1,inherits:H1,toFlatObject:V1,kindOf:Eu,kindOfTest:Oi,endsWith:G1,toArray:k1,forEachEntry:W1,matchAll:q1,isHTMLForm:j1,hasOwnProperty:jg,hasOwnProp:jg,reduceDescriptors:Vv,freezeMethods:K1,toObjectSet:Q1,toCamelCase:Y1,noop:J1,toFiniteNumber:$1,findKey:Iv,global:Xr,isContextDefined:Hv,isSpecCompliantForm:eE,toJSONObject:tE,isAsyncFn:nE,isThenable:iE,setImmediate:Gv,asap:aE,isIterable:rE};function ht(a,e,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}ce.inherits(ht,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ce.toJSONObject(this.config),code:this.code,status:this.status}}});const kv=ht.prototype,Xv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{Xv[a]={value:a}});Object.defineProperties(ht,Xv);Object.defineProperty(kv,"isAxiosError",{value:!0});ht.from=(a,e,n,r,o,c)=>{const u=Object.create(kv);ce.toFlatObject(a,u,function(x){return x!==Error.prototype},p=>p!=="isAxiosError");const d=a&&a.message?a.message:"Error",m=e==null&&a?a.code:e;return ht.call(u,d,m,n,r,o),a&&u.cause==null&&Object.defineProperty(u,"cause",{value:a,configurable:!0}),u.name=a&&a.name||"Error",c&&Object.assign(u,c),u};const sE=null;function Nh(a){return ce.isPlainObject(a)||ce.isArray(a)}function Wv(a){return ce.endsWith(a,"[]")?a.slice(0,-2):a}function Yg(a,e,n){return a?a.concat(e).map(function(o,c){return o=Wv(o),!n&&c?"["+o+"]":o}).join(n?".":""):e}function oE(a){return ce.isArray(a)&&!a.some(Nh)}const lE=ce.toFlatObject(ce,{},null,function(e){return/^is[A-Z]/.test(e)});function Au(a,e,n){if(!ce.isObject(a))throw new TypeError("target must be an object");e=e||new FormData,n=ce.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,y){return!ce.isUndefined(y[E])});const r=n.metaTokens,o=n.visitor||x,c=n.dots,u=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&ce.isSpecCompliantForm(e);if(!ce.isFunction(o))throw new TypeError("visitor must be a function");function p(M){if(M===null)return"";if(ce.isDate(M))return M.toISOString();if(ce.isBoolean(M))return M.toString();if(!m&&ce.isBlob(M))throw new ht("Blob is not supported. Use a Buffer instead.");return ce.isArrayBuffer(M)||ce.isTypedArray(M)?m&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function x(M,E,y){let _=M;if(M&&!y&&typeof M=="object"){if(ce.endsWith(E,"{}"))E=r?E:E.slice(0,-2),M=JSON.stringify(M);else if(ce.isArray(M)&&oE(M)||(ce.isFileList(M)||ce.endsWith(E,"[]"))&&(_=ce.toArray(M)))return E=Wv(E),_.forEach(function(D,P){!(ce.isUndefined(D)||D===null)&&e.append(u===!0?Yg([E],P,c):u===null?E:E+"[]",p(D))}),!1}return Nh(M)?!0:(e.append(Yg(y,E,c),p(M)),!1)}const g=[],v=Object.assign(lE,{defaultVisitor:x,convertValue:p,isVisitable:Nh});function b(M,E){if(!ce.isUndefined(M)){if(g.indexOf(M)!==-1)throw Error("Circular reference detected in "+E.join("."));g.push(M),ce.forEach(M,function(_,U){(!(ce.isUndefined(_)||_===null)&&o.call(e,_,ce.isString(U)?U.trim():U,E,v))===!0&&b(_,E?E.concat(U):[U])}),g.pop()}}if(!ce.isObject(a))throw new TypeError("data must be an object");return b(a),e}function Zg(a){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Op(a,e){this._pairs=[],a&&Au(a,this,e)}const qv=Op.prototype;qv.append=function(e,n){this._pairs.push([e,n])};qv.toString=function(e){const n=e?function(r){return e.call(this,r,Zg)}:Zg;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function cE(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function jv(a,e,n){if(!e)return a;const r=n&&n.encode||cE;ce.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let c;if(o?c=o(e,n):c=ce.isURLSearchParams(e)?e.toString():new Op(e,n).toString(r),c){const u=a.indexOf("#");u!==-1&&(a=a.slice(0,u)),a+=(a.indexOf("?")===-1?"?":"&")+c}return a}class Kg{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ce.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Yv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},uE=typeof URLSearchParams<"u"?URLSearchParams:Op,fE=typeof FormData<"u"?FormData:null,dE=typeof Blob<"u"?Blob:null,hE={isBrowser:!0,classes:{URLSearchParams:uE,FormData:fE,Blob:dE},protocols:["http","https","file","blob","url","data"]},Pp=typeof window<"u"&&typeof document<"u",Lh=typeof navigator=="object"&&navigator||void 0,pE=Pp&&(!Lh||["ReactNative","NativeScript","NS"].indexOf(Lh.product)<0),mE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xE=Pp&&window.location.href||"http://localhost",gE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Pp,hasStandardBrowserEnv:pE,hasStandardBrowserWebWorkerEnv:mE,navigator:Lh,origin:xE},Symbol.toStringTag,{value:"Module"})),zn={...gE,...hE};function _E(a,e){return Au(a,new zn.classes.URLSearchParams,{visitor:function(n,r,o,c){return zn.isNode&&ce.isBuffer(n)?(this.append(r,n.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...e})}function vE(a){return ce.matchAll(/\w+|\[(\w*)]/g,a).map(e=>e[0]==="[]"?"":e[1]||e[0])}function yE(a){const e={},n=Object.keys(a);let r;const o=n.length;let c;for(r=0;r<o;r++)c=n[r],e[c]=a[c];return e}function Zv(a){function e(n,r,o,c){let u=n[c++];if(u==="__proto__")return!0;const d=Number.isFinite(+u),m=c>=n.length;return u=!u&&ce.isArray(o)?o.length:u,m?(ce.hasOwnProp(o,u)?o[u]=[o[u],r]:o[u]=r,!d):((!o[u]||!ce.isObject(o[u]))&&(o[u]=[]),e(n,r,o[u],c)&&ce.isArray(o[u])&&(o[u]=yE(o[u])),!d)}if(ce.isFormData(a)&&ce.isFunction(a.entries)){const n={};return ce.forEachEntry(a,(r,o)=>{e(vE(r),o,n,0)}),n}return null}function SE(a,e,n){if(ce.isString(a))try{return(e||JSON.parse)(a),ce.trim(a)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(a)}const Sl={transitional:Yv,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,c=ce.isObject(e);if(c&&ce.isHTMLForm(e)&&(e=new FormData(e)),ce.isFormData(e))return o?JSON.stringify(Zv(e)):e;if(ce.isArrayBuffer(e)||ce.isBuffer(e)||ce.isStream(e)||ce.isFile(e)||ce.isBlob(e)||ce.isReadableStream(e))return e;if(ce.isArrayBufferView(e))return e.buffer;if(ce.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(c){if(r.indexOf("application/x-www-form-urlencoded")>-1)return _E(e,this.formSerializer).toString();if((d=ce.isFileList(e))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Au(d?{"files[]":e}:e,m&&new m,this.formSerializer)}}return c||o?(n.setContentType("application/json",!1),SE(e)):e}],transformResponse:[function(e){const n=this.transitional||Sl.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(ce.isResponse(e)||ce.isReadableStream(e))return e;if(e&&ce.isString(e)&&(r&&!this.responseType||o)){const u=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(d){if(u)throw d.name==="SyntaxError"?ht.from(d,ht.ERR_BAD_RESPONSE,this,null,this.response):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zn.classes.FormData,Blob:zn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ce.forEach(["delete","get","head","post","put","patch"],a=>{Sl.headers[a]={}});const bE=ce.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ME=a=>{const e={};let n,r,o;return a&&a.split(`
`).forEach(function(u){o=u.indexOf(":"),n=u.substring(0,o).trim().toLowerCase(),r=u.substring(o+1).trim(),!(!n||e[n]&&bE[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Qg=Symbol("internals");function Jo(a){return a&&String(a).trim().toLowerCase()}function cu(a){return a===!1||a==null?a:ce.isArray(a)?a.map(cu):String(a)}function EE(a){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(a);)e[r[1]]=r[2];return e}const TE=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function Yd(a,e,n,r,o){if(ce.isFunction(r))return r.call(this,e,n);if(o&&(e=n),!!ce.isString(e)){if(ce.isString(r))return e.indexOf(r)!==-1;if(ce.isRegExp(r))return r.test(e)}}function AE(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function RE(a,e){const n=ce.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(a,r+n,{value:function(o,c,u){return this[r].call(this,e,o,c,u)},configurable:!0})})}let ei=class{constructor(e){e&&this.set(e)}set(e,n,r){const o=this;function c(d,m,p){const x=Jo(m);if(!x)throw new Error("header name must be a non-empty string");const g=ce.findKey(o,x);(!g||o[g]===void 0||p===!0||p===void 0&&o[g]!==!1)&&(o[g||m]=cu(d))}const u=(d,m)=>ce.forEach(d,(p,x)=>c(p,x,m));if(ce.isPlainObject(e)||e instanceof this.constructor)u(e,n);else if(ce.isString(e)&&(e=e.trim())&&!TE(e))u(ME(e),n);else if(ce.isObject(e)&&ce.isIterable(e)){let d={},m,p;for(const x of e){if(!ce.isArray(x))throw TypeError("Object iterator must return a key-value pair");d[p=x[0]]=(m=d[p])?ce.isArray(m)?[...m,x[1]]:[m,x[1]]:x[1]}u(d,n)}else e!=null&&c(n,e,r);return this}get(e,n){if(e=Jo(e),e){const r=ce.findKey(this,e);if(r){const o=this[r];if(!n)return o;if(n===!0)return EE(o);if(ce.isFunction(n))return n.call(this,o,r);if(ce.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Jo(e),e){const r=ce.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Yd(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let o=!1;function c(u){if(u=Jo(u),u){const d=ce.findKey(r,u);d&&(!n||Yd(r,r[d],d,n))&&(delete r[d],o=!0)}}return ce.isArray(e)?e.forEach(c):c(e),o}clear(e){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const c=n[r];(!e||Yd(this,this[c],c,e,!0))&&(delete this[c],o=!0)}return o}normalize(e){const n=this,r={};return ce.forEach(this,(o,c)=>{const u=ce.findKey(r,c);if(u){n[u]=cu(o),delete n[c];return}const d=e?AE(c):String(c).trim();d!==c&&delete n[c],n[d]=cu(o),r[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return ce.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=e&&ce.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(o=>r.set(o)),r}static accessor(e){const r=(this[Qg]=this[Qg]={accessors:{}}).accessors,o=this.prototype;function c(u){const d=Jo(u);r[d]||(RE(o,u),r[d]=!0)}return ce.isArray(e)?e.forEach(c):c(e),this}};ei.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ce.reduceDescriptors(ei.prototype,({value:a},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>a,set(r){this[n]=r}}});ce.freezeMethods(ei);function Zd(a,e){const n=this||Sl,r=e||n,o=ei.from(r.headers);let c=r.data;return ce.forEach(a,function(d){c=d.call(n,c,o.normalize(),e?e.status:void 0)}),o.normalize(),c}function Kv(a){return!!(a&&a.__CANCEL__)}function to(a,e,n){ht.call(this,a??"canceled",ht.ERR_CANCELED,e,n),this.name="CanceledError"}ce.inherits(to,ht,{__CANCEL__:!0});function Qv(a,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?a(n):e(new ht("Request failed with status code "+n.status,[ht.ERR_BAD_REQUEST,ht.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function CE(a){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return e&&e[1]||""}function wE(a,e){a=a||10;const n=new Array(a),r=new Array(a);let o=0,c=0,u;return e=e!==void 0?e:1e3,function(m){const p=Date.now(),x=r[c];u||(u=p),n[o]=m,r[o]=p;let g=c,v=0;for(;g!==o;)v+=n[g++],g=g%a;if(o=(o+1)%a,o===c&&(c=(c+1)%a),p-u<e)return;const b=x&&p-x;return b?Math.round(v*1e3/b):void 0}}function DE(a,e){let n=0,r=1e3/e,o,c;const u=(p,x=Date.now())=>{n=x,o=null,c&&(clearTimeout(c),c=null),a(...p)};return[(...p)=>{const x=Date.now(),g=x-n;g>=r?u(p,x):(o=p,c||(c=setTimeout(()=>{c=null,u(o)},r-g)))},()=>o&&u(o)]}const gu=(a,e,n=3)=>{let r=0;const o=wE(50,250);return DE(c=>{const u=c.loaded,d=c.lengthComputable?c.total:void 0,m=u-r,p=o(m),x=u<=d;r=u;const g={loaded:u,total:d,progress:d?u/d:void 0,bytes:m,rate:p||void 0,estimated:p&&d&&x?(d-u)/p:void 0,event:c,lengthComputable:d!=null,[e?"download":"upload"]:!0};a(g)},n)},Jg=(a,e)=>{const n=a!=null;return[r=>e[0]({lengthComputable:n,total:a,loaded:r}),e[1]]},$g=a=>(...e)=>ce.asap(()=>a(...e)),UE=zn.hasStandardBrowserEnv?((a,e)=>n=>(n=new URL(n,zn.origin),a.protocol===n.protocol&&a.host===n.host&&(e||a.port===n.port)))(new URL(zn.origin),zn.navigator&&/(msie|trident)/i.test(zn.navigator.userAgent)):()=>!0,NE=zn.hasStandardBrowserEnv?{write(a,e,n,r,o,c,u){if(typeof document>"u")return;const d=[`${a}=${encodeURIComponent(e)}`];ce.isNumber(n)&&d.push(`expires=${new Date(n).toUTCString()}`),ce.isString(r)&&d.push(`path=${r}`),ce.isString(o)&&d.push(`domain=${o}`),c===!0&&d.push("secure"),ce.isString(u)&&d.push(`SameSite=${u}`),document.cookie=d.join("; ")},read(a){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+a+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function LE(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function OE(a,e){return e?a.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):a}function Jv(a,e,n){let r=!LE(e);return a&&(r||n==!1)?OE(a,e):e}const e_=a=>a instanceof ei?{...a}:a;function jr(a,e){e=e||{};const n={};function r(p,x,g,v){return ce.isPlainObject(p)&&ce.isPlainObject(x)?ce.merge.call({caseless:v},p,x):ce.isPlainObject(x)?ce.merge({},x):ce.isArray(x)?x.slice():x}function o(p,x,g,v){if(ce.isUndefined(x)){if(!ce.isUndefined(p))return r(void 0,p,g,v)}else return r(p,x,g,v)}function c(p,x){if(!ce.isUndefined(x))return r(void 0,x)}function u(p,x){if(ce.isUndefined(x)){if(!ce.isUndefined(p))return r(void 0,p)}else return r(void 0,x)}function d(p,x,g){if(g in e)return r(p,x);if(g in a)return r(void 0,p)}const m={url:c,method:c,data:c,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:d,headers:(p,x,g)=>o(e_(p),e_(x),g,!0)};return ce.forEach(Object.keys({...a,...e}),function(x){const g=m[x]||o,v=g(a[x],e[x],x);ce.isUndefined(v)&&g!==d||(n[x]=v)}),n}const $v=a=>{const e=jr({},a);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:c,headers:u,auth:d}=e;if(e.headers=u=ei.from(u),e.url=jv(Jv(e.baseURL,e.url,e.allowAbsoluteUrls),a.params,a.paramsSerializer),d&&u.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):""))),ce.isFormData(n)){if(zn.hasStandardBrowserEnv||zn.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if(ce.isFunction(n.getHeaders)){const m=n.getHeaders(),p=["content-type","content-length"];Object.entries(m).forEach(([x,g])=>{p.includes(x.toLowerCase())&&u.set(x,g)})}}if(zn.hasStandardBrowserEnv&&(r&&ce.isFunction(r)&&(r=r(e)),r||r!==!1&&UE(e.url))){const m=o&&c&&NE.read(c);m&&u.set(o,m)}return e},PE=typeof XMLHttpRequest<"u",FE=PE&&function(a){return new Promise(function(n,r){const o=$v(a);let c=o.data;const u=ei.from(o.headers).normalize();let{responseType:d,onUploadProgress:m,onDownloadProgress:p}=o,x,g,v,b,M;function E(){b&&b(),M&&M(),o.cancelToken&&o.cancelToken.unsubscribe(x),o.signal&&o.signal.removeEventListener("abort",x)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function _(){if(!y)return;const D=ei.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),I={data:!d||d==="text"||d==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:D,config:a,request:y};Qv(function(z){n(z),E()},function(z){r(z),E()},I),y=null}"onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(_)},y.onabort=function(){y&&(r(new ht("Request aborted",ht.ECONNABORTED,a,y)),y=null)},y.onerror=function(P){const I=P&&P.message?P.message:"Network Error",N=new ht(I,ht.ERR_NETWORK,a,y);N.event=P||null,r(N),y=null},y.ontimeout=function(){let P=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const I=o.transitional||Yv;o.timeoutErrorMessage&&(P=o.timeoutErrorMessage),r(new ht(P,I.clarifyTimeoutError?ht.ETIMEDOUT:ht.ECONNABORTED,a,y)),y=null},c===void 0&&u.setContentType(null),"setRequestHeader"in y&&ce.forEach(u.toJSON(),function(P,I){y.setRequestHeader(I,P)}),ce.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),d&&d!=="json"&&(y.responseType=o.responseType),p&&([v,M]=gu(p,!0),y.addEventListener("progress",v)),m&&y.upload&&([g,b]=gu(m),y.upload.addEventListener("progress",g),y.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(x=D=>{y&&(r(!D||D.type?new to(null,a,y):D),y.abort(),y=null)},o.cancelToken&&o.cancelToken.subscribe(x),o.signal&&(o.signal.aborted?x():o.signal.addEventListener("abort",x)));const U=CE(o.url);if(U&&zn.protocols.indexOf(U)===-1){r(new ht("Unsupported protocol "+U+":",ht.ERR_BAD_REQUEST,a));return}y.send(c||null)})},zE=(a,e)=>{const{length:n}=a=a?a.filter(Boolean):[];if(e||n){let r=new AbortController,o;const c=function(p){if(!o){o=!0,d();const x=p instanceof Error?p:this.reason;r.abort(x instanceof ht?x:new to(x instanceof Error?x.message:x))}};let u=e&&setTimeout(()=>{u=null,c(new ht(`timeout ${e} of ms exceeded`,ht.ETIMEDOUT))},e);const d=()=>{a&&(u&&clearTimeout(u),u=null,a.forEach(p=>{p.unsubscribe?p.unsubscribe(c):p.removeEventListener("abort",c)}),a=null)};a.forEach(p=>p.addEventListener("abort",c));const{signal:m}=r;return m.unsubscribe=()=>ce.asap(d),m}},BE=function*(a,e){let n=a.byteLength;if(n<e){yield a;return}let r=0,o;for(;r<n;)o=r+e,yield a.slice(r,o),r=o},IE=async function*(a,e){for await(const n of HE(a))yield*BE(n,e)},HE=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const e=a.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},t_=(a,e,n,r)=>{const o=IE(a,e);let c=0,u,d=m=>{u||(u=!0,r&&r(m))};return new ReadableStream({async pull(m){try{const{done:p,value:x}=await o.next();if(p){d(),m.close();return}let g=x.byteLength;if(n){let v=c+=g;n(v)}m.enqueue(new Uint8Array(x))}catch(p){throw d(p),p}},cancel(m){return d(m),o.return()}},{highWaterMark:2})},n_=64*1024,{isFunction:zc}=ce,VE=(({Request:a,Response:e})=>({Request:a,Response:e}))(ce.global),{ReadableStream:i_,TextEncoder:a_}=ce.global,r_=(a,...e)=>{try{return!!a(...e)}catch{return!1}},GE=a=>{a=ce.merge.call({skipUndefined:!0},VE,a);const{fetch:e,Request:n,Response:r}=a,o=e?zc(e):typeof fetch=="function",c=zc(n),u=zc(r);if(!o)return!1;const d=o&&zc(i_),m=o&&(typeof a_=="function"?(M=>E=>M.encode(E))(new a_):async M=>new Uint8Array(await new n(M).arrayBuffer())),p=c&&d&&r_(()=>{let M=!1;const E=new n(zn.origin,{body:new i_,method:"POST",get duplex(){return M=!0,"half"}}).headers.has("Content-Type");return M&&!E}),x=u&&d&&r_(()=>ce.isReadableStream(new r("").body)),g={stream:x&&(M=>M.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(M=>{!g[M]&&(g[M]=(E,y)=>{let _=E&&E[M];if(_)return _.call(E);throw new ht(`Response type '${M}' is not supported`,ht.ERR_NOT_SUPPORT,y)})});const v=async M=>{if(M==null)return 0;if(ce.isBlob(M))return M.size;if(ce.isSpecCompliantForm(M))return(await new n(zn.origin,{method:"POST",body:M}).arrayBuffer()).byteLength;if(ce.isArrayBufferView(M)||ce.isArrayBuffer(M))return M.byteLength;if(ce.isURLSearchParams(M)&&(M=M+""),ce.isString(M))return(await m(M)).byteLength},b=async(M,E)=>{const y=ce.toFiniteNumber(M.getContentLength());return y??v(E)};return async M=>{let{url:E,method:y,data:_,signal:U,cancelToken:D,timeout:P,onDownloadProgress:I,onUploadProgress:N,responseType:z,headers:Z,withCredentials:w="same-origin",fetchOptions:C}=$v(M),G=e||fetch;z=z?(z+"").toLowerCase():"text";let X=zE([U,D&&D.toAbortSignal()],P),ne=null;const pe=X&&X.unsubscribe&&(()=>{X.unsubscribe()});let fe;try{if(N&&p&&y!=="get"&&y!=="head"&&(fe=await b(Z,_))!==0){let F=new n(E,{method:"POST",body:_,duplex:"half"}),ae;if(ce.isFormData(_)&&(ae=F.headers.get("content-type"))&&Z.setContentType(ae),F.body){const[Ae,Ne]=Jg(fe,gu($g(N)));_=t_(F.body,n_,Ae,Ne)}}ce.isString(w)||(w=w?"include":"omit");const B=c&&"credentials"in n.prototype,K={...C,signal:X,method:y.toUpperCase(),headers:Z.normalize().toJSON(),body:_,duplex:"half",credentials:B?w:void 0};ne=c&&new n(E,K);let q=await(c?G(ne,C):G(E,K));const be=x&&(z==="stream"||z==="response");if(x&&(I||be&&pe)){const F={};["status","statusText","headers"].forEach(Be=>{F[Be]=q[Be]});const ae=ce.toFiniteNumber(q.headers.get("content-length")),[Ae,Ne]=I&&Jg(ae,gu($g(I),!0))||[];q=new r(t_(q.body,n_,Ae,()=>{Ne&&Ne(),pe&&pe()}),F)}z=z||"text";let Te=await g[ce.findKey(g,z)||"text"](q,M);return!be&&pe&&pe(),await new Promise((F,ae)=>{Qv(F,ae,{data:Te,headers:ei.from(q.headers),status:q.status,statusText:q.statusText,config:M,request:ne})})}catch(B){throw pe&&pe(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new ht("Network Error",ht.ERR_NETWORK,M,ne),{cause:B.cause||B}):ht.from(B,B&&B.code,M,ne)}}},kE=new Map,ey=a=>{let e=a&&a.env||{};const{fetch:n,Request:r,Response:o}=e,c=[r,o,n];let u=c.length,d=u,m,p,x=kE;for(;d--;)m=c[d],p=x.get(m),p===void 0&&x.set(m,p=d?new Map:GE(e)),x=p;return p};ey();const Fp={http:sE,xhr:FE,fetch:{get:ey}};ce.forEach(Fp,(a,e)=>{if(a){try{Object.defineProperty(a,"name",{value:e})}catch{}Object.defineProperty(a,"adapterName",{value:e})}});const s_=a=>`- ${a}`,XE=a=>ce.isFunction(a)||a===null||a===!1;function WE(a,e){a=ce.isArray(a)?a:[a];const{length:n}=a;let r,o;const c={};for(let u=0;u<n;u++){r=a[u];let d;if(o=r,!XE(r)&&(o=Fp[(d=String(r)).toLowerCase()],o===void 0))throw new ht(`Unknown adapter '${d}'`);if(o&&(ce.isFunction(o)||(o=o.get(e))))break;c[d||"#"+u]=o}if(!o){const u=Object.entries(c).map(([m,p])=>`adapter ${m} `+(p===!1?"is not supported by the environment":"is not available in the build"));let d=n?u.length>1?`since :
`+u.map(s_).join(`
`):" "+s_(u[0]):"as no adapter specified";throw new ht("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return o}const ty={getAdapter:WE,adapters:Fp};function Kd(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new to(null,a)}function o_(a){return Kd(a),a.headers=ei.from(a.headers),a.data=Zd.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),ty.getAdapter(a.adapter||Sl.adapter,a)(a).then(function(r){return Kd(a),r.data=Zd.call(a,a.transformResponse,r),r.headers=ei.from(r.headers),r},function(r){return Kv(r)||(Kd(a),r&&r.response&&(r.response.data=Zd.call(a,a.transformResponse,r.response),r.response.headers=ei.from(r.response.headers))),Promise.reject(r)})}const ny="1.13.2",Ru={};["object","boolean","number","function","string","symbol"].forEach((a,e)=>{Ru[a]=function(r){return typeof r===a||"a"+(e<1?"n ":" ")+a}});const l_={};Ru.transitional=function(e,n,r){function o(c,u){return"[Axios v"+ny+"] Transitional option '"+c+"'"+u+(r?". "+r:"")}return(c,u,d)=>{if(e===!1)throw new ht(o(u," has been removed"+(n?" in "+n:"")),ht.ERR_DEPRECATED);return n&&!l_[u]&&(l_[u]=!0,console.warn(o(u," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(c,u,d):!0}};Ru.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function qE(a,e,n){if(typeof a!="object")throw new ht("options must be an object",ht.ERR_BAD_OPTION_VALUE);const r=Object.keys(a);let o=r.length;for(;o-- >0;){const c=r[o],u=e[c];if(u){const d=a[c],m=d===void 0||u(d,c,a);if(m!==!0)throw new ht("option "+c+" must be "+m,ht.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ht("Unknown option "+c,ht.ERR_BAD_OPTION)}}const uu={assertOptions:qE,validators:Ru},Vi=uu.validators;let qr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Kg,response:new Kg}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const c=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?c&&!String(r.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+c):r.stack=c}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=jr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:c}=n;r!==void 0&&uu.assertOptions(r,{silentJSONParsing:Vi.transitional(Vi.boolean),forcedJSONParsing:Vi.transitional(Vi.boolean),clarifyTimeoutError:Vi.transitional(Vi.boolean)},!1),o!=null&&(ce.isFunction(o)?n.paramsSerializer={serialize:o}:uu.assertOptions(o,{encode:Vi.function,serialize:Vi.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),uu.assertOptions(n,{baseUrl:Vi.spelling("baseURL"),withXsrfToken:Vi.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let u=c&&ce.merge(c.common,c[n.method]);c&&ce.forEach(["delete","get","head","post","put","patch","common"],M=>{delete c[M]}),n.headers=ei.concat(u,c);const d=[];let m=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(n)===!1||(m=m&&E.synchronous,d.unshift(E.fulfilled,E.rejected))});const p=[];this.interceptors.response.forEach(function(E){p.push(E.fulfilled,E.rejected)});let x,g=0,v;if(!m){const M=[o_.bind(this),void 0];for(M.unshift(...d),M.push(...p),v=M.length,x=Promise.resolve(n);g<v;)x=x.then(M[g++],M[g++]);return x}v=d.length;let b=n;for(;g<v;){const M=d[g++],E=d[g++];try{b=M(b)}catch(y){E.call(this,y);break}}try{x=o_.call(this,b)}catch(M){return Promise.reject(M)}for(g=0,v=p.length;g<v;)x=x.then(p[g++],p[g++]);return x}getUri(e){e=jr(this.defaults,e);const n=Jv(e.baseURL,e.url,e.allowAbsoluteUrls);return jv(n,e.params,e.paramsSerializer)}};ce.forEach(["delete","get","head","options"],function(e){qr.prototype[e]=function(n,r){return this.request(jr(r||{},{method:e,url:n,data:(r||{}).data}))}});ce.forEach(["post","put","patch"],function(e){function n(r){return function(c,u,d){return this.request(jr(d||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:c,data:u}))}}qr.prototype[e]=n(),qr.prototype[e+"Form"]=n(!0)});let jE=class iy{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(c){n=c});const r=this;this.promise.then(o=>{if(!r._listeners)return;let c=r._listeners.length;for(;c-- >0;)r._listeners[c](o);r._listeners=null}),this.promise.then=o=>{let c;const u=new Promise(d=>{r.subscribe(d),c=d}).then(o);return u.cancel=function(){r.unsubscribe(c)},u},e(function(c,u,d){r.reason||(r.reason=new to(c,u,d),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new iy(function(o){e=o}),cancel:e}}};function YE(a){return function(n){return a.apply(null,n)}}function ZE(a){return ce.isObject(a)&&a.isAxiosError===!0}const Oh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Oh).forEach(([a,e])=>{Oh[e]=a});function ay(a){const e=new qr(a),n=Pv(qr.prototype.request,e);return ce.extend(n,qr.prototype,e,{allOwnKeys:!0}),ce.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return ay(jr(a,o))},n}const un=ay(Sl);un.Axios=qr;un.CanceledError=to;un.CancelToken=jE;un.isCancel=Kv;un.VERSION=ny;un.toFormData=Au;un.AxiosError=ht;un.Cancel=un.CanceledError;un.all=function(e){return Promise.all(e)};un.spread=YE;un.isAxiosError=ZE;un.mergeConfig=jr;un.AxiosHeaders=ei;un.formToJSON=a=>Zv(ce.isHTMLForm(a)?new FormData(a):a);un.getAdapter=ty.getAdapter;un.HttpStatusCode=Oh;un.default=un;const{Axios:Kw,AxiosError:Qw,CanceledError:Jw,isCancel:$w,CancelToken:eD,VERSION:tD,all:nD,Cancel:iD,isAxiosError:aD,spread:rD,toFormData:sD,AxiosHeaders:oD,HttpStatusCode:lD,formToJSON:cD,getAdapter:uD,mergeConfig:fD}=un,sr=un.create({baseURL:"http://localhost:3000",withCredentials:!0});const zp="181",KE=0,c_=1,QE=2,ry=1,JE=2,Ma=3,xr=0,Wn=1,Ea=2,Ca=0,Xs=1,Ph=2,u_=3,f_=4,$E=5,Gr=100,e3=101,t3=102,n3=103,i3=104,a3=200,r3=201,s3=202,o3=203,Fh=204,zh=205,l3=206,c3=207,u3=208,f3=209,d3=210,h3=211,p3=212,m3=213,x3=214,Bh=0,Ih=1,Hh=2,js=3,Vh=4,Gh=5,kh=6,Xh=7,Bp=0,g3=1,_3=2,mr=0,v3=1,y3=2,S3=3,b3=4,M3=5,E3=6,T3=7,sy=300,Ys=301,Zs=302,Wh=303,qh=304,Cu=306,jh=1e3,Ta=1001,Yh=1002,hi=1003,A3=1004,Bc=1005,Ei=1006,Qd=1007,Wr=1008,qi=1009,oy=1010,ly=1011,ul=1012,Ip=1013,Yr=1014,Aa=1015,no=1016,Hp=1017,Vp=1018,fl=1020,cy=35902,uy=35899,fy=1021,dy=1022,Li=1023,dl=1026,hl=1027,hy=1028,Gp=1029,kp=1030,Xp=1031,Wp=1033,fu=33776,du=33777,hu=33778,pu=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,ep=37492,tp=37496,np=37808,ip=37809,ap=37810,rp=37811,sp=37812,op=37813,lp=37814,cp=37815,up=37816,fp=37817,dp=37818,hp=37819,pp=37820,mp=37821,xp=36492,gp=36494,_p=36495,vp=36283,yp=36284,Sp=36285,bp=36286,R3=3200,C3=3201,py=0,w3=1,hr="",Mi="srgb",Ks="srgb-linear",_u="linear",qt="srgb",ws=7680,d_=519,D3=512,U3=513,N3=514,my=515,L3=516,O3=517,P3=518,F3=519,h_=35044,p_="300 es",ki=2e3,vu=2001;function xy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function yu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function z3(){const a=yu("canvas");return a.style.display="block",a}const m_={};function x_(...a){const e="THREE."+a.shift();console.log(e,...a)}function dt(...a){const e="THREE."+a.shift();console.warn(e,...a)}function on(...a){const e="THREE."+a.shift();console.error(e,...a)}function pl(...a){const e=a.join(" ");e in m_||(m_[e]=!0,dt(...a))}function B3(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class io{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=Math.PI/180,Mp=180/Math.PI;function bl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Ct(a,e,n){return Math.max(e,Math.min(n,a))}function I3(a,e){return(a%e+e)%e}function $d(a,e,n){return(1-n)*a+n*e}function $o(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,n=0){Dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ml{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,d){let m=r[o+0],p=r[o+1],x=r[o+2],g=r[o+3],v=c[u+0],b=c[u+1],M=c[u+2],E=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=x,e[n+3]=g;return}if(d>=1){e[n+0]=v,e[n+1]=b,e[n+2]=M,e[n+3]=E;return}if(g!==E||m!==v||p!==b||x!==M){let y=m*v+p*b+x*M+g*E;y<0&&(v=-v,b=-b,M=-M,E=-E,y=-y);let _=1-d;if(y<.9995){const U=Math.acos(y),D=Math.sin(U);_=Math.sin(_*U)/D,d=Math.sin(d*U)/D,m=m*_+v*d,p=p*_+b*d,x=x*_+M*d,g=g*_+E*d}else{m=m*_+v*d,p=p*_+b*d,x=x*_+M*d,g=g*_+E*d;const U=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=U,p*=U,x*=U,g*=U}}e[n]=m,e[n+1]=p,e[n+2]=x,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,u){const d=r[o],m=r[o+1],p=r[o+2],x=r[o+3],g=c[u],v=c[u+1],b=c[u+2],M=c[u+3];return e[n]=d*M+x*g+m*b-p*v,e[n+1]=m*M+x*v+p*g-d*b,e[n+2]=p*M+x*b+d*v-m*g,e[n+3]=x*M-d*g-m*v-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(o/2),g=d(c/2),v=m(r/2),b=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=v*x*g+p*b*M,this._y=p*b*g-v*x*M,this._z=p*x*M+v*b*g,this._w=p*x*g-v*b*M;break;case"YXZ":this._x=v*x*g+p*b*M,this._y=p*b*g-v*x*M,this._z=p*x*M-v*b*g,this._w=p*x*g+v*b*M;break;case"ZXY":this._x=v*x*g-p*b*M,this._y=p*b*g+v*x*M,this._z=p*x*M+v*b*g,this._w=p*x*g-v*b*M;break;case"ZYX":this._x=v*x*g-p*b*M,this._y=p*b*g+v*x*M,this._z=p*x*M-v*b*g,this._w=p*x*g+v*b*M;break;case"YZX":this._x=v*x*g+p*b*M,this._y=p*b*g+v*x*M,this._z=p*x*M-v*b*g,this._w=p*x*g-v*b*M;break;case"XZY":this._x=v*x*g-p*b*M,this._y=p*b*g-v*x*M,this._z=p*x*M+v*b*g,this._w=p*x*g+v*b*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],x=n[6],g=n[10],v=r+d+g;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-p)*b,this._z=(u-o)*b}else if(r>d&&r>g){const b=2*Math.sqrt(1+r-d-g);this._w=(x-m)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(c+p)/b}else if(d>g){const b=2*Math.sqrt(1+d-r-g);this._w=(c-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+g-r-d);this._w=(u-o)/b,this._x=(c+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,x=n._w;return this._x=r*x+u*d+o*p-c*m,this._y=o*x+u*m+c*d-r*p,this._z=c*x+u*p+r*m-o*d,this._w=u*x-r*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,n=Math.sin(n*p)/x,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(g_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(g_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*r),x=2*(d*n-c*o),g=2*(c*r-u*n);return this.x=n+m*p+u*g-d*x,this.y=r+m*x+d*p-c*g,this.z=o+m*g+c*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this.z=Ct(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this.z=Ct(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eh=new se,g_=new Ml;class gt{constructor(e,n,r,o,c,u,d,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,m,p)}set(e,n,r,o,c,u,d,m,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=c,x[5]=m,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[3],m=r[6],p=r[1],x=r[4],g=r[7],v=r[2],b=r[5],M=r[8],E=o[0],y=o[3],_=o[6],U=o[1],D=o[4],P=o[7],I=o[2],N=o[5],z=o[8];return c[0]=u*E+d*U+m*I,c[3]=u*y+d*D+m*N,c[6]=u*_+d*P+m*z,c[1]=p*E+x*U+g*I,c[4]=p*y+x*D+g*N,c[7]=p*_+x*P+g*z,c[2]=v*E+b*U+M*I,c[5]=v*y+b*D+M*N,c[8]=v*_+b*P+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return n*u*x-n*d*p-r*c*x+r*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=x*u-d*p,v=d*m-x*c,b=p*c-u*m,M=n*g+r*v+o*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*p-x*r)*E,e[2]=(d*r-o*u)*E,e[3]=v*E,e[4]=(x*n-o*m)*E,e[5]=(o*c-d*n)*E,e[6]=b*E,e[7]=(r*m-p*n)*E,e[8]=(u*n-r*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(th.makeScale(e,n)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,n){return this.premultiply(th.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new gt,__=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v_=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H3(){const a={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===qt&&(o.r=wa(o.r),o.g=wa(o.g),o.b=wa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=Ws(o.r),o.g=Ws(o.g),o.b=Ws(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===hr?_u:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return pl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return pl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ks]:{primaries:e,whitePoint:r,transfer:_u,toXYZ:__,fromXYZ:v_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:__,fromXYZ:v_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),a}const Pt=H3();function wa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ws(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ds;class V3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=yu("canvas")),Ds.width=e.width,Ds.height=e.height;const o=Ds.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=wa(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(wa(n[r]/255)*255):n[r]=wa(n[r]);return{data:n,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G3=0;class qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G3++}),this.uuid=bl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(nh(o[u].image)):c.push(nh(o[u]))}else c=nh(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function nh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?V3.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let k3=0;const ih=new se;class Bn extends io{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,r=Ta,o=Ta,c=Ei,u=Wr,d=Li,m=qi,p=Bn.DEFAULT_ANISOTROPY,x=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k3++}),this.uuid=bl(),this.name="",this.source=new qp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){dt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=sy;Bn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,r=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,p=m[0],x=m[4],g=m[8],v=m[1],b=m[5],M=m[9],E=m[2],y=m[6],_=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,P=(b+1)/2,I=(_+1)/2,N=(x+v)/4,z=(g+E)/4,Z=(M+y)/4;return D>P&&D>I?D<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(D),o=N/r,c=z/r):P>I?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=N/o,c=Z/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=z/c,o=Z/c),this.set(r,o,c,n),this}let U=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(v-x)*(v-x));return Math.abs(U)<.001&&(U=1),this.x=(y-M)/U,this.y=(g-E)/U,this.z=(v-x)/U,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ct(this.x,e.x,n.x),this.y=Ct(this.y,e.y,n.y),this.z=Ct(this.z,e.z,n.z),this.w=Ct(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ct(this.x,e,n),this.y=Ct(this.y,e,n),this.z=Ct(this.z,e,n),this.w=Ct(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X3 extends io{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new Bn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new qp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends X3{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class gy extends Bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W3 extends Bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(wi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(wi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=wi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,wi):wi.fromBufferAttribute(c,u),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ic.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ic.copy(r.boundingBox)),Ic.applyMatrix4(e.matrixWorld),this.union(Ic)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Hc.subVectors(this.max,el),Us.subVectors(e.a,el),Ns.subVectors(e.b,el),Ls.subVectors(e.c,el),or.subVectors(Ns,Us),lr.subVectors(Ls,Ns),Pr.subVectors(Us,Ls);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Pr.z,Pr.y,or.z,0,-or.x,lr.z,0,-lr.x,Pr.z,0,-Pr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Pr.y,Pr.x,0];return!ah(n,Us,Ns,Ls,Hc)||(n=[1,0,0,0,1,0,0,0,1],!ah(n,Us,Ns,Ls,Hc))?!1:(Vc.crossVectors(or,lr),n=[Vc.x,Vc.y,Vc.z],ah(n,Us,Ns,Ls,Hc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new se,new se,new se,new se,new se,new se,new se,new se],wi=new se,Ic=new El,Us=new se,Ns=new se,Ls=new se,or=new se,lr=new se,Pr=new se,el=new se,Hc=new se,Vc=new se,Fr=new se;function ah(a,e,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Fr.fromArray(a,c);const d=o.x*Math.abs(Fr.x)+o.y*Math.abs(Fr.y)+o.z*Math.abs(Fr.z),m=e.dot(Fr),p=n.dot(Fr),x=r.dot(Fr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const q3=new El,tl=new se,rh=new se;class wu{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):q3.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(tl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(rh)),this.expandByPoint(tl.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _a=new se,sh=new se,Gc=new se,cr=new se,oh=new se,kc=new se,lh=new se;class jp{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_a.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,n),_a.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){sh.copy(e).add(n).multiplyScalar(.5),Gc.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(sh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Gc),d=cr.dot(this.direction),m=-cr.dot(Gc),p=cr.lengthSq(),x=Math.abs(1-u*u);let g,v,b,M;if(x>0)if(g=u*m-d,v=u*d-m,M=c*x,g>=0)if(v>=-M)if(v<=M){const E=1/x;g*=E,v*=E,b=g*(g+u*v+2*d)+v*(u*g+v+2*m)+p}else v=c,g=Math.max(0,-(u*v+d)),b=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(u*v+d)),b=-g*g+v*(v+2*m)+p;else v<=-M?(g=Math.max(0,-(-u*c+d)),v=g>0?-c:Math.min(Math.max(-c,-m),c),b=-g*g+v*(v+2*m)+p):v<=M?(g=0,v=Math.min(Math.max(-c,-m),c),b=v*(v+2*m)+p):(g=Math.max(0,-(u*c+d)),v=g>0?c:Math.min(Math.max(-c,-m),c),b=-g*g+v*(v+2*m)+p);else v=u>0?-c:c,g=Math.max(0,-(u*v+d)),b=-g*g+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(sh).addScaledVector(Gc,v),b}intersectSphere(e,n){_a.subVectors(e.center,this.origin);const r=_a.dot(this.direction),o=_a.dot(_a)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),x>=0?(c=(e.min.y-v.y)*x,u=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,u=(e.min.y-v.y)*x),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),g>=0?(d=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,n,r,o,c){oh.subVectors(n,e),kc.subVectors(r,e),lh.crossVectors(oh,kc);let u=this.direction.dot(lh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;cr.subVectors(this.origin,e);const m=d*this.direction.dot(kc.crossVectors(cr,kc));if(m<0)return null;const p=d*this.direction.dot(oh.cross(cr));if(p<0||m+p>u)return null;const x=-d*cr.dot(lh);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,n,r,o,c,u,d,m,p,x,g,v,b,M,E,y){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,d,m,p,x,g,v,b,M,E,y)}set(e,n,r,o,c,u,d,m,p,x,g,v,b,M,E,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=c,_[5]=u,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=v,_[3]=b,_[7]=M,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),c=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=u*x,b=u*g,M=d*x,E=d*g;n[0]=m*x,n[4]=-m*g,n[8]=p,n[1]=b+M*p,n[5]=v-E*p,n[9]=-d*m,n[2]=E-v*p,n[6]=M+b*p,n[10]=u*m}else if(e.order==="YXZ"){const v=m*x,b=m*g,M=p*x,E=p*g;n[0]=v+E*d,n[4]=M*d-b,n[8]=u*p,n[1]=u*g,n[5]=u*x,n[9]=-d,n[2]=b*d-M,n[6]=E+v*d,n[10]=u*m}else if(e.order==="ZXY"){const v=m*x,b=m*g,M=p*x,E=p*g;n[0]=v-E*d,n[4]=-u*g,n[8]=M+b*d,n[1]=b+M*d,n[5]=u*x,n[9]=E-v*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const v=u*x,b=u*g,M=d*x,E=d*g;n[0]=m*x,n[4]=M*p-b,n[8]=v*p+E,n[1]=m*g,n[5]=E*p+v,n[9]=b*p-M,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const v=u*m,b=u*p,M=d*m,E=d*p;n[0]=m*x,n[4]=E-v*g,n[8]=M*g+b,n[1]=g,n[5]=u*x,n[9]=-d*x,n[2]=-p*x,n[6]=b*g+M,n[10]=v-E*g}else if(e.order==="XZY"){const v=u*m,b=u*p,M=d*m,E=d*p;n[0]=m*x,n[4]=-g,n[8]=p*x,n[1]=v*g+E,n[5]=u*x,n[9]=b*g-M,n[2]=M*g-b,n[6]=d*x,n[10]=E*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j3,e,Y3)}lookAt(e,n,r){const o=this.elements;return ci.subVectors(e,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ur.crossVectors(r,ci),ur.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ur.crossVectors(r,ci)),ur.normalize(),Xc.crossVectors(ci,ur),o[0]=ur.x,o[4]=Xc.x,o[8]=ci.x,o[1]=ur.y,o[5]=Xc.y,o[9]=ci.y,o[2]=ur.z,o[6]=Xc.z,o[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],d=r[4],m=r[8],p=r[12],x=r[1],g=r[5],v=r[9],b=r[13],M=r[2],E=r[6],y=r[10],_=r[14],U=r[3],D=r[7],P=r[11],I=r[15],N=o[0],z=o[4],Z=o[8],w=o[12],C=o[1],G=o[5],X=o[9],ne=o[13],pe=o[2],fe=o[6],B=o[10],K=o[14],q=o[3],be=o[7],Te=o[11],F=o[15];return c[0]=u*N+d*C+m*pe+p*q,c[4]=u*z+d*G+m*fe+p*be,c[8]=u*Z+d*X+m*B+p*Te,c[12]=u*w+d*ne+m*K+p*F,c[1]=x*N+g*C+v*pe+b*q,c[5]=x*z+g*G+v*fe+b*be,c[9]=x*Z+g*X+v*B+b*Te,c[13]=x*w+g*ne+v*K+b*F,c[2]=M*N+E*C+y*pe+_*q,c[6]=M*z+E*G+y*fe+_*be,c[10]=M*Z+E*X+y*B+_*Te,c[14]=M*w+E*ne+y*K+_*F,c[3]=U*N+D*C+P*pe+I*q,c[7]=U*z+D*G+P*fe+I*be,c[11]=U*Z+D*X+P*B+I*Te,c[15]=U*w+D*ne+P*K+I*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],x=e[2],g=e[6],v=e[10],b=e[14],M=e[3],E=e[7],y=e[11],_=e[15];return M*(+c*m*g-o*p*g-c*d*v+r*p*v+o*d*b-r*m*b)+E*(+n*m*b-n*p*v+c*u*v-o*u*b+o*p*x-c*m*x)+y*(+n*p*g-n*d*b-c*u*g+r*u*b+c*d*x-r*p*x)+_*(-o*d*x-n*m*g+n*d*v+o*u*g-r*u*v+r*m*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=e[9],v=e[10],b=e[11],M=e[12],E=e[13],y=e[14],_=e[15],U=g*y*p-E*v*p+E*m*b-d*y*b-g*m*_+d*v*_,D=M*v*p-x*y*p-M*m*b+u*y*b+x*m*_-u*v*_,P=x*E*p-M*g*p+M*d*b-u*E*b-x*d*_+u*g*_,I=M*g*m-x*E*m-M*d*v+u*E*v+x*d*y-u*g*y,N=n*U+r*D+o*P+c*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=U*z,e[1]=(E*v*c-g*y*c-E*o*b+r*y*b+g*o*_-r*v*_)*z,e[2]=(d*y*c-E*m*c+E*o*p-r*y*p-d*o*_+r*m*_)*z,e[3]=(g*m*c-d*v*c-g*o*p+r*v*p+d*o*b-r*m*b)*z,e[4]=D*z,e[5]=(x*y*c-M*v*c+M*o*b-n*y*b-x*o*_+n*v*_)*z,e[6]=(M*m*c-u*y*c-M*o*p+n*y*p+u*o*_-n*m*_)*z,e[7]=(u*v*c-x*m*c+x*o*p-n*v*p-u*o*b+n*m*b)*z,e[8]=P*z,e[9]=(M*g*c-x*E*c-M*r*b+n*E*b+x*r*_-n*g*_)*z,e[10]=(u*E*c-M*d*c+M*r*p-n*E*p-u*r*_+n*d*_)*z,e[11]=(x*d*c-u*g*c-x*r*p+n*g*p+u*r*b-n*d*b)*z,e[12]=I*z,e[13]=(x*E*o-M*g*o+M*r*v-n*E*v-x*r*y+n*g*y)*z,e[14]=(M*d*o-u*E*o-M*r*m+n*E*m+u*r*y-n*d*y)*z,e[15]=(u*g*o-x*d*o+x*r*m-n*g*m-u*r*v+n*d*v)*z,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,d=e.y,m=e.z,p=c*u,x=c*d;return this.set(p*u+r,p*d-o*m,p*m+o*d,0,p*d+o*m,x*d+r,x*m-o*u,0,p*m-o*d,x*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,x=u+u,g=d+d,v=c*p,b=c*x,M=c*g,E=u*x,y=u*g,_=d*g,U=m*p,D=m*x,P=m*g,I=r.x,N=r.y,z=r.z;return o[0]=(1-(E+_))*I,o[1]=(b+P)*I,o[2]=(M-D)*I,o[3]=0,o[4]=(b-P)*N,o[5]=(1-(v+_))*N,o[6]=(y+U)*N,o[7]=0,o[8]=(M+D)*z,o[9]=(y-U)*z,o[10]=(1-(v+E))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Os.set(o[0],o[1],o[2]).length();const u=Os.set(o[4],o[5],o[6]).length(),d=Os.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Di.copy(this);const p=1/c,x=1/u,g=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,n.setFromRotationMatrix(Di),r.x=c,r.y=u,r.z=d,this}makePerspective(e,n,r,o,c,u,d=ki,m=!1){const p=this.elements,x=2*c/(n-e),g=2*c/(r-o),v=(n+e)/(n-e),b=(r+o)/(r-o);let M,E;if(m)M=c/(u-c),E=u*c/(u-c);else if(d===ki)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(d===vu)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,u,d=ki,m=!1){const p=this.elements,x=2/(n-e),g=2/(r-o),v=-(n+e)/(n-e),b=-(r+o)/(r-o);let M,E;if(m)M=1/(u-c),E=u/(u-c);else if(d===ki)M=-2/(u-c),E=-(u+c)/(u-c);else if(d===vu)M=-1/(u-c),E=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Os=new se,Di=new tn,j3=new se(0,0,0),Y3=new se(1,1,1),ur=new se,Xc=new se,ci=new se,y_=new tn,S_=new Ml;class ji{constructor(e=0,n=0,r=0,o=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],x=o[9],g=o[2],v=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ct(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return S_.setFromEuler(this),this.setFromQuaternion(S_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Yp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z3=0;const b_=new se,Ps=new Ml,va=new tn,Wc=new se,nl=new se,K3=new se,Q3=new Ml,M_=new se(1,0,0),E_=new se(0,1,0),T_=new se(0,0,1),A_={type:"added"},J3={type:"removed"},Fs={type:"childadded",child:null},ch={type:"childremoved",child:null};class Ln extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z3++}),this.uuid=bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new se,n=new ji,r=new Ml,o=new se(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new gt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(M_,e)}rotateY(e){return this.rotateOnAxis(E_,e)}rotateZ(e){return this.rotateOnAxis(T_,e)}translateOnAxis(e,n){return b_.copy(e).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(M_,e)}translateY(e){return this.translateOnAxis(E_,e)}translateZ(e){return this.translateOnAxis(T_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Wc.copy(e):Wc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(nl,Wc,this.up):va.lookAt(Wc,nl,this.up),this.quaternion.setFromRotationMatrix(va),o&&(va.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(va),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(J3),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A_),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,K3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,Q3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),x=u(e.images),g=u(e.shapes),v=u(e.skeletons),b=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),b.length>0&&(r.animations=b),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ln.DEFAULT_UP=new se(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new se,ya=new se,uh=new se,Sa=new se,zs=new se,Bs=new se,R_=new se,fh=new se,dh=new se,hh=new se,ph=new jt,mh=new jt,xh=new jt;class Ni{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ui.subVectors(e,n),o.cross(Ui);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Ui.subVectors(o,n),ya.subVectors(r,n),uh.subVectors(e,n);const u=Ui.dot(Ui),d=Ui.dot(ya),m=Ui.dot(uh),p=ya.dot(ya),x=ya.dot(uh),g=u*p-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,b=(p*m-d*x)*v,M=(u*x-d*m)*v;return c.set(1-b-M,M,b)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,n,r,o,c,u,d,m){return this.getBarycoord(e,n,r,o,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(u,Sa.y),m.addScaledVector(d,Sa.z),m)}static getInterpolatedAttribute(e,n,r,o,c,u){return ph.setScalar(0),mh.setScalar(0),xh.setScalar(0),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,r),xh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ph,c.x),u.addScaledVector(mh,c.y),u.addScaledVector(xh,c.z),u}static isFrontFacing(e,n,r,o){return Ui.subVectors(r,n),ya.subVectors(e,n),Ui.cross(ya).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ui.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Ni.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,d;zs.subVectors(o,r),Bs.subVectors(c,r),fh.subVectors(e,r);const m=zs.dot(fh),p=Bs.dot(fh);if(m<=0&&p<=0)return n.copy(r);dh.subVectors(e,o);const x=zs.dot(dh),g=Bs.dot(dh);if(x>=0&&g<=x)return n.copy(o);const v=m*g-x*p;if(v<=0&&m>=0&&x<=0)return u=m/(m-x),n.copy(r).addScaledVector(zs,u);hh.subVectors(e,c);const b=zs.dot(hh),M=Bs.dot(hh);if(M>=0&&b<=M)return n.copy(c);const E=b*p-m*M;if(E<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(r).addScaledVector(Bs,d);const y=x*M-b*g;if(y<=0&&g-x>=0&&b-M>=0)return R_.subVectors(c,o),d=(g-x)/(g-x+(b-M)),n.copy(o).addScaledVector(R_,d);const _=1/(y+E+v);return u=E*_,d=v*_,n.copy(r).addScaledVector(zs,u).addScaledVector(Bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},qc={h:0,s:0,l:0};function gh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Pt.workingColorSpace){if(e=I3(e,1),n=Ct(n,0,1),r=Ct(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=gh(u,c,e+1/3),this.g=gh(u,c,e),this.b=gh(u,c,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,n=Mi){function r(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mi){const r=_y[e.toLowerCase()];return r!==void 0?this.setHex(r,n):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Pt.workingToColorSpace(Fn.copy(this),e),Math.round(Ct(Fn.r*255,0,255))*65536+Math.round(Ct(Fn.g*255,0,255))*256+Math.round(Ct(Fn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.workingToColorSpace(Fn.copy(this),n);const r=Fn.r,o=Fn.g,c=Fn.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,p;const x=(d+u)/2;if(d===u)m=0,p=0;else{const g=u-d;switch(p=x<=.5?g/(u+d):g/(2-u-d),u){case r:m=(o-c)/g+(o<c?6:0);break;case o:m=(c-r)/g+2;break;case c:m=(r-o)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,n=Pt.workingColorSpace){return Pt.workingToColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Mi){Pt.workingToColorSpace(Fn.copy(this),e);const n=Fn.r,r=Fn.g,o=Fn.b;return e!==Mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(qc);const r=$d(fr.h,qc.h,n),o=$d(fr.s,qc.s,n),c=$d(fr.l,qc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new wt;wt.NAMES=_y;let $3=0;class ao extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$3++}),this.uuid=bl(),this.name="",this.type="Material",this.blending=Xs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=zh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){dt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fh&&(r.blendSrc=this.blendSrc),this.blendDst!==zh&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ll extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new se,jc=new Dt;let eT=0;class Xi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=h_,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)jc.fromBufferAttribute(this,n),jc.applyMatrix3(e),this.setXY(n,jc.x,jc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=$o(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$o(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$o(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$o(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Jn(n,this.array),r=Jn(r,this.array),o=Jn(o,this.array),c=Jn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h_&&(e.usage=this.usage),e}}class vy extends Xi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class yy extends Xi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ti extends Xi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let tT=0;const bi=new tn,_h=new Ln,Is=new se,ui=new El,il=new El,Rn=new se;class Ti extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xy(e)?yy:vy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,n,r){return bi.makeTranslation(e,n,r),this.applyMatrix4(bi),this}scale(e,n,r){return bi.makeScale(e,n,r),this.applyMatrix4(bi),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ti(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];il.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(ui.min,il.min),ui.expandByPoint(Rn),Rn.addVectors(ui.max,il.max),ui.expandByPoint(Rn)):(ui.expandByPoint(il.min),ui.expandByPoint(il.max))}ui.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Rn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Rn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Rn.fromBufferAttribute(d,p),m&&(Is.fromBufferAttribute(e,p),Rn.add(Is)),o=Math.max(o,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new se,m[Z]=new se;const p=new se,x=new se,g=new se,v=new Dt,b=new Dt,M=new Dt,E=new se,y=new se;function _(Z,w,C){p.fromBufferAttribute(r,Z),x.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),v.fromBufferAttribute(c,Z),b.fromBufferAttribute(c,w),M.fromBufferAttribute(c,C),x.sub(p),g.sub(p),b.sub(v),M.sub(v);const G=1/(b.x*M.y-M.x*b.y);isFinite(G)&&(E.copy(x).multiplyScalar(M.y).addScaledVector(g,-b.y).multiplyScalar(G),y.copy(g).multiplyScalar(b.x).addScaledVector(x,-M.x).multiplyScalar(G),d[Z].add(E),d[w].add(E),d[C].add(E),m[Z].add(y),m[w].add(y),m[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Z=0,w=U.length;Z<w;++Z){const C=U[Z],G=C.start,X=C.count;for(let ne=G,pe=G+X;ne<pe;ne+=3)_(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const D=new se,P=new se,I=new se,N=new se;function z(Z){I.fromBufferAttribute(o,Z),N.copy(I);const w=d[Z];D.copy(w),D.sub(I.multiplyScalar(I.dot(w))).normalize(),P.crossVectors(N,w);const G=P.dot(m[Z])<0?-1:1;u.setXYZW(Z,D.x,D.y,D.z,G)}for(let Z=0,w=U.length;Z<w;++Z){const C=U[Z],G=C.start,X=C.count;for(let ne=G,pe=G+X;ne<pe;ne+=3)z(e.getX(ne+0)),z(e.getX(ne+1)),z(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,b=r.count;v<b;v++)r.setXYZ(v,0,0,0);const o=new se,c=new se,u=new se,d=new se,m=new se,p=new se,x=new se,g=new se;if(e)for(let v=0,b=e.count;v<b;v+=3){const M=e.getX(v+0),E=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),d.add(x),m.add(x),p.add(x),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,b=n.count;v<b;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),r.setXYZ(v+0,x.x,x.y,x.z),r.setXYZ(v+1,x.x,x.y,x.z),r.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Rn.fromBufferAttribute(e,n),Rn.normalize(),e.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,g=d.normalized,v=new p.constructor(m.length*x);let b=0,M=0;for(let E=0,y=m.length;E<y;E++){d.isInterleavedBufferAttribute?b=m[E]*d.data.stride+d.offset:b=m[E]*x;for(let _=0;_<x;_++)v[M++]=p[b++]}return new Xi(v,x,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ti,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,r);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,g=p.length;x<g;x++){const v=p[x],b=e(v,r);m.push(b)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,v=p.length;g<v;g++){const b=p[g];x.push(b.toJSON(e.data))}x.length>0&&(o[m]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let v=0,b=g.length;v<b;v++)x.push(g[v].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new tn,zr=new jp,Yc=new wu,w_=new se,Zc=new se,Kc=new se,Qc=new se,vh=new se,Jc=new se,D_=new se,$c=new se;class di extends Ln{constructor(e=new Ti,n=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Jc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],g=c[m];x!==0&&(vh.fromBufferAttribute(g,e),u?Jc.addScaledVector(vh,x):Jc.addScaledVector(vh.sub(n),x))}n.add(Jc)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Yc.copy(r.boundingSphere),Yc.applyMatrix4(c),zr.copy(e.ray).recast(e.near),!(Yc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Yc,w_)===null||zr.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(C_.copy(c).invert(),zr.copy(e.ray).applyMatrix4(C_),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,b=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const y=v[M],_=u[y.materialIndex],U=Math.max(y.start,b.start),D=Math.min(d.count,Math.min(y.start+y.count,b.start+b.count));for(let P=U,I=D;P<I;P+=3){const N=d.getX(P),z=d.getX(P+1),Z=d.getX(P+2);o=eu(this,_,e,r,p,x,g,N,z,Z),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,b.start),E=Math.min(d.count,b.start+b.count);for(let y=M,_=E;y<_;y+=3){const U=d.getX(y),D=d.getX(y+1),P=d.getX(y+2);o=eu(this,u,e,r,p,x,g,U,D,P),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const y=v[M],_=u[y.materialIndex],U=Math.max(y.start,b.start),D=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let P=U,I=D;P<I;P+=3){const N=P,z=P+1,Z=P+2;o=eu(this,_,e,r,p,x,g,N,z,Z),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,b.start),E=Math.min(m.count,b.start+b.count);for(let y=M,_=E;y<_;y+=3){const U=y,D=y+1,P=y+2;o=eu(this,u,e,r,p,x,g,U,D,P),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function nT(a,e,n,r,o,c,u,d){let m;if(e.side===Wn?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===xr,d),m===null)return null;$c.copy(d),$c.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo($c);return p<n.near||p>n.far?null:{distance:p,point:$c.clone(),object:a}}function eu(a,e,n,r,o,c,u,d,m,p){a.getVertexPosition(d,Zc),a.getVertexPosition(m,Kc),a.getVertexPosition(p,Qc);const x=nT(a,e,n,r,Zc,Kc,Qc,D_);if(x){const g=new se;Ni.getBarycoord(D_,Zc,Kc,Qc,g),o&&(x.uv=Ni.getInterpolatedAttribute(o,d,m,p,g,new Dt)),c&&(x.uv1=Ni.getInterpolatedAttribute(c,d,m,p,g,new Dt)),u&&(x.normal=Ni.getInterpolatedAttribute(u,d,m,p,g,new se),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new se,materialIndex:0};Ni.getNormal(Zc,Kc,Qc,v.normal),x.face=v,x.barycoord=g}return x}class Tl extends Ti{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],x=[],g=[];let v=0,b=0;M("z","y","x",-1,-1,r,n,e,u,c,0),M("z","y","x",1,-1,r,n,-e,u,c,1),M("x","z","y",1,1,e,r,n,o,u,2),M("x","z","y",1,-1,e,r,-n,o,u,3),M("x","y","z",1,-1,e,n,r,o,c,4),M("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new ti(p,3)),this.setAttribute("normal",new ti(x,3)),this.setAttribute("uv",new ti(g,2));function M(E,y,_,U,D,P,I,N,z,Z,w){const C=P/z,G=I/Z,X=P/2,ne=I/2,pe=N/2,fe=z+1,B=Z+1;let K=0,q=0;const be=new se;for(let Te=0;Te<B;Te++){const F=Te*G-ne;for(let ae=0;ae<fe;ae++){const Ae=ae*C-X;be[E]=Ae*U,be[y]=F*D,be[_]=pe,p.push(be.x,be.y,be.z),be[E]=0,be[y]=0,be[_]=N>0?1:-1,x.push(be.x,be.y,be.z),g.push(ae/z),g.push(1-Te/Z),K+=1}}for(let Te=0;Te<Z;Te++)for(let F=0;F<z;F++){const ae=v+F+fe*Te,Ae=v+F+fe*(Te+1),Ne=v+(F+1)+fe*(Te+1),Be=v+(F+1)+fe*Te;m.push(ae,Ae,Be),m.push(Ae,Ne,Be),q+=6}d.addGroup(b,q,w),b+=q,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Xn(a){const e={};for(let n=0;n<a.length;n++){const r=Qs(a[n]);for(const o in r)e[o]=r[o]}return e}function iT(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Sy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const aT={clone:Qs,merge:Xn};var rT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rT,this.fragmentShader=sT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=iT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class by extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new se,U_=new Dt,N_=new Dt;class fi extends by{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mp*2*Math.atan(Math.tan(Jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,U_,N_),n.subVectors(N_,U_)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jd*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Vs=1;class oT extends Ln{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new fi(Hs,Vs,e,n);o.layers=this.layers,this.add(o);const c=new fi(Hs,Vs,e,n);c.layers=this.layers,this.add(c);const u=new fi(Hs,Vs,e,n);u.layers=this.layers,this.add(u);const d=new fi(Hs,Vs,e,n);d.layers=this.layers,this.add(d);const m=new fi(Hs,Vs,e,n);m.layers=this.layers,this.add(m);const p=new fi(Hs,Vs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===vu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(g,v,b),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class My extends Bn{constructor(e=[],n=Ys,r,o,c,u,d,m,p,x){super(e,n,r,o,c,u,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lT extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new My(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Tl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Ca});c.uniforms.tEquirect.value=n;const u=new di(o,c),d=n.minFilter;return n.minFilter===Wr&&(n.minFilter=Ei),new oT(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}class sl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cT={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const y=n.getJointPose(E,r),_=this._getHandJoint(p,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=x.position.distanceTo(g.position),b=.02,M=.005;p.inputState.pinching&&v>b+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=b-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(cT)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class uT extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class fT extends Bn{constructor(e=null,n=1,r=1,o,c,u,d,m,p=hi,x=hi,g,v){super(null,u,d,m,p,x,o,c,g,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new se,dT=new se,hT=new gt;class Vr{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Sh.subVectors(r,n).cross(dT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Sh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||hT.getNormalMatrix(e),o=this.coplanarPoint(Sh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new wu,pT=new Dt(.5,.5),tu=new se;class Zp{constructor(e=new Vr,n=new Vr,r=new Vr,o=new Vr,c=new Vr,u=new Vr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ki,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],x=c[4],g=c[5],v=c[6],b=c[7],M=c[8],E=c[9],y=c[10],_=c[11],U=c[12],D=c[13],P=c[14],I=c[15];if(o[0].setComponents(p-u,b-x,_-M,I-U).normalize(),o[1].setComponents(p+u,b+x,_+M,I+U).normalize(),o[2].setComponents(p+d,b+g,_+E,I+D).normalize(),o[3].setComponents(p-d,b-g,_-E,I-D).normalize(),r)o[4].setComponents(m,v,y,P).normalize(),o[5].setComponents(p-m,b-v,_-y,I-P).normalize();else if(o[4].setComponents(p-m,b-v,_-y,I-P).normalize(),n===ki)o[5].setComponents(p+m,b+v,_+y,I+P).normalize();else if(n===vu)o[5].setComponents(m,v,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const n=pT.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(tu.x=o.normal.x>0?e.max.x:e.min.x,tu.y=o.normal.y>0?e.max.y:e.min.y,tu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ey extends ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const L_=new tn,Ep=new jp,nu=new wu,iu=new se;class mT extends Ln{constructor(e=new Ti,n=new Ey){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(o),nu.radius+=c,e.ray.intersectsSphere(nu)===!1)return;L_.copy(o).invert(),Ep.copy(e.ray).applyMatrix4(L_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const v=Math.max(0,u.start),b=Math.min(p.count,u.start+u.count);for(let M=v,E=b;M<E;M++){const y=p.getX(M);iu.fromBufferAttribute(g,y),O_(iu,y,m,o,e,n,this)}}else{const v=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let M=v,E=b;M<E;M++)iu.fromBufferAttribute(g,M),O_(iu,M,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function O_(a,e,n,r,o,c,u){const d=Ep.distanceSqToPoint(a);if(d<n){const m=new se;Ep.closestPointToPoint(a,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class P_ extends Bn{constructor(e,n,r,o,c,u,d,m,p){super(e,n,r,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ty extends Bn{constructor(e,n,r=Yr,o,c,u,d=hi,m=hi,p,x=dl,g=1){if(x!==dl&&x!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:g};super(v,o,c,u,d,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ay extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kp extends Ti{constructor(e=1,n=1,r=1,o=32,c=1,u=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const x=[],g=[],v=[],b=[];let M=0;const E=[],y=r/2;let _=0;U(),u===!1&&(e>0&&D(!0),n>0&&D(!1)),this.setIndex(x),this.setAttribute("position",new ti(g,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(b,2));function U(){const P=new se,I=new se;let N=0;const z=(n-e)/r;for(let Z=0;Z<=c;Z++){const w=[],C=Z/c,G=C*(n-e)+e;for(let X=0;X<=o;X++){const ne=X/o,pe=ne*m+d,fe=Math.sin(pe),B=Math.cos(pe);I.x=G*fe,I.y=-C*r+y,I.z=G*B,g.push(I.x,I.y,I.z),P.set(fe,z,B).normalize(),v.push(P.x,P.y,P.z),b.push(ne,1-C),w.push(M++)}E.push(w)}for(let Z=0;Z<o;Z++)for(let w=0;w<c;w++){const C=E[w][Z],G=E[w+1][Z],X=E[w+1][Z+1],ne=E[w][Z+1];(e>0||w!==0)&&(x.push(C,G,ne),N+=3),(n>0||w!==c-1)&&(x.push(G,X,ne),N+=3)}p.addGroup(_,N,0),_+=N}function D(P){const I=M,N=new Dt,z=new se;let Z=0;const w=P===!0?e:n,C=P===!0?1:-1;for(let X=1;X<=o;X++)g.push(0,y*C,0),v.push(0,C,0),b.push(.5,.5),M++;const G=M;for(let X=0;X<=o;X++){const pe=X/o*m+d,fe=Math.cos(pe),B=Math.sin(pe);z.x=w*B,z.y=y*C,z.z=w*fe,g.push(z.x,z.y,z.z),v.push(0,C,0),N.x=fe*.5+.5,N.y=B*.5*C+.5,b.push(N.x,N.y),M++}for(let X=0;X<o;X++){const ne=I+X,pe=G+X;P===!0?x.push(pe,pe+1,ne):x.push(pe+1,pe,ne),Z+=3}p.addGroup(_,Z,P===!0?1:2),_+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Du extends Ti{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(r),m=Math.floor(o),p=d+1,x=m+1,g=e/d,v=n/m,b=[],M=[],E=[],y=[];for(let _=0;_<x;_++){const U=_*v-u;for(let D=0;D<p;D++){const P=D*g-c;M.push(P,-U,0),E.push(0,0,1),y.push(D/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let U=0;U<d;U++){const D=U+p*_,P=U+p*(_+1),I=U+1+p*(_+1),N=U+1+p*_;b.push(D,P,N),b.push(P,I,N)}this.setIndex(b),this.setAttribute("position",new ti(M,3)),this.setAttribute("normal",new ti(E,3)),this.setAttribute("uv",new ti(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class ks extends Ti{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(u+d,Math.PI);let p=0;const x=[],g=new se,v=new se,b=[],M=[],E=[],y=[];for(let _=0;_<=r;_++){const U=[],D=_/r;let P=0;_===0&&u===0?P=.5/n:_===r&&m===Math.PI&&(P=-.5/n);for(let I=0;I<=n;I++){const N=I/n;g.x=-e*Math.cos(o+N*c)*Math.sin(u+D*d),g.y=e*Math.cos(u+D*d),g.z=e*Math.sin(o+N*c)*Math.sin(u+D*d),M.push(g.x,g.y,g.z),v.copy(g).normalize(),E.push(v.x,v.y,v.z),y.push(N+P,1-D),U.push(p++)}x.push(U)}for(let _=0;_<r;_++)for(let U=0;U<n;U++){const D=x[_][U+1],P=x[_][U],I=x[_+1][U],N=x[_+1][U+1];(_!==0||u>0)&&b.push(D,P,N),(_!==r-1||m<Math.PI)&&b.push(P,I,N)}this.setIndex(b),this.setAttribute("position",new ti(M,3)),this.setAttribute("normal",new ti(E,3)),this.setAttribute("uv",new ti(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xT extends ao{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new wt(16777215),this.specular=new wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=py,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gT extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _T extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qp extends Ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const bh=new tn,F_=new se,z_=new se;class Ry{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zp,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;F_.setFromMatrixPosition(e.matrixWorld),n.position.copy(F_),z_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(z_),n.updateMatrixWorld(),bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const B_=new tn,al=new se,Mh=new se;class vT extends Ry{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new se(1,0,0),new se(-1,0,0),new se(0,0,1),new se(0,0,-1),new se(0,1,0),new se(0,-1,0)],this._cubeUps=[new se(0,1,0),new se(0,1,0),new se(0,1,0),new se(0,1,0),new se(0,0,1),new se(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),al.setFromMatrixPosition(e.matrixWorld),r.position.copy(al),Mh.copy(r.position),Mh.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Mh),r.updateMatrixWorld(),o.makeTranslation(-al.x,-al.y,-al.z),B_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(B_,r.coordinateSystem,r.reversedDepth)}}class yT extends Qp{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new vT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cy extends by{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ST extends Ry{constructor(){super(new Cy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bT extends Qp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new ST}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class MT extends Qp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ET extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const I_=new tn;class TT{constructor(e,n,r=0,o=1/0){this.ray=new jp(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new Yp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):on("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return I_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(I_),this}intersectObject(e,n=!0,r=[]){return Tp(e,this,r,n),r.sort(H_),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Tp(e[o],this,r,n);return r.sort(H_),r}}function H_(a,e){return a.distance-e.distance}function Tp(a,e,n,r){let o=!0;if(a.layers.test(e.layers)&&a.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=a.children;for(let u=0,d=c.length;u<d;u++)Tp(c[u],e,n,!0)}}function V_(a,e,n,r){const o=AT(r);switch(n){case fy:return a*e;case hy:return a*e/o.components*o.byteLength;case Gp:return a*e/o.components*o.byteLength;case kp:return a*e*2/o.components*o.byteLength;case Xp:return a*e*2/o.components*o.byteLength;case dy:return a*e*3/o.components*o.byteLength;case Li:return a*e*4/o.components*o.byteLength;case Wp:return a*e*4/o.components*o.byteLength;case fu:case du:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case hu:case pu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(a,16)*Math.max(e,8)/4;case Zh:case Qh:return Math.max(a,8)*Math.max(e,8)/2;case $h:case ep:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case tp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case rp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case sp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case op:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case cp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case up:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case pp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case mp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case xp:case gp:case _p:return Math.ceil(a/4)*Math.ceil(e/4)*16;case vp:case yp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Sp:case bp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function AT(a){switch(a){case qi:case oy:return{byteLength:1,components:1};case ul:case ly:case no:return{byteLength:2,components:1};case Hp:case Vp:return{byteLength:2,components:4};case Yr:case Ip:case Aa:return{byteLength:4,components:1};case cy:case uy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);function wy(){let a=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function RT(a){const e=new WeakMap;function n(d,m){const p=d.array,x=d.usage,g=p.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,p,x),d.onUploadCallback();let b;if(p instanceof Float32Array)b=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=a.SHORT;else if(p instanceof Uint32Array)b=a.UNSIGNED_INT;else if(p instanceof Int32Array)b=a.INT;else if(p instanceof Int8Array)b=a.BYTE;else if(p instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const x=m.array,g=m.updateRanges;if(a.bindBuffer(p,d),g.length===0)a.bufferSubData(p,0,x);else{g.sort((b,M)=>b.start-M.start);let v=0;for(let b=1;b<g.length;b++){const M=g[v],E=g[b];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let b=0,M=g.length;b<M;b++){const E=g[b];a.bufferSubData(p,E.start*x.BYTES_PER_ELEMENT,x,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var CT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wT=`#ifdef USE_ALPHAHASH
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
#endif`,DT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OT=`#ifdef USE_AOMAP
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
#endif`,PT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FT=`#ifdef USE_BATCHING
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
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VT=`#ifdef USE_IRIDESCENCE
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
#endif`,GT=`#ifdef USE_BUMPMAP
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
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QT=`#define PI 3.141592653589793
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
} // validated`,JT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$T=`vec3 transformedNormal = objectNormal;
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
#endif`,e2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a2="gl_FragColor = linearToOutputTexel( gl_FragColor );",r2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s2=`#ifdef USE_ENVMAP
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
#endif`,o2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l2=`#ifdef USE_ENVMAP
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
#endif`,c2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u2=`#ifdef USE_ENVMAP
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
#endif`,f2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m2=`#ifdef USE_GRADIENTMAP
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
}`,x2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v2=`uniform bool receiveShadow;
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
#endif`,y2=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,S2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T2=`PhysicalMaterial material;
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
#endif`,A2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,R2=`
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
#endif`,C2=`#if defined( RE_IndirectDiffuse )
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
#endif`,w2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z2=`#if defined( USE_POINTS_UV )
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
#endif`,B2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k2=`#ifdef USE_MORPHTARGETS
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
#endif`,X2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K2=`#ifdef USE_NORMALMAP
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
#endif`,Q2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dA=`float getShadowMask() {
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
}`,hA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pA=`#ifdef USE_SKINNING
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
#endif`,mA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xA=`#ifdef USE_SKINNING
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
#endif`,gA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_A=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SA=`#ifdef USE_TRANSMISSION
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
#endif`,bA=`#ifdef USE_TRANSMISSION
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CA=`uniform sampler2D t2D;
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`#include <common>
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
}`,OA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PA=`#define DISTANCE
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
}`,FA=`#define DISTANCE
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`uniform float scale;
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
}`,HA=`uniform vec3 diffuse;
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
}`,VA=`#include <common>
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
}`,GA=`uniform vec3 diffuse;
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
}`,kA=`#define LAMBERT
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
}`,XA=`#define LAMBERT
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
}`,WA=`#define MATCAP
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
}`,qA=`#define MATCAP
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
}`,jA=`#define NORMAL
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
}`,YA=`#define NORMAL
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
}`,ZA=`#define PHONG
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
}`,KA=`#define PHONG
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
}`,QA=`#define STANDARD
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
}`,JA=`#define STANDARD
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
}`,$A=`#define TOON
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
}`,eR=`#define TOON
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
}`,tR=`uniform float size;
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
}`,nR=`uniform vec3 diffuse;
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
}`,iR=`#include <common>
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
}`,aR=`uniform vec3 color;
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
}`,rR=`uniform float rotation;
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
}`,sR=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:CT,alphahash_pars_fragment:wT,alphamap_fragment:DT,alphamap_pars_fragment:UT,alphatest_fragment:NT,alphatest_pars_fragment:LT,aomap_fragment:OT,aomap_pars_fragment:PT,batching_pars_vertex:FT,batching_vertex:zT,begin_vertex:BT,beginnormal_vertex:IT,bsdfs:HT,iridescence_fragment:VT,bumpmap_pars_fragment:GT,clipping_planes_fragment:kT,clipping_planes_pars_fragment:XT,clipping_planes_pars_vertex:WT,clipping_planes_vertex:qT,color_fragment:jT,color_pars_fragment:YT,color_pars_vertex:ZT,color_vertex:KT,common:QT,cube_uv_reflection_fragment:JT,defaultnormal_vertex:$T,displacementmap_pars_vertex:e2,displacementmap_vertex:t2,emissivemap_fragment:n2,emissivemap_pars_fragment:i2,colorspace_fragment:a2,colorspace_pars_fragment:r2,envmap_fragment:s2,envmap_common_pars_fragment:o2,envmap_pars_fragment:l2,envmap_pars_vertex:c2,envmap_physical_pars_fragment:y2,envmap_vertex:u2,fog_vertex:f2,fog_pars_vertex:d2,fog_fragment:h2,fog_pars_fragment:p2,gradientmap_pars_fragment:m2,lightmap_pars_fragment:x2,lights_lambert_fragment:g2,lights_lambert_pars_fragment:_2,lights_pars_begin:v2,lights_toon_fragment:S2,lights_toon_pars_fragment:b2,lights_phong_fragment:M2,lights_phong_pars_fragment:E2,lights_physical_fragment:T2,lights_physical_pars_fragment:A2,lights_fragment_begin:R2,lights_fragment_maps:C2,lights_fragment_end:w2,logdepthbuf_fragment:D2,logdepthbuf_pars_fragment:U2,logdepthbuf_pars_vertex:N2,logdepthbuf_vertex:L2,map_fragment:O2,map_pars_fragment:P2,map_particle_fragment:F2,map_particle_pars_fragment:z2,metalnessmap_fragment:B2,metalnessmap_pars_fragment:I2,morphinstance_vertex:H2,morphcolor_vertex:V2,morphnormal_vertex:G2,morphtarget_pars_vertex:k2,morphtarget_vertex:X2,normal_fragment_begin:W2,normal_fragment_maps:q2,normal_pars_fragment:j2,normal_pars_vertex:Y2,normal_vertex:Z2,normalmap_pars_fragment:K2,clearcoat_normal_fragment_begin:Q2,clearcoat_normal_fragment_maps:J2,clearcoat_pars_fragment:$2,iridescence_pars_fragment:eA,opaque_fragment:tA,packing:nA,premultiplied_alpha_fragment:iA,project_vertex:aA,dithering_fragment:rA,dithering_pars_fragment:sA,roughnessmap_fragment:oA,roughnessmap_pars_fragment:lA,shadowmap_pars_fragment:cA,shadowmap_pars_vertex:uA,shadowmap_vertex:fA,shadowmask_pars_fragment:dA,skinbase_vertex:hA,skinning_pars_vertex:pA,skinning_vertex:mA,skinnormal_vertex:xA,specularmap_fragment:gA,specularmap_pars_fragment:_A,tonemapping_fragment:vA,tonemapping_pars_fragment:yA,transmission_fragment:SA,transmission_pars_fragment:bA,uv_pars_fragment:MA,uv_pars_vertex:EA,uv_vertex:TA,worldpos_vertex:AA,background_vert:RA,background_frag:CA,backgroundCube_vert:wA,backgroundCube_frag:DA,cube_vert:UA,cube_frag:NA,depth_vert:LA,depth_frag:OA,distanceRGBA_vert:PA,distanceRGBA_frag:FA,equirect_vert:zA,equirect_frag:BA,linedashed_vert:IA,linedashed_frag:HA,meshbasic_vert:VA,meshbasic_frag:GA,meshlambert_vert:kA,meshlambert_frag:XA,meshmatcap_vert:WA,meshmatcap_frag:qA,meshnormal_vert:jA,meshnormal_frag:YA,meshphong_vert:ZA,meshphong_frag:KA,meshphysical_vert:QA,meshphysical_frag:JA,meshtoon_vert:$A,meshtoon_frag:eR,points_vert:tR,points_frag:nR,shadow_vert:iR,shadow_frag:aR,sprite_vert:rR,sprite_frag:sR},Ie={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Gi={basic:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([Ie.points,Ie.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([Ie.common,Ie.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([Ie.sprite,Ie.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Xn([Ie.common,Ie.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Xn([Ie.lights,Ie.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Gi.physical={uniforms:Xn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const au={r:0,b:0,g:0},Ir=new ji,oR=new tn;function lR(a,e,n,r,o,c,u){const d=new wt(0);let m=c===!0?0:1,p,x,g=null,v=0,b=null;function M(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function E(D){let P=!1;const I=M(D);I===null?_(d,m):I&&I.isColor&&(_(I,1),P=!0);const N=a.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(a.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(D,P){const I=M(P);I&&(I.isCubeTexture||I.mapping===Cu)?(x===void 0&&(x=new di(new Tl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Qs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(N,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Ir.copy(P.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),x.material.uniforms.envMap.value=I,x.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(oR.makeRotationFromEuler(Ir)),x.material.toneMapped=Pt.getTransfer(I.colorSpace)!==qt,(g!==I||v!==I.version||b!==a.toneMapping)&&(x.material.needsUpdate=!0,g=I,v=I.version,b=a.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new di(new Du(2,2),new Yi({name:"BackgroundMaterial",uniforms:Qs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(I.colorSpace)!==qt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||v!==I.version||b!==a.toneMapping)&&(p.material.needsUpdate=!0,g=I,v=I.version,b=a.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,P){D.getRGB(au,Sy(a)),r.buffers.color.setClear(au.r,au.g,au.b,P,u)}function U(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),m=P,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(d,m)},render:E,addToRenderList:y,dispose:U}}function cR(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let c=o,u=!1;function d(C,G,X,ne,pe){let fe=!1;const B=g(ne,X,G);c!==B&&(c=B,p(c.object)),fe=b(C,ne,X,pe),fe&&M(C,ne,X,pe),pe!==null&&e.update(pe,a.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,P(C,G,X,ne),pe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return a.createVertexArray()}function p(C){return a.bindVertexArray(C)}function x(C){return a.deleteVertexArray(C)}function g(C,G,X){const ne=X.wireframe===!0;let pe=r[C.id];pe===void 0&&(pe={},r[C.id]=pe);let fe=pe[G.id];fe===void 0&&(fe={},pe[G.id]=fe);let B=fe[ne];return B===void 0&&(B=v(m()),fe[ne]=B),B}function v(C){const G=[],X=[],ne=[];for(let pe=0;pe<n;pe++)G[pe]=0,X[pe]=0,ne[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:ne,object:C,attributes:{},index:null}}function b(C,G,X,ne){const pe=c.attributes,fe=G.attributes;let B=0;const K=X.getAttributes();for(const q in K)if(K[q].location>=0){const Te=pe[q];let F=fe[q];if(F===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),Te===void 0||Te.attribute!==F||F&&Te.data!==F.data)return!0;B++}return c.attributesNum!==B||c.index!==ne}function M(C,G,X,ne){const pe={},fe=G.attributes;let B=0;const K=X.getAttributes();for(const q in K)if(K[q].location>=0){let Te=fe[q];Te===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Te=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Te=C.instanceColor));const F={};F.attribute=Te,Te&&Te.data&&(F.data=Te.data),pe[q]=F,B++}c.attributes=pe,c.attributesNum=B,c.index=ne}function E(){const C=c.newAttributes;for(let G=0,X=C.length;G<X;G++)C[G]=0}function y(C){_(C,0)}function _(C,G){const X=c.newAttributes,ne=c.enabledAttributes,pe=c.attributeDivisors;X[C]=1,ne[C]===0&&(a.enableVertexAttribArray(C),ne[C]=1),pe[C]!==G&&(a.vertexAttribDivisor(C,G),pe[C]=G)}function U(){const C=c.newAttributes,G=c.enabledAttributes;for(let X=0,ne=G.length;X<ne;X++)G[X]!==C[X]&&(a.disableVertexAttribArray(X),G[X]=0)}function D(C,G,X,ne,pe,fe,B){B===!0?a.vertexAttribIPointer(C,G,X,pe,fe):a.vertexAttribPointer(C,G,X,ne,pe,fe)}function P(C,G,X,ne){E();const pe=ne.attributes,fe=X.getAttributes(),B=G.defaultAttributeValues;for(const K in fe){const q=fe[K];if(q.location>=0){let be=pe[K];if(be===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),be!==void 0){const Te=be.normalized,F=be.itemSize,ae=e.get(be);if(ae===void 0)continue;const Ae=ae.buffer,Ne=ae.type,Be=ae.bytesPerElement,re=Ne===a.INT||Ne===a.UNSIGNED_INT||be.gpuType===Ip;if(be.isInterleavedBufferAttribute){const me=be.data,W=me.stride,De=be.offset;if(me.isInstancedInterleavedBuffer){for(let Pe=0;Pe<q.locationSize;Pe++)_(q.location+Pe,me.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Pe=0;Pe<q.locationSize;Pe++)y(q.location+Pe);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let Pe=0;Pe<q.locationSize;Pe++)D(q.location+Pe,F/q.locationSize,Ne,Te,W*Be,(De+F/q.locationSize*Pe)*Be,re)}else{if(be.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)_(q.location+me,be.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let me=0;me<q.locationSize;me++)y(q.location+me);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let me=0;me<q.locationSize;me++)D(q.location+me,F/q.locationSize,Ne,Te,F*Be,F/q.locationSize*me*Be,re)}}else if(B!==void 0){const Te=B[K];if(Te!==void 0)switch(Te.length){case 2:a.vertexAttrib2fv(q.location,Te);break;case 3:a.vertexAttrib3fv(q.location,Te);break;case 4:a.vertexAttrib4fv(q.location,Te);break;default:a.vertexAttrib1fv(q.location,Te)}}}}U()}function I(){Z();for(const C in r){const G=r[C];for(const X in G){const ne=G[X];for(const pe in ne)x(ne[pe].object),delete ne[pe];delete G[X]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const X in G){const ne=G[X];for(const pe in ne)x(ne[pe].object),delete ne[pe];delete G[X]}delete r[C.id]}function z(C){for(const G in r){const X=r[G];if(X[C.id]===void 0)continue;const ne=X[C.id];for(const pe in ne)x(ne[pe].object),delete ne[pe];delete X[C.id]}}function Z(){w(),u=!0,c!==o&&(c=o,p(c.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:y,disableUnusedAttributes:U}}function uR(a,e,n){let r;function o(p){r=p}function c(p,x){a.drawArrays(r,p,x),n.update(x,r,1)}function u(p,x,g){g!==0&&(a.drawArraysInstanced(r,p,x,g),n.update(x,r,g))}function d(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let b=0;for(let M=0;M<g;M++)b+=x[M];n.update(b,r,1)}function m(p,x,g,v){if(g===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<p.length;M++)u(p[M],x[M],v[M]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,x,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E]*v[E];n.update(M,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function fR(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Li&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Z=z===no&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==qi&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Aa&&!Z)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=m(p);x!==p&&(dt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),D=a.getParameter(a.MAX_VARYING_VECTORS),P=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,N=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:I,maxSamples:N}}function dR(a){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Vr,d=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const b=g.length!==0||v||r!==0||o;return o=v,r=g.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=x(g,v,0)},this.setState=function(g,v,b){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,_=a.get(g);if(!o||M===null||M.length===0||c&&!y)c?x(null):p();else{const U=c?0:r,D=U*4;let P=_.clippingState||null;m.value=P,P=x(M,v,D,b);for(let I=0;I!==D;++I)P[I]=n[I];_.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,v,b,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=m.value,M!==!0||y===null){const _=b+E*4,U=v.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<_)&&(y=new Float32Array(_));for(let D=0,P=b;D!==E;++D,P+=4)u.copy(g[D]).applyMatrix4(U,d),u.normal.toArray(y,P),y[P+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function hR(a){let e=new WeakMap;function n(u,d){return d===Wh?u.mapping=Ys:d===qh&&(u.mapping=Zs),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Wh||d===qh)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new lT(m.height);return p.fromEquirectangularTexture(a,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const pr=4,G_=[.125,.215,.35,.446,.526,.582],kr=20,pR=256,rl=new Cy,k_=new wt;let Eh=null,Th=0,Ah=0,Rh=!1;const mR=new se;class X_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:d=mR}=c;Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Th,Ah),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:no,format:Li,colorSpace:Ks,depthBuffer:!1},o=W_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W_(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xR(c)),this._blurMaterial=_R(c,e,n)}return o}_compileMaterial(e){const n=new di(new Ti,e);this._renderer.compile(n,rl)}_sceneToCubeUV(e,n,r,o,c){const m=new fi(90,1,n,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,b=g.toneMapping;g.getClearColor(k_),g.toneMapping=mr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new Tl,new ll({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,y=E.material;let _=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,_=!0):(y.color.copy(k_),_=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[D],c.y,c.z)):P===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[D]));const I=this._cubeSize;Gs(o,P*I,D>2?I:0,I,I),g.setRenderTarget(o),_&&g.render(E,m),g.render(e,m)}g.toneMapping=b,g.autoClear=v,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Ys||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Gs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,rl)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const U=3*Math.max(this._cubeSize,16),D=4*this._cubeSize;this._ggxMaterial=gR(this._lodMax,U,D)}const u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),v=.05+p*.95,b=g*v,{_lodMax:M}=this,E=this._sizeLods[r],y=3*E*(r>M-pr?r-M+pr:0),_=4*(this._cubeSize-E);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=M-n,Gs(c,y,_,3*E,2*E),o.setRenderTarget(c),o.render(d,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-r,Gs(e,y,_,3*E,2*E),o.setRenderTarget(e),o.render(d,rl)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[o];g.material=p;const v=p.uniforms,b=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*kr-1),E=c/M,y=isFinite(c)?1+Math.floor(x*E):kr;y>kr&&dt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${kr}`);const _=[];let U=0;for(let z=0;z<kr;++z){const Z=z/E,w=Math.exp(-Z*Z/2);_.push(w),z===0?U+=w:z<y&&(U+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=M,v.mipInt.value=D-r;const P=this._sizeLods[o],I=3*P*(o>D-pr?o-D+pr:0),N=4*(this._cubeSize-P);Gs(n,I,N,3*P,2*P),m.setRenderTarget(n),m.render(g,rl)}}function xR(a){const e=[],n=[],r=[];let o=a;const c=a-pr+1+G_.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-pr?m=G_[u-a+pr-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),x=-p,g=1+p,v=[x,x,g,x,g,g,x,x,g,g,x,g],b=6,M=6,E=3,y=2,_=1,U=new Float32Array(E*M*b),D=new Float32Array(y*M*b),P=new Float32Array(_*M*b);for(let N=0;N<b;N++){const z=N%3*2/3-1,Z=N>2?0:-1,w=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];U.set(w,E*M*N),D.set(v,y*M*N);const C=[N,N,N,N,N,N];P.set(C,_*M*N)}const I=new Ti;I.setAttribute("position",new Xi(U,E)),I.setAttribute("uv",new Xi(D,y)),I.setAttribute("faceIndex",new Xi(P,_)),r.push(new di(I,null)),o>pr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function W_(a,e,n){const r=new Zr(a,e,n);return r.texture.mapping=Cu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gs(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function gR(a,e,n){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function _R(a,e,n){const r=new Float32Array(kr),o=new se(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function q_(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function j_(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}function vR(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wh||m===qh,x=m===Ys||m===Zs;if(p||x){let g=e.get(d);const v=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new X_(a)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const b=d.image;return p&&b&&b.height>0||x&&b&&o(b)?(n===null&&(n=new X_(a)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function yR(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&pl("WebGLRenderer: "+r+" extension not supported."),o}}}function SR(a,e,n,r){const o={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const b=c.get(v);b&&(e.remove(b),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(g){const v=g.attributes;for(const b in v)e.update(v[b],a.ARRAY_BUFFER)}function p(g){const v=[],b=g.index,M=g.attributes.position;let E=0;if(b!==null){const U=b.array;E=b.version;for(let D=0,P=U.length;D<P;D+=3){const I=U[D+0],N=U[D+1],z=U[D+2];v.push(I,N,N,z,z,I)}}else if(M!==void 0){const U=M.array;E=M.version;for(let D=0,P=U.length/3-1;D<P;D+=3){const I=D+0,N=D+1,z=D+2;v.push(I,N,N,z,z,I)}}else return;const y=new(xy(v)?yy:vy)(v,1);y.version=E;const _=c.get(g);_&&e.remove(_),c.set(g,y)}function x(g){const v=c.get(g);if(v){const b=g.index;b!==null&&v.version<b.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function bR(a,e,n){let r;function o(v){r=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,b){a.drawElements(r,b,c,v*u),n.update(b,r,1)}function p(v,b,M){M!==0&&(a.drawElementsInstanced(r,b,c,v*u,M),n.update(b,r,M))}function x(v,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,v,0,M);let y=0;for(let _=0;_<M;_++)y+=b[_];n.update(y,r,1)}function g(v,b,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)p(v[_]/u,b[_],E[_]);else{y.multiDrawElementsInstancedWEBGL(r,b,0,c,v,0,E,0,M);let _=0;for(let U=0;U<M;U++)_+=b[U]*E[U];n.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function MR(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=d*(c/3);break;case a.LINES:n.lines+=d*(c/2);break;case a.LINE_STRIP:n.lines+=d*(c-1);break;case a.LINE_LOOP:n.lines+=d*c;break;case a.POINTS:n.points+=d*c;break;default:on("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function ER(a,e,n){const r=new WeakMap,o=new jt;function c(u,d,m){const p=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let v=r.get(d);if(v===void 0||v.count!==g){let C=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var b=C;v!==void 0&&v.texture.dispose();const M=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;M===!0&&(P=1),E===!0&&(P=2),y===!0&&(P=3);let I=d.attributes.position.count*P,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*N*4*g),Z=new gy(z,I,N,g);Z.type=Aa,Z.needsUpdate=!0;const w=P*4;for(let G=0;G<g;G++){const X=_[G],ne=U[G],pe=D[G],fe=I*N*4*G;for(let B=0;B<X.count;B++){const K=B*w;M===!0&&(o.fromBufferAttribute(X,B),z[fe+K+0]=o.x,z[fe+K+1]=o.y,z[fe+K+2]=o.z,z[fe+K+3]=0),E===!0&&(o.fromBufferAttribute(ne,B),z[fe+K+4]=o.x,z[fe+K+5]=o.y,z[fe+K+6]=o.z,z[fe+K+7]=0),y===!0&&(o.fromBufferAttribute(pe,B),z[fe+K+8]=o.x,z[fe+K+9]=o.y,z[fe+K+10]=o.z,z[fe+K+11]=pe.itemSize===4?o.w:1)}}v={count:g,texture:Z,size:new Dt(I,N)},r.set(d,v),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const E=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(a,"morphTargetBaseInfluence",E),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:c}}function TR(a,e,n,r){let o=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=e.get(m,x);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return g}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const Dy=new Bn,Y_=new Ty(1,1),Uy=new gy,Ny=new W3,Ly=new My,Z_=[],K_=[],Q_=new Float32Array(16),J_=new Float32Array(9),$_=new Float32Array(4);function ro(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=Z_[o];if(c===void 0&&(c=new Float32Array(o),Z_[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,a[u].toArray(c,d)}return c}function yn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function Sn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Nu(a,e){let n=K_[e];n===void 0&&(n=new Int32Array(e),K_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function AR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function RR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;a.uniform2fv(this.addr,e),Sn(n,e)}}function CR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yn(n,e))return;a.uniform3fv(this.addr,e),Sn(n,e)}}function wR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;a.uniform4fv(this.addr,e),Sn(n,e)}}function DR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(yn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),Sn(n,e)}else{if(yn(n,r))return;$_.set(r),a.uniformMatrix2fv(this.addr,!1,$_),Sn(n,r)}}function UR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(yn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),Sn(n,e)}else{if(yn(n,r))return;J_.set(r),a.uniformMatrix3fv(this.addr,!1,J_),Sn(n,r)}}function NR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(yn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),Sn(n,e)}else{if(yn(n,r))return;Q_.set(r),a.uniformMatrix4fv(this.addr,!1,Q_),Sn(n,r)}}function LR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function OR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;a.uniform2iv(this.addr,e),Sn(n,e)}}function PR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;a.uniform3iv(this.addr,e),Sn(n,e)}}function FR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;a.uniform4iv(this.addr,e),Sn(n,e)}}function zR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function BR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yn(n,e))return;a.uniform2uiv(this.addr,e),Sn(n,e)}}function IR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yn(n,e))return;a.uniform3uiv(this.addr,e),Sn(n,e)}}function HR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yn(n,e))return;a.uniform4uiv(this.addr,e),Sn(n,e)}}function VR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Y_.compareFunction=my,c=Y_):c=Dy,n.setTexture2D(e||c,o)}function GR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Ny,o)}function kR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Ly,o)}function XR(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Uy,o)}function WR(a){switch(a){case 5126:return AR;case 35664:return RR;case 35665:return CR;case 35666:return wR;case 35674:return DR;case 35675:return UR;case 35676:return NR;case 5124:case 35670:return LR;case 35667:case 35671:return OR;case 35668:case 35672:return PR;case 35669:case 35673:return FR;case 5125:return zR;case 36294:return BR;case 36295:return IR;case 36296:return HR;case 35678:case 36198:case 36298:case 36306:case 35682:return VR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return XR}}function qR(a,e){a.uniform1fv(this.addr,e)}function jR(a,e){const n=ro(e,this.size,2);a.uniform2fv(this.addr,n)}function YR(a,e){const n=ro(e,this.size,3);a.uniform3fv(this.addr,n)}function ZR(a,e){const n=ro(e,this.size,4);a.uniform4fv(this.addr,n)}function KR(a,e){const n=ro(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function QR(a,e){const n=ro(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function JR(a,e){const n=ro(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function $R(a,e){a.uniform1iv(this.addr,e)}function eC(a,e){a.uniform2iv(this.addr,e)}function tC(a,e){a.uniform3iv(this.addr,e)}function nC(a,e){a.uniform4iv(this.addr,e)}function iC(a,e){a.uniform1uiv(this.addr,e)}function aC(a,e){a.uniform2uiv(this.addr,e)}function rC(a,e){a.uniform3uiv(this.addr,e)}function sC(a,e){a.uniform4uiv(this.addr,e)}function oC(a,e,n){const r=this.cache,o=e.length,c=Nu(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),Sn(r,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Dy,c[u])}function lC(a,e,n){const r=this.cache,o=e.length,c=Nu(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),Sn(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Ny,c[u])}function cC(a,e,n){const r=this.cache,o=e.length,c=Nu(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),Sn(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Ly,c[u])}function uC(a,e,n){const r=this.cache,o=e.length,c=Nu(n,o);yn(r,c)||(a.uniform1iv(this.addr,c),Sn(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Uy,c[u])}function fC(a){switch(a){case 5126:return qR;case 35664:return jR;case 35665:return YR;case 35666:return ZR;case 35674:return KR;case 35675:return QR;case 35676:return JR;case 5124:case 35670:return $R;case 35667:case 35671:return eC;case 35668:case 35672:return tC;case 35669:case 35673:return nC;case 5125:return iC;case 36294:return aC;case 36295:return rC;case 36296:return sC;case 35678:case 36198:case 36298:case 36306:case 35682:return oC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return cC;case 36289:case 36303:case 36311:case 36292:return uC}}class dC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=WR(n.type)}}class hC{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fC(n.type)}}class pC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function ev(a,e){a.seq.push(e),a.map[e.id]=e}function mC(a,e,n){const r=a.name,o=r.length;for(Ch.lastIndex=0;;){const c=Ch.exec(r),u=Ch.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){ev(n,p===void 0?new dC(d,a,e):new hC(d,a,e));break}else{let g=n.map[d];g===void 0&&(g=new pC(d),ev(n,g)),n=g}}}class mu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);mC(c,u,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function tv(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const xC=37297;let gC=0;function _C(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const nv=new gt;function vC(a){Pt._getMatrix(nv,Pt.workingColorSpace,a);const e=`mat3( ${nv.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(a)){case _u:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function iv(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+_C(a.getShaderSource(e),d)}else return c}function yC(a,e){const n=vC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function SC(a,e){let n;switch(e){case v3:n="Linear";break;case y3:n="Reinhard";break;case S3:n="Cineon";break;case b3:n="ACESFilmic";break;case E3:n="AgX";break;case T3:n="Neutral";break;case M3:n="Custom";break;default:dt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ru=new se;function bC(){Pt.getLuminanceCoefficients(ru);const a=ru.x.toFixed(4),e=ru.y.toFixed(4),n=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function EC(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function TC(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return n}function ol(a){return a!==""}function av(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(a){return a.replace(AC,CC)}const RC=new Map;function CC(a,e){let n=_t[e];if(n===void 0){const r=RC.get(e);if(r!==void 0)n=_t[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ap(n)}const wC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sv(a){return a.replace(wC,DC)}function DC(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ov(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UC(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ry?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===JE?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function NC(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LC(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function OC(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Bp:e="ENVMAP_BLENDING_MULTIPLY";break;case g3:e="ENVMAP_BLENDING_MIX";break;case _3:e="ENVMAP_BLENDING_ADD";break}return e}function PC(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function FC(a,e,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=UC(n),p=NC(n),x=LC(n),g=OC(n),v=PC(n),b=MC(n),M=EC(c),E=o.createProgram();let y,_,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ol).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ol).join(`
`),_.length>0&&(_+=`
`)):(y=[ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),_=[ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?_t.tonemapping_pars_fragment:"",n.toneMapping!==mr?SC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,yC("linearToOutputTexel",n.outputColorSpace),bC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ol).join(`
`)),u=Ap(u),u=av(u,n),u=rv(u,n),d=Ap(d),d=av(d,n),d=rv(d,n),u=sv(u),d=sv(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===p_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===p_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=U+y+u,P=U+_+d,I=tv(o,o.VERTEX_SHADER,D),N=tv(o,o.FRAGMENT_SHADER,P);o.attachShader(E,I),o.attachShader(E,N),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function z(G){if(a.debug.checkShaderErrors){const X=o.getProgramInfoLog(E)||"",ne=o.getShaderInfoLog(I)||"",pe=o.getShaderInfoLog(N)||"",fe=X.trim(),B=ne.trim(),K=pe.trim();let q=!0,be=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,E,I,N);else{const Te=iv(o,I,"vertex"),F=iv(o,N,"fragment");on("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+fe+`
`+Te+`
`+F)}else fe!==""?dt("WebGLProgram: Program Info Log:",fe):(B===""||K==="")&&(be=!1);be&&(G.diagnostics={runnable:q,programLog:fe,vertexShader:{log:B,prefix:y},fragmentShader:{log:K,prefix:_}})}o.deleteShader(I),o.deleteShader(N),Z=new mu(o,E),w=TC(o,E)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(E,xC)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=N,this}let zC=0;class BC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new IC(e),n.set(e,r)),r}}class IC{constructor(e){this.id=zC++,this.code=e,this.usedTimes=0}}function HC(a,e,n,r,o,c,u){const d=new Yp,m=new BC,p=new Set,x=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let b=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,G,X,ne){const pe=X.fog,fe=ne.geometry,B=w.isMeshStandardMaterial?X.environment:null,K=(w.isMeshStandardMaterial?n:e).get(w.envMap||B),q=K&&K.mapping===Cu?K.image.height:null,be=M[w.type];w.precision!==null&&(b=o.getMaxPrecision(w.precision),b!==w.precision&&dt("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const Te=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,F=Te!==void 0?Te.length:0;let ae=0;fe.morphAttributes.position!==void 0&&(ae=1),fe.morphAttributes.normal!==void 0&&(ae=2),fe.morphAttributes.color!==void 0&&(ae=3);let Ae,Ne,Be,re;if(be){const St=Gi[be];Ae=St.vertexShader,Ne=St.fragmentShader}else Ae=w.vertexShader,Ne=w.fragmentShader,m.update(w),Be=m.getVertexShaderID(w),re=m.getFragmentShaderID(w);const me=a.getRenderTarget(),W=a.state.buffers.depth.getReversed(),De=ne.isInstancedMesh===!0,Pe=ne.isBatchedMesh===!0,ot=!!w.map,nn=!!w.matcap,ct=!!K,Et=!!w.aoMap,V=!!w.lightMap,ut=!!w.bumpMap,pt=!!w.normalMap,Ft=!!w.displacementMap,Ve=!!w.emissiveMap,Bt=!!w.metalnessMap,Qe=!!w.roughnessMap,st=w.anisotropy>0,L=w.clearcoat>0,T=w.dispersion>0,J=w.iridescence>0,ve=w.sheen>0,Re=w.transmission>0,de=st&&!!w.anisotropyMap,je=L&&!!w.clearcoatMap,Oe=L&&!!w.clearcoatNormalMap,qe=L&&!!w.clearcoatRoughnessMap,Ye=J&&!!w.iridescenceMap,we=J&&!!w.iridescenceThicknessMap,Ue=ve&&!!w.sheenColorMap,Ke=ve&&!!w.sheenRoughnessMap,ke=!!w.specularMap,He=!!w.specularColorMap,nt=!!w.specularIntensityMap,O=Re&&!!w.transmissionMap,xe=Re&&!!w.thicknessMap,Me=!!w.gradientMap,Ce=!!w.alphaMap,Ee=w.alphaTest>0,_e=!!w.alphaHash,Fe=!!w.extensions;let at=mr;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(at=a.toneMapping);const It={shaderID:be,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:Ne,defines:w.defines,customVertexShaderID:Be,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:Pe,batchingColor:Pe&&ne._colorsTexture!==null,instancing:De,instancingColor:De&&ne.instanceColor!==null,instancingMorph:De&&ne.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ks,alphaToCoverage:!!w.alphaToCoverage,map:ot,matcap:nn,envMap:ct,envMapMode:ct&&K.mapping,envMapCubeUVHeight:q,aoMap:Et,lightMap:V,bumpMap:ut,normalMap:pt,displacementMap:v&&Ft,emissiveMap:Ve,normalMapObjectSpace:pt&&w.normalMapType===w3,normalMapTangentSpace:pt&&w.normalMapType===py,metalnessMap:Bt,roughnessMap:Qe,anisotropy:st,anisotropyMap:de,clearcoat:L,clearcoatMap:je,clearcoatNormalMap:Oe,clearcoatRoughnessMap:qe,dispersion:T,iridescence:J,iridescenceMap:Ye,iridescenceThicknessMap:we,sheen:ve,sheenColorMap:Ue,sheenRoughnessMap:Ke,specularMap:ke,specularColorMap:He,specularIntensityMap:nt,transmission:Re,transmissionMap:O,thicknessMap:xe,gradientMap:Me,opaque:w.transparent===!1&&w.blending===Xs&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Ee,alphaHash:_e,combine:w.combine,mapUv:ot&&E(w.map.channel),aoMapUv:Et&&E(w.aoMap.channel),lightMapUv:V&&E(w.lightMap.channel),bumpMapUv:ut&&E(w.bumpMap.channel),normalMapUv:pt&&E(w.normalMap.channel),displacementMapUv:Ft&&E(w.displacementMap.channel),emissiveMapUv:Ve&&E(w.emissiveMap.channel),metalnessMapUv:Bt&&E(w.metalnessMap.channel),roughnessMapUv:Qe&&E(w.roughnessMap.channel),anisotropyMapUv:de&&E(w.anisotropyMap.channel),clearcoatMapUv:je&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:we&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&E(w.sheenRoughnessMap.channel),specularMapUv:ke&&E(w.specularMap.channel),specularColorMapUv:He&&E(w.specularColorMap.channel),specularIntensityMapUv:nt&&E(w.specularIntensityMap.channel),transmissionMapUv:O&&E(w.transmissionMap.channel),thicknessMapUv:xe&&E(w.thicknessMap.channel),alphaMapUv:Ce&&E(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(pt||st),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!fe.attributes.uv&&(ot||Ce),fog:!!pe,useFog:w.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:W,skinning:ne.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&G.length>0,shadowMapType:a.shadowMap.type,toneMapping:at,decodeVideoTexture:ot&&w.map.isVideoTexture===!0&&Pt.getTransfer(w.map.colorSpace)===qt,decodeVideoTextureEmissive:Ve&&w.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(w.emissiveMap.colorSpace)===qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ea,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Fe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&w.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(U(C,w),D(C,w),C.push(a.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function U(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function P(w){const C=M[w.type];let G;if(C){const X=Gi[C];G=aT.clone(X.uniforms)}else G=w.uniforms;return G}function I(w,C){let G;for(let X=0,ne=x.length;X<ne;X++){const pe=x[X];if(pe.cacheKey===C){G=pe,++G.usedTimes;break}}return G===void 0&&(G=new FC(a,C,w,c),x.push(G)),G}function N(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function z(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:I,releaseProgram:N,releaseShaderCache:z,programs:x,dispose:Z}}function VC(){let a=new WeakMap;function e(u){return a.has(u)}function n(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function GC(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function lv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function cv(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g,v,b,M,E,y){let _=a[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:b,groupOrder:M,renderOrder:g.renderOrder,z:E,group:y},a[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=b,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=y),e++,_}function d(g,v,b,M,E,y){const _=u(g,v,b,M,E,y);b.transmission>0?r.push(_):b.transparent===!0?o.push(_):n.push(_)}function m(g,v,b,M,E,y){const _=u(g,v,b,M,E,y);b.transmission>0?r.unshift(_):b.transparent===!0?o.unshift(_):n.unshift(_)}function p(g,v){n.length>1&&n.sort(g||GC),r.length>1&&r.sort(v||lv),o.length>1&&o.sort(v||lv)}function x(){for(let g=e,v=a.length;g<v;g++){const b=a[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:m,finish:x,sort:p}}function kC(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new cv,a.set(r,[u])):o>=c.length?(u=new cv,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:e,dispose:n}}function XC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new wt};break;case"SpotLight":n={position:new se,direction:new se,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new se,halfWidth:new se,halfHeight:new se};break}return a[e.id]=n,n}}}function WC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let qC=0;function jC(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function YC(a){const e=new XC,n=WC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new se);const o=new se,c=new tn,u=new tn;function d(p){let x=0,g=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let b=0,M=0,E=0,y=0,_=0,U=0,D=0,P=0,I=0,N=0,z=0;p.sort(jC);for(let w=0,C=p.length;w<C;w++){const G=p[w],X=G.color,ne=G.intensity,pe=G.distance,fe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=X.r*ne,g+=X.g*ne,v+=X.b*ne;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],ne);z++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,q=n.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[b]=q,r.directionalShadowMap[b]=fe,r.directionalShadowMatrix[b]=G.shadow.matrix,U++}r.directional[b]=B,b++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(X).multiplyScalar(ne),B.distance=pe,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[E]=B;const K=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,K.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[E]=K.matrix,G.castShadow){const q=n.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[E]=q,r.spotShadowMap[E]=fe,P++}E++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(X).multiplyScalar(ne),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=B,y++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const K=G.shadow,q=n.get(G);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[M]=q,r.pointShadowMap[M]=fe,r.pointShadowMatrix[M]=G.shadow.matrix,D++}r.point[M]=B,M++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(ne),B.groundColor.copy(G.groundColor).multiplyScalar(ne),r.hemi[_]=B,_++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=v;const Z=r.hash;(Z.directionalLength!==b||Z.pointLength!==M||Z.spotLength!==E||Z.rectAreaLength!==y||Z.hemiLength!==_||Z.numDirectionalShadows!==U||Z.numPointShadows!==D||Z.numSpotShadows!==P||Z.numSpotMaps!==I||Z.numLightProbes!==z)&&(r.directional.length=b,r.spot.length=E,r.rectArea.length=y,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+I-N,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=z,Z.directionalLength=b,Z.pointLength=M,Z.spotLength=E,Z.rectAreaLength=y,Z.hemiLength=_,Z.numDirectionalShadows=U,Z.numPointShadows=D,Z.numSpotShadows=P,Z.numSpotMaps=I,Z.numLightProbes=z,r.version=qC++)}function m(p,x){let g=0,v=0,b=0,M=0,E=0;const y=x.matrixWorldInverse;for(let _=0,U=p.length;_<U;_++){const D=p[_];if(D.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),g++}else if(D.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),b++}else if(D.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),u.identity(),c.copy(D.matrixWorld),c.premultiply(y),u.extractRotation(c),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const P=r.hemi[E];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(y),E++}}}return{setup:d,setupView:m,state:r}}function uv(a){const e=new YC(a),n=[],r=[];function o(x){p.camera=x,n.length=0,r.length=0}function c(x){n.push(x)}function u(x){r.push(x)}function d(){e.setup(n)}function m(x){e.setupView(n,x)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function ZC(a){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new uv(a),e.set(o,[d])):c>=u.length?(d=new uv(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const KC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QC=`uniform sampler2D shadow_pass;
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
}`;function JC(a,e,n){let r=new Zp;const o=new Dt,c=new Dt,u=new jt,d=new gT({depthPacking:C3}),m=new _T,p={},x=n.maxTextureSize,g={[xr]:Wn,[Wn]:xr,[Ea]:Ea},v=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:KC,fragmentShader:QC}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const M=new Ti;M.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new di(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ry;let _=this.type;this.render=function(N,z,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const w=a.getRenderTarget(),C=a.getActiveCubeFace(),G=a.getActiveMipmapLevel(),X=a.state;X.setBlending(Ca),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ne=_!==Ma&&this.type===Ma,pe=_===Ma&&this.type!==Ma;for(let fe=0,B=N.length;fe<B;fe++){const K=N[fe],q=K.shadow;if(q===void 0){dt("WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const be=q.getFrameExtents();if(o.multiply(be),c.copy(q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/be.x),o.x=c.x*be.x,q.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/be.y),o.y=c.y*be.y,q.mapSize.y=c.y)),q.map===null||ne===!0||pe===!0){const F=this.type!==Ma?{minFilter:hi,magFilter:hi}:{};q.map!==null&&q.map.dispose(),q.map=new Zr(o.x,o.y,F),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}a.setRenderTarget(q.map),a.clear();const Te=q.getViewportCount();for(let F=0;F<Te;F++){const ae=q.getViewport(F);u.set(c.x*ae.x,c.y*ae.y,c.x*ae.z,c.y*ae.w),X.viewport(u),q.updateMatrices(K,F),r=q.getFrustum(),P(z,Z,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Ma&&U(q,Z),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,a.setRenderTarget(w,C,G)};function U(N,z){const Z=e.update(E);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Zr(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(z,null,Z,v,E,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(z,null,Z,b,E,null)}function D(N,z,Z,w){let C=null;const G=Z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)C=G;else if(C=Z.isPointLight===!0?m:d,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const X=C.uuid,ne=z.uuid;let pe=p[X];pe===void 0&&(pe={},p[X]=pe);let fe=pe[ne];fe===void 0&&(fe=C.clone(),pe[ne]=fe,z.addEventListener("dispose",I)),C=fe}if(C.visible=z.visible,C.wireframe=z.wireframe,w===Ma?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:g[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const X=a.properties.get(C);X.light=Z}return C}function P(N,z,Z,w,C){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Ma)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,N.matrixWorld);const ne=e.update(N),pe=N.material;if(Array.isArray(pe)){const fe=ne.groups;for(let B=0,K=fe.length;B<K;B++){const q=fe[B],be=pe[q.materialIndex];if(be&&be.visible){const Te=D(N,be,w,C);N.onBeforeShadow(a,N,z,Z,ne,Te,q),a.renderBufferDirect(Z,null,ne,Te,N,q),N.onAfterShadow(a,N,z,Z,ne,Te,q)}}}else if(pe.visible){const fe=D(N,pe,w,C);N.onBeforeShadow(a,N,z,Z,ne,fe,null),a.renderBufferDirect(Z,null,ne,fe,N,null),N.onAfterShadow(a,N,z,Z,ne,fe,null)}}const X=N.children;for(let ne=0,pe=X.length;ne<pe;ne++)P(X[ne],z,Z,w,C)}function I(N){N.target.removeEventListener("dispose",I);for(const Z in p){const w=p[Z],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const $C={[Bh]:Ih,[Hh]:kh,[Vh]:Xh,[js]:Gh,[Ih]:Bh,[kh]:Hh,[Xh]:Vh,[Gh]:js};function ew(a,e){function n(){let O=!1;const xe=new jt;let Me=null;const Ce=new jt(0,0,0,0);return{setMask:function(Ee){Me!==Ee&&!O&&(a.colorMask(Ee,Ee,Ee,Ee),Me=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,_e,Fe,at,It){It===!0&&(Ee*=at,_e*=at,Fe*=at),xe.set(Ee,_e,Fe,at),Ce.equals(xe)===!1&&(a.clearColor(Ee,_e,Fe,at),Ce.copy(xe))},reset:function(){O=!1,Me=null,Ce.set(-1,0,0,0)}}}function r(){let O=!1,xe=!1,Me=null,Ce=null,Ee=null;return{setReversed:function(_e){if(xe!==_e){const Fe=e.get("EXT_clip_control");_e?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=_e;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return xe},setTest:function(_e){_e?me(a.DEPTH_TEST):W(a.DEPTH_TEST)},setMask:function(_e){Me!==_e&&!O&&(a.depthMask(_e),Me=_e)},setFunc:function(_e){if(xe&&(_e=$C[_e]),Ce!==_e){switch(_e){case Bh:a.depthFunc(a.NEVER);break;case Ih:a.depthFunc(a.ALWAYS);break;case Hh:a.depthFunc(a.LESS);break;case js:a.depthFunc(a.LEQUAL);break;case Vh:a.depthFunc(a.EQUAL);break;case Gh:a.depthFunc(a.GEQUAL);break;case kh:a.depthFunc(a.GREATER);break;case Xh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ce=_e}},setLocked:function(_e){O=_e},setClear:function(_e){Ee!==_e&&(xe&&(_e=1-_e),a.clearDepth(_e),Ee=_e)},reset:function(){O=!1,Me=null,Ce=null,Ee=null,xe=!1}}}function o(){let O=!1,xe=null,Me=null,Ce=null,Ee=null,_e=null,Fe=null,at=null,It=null;return{setTest:function(St){O||(St?me(a.STENCIL_TEST):W(a.STENCIL_TEST))},setMask:function(St){xe!==St&&!O&&(a.stencilMask(St),xe=St)},setFunc:function(St,bn,Hn){(Me!==St||Ce!==bn||Ee!==Hn)&&(a.stencilFunc(St,bn,Hn),Me=St,Ce=bn,Ee=Hn)},setOp:function(St,bn,Hn){(_e!==St||Fe!==bn||at!==Hn)&&(a.stencilOp(St,bn,Hn),_e=St,Fe=bn,at=Hn)},setLocked:function(St){O=St},setClear:function(St){It!==St&&(a.clearStencil(St),It=St)},reset:function(){O=!1,xe=null,Me=null,Ce=null,Ee=null,_e=null,Fe=null,at=null,It=null}}}const c=new n,u=new r,d=new o,m=new WeakMap,p=new WeakMap;let x={},g={},v=new WeakMap,b=[],M=null,E=!1,y=null,_=null,U=null,D=null,P=null,I=null,N=null,z=new wt(0,0,0),Z=0,w=!1,C=null,G=null,X=null,ne=null,pe=null;const fe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=K>=2);let be=null,Te={};const F=a.getParameter(a.SCISSOR_BOX),ae=a.getParameter(a.VIEWPORT),Ae=new jt().fromArray(F),Ne=new jt().fromArray(ae);function Be(O,xe,Me,Ce){const Ee=new Uint8Array(4),_e=a.createTexture();a.bindTexture(O,_e),a.texParameteri(O,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(O,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Fe=0;Fe<Me;Fe++)O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY?a.texImage3D(xe,0,a.RGBA,1,1,Ce,0,a.RGBA,a.UNSIGNED_BYTE,Ee):a.texImage2D(xe+Fe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ee);return _e}const re={};re[a.TEXTURE_2D]=Be(a.TEXTURE_2D,a.TEXTURE_2D,1),re[a.TEXTURE_CUBE_MAP]=Be(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[a.TEXTURE_2D_ARRAY]=Be(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),re[a.TEXTURE_3D]=Be(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),me(a.DEPTH_TEST),u.setFunc(js),ut(!1),pt(c_),me(a.CULL_FACE),Et(Ca);function me(O){x[O]!==!0&&(a.enable(O),x[O]=!0)}function W(O){x[O]!==!1&&(a.disable(O),x[O]=!1)}function De(O,xe){return g[O]!==xe?(a.bindFramebuffer(O,xe),g[O]=xe,O===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=xe),O===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=xe),!0):!1}function Pe(O,xe){let Me=b,Ce=!1;if(O){Me=v.get(xe),Me===void 0&&(Me=[],v.set(xe,Me));const Ee=O.textures;if(Me.length!==Ee.length||Me[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,Fe=Ee.length;_e<Fe;_e++)Me[_e]=a.COLOR_ATTACHMENT0+_e;Me.length=Ee.length,Ce=!0}}else Me[0]!==a.BACK&&(Me[0]=a.BACK,Ce=!0);Ce&&a.drawBuffers(Me)}function ot(O){return M!==O?(a.useProgram(O),M=O,!0):!1}const nn={[Gr]:a.FUNC_ADD,[e3]:a.FUNC_SUBTRACT,[t3]:a.FUNC_REVERSE_SUBTRACT};nn[n3]=a.MIN,nn[i3]=a.MAX;const ct={[a3]:a.ZERO,[r3]:a.ONE,[s3]:a.SRC_COLOR,[Fh]:a.SRC_ALPHA,[d3]:a.SRC_ALPHA_SATURATE,[u3]:a.DST_COLOR,[l3]:a.DST_ALPHA,[o3]:a.ONE_MINUS_SRC_COLOR,[zh]:a.ONE_MINUS_SRC_ALPHA,[f3]:a.ONE_MINUS_DST_COLOR,[c3]:a.ONE_MINUS_DST_ALPHA,[h3]:a.CONSTANT_COLOR,[p3]:a.ONE_MINUS_CONSTANT_COLOR,[m3]:a.CONSTANT_ALPHA,[x3]:a.ONE_MINUS_CONSTANT_ALPHA};function Et(O,xe,Me,Ce,Ee,_e,Fe,at,It,St){if(O===Ca){E===!0&&(W(a.BLEND),E=!1);return}if(E===!1&&(me(a.BLEND),E=!0),O!==$E){if(O!==y||St!==w){if((_!==Gr||P!==Gr)&&(a.blendEquation(a.FUNC_ADD),_=Gr,P=Gr),St)switch(O){case Xs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ph:a.blendFunc(a.ONE,a.ONE);break;case u_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case f_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:on("WebGLState: Invalid blending: ",O);break}else switch(O){case Xs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ph:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case u_:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f_:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",O);break}U=null,D=null,I=null,N=null,z.set(0,0,0),Z=0,y=O,w=St}return}Ee=Ee||xe,_e=_e||Me,Fe=Fe||Ce,(xe!==_||Ee!==P)&&(a.blendEquationSeparate(nn[xe],nn[Ee]),_=xe,P=Ee),(Me!==U||Ce!==D||_e!==I||Fe!==N)&&(a.blendFuncSeparate(ct[Me],ct[Ce],ct[_e],ct[Fe]),U=Me,D=Ce,I=_e,N=Fe),(at.equals(z)===!1||It!==Z)&&(a.blendColor(at.r,at.g,at.b,It),z.copy(at),Z=It),y=O,w=!1}function V(O,xe){O.side===Ea?W(a.CULL_FACE):me(a.CULL_FACE);let Me=O.side===Wn;xe&&(Me=!Me),ut(Me),O.blending===Xs&&O.transparent===!1?Et(Ca):Et(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),u.setFunc(O.depthFunc),u.setTest(O.depthTest),u.setMask(O.depthWrite),c.setMask(O.colorWrite);const Ce=O.stencilWrite;d.setTest(Ce),Ce&&(d.setMask(O.stencilWriteMask),d.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),d.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ve(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):W(a.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){C!==O&&(O?a.frontFace(a.CW):a.frontFace(a.CCW),C=O)}function pt(O){O!==KE?(me(a.CULL_FACE),O!==G&&(O===c_?a.cullFace(a.BACK):O===QE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):W(a.CULL_FACE),G=O}function Ft(O){O!==X&&(B&&a.lineWidth(O),X=O)}function Ve(O,xe,Me){O?(me(a.POLYGON_OFFSET_FILL),(ne!==xe||pe!==Me)&&(a.polygonOffset(xe,Me),ne=xe,pe=Me)):W(a.POLYGON_OFFSET_FILL)}function Bt(O){O?me(a.SCISSOR_TEST):W(a.SCISSOR_TEST)}function Qe(O){O===void 0&&(O=a.TEXTURE0+fe-1),be!==O&&(a.activeTexture(O),be=O)}function st(O,xe,Me){Me===void 0&&(be===null?Me=a.TEXTURE0+fe-1:Me=be);let Ce=Te[Me];Ce===void 0&&(Ce={type:void 0,texture:void 0},Te[Me]=Ce),(Ce.type!==O||Ce.texture!==xe)&&(be!==Me&&(a.activeTexture(Me),be=Me),a.bindTexture(O,xe||re[O]),Ce.type=O,Ce.texture=xe)}function L(){const O=Te[be];O!==void 0&&O.type!==void 0&&(a.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function J(){try{a.compressedTexImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function ve(){try{a.texSubImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function Re(){try{a.texSubImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function de(){try{a.compressedTexSubImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function je(){try{a.compressedTexSubImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function Oe(){try{a.texStorage2D(...arguments)}catch(O){O("WebGLState:",O)}}function qe(){try{a.texStorage3D(...arguments)}catch(O){O("WebGLState:",O)}}function Ye(){try{a.texImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function we(){try{a.texImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function Ue(O){Ae.equals(O)===!1&&(a.scissor(O.x,O.y,O.z,O.w),Ae.copy(O))}function Ke(O){Ne.equals(O)===!1&&(a.viewport(O.x,O.y,O.z,O.w),Ne.copy(O))}function ke(O,xe){let Me=p.get(xe);Me===void 0&&(Me=new WeakMap,p.set(xe,Me));let Ce=Me.get(O);Ce===void 0&&(Ce=a.getUniformBlockIndex(xe,O.name),Me.set(O,Ce))}function He(O,xe){const Ce=p.get(xe).get(O);m.get(xe)!==Ce&&(a.uniformBlockBinding(xe,Ce,O.__bindingPointIndex),m.set(xe,Ce))}function nt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),x={},be=null,Te={},g={},v=new WeakMap,b=[],M=null,E=!1,y=null,_=null,U=null,D=null,P=null,I=null,N=null,z=new wt(0,0,0),Z=0,w=!1,C=null,G=null,X=null,ne=null,pe=null,Ae.set(0,0,a.canvas.width,a.canvas.height),Ne.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:me,disable:W,bindFramebuffer:De,drawBuffers:Pe,useProgram:ot,setBlending:Et,setMaterial:V,setFlipSided:ut,setCullFace:pt,setLineWidth:Ft,setPolygonOffset:Ve,setScissorTest:Bt,activeTexture:Qe,bindTexture:st,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:Ye,texImage3D:we,updateUBOMapping:ke,uniformBlockBinding:He,texStorage2D:Oe,texStorage3D:qe,texSubImage2D:ve,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:je,scissor:Ue,viewport:Ke,reset:nt}}function tw(a,e,n,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Dt,x=new WeakMap;let g;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return b?new OffscreenCanvas(L,T):yu("canvas")}function E(L,T,J){let ve=1;const Re=st(L);if((Re.width>J||Re.height>J)&&(ve=J/Math.max(Re.width,Re.height)),ve<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(ve*Re.width),je=Math.floor(ve*Re.height);g===void 0&&(g=M(de,je));const Oe=T?M(de,je):g;return Oe.width=de,Oe.height=je,Oe.getContext("2d").drawImage(L,0,0,de,je),dt("WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+de+"x"+je+")."),Oe}else return"data"in L&&dt("WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){a.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function D(L,T,J,ve,Re=!1){if(L!==null){if(a[L]!==void 0)return a[L];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=T;if(T===a.RED&&(J===a.FLOAT&&(de=a.R32F),J===a.HALF_FLOAT&&(de=a.R16F),J===a.UNSIGNED_BYTE&&(de=a.R8)),T===a.RED_INTEGER&&(J===a.UNSIGNED_BYTE&&(de=a.R8UI),J===a.UNSIGNED_SHORT&&(de=a.R16UI),J===a.UNSIGNED_INT&&(de=a.R32UI),J===a.BYTE&&(de=a.R8I),J===a.SHORT&&(de=a.R16I),J===a.INT&&(de=a.R32I)),T===a.RG&&(J===a.FLOAT&&(de=a.RG32F),J===a.HALF_FLOAT&&(de=a.RG16F),J===a.UNSIGNED_BYTE&&(de=a.RG8)),T===a.RG_INTEGER&&(J===a.UNSIGNED_BYTE&&(de=a.RG8UI),J===a.UNSIGNED_SHORT&&(de=a.RG16UI),J===a.UNSIGNED_INT&&(de=a.RG32UI),J===a.BYTE&&(de=a.RG8I),J===a.SHORT&&(de=a.RG16I),J===a.INT&&(de=a.RG32I)),T===a.RGB_INTEGER&&(J===a.UNSIGNED_BYTE&&(de=a.RGB8UI),J===a.UNSIGNED_SHORT&&(de=a.RGB16UI),J===a.UNSIGNED_INT&&(de=a.RGB32UI),J===a.BYTE&&(de=a.RGB8I),J===a.SHORT&&(de=a.RGB16I),J===a.INT&&(de=a.RGB32I)),T===a.RGBA_INTEGER&&(J===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),J===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),J===a.UNSIGNED_INT&&(de=a.RGBA32UI),J===a.BYTE&&(de=a.RGBA8I),J===a.SHORT&&(de=a.RGBA16I),J===a.INT&&(de=a.RGBA32I)),T===a.RGB&&(J===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),J===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),T===a.RGBA){const je=Re?_u:Pt.getTransfer(ve);J===a.FLOAT&&(de=a.RGBA32F),J===a.HALF_FLOAT&&(de=a.RGBA16F),J===a.UNSIGNED_BYTE&&(de=je===qt?a.SRGB8_ALPHA8:a.RGBA8),J===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),J===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(L,T){let J;return L?T===null||T===Yr||T===fl?J=a.DEPTH24_STENCIL8:T===Aa?J=a.DEPTH32F_STENCIL8:T===ul&&(J=a.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yr||T===fl?J=a.DEPTH_COMPONENT24:T===Aa?J=a.DEPTH_COMPONENT32F:T===ul&&(J=a.DEPTH_COMPONENT16),J}function I(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==hi&&L.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function N(L){const T=L.target;T.removeEventListener("dispose",N),Z(T),T.isVideoTexture&&x.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),C(T)}function Z(L){const T=r.get(L);if(T.__webglInit===void 0)return;const J=L.source,ve=v.get(J);if(ve){const Re=ve[T.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&w(L),Object.keys(ve).length===0&&v.delete(J)}r.remove(L)}function w(L){const T=r.get(L);a.deleteTexture(T.__webglTexture);const J=L.source,ve=v.get(J);delete ve[T.__cacheKey],u.memory.textures--}function C(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Re=0;Re<T.__webglFramebuffer[ve].length;Re++)a.deleteFramebuffer(T.__webglFramebuffer[ve][Re]);else a.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)a.deleteFramebuffer(T.__webglFramebuffer[ve]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let ve=0,Re=J.length;ve<Re;ve++){const de=r.get(J[ve]);de.__webglTexture&&(a.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(J[ve])}r.remove(L)}let G=0;function X(){G=0}function ne(){const L=G;return L>=o.maxTextures&&dt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),G+=1,L}function pe(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function fe(L,T){const J=r.get(L);if(L.isVideoTexture&&Bt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const ve=L.image;if(ve===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(J,L,T);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,J.__webglTexture,a.TEXTURE0+T)}function B(L,T){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){re(J,L,T);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,J.__webglTexture,a.TEXTURE0+T)}function K(L,T){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){re(J,L,T);return}n.bindTexture(a.TEXTURE_3D,J.__webglTexture,a.TEXTURE0+T)}function q(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){me(J,L,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,J.__webglTexture,a.TEXTURE0+T)}const be={[jh]:a.REPEAT,[Ta]:a.CLAMP_TO_EDGE,[Yh]:a.MIRRORED_REPEAT},Te={[hi]:a.NEAREST,[A3]:a.NEAREST_MIPMAP_NEAREST,[Bc]:a.NEAREST_MIPMAP_LINEAR,[Ei]:a.LINEAR,[Qd]:a.LINEAR_MIPMAP_NEAREST,[Wr]:a.LINEAR_MIPMAP_LINEAR},F={[D3]:a.NEVER,[F3]:a.ALWAYS,[U3]:a.LESS,[my]:a.LEQUAL,[N3]:a.EQUAL,[P3]:a.GEQUAL,[L3]:a.GREATER,[O3]:a.NOTEQUAL};function ae(L,T){if(T.type===Aa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===Qd||T.magFilter===Bc||T.magFilter===Wr||T.minFilter===Ei||T.minFilter===Qd||T.minFilter===Bc||T.minFilter===Wr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,be[T.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,be[T.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,be[T.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,Te[T.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,Te[T.minFilter]),T.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==Bc&&T.minFilter!==Wr||T.type===Aa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ae(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",N));const ve=T.source;let Re=v.get(ve);Re===void 0&&(Re={},v.set(ve,Re));const de=pe(T);if(de!==L.__cacheKey){Re[de]===void 0&&(Re[de]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Re[de].usedTimes++;const je=Re[L.__cacheKey];je!==void 0&&(Re[L.__cacheKey].usedTimes--,je.usedTimes===0&&w(T)),L.__cacheKey=de,L.__webglTexture=Re[de].texture}return J}function Ne(L,T,J){return Math.floor(Math.floor(L/J)/T)}function Be(L,T,J,ve){const de=L.updateRanges;if(de.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,J,ve,T.data);else{de.sort((we,Ue)=>we.start-Ue.start);let je=0;for(let we=1;we<de.length;we++){const Ue=de[je],Ke=de[we],ke=Ue.start+Ue.count,He=Ne(Ke.start,T.width,4),nt=Ne(Ue.start,T.width,4);Ke.start<=ke+1&&He===nt&&Ne(Ke.start+Ke.count-1,T.width,4)===He?Ue.count=Math.max(Ue.count,Ke.start+Ke.count-Ue.start):(++je,de[je]=Ke)}de.length=je+1;const Oe=a.getParameter(a.UNPACK_ROW_LENGTH),qe=a.getParameter(a.UNPACK_SKIP_PIXELS),Ye=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let we=0,Ue=de.length;we<Ue;we++){const Ke=de[we],ke=Math.floor(Ke.start/4),He=Math.ceil(Ke.count/4),nt=ke%T.width,O=Math.floor(ke/T.width),xe=He,Me=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,nt),a.pixelStorei(a.UNPACK_SKIP_ROWS,O),n.texSubImage2D(a.TEXTURE_2D,0,nt,O,xe,Me,J,ve,T.data)}L.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Oe),a.pixelStorei(a.UNPACK_SKIP_PIXELS,qe),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ye)}}function re(L,T,J){let ve=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=a.TEXTURE_3D);const Re=Ae(L,T),de=T.source;n.bindTexture(ve,L.__webglTexture,a.TEXTURE0+J);const je=r.get(de);if(de.version!==je.__version||Re===!0){n.activeTexture(a.TEXTURE0+J);const Oe=Pt.getPrimaries(Pt.workingColorSpace),qe=T.colorSpace===hr?null:Pt.getPrimaries(T.colorSpace),Ye=T.colorSpace===hr||Oe===qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let we=E(T.image,!1,o.maxTextureSize);we=Qe(T,we);const Ue=c.convert(T.format,T.colorSpace),Ke=c.convert(T.type);let ke=D(T.internalFormat,Ue,Ke,T.colorSpace,T.isVideoTexture);ae(ve,T);let He;const nt=T.mipmaps,O=T.isVideoTexture!==!0,xe=je.__version===void 0||Re===!0,Me=de.dataReady,Ce=I(T,we);if(T.isDepthTexture)ke=P(T.format===hl,T.type),xe&&(O?n.texStorage2D(a.TEXTURE_2D,1,ke,we.width,we.height):n.texImage2D(a.TEXTURE_2D,0,ke,we.width,we.height,0,Ue,Ke,null));else if(T.isDataTexture)if(nt.length>0){O&&xe&&n.texStorage2D(a.TEXTURE_2D,Ce,ke,nt[0].width,nt[0].height);for(let Ee=0,_e=nt.length;Ee<_e;Ee++)He=nt[Ee],O?Me&&n.texSubImage2D(a.TEXTURE_2D,Ee,0,0,He.width,He.height,Ue,Ke,He.data):n.texImage2D(a.TEXTURE_2D,Ee,ke,He.width,He.height,0,Ue,Ke,He.data);T.generateMipmaps=!1}else O?(xe&&n.texStorage2D(a.TEXTURE_2D,Ce,ke,we.width,we.height),Me&&Be(T,we,Ue,Ke)):n.texImage2D(a.TEXTURE_2D,0,ke,we.width,we.height,0,Ue,Ke,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&xe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,ke,nt[0].width,nt[0].height,we.depth);for(let Ee=0,_e=nt.length;Ee<_e;Ee++)if(He=nt[Ee],T.format!==Li)if(Ue!==null)if(O){if(Me)if(T.layerUpdates.size>0){const Fe=V_(He.width,He.height,T.format,T.type);for(const at of T.layerUpdates){const It=He.data.subarray(at*Fe/He.data.BYTES_PER_ELEMENT,(at+1)*Fe/He.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,at,He.width,He.height,1,Ue,It)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,0,He.width,He.height,we.depth,Ue,He.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ee,ke,He.width,He.height,we.depth,0,He.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?Me&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,0,He.width,He.height,we.depth,Ue,Ke,He.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Ee,ke,He.width,He.height,we.depth,0,Ue,Ke,He.data)}else{O&&xe&&n.texStorage2D(a.TEXTURE_2D,Ce,ke,nt[0].width,nt[0].height);for(let Ee=0,_e=nt.length;Ee<_e;Ee++)He=nt[Ee],T.format!==Li?Ue!==null?O?Me&&n.compressedTexSubImage2D(a.TEXTURE_2D,Ee,0,0,He.width,He.height,Ue,He.data):n.compressedTexImage2D(a.TEXTURE_2D,Ee,ke,He.width,He.height,0,He.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Me&&n.texSubImage2D(a.TEXTURE_2D,Ee,0,0,He.width,He.height,Ue,Ke,He.data):n.texImage2D(a.TEXTURE_2D,Ee,ke,He.width,He.height,0,Ue,Ke,He.data)}else if(T.isDataArrayTexture)if(O){if(xe&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ce,ke,we.width,we.height,we.depth),Me)if(T.layerUpdates.size>0){const Ee=V_(we.width,we.height,T.format,T.type);for(const _e of T.layerUpdates){const Fe=we.data.subarray(_e*Ee/we.data.BYTES_PER_ELEMENT,(_e+1)*Ee/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,Ue,Ke,Fe)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ue,Ke,we.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,ke,we.width,we.height,we.depth,0,Ue,Ke,we.data);else if(T.isData3DTexture)O?(xe&&n.texStorage3D(a.TEXTURE_3D,Ce,ke,we.width,we.height,we.depth),Me&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ue,Ke,we.data)):n.texImage3D(a.TEXTURE_3D,0,ke,we.width,we.height,we.depth,0,Ue,Ke,we.data);else if(T.isFramebufferTexture){if(xe)if(O)n.texStorage2D(a.TEXTURE_2D,Ce,ke,we.width,we.height);else{let Ee=we.width,_e=we.height;for(let Fe=0;Fe<Ce;Fe++)n.texImage2D(a.TEXTURE_2D,Fe,ke,Ee,_e,0,Ue,Ke,null),Ee>>=1,_e>>=1}}else if(nt.length>0){if(O&&xe){const Ee=st(nt[0]);n.texStorage2D(a.TEXTURE_2D,Ce,ke,Ee.width,Ee.height)}for(let Ee=0,_e=nt.length;Ee<_e;Ee++)He=nt[Ee],O?Me&&n.texSubImage2D(a.TEXTURE_2D,Ee,0,0,Ue,Ke,He):n.texImage2D(a.TEXTURE_2D,Ee,ke,Ue,Ke,He);T.generateMipmaps=!1}else if(O){if(xe){const Ee=st(we);n.texStorage2D(a.TEXTURE_2D,Ce,ke,Ee.width,Ee.height)}Me&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ue,Ke,we)}else n.texImage2D(a.TEXTURE_2D,0,ke,Ue,Ke,we);y(T)&&_(ve),je.__version=de.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function me(L,T,J){if(T.image.length!==6)return;const ve=Ae(L,T),Re=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+J);const de=r.get(Re);if(Re.version!==de.__version||ve===!0){n.activeTexture(a.TEXTURE0+J);const je=Pt.getPrimaries(Pt.workingColorSpace),Oe=T.colorSpace===hr?null:Pt.getPrimaries(T.colorSpace),qe=T.colorSpace===hr||je===Oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,we=T.image[0]&&T.image[0].isDataTexture,Ue=[];for(let _e=0;_e<6;_e++)!Ye&&!we?Ue[_e]=E(T.image[_e],!0,o.maxCubemapSize):Ue[_e]=we?T.image[_e].image:T.image[_e],Ue[_e]=Qe(T,Ue[_e]);const Ke=Ue[0],ke=c.convert(T.format,T.colorSpace),He=c.convert(T.type),nt=D(T.internalFormat,ke,He,T.colorSpace),O=T.isVideoTexture!==!0,xe=de.__version===void 0||ve===!0,Me=Re.dataReady;let Ce=I(T,Ke);ae(a.TEXTURE_CUBE_MAP,T);let Ee;if(Ye){O&&xe&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,nt,Ke.width,Ke.height);for(let _e=0;_e<6;_e++){Ee=Ue[_e].mipmaps;for(let Fe=0;Fe<Ee.length;Fe++){const at=Ee[Fe];T.format!==Li?ke!==null?O?Me&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,at.width,at.height,ke,at.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,nt,at.width,at.height,0,at.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,at.width,at.height,ke,He,at.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,nt,at.width,at.height,0,ke,He,at.data)}}}else{if(Ee=T.mipmaps,O&&xe){Ee.length>0&&Ce++;const _e=st(Ue[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ce,nt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){O?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ue[_e].width,Ue[_e].height,ke,He,Ue[_e].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,nt,Ue[_e].width,Ue[_e].height,0,ke,He,Ue[_e].data);for(let Fe=0;Fe<Ee.length;Fe++){const It=Ee[Fe].image[_e].image;O?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,It.width,It.height,ke,He,It.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,nt,It.width,It.height,0,ke,He,It.data)}}else{O?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ke,He,Ue[_e]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,nt,ke,He,Ue[_e]);for(let Fe=0;Fe<Ee.length;Fe++){const at=Ee[Fe];O?Me&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,ke,He,at.image[_e]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,nt,ke,He,at.image[_e])}}}y(T)&&_(a.TEXTURE_CUBE_MAP),de.__version=Re.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function W(L,T,J,ve,Re,de){const je=c.convert(J.format,J.colorSpace),Oe=c.convert(J.type),qe=D(J.internalFormat,je,Oe,J.colorSpace),Ye=r.get(T),we=r.get(J);if(we.__renderTarget=T,!Ye.__hasExternalTextures){const Ue=Math.max(1,T.width>>de),Ke=Math.max(1,T.height>>de);Re===a.TEXTURE_3D||Re===a.TEXTURE_2D_ARRAY?n.texImage3D(Re,de,qe,Ue,Ke,T.depth,0,je,Oe,null):n.texImage2D(Re,de,qe,Ue,Ke,0,je,Oe,null)}n.bindFramebuffer(a.FRAMEBUFFER,L),Ve(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,Re,we.__webglTexture,0,Ft(T)):(Re===a.TEXTURE_2D||Re>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ve,Re,we.__webglTexture,de),n.bindFramebuffer(a.FRAMEBUFFER,null)}function De(L,T,J){if(a.bindRenderbuffer(a.RENDERBUFFER,L),T.depthBuffer){const ve=T.depthTexture,Re=ve&&ve.isDepthTexture?ve.type:null,de=P(T.stencilBuffer,Re),je=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=Ft(T);Ve(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Oe,de,T.width,T.height):J?a.renderbufferStorageMultisample(a.RENDERBUFFER,Oe,de,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,de,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,je,a.RENDERBUFFER,L)}else{const ve=T.textures;for(let Re=0;Re<ve.length;Re++){const de=ve[Re],je=c.convert(de.format,de.colorSpace),Oe=c.convert(de.type),qe=D(de.internalFormat,je,Oe,de.colorSpace),Ye=Ft(T);J&&Ve(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ye,qe,T.width,T.height):Ve(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ye,qe,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,qe,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Pe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(T.depthTexture);ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const Re=ve.__webglTexture,de=Ft(T);if(T.depthTexture.format===dl)Ve(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Re,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Re,0);else if(T.depthTexture.format===hl)Ve(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Re,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Re,0);else throw new Error("Unknown depthTexture format")}function ot(L){const T=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ve=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Re)};ve.addEventListener("dispose",Re),T.__depthDisposeCallback=Re}T.__boundDepthTexture=ve}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ve=L.texture.mipmaps;ve&&ve.length>0?Pe(T.__webglFramebuffer[0],L):Pe(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=a.createRenderbuffer(),De(T.__webglDepthbuffer[ve],L,!1);else{const Re=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[ve];a.bindRenderbuffer(a.RENDERBUFFER,de),a.framebufferRenderbuffer(a.FRAMEBUFFER,Re,a.RENDERBUFFER,de)}}else{const ve=L.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),De(T.__webglDepthbuffer,L,!1);else{const Re=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,de),a.framebufferRenderbuffer(a.FRAMEBUFFER,Re,a.RENDERBUFFER,de)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function nn(L,T,J){const ve=r.get(L);T!==void 0&&W(ve.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),J!==void 0&&ot(L)}function ct(L){const T=L.texture,J=r.get(L),ve=r.get(T);L.addEventListener("dispose",z);const Re=L.textures,de=L.isWebGLCubeRenderTarget===!0,je=Re.length>1;if(je||(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=T.version,u.memory.textures++),de){J.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Oe]=[];for(let qe=0;qe<T.mipmaps.length;qe++)J.__webglFramebuffer[Oe][qe]=a.createFramebuffer()}else J.__webglFramebuffer[Oe]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)J.__webglFramebuffer[Oe]=a.createFramebuffer()}else J.__webglFramebuffer=a.createFramebuffer();if(je)for(let Oe=0,qe=Re.length;Oe<qe;Oe++){const Ye=r.get(Re[Oe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=a.createTexture(),u.memory.textures++)}if(L.samples>0&&Ve(L)===!1){J.__webglMultisampledFramebuffer=a.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Re.length;Oe++){const qe=Re[Oe];J.__webglColorRenderbuffer[Oe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,J.__webglColorRenderbuffer[Oe]);const Ye=c.convert(qe.format,qe.colorSpace),we=c.convert(qe.type),Ue=D(qe.internalFormat,Ye,we,qe.colorSpace,L.isXRRenderTarget===!0),Ke=Ft(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ke,Ue,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Oe,a.RENDERBUFFER,J.__webglColorRenderbuffer[Oe])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=a.createRenderbuffer(),De(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(de){n.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),ae(a.TEXTURE_CUBE_MAP,T);for(let Oe=0;Oe<6;Oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)W(J.__webglFramebuffer[Oe][qe],L,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,qe);else W(J.__webglFramebuffer[Oe],L,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);y(T)&&_(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(je){for(let Oe=0,qe=Re.length;Oe<qe;Oe++){const Ye=Re[Oe],we=r.get(Ye);let Ue=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ue,we.__webglTexture),ae(Ue,Ye),W(J.__webglFramebuffer,L,Ye,a.COLOR_ATTACHMENT0+Oe,Ue,0),y(Ye)&&_(Ue)}n.unbindTexture()}else{let Oe=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Oe=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Oe,ve.__webglTexture),ae(Oe,T),T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)W(J.__webglFramebuffer[qe],L,T,a.COLOR_ATTACHMENT0,Oe,qe);else W(J.__webglFramebuffer,L,T,a.COLOR_ATTACHMENT0,Oe,0);y(T)&&_(Oe),n.unbindTexture()}L.depthBuffer&&ot(L)}function Et(L){const T=L.textures;for(let J=0,ve=T.length;J<ve;J++){const Re=T[J];if(y(Re)){const de=U(L),je=r.get(Re).__webglTexture;n.bindTexture(de,je),_(de),n.unbindTexture()}}}const V=[],ut=[];function pt(L){if(L.samples>0){if(Ve(L)===!1){const T=L.textures,J=L.width,ve=L.height;let Re=a.COLOR_BUFFER_BIT;const de=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,je=r.get(L),Oe=T.length>1;if(Oe)for(let Ye=0;Ye<T.length;Ye++)n.bindFramebuffer(a.FRAMEBUFFER,je.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ye,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,je.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ye,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const qe=L.texture.mipmaps;qe&&qe.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Re|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Re|=a.STENCIL_BUFFER_BIT)),Oe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,je.__webglColorRenderbuffer[Ye]);const we=r.get(T[Ye]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,we,0)}a.blitFramebuffer(0,0,J,ve,0,0,J,ve,Re,a.NEAREST),m===!0&&(V.length=0,ut.length=0,V.push(a.COLOR_ATTACHMENT0+Ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&(V.push(de),ut.push(de),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ut)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,V))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Oe)for(let Ye=0;Ye<T.length;Ye++){n.bindFramebuffer(a.FRAMEBUFFER,je.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ye,a.RENDERBUFFER,je.__webglColorRenderbuffer[Ye]);const we=r.get(T[Ye]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,je.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ye,a.TEXTURE_2D,we,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function Ft(L){return Math.min(o.maxSamples,L.samples)}function Ve(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Bt(L){const T=u.render.frame;x.get(L)!==T&&(x.set(L,T),L.update())}function Qe(L,T){const J=L.colorSpace,ve=L.format,Re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Ks&&J!==hr&&(Pt.getTransfer(J)===qt?(ve!==Li||Re!==qi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",J)),T}function st(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=X,this.setTexture2D=fe,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=nn,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Ve}function nw(a,e){function n(r,o=hr){let c;const u=Pt.getTransfer(o);if(r===qi)return a.UNSIGNED_BYTE;if(r===Hp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Vp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===cy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===uy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===oy)return a.BYTE;if(r===ly)return a.SHORT;if(r===ul)return a.UNSIGNED_SHORT;if(r===Ip)return a.INT;if(r===Yr)return a.UNSIGNED_INT;if(r===Aa)return a.FLOAT;if(r===no)return a.HALF_FLOAT;if(r===fy)return a.ALPHA;if(r===dy)return a.RGB;if(r===Li)return a.RGBA;if(r===dl)return a.DEPTH_COMPONENT;if(r===hl)return a.DEPTH_STENCIL;if(r===hy)return a.RED;if(r===Gp)return a.RED_INTEGER;if(r===kp)return a.RG;if(r===Xp)return a.RG_INTEGER;if(r===Wp)return a.RGBA_INTEGER;if(r===fu||r===du||r===hu||r===pu)if(u===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zh||r===Kh||r===Qh||r===Jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$h||r===ep||r===tp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===$h||r===ep)return u===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===tp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===np||r===ip||r===ap||r===rp||r===sp||r===op||r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===np)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ip)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ap)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===op)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===up)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mp)return u===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xp||r===gp||r===_p)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===xp)return u===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_p)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vp||r===yp||r===Sp||r===bp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===vp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===yp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
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

}`;class rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Ay(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Yi({vertexShader:iw,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new Du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sw extends io{constructor(e,n){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,x=null,g=null,v=null,b=null,M=null;const E=typeof XRWebGLBinding<"u",y=new rw,_={},U=n.getContextAttributes();let D=null,P=null;const I=[],N=[],z=new Dt;let Z=null;const w=new fi;w.viewport=new jt;const C=new fi;C.viewport=new jt;const G=[w,C],X=new ET;let ne=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=I[re];return me===void 0&&(me=new yh,I[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=I[re];return me===void 0&&(me=new yh,I[re]=me),me.getGripSpace()},this.getHand=function(re){let me=I[re];return me===void 0&&(me=new yh,I[re]=me),me.getHandSpace()};function fe(re){const me=N.indexOf(re.inputSource);if(me===-1)return;const W=I[me];W!==void 0&&(W.update(re.inputSource,re.frame,p||u),W.dispatchEvent({type:re.type,data:re.inputSource}))}function B(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",K);for(let re=0;re<I.length;re++){const me=N[re];me!==null&&(N[re]=null,I[re].disconnect(me))}ne=null,pe=null,y.reset();for(const re in _)delete _[re];e.setRenderTarget(D),b=null,v=null,g=null,o=null,P=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",B),o.addEventListener("inputsourceschange",K),U.xrCompatible!==!0&&await n.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,De=null,Pe=null;U.depth&&(Pe=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=U.stencil?hl:dl,De=U.stencil?fl:Yr);const ot={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(ot),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Zr(v.textureWidth,v.textureHeight,{format:Li,type:qi,depthTexture:new Ty(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const W={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,W),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new Zr(b.framebufferWidth,b.framebufferHeight,{format:Li,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Be.setContext(o),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(re){for(let me=0;me<re.removed.length;me++){const W=re.removed[me],De=N.indexOf(W);De>=0&&(N[De]=null,I[De].disconnect(W))}for(let me=0;me<re.added.length;me++){const W=re.added[me];let De=N.indexOf(W);if(De===-1){for(let ot=0;ot<I.length;ot++)if(ot>=N.length){N.push(W),De=ot;break}else if(N[ot]===null){N[ot]=W,De=ot;break}if(De===-1)break}const Pe=I[De];Pe&&Pe.connect(W)}}const q=new se,be=new se;function Te(re,me,W){q.setFromMatrixPosition(me.matrixWorld),be.setFromMatrixPosition(W.matrixWorld);const De=q.distanceTo(be),Pe=me.projectionMatrix.elements,ot=W.projectionMatrix.elements,nn=Pe[14]/(Pe[10]-1),ct=Pe[14]/(Pe[10]+1),Et=(Pe[9]+1)/Pe[5],V=(Pe[9]-1)/Pe[5],ut=(Pe[8]-1)/Pe[0],pt=(ot[8]+1)/ot[0],Ft=nn*ut,Ve=nn*pt,Bt=De/(-ut+pt),Qe=Bt*-ut;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Qe),re.translateZ(Bt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Pe[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const st=nn+Bt,L=ct+Bt,T=Ft-Qe,J=Ve+(De-Qe),ve=Et*ct/L*st,Re=V*ct/L*st;re.projectionMatrix.makePerspective(T,J,ve,Re,st,L),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function F(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let me=re.near,W=re.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(W=y.depthFar)),X.near=C.near=w.near=me,X.far=C.far=w.far=W,(ne!==X.near||pe!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),ne=X.near,pe=X.far),X.layers.mask=re.layers.mask|6,w.layers.mask=X.layers.mask&3,C.layers.mask=X.layers.mask&5;const De=re.parent,Pe=X.cameras;F(X,De);for(let ot=0;ot<Pe.length;ot++)F(Pe[ot],De);Pe.length===2?Te(X,w,C):X.projectionMatrix.copy(w.projectionMatrix),ae(re,X,De)};function ae(re,me,W){W===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(W.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Mp*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(v===null&&b===null))return m},this.setFoveation=function(re){m=re,v!==null&&(v.fixedFoveation=re),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(re){return _[re]};let Ae=null;function Ne(re,me){if(x=me.getViewerPose(p||u),M=me,x!==null){const W=x.views;b!==null&&(e.setRenderTargetFramebuffer(P,b.framebuffer),e.setRenderTarget(P));let De=!1;W.length!==X.cameras.length&&(X.cameras.length=0,De=!0);for(let ct=0;ct<W.length;ct++){const Et=W[ct];let V=null;if(b!==null)V=b.getViewport(Et);else{const pt=g.getViewSubImage(v,Et);V=pt.viewport,ct===0&&(e.setRenderTargetTextures(P,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(P))}let ut=G[ct];ut===void 0&&(ut=new fi,ut.layers.enable(ct),ut.viewport=new jt,G[ct]=ut),ut.matrix.fromArray(Et.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Et.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(V.x,V.y,V.width,V.height),ct===0&&(X.matrix.copy(ut.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),De===!0&&X.cameras.push(ut)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){g=r.getBinding();const ct=g.getDepthInformation(W[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,o.renderState)}if(Pe&&Pe.includes("camera-access")&&E){e.state.unbindTexture(),g=r.getBinding();for(let ct=0;ct<W.length;ct++){const Et=W[ct].camera;if(Et){let V=_[Et];V||(V=new Ay,_[Et]=V);const ut=g.getCameraImage(Et);V.sourceTexture=ut}}}}for(let W=0;W<I.length;W++){const De=N[W],Pe=I[W];De!==null&&Pe!==void 0&&Pe.update(De,me,p||u)}Ae&&Ae(re,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),M=null}const Be=new wy;Be.setAnimationLoop(Ne),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const Hr=new ji,ow=new tn;function lw(a,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Sy(a)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,U,D,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),g(y,_)):_.isMeshPhongMaterial?(c(y,_),x(y,_)):_.isMeshStandardMaterial?(c(y,_),v(y,_),_.isMeshPhysicalMaterial&&b(y,_,P)):_.isMeshMatcapMaterial?(c(y,_),M(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),E(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(u(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,U,D):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Wn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Wn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const U=e.get(_),D=U.envMap,P=U.envMapRotation;D&&(y.envMap.value=D,Hr.copy(P),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),y.envMapRotation.value.setFromMatrix4(ow.makeRotationFromEuler(Hr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function u(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,U,D){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*U,y.scale.value=D*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function b(y,_,U){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const U=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function cw(a,e,n,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,D){const P=D.program;r.uniformBlockBinding(U,P)}function p(U,D){let P=o[U.id];P===void 0&&(M(U),P=x(U),o[U.id]=P,U.addEventListener("dispose",y));const I=D.program;r.updateUBOMapping(U,I);const N=e.render.frame;c[U.id]!==N&&(v(U),c[U.id]=N)}function x(U){const D=g();U.__bindingPointIndex=D;const P=a.createBuffer(),I=U.__size,N=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,I,N),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,D,P),P}function g(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const D=o[U.id],P=U.uniforms,I=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,D);for(let N=0,z=P.length;N<z;N++){const Z=Array.isArray(P[N])?P[N]:[P[N]];for(let w=0,C=Z.length;w<C;w++){const G=Z[w];if(b(G,N,w,I)===!0){const X=G.__offset,ne=Array.isArray(G.value)?G.value:[G.value];let pe=0;for(let fe=0;fe<ne.length;fe++){const B=ne[fe],K=E(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,X+pe,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,pe),pe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,X,G.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(U,D,P,I){const N=U.value,z=D+"_"+P;if(I[z]===void 0)return typeof N=="number"||typeof N=="boolean"?I[z]=N:I[z]=N.clone(),!0;{const Z=I[z];if(typeof N=="number"||typeof N=="boolean"){if(Z!==N)return I[z]=N,!0}else if(Z.equals(N)===!1)return Z.copy(N),!0}return!1}function M(U){const D=U.uniforms;let P=0;const I=16;for(let z=0,Z=D.length;z<Z;z++){const w=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,G=w.length;C<G;C++){const X=w[C],ne=Array.isArray(X.value)?X.value:[X.value];for(let pe=0,fe=ne.length;pe<fe;pe++){const B=ne[pe],K=E(B),q=P%I,be=q%K.boundary,Te=q+be;P+=be,Te!==0&&I-Te<K.storage&&(P+=I-Te),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=P,P+=K.storage}}}const N=P%I;return N>0&&(P+=I-N),U.__size=P,U.__cache={},this}function E(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const P=u.indexOf(D.__bindingPointIndex);u.splice(P,1),a.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function _(){for(const U in o)a.deleteBuffer(o[U]);u=[],o={},c={}}return{bind:m,update:p,dispose:_}}const uw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ba=null;function fw(){return ba===null&&(ba=new fT(uw,32,32,kp,no),ba.minFilter=Ei,ba.magFilter=Ei,ba.wrapS=Ta,ba.wrapT=Ta,ba.generateMipmaps=!1,ba.needsUpdate=!0),ba}class dw{constructor(e={}){const{canvas:n=z3(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const M=new Set([Wp,Xp,Gp]),E=new Set([qi,Yr,ul,fl,Hp,Vp]),y=new Uint32Array(4),_=new Int32Array(4);let U=null,D=null;const P=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1;this._outputColorSpace=Mi;let Z=0,w=0,C=null,G=-1,X=null;const ne=new jt,pe=new jt;let fe=null;const B=new wt(0);let K=0,q=n.width,be=n.height,Te=1,F=null,ae=null;const Ae=new jt(0,0,q,be),Ne=new jt(0,0,q,be);let Be=!1;const re=new Zp;let me=!1,W=!1;const De=new tn,Pe=new se,ot=new jt,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Et(){return C===null?Te:1}let V=r;function ut(R,j){return n.getContext(R,j)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zp}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),V===null){const j="webgl2";if(V=ut(j,R),V===null)throw ut(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let pt,Ft,Ve,Bt,Qe,st,L,T,J,ve,Re,de,je,Oe,qe,Ye,we,Ue,Ke,ke,He,nt,O,xe;function Me(){pt=new yR(V),pt.init(),nt=new nw(V,pt),Ft=new fR(V,pt,e,nt),Ve=new ew(V,pt),Ft.reversedDepthBuffer&&v&&Ve.buffers.depth.setReversed(!0),Bt=new MR(V),Qe=new VC,st=new tw(V,pt,Ve,Qe,Ft,nt,Bt),L=new hR(N),T=new vR(N),J=new RT(V),O=new cR(V,J),ve=new SR(V,J,Bt,O),Re=new TR(V,ve,J,Bt),Ke=new ER(V,Ft,st),Ye=new dR(Qe),de=new HC(N,L,T,pt,Ft,O,Ye),je=new lw(N,Qe),Oe=new kC,qe=new ZC(pt),Ue=new lR(N,L,T,Ve,Re,b,m),we=new JC(N,Re,Ft),xe=new cw(V,Bt,Ft,Ve),ke=new uR(V,pt,Bt),He=new bR(V,pt,Bt),Bt.programs=de.programs,N.capabilities=Ft,N.extensions=pt,N.properties=Qe,N.renderLists=Oe,N.shadowMap=we,N.state=Ve,N.info=Bt}Me();const Ce=new sw(N,V);this.xr=Ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(R){R!==void 0&&(Te=R,this.setSize(q,be,!1))},this.getSize=function(R){return R.set(q,be)},this.setSize=function(R,j,le=!0){if(Ce.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,be=j,n.width=Math.floor(R*Te),n.height=Math.floor(j*Te),le===!0&&(n.style.width=R+"px",n.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(q*Te,be*Te).floor()},this.setDrawingBufferSize=function(R,j,le){q=R,be=j,Te=le,n.width=Math.floor(R*le),n.height=Math.floor(j*le),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(ne)},this.getViewport=function(R){return R.copy(Ae)},this.setViewport=function(R,j,le,ie){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,j,le,ie),Ve.viewport(ne.copy(Ae).multiplyScalar(Te).round())},this.getScissor=function(R){return R.copy(Ne)},this.setScissor=function(R,j,le,ie){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,j,le,ie),Ve.scissor(pe.copy(Ne).multiplyScalar(Te).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){Ve.setScissorTest(Be=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,le=!0){let ie=0;if(R){let Q=!1;if(C!==null){const Le=C.texture.format;Q=M.has(Le)}if(Q){const Le=C.texture.type,ze=E.has(Le),Ge=Ue.getClearColor(),Xe=Ue.getClearAlpha(),tt=Ge.r,rt=Ge.g,Je=Ge.b;ze?(y[0]=tt,y[1]=rt,y[2]=Je,y[3]=Xe,V.clearBufferuiv(V.COLOR,0,y)):(_[0]=tt,_[1]=rt,_[2]=Je,_[3]=Xe,V.clearBufferiv(V.COLOR,0,_))}else ie|=V.COLOR_BUFFER_BIT}j&&(ie|=V.DEPTH_BUFFER_BIT),le&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),Ue.dispose(),Oe.dispose(),qe.dispose(),Qe.dispose(),L.dispose(),T.dispose(),Re.dispose(),O.dispose(),xe.dispose(),de.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ki),Ce.removeEventListener("sessionend",Na),Vn.stop()};function Ee(R){R.preventDefault(),x_("WebGLRenderer: Context Lost."),z=!0}function _e(){x_("WebGLRenderer: Context Restored."),z=!1;const R=Bt.autoReset,j=we.enabled,le=we.autoUpdate,ie=we.needsUpdate,Q=we.type;Me(),Bt.autoReset=R,we.enabled=j,we.autoUpdate=le,we.needsUpdate=ie,we.type=Q}function Fe(R){on("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const j=R.target;j.removeEventListener("dispose",at),It(j)}function It(R){St(R),Qe.remove(R)}function St(R){const j=Qe.get(R).programs;j!==void 0&&(j.forEach(function(le){de.releaseProgram(le)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,le,ie,Q,Le){j===null&&(j=nn);const ze=Q.isMesh&&Q.matrixWorld.determinant()<0,Ge=Lu(R,j,le,ie,Q);Ve.setMaterial(ie,ze);let Xe=le.index,tt=1;if(ie.wireframe===!0){if(Xe=ve.getWireframeAttribute(le),Xe===void 0)return;tt=2}const rt=le.drawRange,Je=le.attributes.position;let mt=rt.start*tt,Ut=(rt.start+rt.count)*tt;Le!==null&&(mt=Math.max(mt,Le.start*tt),Ut=Math.min(Ut,(Le.start+Le.count)*tt)),Xe!==null?(mt=Math.max(mt,0),Ut=Math.min(Ut,Xe.count)):Je!=null&&(mt=Math.max(mt,0),Ut=Math.min(Ut,Je.count));const Nt=Ut-mt;if(Nt<0||Nt===1/0)return;O.setup(Q,ie,Ge,le,Xe);let Tt,Ht=ke;if(Xe!==null&&(Tt=J.get(Xe),Ht=He,Ht.setIndex(Tt)),Q.isMesh)ie.wireframe===!0?(Ve.setLineWidth(ie.wireframeLinewidth*Et()),Ht.setMode(V.LINES)):Ht.setMode(V.TRIANGLES);else if(Q.isLine){let et=ie.linewidth;et===void 0&&(et=1),Ve.setLineWidth(et*Et()),Q.isLineSegments?Ht.setMode(V.LINES):Q.isLineLoop?Ht.setMode(V.LINE_LOOP):Ht.setMode(V.LINE_STRIP)}else Q.isPoints?Ht.setMode(V.POINTS):Q.isSprite&&Ht.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)pl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ht.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const et=Q._multiDrawStarts,Yt=Q._multiDrawCounts,At=Q._multiDrawCount,Mn=Xe?J.get(Xe).bytesPerElement:1,Fa=Qe.get(ie).currentProgram.getUniforms();for(let Kt=0;Kt<At;Kt++)Fa.setValue(V,"_gl_DrawID",Kt),Ht.render(et[Kt]/Mn,Yt[Kt])}else if(Q.isInstancedMesh)Ht.renderInstances(mt,Nt,Q.count);else if(le.isInstancedBufferGeometry){const et=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Yt=Math.min(le.instanceCount,et);Ht.renderInstances(mt,Nt,Yt)}else Ht.render(mt,Nt)};function bn(R,j,le){R.transparent===!0&&R.side===Ea&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,gn(R,j,le),R.side=xr,R.needsUpdate=!0,gn(R,j,le),R.side=Ea):gn(R,j,le)}this.compile=function(R,j,le=null){le===null&&(le=R),D=qe.get(le),D.init(j),I.push(D),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),R!==le&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights();const ie=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Le=Q.material;if(Le)if(Array.isArray(Le))for(let ze=0;ze<Le.length;ze++){const Ge=Le[ze];bn(Ge,le,Q),ie.add(Ge)}else bn(Le,le,Q),ie.add(Le)}),D=I.pop(),ie},this.compileAsync=function(R,j,le=null){const ie=this.compile(R,j,le);return new Promise(Q=>{function Le(){if(ie.forEach(function(ze){Qe.get(ze).currentProgram.isReady()&&ie.delete(ze)}),ie.size===0){Q(R);return}setTimeout(Le,10)}pt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Hn=null;function gr(R){Hn&&Hn(R)}function Ki(){Vn.stop()}function Na(){Vn.start()}const Vn=new wy;Vn.setAnimationLoop(gr),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(R){Hn=R,Ce.setAnimationLoop(R),R===null?Vn.stop():Vn.start()},Ce.addEventListener("sessionstart",Ki),Ce.addEventListener("sessionend",Na),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(j),j=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,j,C),D=qe.get(R,I.length),D.init(j),I.push(D),De.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),re.setFromProjectionMatrix(De,ki,j.reversedDepth),W=this.localClippingEnabled,me=Ye.init(this.clippingPlanes,W),U=Oe.get(R,P.length),U.init(),P.push(U),Ce.enabled===!0&&Ce.isPresenting===!0){const Le=N.xr.getDepthSensingMesh();Le!==null&&Pi(Le,j,-1/0,N.sortObjects)}Pi(R,j,0,N.sortObjects),U.finish(),N.sortObjects===!0&&U.sort(F,ae),ct=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ct&&Ue.addToRenderList(U,R),this.info.render.frame++,me===!0&&Ye.beginShadows();const le=D.state.shadowsArray;we.render(le,R,j),me===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=U.opaque,Q=U.transmissive;if(D.setupLights(),j.isArrayCamera){const Le=j.cameras;if(Q.length>0)for(let ze=0,Ge=Le.length;ze<Ge;ze++){const Xe=Le[ze];Oa(ie,Q,R,Xe)}ct&&Ue.render(R);for(let ze=0,Ge=Le.length;ze<Ge;ze++){const Xe=Le[ze];La(U,R,Xe,Xe.viewport)}}else Q.length>0&&Oa(ie,Q,R,j),ct&&Ue.render(R),La(U,R,j);C!==null&&w===0&&(st.updateMultisampleRenderTarget(C),st.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(N,R,j),O.resetDefaultState(),G=-1,X=null,I.pop(),I.length>0?(D=I[I.length-1],me===!0&&Ye.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,P.pop(),P.length>0?U=P[P.length-1]:U=null};function Pi(R,j,le,ie){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){ie&&ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(De);const ze=Re.update(R),Ge=R.material;Ge.visible&&U.push(R,ze,Ge,le,ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const ze=Re.update(R),Ge=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ot.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),ot.copy(ze.boundingSphere.center)),ot.applyMatrix4(R.matrixWorld).applyMatrix4(De)),Array.isArray(Ge)){const Xe=ze.groups;for(let tt=0,rt=Xe.length;tt<rt;tt++){const Je=Xe[tt],mt=Ge[Je.materialIndex];mt&&mt.visible&&U.push(R,ze,mt,le,ot.z,Je)}}else Ge.visible&&U.push(R,ze,Ge,le,ot.z,null)}}const Le=R.children;for(let ze=0,Ge=Le.length;ze<Ge;ze++)Pi(Le[ze],j,le,ie)}function La(R,j,le,ie){const{opaque:Q,transmissive:Le,transparent:ze}=R;D.setupLightsView(le),me===!0&&Ye.setGlobalState(N.clippingPlanes,le),ie&&Ve.viewport(ne.copy(ie)),Q.length>0&&Gn(Q,j,le),Le.length>0&&Gn(Le,j,le),ze.length>0&&Gn(ze,j,le),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Oa(R,j,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[ie.id]===void 0&&(D.state.transmissionRenderTarget[ie.id]=new Zr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?no:qi,minFilter:Wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Le=D.state.transmissionRenderTarget[ie.id],ze=ie.viewport||ne;Le.setSize(ze.z*N.transmissionResolutionScale,ze.w*N.transmissionResolutionScale);const Ge=N.getRenderTarget(),Xe=N.getActiveCubeFace(),tt=N.getActiveMipmapLevel();N.setRenderTarget(Le),N.getClearColor(B),K=N.getClearAlpha(),K<1&&N.setClearColor(16777215,.5),N.clear(),ct&&Ue.render(le);const rt=N.toneMapping;N.toneMapping=mr;const Je=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),D.setupLightsView(ie),me===!0&&Ye.setGlobalState(N.clippingPlanes,ie),Gn(R,le,ie),st.updateMultisampleRenderTarget(Le),st.updateRenderTargetMipmap(Le),pt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Ut=0,Nt=j.length;Ut<Nt;Ut++){const Tt=j[Ut],{object:Ht,geometry:et,material:Yt,group:At}=Tt;if(Yt.side===Ea&&Ht.layers.test(ie.layers)){const Mn=Yt.side;Yt.side=Wn,Yt.needsUpdate=!0,fn(Ht,le,ie,et,Yt,At),Yt.side=Mn,Yt.needsUpdate=!0,mt=!0}}mt===!0&&(st.updateMultisampleRenderTarget(Le),st.updateRenderTargetMipmap(Le))}N.setRenderTarget(Ge,Xe,tt),N.setClearColor(B,K),Je!==void 0&&(ie.viewport=Je),N.toneMapping=rt}function Gn(R,j,le){const ie=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Le=R.length;Q<Le;Q++){const ze=R[Q],{object:Ge,geometry:Xe,group:tt}=ze;let rt=ze.material;rt.allowOverride===!0&&ie!==null&&(rt=ie),Ge.layers.test(le.layers)&&fn(Ge,j,le,Xe,rt,tt)}}function fn(R,j,le,ie,Q,Le){R.onBeforeRender(N,j,le,ie,Q,Le),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(N,j,le,ie,R,Le),Q.transparent===!0&&Q.side===Ea&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,N.renderBufferDirect(le,j,ie,Q,R,Le),Q.side=xr,Q.needsUpdate=!0,N.renderBufferDirect(le,j,ie,Q,R,Le),Q.side=Ea):N.renderBufferDirect(le,j,ie,Q,R,Le),R.onAfterRender(N,j,le,ie,Q,Le)}function gn(R,j,le){j.isScene!==!0&&(j=nn);const ie=Qe.get(R),Q=D.state.lights,Le=D.state.shadowsArray,ze=Q.state.version,Ge=de.getParameters(R,Q.state,Le,j,le),Xe=de.getProgramCacheKey(Ge);let tt=ie.programs;ie.environment=R.isMeshStandardMaterial?j.environment:null,ie.fog=j.fog,ie.envMap=(R.isMeshStandardMaterial?T:L).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",at),tt=new Map,ie.programs=tt);let rt=tt.get(Xe);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===ze)return Qr(R,Ge),rt}else Ge.uniforms=de.getUniforms(R),R.onBeforeCompile(Ge,N),rt=de.acquireProgram(Ge,Xe),tt.set(Xe,rt),ie.uniforms=Ge.uniforms;const Je=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Je.clippingPlanes=Ye.uniform),Qr(R,Ge),ie.needsLights=Al(R),ie.lightsStateVersion=ze,ie.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.directionalShadowMap.value=Q.state.directionalShadowMap,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotShadowMap.value=Q.state.spotShadowMap,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMap.value=Q.state.pointShadowMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=rt,ie.uniformsList=null,rt}function Qi(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=mu.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Qr(R,j){const le=Qe.get(R);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function Lu(R,j,le,ie,Q){j.isScene!==!0&&(j=nn),st.resetTextureUnits();const Le=j.fog,ze=ie.isMeshStandardMaterial?j.environment:null,Ge=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ks,Xe=(ie.isMeshStandardMaterial?T:L).get(ie.envMap||ze),tt=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,rt=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,Ut=!!le.morphAttributes.color;let Nt=mr;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Nt=N.toneMapping);const Tt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ht=Tt!==void 0?Tt.length:0,et=Qe.get(ie),Yt=D.state.lights;if(me===!0&&(W===!0||R!==X)){const Tn=R===X&&ie.id===G;Ye.setState(ie,R,Tn)}let At=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Yt.state.version||et.outputColorSpace!==Ge||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isBatchedMesh&&et.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&et.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&et.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&et.instancingMorph===!1&&Q.morphTexture!==null||et.envMap!==Xe||ie.fog===!0&&et.fog!==Le||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ye.numPlanes||et.numIntersection!==Ye.numIntersection)||et.vertexAlphas!==tt||et.vertexTangents!==rt||et.morphTargets!==Je||et.morphNormals!==mt||et.morphColors!==Ut||et.toneMapping!==Nt||et.morphTargetsCount!==Ht)&&(At=!0):(At=!0,et.__version=ie.version);let Mn=et.currentProgram;At===!0&&(Mn=gn(ie,j,Q));let Fa=!1,Kt=!1,Ji=!1;const Qt=Mn.getUniforms(),En=et.uniforms;if(Ve.useProgram(Mn.program)&&(Fa=!0,Kt=!0,Ji=!0),ie.id!==G&&(G=ie.id,Kt=!0),Fa||X!==R){Ve.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Qt.setValue(V,"projectionMatrix",R.projectionMatrix),Qt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Cn=Qt.map.cameraPosition;Cn!==void 0&&Cn.setValue(V,Pe.setFromMatrixPosition(R.matrixWorld)),Ft.logarithmicDepthBuffer&&Qt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Qt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,Kt=!0,Ji=!0)}if(Q.isSkinnedMesh){Qt.setOptional(V,Q,"bindMatrix"),Qt.setOptional(V,Q,"bindMatrixInverse");const Tn=Q.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Qt.setValue(V,"boneTexture",Tn.boneTexture,st))}Q.isBatchedMesh&&(Qt.setOptional(V,Q,"batchingTexture"),Qt.setValue(V,"batchingTexture",Q._matricesTexture,st),Qt.setOptional(V,Q,"batchingIdTexture"),Qt.setValue(V,"batchingIdTexture",Q._indirectTexture,st),Qt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Qt.setValue(V,"batchingColorTexture",Q._colorsTexture,st));const _n=le.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Ke.update(Q,le,Mn),(Kt||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,Qt.setValue(V,"receiveShadow",Q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(En.envMap.value=Xe,En.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&j.environment!==null&&(En.envMapIntensity.value=j.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=fw()),Kt&&(Qt.setValue(V,"toneMappingExposure",N.toneMappingExposure),et.needsLights&&Ou(En,Ji),Le&&ie.fog===!0&&je.refreshFogUniforms(En,Le),je.refreshMaterialUniforms(En,ie,Te,be,D.state.transmissionRenderTarget[R.id]),mu.upload(V,Qi(et),En,st)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(mu.upload(V,Qi(et),En,st),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Qt.setValue(V,"center",Q.center),Qt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Qt.setValue(V,"normalMatrix",Q.normalMatrix),Qt.setValue(V,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Tn=ie.uniformsGroups;for(let Cn=0,Fi=Tn.length;Cn<Fi;Cn++){const $i=Tn[Cn];xe.update($i,Mn),xe.bind($i,Mn)}}return Mn}function Ou(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Al(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,j,le){const ie=Qe.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Qe.get(R.texture).__webglTexture=j,Qe.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const le=Qe.get(R);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const _r=V.createFramebuffer();this.setRenderTarget=function(R,j=0,le=0){C=R,Z=j,w=le;let ie=!0,Q=null,Le=!1,ze=!1;if(R){const Xe=Qe.get(R);if(Xe.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(V.FRAMEBUFFER,null),ie=!1;else if(Xe.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(Xe.__hasExternalTextures)st.rebindTextures(R,Qe.get(R.texture).__webglTexture,Qe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Je=R.depthTexture;if(Xe.__boundDepthTexture!==Je){if(Je!==null&&Qe.has(Je)&&(R.width!==Je.image.width||R.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(ze=!0);const rt=Qe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?Q=rt[j][le]:Q=rt[j],Le=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?Q=Qe.get(R).__webglMultisampledFramebuffer:Array.isArray(rt)?Q=rt[le]:Q=rt,ne.copy(R.viewport),pe.copy(R.scissor),fe=R.scissorTest}else ne.copy(Ae).multiplyScalar(Te).floor(),pe.copy(Ne).multiplyScalar(Te).floor(),fe=Be;if(le!==0&&(Q=_r),Ve.bindFramebuffer(V.FRAMEBUFFER,Q)&&ie&&Ve.drawBuffers(R,Q),Ve.viewport(ne),Ve.scissor(pe),Ve.setScissorTest(fe),Le){const Xe=Qe.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Xe.__webglTexture,le)}else if(ze){const Xe=j;for(let tt=0;tt<R.textures.length;tt++){const rt=Qe.get(R.textures[tt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+tt,rt.__webglTexture,le,Xe)}}else if(R!==null&&le!==0){const Xe=Qe.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Xe.__webglTexture,le)}G=-1},this.readRenderTargetPixels=function(R,j,le,ie,Q,Le,ze,Ge=0){if(!(R&&R.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe){Ve.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const tt=R.textures[Ge],rt=tt.format,Je=tt.type;if(!Ft.textureFormatReadable(rt)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Je)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ie&&le>=0&&le<=R.height-Q&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ge),V.readPixels(j,le,ie,Q,nt.convert(rt),nt.convert(Je),Le))}finally{const tt=C!==null?Qe.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(V.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,j,le,ie,Q,Le,ze,Ge=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Qe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe)if(j>=0&&j<=R.width-ie&&le>=0&&le<=R.height-Q){Ve.bindFramebuffer(V.FRAMEBUFFER,Xe);const tt=R.textures[Ge],rt=tt.format,Je=tt.type;if(!Ft.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ge),V.readPixels(j,le,ie,Q,nt.convert(rt),nt.convert(Je),0);const Ut=C!==null?Qe.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(V.FRAMEBUFFER,Ut);const Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await B3(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.deleteBuffer(mt),V.deleteSync(Nt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,le=0){const ie=Math.pow(2,-le),Q=Math.floor(R.image.width*ie),Le=Math.floor(R.image.height*ie),ze=j!==null?j.x:0,Ge=j!==null?j.y:0;st.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,ze,Ge,Q,Le),Ve.unbindTexture()};const so=V.createFramebuffer(),Pa=V.createFramebuffer();this.copyTextureToTexture=function(R,j,le=null,ie=null,Q=0,Le=null){Le===null&&(Q!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=Q,Q=0):Le=0);let ze,Ge,Xe,tt,rt,Je,mt,Ut,Nt;const Tt=R.isCompressedTexture?R.mipmaps[Le]:R.image;if(le!==null)ze=le.max.x-le.min.x,Ge=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,tt=le.min.x,rt=le.min.y,Je=le.isBox3?le.min.z:0;else{const _n=Math.pow(2,-Q);ze=Math.floor(Tt.width*_n),Ge=Math.floor(Tt.height*_n),R.isDataArrayTexture?Xe=Tt.depth:R.isData3DTexture?Xe=Math.floor(Tt.depth*_n):Xe=1,tt=0,rt=0,Je=0}ie!==null?(mt=ie.x,Ut=ie.y,Nt=ie.z):(mt=0,Ut=0,Nt=0);const Ht=nt.convert(j.format),et=nt.convert(j.type);let Yt;j.isData3DTexture?(st.setTexture3D(j,0),Yt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(st.setTexture2DArray(j,0),Yt=V.TEXTURE_2D_ARRAY):(st.setTexture2D(j,0),Yt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const At=V.getParameter(V.UNPACK_ROW_LENGTH),Mn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Fa=V.getParameter(V.UNPACK_SKIP_PIXELS),Kt=V.getParameter(V.UNPACK_SKIP_ROWS),Ji=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Je);const Qt=R.isDataArrayTexture||R.isData3DTexture,En=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const _n=Qe.get(R),Tn=Qe.get(j),Cn=Qe.get(_n.__renderTarget),Fi=Qe.get(Tn.__renderTarget);Ve.bindFramebuffer(V.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Ve.bindFramebuffer(V.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let $i=0;$i<Xe;$i++)Qt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qe.get(R).__webglTexture,Q,Je+$i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Qe.get(j).__webglTexture,Le,Nt+$i)),V.blitFramebuffer(tt,rt,ze,Ge,mt,Ut,ze,Ge,V.DEPTH_BUFFER_BIT,V.NEAREST);Ve.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Qe.has(R)){const _n=Qe.get(R),Tn=Qe.get(j);Ve.bindFramebuffer(V.READ_FRAMEBUFFER,so),Ve.bindFramebuffer(V.DRAW_FRAMEBUFFER,Pa);for(let Cn=0;Cn<Xe;Cn++)Qt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_n.__webglTexture,Q,Je+Cn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,_n.__webglTexture,Q),En?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tn.__webglTexture,Le,Nt+Cn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tn.__webglTexture,Le),Q!==0?V.blitFramebuffer(tt,rt,ze,Ge,mt,Ut,ze,Ge,V.COLOR_BUFFER_BIT,V.NEAREST):En?V.copyTexSubImage3D(Yt,Le,mt,Ut,Nt+Cn,tt,rt,ze,Ge):V.copyTexSubImage2D(Yt,Le,mt,Ut,tt,rt,ze,Ge);Ve.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else En?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Yt,Le,mt,Ut,Nt,ze,Ge,Xe,Ht,et,Tt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Yt,Le,mt,Ut,Nt,ze,Ge,Xe,Ht,Tt.data):V.texSubImage3D(Yt,Le,mt,Ut,Nt,ze,Ge,Xe,Ht,et,Tt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Le,mt,Ut,ze,Ge,Ht,et,Tt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Le,mt,Ut,Tt.width,Tt.height,Ht,Tt.data):V.texSubImage2D(V.TEXTURE_2D,Le,mt,Ut,ze,Ge,Ht,et,Tt);V.pixelStorei(V.UNPACK_ROW_LENGTH,At),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Fa),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ji),Le===0&&j.generateMipmaps&&V.generateMipmap(Yt),Ve.unbindTexture()},this.initRenderTarget=function(R){Qe.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),Ve.unbindTexture()},this.resetState=function(){Z=0,w=0,C=null,Ve.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}const hw=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pw=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),fv=a=>{const e=pw(a);return e.charAt(0).toUpperCase()+e.slice(1)},Oy=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),mw=a=>{for(const e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var xw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const gw=he.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...d},m)=>he.createElement("svg",{ref:m,...xw,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:Oy("lucide",o),...!c&&!mw(d)&&{"aria-hidden":"true"},...d},[...u.map(([p,x])=>he.createElement(p,x)),...Array.isArray(c)?c:[c]]));const In=(a,e)=>{const n=he.forwardRef(({className:r,...o},c)=>he.createElement(gw,{ref:c,iconNode:e,className:Oy(`lucide-${hw(fv(a))}`,`lucide-${a}`,r),...o}));return n.displayName=fv(a),n};const _w=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],vw=In("cloud-rain",_w);const yw=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],dv=In("cloud",yw);const Sw=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],bw=In("droplets",Sw);const Mw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ew=In("globe",Mw);const Tw=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Aw=In("log-out",Tw);const Rw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],hv=In("map-pin",Rw);const Cw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ww=In("plus",Cw);const Dw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Uw=In("refresh-cw",Dw);const Nw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Lw=In("search",Nw);const Ow=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],Pw=In("snowflake",Ow);const Fw=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],zw=In("square-pen",Fw);const Bw=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],pv=In("sun",Bw);const Iw=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],Hw=In("thumbs-up",Iw);const Vw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Gw=In("trash-2",Vw);const kw=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],mv=In("wind",kw);const Xw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ww=In("x",Xw),qw=()=>{const a=he.useRef(null),e=he.useRef(null),n=he.useRef(null),r=he.useRef([]),{user:o,logout:c,isAuthenticated:u}=y1(),d=Tv(),[m,p]=he.useState(null),[x,g]=he.useState(null),[v,b]=he.useState(!1),[M,E]=he.useState([]),[y,_]=he.useState([]),[U,D]=he.useState([]),[P,I]=he.useState(!0),[N,z]=he.useState(null),[Z,w]=he.useState(""),[C,G]=he.useState([]),[X,ne]=he.useState({cityName:"",lat:0,lon:0,temperature:25,description:"Clear sky",humidity:50,windSpeed:5});he.useEffect(()=>{pe()},[]),he.useEffect(()=>{if(Z){const W=M.filter(De=>De.name.toLowerCase().includes(Z.toLowerCase()));G(W)}else G(M)},[Z,M]);const pe=async()=>{I(!0);try{const W=await sr.get("/weather/countries");E(W.data.countries);const De=await sr.get("/weather");_(De.data.data),await fe(),console.log(`✅ Loaded ${W.data.totalCountries} countries with ${W.data.countries.reduce((Pe,ot)=>Pe+ot.cityCount,0)} cities`)}catch(W){console.error("Error fetching data:",W),alert("Failed to load weather data. Please try again.")}finally{I(!1)}},fe=async()=>{try{const W=await sr.get("/user-weather");D(W.data)}catch(W){console.error("Error fetching user weather:",W)}},B=async W=>{p(W),g(null),b(!1)},K=W=>{g(W)},q=async W=>{try{await sr.post(`/user-weather/vote/${W}`),fe()}catch(De){console.error("Error voting:",De)}},be=async()=>{if(!u){d("/login");return}try{await sr.post("/user-weather",X),b(!1),ne({cityName:"",lat:0,lon:0,temperature:25,description:"Clear sky",humidity:50,windSpeed:5}),fe(),alert("Weather report added successfully!")}catch(W){console.error("Error adding weather:",W),alert(W.response?.data?.message||"Failed to add weather")}},Te=async()=>{try{await sr.put(`/user-weather/${N.id}`,X),z(null),b(!1),fe(),alert("Weather report updated successfully!")}catch(W){console.error("Error updating weather:",W),alert(W.response?.data?.message||"Failed to update weather")}},F=async W=>{if(window.confirm("Are you sure you want to delete this weather report?"))try{await sr.delete(`/user-weather/${W}`),fe(),alert("Weather report deleted successfully!")}catch(De){console.error("Error deleting weather:",De),alert(De.response?.data?.message||"Failed to delete weather")}},ae=W=>{z(W),ne({cityName:W.cityName,lat:W.lat,lon:W.lon,temperature:W.temperature,description:W.description,humidity:W.humidity,windSpeed:W.windSpeed}),b(!0)},Ae=()=>{c(),d("/login")},Ne=async()=>{if(window.confirm("This will refresh weather data for all locations. It may take a few minutes. Continue?"))try{I(!0),await sr.post("/weather/refresh"),await pe(),alert("Weather data refreshed successfully!")}catch(W){console.error("Error refreshing weather:",W),alert("Failed to refresh weather data")}};he.useEffect(()=>{if(!a.current||M.length===0)return;try{console.log("Globe init:",{mount:a.current,width:a.current?.clientWidth,height:a.current?.clientHeight,countries:M.length})}catch(O){console.warn("Failed to log mountRef info",O)}const W=new uT;W.background=new wt(1296),e.current=W;const De=new fi(45,a.current.clientWidth/a.current.clientHeight,.1,1e3);De.position.z=2.5;const Pe=new dw({antialias:!0,alpha:!0});Pe.setSize(a.current.clientWidth,a.current.clientHeight),Pe.setPixelRatio(window.devicePixelRatio),a.current.appendChild(Pe.domElement);const ot=()=>{const O=document.createElement("canvas");O.width=2048,O.height=1024;const xe=O.getContext("2d"),Me=xe.createLinearGradient(0,0,0,O.height);Me.addColorStop(0,"#1a3a52"),Me.addColorStop(.5,"#0d2137"),Me.addColorStop(1,"#1a3a52"),xe.fillStyle=Me,xe.fillRect(0,0,O.width,O.height);for(let Ce=0;Ce<5e3;Ce++){const Ee=Math.random()*O.width,_e=Math.random()*O.height,Fe=Math.random()*2;xe.fillStyle=`rgba(100, 150, 200, ${Math.random()*.3})`,xe.fillRect(Ee,_e,Fe,Fe)}xe.fillStyle="#2a5c1e",xe.beginPath(),xe.ellipse(2200,1100,350,450,.3,0,Math.PI*2),xe.fill(),xe.beginPath(),xe.ellipse(2100,700,200,150,0,0,Math.PI*2),xe.fill(),xe.beginPath(),xe.ellipse(2800,800,600,400,-.2,0,Math.PI*2),xe.fill(),xe.beginPath(),xe.ellipse(800,700,400,380,.2,0,Math.PI*2),xe.fill(),xe.beginPath(),xe.ellipse(1100,1300,250,400,.1,0,Math.PI*2),xe.fill(),xe.beginPath(),xe.ellipse(3200,1400,280,220,0,0,Math.PI*2),xe.fill(),xe.fillStyle="#1f4916";for(let Ce=0;Ce<3e3;Ce++){const Ee=Math.random()*O.width,_e=Math.random()*O.height,Fe=Math.random()*3;xe.fillRect(Ee,_e,Fe,Fe)}return new P_(O)},nn=()=>{const O=document.createElement("canvas");O.width=1024,O.height=512;const xe=O.getContext("2d");xe.fillStyle="#000000",xe.fillRect(0,0,O.width,O.height);for(let Me=0;Me<1e4;Me++){const Ce=Math.random()*O.width,Ee=Math.random()*O.height,_e=Math.random()*3,Fe=Math.random();xe.fillStyle=`rgba(255, 255, 255, ${Fe*.5})`,xe.beginPath(),xe.arc(Ce,Ee,_e,0,Math.PI*2),xe.fill()}return new P_(O)},ct=new ks(1,64,64),Et=new xT({map:ot(),bumpMap:nn(),bumpScale:.02,specular:new wt(6710886),shininess:10}),V=new di(ct,Et);W.add(V),n.current=V;const ut=new ks(1.01,64,64),pt=new Yi({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,blending:Ph,side:Wn,transparent:!0}),Ft=new di(ut,pt);W.add(Ft);const Ve=new Ti,Bt=new Ey({color:16777215,size:.7,transparent:!0}),Qe=[];for(let O=0;O<1e4;O++){const xe=(Math.random()-.5)*2e3,Me=(Math.random()-.5)*2e3,Ce=-Math.random()*2e3;Qe.push(xe,Me,Ce)}Ve.setAttribute("position",new ti(Qe,3));const st=new mT(Ve,Bt);W.add(st);const L=new MT(16777215,.6);W.add(L);const T=new bT(16777215,.8);T.position.set(5,3,5),W.add(T);const J=new yT(16777215,.5);J.position.set(-5,3,5),W.add(J);const ve=[],Re=[],de=["#FF6B6B","#4ECDC4","#FFE66D","#95E1D3","#F38181","#AA96DA","#FCBAD3","#A8E6CF","#FFD3B6","#FFAAA5"];M.forEach((O,xe)=>{if(!isFinite(O.lat)||!isFinite(O.lon)){console.warn(`Skipping country ${O.name} due to invalid coordinates:`,O);return}const Me=new sl,Ce=de[xe%de.length],Ee=new Kp(.008,.008,.12,8),_e=new ll({color:Ce}),Fe=new di(Ee,_e);Fe.position.y=.06,Me.add(Fe);const at=new ks(.025,16,16),It=new ll({color:Ce}),St=new di(at,It);St.position.y=.135,Me.add(St);const bn=new ks(.035,16,16),Hn=new ll({color:Ce,transparent:!0,opacity:.3}),gr=new di(bn,Hn);gr.position.y=.135,Me.add(gr);const Ki=(90-O.lat)*(Math.PI/180),Na=(O.lon+180)*(Math.PI/180),Vn=1.02,Pi=-(Vn*Math.sin(Ki)*Math.cos(Na)),La=Vn*Math.cos(Ki),Oa=Vn*Math.sin(Ki)*Math.sin(Na);Me.position.set(Pi,La,Oa);const Gn=new se(Pi,La,Oa).normalize();Me.lookAt(Gn.multiplyScalar(2)),Me.userData={country:O.name,color:Ce},W.add(Me),ve.push(Me),Re.push(St,Fe)}),r.current=ve;let je=!1,Oe={x:0,y:0},qe={x:0,y:0};const Ye=O=>{je=!0,Oe={x:O.clientX,y:O.clientY},qe={x:0,y:0}},we=O=>{if(je){const xe=O.clientX-Oe.x,Me=O.clientY-Oe.y;qe.x=Me*.005,qe.y=xe*.005,V.rotation.y+=qe.y,V.rotation.x+=qe.x,V.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,V.rotation.x)),ve.forEach(Ce=>{Ce.rotation.y+=qe.y,Ce.rotation.x+=qe.x}),Oe={x:O.clientX,y:O.clientY}}},Ue=()=>{je=!1},Ke=O=>{if(Math.abs(O.clientX-Oe.x)>5||Math.abs(O.clientY-Oe.y)>5)return;const xe=Pe.domElement.getBoundingClientRect(),Me=new Dt((O.clientX-xe.left)/xe.width*2-1,-((O.clientY-xe.top)/xe.height)*2+1),Ce=new TT;Ce.setFromCamera(Me,De);const Ee=Ce.intersectObjects(Re);if(Ee.length>0){const _e=ve.find(Fe=>Fe.children.some(at=>at===Ee[0].object));_e&&B(_e.userData.country)}};Pe.domElement.addEventListener("mousedown",Ye),Pe.domElement.addEventListener("mousemove",we),Pe.domElement.addEventListener("mouseup",Ue),Pe.domElement.addEventListener("click",Ke);let ke;const He=()=>{ke=requestAnimationFrame(He),je||(V.rotation.y+=5e-4,ve.forEach(O=>O.rotation.y+=5e-4),qe.x*=.95,qe.y*=.95),ve.forEach((O,xe)=>{const Me=O.children[2];if(Me){const Ce=Date.now()*.001;Me.material.opacity=.3+Math.sin(Ce+xe)*.2}}),Pe.render(W,De)};He();const nt=()=>{if(!a.current)return;const O=a.current.clientWidth,xe=a.current.clientHeight;De.aspect=O/xe,De.updateProjectionMatrix(),Pe.setSize(O,xe)};return window.addEventListener("resize",nt),()=>{window.removeEventListener("resize",nt),Pe.domElement.removeEventListener("mousedown",Ye),Pe.domElement.removeEventListener("mousemove",we),Pe.domElement.removeEventListener("mouseup",Ue),Pe.domElement.removeEventListener("click",Ke),cancelAnimationFrame(ke),a.current&&Pe.domElement&&a.current.removeChild(Pe.domElement),ct.dispose(),Et.dispose(),ut.dispose(),pt.dispose(),Ve.dispose(),Bt.dispose(),Pe.dispose()}},[M]);const Be=W=>{if(!W)return pv;const De=W.toLowerCase();return De.includes("rain")||De.includes("drizzle")?vw:De.includes("cloud")||De.includes("overcast")?dv:De.includes("snow")||De.includes("sleet")?Pw:De.includes("wind")?mv:De.includes("clear")||De.includes("sunny")?pv:dv},re=y.find(W=>W.country===m),me=U.filter(W=>re?.cities.some(De=>De.cityName===W.cityName||Math.abs(De.lat-W.lat)<.1&&Math.abs(De.lon-W.lon)<.1));return P?te.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-900",children:te.jsxs("div",{className:"text-center",children:[te.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"}),te.jsx("p",{className:"text-white text-xl",children:"Loading weather data..."}),te.jsx("p",{className:"text-gray-400 text-sm mt-2",children:"This may take a moment"})]})}):te.jsxs("div",{className:"flex h-screen bg-gray-900 text-white",children:[te.jsxs("div",{className:"flex-1 relative",children:[te.jsx("div",{ref:a,className:"w-full h-full"}),te.jsxs("div",{className:"absolute top-4 left-4 bg-gray-800 bg-opacity-95 p-4 rounded-lg max-w-xs shadow-xl",children:[te.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[te.jsx(Ew,{className:"w-6 h-6 text-blue-400"}),te.jsx("h2",{className:"text-lg font-bold",children:"Weather Globe"})]}),u?te.jsxs("div",{className:"space-y-2",children:[te.jsx("p",{className:"text-sm text-gray-300",children:te.jsx("span",{className:"font-semibold",children:o?.username})}),te.jsxs("div",{className:"flex gap-2",children:[te.jsxs("button",{onClick:Ae,className:"flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded transition text-sm",children:[te.jsx(Aw,{className:"w-4 h-4"}),"Logout"]}),te.jsx("button",{onClick:Ne,className:"flex items-center justify-center px-3 py-2 bg-green-600 hover:bg-green-700 rounded transition text-sm",title:"Refresh weather data",children:te.jsx(Uw,{className:"w-4 h-4"})})]})]}):te.jsxs("div",{className:"space-y-2",children:[te.jsx("button",{onClick:()=>d("/login"),className:"w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded transition text-sm",children:"Login"}),te.jsx("button",{onClick:()=>d("/register"),className:"w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded transition text-sm",children:"Register"})]})]}),te.jsxs("div",{className:"absolute bottom-4 left-4 bg-gray-800 bg-opacity-95 p-3 rounded-lg max-w-xs max-h-96 overflow-y-auto shadow-xl",children:[te.jsxs("h3",{className:"text-sm font-bold mb-2 flex items-center gap-2",children:[te.jsx(hv,{className:"w-4 h-4"}),"Countries (",M.length,")"]}),te.jsxs("div",{className:"mb-2 relative",children:[te.jsx(Lw,{className:"absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"}),te.jsx("input",{type:"text",placeholder:"Search country...",value:Z,onChange:W=>w(W.target.value),className:"w-full pl-8 pr-2 py-1 bg-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),te.jsx("div",{className:"space-y-1 max-h-64 overflow-y-auto",children:C.slice(0,50).map((W,De)=>te.jsxs("button",{onClick:()=>B(W.name),className:`w-full text-left px-2 py-1 rounded text-xs hover:bg-gray-700 transition ${m===W.name?"bg-blue-600":""}`,children:[W.name," (",W.cityCount," cities)"]},De))})]}),te.jsxs("div",{className:"absolute top-4 right-4 bg-gray-800 bg-opacity-95 p-3 rounded-lg max-w-xs shadow-xl",children:[te.jsx("h3",{className:"text-sm font-bold mb-2",children:"How to use"}),te.jsxs("ul",{className:"text-xs text-gray-300 space-y-1",children:[te.jsx("li",{children:"🖱️ Drag to rotate the globe"}),te.jsx("li",{children:"📍 Click markers to view countries"}),te.jsx("li",{children:"🏙️ Select cities to see weather"}),te.jsx("li",{children:"➕ Add your weather observations"}),te.jsx("li",{children:"👍 Vote on weather reports"})]})]})]}),m&&te.jsx("div",{className:"w-96 bg-gray-800 border-l border-gray-700 overflow-y-auto",children:te.jsxs("div",{className:"p-6",children:[te.jsxs("div",{className:"flex justify-between items-center mb-4",children:[te.jsx("h2",{className:"text-2xl font-bold",children:m}),te.jsx("button",{onClick:()=>{p(null),g(null),b(!1)},className:"p-2 hover:bg-gray-700 rounded-lg transition",children:te.jsx(Ww,{className:"w-5 h-5"})})]}),!x&&re&&te.jsxs("div",{className:"space-y-3",children:[te.jsxs("h3",{className:"font-bold text-lg",children:["Cities (",re.cities.length,")"]}),te.jsx("div",{className:"grid gap-2",children:re.cities.map(W=>{const De=Be(W.description);return te.jsx("button",{onClick:()=>K(W),className:"p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition text-left",children:te.jsxs("div",{className:"flex items-center justify-between",children:[te.jsxs("div",{className:"flex items-center gap-2",children:[te.jsx(De,{className:"w-6 h-6 text-yellow-400"}),te.jsxs("div",{children:[te.jsx("div",{className:"font-semibold",children:W.cityName}),te.jsx("div",{className:"text-xs text-gray-400 capitalize",children:W.description||"No data"})]})]}),te.jsx("div",{className:"text-right",children:te.jsx("div",{className:"text-2xl font-bold",children:W.temperature?`${Math.round(W.temperature)}°C`:"N/A"})})]})},W.id)})})]}),x&&te.jsxs("div",{className:"space-y-4",children:[te.jsx("button",{onClick:()=>g(null),className:"flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mb-2",children:"← Back to cities"}),te.jsxs("div",{className:"p-4 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg border border-blue-700",children:[te.jsxs("div",{className:"flex items-center justify-between mb-3",children:[te.jsxs("div",{className:"flex items-center gap-3",children:[kb.createElement(Be(x.description),{className:"w-10 h-10 text-yellow-400"}),te.jsxs("div",{children:[te.jsx("h3",{className:"text-xl font-bold",children:x.cityName}),te.jsx("p",{className:"text-sm text-gray-300 capitalize",children:x.description||"No description"})]})]}),te.jsx("div",{className:"text-right",children:te.jsx("div",{className:"text-4xl font-bold",children:x.temperature?`${Math.round(x.temperature)}°`:"N/A"})})]}),te.jsxs("div",{className:"grid grid-cols-3 gap-3 text-sm",children:[te.jsxs("div",{className:"bg-blue-800 bg-opacity-50 p-2 rounded",children:[te.jsxs("div",{className:"flex items-center gap-1 text-gray-300 mb-1",children:[te.jsx(bw,{className:"w-4 h-4"}),te.jsx("span",{className:"text-xs",children:"Humidity"})]}),te.jsxs("div",{className:"font-semibold",children:[x.humidity||0,"%"]})]}),te.jsxs("div",{className:"bg-blue-800 bg-opacity-50 p-2 rounded",children:[te.jsxs("div",{className:"flex items-center gap-1 text-gray-300 mb-1",children:[te.jsx(mv,{className:"w-4 h-4"}),te.jsx("span",{className:"text-xs",children:"Wind"})]}),te.jsxs("div",{className:"font-semibold",children:[x.windSpeed||0," km/h"]})]}),te.jsxs("div",{className:"bg-blue-800 bg-opacity-50 p-2 rounded",children:[te.jsxs("div",{className:"flex items-center gap-1 text-gray-300 mb-1",children:[te.jsx(hv,{className:"w-4 h-4"}),te.jsx("span",{className:"text-xs",children:"Location"})]}),te.jsxs("div",{className:"font-semibold text-xs",children:[x.lat.toFixed(2),","," ",x.lon.toFixed(2)]})]})]}),te.jsxs("div",{className:"mt-3 text-xs text-gray-400",children:["Last updated:"," ",new Date(x.updatedAt).toLocaleString()]})]}),u&&!v&&te.jsxs("button",{onClick:()=>{ne({cityName:x.cityName,lat:x.lat,lon:x.lon,temperature:25,description:"Clear sky",humidity:50,windSpeed:5}),b(!0)},className:"w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center gap-2 transition",children:[te.jsx(ww,{className:"w-5 h-5"}),"Add Weather Report for ",x.cityName]}),v&&te.jsxs("div",{className:"p-4 bg-gray-700 rounded-lg",children:[te.jsx("h3",{className:"font-bold mb-3",children:N?"Edit Weather Report":"Add Weather Report"}),te.jsxs("div",{className:"space-y-3",children:[te.jsxs("div",{children:[te.jsx("label",{className:"block text-sm mb-1",children:"City"}),te.jsx("input",{type:"text",value:X.cityName,className:"w-full p-2 bg-gray-600 rounded text-white",disabled:!0})]}),te.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[te.jsxs("div",{children:[te.jsx("label",{className:"block text-sm mb-1",children:"Latitude"}),te.jsx("input",{type:"number",step:"0.01",value:X.lat,onChange:W=>ne({...X,lat:parseFloat(W.target.value)}),className:"w-full p-2 bg-gray-600 rounded text-white"})]}),te.jsxs("div",{children:[te.jsx("label",{className:"block text-sm mb-1",children:"Longitude"}),te.jsx("input",{type:"number",step:"0.01",value:X.lon,onChange:W=>ne({...X,lon:parseFloat(W.target.value)}),className:"w-full p-2 bg-gray-600 rounded text-white"})]})]}),te.jsxs("div",{children:[te.jsx("label",{className:"block text-sm mb-1",children:"Description"}),te.jsxs("select",{value:X.description,onChange:W=>ne({...X,description:W.target.value}),className:"w-full p-2 bg-gray-600 rounded text-white",children:[te.jsx("option",{value:"Clear sky",children:"Clear sky"}),te.jsx("option",{value:"Few clouds",children:"Few clouds"}),te.jsx("option",{value:"Scattered clouds",children:"Scattered clouds"}),te.jsx("option",{value:"Broken clouds",children:"Broken clouds"}),te.jsx("option",{value:"Overcast clouds",children:"Overcast clouds"}),te.jsx("option",{value:"Light rain",children:"Light rain"}),te.jsx("option",{value:"Moderate rain",children:"Moderate rain"}),te.jsx("option",{value:"Heavy rain",children:"Heavy rain"}),te.jsx("option",{value:"Snow",children:"Snow"}),te.jsx("option",{value:"Thunderstorm",children:"Thunderstorm"})]})]}),te.jsxs("div",{children:[te.jsx("label",{className:"block text-sm mb-1",children:"Temperature (°C)"}),te.jsx("input",{type:"number",value:X.temperature,onChange:W=>ne({...X,temperature:parseFloat(W.target.value)}),className:"w-full p-2 bg-gray-600 rounded text-white"})]}),te.jsxs("div",{children:[te.jsx("label",{className:"block text-sm mb-1",children:"Humidity (%)"}),te.jsx("input",{type:"number",value:X.humidity,onChange:W=>ne({...X,humidity:parseInt(W.target.value)}),className:"w-full p-2 bg-gray-600 rounded text-white"})]}),te.jsxs("div",{children:[te.jsx("label",{className:"block text-sm mb-1",children:"Wind Speed (km/h)"}),te.jsx("input",{type:"number",step:"0.1",value:X.windSpeed,onChange:W=>ne({...X,windSpeed:parseFloat(W.target.value)}),className:"w-full p-2 bg-gray-600 rounded text-white"})]}),te.jsxs("div",{className:"flex gap-2",children:[te.jsx("button",{onClick:N?Te:be,className:"flex-1 py-2 bg-green-600 hover:bg-green-700 rounded transition",children:N?"Update":"Submit"}),te.jsx("button",{onClick:()=>{b(!1),z(null)},className:"flex-1 py-2 bg-gray-600 hover:bg-gray-500 rounded transition",children:"Cancel"})]})]})]}),te.jsxs("div",{className:"space-y-3",children:[te.jsxs("h3",{className:"font-bold text-lg flex items-center justify-between",children:[te.jsx("span",{children:"User Reports"}),te.jsxs("span",{className:"text-sm font-normal text-gray-400",children:["(",me.filter(W=>W.cityName===x.cityName).length,")"]})]}),me.filter(W=>W.cityName===x.cityName).length===0?te.jsx("p",{className:"text-gray-400 text-sm",children:"No user reports yet. Be the first to add one!"}):me.filter(W=>W.cityName===x.cityName).sort((W,De)=>De.votes-W.votes).map(W=>{const De=Be(W.description),Pe=o?.id===W.userId;return te.jsxs("div",{className:"p-4 bg-gray-700 rounded-lg",children:[te.jsxs("div",{className:"flex items-start justify-between mb-3",children:[te.jsxs("div",{className:"flex items-center gap-3",children:[te.jsx(De,{className:"w-8 h-8 text-yellow-400"}),te.jsxs("div",{children:[te.jsx("div",{className:"font-semibold capitalize",children:W.description}),te.jsxs("div",{className:"text-2xl font-bold",children:[Math.round(W.temperature),"°C"]}),te.jsxs("div",{className:"text-xs text-gray-400",children:["by ",W.User?.username||"Unknown"]})]})]}),te.jsxs("button",{onClick:()=>q(W.id),className:"flex flex-col items-center gap-1 p-2 hover:bg-gray-600 rounded transition",children:[te.jsx(Hw,{className:"w-5 h-5 text-blue-400"}),te.jsx("span",{className:"text-sm font-bold",children:W.votes})]})]}),te.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm mb-3",children:[te.jsxs("div",{children:[te.jsx("span",{className:"text-gray-400",children:"Humidity:"})," ",W.humidity,"%"]}),te.jsxs("div",{children:[te.jsx("span",{className:"text-gray-400",children:"Wind:"})," ",W.windSpeed," km/h"]})]}),Pe&&te.jsxs("div",{className:"flex gap-2 pt-2 border-t border-gray-600",children:[te.jsxs("button",{onClick:()=>ae(W),className:"flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 rounded transition text-sm",children:[te.jsx(zw,{className:"w-4 h-4"}),"Edit"]}),te.jsxs("button",{onClick:()=>F(W.id),className:"flex-1 flex items-center justify-center gap-2 py-2 bg-red-600 hover:bg-red-700 rounded transition text-sm",children:[te.jsx(Gw,{className:"w-4 h-4"}),"Delete"]})]})]},W.id)})]})]})]})})]})};function jw(){return te.jsx(te.Fragment,{children:te.jsx(c1,{children:te.jsx(HM,{children:te.jsx(Cv,{path:"/",element:te.jsx(qw,{})})})})})}Kb.createRoot(document.getElementById("root")).render(te.jsx(he.StrictMode,{children:te.jsx(jw,{})}));
