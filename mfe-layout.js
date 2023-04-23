/*! For license information please see mfe-layout.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,n){var t={},r={};return Object.defineProperty(t,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(n){t[n]=e[n]}))},function(e){r.default=e.default}],execute:function(){e((()=>{var e={387:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(15),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #2d3036;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 1rem;\n}\n\n.mfe-layout-header {\n  color: whitesmoke;\n  box-shadow: 0 1px 10px 1px #1e1f22;\n  font-weight: 700;\n  text-align: center;\n  padding: 0.8rem 1rem;\n  height: 3rem;\n}\n\n#main-content {\n  height: 100%;\n  max-height: calc(100vh - 3rem);\n  flex: 1 1 0;\n  overflow-y: scroll;\n}\n\n.mfe-layout-center {\n  display: flex;\n}\n\n.mfe-layout-menu {\n  display: flex;\n  flex-direction: column;\n  background: #1f2126;\n}\n\n.mfe-layout-menu-item {\n  transition-property: all;\n  transition-duration: 750ms;\n  cursor: pointer;\n  background: inherit;\n  color: whitesmoke;\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  outline: none;\n  border: none;\n}\n\n.mfe-layout-menu-item:hover {\n  transition-duration: 150ms;\n  background: #46484d;\n  outline: none;\n}\n\n.scrollbar::-webkit-scrollbar {\n  width: 15px;\n}\n\n.scrollbar::-webkit-scrollbar-track {\n  border: none;\n  background: #2d3036;\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  border: none;\n  background: #1f2126;\n}\n\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  border: none;\n  background: #1f2126;\n}\n","",{version:3,sources:["webpack://./src/layout.css"],names:[],mappings:"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,gDAAgD;EAChD,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,kCAAkC;EAClC,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,8BAA8B;EAC9B,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,gDAAgD;EAChD,aAAa;EACb,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #2d3036;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 1rem;\n}\n\n.mfe-layout-header {\n  color: whitesmoke;\n  box-shadow: 0 1px 10px 1px #1e1f22;\n  font-weight: 700;\n  text-align: center;\n  padding: 0.8rem 1rem;\n  height: 3rem;\n}\n\n#main-content {\n  height: 100%;\n  max-height: calc(100vh - 3rem);\n  flex: 1 1 0;\n  overflow-y: scroll;\n}\n\n.mfe-layout-center {\n  display: flex;\n}\n\n.mfe-layout-menu {\n  display: flex;\n  flex-direction: column;\n  background: #1f2126;\n}\n\n.mfe-layout-menu-item {\n  transition-property: all;\n  transition-duration: 750ms;\n  cursor: pointer;\n  background: inherit;\n  color: whitesmoke;\n  padding: 0.7rem 0.8rem;\n  text-align: left;\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  outline: none;\n  border: none;\n}\n\n.mfe-layout-menu-item:hover {\n  transition-duration: 150ms;\n  background: #46484d;\n  outline: none;\n}\n\n.scrollbar::-webkit-scrollbar {\n  width: 15px;\n}\n\n.scrollbar::-webkit-scrollbar-track {\n  border: none;\n  background: #2d3036;\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  border: none;\n  background: #1f2126;\n}\n\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  border: none;\n  background: #1f2126;\n}\n"],sourceRoot:""}]);const s=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},15:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},418:e=>{"use strict";var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))t.call(a,u)&&(s[u]=a[u]);if(n){i=n(a);for(var l=0;l<i.length;l++)r.call(a,i[l])&&(s[i[l]]=a[i[l]])}}return s}},251:(e,n,t)=>{"use strict";t(418);var r=t(954),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),n.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,a={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}n.jsx=u,n.jsxs=u},893:(e,n,t)=>{"use strict";e.exports=t(251)},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var m=t(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(d);else{var f=o(d,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},722:(e,n,t)=>{const r=t(905).R;n.s=function(e){if(e||(e=1),!t.y.meta||!t.y.meta.url)throw console.error("__system_context__",t.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");t.p=r(t.y.meta.url,e)}},905:(e,n,t)=>{n.R=function(e,n){var t=document.createElement("a");t.href=e;for(var r="/"===t.pathname[0]?t.pathname:"/"+t.pathname,o=0,a=r.length;o!==n&&a>=0;)"/"===r[--a]&&o++;if(o!==n)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+n+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return t.protocol+"//"+t.host+i};Number.isInteger},954:e=>{"use strict";e.exports=t},493:e=>{"use strict";e.exports=r}},o={};function a(n){var t=o[n];if(void 0!==t)return t.exports;var r=o[n]={id:n,exports:{}};return e[n](r,r.exports,a),r.exports}a.y=n,a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="",a.nc=void 0;var i={};return(0,a(722).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>D,mount:()=>M,unmount:()=>N});var e=a(954),n=a(493);function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){var t;if("function"!=typeof(t=n.domElement?function(){return n.domElement}:n.domElementGetter?n.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var n=e.appName||e.name;if(!n)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var t="single-spa-application:".concat(n);return function(){var e=document.getElementById(t);return e||((e=document.createElement("div")).id=t,document.body.appendChild(e)),e}}(n)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(n.name,"'. Expected a function, received ").concat(c(t)));return function(){var e=t(n);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(n.name,"'. Expected HTMLElement, received ").concat(c(e)));return e}}var l=null;try{l=require("react").createContext()}catch(t){}var p={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function m(e,n){return e.rootComponent?Promise.resolve():e.loadRootComponent(n).then((function(n){e.rootComponent=n}))}function d(e,n){return new Promise((function(t,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var n=e.version.slice(0,e.version.indexOf("."));try{return Number(n)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=A(e,n,(function(){t(this)})),a=u(e,n)(),i=function(e){var n=e.opts,t=e.elementToRender,r=e.domElement,o="function"==typeof n.renderType?n.renderType():n.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=n.ReactDOM[o](r);return a.render(t),a}return"hydrate"===o?n.ReactDOM.hydrate(t,r):n.ReactDOM.render(t,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[n.name]=a,e.renderResults[n.name]=i}))}function f(e,n){return new Promise((function(t){e.unmountFinished=t;var r=e.renderResults[n.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[n.name]),delete e.domElements[n.name],delete e.renderResults[n.name]}))}function y(e,n){return new Promise((function(t){e.updateResolves[n.name]||(e.updateResolves[n.name]=[]),e.updateResolves[n.name].push(t);var r=A(e,n,null),o=e.renderResults[n.name];if(o&&o.render)o.render(r);else{var a=u(e,n)();e.ReactDOM.render(r,a)}}))}function A(e,n,t){var o=e.React.createElement(e.rootComponent,n),a=l?e.React.createElement(l.Provider,{value:n},o):o;return(e.errorBoundary||n.errorBoundary||e.errorBoundaryClass||n.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||n.errorBoundaryClass||function(e,n){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||n.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,n){this.setState({caughtError:e,caughtErrorInfo:n})},t}(e,n),a=e.React.createElement(e.errorBoundaryClass,n,a)),e.React.createElement(e.SingleSpaRoot,r(r({},n),{},{mountFinished:t,updateFinished:function(){e.updateResolves[n.name]&&(e.updateResolves[n.name].forEach((function(e){return e()})),delete e.updateResolves[n.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}var h=a(379),b=a.n(h),g=a(795),v=a.n(g),E=a(569),C=a.n(E),B=a(565),w=a.n(B),x=a(216),O=a.n(x),R=a(589),j=a.n(R),S=a(387),k={};k.styleTagTransform=j(),k.setAttributes=w(),k.insert=C().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=O(),b()(S.Z,k),S.Z&&S.Z.locals&&S.Z.locals;var T=a(893),P=function(){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("header",{className:"mfe-layout-header",children:"Gerenciador de microfrontends"}),(0,T.jsxs)("div",{className:"mfe-layout-center",children:[(0,T.jsxs)("aside",{className:"mfe-layout-menu",children:[(0,T.jsx)("button",{type:"button",className:"mfe-layout-menu-item",children:"Éris"}),(0,T.jsx)("button",{type:"button",className:"mfe-layout-menu-item",children:"Preferências"})]}),(0,T.jsx)("main",{id:"main-content"})]})]})},_=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var n=r(r({},p),e);if(!n.React)throw new Error("single-spa-react must be passed opts.React");if(!n.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!n.rootComponent&&!n.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(n.errorBoundary&&"function"!=typeof n.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!l&&n.React.createContext&&(l=n.React.createContext()),n.SingleSpaRoot=function(e){function n(e){n.displayName="SingleSpaRoot(".concat(e.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},n.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},n.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},n}(n);var t={bootstrap:m.bind(null,n),mount:d.bind(null,n),unmount:f.bind(null,n)};return n.parcelCanUpdate&&(t.update=y.bind(null,n)),t}({React:e.default,ReactDOM:n.default,rootComponent:function(e){return console.log(e.singleSpa),(0,T.jsx)(P,{})},errorBoundary:function(){return null}}),D=_.bootstrap,M=_.mount,N=_.unmount})(),i})())}}}));
//# sourceMappingURL=mfe-layout.js.map