"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[548],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},u="API technical basics",p={unversionedId:"api/basics",id:"api/basics",title:"API technical basics",description:"REST",source:"@site/docs/api/basics.md",sourceDirName:"api",slug:"/api/basics",permalink:"/guide/api/basics",editUrl:"https://github.com/d2api/d2api.github.io/tree/docs-src/docs/api/basics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"setting up an app",permalink:"/guide/api/app-setup"},next:{title:"exploring the API endpoints",permalink:"/guide/api/endpoints"}},l={},c=[{value:"REST",id:"rest",level:2},{value:"authorization",id:"authorization",level:2},{value:"privacy",id:"privacy",level:3},{value:"scope",id:"scope",level:3},{value:"authentication",id:"authentication",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-technical-basics"},"API technical basics"),(0,i.kt)("h2",{id:"rest"},"REST"),(0,i.kt)("p",null,"the Destiny 2/Bungie API is a REST API.",(0,i.kt)("br",{parentName:"p"}),"\n","REST just means you make simple HTTP requests to it, extremely similar to how web browsing works.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a GET request downloads data from a URL. you got this webpage via a GET request.  "),(0,i.kt)("li",{parentName:"ul"},"a POST request sends data to a URL and then downloads data in return.  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"there's other HTTP methods but it's not really relevant here.")))),(0,i.kt)("p",null,"if you are programming and want to use the API, you're gonna need to know "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"how to program :)  "),(0,i.kt)("li",{parentName:"ul"},"how to make HTTP requests (or use an ",(0,i.kt)("a",{parentName:"li",href:"/api/libraries"},"api library")," to do it for you)")),(0,i.kt)("h2",{id:"authorization"},"authorization"),(0,i.kt)("h3",{id:"privacy"},"privacy"),(0,i.kt)("p",null,"for destiny 2 operations, there are 2 different levels of privacy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'things you can do anonymously (meaning "without a user account", but you still need an API key)'),(0,i.kt)("li",{parentName:"ul"},"things you can do authenticated as a user, involving that user's account (",(0,i.kt)("a",{parentName:"li",href:"/api/privacy"},"some examples here"),")")),(0,i.kt)("p",null,"there's no middle option, \"things you can do as a user, involving other people's accounts\".",(0,i.kt)("br",{parentName:"p"}),"\n","things are either public, or locked to only the user involved.",(0,i.kt)("br",{parentName:"p"}),"\n","so there's no need to be logged in as X unless it's for information specific to X's account."),(0,i.kt)("h3",{id:"scope"},"scope"),(0,i.kt)("p",null,"for logged-in operations, there are also permissions a user grants, when they log into an application.",(0,i.kt)("br",{parentName:"p"}),"\n","each ",(0,i.kt)("a",{parentName:"p",href:"/api/app-setup"},"application")," chooses a set of permissions it asks for, and when the user logs in, they can see, and agree to those permissions."),(0,i.kt)("p",null,"for destiny 2, there are separate read and write permissions. an app can request permission solely to view user's deeper destiny 2 information, or request permission to make inventory changes as well."),(0,i.kt)("h2",{id:"authentication"},"authentication"),(0,i.kt)("p",null,"the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means users perform a series of steps, some or all of them in a web browser. then the application receives an ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization\xa0code")," which it can exchange for an ",(0,i.kt)("inlineCode",{parentName:"p"},"access\xa0token"),"."),(0,i.kt)("p",null,"the ",(0,i.kt)("inlineCode",{parentName:"p"},"access\xa0token")," is used to make authenticated requests, proving with each request that the application is acting on the user's behalf."),(0,i.kt)("p",null,"more about OAuth ",(0,i.kt)("a",{parentName:"p",href:"/api/oauth"},"here")))}d.isMDXComponent=!0}}]);