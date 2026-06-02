(function(lr){typeof define=="function"&&define.amd?define(lr):lr()})(function(){"use strict";function lr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ai={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pn=Symbol.for("react.element"),mc=Symbol.for("react.portal"),hc=Symbol.for("react.fragment"),gc=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),yc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),xc=Symbol.for("react.forward_ref"),kc=Symbol.for("react.suspense"),Sc=Symbol.for("react.memo"),Ec=Symbol.for("react.lazy"),Ui=Symbol.iterator;function Cc(e){return e===null||typeof e!="object"?null:(e=Ui&&e[Ui]||e["@@iterator"],typeof e=="function"?e:null)}var Bi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vi=Object.assign,Hi={};function Ft(e,t,n){this.props=e,this.context=t,this.refs=Hi,this.updater=n||Bi}Ft.prototype.isReactComponent={},Ft.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wi(){}Wi.prototype=Ft.prototype;function El(e,t,n){this.props=e,this.context=t,this.refs=Hi,this.updater=n||Bi}var Cl=El.prototype=new Wi;Cl.constructor=El,Vi(Cl,Ft.prototype),Cl.isPureReactComponent=!0;var bi=Array.isArray,Qi=Object.prototype.hasOwnProperty,_l={current:null},Ki={key:!0,ref:!0,__self:!0,__source:!0};function Yi(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Qi.call(t,r)&&!Ki.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:pn,type:e,key:o,ref:i,props:l,_owner:_l.current}}function _c(e,t){return{$$typeof:pn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nl(e){return typeof e=="object"&&e!==null&&e.$$typeof===pn}function Nc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gi=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nc(""+e.key):t.toString(36)}function or(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case pn:case mc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Tl(i,0):r,bi(l)?(n="",e!=null&&(n=e.replace(Gi,"$&/")+"/"),or(l,t,n,"",function(c){return c})):l!=null&&(Nl(l)&&(l=_c(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Gi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",bi(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Tl(o,u);i+=or(o,t,n,s,l)}else if(s=Cc(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Tl(o,u++),i+=or(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ir(e,t,n){if(e==null)return e;var r=[],l=0;return or(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Tc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},ur={transition:null},Pc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:ur,ReactCurrentOwner:_l};function Xi(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:ir,forEach:function(e,t,n){ir(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ir(e,function(){t++}),t},toArray:function(e){return ir(e,function(t){return t})||[]},only:function(e){if(!Nl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},I.Component=Ft,I.Fragment=hc,I.Profiler=vc,I.PureComponent=El,I.StrictMode=gc,I.Suspense=kc,I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pc,I.act=Xi,I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vi({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=_l.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Qi.call(t,s)&&!Ki.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:pn,type:e.type,key:l,ref:o,props:r,_owner:i}},I.createContext=function(e){return e={$$typeof:wc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yc,_context:e},e.Consumer=e},I.createElement=Yi,I.createFactory=function(e){var t=Yi.bind(null,e);return t.type=e,t},I.createRef=function(){return{current:null}},I.forwardRef=function(e){return{$$typeof:xc,render:e}},I.isValidElement=Nl,I.lazy=function(e){return{$$typeof:Ec,_payload:{_status:-1,_result:e},_init:Tc}},I.memo=function(e,t){return{$$typeof:Sc,type:e,compare:t===void 0?null:t}},I.startTransition=function(e){var t=ur.transition;ur.transition={};try{e()}finally{ur.transition=t}},I.unstable_act=Xi,I.useCallback=function(e,t){return ue.current.useCallback(e,t)},I.useContext=function(e){return ue.current.useContext(e)},I.useDebugValue=function(){},I.useDeferredValue=function(e){return ue.current.useDeferredValue(e)},I.useEffect=function(e,t){return ue.current.useEffect(e,t)},I.useId=function(){return ue.current.useId()},I.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)},I.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)},I.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)},I.useMemo=function(e,t){return ue.current.useMemo(e,t)},I.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)},I.useRef=function(e){return ue.current.useRef(e)},I.useState=function(e){return ue.current.useState(e)},I.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)},I.useTransition=function(){return ue.current.useTransition()},I.version="18.3.1",Ai.exports=I;var O=Ai.exports;const zc=lr(O);var Pl={},Ji={exports:{}},ge={},Zi={exports:{}},qi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var z=C.length;C.push(P);e:for(;0<z;){var M=z-1>>>1,V=C[M];if(0<l(V,P))C[M]=P,C[z]=V,z=M;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],z=C.pop();if(z!==P){C[0]=z;e:for(var M=0,V=C.length,ze=V>>>1;M<ze;){var Dt=2*(M+1)-1,$i=C[Dt],Mt=Dt+1,Sl=C[Mt];if(0>l($i,z))Mt<V&&0>l(Sl,$i)?(C[M]=Sl,C[Mt]=z,M=Mt):(C[M]=$i,C[Dt]=z,M=Dt);else if(Mt<V&&0>l(Sl,z))C[M]=Sl,C[Mt]=z,M=Mt;else break e}}return P}function l(C,P){var z=C.sortIndex-P.sortIndex;return z!==0?z:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var s=[],c=[],h=1,m=null,p=3,y=!1,x=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=C)r(c),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(c)}}function g(C){if(k=!1,f(C),!x)if(n(s)!==null)x=!0,yt(w);else{var P=n(c);P!==null&&rr(g,P.startTime-C)}}function w(C,P){x=!1,k&&(k=!1,d(T),T=-1),y=!0;var z=p;try{for(f(P),m=n(s);m!==null&&(!(m.expirationTime>P)||C&&!ie());){var M=m.callback;if(typeof M=="function"){m.callback=null,p=m.priorityLevel;var V=M(m.expirationTime<=P);P=e.unstable_now(),typeof V=="function"?m.callback=V:m===n(s)&&r(s),f(P)}else r(s);m=n(s)}if(m!==null)var ze=!0;else{var Dt=n(c);Dt!==null&&rr(g,Dt.startTime-P),ze=!1}return ze}finally{m=null,p=z,y=!1}}var _=!1,N=null,T=-1,F=5,j=-1;function ie(){return!(e.unstable_now()-j<F)}function Pe(){if(N!==null){var C=e.unstable_now();j=C;var P=!0;try{P=N(!0,C)}finally{P?Ot():(_=!1,N=null)}}else _=!1}var Ot;if(typeof a=="function")Ot=function(){a(Pe)};else if(typeof MessageChannel<"u"){var kl=new MessageChannel,Rt=kl.port2;kl.port1.onmessage=Pe,Ot=function(){Rt.postMessage(null)}}else Ot=function(){L(Pe,0)};function yt(C){N=C,_||(_=!0,Ot())}function rr(C,P){T=L(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,yt(w))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var z=p;p=P;try{return C()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=p;p=C;try{return P()}finally{p=z}},e.unstable_scheduleCallback=function(C,P,z){var M=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?M+z:M):z=M,C){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=z+V,C={id:h++,callback:P,priorityLevel:C,startTime:z,expirationTime:V,sortIndex:-1},z>M?(C.sortIndex=z,t(c,C),n(s)===null&&C===n(c)&&(k?(d(T),T=-1):k=!0,rr(g,z-M))):(C.sortIndex=V,t(s,C),x||y||(x=!0,yt(w))),C},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(C){var P=p;return function(){var z=p;p=P;try{return C.apply(this,arguments)}finally{p=z}}}})(qi),Zi.exports=qi;var Lc=Zi.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=O,ve=Lc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eu=new Set,mn={};function wt(e,t){$t(e,t),$t(e+"Capture",t)}function $t(e,t){for(mn[e]=t,e=0;e<t.length;e++)eu.add(t[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function Oc(e){return zl.call(nu,e)?!0:zl.call(tu,e)?!1:Ic.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function Rc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dc(e,t,n,r){if(t===null||typeof t>"u"||Rc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new se(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new se(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new se(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new se(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new se(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new se(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ll=/[\-:]([a-z])/g;function jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ll,jl);q[t]=new se(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ll,jl);q[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ll,jl);q[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Il(e,t,n,r){var l=q.hasOwnProperty(t)?q[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dc(t,n,l,r)&&(n=null),r||l===null?Oc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var He=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),At=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),ru=Symbol.for("react.provider"),lu=Symbol.for("react.context"),Dl=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),$l=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),iu=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Al;function gn(e){if(Al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Ul=!1;function Bl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=u);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gn(e):""}function Mc(e){switch(e.tag){case 5:return gn(e.type);case 16:return gn("Lazy");case 13:return gn("Suspense");case 19:return gn("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function Vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case At:return"Portal";case Rl:return"Profiler";case Ol:return"StrictMode";case Ml:return"Suspense";case Fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case ru:return(e._context.displayName||"Context")+".Provider";case Dl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $l:return t=e.displayName||null,t!==null?t:Vl(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Vl(e(t))}catch{}}return null}function Fc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vl(t);case 8:return t===Ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $c(e){var t=uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=$c(e))}function su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cu(e,t){t=t.checked,t!=null&&Il(e,"checked",t,!1)}function Wl(e,t){cu(e,t);var n=qe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,qe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||cr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vn=Array.isArray;function Bt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qe(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function du(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(vn(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qe(n)}}function pu(e,t){var n=qe(t.value),r=qe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){Ac.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function yu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Uc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(Uc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,Vt=null,Ht=null;function wu(e){if(e=Bn(e)){if(typeof Zl!="function")throw Error(v(280));var t=e.stateNode;t&&(t=Rr(t),Zl(e.stateNode,e.type,t))}}function xu(e){Vt?Ht?Ht.push(e):Ht=[e]:Vt=e}function ku(){if(Vt){var e=Vt,t=Ht;if(Ht=Vt=null,wu(e),t)for(e=0;e<t.length;e++)wu(t[e])}}function Su(e,t){return e(t)}function Eu(){}var ql=!1;function Cu(e,t,n){if(ql)return e(t,n);ql=!0;try{return Su(e,t,n)}finally{ql=!1,(Vt!==null||Ht!==null)&&(Eu(),ku())}}function xn(e,t){var n=e.stateNode;if(n===null)return null;var r=Rr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var eo=!1;if(Ve)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){eo=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{eo=!1}function Bc(e,t,n,r,l,o,i,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Sn=!1,dr=null,pr=!1,to=null,Vc={onError:function(e){Sn=!0,dr=e}};function Hc(e,t,n,r,l,o,i,u,s){Sn=!1,dr=null,Bc.apply(Vc,arguments)}function Wc(e,t,n,r,l,o,i,u,s){if(Hc.apply(this,arguments),Sn){if(Sn){var c=dr;Sn=!1,dr=null}else throw Error(v(198));pr||(pr=!0,to=c)}}function xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nu(e){if(xt(e)!==e)throw Error(v(188))}function bc(e){var t=e.alternate;if(!t){if(t=xt(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Nu(l),e;if(o===r)return Nu(l),t;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Tu(e){return e=bc(e),e!==null?Pu(e):null}function Pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pu(e);if(t!==null)return t;e=e.sibling}return null}var zu=ve.unstable_scheduleCallback,Lu=ve.unstable_cancelCallback,Qc=ve.unstable_shouldYield,Kc=ve.unstable_requestPaint,K=ve.unstable_now,Yc=ve.unstable_getCurrentPriorityLevel,no=ve.unstable_ImmediatePriority,ju=ve.unstable_UserBlockingPriority,mr=ve.unstable_NormalPriority,Gc=ve.unstable_LowPriority,Iu=ve.unstable_IdlePriority,hr=null,Fe=null;function Xc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(hr,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:qc,Jc=Math.log,Zc=Math.LN2;function qc(e){return e>>>=0,e===0?32:31-(Jc(e)/Zc|0)|0}var gr=64,vr=4194304;function En(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=En(u):(o&=i,o!==0&&(r=En(o)))}else i=n&~l,i!==0?r=En(i):o!==0&&(r=En(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),l=1<<n,r|=e[n],t&=~l;return r}function ef(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Le(o),u=1<<i,s=l[i];s===-1?(!(u&n)||u&r)&&(l[i]=ef(u,t)):s<=t&&(e.expiredLanes|=u),o&=~u}}function ro(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ou(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function lo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function nf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Le(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function oo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Du,io,Mu,Fu,$u,uo=!1,wr=[],et=null,tt=null,nt=null,_n=new Map,Nn=new Map,rt=[],rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":et=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":nt=null;break;case"pointerover":case"pointerout":_n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(t.pointerId)}}function Tn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Bn(t),t!==null&&io(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lf(e,t,n,r,l){switch(t){case"focusin":return et=Tn(et,e,t,n,r,l),!0;case"dragenter":return tt=Tn(tt,e,t,n,r,l),!0;case"mouseover":return nt=Tn(nt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return _n.set(o,Tn(_n.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Nn.set(o,Tn(Nn.get(o)||null,e,t,n,r,l)),!0}return!1}function Uu(e){var t=kt(e.target);if(t!==null){var n=xt(t);if(n!==null){if(t=n.tag,t===13){if(t=_u(n),t!==null){e.blockedOn=t,$u(e.priority,function(){Mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ao(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xl=r,n.target.dispatchEvent(r),Xl=null}else return t=Bn(n),t!==null&&io(t),e.blockedOn=n,!1;t.shift()}return!0}function Bu(e,t,n){xr(e)&&n.delete(t)}function of(){uo=!1,et!==null&&xr(et)&&(et=null),tt!==null&&xr(tt)&&(tt=null),nt!==null&&xr(nt)&&(nt=null),_n.forEach(Bu),Nn.forEach(Bu)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,uo||(uo=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,of)))}function zn(e){function t(l){return Pn(l,e)}if(0<wr.length){Pn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(et!==null&&Pn(et,e),tt!==null&&Pn(tt,e),nt!==null&&Pn(nt,e),_n.forEach(t),Nn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Uu(n),n.blockedOn===null&&rt.shift()}var Wt=He.ReactCurrentBatchConfig,kr=!0;function uf(e,t,n,r){var l=D,o=Wt.transition;Wt.transition=null;try{D=1,so(e,t,n,r)}finally{D=l,Wt.transition=o}}function sf(e,t,n,r){var l=D,o=Wt.transition;Wt.transition=null;try{D=4,so(e,t,n,r)}finally{D=l,Wt.transition=o}}function so(e,t,n,r){if(kr){var l=ao(e,t,n,r);if(l===null)To(e,t,r,Sr,n),Au(e,r);else if(lf(l,e,t,n,r))r.stopPropagation();else if(Au(e,r),t&4&&-1<rf.indexOf(e)){for(;l!==null;){var o=Bn(l);if(o!==null&&Du(o),o=ao(e,t,n,r),o===null&&To(e,t,r,Sr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else To(e,t,r,null,n)}}var Sr=null;function ao(e,t,n,r){if(Sr=null,e=Jl(r),e=kt(e),e!==null)if(t=xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_u(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Sr=e,null}function Vu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case no:return 1;case ju:return 4;case mr:case Gc:return 16;case Iu:return 536870912;default:return 16}default:return 16}}var lt=null,co=null,Er=null;function Hu(){if(Er)return Er;var e,t=co,n=t.length,r,l="value"in lt?lt.value:lt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Wu(){return!1}function ye(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_r:Wu,this.isPropagationStopped=Wu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fo=ye(bt),Ln=H({},bt,{view:0,detail:0}),af=ye(Ln),po,mo,jn,Nr=H({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:go,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(po=e.screenX-jn.screenX,mo=e.screenY-jn.screenY):mo=po=0,jn=e),po)},movementY:function(e){return"movementY"in e?e.movementY:mo}}),bu=ye(Nr),cf=H({},Nr,{dataTransfer:0}),ff=ye(cf),df=H({},Ln,{relatedTarget:0}),ho=ye(df),pf=H({},bt,{animationName:0,elapsedTime:0,pseudoElement:0}),mf=ye(pf),hf=H({},bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gf=ye(hf),vf=H({},bt,{data:0}),Qu=ye(vf),yf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xf[e])?!!t[e]:!1}function go(){return kf}var Sf=H({},Ln,{key:function(e){if(e.key){var t=yf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:go,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=ye(Sf),Cf=H({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=ye(Cf),_f=H({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:go}),Nf=ye(_f),Tf=H({},bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pf=ye(Tf),zf=H({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lf=ye(zf),jf=[9,13,27,32],vo=Ve&&"CompositionEvent"in window,In=null;Ve&&"documentMode"in document&&(In=document.documentMode);var If=Ve&&"TextEvent"in window&&!In,Yu=Ve&&(!vo||In&&8<In&&11>=In),Gu=" ",Xu=!1;function Ju(e,t){switch(e){case"keyup":return jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Of(e,t){switch(e){case"compositionend":return Zu(t);case"keypress":return t.which!==32?null:(Xu=!0,Gu);case"textInput":return e=t.data,e===Gu&&Xu?null:e;default:return null}}function Rf(e,t){if(Qt)return e==="compositionend"||!vo&&Ju(e,t)?(e=Hu(),Er=co=lt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Df[e.type]:t==="textarea"}function es(e,t,n,r){xu(r),t=jr(t,"onChange"),0<t.length&&(n=new fo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Rn=null;function Mf(e){ys(e,0)}function Tr(e){var t=Jt(e);if(su(t))return e}function Ff(e,t){if(e==="change")return t}var ts=!1;if(Ve){var yo;if(Ve){var wo="oninput"in document;if(!wo){var ns=document.createElement("div");ns.setAttribute("oninput","return;"),wo=typeof ns.oninput=="function"}yo=wo}else yo=!1;ts=yo&&(!document.documentMode||9<document.documentMode)}function rs(){On&&(On.detachEvent("onpropertychange",ls),Rn=On=null)}function ls(e){if(e.propertyName==="value"&&Tr(Rn)){var t=[];es(t,Rn,e,Jl(e)),Cu(Mf,t)}}function $f(e,t,n){e==="focusin"?(rs(),On=t,Rn=n,On.attachEvent("onpropertychange",ls)):e==="focusout"&&rs()}function Af(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tr(Rn)}function Uf(e,t){if(e==="click")return Tr(t)}function Bf(e,t){if(e==="input"||e==="change")return Tr(t)}function Vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var je=typeof Object.is=="function"?Object.is:Vf;function Dn(e,t){if(je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!zl.call(t,l)||!je(e[l],t[l]))return!1}return!0}function os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,t){var n=os(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=os(n)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ss(){for(var e=window,t=cr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cr(e.document)}return t}function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hf(e){var t=ss(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&us(n.ownerDocument.documentElement,n)){if(r!==null&&xo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=is(n,o);var i=is(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wf=Ve&&"documentMode"in document&&11>=document.documentMode,Kt=null,ko=null,Mn=null,So=!1;function as(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;So||Kt==null||Kt!==cr(r)||(r=Kt,"selectionStart"in r&&xo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Dn(Mn,r)||(Mn=r,r=jr(ko,"onSelect"),0<r.length&&(t=new fo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},Eo={},cs={};Ve&&(cs=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function zr(e){if(Eo[e])return Eo[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cs)return Eo[e]=t[n];return e}var fs=zr("animationend"),ds=zr("animationiteration"),ps=zr("animationstart"),ms=zr("transitionend"),hs=new Map,gs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ot(e,t){hs.set(e,t),wt(t,[e])}for(var Co=0;Co<gs.length;Co++){var _o=gs[Co],bf=_o.toLowerCase(),Qf=_o[0].toUpperCase()+_o.slice(1);ot(bf,"on"+Qf)}ot(fs,"onAnimationEnd"),ot(ds,"onAnimationIteration"),ot(ps,"onAnimationStart"),ot("dblclick","onDoubleClick"),ot("focusin","onFocus"),ot("focusout","onBlur"),ot(ms,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function vs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wc(r,t,void 0,e),e.currentTarget=null}function ys(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==o&&l.isPropagationStopped())break e;vs(l,u,c),o=s}else for(i=0;i<r.length;i++){if(u=r[i],s=u.instance,c=u.currentTarget,u=u.listener,s!==o&&l.isPropagationStopped())break e;vs(l,u,c),o=s}}}if(pr)throw e=to,pr=!1,to=null,e}function A(e,t){var n=t[Oo];n===void 0&&(n=t[Oo]=new Set);var r=e+"__bubble";n.has(r)||(ws(t,e,2,!1),n.add(r))}function No(e,t,n){var r=0;t&&(r|=4),ws(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[Lr]){e[Lr]=!0,eu.forEach(function(n){n!=="selectionchange"&&(Kf.has(n)||No(n,!1,e),No(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,No("selectionchange",!1,t))}}function ws(e,t,n,r){switch(Vu(t)){case 1:var l=uf;break;case 4:l=sf;break;default:l=so}n=l.bind(null,t,n,e),l=void 0,!eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function To(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;u!==null;){if(i=kt(u),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}u=u.parentNode}}r=r.return}Cu(function(){var c=o,h=Jl(n),m=[];e:{var p=hs.get(e);if(p!==void 0){var y=fo,x=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":y=Ef;break;case"focusin":x="focus",y=ho;break;case"focusout":x="blur",y=ho;break;case"beforeblur":case"afterblur":y=ho;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Nf;break;case fs:case ds:case ps:y=mf;break;case ms:y=Pf;break;case"scroll":y=af;break;case"wheel":y=Lf;break;case"copy":case"cut":case"paste":y=gf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ku}var k=(t&4)!==0,L=!k&&e==="scroll",d=k?p!==null?p+"Capture":null:p;k=[];for(var a=c,f;a!==null;){f=a;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=xn(a,d),g!=null&&k.push(An(a,g,f)))),L)break;a=a.return}0<k.length&&(p=new y(p,x,null,n,h),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Xl&&(x=n.relatedTarget||n.fromElement)&&(kt(x)||x[We]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?kt(x):null,x!==null&&(L=xt(x),x!==L||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(k=bu,g="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ku,g="onPointerLeave",d="onPointerEnter",a="pointer"),L=y==null?p:Jt(y),f=x==null?p:Jt(x),p=new k(g,a+"leave",y,n,h),p.target=L,p.relatedTarget=f,g=null,kt(h)===c&&(k=new k(d,a+"enter",x,n,h),k.target=f,k.relatedTarget=L,g=k),L=g,y&&x)t:{for(k=y,d=x,a=0,f=k;f;f=Gt(f))a++;for(f=0,g=d;g;g=Gt(g))f++;for(;0<a-f;)k=Gt(k),a--;for(;0<f-a;)d=Gt(d),f--;for(;a--;){if(k===d||d!==null&&k===d.alternate)break t;k=Gt(k),d=Gt(d)}k=null}else k=null;y!==null&&xs(m,p,y,k,!1),x!==null&&L!==null&&xs(m,L,x,k,!0)}}e:{if(p=c?Jt(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var w=Ff;else if(qu(p))if(ts)w=Bf;else{w=Af;var _=$f}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=Uf);if(w&&(w=w(e,c))){es(m,w,n,h);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&bl(p,"number",p.value)}switch(_=c?Jt(c):window,e){case"focusin":(qu(_)||_.contentEditable==="true")&&(Kt=_,ko=c,Mn=null);break;case"focusout":Mn=ko=Kt=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,as(m,n,h);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":as(m,n,h)}var N;if(vo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Qt?Ju(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Yu&&n.locale!=="ko"&&(Qt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Qt&&(N=Hu()):(lt=h,co="value"in lt?lt.value:lt.textContent,Qt=!0)),_=jr(c,T),0<_.length&&(T=new Qu(T,e,null,n,h),m.push({event:T,listeners:_}),N?T.data=N:(N=Zu(n),N!==null&&(T.data=N)))),(N=If?Of(e,n):Rf(e,n))&&(c=jr(c,"onBeforeInput"),0<c.length&&(h=new Qu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=N))}ys(m,t)})}function An(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=xn(e,n),o!=null&&r.unshift(An(e,o,l)),o=xn(e,t),o!=null&&r.push(An(e,o,l))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xs(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=xn(n,o),s!=null&&i.unshift(An(n,s,u))):l||(s=xn(n,o),s!=null&&i.push(An(n,s,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Yf=/\r\n?/g,Gf=/\u0000|\uFFFD/g;function ks(e){return(typeof e=="string"?e:""+e).replace(Yf,`
`).replace(Gf,"")}function Ir(e,t,n){if(t=ks(t),ks(e)!==t&&n)throw Error(v(425))}function Or(){}var Po=null,zo=null;function Lo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,Xf=typeof clearTimeout=="function"?clearTimeout:void 0,Ss=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ss<"u"?function(e){return Ss.resolve(null).then(e).catch(Zf)}:jo;function Zf(e){setTimeout(function(){throw e})}function Io(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);zn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Es(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xt=Math.random().toString(36).slice(2),$e="__reactFiber$"+Xt,Un="__reactProps$"+Xt,We="__reactContainer$"+Xt,Oo="__reactEvents$"+Xt,qf="__reactListeners$"+Xt,ed="__reactHandles$"+Xt;function kt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Es(e);e!==null;){if(n=e[$e])return n;e=Es(e)}return t}e=n,n=e.parentNode}return null}function Bn(e){return e=e[$e]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function Rr(e){return e[Un]||null}var Ro=[],Zt=-1;function ut(e){return{current:e}}function U(e){0>Zt||(e.current=Ro[Zt],Ro[Zt]=null,Zt--)}function $(e,t){Zt++,Ro[Zt]=e.current,e.current=t}var st={},ne=ut(st),fe=ut(!1),St=st;function qt(e,t){var n=e.type.contextTypes;if(!n)return st;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function de(e){return e=e.childContextTypes,e!=null}function Dr(){U(fe),U(ne)}function Cs(e,t,n){if(ne.current!==st)throw Error(v(168));$(ne,t),$(fe,n)}function _s(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(v(108,Fc(e)||"Unknown",l));return H({},n,r)}function Mr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,St=ne.current,$(ne,e),$(fe,fe.current),!0}function Ns(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=_s(e,t,St),r.__reactInternalMemoizedMergedChildContext=e,U(fe),U(ne),$(ne,e)):U(fe),$(fe,n)}var be=null,Fr=!1,Do=!1;function Ts(e){be===null?be=[e]:be.push(e)}function td(e){Fr=!0,Ts(e)}function at(){if(!Do&&be!==null){Do=!0;var e=0,t=D;try{var n=be;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}be=null,Fr=!1}catch(l){throw be!==null&&(be=be.slice(e+1)),zu(no,at),l}finally{D=t,Do=!1}}return null}var en=[],tn=0,$r=null,Ar=0,Se=[],Ee=0,Et=null,Qe=1,Ke="";function Ct(e,t){en[tn++]=Ar,en[tn++]=$r,$r=e,Ar=t}function Ps(e,t,n){Se[Ee++]=Qe,Se[Ee++]=Ke,Se[Ee++]=Et,Et=e;var r=Qe;e=Ke;var l=32-Le(r)-1;r&=~(1<<l),n+=1;var o=32-Le(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Qe=1<<32-Le(t)+l|n<<l|r,Ke=o+e}else Qe=1<<o|n<<l|r,Ke=e}function Mo(e){e.return!==null&&(Ct(e,1),Ps(e,1,0))}function Fo(e){for(;e===$r;)$r=en[--tn],en[tn]=null,Ar=en[--tn],en[tn]=null;for(;e===Et;)Et=Se[--Ee],Se[Ee]=null,Ke=Se[--Ee],Se[Ee]=null,Qe=Se[--Ee],Se[Ee]=null}var we=null,xe=null,B=!1,Ie=null;function zs(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ls(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,xe=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:Qe,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,xe=null,!0):!1;default:return!1}}function $o(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ao(e){if(B){var t=xe;if(t){var n=t;if(!Ls(e,t)){if($o(e))throw Error(v(418));t=it(n.nextSibling);var r=we;t&&Ls(e,t)?zs(r,n):(e.flags=e.flags&-4097|2,B=!1,we=e)}}else{if($o(e))throw Error(v(418));e.flags=e.flags&-4097|2,B=!1,we=e}}}function js(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Ur(e){if(e!==we)return!1;if(!B)return js(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lo(e.type,e.memoizedProps)),t&&(t=xe)){if($o(e))throw Is(),Error(v(418));for(;t;)zs(e,t),t=it(t.nextSibling)}if(js(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=we?it(e.stateNode.nextSibling):null;return!0}function Is(){for(var e=xe;e;)e=it(e.nextSibling)}function nn(){xe=we=null,B=!1}function Uo(e){Ie===null?Ie=[e]:Ie.push(e)}var nd=He.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function Br(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Os(e){var t=e._init;return t(e._payload)}function Rs(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=vt(d,a),d.index=0,d.sibling=null,d}function o(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,g){return a===null||a.tag!==6?(a=ji(f,d.mode,g),a.return=d,a):(a=l(a,f),a.return=d,a)}function s(d,a,f,g){var w=f.type;return w===Ut?h(d,a,f.props.children,g,f.key):a!==null&&(a.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ze&&Os(w)===a.type)?(g=l(a,f.props),g.ref=Vn(d,a,f),g.return=d,g):(g=fl(f.type,f.key,f.props,null,d.mode,g),g.ref=Vn(d,a,f),g.return=d,g)}function c(d,a,f,g){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Ii(f,d.mode,g),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function h(d,a,f,g,w){return a===null||a.tag!==7?(a=It(f,d.mode,g,w),a.return=d,a):(a=l(a,f),a.return=d,a)}function m(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=ji(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case sr:return f=fl(a.type,a.key,a.props,null,d.mode,f),f.ref=Vn(d,null,a),f.return=d,f;case At:return a=Ii(a,d.mode,f),a.return=d,a;case Ze:var g=a._init;return m(d,g(a._payload),f)}if(vn(a)||hn(a))return a=It(a,d.mode,f,null),a.return=d,a;Br(d,a)}return null}function p(d,a,f,g){var w=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return w!==null?null:u(d,a,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:return f.key===w?s(d,a,f,g):null;case At:return f.key===w?c(d,a,f,g):null;case Ze:return w=f._init,p(d,a,w(f._payload),g)}if(vn(f)||hn(f))return w!==null?null:h(d,a,f,g,null);Br(d,f)}return null}function y(d,a,f,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,u(a,d,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sr:return d=d.get(g.key===null?f:g.key)||null,s(a,d,g,w);case At:return d=d.get(g.key===null?f:g.key)||null,c(a,d,g,w);case Ze:var _=g._init;return y(d,a,f,_(g._payload),w)}if(vn(g)||hn(g))return d=d.get(f)||null,h(a,d,g,w,null);Br(a,g)}return null}function x(d,a,f,g){for(var w=null,_=null,N=a,T=a=0,F=null;N!==null&&T<f.length;T++){N.index>T?(F=N,N=null):F=N.sibling;var j=p(d,N,f[T],g);if(j===null){N===null&&(N=F);break}e&&N&&j.alternate===null&&t(d,N),a=o(j,a,T),_===null?w=j:_.sibling=j,_=j,N=F}if(T===f.length)return n(d,N),B&&Ct(d,T),w;if(N===null){for(;T<f.length;T++)N=m(d,f[T],g),N!==null&&(a=o(N,a,T),_===null?w=N:_.sibling=N,_=N);return B&&Ct(d,T),w}for(N=r(d,N);T<f.length;T++)F=y(N,d,T,f[T],g),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?T:F.key),a=o(F,a,T),_===null?w=F:_.sibling=F,_=F);return e&&N.forEach(function(ie){return t(d,ie)}),B&&Ct(d,T),w}function k(d,a,f,g){var w=hn(f);if(typeof w!="function")throw Error(v(150));if(f=w.call(f),f==null)throw Error(v(151));for(var _=w=null,N=a,T=a=0,F=null,j=f.next();N!==null&&!j.done;T++,j=f.next()){N.index>T?(F=N,N=null):F=N.sibling;var ie=p(d,N,j.value,g);if(ie===null){N===null&&(N=F);break}e&&N&&ie.alternate===null&&t(d,N),a=o(ie,a,T),_===null?w=ie:_.sibling=ie,_=ie,N=F}if(j.done)return n(d,N),B&&Ct(d,T),w;if(N===null){for(;!j.done;T++,j=f.next())j=m(d,j.value,g),j!==null&&(a=o(j,a,T),_===null?w=j:_.sibling=j,_=j);return B&&Ct(d,T),w}for(N=r(d,N);!j.done;T++,j=f.next())j=y(N,d,T,j.value,g),j!==null&&(e&&j.alternate!==null&&N.delete(j.key===null?T:j.key),a=o(j,a,T),_===null?w=j:_.sibling=j,_=j);return e&&N.forEach(function(Pe){return t(d,Pe)}),B&&Ct(d,T),w}function L(d,a,f,g){if(typeof f=="object"&&f!==null&&f.type===Ut&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case sr:e:{for(var w=f.key,_=a;_!==null;){if(_.key===w){if(w=f.type,w===Ut){if(_.tag===7){n(d,_.sibling),a=l(_,f.props.children),a.return=d,d=a;break e}}else if(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ze&&Os(w)===_.type){n(d,_.sibling),a=l(_,f.props),a.ref=Vn(d,_,f),a.return=d,d=a;break e}n(d,_);break}else t(d,_);_=_.sibling}f.type===Ut?(a=It(f.props.children,d.mode,g,f.key),a.return=d,d=a):(g=fl(f.type,f.key,f.props,null,d.mode,g),g.ref=Vn(d,a,f),g.return=d,d=g)}return i(d);case At:e:{for(_=f.key;a!==null;){if(a.key===_)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=Ii(f,d.mode,g),a.return=d,d=a}return i(d);case Ze:return _=f._init,L(d,a,_(f._payload),g)}if(vn(f))return x(d,a,f,g);if(hn(f))return k(d,a,f,g);Br(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=l(a,f),a.return=d,d=a):(n(d,a),a=ji(f,d.mode,g),a.return=d,d=a),i(d)):n(d,a)}return L}var rn=Rs(!0),Ds=Rs(!1),Vr=ut(null),Hr=null,ln=null,Bo=null;function Vo(){Bo=ln=Hr=null}function Ho(e){var t=Vr.current;U(Vr),e._currentValue=t}function Wo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){Hr=e,Bo=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(Bo!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(Hr===null)throw Error(v(308));ln=e,Hr.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var _t=null;function bo(e){_t===null?_t=[e]:_t.push(e)}function Ms(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,bo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function Qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,bo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oo(e,n)}}function $s(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function br(e,t,n,r){var l=e.updateQueue;ct=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==i&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=s))}if(o!==null){var m=l.baseState;i=0,h=c=s=null,u=o;do{var p=u.lane,y=u.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,k=u;switch(p=t,y=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){m=x.call(y,m,p);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,p=typeof x=="function"?x.call(y,m,p):x,p==null)break e;m=H({},m,p);break e;case 2:ct=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else y={eventTime:y,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=y,s=m):h=h.next=y,i|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Pt|=i,e.lanes=i,e.memoizedState=m}}function As(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var Hn={},Ae=ut(Hn),Wn=ut(Hn),bn=ut(Hn);function Nt(e){if(e===Hn)throw Error(v(174));return e}function Ko(e,t){switch($(bn,t),$(Wn,e),$(Ae,Hn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}U(Ae),$(Ae,t)}function un(){U(Ae),U(Wn),U(bn)}function Us(e){Nt(bn.current);var t=Nt(Ae.current),n=Kl(t,e.type);t!==n&&($(Wn,e),$(Ae,n))}function Yo(e){Wn.current===e&&(U(Ae),U(Wn))}var W=ut(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=[];function Xo(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var Kr=He.ReactCurrentDispatcher,Jo=He.ReactCurrentBatchConfig,Tt=0,b=null,G=null,J=null,Yr=!1,Qn=!1,Kn=0,rd=0;function re(){throw Error(v(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!je(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,l,o){if(Tt=o,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kr.current=e===null||e.memoizedState===null?ud:sd,e=n(r,l),Qn){o=0;do{if(Qn=!1,Kn=0,25<=o)throw Error(v(301));o+=1,J=G=null,t.updateQueue=null,Kr.current=ad,e=n(r,l)}while(Qn)}if(Kr.current=Jr,t=G!==null&&G.next!==null,Tt=0,J=G=b=null,Yr=!1,t)throw Error(v(300));return e}function ei(){var e=Kn!==0;return Kn=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?b.memoizedState=J=e:J=J.next=e,J}function _e(){if(G===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?b.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(v(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?b.memoizedState=J=e:J=J.next=e}return J}function Yn(e,t){return typeof t=="function"?t(e):t}function ti(e){var t=_e(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,s=null,c=o;do{var h=c.lane;if((Tt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=m,i=r):s=s.next=m,b.lanes|=h,Pt|=h}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=u,je(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,b.lanes|=o,Pt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ni(e){var t=_e(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);je(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bs(){}function Vs(e,t){var n=b,r=_e(),l=t(),o=!je(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,ri(bs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Gn(9,Ws.bind(null,n,r,l,t),void 0,null),Z===null)throw Error(v(349));Tt&30||Hs(n,t,l)}return l}function Hs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ws(e,t,n,r){t.value=n,t.getSnapshot=r,Qs(t)&&Ks(e)}function bs(e,t,n){return n(function(){Qs(t)&&Ks(e)})}function Qs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!je(e,n)}catch{return!0}}function Ks(e){var t=Ye(e,1);t!==null&&Me(t,e,1,-1)}function Ys(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=id.bind(null,b,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gs(){return _e().memoizedState}function Gr(e,t,n,r){var l=Ue();b.flags|=e,l.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function Xr(e,t,n,r){var l=_e();r=r===void 0?null:r;var o=void 0;if(G!==null){var i=G.memoizedState;if(o=i.destroy,r!==null&&Zo(r,i.deps)){l.memoizedState=Gn(t,n,o,r);return}}b.flags|=e,l.memoizedState=Gn(1|t,n,o,r)}function Xs(e,t){return Gr(8390656,8,e,t)}function ri(e,t){return Xr(2048,8,e,t)}function Js(e,t){return Xr(4,2,e,t)}function Zs(e,t){return Xr(4,4,e,t)}function qs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ea(e,t,n){return n=n!=null?n.concat([e]):null,Xr(4,4,qs.bind(null,t,e),n)}function li(){}function ta(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function na(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ra(e,t,n){return Tt&21?(je(n,t)||(n=Ou(),b.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function ld(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Jo.transition;Jo.transition={};try{e(!1),t()}finally{D=n,Jo.transition=r}}function la(){return _e().memoizedState}function od(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},oa(e))ia(t,n);else if(n=Ms(e,t,n,r),n!==null){var l=ce();Me(n,e,r,l),ua(n,t,r)}}function id(e,t,n){var r=ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(oa(e))ia(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,je(u,i)){var s=t.interleaved;s===null?(l.next=l,bo(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Ms(e,t,l,r),n!==null&&(l=ce(),Me(n,e,r,l),ua(n,t,r))}}function oa(e){var t=e.alternate;return e===b||t!==null&&t===b}function ia(e,t){Qn=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ua(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oo(e,n)}}var Jr={readContext:Ce,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},ud={readContext:Ce,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gr(4194308,4,qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=od.bind(null,b,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Ys,useDebugValue:li,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Ys(!1),t=e[0];return e=ld.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=b,l=Ue();if(B){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),Z===null)throw Error(v(349));Tt&30||Hs(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Xs(bs.bind(null,r,o,e),[e]),r.flags|=2048,Gn(9,Ws.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ue(),t=Z.identifierPrefix;if(B){var n=Ke,r=Qe;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sd={readContext:Ce,useCallback:ta,useContext:Ce,useEffect:ri,useImperativeHandle:ea,useInsertionEffect:Js,useLayoutEffect:Zs,useMemo:na,useReducer:ti,useRef:Gs,useState:function(){return ti(Yn)},useDebugValue:li,useDeferredValue:function(e){var t=_e();return ra(t,G.memoizedState,e)},useTransition:function(){var e=ti(Yn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Bs,useSyncExternalStore:Vs,useId:la,unstable_isNewReconciler:!1},ad={readContext:Ce,useCallback:ta,useContext:Ce,useEffect:ri,useImperativeHandle:ea,useInsertionEffect:Js,useLayoutEffect:Zs,useMemo:na,useReducer:ni,useRef:Gs,useState:function(){return ni(Yn)},useDebugValue:li,useDeferredValue:function(e){var t=_e();return G===null?t.memoizedState=e:ra(t,G.memoizedState,e)},useTransition:function(){var e=ni(Yn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Bs,useSyncExternalStore:Vs,useId:la,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zr={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=ht(e),o=Ge(r,l);o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Me(t,e,l,r),Wr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=ht(e),o=Ge(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ft(e,o,l),t!==null&&(Me(t,e,l,r),Wr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=ht(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=ft(e,l,r),t!==null&&(Me(t,e,r,n),Wr(t,e,r))}};function sa(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Dn(n,r)||!Dn(l,o):!0}function aa(e,t,n){var r=!1,l=st,o=t.contextType;return typeof o=="object"&&o!==null?o=Ce(o):(l=de(t)?St:ne.current,r=t.contextTypes,o=(r=r!=null)?qt(e,l):st),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zr,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function ca(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zr.enqueueReplaceState(t,t.state,null)}function ii(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Qo(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ce(o):(o=de(t)?St:ne.current,l.context=qt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Zr.enqueueReplaceState(l,l.state,null),br(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var n="",r=t;do n+=Mc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ui(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function si(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cd=typeof WeakMap=="function"?WeakMap:Map;function fa(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,Ei=r),si(e,t)},n}function da(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){si(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){si(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function pa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Cd.bind(null,e,t,n),t.then(e,e))}function ma(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ha(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var fd=He.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?Ds(t,null,n,r):rn(t,e.child,n,r)}function ga(e,t,n,r,l){n=n.render;var o=t.ref;return on(t,l),r=qo(e,t,n,r,o,l),n=ei(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&n&&Mo(t),t.flags|=1,ae(e,t,r,l),t.child)}function va(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Li(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ya(e,t,o,r,l)):(e=fl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Dn,n(i,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ya(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Dn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return ai(e,t,n,r,l)}function wa(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(cn,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(cn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$(cn,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$(cn,ke),ke|=r;return ae(e,t,l,n),t.child}function xa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ai(e,t,n,r,l){var o=de(n)?St:ne.current;return o=qt(t,o),on(t,l),n=qo(e,t,n,r,o,l),r=ei(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(B&&r&&Mo(t),t.flags|=1,ae(e,t,n,l),t.child)}function ka(e,t,n,r,l){if(de(n)){var o=!0;Mr(t)}else o=!1;if(on(t,l),t.stateNode===null)el(e,t),aa(t,n,r),ii(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=de(n)?St:ne.current,c=qt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||s!==c)&&ca(t,i,r,c),ct=!1;var p=t.memoizedState;i.state=p,br(t,r,i,l),s=t.memoizedState,u!==r||p!==s||fe.current||ct?(typeof h=="function"&&(oi(t,n,h,r),s=t.memoizedState),(u=ct||sa(t,n,u,r,p,s,c))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fs(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Oe(t.type,u),i.props=c,m=t.pendingProps,p=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ce(s):(s=de(n)?St:ne.current,s=qt(t,s));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==m||p!==s)&&ca(t,i,r,s),ct=!1,p=t.memoizedState,i.state=p,br(t,r,i,l);var x=t.memoizedState;u!==m||p!==x||fe.current||ct?(typeof y=="function"&&(oi(t,n,y,r),x=t.memoizedState),(c=ct||sa(t,n,c,r,p,x,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ci(e,t,n,r,o,l)}function ci(e,t,n,r,l,o){xa(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Ns(t,n,!1),Xe(e,t,o);r=t.stateNode,fd.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=rn(t,e.child,null,o),t.child=rn(t,null,u,o)):ae(e,t,u,o),t.memoizedState=r.state,l&&Ns(t,n,!0),t.child}function Sa(e){var t=e.stateNode;t.pendingContext?Cs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cs(e,t.context,!1),Ko(e,t.containerInfo)}function Ea(e,t,n,r,l){return nn(),Uo(l),t.flags|=256,ae(e,t,n,r),t.child}var fi={dehydrated:null,treeContext:null,retryLane:0};function di(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ca(e,t,n){var r=t.pendingProps,l=W.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$(W,l&1),e===null)return Ao(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=dl(i,r,0,null),e=It(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=di(n),t.memoizedState=fi,e):pi(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return dd(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=vt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=vt(u,o):(o=It(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?di(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=fi,r}return o=e.child,e=o.sibling,r=vt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pi(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qr(e,t,n,r){return r!==null&&Uo(r),rn(t,e.child,null,n),e=pi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dd(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ui(Error(v(422))),qr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=dl({mode:"visible",children:r.children},l,0,null),o=It(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rn(t,e.child,null,i),t.child.memoizedState=di(i),t.memoizedState=fi,o);if(!(t.mode&1))return qr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(v(419)),r=ui(o,r,void 0),qr(e,t,i,r)}if(u=(i&e.childLanes)!==0,pe||u){if(r=Z,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ye(e,l),Me(r,e,l,-1))}return zi(),r=ui(Error(v(421))),qr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=_d.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,xe=it(l.nextSibling),we=t,B=!0,Ie=null,e!==null&&(Se[Ee++]=Qe,Se[Ee++]=Ke,Se[Ee++]=Et,Qe=e.id,Ke=e.overflow,Et=t),t=pi(t,r.children),t.flags|=4096,t)}function _a(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wo(e.return,t,n)}function mi(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Na(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_a(e,n,t);else if(e.tag===19)_a(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(W,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),mi(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Qr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}mi(t,!0,n,null,o);break;case"together":mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pd(e,t,n){switch(t.tag){case 3:Sa(t),nn();break;case 5:Us(t);break;case 1:de(t.type)&&Mr(t);break;case 4:Ko(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;$(Vr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Ca(e,t,n):($(W,W.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);$(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Na(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,wa(e,t,n)}return Xe(e,t,n)}var Ta,hi,Pa,za;Ta=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},hi=function(){},Pa=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Nt(Ae.current);var o=null;switch(n){case"input":l=Hl(e,l),r=Hl(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=Ql(e,l),r=Ql(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Or)}Yl(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&u[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&A("scroll",e),o||u===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},za=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xn(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function md(e,t,n){var r=t.pendingProps;switch(Fo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return de(t.type)&&Dr(),le(t),null;case 3:return r=t.stateNode,un(),U(fe),U(ne),Xo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Ni(Ie),Ie=null))),hi(e,t),le(t),null;case 5:Yo(t);var l=Nt(bn.current);if(n=t.type,e!==null&&t.stateNode!=null)Pa(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return le(t),null}if(e=Nt(Ae.current),Ur(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$e]=t,r[Un]=o,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<Fn.length;l++)A(Fn[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":au(r,o),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},A("invalid",r);break;case"textarea":du(r,o),A("invalid",r)}Yl(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,u,e),l=["children",""+u]):mn.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&A("scroll",r)}switch(n){case"input":ar(r),fu(r,o,!0);break;case"textarea":ar(r),mu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Or)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[$e]=t,e[Un]=r,Ta(e,t,!1,!1),t.stateNode=e;e:{switch(i=Gl(n,r),n){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fn.length;l++)A(Fn[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":au(e,r),l=Hl(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),A("invalid",e);break;case"textarea":du(e,r),l=Ql(e,r),A("invalid",e);break;default:l=r}Yl(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?yu(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&gu(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&yn(e,s):typeof s=="number"&&yn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&A("scroll",e):s!=null&&Il(e,o,s,i))}switch(n){case"input":ar(e),fu(e,r,!1);break;case"textarea":ar(e),mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qe(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Bt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Or)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)za(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=Nt(bn.current),Nt(Ae.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return le(t),null;case 13:if(U(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&xe!==null&&t.mode&1&&!(t.flags&128))Is(),nn(),t.flags|=98560,o=!1;else if(o=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(v(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[$e]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Ie!==null&&(Ni(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?X===0&&(X=3):zi())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return un(),hi(e,t),e===null&&$n(t.stateNode.containerInfo),le(t),null;case 10:return Ho(t.type._context),le(t),null;case 17:return de(t.type)&&Dr(),le(t),null;case 19:if(U(W),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Xn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Qr(e),i!==null){for(t.flags|=128,Xn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(W,W.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>fn&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!B)return le(t),null}else 2*K()-o.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,Xn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=W.current,$(W,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Pi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function hd(e,t){switch(Fo(t),t.tag){case 1:return de(t.type)&&Dr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),U(fe),U(ne),Xo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yo(t),null;case 13:if(U(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(W),null;case 4:return un(),null;case 10:return Ho(t.type._context),null;case 22:case 23:return Pi(),null;case 24:return null;default:return null}}var tl=!1,oe=!1,gd=typeof WeakSet=="function"?WeakSet:Set,E=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function gi(e,t,n){try{n()}catch(r){Q(e,t,r)}}var La=!1;function vd(e,t){if(Po=kr,e=ss(),xo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,s=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(u=i+l),m!==o||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++c===l&&(u=i),p===o&&++h===r&&(s=i),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:e,selectionRange:n},kr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,L=x.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:Oe(t.type,k),L);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){Q(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=La,La=!1,x}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&gi(t,n,o)}l=l.next}while(l!==r)}}function nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ja(e){var t=e.alternate;t!==null&&(e.alternate=null,ja(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[Un],delete t[Oo],delete t[qf],delete t[ed])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ia(e){return e.tag===5||e.tag===3||e.tag===4}function Oa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ia(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Or));else if(r!==4&&(e=e.child,e!==null))for(yi(e,t,n),e=e.sibling;e!==null;)yi(e,t,n),e=e.sibling}function wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wi(e,t,n),e=e.sibling;e!==null;)wi(e,t,n),e=e.sibling}var ee=null,Re=!1;function dt(e,t,n){for(n=n.child;n!==null;)Ra(e,t,n),n=n.sibling}function Ra(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(hr,n)}catch{}switch(n.tag){case 5:oe||an(n,t);case 6:var r=ee,l=Re;ee=null,dt(e,t,n),ee=r,Re=l,ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?Io(e.parentNode,n):e.nodeType===1&&Io(e,n),zn(e)):Io(ee,n.stateNode));break;case 4:r=ee,l=Re,ee=n.stateNode.containerInfo,Re=!0,dt(e,t,n),ee=r,Re=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&gi(n,t,i),l=l.next}while(l!==r)}dt(e,t,n);break;case 1:if(!oe&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Q(n,t,u)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,dt(e,t,n),oe=r):dt(e,t,n);break;default:dt(e,t,n)}}function Da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gd),t.forEach(function(r){var l=Nd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Re=!1;break e;case 3:ee=u.stateNode.containerInfo,Re=!0;break e;case 4:ee=u.stateNode.containerInfo,Re=!0;break e}u=u.return}if(ee===null)throw Error(v(160));Ra(o,i,l),ee=null,Re=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){Q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ma(t,e),t=t.sibling}function Ma(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Be(e),r&4){try{Jn(3,e,e.return),nl(3,e)}catch(k){Q(e,e.return,k)}try{Jn(5,e,e.return)}catch(k){Q(e,e.return,k)}}break;case 1:De(t,e),Be(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(De(t,e),Be(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var l=e.stateNode;try{yn(l,"")}catch(k){Q(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&cu(l,o),Gl(u,i);var c=Gl(u,o);for(i=0;i<s.length;i+=2){var h=s[i],m=s[i+1];h==="style"?yu(l,m):h==="dangerouslySetInnerHTML"?gu(l,m):h==="children"?yn(l,m):Il(l,h,m,c)}switch(u){case"input":Wl(l,o);break;case"textarea":pu(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Bt(l,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Bt(l,!!o.multiple,o.defaultValue,!0):Bt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Un]=o}catch(k){Q(e,e.return,k)}}break;case 6:if(De(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){Q(e,e.return,k)}}break;case 3:if(De(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(k){Q(e,e.return,k)}break;case 4:De(t,e),Be(e);break;case 13:De(t,e),Be(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Si=K())),r&4&&Da(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,De(t,e),oe=c):De(t,e),Be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(m=E=h;E!==null;){switch(p=E,y=p.child,p.tag){case 0:case 11:case 14:case 15:Jn(4,p,p.return);break;case 1:an(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){Q(r,n,k)}}break;case 5:an(p,p.return);break;case 22:if(p.memoizedState!==null){Aa(m);continue}}y!==null?(y.return=p,E=y):Aa(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=vu("display",i))}catch(k){Q(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){Q(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),Be(e),r&4&&Da(e);break;case 21:break;default:De(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ia(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(yn(l,""),r.flags&=-33);var o=Oa(e);wi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Oa(e);yi(e,u,i);break;default:throw Error(v(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yd(e,t,n){E=e,Fa(e)}function Fa(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||tl;if(!i){var u=l.alternate,s=u!==null&&u.memoizedState!==null||oe;u=tl;var c=oe;if(tl=i,(oe=s)&&!c)for(E=l;E!==null;)i=E,s=i.child,i.tag===22&&i.memoizedState!==null?Ua(l):s!==null?(s.return=i,E=s):Ua(l);for(;o!==null;)E=o,Fa(o),o=o.sibling;E=l,tl=u,oe=c}$a(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,E=o):$a(e)}}function $a(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&As(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}As(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&zn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}oe||t.flags&512&&vi(t)}catch(p){Q(t,t.return,p)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Aa(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Ua(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nl(4,t)}catch(s){Q(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){Q(t,l,s)}}var o=t.return;try{vi(t)}catch(s){Q(t,o,s)}break;case 5:var i=t.return;try{vi(t)}catch(s){Q(t,i,s)}}}catch(s){Q(t,t.return,s)}if(t===e){E=null;break}var u=t.sibling;if(u!==null){u.return=t.return,E=u;break}E=t.return}}var wd=Math.ceil,rl=He.ReactCurrentDispatcher,xi=He.ReactCurrentOwner,Ne=He.ReactCurrentBatchConfig,R=0,Z=null,Y=null,te=0,ke=0,cn=ut(0),X=0,Zn=null,Pt=0,ll=0,ki=0,qn=null,me=null,Si=0,fn=1/0,Je=null,ol=!1,Ei=null,pt=null,il=!1,mt=null,ul=0,er=0,Ci=null,sl=-1,al=0;function ce(){return R&6?K():sl!==-1?sl:sl=K()}function ht(e){return e.mode&1?R&2&&te!==0?te&-te:nd.transition!==null?(al===0&&(al=Ou()),al):(e=D,e!==0||(e=window.event,e=e===void 0?16:Vu(e.type)),e):1}function Me(e,t,n,r){if(50<er)throw er=0,Ci=null,Error(v(185));Cn(e,n,r),(!(R&2)||e!==Z)&&(e===Z&&(!(R&2)&&(ll|=n),X===4&&gt(e,te)),he(e,r),n===1&&R===0&&!(t.mode&1)&&(fn=K()+500,Fr&&at()))}function he(e,t){var n=e.callbackNode;tf(e,t);var r=yr(e,e===Z?te:0);if(r===0)n!==null&&Lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lu(n),t===1)e.tag===0?td(Va.bind(null,e)):Ts(Va.bind(null,e)),Jf(function(){!(R&6)&&at()}),n=null;else{switch(Ru(r)){case 1:n=no;break;case 4:n=ju;break;case 16:n=mr;break;case 536870912:n=Iu;break;default:n=mr}n=Xa(n,Ba.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ba(e,t){if(sl=-1,al=0,R&6)throw Error(v(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=yr(e,e===Z?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var l=R;R|=2;var o=Wa();(Z!==e||te!==t)&&(Je=null,fn=K()+500,Lt(e,t));do try{Sd();break}catch(u){Ha(e,u)}while(!0);Vo(),rl.current=o,R=l,Y!==null?t=0:(Z=null,te=0,t=X)}if(t!==0){if(t===2&&(l=ro(e),l!==0&&(r=l,t=_i(e,l))),t===1)throw n=Zn,Lt(e,0),gt(e,r),he(e,K()),n;if(t===6)gt(e,r);else{if(l=e.current.alternate,!(r&30)&&!xd(l)&&(t=cl(e,r),t===2&&(o=ro(e),o!==0&&(r=o,t=_i(e,o))),t===1))throw n=Zn,Lt(e,0),gt(e,r),he(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:jt(e,me,Je);break;case 3:if(gt(e,r),(r&130023424)===r&&(t=Si+500-K(),10<t)){if(yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=jo(jt.bind(null,e,me,Je),t);break}jt(e,me,Je);break;case 4:if(gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Le(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wd(r/1960))-r,10<r){e.timeoutHandle=jo(jt.bind(null,e,me,Je),r);break}jt(e,me,Je);break;case 5:jt(e,me,Je);break;default:throw Error(v(329))}}}return he(e,K()),e.callbackNode===n?Ba.bind(null,e):null}function _i(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=cl(e,t),e!==2&&(t=me,me=n,t!==null&&Ni(t)),e}function Ni(e){me===null?me=e:me.push.apply(me,e)}function xd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!je(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~ki,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Va(e){if(R&6)throw Error(v(327));dn();var t=yr(e,0);if(!(t&1))return he(e,K()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=ro(e);r!==0&&(t=r,n=_i(e,r))}if(n===1)throw n=Zn,Lt(e,0),gt(e,t),he(e,K()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,me,Je),he(e,K()),null}function Ti(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(fn=K()+500,Fr&&at())}}function zt(e){mt!==null&&mt.tag===0&&!(R&6)&&dn();var t=R;R|=1;var n=Ne.transition,r=D;try{if(Ne.transition=null,D=1,e)return e()}finally{D=r,Ne.transition=n,R=t,!(R&6)&&at()}}function Pi(){ke=cn.current,U(cn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Fo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dr();break;case 3:un(),U(fe),U(ne),Xo();break;case 5:Yo(r);break;case 4:un();break;case 13:U(W);break;case 19:U(W);break;case 10:Ho(r.type._context);break;case 22:case 23:Pi()}n=n.return}if(Z=e,Y=e=vt(e.current,null),te=ke=t,X=0,Zn=null,ki=ll=Pt=0,me=qn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}_t=null}return e}function Ha(e,t){do{var n=Y;try{if(Vo(),Kr.current=Jr,Yr){for(var r=b.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(Tt=0,J=G=b=null,Qn=!1,Kn=0,xi.current=null,n===null||n.return===null){X=1,Zn=t,Y=null;break}e:{var o=e,i=n.return,u=n,s=t;if(t=te,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=ma(i);if(y!==null){y.flags&=-257,ha(y,i,u,o,t),y.mode&1&&pa(o,c,t),t=y,s=c;var x=t.updateQueue;if(x===null){var k=new Set;k.add(s),t.updateQueue=k}else x.add(s);break e}else{if(!(t&1)){pa(o,c,t),zi();break e}s=Error(v(426))}}else if(B&&u.mode&1){var L=ma(i);if(L!==null){!(L.flags&65536)&&(L.flags|=256),ha(L,i,u,o,t),Uo(sn(s,u));break e}}o=s=sn(s,u),X!==4&&(X=2),qn===null?qn=[o]:qn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=fa(o,s,t);$s(o,d);break e;case 1:u=s;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=da(o,u,t);$s(o,g);break e}}o=o.return}while(o!==null)}Qa(n)}catch(w){t=w,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Wa(){var e=rl.current;return rl.current=Jr,e===null?Jr:e}function zi(){(X===0||X===3||X===2)&&(X=4),Z===null||!(Pt&268435455)&&!(ll&268435455)||gt(Z,te)}function cl(e,t){var n=R;R|=2;var r=Wa();(Z!==e||te!==t)&&(Je=null,Lt(e,t));do try{kd();break}catch(l){Ha(e,l)}while(!0);if(Vo(),R=n,rl.current=r,Y!==null)throw Error(v(261));return Z=null,te=0,X}function kd(){for(;Y!==null;)ba(Y)}function Sd(){for(;Y!==null&&!Qc();)ba(Y)}function ba(e){var t=Ga(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?Qa(e):Y=t,xi.current=null}function Qa(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hd(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=md(n,t,ke),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function jt(e,t,n){var r=D,l=Ne.transition;try{Ne.transition=null,D=1,Ed(e,t,n,r)}finally{Ne.transition=l,D=r}return null}function Ed(e,t,n,r){do dn();while(mt!==null);if(R&6)throw Error(v(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(nf(e,o),e===Z&&(Y=Z=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,Xa(mr,function(){return dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var i=D;D=1;var u=R;R|=4,xi.current=null,vd(e,n),Ma(n,e),Hf(zo),kr=!!Po,zo=Po=null,e.current=n,yd(n),Kc(),R=u,D=i,Ne.transition=o}else e.current=n;if(il&&(il=!1,mt=e,ul=l),o=e.pendingLanes,o===0&&(pt=null),Xc(n.stateNode),he(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(ol)throw ol=!1,e=Ei,Ei=null,e;return ul&1&&e.tag!==0&&dn(),o=e.pendingLanes,o&1?e===Ci?er++:(er=0,Ci=e):er=0,at(),null}function dn(){if(mt!==null){var e=Ru(ul),t=Ne.transition,n=D;try{if(Ne.transition=null,D=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,ul=0,R&6)throw Error(v(331));var l=R;for(R|=4,E=e.current;E!==null;){var o=E,i=o.child;if(E.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(E=c;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:Jn(8,h,o)}var m=h.child;if(m!==null)m.return=h,E=m;else for(;E!==null;){h=E;var p=h.sibling,y=h.return;if(ja(h),h===c){E=null;break}if(p!==null){p.return=y,E=p;break}E=y}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}E=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,E=i;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var a=e.current;for(E=a;E!==null;){i=E;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,E=f;else e:for(i=a;E!==null;){if(u=E,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:nl(9,u)}}catch(w){Q(u,u.return,w)}if(u===i){E=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,E=g;break e}E=u.return}}if(R=l,at(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(hr,e)}catch{}r=!0}return r}finally{D=n,Ne.transition=t}}return!1}function Ka(e,t,n){t=sn(n,t),t=fa(e,t,1),e=ft(e,t,1),t=ce(),e!==null&&(Cn(e,1,t),he(e,t))}function Q(e,t,n){if(e.tag===3)Ka(e,e,n);else for(;t!==null;){if(t.tag===3){Ka(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=sn(n,e),e=da(t,e,1),t=ft(t,e,1),e=ce(),t!==null&&(Cn(t,1,e),he(t,e));break}}t=t.return}}function Cd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>K()-Si?Lt(e,0):ki|=n),he(e,t)}function Ya(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=ce();e=Ye(e,t),e!==null&&(Cn(e,t,n),he(e,n))}function _d(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ya(e,n)}function Nd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Ya(e,n)}var Ga;Ga=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,pd(e,t,n);pe=!!(e.flags&131072)}else pe=!1,B&&t.flags&1048576&&Ps(t,Ar,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;el(e,t),e=t.pendingProps;var l=qt(t,ne.current);on(t,n),l=qo(null,t,r,e,l,n);var o=ei();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(r)?(o=!0,Mr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Qo(t),l.updater=Zr,t.stateNode=l,l._reactInternals=t,ii(t,r,e,n),t=ci(null,t,r,!0,o,n)):(t.tag=0,B&&o&&Mo(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(el(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Pd(r),e=Oe(r,e),l){case 0:t=ai(null,t,r,e,n);break e;case 1:t=ka(null,t,r,e,n);break e;case 11:t=ga(null,t,r,e,n);break e;case 14:t=va(null,t,r,Oe(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),ai(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),ka(e,t,r,l,n);case 3:e:{if(Sa(t),e===null)throw Error(v(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Fs(e,t),br(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=sn(Error(v(423)),t),t=Ea(e,t,r,n,l);break e}else if(r!==l){l=sn(Error(v(424)),t),t=Ea(e,t,r,n,l);break e}else for(xe=it(t.stateNode.containerInfo.firstChild),we=t,B=!0,Ie=null,n=Ds(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===l){t=Xe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Us(t),e===null&&Ao(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Lo(r,l)?i=null:o!==null&&Lo(r,o)&&(t.flags|=32),xa(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&Ao(t),null;case 13:return Ca(e,t,n);case 4:return Ko(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),ga(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,$(Vr,r._currentValue),r._currentValue=i,o!==null)if(je(o.value,i)){if(o.children===l.children&&!fe.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ge(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Wo(o.return,n,t),u.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(v(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Wo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=Ce(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),va(e,t,r,l,n);case 15:return ya(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),el(e,t),t.tag=1,de(r)?(e=!0,Mr(t)):e=!1,on(t,n),aa(t,r,l),ii(t,r,l,n),ci(null,t,r,!0,e,n);case 19:return Na(e,t,n);case 22:return wa(e,t,n)}throw Error(v(156,t.tag))};function Xa(e,t){return zu(e,t)}function Td(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Td(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pd(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dl)return 11;if(e===$l)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Li(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ut:return It(n.children,l,o,t);case Ol:i=8,l|=8;break;case Rl:return e=Te(12,n,t,l|2),e.elementType=Rl,e.lanes=o,e;case Ml:return e=Te(13,n,t,l),e.elementType=Ml,e.lanes=o,e;case Fl:return e=Te(19,n,t,l),e.elementType=Fl,e.lanes=o,e;case ou:return dl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ru:i=10;break e;case lu:i=9;break e;case Dl:i=11;break e;case $l:i=14;break e;case Ze:i=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Te(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function It(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=ou,e.lanes=n,e.stateNode={isHidden:!1},e}function ji(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function Ii(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lo(0),this.expirationTimes=lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Oi(e,t,n,r,l,o,i,u,s){return e=new zd(e,t,n,u,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qo(o),e}function Ld(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ja(e){if(!e)return st;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(de(n))return _s(e,n,t)}return t}function Za(e,t,n,r,l,o,i,u,s){return e=Oi(n,r,!0,e,l,o,i,u,s),e.context=Ja(null),n=e.current,r=ce(),l=ht(n),o=Ge(r,l),o.callback=t??null,ft(n,o,l),e.current.lanes=l,Cn(e,l,r),he(e,r),e}function pl(e,t,n,r){var l=t.current,o=ce(),i=ht(l);return n=Ja(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(l,t,i),e!==null&&(Me(e,l,i,o),Wr(e,l,i)),i}function ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ri(e,t){qa(e,t),(e=e.alternate)&&qa(e,t)}function jd(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Di(e){this._internalRoot=e}hl.prototype.render=Di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));pl(e,t,null,null)},hl.prototype.unmount=Di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){pl(null,e,null,null)}),t[We]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Uu(e)}};function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tc(){}function Id(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=ml(i);o.call(c)}}var i=Za(t,r,e,0,null,!1,!1,"",tc);return e._reactRootContainer=i,e[We]=i.current,$n(e.nodeType===8?e.parentNode:e),zt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=ml(s);u.call(c)}}var s=Oi(e,0,!1,null,null,!1,!1,"",tc);return e._reactRootContainer=s,e[We]=s.current,$n(e.nodeType===8?e.parentNode:e),zt(function(){pl(t,s,n,r)}),s}function vl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var s=ml(i);u.call(s)}}pl(t,i,e,l)}else i=Id(n,t,e,l,r);return ml(i)}Du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=En(t.pendingLanes);n!==0&&(oo(t,n|1),he(t,K()),!(R&6)&&(fn=K()+500,at()))}break;case 13:zt(function(){var r=Ye(e,1);if(r!==null){var l=ce();Me(r,e,1,l)}}),Ri(e,1)}},io=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ce();Me(t,e,134217728,n)}Ri(e,134217728)}},Mu=function(e){if(e.tag===13){var t=ht(e),n=Ye(e,t);if(n!==null){var r=ce();Me(n,e,t,r)}Ri(e,t)}},Fu=function(){return D},$u=function(e,t){var n=D;try{return D=e,t()}finally{D=n}},Zl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Rr(r);if(!l)throw Error(v(90));su(r),Wl(r,l)}}}break;case"textarea":pu(e,n);break;case"select":t=n.value,t!=null&&Bt(e,!!n.multiple,t,!1)}},Su=Ti,Eu=zt;var Od={usingClientEntryPoint:!1,Events:[Bn,Jt,Rr,xu,ku,Ti]},tr={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rd={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:He.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tu(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||jd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{hr=yl.inject(Rd),Fe=yl}catch{}}ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Od,ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(t))throw Error(v(200));return Ld(e,t,null,n)},ge.createRoot=function(e,t){if(!Mi(e))throw Error(v(299));var n=!1,r="",l=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Oi(e,1,!1,null,null,n,!1,r,l),e[We]=t.current,$n(e.nodeType===8?e.parentNode:e),new Di(t)},ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Tu(t),e=e===null?null:e.stateNode,e},ge.flushSync=function(e){return zt(e)},ge.hydrate=function(e,t,n){if(!gl(t))throw Error(v(200));return vl(null,e,t,!0,n)},ge.hydrateRoot=function(e,t,n){if(!Mi(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=ec;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Za(t,null,e,1,n??null,l,!1,o,i),e[We]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)},ge.render=function(e,t,n){if(!gl(t))throw Error(v(200));return vl(null,e,t,!1,n)},ge.unmountComponentAtNode=function(e){if(!gl(e))throw Error(v(40));return e._reactRootContainer?(zt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1},ge.unstable_batchedUpdates=Ti,ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return vl(e,t,n,!1,r)},ge.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),Ji.exports=ge;var Dd=Ji.exports,rc=Dd;Pl.createRoot=rc.createRoot,Pl.hydrateRoot=rc.hydrateRoot;var lc={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md=O,Fd=Symbol.for("react.element"),$d=Symbol.for("react.fragment"),Ad=Object.prototype.hasOwnProperty,Ud=Md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bd={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ad.call(t,r)&&!Bd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Fd,type:e,key:o,ref:i,props:l,_owner:Ud.current}}wl.Fragment=$d,wl.jsx=oc,wl.jsxs=oc,lc.exports=wl;var S=lc.exports;const ic="http://localhost:4000";function Vd(){const e=localStorage.getItem("genie_session_id"),t=localStorage.getItem("genie_session_date"),n=new Date().toDateString();if(e&&t===n)return e;const r="sess_"+Math.random().toString(36).slice(2)+Date.now().toString(36);return localStorage.setItem("genie_session_id",r),localStorage.setItem("genie_session_date",n),r}function Fi(){return"msg_"+Math.random().toString(36).slice(2)+Date.now().toString(36)}const uc={id:"welcome",role:"assistant",type:"text",message:"Hi there! 👋 How can I help you today?",actions:[]},Hd=5e3,Wd=[{pattern:/(pricing|price|cost|fee|charge|pay).*(education|school|university|k-12|district)/i,response:`For education, Justo Global's pricing depends on the type of engagement. University engagements are project-based, generally ranging from $350,000 to $550,000, depending on the scope. K-12 district engagements are scoped separately and priced proportionally, and we do not use per-seat billing in either market. Founding partner pricing is locked for 36 months from the contract signing.

To give you a specific estimate, Justo Global can provide a free, scope-specific estimate as part of an AI Readiness Assessment. To help us narrow down the best estimate for you, could you tell me a bit more about the educational scope you have in mind?`},{pattern:/(education|school|university|k-12|district).*(pricing|price|cost|fee|charge|pay)/i,response:`For education, Justo Global's pricing depends on the type of engagement. University engagements are project-based, generally ranging from $350,000 to $550,000, depending on the scope. K-12 district engagements are scoped separately and priced proportionally, and we do not use per-seat billing in either market. Founding partner pricing is locked for 36 months from the contract signing.

To give you a specific estimate, Justo Global can provide a free, scope-specific estimate as part of an AI Readiness Assessment. To help us narrow down the best estimate for you, could you tell me a bit more about the educational scope you have in mind?`}];function bd(e){for(const t of Wd)if(t.pattern.test(e))return t.response;return null}function sc(){let e=localStorage.getItem("genie_visitor_fingerprint");return e||(e="fp_"+Math.random().toString(36).slice(2,15)+Date.now().toString(36),localStorage.setItem("genie_visitor_fingerprint",e)),e}function Qd(){const e=navigator.userAgent;return e.includes("Firefox")?"Firefox":e.includes("Chrome")?"Chrome":e.includes("Safari")&&!e.includes("Chrome")?"Safari":e.includes("Edge")||e.includes("Edg")?"Edge":e.includes("MSIE")||e.includes("Trident")?"Internet Explorer":"Other"}function Kd(){const e=navigator.userAgent;return e.includes("Windows")?"Windows":e.includes("Macintosh")||e.includes("Mac OS")?"MacOS":e.includes("Linux")&&!e.includes("Android")?"Linux":e.includes("Android")?"Android":e.includes("iPhone")||e.includes("iPad")||e.includes("iPod")?"iOS":"Other"}function Yd(){const e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)?"mobile":"desktop"}function ac(){const e=window.location.pathname||"/";let t=[];try{t=JSON.parse(localStorage.getItem("genie_page_history")||"[]")}catch{}return t[t.length-1]!==e&&(t.push(e),t.length>5&&t.shift(),localStorage.setItem("genie_page_history",JSON.stringify(t))),t}let xl=0,cc=null;function fc(){const e=document.documentElement.scrollHeight||document.body.scrollHeight,t=document.documentElement.clientHeight||window.innerHeight;return e<=t?100:Math.round(window.scrollY/(e-t)*100)||0}typeof window<"u"&&(setTimeout(()=>{xl=fc()},100),window.addEventListener("scroll",()=>{clearTimeout(cc),cc=setTimeout(()=>{const e=fc();e>xl&&(xl=e)},1500)},{passive:!0}));function dc(){return xl}function pc(){var t;const e=((t=performance==null?void 0:performance.timing)==null?void 0:t.navigationStart)||Date.now();return Math.floor((Date.now()-e)/1e3)}function Gd(e){const{apiKey:t,visitorEmail:n,visitorName:r}=e||{},[l,o]=O.useState(()=>{const L=localStorage.getItem("genie_visitor_info");if(L)try{return JSON.parse(L)}catch{}return{visitorName:r||null,visitorEmail:n||null}}),[i,u]=O.useState([uc]),[s,c]=O.useState(!1),[h,m]=O.useState(null),p=O.useRef(Vd()),y=O.useCallback(async L=>{if(!L||!L.trim()||s)return;const d=L.trim(),a={id:Fi(),role:"user",type:"text",message:d,actions:[]};u(f=>[...f,a]),c(!0),m(null);try{const f=sc(),g=Qd(),w=Kd(),_=Yd(),N=bd(d),T=new AbortController;let F=!1;const j=Fi();u(P=>[...P,{id:j,role:"assistant",type:"text",message:"",actions:[]}]);let ie=null;N&&(ie=setTimeout(()=>{F=!0,T.abort(),u(P=>P.map(z=>z.id===j?{...z,message:N}:z)),c(!1)},Hd));let Pe;try{Pe=await fetch(`${ic}/api/chat`,{method:"POST",signal:T.signal,headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({apiKey:t,sessionId:p.current,message:d,fingerprint:f,visitorEmail:l.visitorEmail||null,visitorName:l.visitorName||null,pageUrl:window.location.href,pageTitle:document.title,language:navigator.language||"en",referrer:document.referrer||null,screen_resolution:`${window.screen.width}x${window.screen.height}`,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC",browser:g,os:w,device_type:_,timeOnSite:pc(),scrollDepth:dc(),pageHistory:ac()})})}catch(P){if(F)return;throw P}if(ie&&(clearTimeout(ie),ie=null),!Pe.ok){const P=await Pe.text().catch(()=>"");throw Pe.status===422?new Error(`Validation error: ${P}`):new Error(`Server error: ${Pe.status} ${P}`)}const Ot=Pe.body.getReader(),kl=new TextDecoder("utf-8");let Rt="";for(;;){let P;try{P=await Ot.read()}catch(V){if(F)return;throw V}const{done:z,value:M}=P;if(z||F)break;Rt+=kl.decode(M,{stream:!0}),u(V=>V.map(ze=>ze.id===j?{...ze,message:Rt}:ze))}if(F)return;const yt=Rt.match(/\n\n(\{"sources":\s*\[[\s\S]*\]\})\s*$/),rr=yt?JSON.parse(yt[1]).sources:[],C=yt?Rt.slice(0,yt.index).trim():Rt;u(P=>P.map(z=>z.id===j?{...z,message:C,actions:rr.map(M=>({url:M,label:M.replace(/^https?:\/\//,""),action_type:"url"}))}:z)),u(P=>{const z=P.filter(ze=>ze.role==="user").length,M=P.some(ze=>ze.type==="lead_capture"),V=l.visitorEmail||l.visitorName;return!M&&!V&&z>=3?[...P,{id:`msg_lead_${Date.now()}`,role:"assistant",type:"lead_capture",message:"Would you like an agent to reach out? Please drop your name and email below.",actions:[]}]:P})}catch(f){const g={id:Fi(),role:"assistant",type:"text",message:"I'm sorry, I'm having trouble connecting right now. Please try again in a moment. 🙏",actions:[]};u(w=>[...w,g]),m(f.message),console.error("[ChatWidget] API error:",f)}finally{c(!1)}},[t,l.visitorEmail,l.visitorName,s]),x=O.useCallback(async({visitorName:L,visitorEmail:d})=>{var _,N;const a=sc(),f=await fetch(`${ic}/api/chat/lead`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({apiKey:t,fingerprint:a,visitorName:L,visitorEmail:d,timeOnSite:pc(),scrollDepth:dc(),pageHistory:ac()})});if(!f.ok){const T=await f.json().catch(()=>null);throw new Error((T==null?void 0:T.error)||"Failed to submit details")}const g=await f.json(),w={visitorName:((_=g.visitor)==null?void 0:_.name)||L,visitorEmail:((N=g.visitor)==null?void 0:N.email)||d};return o(w),localStorage.setItem("genie_visitor_info",JSON.stringify(w)),g},[t]),k=O.useCallback(()=>{const L="sess_"+Math.random().toString(36).slice(2)+Date.now().toString(36);localStorage.setItem("genie_session_id",L),localStorage.setItem("genie_session_date",new Date().toDateString()),p.current=L,u([uc]),m(null),c(!1)},[]);return{messages:i,loading:s,error:h,sendMessage:y,clearMessages:k,visitorInfo:l,submitLeadInfo:x}}function Xd(e="#2d6a4f"){return`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

/* ─────────────────────────────────────────────────────────
   KEYFRAMES
───────────────────────────────────────────────────────── */

@keyframes cbwSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes cbwFadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cbwBounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

@keyframes cbwPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

@keyframes cbwBadgePop {
  0%   { transform: scale(0); }
  70%  { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* ─────────────────────────────────────────────────────────
   ROOT CONTAINER
───────────────────────────────────────────────────────── */

.cbw-root {
  position: fixed;
  z-index: 2147483647;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cbw-root * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ─────────────────────────────────────────────────────────
   FLOATING BUBBLE BUTTON
───────────────────────────────────────────────────────── */

.cbw-bubble-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${e};
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 0 0 0 ${e}66;
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
  outline: none;
  align-self: flex-end;
}

.cbw-bubble-btn:hover {
  transform: scale(1.08);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.2),
    0 0 0 8px ${e}22;
}

.cbw-bubble-btn:active {
  transform: scale(0.96);
}

.cbw-bubble-btn:focus-visible {
  outline: 3px solid ${e};
  outline-offset: 3px;
}

/* ─────────────────────────────────────────────────────────
   BUBBLE ICONS (chat & close)
───────────────────────────────────────────────────────── */

.cbw-bubble-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    opacity 0.22s ease,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #ffffff;
  line-height: 1;
}

.cbw-icon-chat {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

.cbw-icon-close {
  opacity: 0;
  transform: rotate(-90deg) scale(0.7);
  font-size: 1.4rem;
  font-weight: 300;
}

/* Open state — swap icons */
.cbw-bubble-open .cbw-icon-chat {
  opacity: 0;
  transform: rotate(90deg) scale(0.7);
}

.cbw-bubble-open .cbw-icon-close {
  opacity: 1;
  transform: rotate(0deg) scale(1);
}

/* ─────────────────────────────────────────────────────────
   UNREAD BADGE
───────────────────────────────────────────────────────── */

.cbw-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 999px;
  background: #ef4444;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  animation: cbwBadgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  font-family: 'DM Sans', sans-serif;
  line-height: 1;
}

/* ─────────────────────────────────────────────────────────
   CHAT WINDOW
───────────────────────────────────────────────────────── */

.cbw-window {
  width: 360px;
  height: 520px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  animation: cbwSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  transform-origin: bottom right;
}

/* ─────────────────────────────────────────────────────────
   HEADER
───────────────────────────────────────────────────────── */

.cbw-header {
  background: ${e};
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.cbw-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cbw-header-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 1.1rem;
  color: #ffffff;
  font-style: italic;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  flex-shrink: 0;
  backdrop-filter: blur(8px);
}

.cbw-header-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cbw-header-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.cbw-header-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.cbw-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.3);
  animation: cbwPulse 2.5s ease-in-out infinite;
  flex-shrink: 0;
}

.cbw-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cbw-icon-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: background 0.18s ease, transform 0.15s ease;
  outline: none;
  backdrop-filter: blur(8px);
  line-height: 1;
}

.cbw-icon-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.cbw-icon-btn:active {
  transform: scale(0.95);
}

.cbw-icon-btn:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.7);
  outline-offset: 2px;
}

/* ─────────────────────────────────────────────────────────
   MESSAGES AREA
───────────────────────────────────────────────────────── */

.cbw-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f8fafc;
  scroll-behavior: smooth;
}

/* Custom thin scrollbar */
.cbw-messages::-webkit-scrollbar {
  width: 4px;
}
.cbw-messages::-webkit-scrollbar-track {
  background: transparent;
}
.cbw-messages::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 999px;
}
.cbw-messages::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
.cbw-messages {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

/* ─────────────────────────────────────────────────────────
   MESSAGE WRAP
───────────────────────────────────────────────────────── */

.cbw-message-wrap {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  animation: cbwFadeIn 0.3s ease both;
}

.cbw-user {
  flex-direction: row-reverse;
}

/* ─────────────────────────────────────────────────────────
   BOT AVATAR
───────────────────────────────────────────────────────── */

.cbw-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${e};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 0.85rem;
  color: #ffffff;
  font-style: italic;
  flex-shrink: 0;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ─────────────────────────────────────────────────────────
   BUBBLE GROUP
───────────────────────────────────────────────────────── */

.cbw-bubble-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 78%;
}

/* ─────────────────────────────────────────────────────────
   CHAT BUBBLES
───────────────────────────────────────────────────────── */

.cbw-bubble {
  padding: 10px 14px;
  font-size: 0.875rem;
  line-height: 1.55;
  color: #1e293b;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

/* Bot bubble — round all corners except top-left */
.cbw-bot .cbw-bubble {
  border-radius: 4px 16px 16px 16px;
}

/* User bubble — primaryColor bg, round all except bottom-right */
.cbw-user .cbw-bubble {
  background: ${e};
  color: #ffffff;
  border: none;
  border-radius: 16px 16px 4px 16px;
  box-shadow: 0 2px 8px ${e}44;
}

/* ─────────────────────────────────────────────────────────
   TYPING INDICATOR
───────────────────────────────────────────────────────── */

.cbw-typing {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  animation: cbwFadeIn 0.3s ease both;
}

.cbw-typing-dots {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 14px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px 16px 16px 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.cbw-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #94a3b8;
  animation: cbwBounce 1.2s ease-in-out infinite;
}

.cbw-dot:nth-child(1) { animation-delay: 0s; }
.cbw-dot:nth-child(2) { animation-delay: 0.2s; }
.cbw-dot:nth-child(3) { animation-delay: 0.4s; }

/* ─────────────────────────────────────────────────────────
   ACTION BUTTONS (navigation type)
───────────────────────────────────────────────────────── */

.cbw-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.cbw-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  background: #ffffff;
  color: ${e};
  border: 1.5px solid ${e};
  border-radius: 999px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.18s ease,
    transform 0.15s ease,
    box-shadow 0.18s ease;
  outline: none;
  line-height: 1;
  white-space: nowrap;
}

.cbw-action-btn:hover {
  background: ${e}11;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px ${e}33;
}

.cbw-action-btn:active {
  transform: translateY(0);
}

.cbw-action-btn:focus-visible {
  outline: 2px solid ${e};
  outline-offset: 2px;
}

/* ─────────────────────────────────────────────────────────
   CARD (card type)
───────────────────────────────────────────────────────── */

.cbw-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  display: block;
  margin-top: 2px;
}

.cbw-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.cbw-card:active {
  transform: translateY(0);
}

.cbw-card-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
  background: #f1f5f9;
}

.cbw-card-body {
  padding: 12px 14px;
}

.cbw-card-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
  line-height: 1.3;
}

.cbw-card-desc {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 8px;
}

.cbw-card-link {
  font-size: 0.8rem;
  color: ${e};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* ─────────────────────────────────────────────────────────
   LIST (list type)
───────────────────────────────────────────────────────── */

.cbw-list {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 2px;
}

.cbw-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  font-size: 0.84rem;
  color: #1e293b;
  cursor: pointer;
  transition: background 0.15s ease;
  border-bottom: 1px solid #f1f5f9;
  font-weight: 400;
  gap: 8px;
}

.cbw-list-item:last-child {
  border-bottom: none;
}

.cbw-list-item:hover {
  background: #f8fafc;
  color: ${e};
}

.cbw-list-item:active {
  background: #f1f5f9;
}

.cbw-list-arrow {
  color: #94a3b8;
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: color 0.15s, transform 0.15s;
}

.cbw-list-item:hover .cbw-list-arrow {
  color: ${e};
  transform: translateX(2px);
}

/* ─────────────────────────────────────────────────────────
   INPUT AREA
───────────────────────────────────────────────────────── */

.cbw-input-area {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid #e2e8f0;
  background: #ffffff;
  flex-shrink: 0;
}

.cbw-input {
  flex: 1;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  padding: 9px 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #1e293b;
  background: #f8fafc;
  resize: none;
  outline: none;
  line-height: 1.5;
  max-height: 100px;
  overflow-y: auto;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.cbw-input::placeholder {
  color: #94a3b8;
}

.cbw-input:focus {
  border-color: ${e};
  box-shadow: 0 0 0 3px ${e}22;
  background: #ffffff;
}

.cbw-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cbw-input::-webkit-scrollbar { width: 3px; }
.cbw-input::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 999px; }

.cbw-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${e};
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background 0.18s ease,
    transform 0.15s ease,
    box-shadow 0.18s ease,
    opacity 0.18s ease;
  outline: none;
  box-shadow: 0 2px 8px ${e}44;
}

.cbw-send-btn:hover:not(:disabled) {
  transform: scale(1.08);
  box-shadow: 0 4px 12px ${e}55;
}

.cbw-send-btn:active:not(:disabled) {
  transform: scale(0.95);
}

.cbw-send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.cbw-send-btn:focus-visible {
  outline: 3px solid ${e};
  outline-offset: 3px;
}

/* ─────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────── */

.cbw-footer {
  text-align: center;
  padding: 6px 14px 10px;
  font-size: 0.68rem;
  color: #94a3b8;
  font-weight: 400;
  background: #ffffff;
  letter-spacing: 0.01em;
  flex-shrink: 0;
}

.cbw-footer a {
  color: ${e};
  text-decoration: none;
  font-weight: 500;
}

.cbw-footer a:hover {
  text-decoration: underline;
}

/* ─────────────────────────────────────────────────────────
   DATE DIVIDER
───────────────────────────────────────────────────────── */

.cbw-date-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
  color: #94a3b8;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 4px 0;
}

.cbw-date-divider::before,
.cbw-date-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

/* ─────────────────────────────────────────────────────────
   LEAD CAPTURE CARD
───────────────────────────────────────────────────────── */

.cbw-lead-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 14px;
  width: 100%;
}

.cbw-lead-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cbw-lead-error {
  color: #ef4444;
  font-size: 0.8rem;
  background: #fef2f2;
  padding: 8px;
  border-radius: 6px;
  text-align: center;
}

.cbw-lead-input-group {
  display: flex;
  flex-direction: column;
}

.cbw-lead-input {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #1e293b;
  background: #f8fafc;
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.cbw-lead-input:focus {
  border-color: #94a3b8;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.15);
}

.cbw-lead-submit {
  padding: 10px;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s, opacity 0.15s, box-shadow 0.15s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-top: 4px;
}

.cbw-lead-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.cbw-lead-submit:active:not(:disabled) {
  transform: translateY(0);
}

.cbw-lead-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
}

.cbw-lead-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-top: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.cbw-success-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #22c55e;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  animation: cbwBadgePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.cbw-success-text {
  font-size: 0.9rem;
  color: #1e293b;
  font-weight: 500;
}

/* ─────────────────────────────────────────────────────────
   MOBILE BREAKPOINT
───────────────────────────────────────────────────────── */

@media (max-width: 480px) {
  .cbw-window {
    width: 100vw;
    height: 100dvh;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    right: 0;
    animation: none;
  }
}
`}function nr(e,t=!1){if(e){if(t){window.open(e,"_blank","noopener,noreferrer");return}if(typeof window.__CHATBOT_NAVIGATE__=="function"){window.__CHATBOT_NAVIGATE__(e);return}if(window.__NEXT_ROUTER__&&typeof window.__NEXT_ROUTER__.push=="function"){window.__NEXT_ROUTER__.push(e);return}window.location.href=e}}function Jd({onSubmit:e,primaryColor:t="#1271DA"}){const[n,r]=O.useState(""),[l,o]=O.useState(""),[i,u]=O.useState("form"),[s,c]=O.useState(null),h=async m=>{if(m.preventDefault(),!l||!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(l)){c("Please enter a valid email address.");return}const p=l.split("@")[1].toLowerCase();if(["gmai.com","gamil.com","gmail.con","yaho.com","yahoo.con","hotmal.com","outlok.com"].includes(p)){c("This email domain looks like a typo. Please double check it.");return}u("submitting"),c(null);try{await e({visitorName:n,visitorEmail:l}),u("success")}catch(x){c(x.message||"Something went wrong. Please try again."),u("form")}};return i==="success"?S.jsxs("div",{className:"cbw-lead-success",role:"alert","aria-live":"polite",children:[S.jsx("div",{className:"cbw-success-icon","aria-hidden":"true",children:"✓"}),S.jsx("div",{className:"cbw-success-text",children:"Thanks! We'll be in touch soon."})]}):S.jsx("div",{className:"cbw-lead-card",children:S.jsxs("form",{onSubmit:h,className:"cbw-lead-form",children:[s&&S.jsx("div",{className:"cbw-lead-error",role:"alert",children:s}),S.jsx("div",{className:"cbw-lead-input-group",children:S.jsx("input",{type:"text",className:"cbw-lead-input",placeholder:"Your Name (Optional)",value:n,onChange:m=>r(m.target.value),disabled:i==="submitting","aria-label":"Your Name"})}),S.jsx("div",{className:"cbw-lead-input-group",children:S.jsx("input",{type:"email",className:"cbw-lead-input",placeholder:"Your Email *",value:l,onChange:m=>o(m.target.value),disabled:i==="submitting","aria-label":"Your Email",required:!0})}),S.jsx("button",{type:"submit",className:"cbw-lead-submit",disabled:i==="submitting"||!l.trim(),style:{backgroundColor:t},children:i==="submitting"?"Sending...":"Send Details"})]})})}function Zd({msg:e,primaryColor:t,botName:n="Justo Genie",onLeadSubmit:r}){const l=e.role==="user";return S.jsxs("div",{className:`cbw-message-wrap ${l?"cbw-user":"cbw-bot"}`,role:"listitem",children:[!l&&S.jsx("div",{className:"cbw-avatar","aria-hidden":"true",children:n.charAt(0).toUpperCase()}),S.jsxs("div",{className:"cbw-bubble-group",children:[e.message&&S.jsx("div",{className:"cbw-bubble",role:l?"note":"article",children:e.message}),e.type==="navigation"&&e.actions&&e.actions.length>0&&S.jsx("div",{className:"cbw-actions",role:"group","aria-label":"Navigation options",children:e.actions.map((o,i)=>S.jsxs("button",{className:"cbw-action-btn",onClick:()=>nr(o.url,o.external),"aria-label":`${o.label}${o.external?" (opens in new tab)":""}`,children:[S.jsx("span",{"aria-hidden":"true",children:o.external?"↗":"→"}),o.label]},i))}),e.type==="card"&&e.card&&S.jsxs("div",{className:"cbw-card",onClick:()=>nr(e.card.url,e.card.external),role:"button",tabIndex:0,"aria-label":`${e.card.title}${e.card.external?" (opens in new tab)":""}`,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),nr(e.card.url,e.card.external))},children:[e.card.image&&S.jsx("img",{className:"cbw-card-img",src:e.card.image,alt:e.card.title||"Card image",loading:"lazy"}),S.jsxs("div",{className:"cbw-card-body",children:[e.card.title&&S.jsx("div",{className:"cbw-card-title",children:e.card.title}),e.card.description&&S.jsx("div",{className:"cbw-card-desc",children:e.card.description}),S.jsxs("span",{className:"cbw-card-link",children:["View ",e.card.external?"↗":"→"]})]})]}),e.type==="list"&&e.items&&e.items.length>0&&S.jsx("div",{className:"cbw-list",role:"list","aria-label":"List options",children:e.items.map((o,i)=>S.jsxs("div",{className:"cbw-list-item",onClick:()=>nr(o.url,o.external),role:"listitem button",tabIndex:0,"aria-label":`${o.label}${o.external?" (opens in new tab)":""}`,onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),nr(o.url,o.external))},children:[S.jsx("span",{children:o.label}),S.jsx("span",{className:"cbw-list-arrow","aria-hidden":"true",children:o.external?"↗":"→"})]},i))}),e.type==="lead_capture"&&S.jsx(Jd,{primaryColor:t,onSubmit:r})]})]})}function qd({botName:e="Justo Genie"}){return S.jsxs("div",{className:"cbw-typing",role:"status","aria-label":"Bot is typing",children:[S.jsx("div",{className:"cbw-avatar","aria-hidden":"true",children:e.charAt(0).toUpperCase()}),S.jsxs("div",{className:"cbw-typing-dots","aria-hidden":"true",children:[S.jsx("span",{className:"cbw-dot"}),S.jsx("span",{className:"cbw-dot"}),S.jsx("span",{className:"cbw-dot"})]})]})}function ep(){return S.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[S.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),S.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})}function tp({messages:e,loading:t,onSend:n,onClose:r,onClear:l,onLeadSubmit:o,botName:i="Justo Genie",primaryColor:u="#1271DA"}){var d,a;const[s,c]=O.useState(""),h=O.useRef(null),m=O.useRef(null),p=O.useRef(null);O.useEffect(()=>{m.current&&m.current.scrollIntoView({behavior:"smooth"})},[e,t]),O.useEffect(()=>{const f=setTimeout(()=>{h.current&&h.current.focus()},100);return()=>clearTimeout(f)},[]);const y=O.useCallback(f=>{const g=f.target;c(g.value),g.style.height="auto",g.style.height=Math.min(g.scrollHeight,100)+"px"},[]),x=O.useCallback(f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),k())},[s,t]),k=O.useCallback(()=>{const f=s.trim();!f||t||(n(f),c(""),h.current&&(h.current.style.height="auto",h.current.focus()))},[s,t,n]),L=O.useCallback(()=>{l(),h.current&&h.current.focus()},[l]);return S.jsxs("div",{className:"cbw-window",role:"dialog","aria-label":`Chat with ${i}`,children:[S.jsxs("div",{className:"cbw-header",children:[S.jsxs("div",{className:"cbw-header-left",children:[S.jsx("div",{className:"cbw-header-avatar","aria-hidden":"true",children:i.charAt(0).toUpperCase()}),S.jsxs("div",{className:"cbw-header-info",children:[S.jsx("div",{className:"cbw-header-name",children:i}),S.jsxs("div",{className:"cbw-header-status",children:[S.jsx("span",{className:"cbw-status-dot","aria-hidden":"true"}),"Online · Ready to help"]})]})]}),S.jsxs("div",{className:"cbw-header-actions",children:[S.jsx("button",{className:"cbw-icon-btn",onClick:L,"aria-label":"Start new conversation",title:"New conversation",children:"✦"}),S.jsx("button",{className:"cbw-icon-btn",onClick:r,"aria-label":"Close chat",title:"Close",children:"✕"})]})]}),S.jsxs("div",{className:"cbw-messages",ref:p,role:"list","aria-label":"Chat messages","aria-live":"polite","aria-relevant":"additions",children:[S.jsx("div",{className:"cbw-date-divider","aria-hidden":"true",children:"Today"}),e.map(f=>S.jsx(Zd,{msg:f,primaryColor:u,botName:i,onLeadSubmit:o},f.id)),t&&!(((d=e.at(-1))==null?void 0:d.role)==="assistant"&&((a=e.at(-1))==null?void 0:a.message)==="")&&S.jsx(qd,{botName:i}),S.jsx("div",{ref:m,"aria-hidden":"true"})]}),S.jsxs("div",{className:"cbw-input-area",children:[S.jsx("textarea",{ref:h,className:"cbw-input",value:s,onChange:y,onKeyDown:x,placeholder:t?`${i} is typing…`:"Type a message…",disabled:t,rows:1,"aria-label":"Message input","aria-multiline":"true","aria-disabled":t}),S.jsx("button",{className:"cbw-send-btn",onClick:k,disabled:t||!s.trim(),"aria-label":"Send message",title:"Send",children:S.jsx(ep,{})})]}),S.jsxs("div",{className:"cbw-footer",children:["Powered by"," ",S.jsx("a",{href:"http://localhost:5173/#",target:"_blank",rel:"noopener noreferrer",tabIndex:-1,children:"The Sparkz"})]})]})}function np(){return S.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:S.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}function rp({config:e={},shadow:t=null}){const{apiKey:n,botName:r="Justo Genie",primaryColor:l="#1271DA",position:o="bottom-right"}=e,[i,u]=O.useState(!1),[s,c]=O.useState(0),{messages:h,loading:m,sendMessage:p,clearMessages:y,submitLeadInfo:x}=Gd(e);O.useEffect(()=>{const g=Xd(l),w=document.createElement("style");if(w.textContent=g,t)w.setAttribute("data-cbw","true"),t.appendChild(w);else{w.id="cbw-styles";const _=document.getElementById("cbw-styles");_&&_.remove(),document.head.appendChild(w)}return()=>{w.remove()}},[l,t]),O.useEffect(()=>{const g=document.querySelector(".widget-notice");g&&(o==="bottom-left"?(g.style.right="auto",g.style.left="24px",g.innerHTML="← Try the chat widget!"):(g.style.left="auto",g.style.right="24px",g.innerHTML="Try the chat widget! →"))},[o]),O.useEffect(()=>{if(!i){const g=h.filter(w=>w.role==="assistant"&&w.id!=="welcome").length;c(g)}},[h,i]);const k=O.useCallback(()=>{u(!0),c(0)},[]),L=O.useCallback(()=>{u(!1)},[]),d=O.useCallback(()=>{i?L():k()},[i,k,L]),a=O.useCallback(()=>{y(),c(0)},[y]),f=o==="bottom-left"?{bottom:24,left:24}:{bottom:24,right:24};return S.jsxs("div",{className:"cbw-root",style:f,role:"complementary","aria-label":"Chat widget",children:[i&&S.jsx(tp,{messages:h,loading:m,onSend:p,onClose:L,onClear:a,onLeadSubmit:x,botName:r,primaryColor:l}),S.jsxs("button",{className:`cbw-bubble-btn${i?" cbw-bubble-open":""}`,onClick:d,"aria-expanded":i,"aria-label":i?"Close chat":`Chat with ${r}`,"aria-haspopup":"dialog",children:[S.jsx("span",{className:"cbw-bubble-icon cbw-icon-chat",children:S.jsx(np,{})}),S.jsx("span",{className:"cbw-bubble-icon cbw-icon-close","aria-hidden":"true",children:"✕"}),!i&&s>0&&S.jsx("span",{className:"cbw-badge","aria-label":`${s} unread messages`,children:s>99?"99+":s})]})]})}(function(){async function e(){const t=document.currentScript||document.querySelector('script[src*="widget.js"]');let n=t?t.getAttribute("data-api-key"):null;const r=window.ChatbotConfig||{};if(n=n||r.apiKey,!n){console.error("[ChatbotWidget] API Key is required. Please set data-api-key on the widget.js script tag.");return}let l={};try{const h=await fetch(`http://localhost:4000/api/widget/config?apiKey=${n}`);h.ok?l=await h.json():console.warn("[ChatbotWidget] Failed to load config from server.")}catch(c){console.error("[ChatbotWidget] Network error fetching widget config:",c)}const o={apiKey:n,botName:l.botName||r.botName||"Justo Genie",primaryColor:l.primaryColor||r.primaryColor||"#1271DA",position:l.position||r.position||"bottom-right"};if(document.getElementById("cbw-host")){console.warn("[ChatbotWidget] Widget already mounted. Skipping.");return}const i=document.createElement("div");i.id="cbw-host",i.style.cssText="all: initial; position: fixed; z-index: 2147483647;",document.body.appendChild(i);let u;try{u=i.attachShadow({mode:"open"})}catch(c){console.warn("[ChatbotWidget] Shadow DOM not supported, falling back to regular DOM.",c),u=i}const s=document.createElement("div");s.id="cbw-shadow-root",u.appendChild(s),Pl.createRoot(s).render(zc.createElement(rp,{config:o,shadow:u}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})()});
