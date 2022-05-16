"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[343],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),y=s(r),f=i,v=y["".concat(u,".").concat(f)]||y[f]||p[f]||o;return r?n.createElement(v,a(a({ref:e},l),{},{components:r})):n.createElement(v,a({ref:e},l))}));function f(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=y;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8056:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={},u=void 0,s={unversionedId:"activity-history",id:"activity-history",title:"activity-history",description:"collecting a player's activity history",source:"@site/docs/activity-history.md",sourceDirName:".",slug:"/activity-history",permalink:"/activity-history",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/activity-history.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"activities",permalink:"/activities"},next:{title:"api-spec",permalink:"/api-spec"}},l={},p=[{value:"collecting a player&#39;s activity history",id:"collecting-a-players-activity-history",level:2}],y={toc:p};function f(t){var e=t.components,r=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"collecting-a-players-activity-history"},"collecting a player's activity history"),(0,o.kt)("p",null,"the api provides an ",(0,o.kt)("a",{parentName:"p",href:"https://bungie-net.github.io/#Destiny2.GetActivityHistory"},"activity history")," endpoint to list activities."),(0,o.kt)("p",null,"this must be requested on a per-character basis. no you cannot request all of an account/player's activities."))}f.isMDXComponent=!0}}]);