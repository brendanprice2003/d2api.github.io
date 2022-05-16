"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[357],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return p}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,m=u["".concat(c,".").concat(p)]||u[p]||l[p]||r;return t?i.createElement(m,a(a({ref:n},f),{},{components:t})):i.createElement(m,a({ref:n},f))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1812:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),a=["components"],s={},c="fetching definitions",d={unversionedId:"definitions-fetching",id:"definitions-fetching",title:"fetching definitions",description:"step 1 of fetching definitions data is learning where to download the current defs.",source:"@site/docs/definitions-fetching.md",sourceDirName:".",slug:"/definitions-fetching",permalink:"/guide/definitions-fetching",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/definitions-fetching.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"exploring definitions",permalink:"/guide/definitions-exploring"},next:{title:"using the definitions programatically",permalink:"/guide/definitions-using"}},f={},l=[{value:"decoding definitions",id:"decoding-definitions",level:3}],u={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fetching-definitions"},"fetching definitions"),(0,r.kt)("p",null,"step 1 of fetching definitions data is learning where to download the current defs.",(0,r.kt)("br",{parentName:"p"}),"\n","the defs URLs will change season-to-season as new items are introduced, and week-to-week as game updates happen or entries are declassified. so we need a consistent way to find out what they are:"),(0,r.kt)("p",null,"you'll use the ",(0,r.kt)("a",{parentName:"p",href:"https://bungie-net.github.io/multi/operation_get_Destiny2-GetDestinyManifest.html"},"/Manifest/ endpoint")," to get this info.",(0,r.kt)("br",{parentName:"p"}),"\n","the returned format is a ",(0,r.kt)("a",{parentName:"p",href:"https://bungie-net.github.io/multi/schema_Destiny-Config-DestinyManifest.html"},"JSON Object (dictionary)")," with version numbers, and paths keyed by language and data table type. looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Response": {\n    "version": "97762.21.09.15.0038-0-bnet.40222",\n    "mobileWorldContentPaths": {\n      "en": "/common/destiny2_content/sqlite/en/world_sql_content_c41e799c128f0c26d2fea1676d9ee8b7.content",\n      "fr": "/common/destiny2_content/sqlite/fr/world_sql_content_a3f6924b0d08251daf987f709b674053.content"\n    },\n    "jsonWorldContentPaths": {\n      "en": "/common/destiny2_content/json/en/aggregate-df567aed-6547-48cc-8195-bfae095f6ed7.json",\n      "fr": "/common/destiny2_content/json/fr/aggregate-df567aed-6547-48cc-8195-bfae095f6ed7.json"\n    },\n    "jsonWorldComponentContentPaths": {\n      "en": {\n        "DestinyActivityDefinition": "/common/destiny2_content/json/en/DestinyActivityDefinition-df567aed-6547-48cc-8195-bfae095f6ed7.json",\n        "DestinyActivityTypeDefinition": "/common/destiny2_content/json/en/DestinyActivityTypeDefinition-df567aed-6547-48cc-8195-bfae095f6ed7.json",\n        "DestinyClassDefinition": "/common/destiny2_content/json/en/DestinyClassDefinition-df567aed-6547-48cc-8195-bfae095f6ed7.json",\n        "DestinyInventoryItemDefinition": "/common/destiny2_content/json/en/DestinyInventoryItemDefinition-df567aed-6547-48cc-8195-bfae095f6ed7.json",\n')),(0,r.kt)("p",null,"choose your path, add the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.bungie.net"),", and fetch those defs"),(0,r.kt)("h1",{id:"do-not-send-an-api-key"},"DO NOT SEND AN API KEY"),(0,r.kt)("p",null,"the above URLs are not API endpoints, they're just URLS.",(0,r.kt)("br",{parentName:"p"}),"\n","downloading will fail if you send an API key."),(0,r.kt)("h3",{id:"decoding-definitions"},"decoding definitions"),(0,r.kt)("p",null,"JSON is JSON, just load and parse it."),(0,r.kt)("p",null,"a ",(0,r.kt)("inlineCode",{parentName:"p"},".content"),", as downloaded, is a zip file.",(0,r.kt)("br",{parentName:"p"}),"\n","it contains another ",(0,r.kt)("inlineCode",{parentName:"p"},".content")," file that's actually an sqlite database."))}p.isMDXComponent=!0}}]);