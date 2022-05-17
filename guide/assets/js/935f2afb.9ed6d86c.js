"use strict";(self.webpackChunkguide=self.webpackChunkguide||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"activities","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"player activity history","href":"/guide/activities/history","docId":"activities/history"},{"type":"link","label":"global activity history","href":"/guide/activities/the-big-scrape","docId":"activities/the-big-scrape"},{"type":"link","label":"PGCRs","href":"/guide/activities/pgcrs","docId":"activities/pgcrs"}],"href":"/guide/activities/"},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"setting up an app","href":"/guide/api/app-setup","docId":"api/app-setup"},{"type":"link","label":"API technical basics","href":"/guide/api/basics","docId":"api/basics"},{"type":"category","label":"API endpoints","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"settings","href":"/guide/api/endpoints/settings","docId":"api/endpoints/settings"}],"href":"/guide/api/endpoints/"},{"type":"link","label":"API libraries","href":"/guide/api/libraries","docId":"api/libraries"},{"type":"link","label":"OAuth","href":"/guide/api/oauth","docId":"api/oauth"},{"type":"link","label":"privacy","href":"/guide/api/privacy","docId":"api/privacy"},{"type":"link","label":"spec","href":"/guide/api/spec","docId":"api/spec"},{"type":"link","label":"weird OAuth cases","href":"/guide/api/weird-cases","docId":"api/weird-cases"}],"href":"/guide/api/"},{"type":"category","label":"data-structures","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"completion reasons","href":"/guide/data-structures/completion-reasons","docId":"data-structures/completion-reasons"},{"type":"link","label":"entry-values","href":"/guide/data-structures/entry-values","docId":"data-structures/entry-values"},{"type":"link","label":"presentation nodes","href":"/guide/data-structures/presentation-nodes","docId":"data-structures/presentation-nodes"}]},{"type":"category","label":"the manifest/definitions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"exploring definitions","href":"/guide/definitions/exploring","docId":"definitions/exploring"},{"type":"link","label":"fetching definitions","href":"/guide/definitions/fetching","docId":"definitions/fetching"},{"type":"link","label":"using the definitions programatically","href":"/guide/definitions/using","docId":"definitions/using"}],"href":"/guide/definitions/"},{"type":"link","label":"what\'s your goal?","href":"/guide/goals","docId":"goals"},{"type":"link","label":"a guide to the destiny 2 API","href":"/guide/","docId":"index"},{"type":"category","label":"inventory","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"armor","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"armor stats","href":"/guide/inventory/armor/stats","docId":"inventory/armor/stats"}],"href":"/guide/inventory/armor/"},{"type":"category","label":"weapons","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"investment scaling","href":"/guide/inventory/weapons/investment-scaling","docId":"inventory/weapons/investment-scaling"},{"type":"link","label":"weapon stats","href":"/guide/inventory/weapons/stats","docId":"inventory/weapons/stats"}],"href":"/guide/inventory/weapons/"}],"href":"/guide/inventory/"},{"type":"link","label":"subject index","href":"/guide/subjects","docId":"subjects"},{"type":"category","label":"vendors","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"xur","href":"/guide/vendors/xur","docId":"vendors/xur"}],"href":"/guide/vendors/"}]},"docs":{"activities/history":{"id":"activities/history","title":"player activity history","description":"the api provides an activity history endpoint to list activities.","sidebar":"tutorialSidebar"},"activities/index":{"id":"activities/index","title":"activities","description":"some terminology:","sidebar":"tutorialSidebar"},"activities/pgcrs":{"id":"activities/pgcrs","title":"PGCRs","description":"about","sidebar":"tutorialSidebar"},"activities/the-big-scrape":{"id":"activities/the-big-scrape","title":"global activity history","description":"collecting everyone\'s activity history","sidebar":"tutorialSidebar"},"api/app-setup":{"id":"api/app-setup","title":"setting up an app","description":"step one is creating an application at Bungie.net.","sidebar":"tutorialSidebar"},"api/basics":{"id":"api/basics","title":"API technical basics","description":"REST","sidebar":"tutorialSidebar"},"api/endpoints/index":{"id":"api/endpoints/index","title":"API endpoints","description":"overview","sidebar":"tutorialSidebar"},"api/endpoints/settings":{"id":"api/endpoints/settings","title":"settings","description":"core settings endpoint","sidebar":"tutorialSidebar"},"api/index":{"id":"api/index","title":"API","description":"","sidebar":"tutorialSidebar"},"api/libraries":{"id":"api/libraries","title":"API libraries","description":":D to-do","sidebar":"tutorialSidebar"},"api/oauth":{"id":"api/oauth","title":"OAuth","description":"the Bungie API uses OAuth to authenticate users, with an authorization code flow. this means users perform a series of steps, some or all of them in a web browser. then the application receives an authorization\xa0code which it can exchange for an access\xa0token.","sidebar":"tutorialSidebar"},"api/privacy":{"id":"api/privacy","title":"privacy","description":"for destiny 2 operations, there are 2 different levels of privacy:","sidebar":"tutorialSidebar"},"api/spec":{"id":"api/spec","title":"spec","description":"iunno ???","sidebar":"tutorialSidebar"},"api/weird-cases":{"id":"api/weird-cases","title":"weird OAuth cases","description":"yes, this is how the OAuth flow works. sorry.","sidebar":"tutorialSidebar"},"data-structures/completion-reasons":{"id":"data-structures/completion-reasons","title":"completion reasons","description":"| completionReason.value | completionReason.displayValue | completed No |","sidebar":"tutorialSidebar"},"data-structures/entry-values":{"id":"data-structures/entry-values","title":"entry-values","description":"DestinyPostGameCarnageReportEntry.values","sidebar":"tutorialSidebar"},"data-structures/presentation-nodes":{"id":"data-structures/presentation-nodes","title":"presentation nodes","description":"node trees are used to hold lots of data, like Collections, Triumphs, Catalysts, Metrics, Medals, etc.","sidebar":"tutorialSidebar"},"definitions/exploring":{"id":"definitions/exploring","title":"exploring definitions","description":"required reading: definitions overview","sidebar":"tutorialSidebar"},"definitions/fetching":{"id":"definitions/fetching","title":"fetching definitions","description":"step 1 of fetching definitions data is learning where to download the current defs.","sidebar":"tutorialSidebar"},"definitions/index":{"id":"definitions/index","title":"the manifest/definitions","description":"what are the definitions?","sidebar":"tutorialSidebar"},"definitions/using":{"id":"definitions/using","title":"using the definitions programatically","description":"required reading: definitions overview / fetching definitions","sidebar":"tutorialSidebar"},"goals":{"id":"goals","title":"what\'s your goal?","description":"- view and manage someone\'s inventory items","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"a guide to the destiny 2 API","description":"what do you want to do?","sidebar":"tutorialSidebar"},"inventory/armor/index":{"id":"inventory/armor/index","title":"armor","description":"you may want:","sidebar":"tutorialSidebar"},"inventory/armor/stats":{"id":"inventory/armor/stats","title":"armor stats","description":"","sidebar":"tutorialSidebar"},"inventory/index":{"id":"inventory/index","title":"inventory","description":"you may want:","sidebar":"tutorialSidebar"},"inventory/weapons/index":{"id":"inventory/weapons/index","title":"weapons","description":"you may want:","sidebar":"tutorialSidebar"},"inventory/weapons/investment-scaling":{"id":"inventory/weapons/investment-scaling","title":"investment scaling","description":"the most obvious example of how investment stats work is for weapon magazines","sidebar":"tutorialSidebar"},"inventory/weapons/stats":{"id":"inventory/weapons/stats","title":"weapon stats","description":"where do weapon stats come from?","sidebar":"tutorialSidebar"},"subjects":{"id":"subjects","title":"subject index","description":"- API basics:","sidebar":"tutorialSidebar"},"vendors/vendors":{"id":"vendors/vendors","title":"vendors","description":"not every Vendor in the definitions is a real vendor","sidebar":"tutorialSidebar"},"vendors/xur":{"id":"vendors/xur","title":"xur","description":"does the API tell me where xur is?","sidebar":"tutorialSidebar"}}}')}}]);