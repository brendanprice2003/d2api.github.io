"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[669],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var i=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=i.createContext({}),u=function(t){var e=i.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},y=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),y=u(r),f=n,v=y["".concat(s,".").concat(f)]||y[f]||l[f]||o;return r?i.createElement(v,a(a({ref:e},p),{},{components:r})):i.createElement(v,a({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,a=new Array(o);a[0]=y;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8362:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],c={title:"player activity history",sidebar_position:1},s="collecting a player's activity history",u={unversionedId:"activities/history",id:"activities/history",title:"player activity history",description:"the api provides an activity history endpoint to list activities.",source:"@site/docs/activities/history.md",sourceDirName:"activities",slug:"/activities/history",permalink:"/guide/activities/history",editUrl:"https://github.com/d2api/d2api.github.io/tree/docs-src/docs/activities/history.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"player activity history",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"activities",permalink:"/guide/activities/"},next:{title:"global activity history",permalink:"/guide/activities/the-big-scrape"}},p={},l=[],y={toc:l};function f(t){var e=t.components,r=(0,n.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},y,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"collecting-a-players-activity-history"},"collecting a player's activity history"),(0,o.kt)("p",null,"the api provides an ",(0,o.kt)("a",{parentName:"p",href:"https://bungie-net.github.io/#Destiny2.GetActivityHistory"},"activity history")," endpoint to list activities."),(0,o.kt)("p",null,"this must be requested on a per-character basis. you cannot request all of an account/player's activities."))}f.isMDXComponent=!0}}]);