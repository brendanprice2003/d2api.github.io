"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[86],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(r),f=i,m=h["".concat(s,".").concat(f)]||h[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},988:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={},s="OAuth",l={unversionedId:"oauth",id:"oauth",title:"OAuth",description:"go with The Flow",source:"@site/docs/oauth.md",sourceDirName:".",slug:"/oauth",permalink:"/guide/oauth",editUrl:"https://github.com/d2api/d2api.github.io/tree/docs-src/docs/oauth.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"libraries",permalink:"/guide/libraries"},next:{title:"privacy",permalink:"/guide/privacy"}},c={},p=[{value:"go with The Flow",id:"go-with-the-flow",level:2},{value:"yes, this is how it is.",id:"yes-this-is-how-it-is",level:3},{value:"what now",id:"what-now",level:2}],h={toc:p};function f(e){var t=e.components,u=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oauth"},"OAuth"),(0,o.kt)("h2",{id:"go-with-the-flow"},"go with The Flow"),(0,o.kt)("p",null,"the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the user is sent to a ",(0,o.kt)("strong",{parentName:"li"},"Bungie.net page")," like ",(0,o.kt)("a",{target:"_blank",href:r(1319).Z},"this"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"they see the name of the app that's requesting access to their account"),(0,o.kt)("li",{parentName:"ul"},"they see the permissions the app is requesting"),(0,o.kt)("li",{parentName:"ul"},"and confirm they are ok with that"))),(0,o.kt)("li",{parentName:"ul"},"the user is ",(0,o.kt)("strong",{parentName:"li"},"redirected to a URL")," of the developer's choosing, with an authorization code appended to the url",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"whatever application or webpage is at that URL, makes an API request to exchange the authorization code for a full access token")))),(0,o.kt)("h3",{id:"yes-this-is-how-it-is"},"yes, this is how it is."),(0,o.kt)("p",null,"if something about this setup doesn't seem compatible with your use case, see ",(0,o.kt)("a",{parentName:"p",href:"yes"},"here"),"."),(0,o.kt)("h2",{id:"what-now"},"what now"))}f.isMDXComponent=!0},1319:function(e,t,r){t.Z=r.p+"assets/files/authorize-66e44b031efe6a7695e47aa0e059bf87.png"}}]);