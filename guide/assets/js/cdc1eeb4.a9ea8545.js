"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[794],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},936:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={},s=void 0,l={unversionedId:"xur",id:"xur",title:"xur",description:"does the API tell me where xur is?",source:"@site/docs/xur.md",sourceDirName:".",slug:"/xur",permalink:"/xur",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/xur.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"weapons",permalink:"/weapons"},next:{title:"yes, this is how the OAuth flow works",permalink:"/yes"}},c={},p=[{value:"does the API tell me where xur is?",id:"does-the-api-tell-me-where-xur-is",level:3},{value:"does the API tell me what xur is selling?",id:"does-the-api-tell-me-what-xur-is-selling",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"does-the-api-tell-me-where-xur-is"},"does the API tell me where xur is?"),(0,i.kt)("p",null,'this used to be "no" but as of october 2021 the answer is "yes".',(0,i.kt)("br",{parentName:"p"}),"\n","like any other vendor, he returns an index which can be cross-referenced with his definition, to find where he is."),(0,i.kt)("h3",{id:"does-the-api-tell-me-what-xur-is-selling"},"does the API tell me what xur is selling?"),(0,i.kt)("p",null,"yes. xur is a vendor in the ",(0,i.kt)("a",{parentName:"p",href:"vendors"},"vendors API"),".",(0,i.kt)("br",{parentName:"p"}),"\n","his vendor hash is 2190858386.",(0,i.kt)("br",{parentName:"p"}),"\n","there's a special ",(0,i.kt)("a",{parentName:"p",href:"https://bungie-net.github.io/#Destiny2.GetPublicVendors"},'"public" version of the vendors endpoint'),", that returns xur's inventory without needing oauth / user login",(0,i.kt)("br",{parentName:"p"}),"\n","but it doesn't have armor stats"))}f.isMDXComponent=!0}}]);