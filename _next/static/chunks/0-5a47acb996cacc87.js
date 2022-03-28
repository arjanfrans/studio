(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{7357:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(7462),o=r(3366),a=r(7294),i=r(6010),u=r(561),c=r(6523),l=r(9707),s=r(9718),f=r(5893);const p=["className","component"];var d=r(8076);const m=function(e={}){const{defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:d,styleFunctionSx:m=c.Z}=e,y=(0,u.ZP)("div")(m);return a.forwardRef((function(e,a){const u=(0,s.Z)(t),c=(0,l.Z)(e),{className:m,component:h="div"}=c,v=(0,o.Z)(c,p);return(0,f.jsx)(y,(0,n.Z)({as:h,ref:a,className:(0,i.Z)(m,d?d(r):r),theme:u},v))}))}({defaultTheme:(0,r(4551).Z)(),defaultClassName:"MuiBox-root",generateClassName:d.Z.generate});var y=m},122:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),u=r(7192),c=r(4844),l=r(1796),s=r(8216),f=r(1496),p=r(7623),d=r(8791),m=r(3167),y=r(5861),h=r(8979);function v(e){return(0,h.Z)("MuiLink",e)}var g=(0,r(6087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),b=r(5893);const Z=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=(0,f.ZP)(y.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`underline${(0,s.Z)(r.underline)}`],"button"===r.component&&t.button]}})((({theme:e,ownerState:t})=>{const r=(0,c.D)(e,`palette.${(e=>w[e]||e)(t.color)}`)||t.color;return(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,l.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.focusVisible}`]:{outline:"auto"}})}));var M=a.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiLink"}),{className:c,color:l="primary",component:f="a",onBlur:y,onFocus:h,TypographyClasses:g,underline:w="always",variant:M="inherit"}=r,C=(0,n.Z)(r,Z),{isFocusVisibleRef:S,onBlur:E,onFocus:L,ref:k}=(0,d.Z)(),[A,N]=a.useState(!1),R=(0,m.Z)(t,k),B=(0,o.Z)({},r,{color:l,component:f,focusVisible:A,underline:w,variant:M}),T=(e=>{const{classes:t,component:r,focusVisible:n,underline:o}=e,a={root:["root",`underline${(0,s.Z)(o)}`,"button"===r&&"button",n&&"focusVisible"]};return(0,u.Z)(a,v,t)})(B);return(0,b.jsx)(x,(0,o.Z)({className:(0,i.Z)(T.root,c),classes:g,color:l,component:f,onBlur:e=>{E(e),!1===S.current&&N(!1),y&&y(e)},onFocus:e=>{L(e),!0===S.current&&N(!0),h&&h(e)},ref:R,ownerState:B,variant:M},C))}))},5861:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),u=r(9707),c=r(7192),l=r(1496),s=r(7623),f=r(8216),p=r(8979);function d(e){return(0,p.Z)("MuiTypography",e)}(0,r(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(5893);const y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,f.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=a.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiTypography"}),a=(e=>g[e]||e)(r.color),l=(0,u.Z)((0,o.Z)({},r,{color:a})),{align:p="inherit",className:b,component:Z,gutterBottom:w=!1,noWrap:x=!1,paragraph:M=!1,variant:C="body1",variantMapping:S=v}=l,E=(0,n.Z)(l,y),L=(0,o.Z)({},l,{align:p,color:a,className:b,component:Z,gutterBottom:w,noWrap:x,paragraph:M,variant:C,variantMapping:S}),k=Z||(M?"p":S[C]||v[C])||"span",A=(e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:a,classes:i}=e,u={root:["root",a,"inherit"!==e.align&&`align${(0,f.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,c.Z)(u,d,i)})(L);return(0,m.jsx)(h,(0,o.Z)({as:k,ref:t,ownerState:L,className:(0,i.Z)(A.root,b)},E))}))},3167:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7294);function o(e,t){"function"===typeof e?e(t):e&&(e.current=t)}var a=function(e,t){return n.useMemo((()=>null==e&&null==t?null:r=>{o(e,r),o(t,r)}),[e,t])}},8791:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294);let o,a=!0,i=!1;const u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function l(){a=!1}function s(){"hidden"===this.visibilityState&&i&&(a=!0)}function f(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(r){}return a||function(e){const{type:t,tagName:r}=e;return!("INPUT"!==r||!u[t]||e.readOnly)||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}var p=function(){const e=n.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",c,!0),t.addEventListener("mousedown",l,!0),t.addEventListener("pointerdown",l,!0),t.addEventListener("touchstart",l,!0),t.addEventListener("visibilitychange",s,!0))}),[]),t=n.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!f(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(i=!0,window.clearTimeout(o),o=window.setTimeout((()=>{i=!1}),100),t.current=!1,!0)},ref:e}}},9707:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7462),o=r(3366),a=r(9766),i=r(8528);const u=["sx"];function c(e){const{sx:t}=e,r=(0,o.Z)(e,u),{systemProps:c,otherProps:l}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((r=>{i.Gc[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]})),t})(r);let s;return s=Array.isArray(t)?[c,...t]:"function"===typeof t?(...e)=>{const r=t(...e);return(0,a.P)(r)?(0,n.Z)({},c,r):c}:(0,n.Z)({},c,t),(0,n.Z)({},l,{sx:s})}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},u=r(1003),c=r(880),l=r(9246);var s={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=i.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),p=a.href,d=a.as,m=e.children,y=e.replace,h=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,Z=o(l.useIntersection({rootMargin:"200px"}),2),w=Z[0],x=Z[1],M=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=x&&r&&u.isLocalURL(p),t="undefined"!==typeof g?g:n&&n.locale,o=s[p+"%"+d+(t?"%"+t:"")];e&&!o&&f(n,p,d,{locale:t})}),[d,p,x,g,r,n]);var C={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:i}))}(e,n,p,d,y,h,v,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(p)&&f(n,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof g?g:n&&n.locale,E=n&&n.isLocaleDomain&&u.getDomainLocale(d,S,n&&n.locales,n&&n.domainLocales);C.href=E||u.addBasePath(u.addLocale(d,S,n&&n.defaultLocale))}return i.default.cloneElement(t,C)};t.default=p},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),p=f[0],d=f[1],m=o(a.useState(t?t.current:null),2),y=m[0],h=m[1],v=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||p||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),l.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:r}))}),[n,y,r,p]);return a.useEffect((function(){if(!u&&!p){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&h(t.current)}),[t]),[v,p]};var a=r(7294),i=r(4686),u="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}}]);