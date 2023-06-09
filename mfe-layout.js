/*! For license information please see mfe-layout.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,n){var t={},r={};return Object.defineProperty(t,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(n){t[n]=e[n]}))},function(e){r.default=e.default}],execute:function(){e((()=>{var e={418:e=>{"use strict";var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var A,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in A=Object(arguments[c]))t.call(A,s)&&(i[s]=A[s]);if(n){a=n(A);for(var d=0;d<a.length;d++)r.call(A,a[d])&&(i[a[d]]=A[a[d]])}}return i}},251:(e,n,t)=>{"use strict";t(418);var r=t(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var A=Symbol.for;o=A("react.element"),A("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};n.jsx=function(e,n,t){var r,A={},s=null,d=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(A[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===A[r]&&(A[r]=n[r]);return{$$typeof:o,type:e,key:s,ref:d,props:A,_owner:a.current}}},893:(e,n,t)=>{"use strict";e.exports=t(251)},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var A={},a=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],d=A[s]||0,l="".concat(s," ").concat(d);A[s]=d+1;var u=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=o(p,r);r.byIndex=i,n.splice(i,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var A=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<A.length;a++){var i=t(A[a]);n[i].references--}for(var c=r(e,o),s=0;s<A.length;s++){var d=t(A[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}A=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},722:(e,n,t)=>{const r=t(905).R;n.s=function(e){if(e||(e=1),!t.y.meta||!t.y.meta.url)throw console.error("__system_context__",t.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");t.p=r(t.y.meta.url,e)}},905:(e,n,t)=>{n.R=function(e,n){var t=document.createElement("a");t.href=e;for(var r="/"===t.pathname[0]?t.pathname:"/"+t.pathname,o=0,A=r.length;o!==n&&A>=0;)"/"===r[--A]&&o++;if(o!==n)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+n+") is greater than the number of directories ("+o+") in the URL path "+e);var a=r.slice(0,A+1);return t.protocol+"//"+t.host+a};Number.isInteger},415:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(658),o=t.n(r),A=t(118),a=t.n(A)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),a.push([e.id,'/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.absolute {\n  position: absolute;\n}\n.left-0 {\n  left: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.z-\\[999\\] {\n  z-index: 999;\n}\n.flex {\n  display: flex;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-\\[100vh\\] {\n  max-height: 100vh;\n}\n.min-h-\\[100vh\\] {\n  min-height: 100vh;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-\\[100vw\\] {\n  min-width: 100vw;\n}\n.max-w-\\[100vw\\] {\n  max-width: 100vw;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.text-\\[32px\\] {\n  font-size: 32px;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\nbody {\n  font-family: "Inter", sans-serif;\n}\n\n.scrollbar::-webkit-scrollbar {\n  width: 15px;\n}\n\n.scrollbar::-webkit-scrollbar-track {\n  border: none;\n  background: #dfdfdf;\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  border: none;\n  background: #8f8f8f;\n}\n\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  border: none;\n  background: #8f8f8f;\n}\n',"",{version:3,sources:["webpack://./src/tailwind.css"],names:[],mappings:"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",sourcesContent:['@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");\n\nbody {\n  font-family: "Inter", sans-serif;\n}\n\n.scrollbar::-webkit-scrollbar {\n  width: 15px;\n}\n\n.scrollbar::-webkit-scrollbar-track {\n  border: none;\n  background: #dfdfdf;\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  border: none;\n  background: #8f8f8f;\n}\n\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  border: none;\n  background: #8f8f8f;\n}\n'],sourceRoot:""}]);const i=a},118:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var A=0;A<this.length;A++){var a=this[A][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},658:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,o=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var r,o,A=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(A.push(r.value),!n||A.length!==n);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return A}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=o[1],a=o[3];if(!a)return A;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(c," */"),d=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[A].concat(d).concat([s]).join("\n")}return[A].join("\n")}},954:e=>{"use strict";e.exports=t},493:e=>{"use strict";e.exports=r}},o={};function A(n){var t=o[n];if(void 0!==t)return t.exports;var r=o[n]={id:n,exports:{}};return e[n](r,r.exports,A),r.exports}A.y=n,A.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return A.d(n,{a:n}),n},A.d=(e,n)=>{for(var t in n)A.o(n,t)&&!A.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},A.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),A.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.p="",A.nc=void 0;var a={};return(0,A(722).s)(1),(()=>{"use strict";A.r(a),A.d(a,{bootstrap:()=>Ae,mount:()=>ae,unmount:()=>ie});var e=A(954),n=A(493);function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){var t;if("function"!=typeof(t=n.domElement?function(){return n.domElement}:n.domElementGetter?n.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var n=e.appName||e.name;if(!n)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var t="single-spa-application:".concat(n);return function(){var e=document.getElementById(t);return e||((e=document.createElement("div")).id=t,document.body.appendChild(e)),e}}(n)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(n.name,"'. Expected a function, received ").concat(c(t)));return function(){var e=t(n);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(n.name,"'. Expected HTMLElement, received ").concat(c(e)));return e}}var d=null;try{d=require("react").createContext()}catch(t){}var l={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function u(e,n){return e.rootComponent?Promise.resolve():e.loadRootComponent(n).then((function(n){e.rootComponent=n}))}function p(e,n){return new Promise((function(t,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var n=e.version.slice(0,e.version.indexOf("."));try{return Number(n)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(n.name||n.appName||n.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=h(e,n,(function(){t(this)})),A=s(e,n)(),a=function(e){var n=e.opts,t=e.elementToRender,r=e.domElement,o="function"==typeof n.renderType?n.renderType():n.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var A=n.ReactDOM[o](r);return A.render(t),A}return"hydrate"===o?n.ReactDOM.hydrate(t,r):n.ReactDOM.render(t,r),null}({elementToRender:o,domElement:A,opts:e});e.domElements[n.name]=A,e.renderResults[n.name]=a}))}function f(e,n){return new Promise((function(t){e.unmountFinished=t;var r=e.renderResults[n.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[n.name]),delete e.domElements[n.name],delete e.renderResults[n.name]}))}function m(e,n){return new Promise((function(t){e.updateResolves[n.name]||(e.updateResolves[n.name]=[]),e.updateResolves[n.name].push(t);var r=h(e,n,null),o=e.renderResults[n.name];if(o&&o.render)o.render(r);else{var A=s(e,n)();e.ReactDOM.render(r,A)}}))}function h(e,n,t){var o=e.React.createElement(e.rootComponent,n),A=d?e.React.createElement(d.Provider,{value:n},o):o;return(e.errorBoundary||n.errorBoundary||e.errorBoundaryClass||n.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||n.errorBoundaryClass||function(e,n){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||n.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,n){this.setState({caughtError:e,caughtErrorInfo:n})},t}(e,n),A=e.React.createElement(e.errorBoundaryClass,n,A)),e.React.createElement(e.SingleSpaRoot,r(r({},n),{},{mountFinished:t,updateFinished:function(){e.updateResolves[n.name]&&(e.updateResolves[n.name].forEach((function(e){return e()})),delete e.updateResolves[n.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),A)}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var E,g,y=A(893),w=function(){var n=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,A,a,i=[],c=!0,s=!1;try{if(A=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=A.call(t)).done)&&(i.push(r.value),i.length!==n);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,e.useState)(!1),2),t=n[0],r=n[1],o=(0,e.useRef)(!0);return(0,e.useEffect)((function(){t&&o.current&&(o.current=!1)}),[t]),t?(0,y.jsx)("div",{}):(0,y.jsx)("div",{className:"min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] flex items-center justify-center bg-black overflow-hidden absolute top-0 left-0 z-[999]",children:(0,y.jsx)("button",{type:"button",className:"text-white text-[32px] uppercase w-full h-screen",onClick:function(){r(!0)},children:"Clique para continuar"})})};function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}(g=E||(E={})).Pop="POP",g.Push="PUSH",g.Replace="REPLACE";const B="popstate";function C(e,n){if(!1===e||null==e)throw new Error(n)}function x(e,n){return{usr:e.state,key:e.key,idx:n}}function S(e,n,t,r){return void 0===t&&(t=null),v({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof n?R(n):n,{state:t,key:n&&n.key||r||Math.random().toString(36).substr(2,8)})}function k(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&"?"!==t&&(n+="?"===t.charAt(0)?t:"?"+t),r&&"#"!==r&&(n+="#"===r.charAt(0)?r:"#"+r),n}function R(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}var O;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(O||(O={})),new Set(["lazy","caseSensitive","path","id","index","children"]);class j extends Error{}const M=["post","put","patch","delete"],P=(new Set(M),["get",...M]);new Set(P),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred");const U=e.createContext(null),_=e.createContext(null);class z extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||"idle"!==n.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?React.createElement(RouteContext.Provider,{value:this.props.routeContext},React.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}var I,T,D,N,L;function F(n){let{basename:t="/",children:r=null,location:o,navigationType:A=E.Pop,navigator:a,static:i=!1}=n;null!=e.useContext(_)&&C(!1);let c=t.replace(/^\/*/,"/"),s=e.useMemo((()=>({basename:c,navigator:a,static:i})),[c,a,i]);"string"==typeof o&&(o=R(o));let{pathname:d="/",search:l="",hash:u="",state:p=null,key:f="default"}=o,m=e.useMemo((()=>{let e=function(e,n){if("/"===n)return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&"/"!==r?null:e.slice(t)||"/"}(d,c);return null==e?null:{location:{pathname:e,search:l,hash:u,state:p,key:f},navigationType:A}}),[c,d,l,u,p,f,A]);return null==m?null:e.createElement(U.Provider,{value:s},e.createElement(_.Provider,{children:r,value:m}))}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"}(I||(I={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"}(T||(T={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(D||(D={})),new Promise((()=>{}));class q extends e.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("<Await> caught the following error during render",e,n)}render(){let{children:e,errorElement:n,resolve:t}=this.props,r=null,o=D.pending;if(t instanceof Promise)if(this.state.error){D.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else t._tracked?void 0!==r._error?D.error:void 0!==r._data?D.success:D.pending:(D.pending,Object.defineProperty(t,"_tracked",{get:()=>!0}),t.then((e=>Object.defineProperty(t,"_data",{get:()=>e})),(e=>Object.defineProperty(t,"_error",{get:()=>e}))));else D.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>t});if(o===D.error&&r._error instanceof AbortedDeferredError)throw neverSettledPromise;if(o===D.error&&!n)throw r._error;if(o===D.error)return React.createElement(AwaitContext.Provider,{value:r,children:n});if(o===D.success)return React.createElement(AwaitContext.Provider,{value:r,children:e});throw r}}function Y(n){let{basename:t,children:r,window:o}=n,A=e.useRef();null==A.current&&(A.current=function(e){return void 0===e&&(e={}),function(e,n,t,r){void 0===r&&(r={});let{window:o=document.defaultView,v5Compat:A=!1}=r,a=o.history,i=E.Pop,c=null,s=d();function d(){return(a.state||{idx:null}).idx}function l(){i=E.Pop;let e=d(),n=null==e?null:e-s;s=e,c&&c({action:i,location:p.location,delta:n})}function u(e){let n="null"!==o.location.origin?o.location.origin:o.location.href,t="string"==typeof e?e:k(e);return C(n,"No window.location.(origin|href) available to create URL for href: "+t),new URL(t,n)}null==s&&(s=0,a.replaceState(v({},a.state,{idx:s}),""));let p={get action(){return i},get location(){return e(o,a)},listen(e){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(B,l),c=e,()=>{o.removeEventListener(B,l),c=null}},createHref:e=>n(o,e),createURL:u,encodeLocation(e){let n=u(e);return{pathname:n.pathname,search:n.search,hash:n.hash}},push:function(e,n){i=E.Push;let r=S(p.location,e,n);t&&t(r,e),s=d()+1;let l=x(r,s),u=p.createHref(r);try{a.pushState(l,"",u)}catch(e){o.location.assign(u)}A&&c&&c({action:i,location:p.location,delta:1})},replace:function(e,n){i=E.Replace;let r=S(p.location,e,n);t&&t(r,e),s=d();let o=x(r,s),l=p.createHref(r);a.replaceState(o,"",l),A&&c&&c({action:i,location:p.location,delta:0})},go:e=>a.go(e)};return p}((function(e,n){let{pathname:t,search:r,hash:o}=e.location;return S("",{pathname:t,search:r,hash:o},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}),(function(e,n){return"string"==typeof n?n:k(n)}),null,e)}({window:o,v5Compat:!0}));let a=A.current,[i,c]=e.useState({action:a.action,location:a.location});return e.useLayoutEffect((()=>a.listen(c)),[a]),e.createElement(F,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:a})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(N||(N={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(L||(L={}));var H=A(379),W=A.n(H),G=A(795),Z=A.n(G),$=A(569),J=A.n($),K=A(565),V=A.n(K),Q=A(216),X=A.n(Q),ee=A(589),ne=A.n(ee),te=A(415),re={};re.styleTagTransform=ne(),re.setAttributes=V(),re.insert=J().bind(null,"head"),re.domAPI=Z(),re.insertStyleElement=X(),W()(te.Z,re),te.Z&&te.Z.locals&&te.Z.locals;var oe=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var n=r(r({},l),e);if(!n.React)throw new Error("single-spa-react must be passed opts.React");if(!n.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!n.rootComponent&&!n.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(n.errorBoundary&&"function"!=typeof n.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!d&&n.React.createContext&&(d=n.React.createContext()),n.SingleSpaRoot=function(e){function n(e){n.displayName="SingleSpaRoot(".concat(e.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},n.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},n.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},n}(n);var t={bootstrap:u.bind(null,n),mount:p.bind(null,n),unmount:f.bind(null,n)};return n.parcelCanUpdate&&(t.update=m.bind(null,n)),t}({React:e.default,ReactDOM:n.default,rootComponent:function(e){return console.log(e.singleSpa),(0,y.jsx)(Y,{children:(0,y.jsx)(w,{})})},errorBoundary:function(){return null}}),Ae=oe.bootstrap,ae=oe.mount,ie=oe.unmount})(),a})())}}}));
//# sourceMappingURL=mfe-layout.js.map