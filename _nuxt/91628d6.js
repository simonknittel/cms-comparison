(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{118:function(e,t,n){var content=n(174);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(44).default)("4e8213bc",content,!0,{sourceMap:!1})},119:function(e,t,n){var content=n(176);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(44).default)("47cadc0b",content,!0,{sourceMap:!1})},120:function(e,t,n){var content=n(178);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(44).default)("3562c072",content,!0,{sourceMap:!1})},121:function(e,t,n){"use strict";n.r(t);n(175);var r=n(14),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Unopinionated comparison of")]),e._v(" "),n("Navigation")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Navigation:n(183).default,Header:n(121).default})},128:function(e,t,n){"use strict";n(173);var r=n(14),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),e._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:n(121).default})},130:function(e,t,n){n(131),e.exports=n(132)},173:function(e,t,n){"use strict";n(118)},174:function(e,t,n){var r=n(43)(!1);r.push([e.i,'*,:after,:before{box-sizing:border-box;margin:0}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background-color:rgba(64,191,191,.05)}html::-webkit-scrollbar,html::-webkit-scrollbar-track{width:.3rem;background-color:transparent}html::-webkit-scrollbar-thumb{background-color:#40bfbf}',""]),e.exports=r},175:function(e,t,n){"use strict";n(119)},176:function(e,t,n){var r=n(43)(!1);r.push([e.i,"header{display:flex;justify-content:center;flex-direction:column;padding-left:1rem;padding-right:1rem;position:absolute;left:0;top:0;width:100%;height:6rem}@media(min-width:40rem){header{align-items:center;justify-content:flex-start;flex-direction:row;padding-left:2rem;padding-right:2rem}}h1{font-size:1rem;line-height:1rem}@media(min-width:40rem){h1{font-size:1.5rem;line-height:1.5rem}}",""]),e.exports=r},177:function(e,t,n){"use strict";n(120)},178:function(e,t,n){var r=n(43)(!1);r.push([e.i,'@media(min-width:40rem){nav[data-v-6e208a00]{display:flex}}.item[data-v-6e208a00]{display:block;border-radius:3px;color:#000;text-decoration:none}@media(min-width:40rem){.item[data-v-6e208a00]{margin-left:.5rem;margin-right:.5rem}}.item:hover .inner[data-v-6e208a00]:after{background-color:#40bfbf}.item.nuxt-link-active[data-v-6e208a00]{font-weight:700}.item.nuxt-link-active .inner[data-v-6e208a00]:after{background-color:#40bfbf}.inner[data-v-6e208a00]{display:inline-block;position:relative;font-size:1rem;line-height:1rem;font-weight:400}@media(min-width:40rem){.inner[data-v-6e208a00]{font-size:1.5rem;line-height:1.5rem}}.inner[data-v-6e208a00]:after{content:"";position:absolute;left:0;top:calc(100% + .5rem);width:100%;height:2px;background-color:rgba(96,159,159,.3)}',""]),e.exports=r},179:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return l}));var r=n(41);n(19),n(28),n(23);function o(){return{collapsed:[]}}var l={collapse:function(e,t){var n,o,l=[];Array.isArray(t)?(o=l).push.apply(o,Object(r.a)(t)):l.push(t);l=l.filter((function(t){return!1===e.collapsed.includes(t)})),(n=e.collapsed).push.apply(n,Object(r.a)(l)),window.sessionStorage.setItem("collapsedCategories",e.collapsed)},uncollapse:function(e,t){!1!==e.collapsed.includes(t)&&(e.collapsed.splice(e.collapsed.indexOf(t),1),window.sessionStorage.setItem("collapsedCategories",e.collapsed))}}},180:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return E}));n(27),n(18),n(19),n(45),n(46);var r=n(17),o=n(7),l=(n(90),n(84));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}for(var d={},f=function(){var e=Object(o.a)(y[h],2),t=e[0],r=e[1];n(181)("./".concat(t,".yml")).then((function(e){d[t]=m({id:t},r),e.default&&Object.assign(d[t],e.default)})).catch((function(e){console.error(e)}))},h=0,y=Object.entries(l.b);h<y.length;h++)f();for(var v={},w=0,x=Object.entries(l.a);w<x.length;w++){var _=Object(o.a)(x[w],2),S=_[0],O=_[1];if(O.children){for(var k={},j=0,C=Object.entries(O.children);j<C.length;j++){var M=Object(o.a)(C[j],2),P=M[0],A=M[1];k[P]=m({id:P},A)}v[S]={id:S,title:O.title,children:k}}else v[S]=m({id:S},O)}function E(){return{systems:d,categories:v}}},181:function(e,t,n){var map={"./adobe_experience_manager.yml":[184,19],"./apostrophe.yml":[185,20],"./contentful.yml":[186,21],"./craft_cms.yml":[187,22],"./datocms.yml":[188,23],"./ghost.yml":[189,24],"./graphcms.yml":[190,25],"./grav.yml":[191,26],"./kirby.yml":[192,27],"./payload_cms.yml":[193,28],"./prismic.yml":[194,29],"./squarespace.yml":[195,30],"./statamic.yml":[196,31],"./storyblok.yml":[197,32],"./strapi.yml":[198,33],"./typo3.yml":[199,34],"./wix.yml":[200,35],"./wordpress.yml":[201,36],"./wordpresscom.yml":[202,37]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(map)},r.id=181,e.exports=r},182:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return l}));var r=n(41);n(19),n(28),n(23);function o(){return{overlayVisible:!1,disabledSystems:[]}}var l={enableSystem:function(e,t){e.disabledSystems.splice(e.disabledSystems.indexOf(t),1),window.sessionStorage.setItem("disabledSystems",e.disabledSystems)},disableSystem:function(e,t){var n,o,l=[];Array.isArray(t)?(o=l).push.apply(o,Object(r.a)(t)):l.push(t);l=l.filter((function(t){return!1===e.disabledSystems.includes(t)})),(n=e.disabledSystems).push.apply(n,Object(r.a)(l)),window.sessionStorage.setItem("disabledSystems",e.disabledSystems)},toggleOverlay:function(e){e.overlayVisible=!e.overlayVisible},hideOverlay:function(e){e.overlayVisible=!1}}},183:function(e,t,n){"use strict";n.r(t);n(177);var r=n(14),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("NuxtLink",{staticClass:"item",attrs:{to:"/content-management-systems",title:"Show comparison for Content Management Systems (CMS)"}},[n("h2",{staticClass:"inner"},[e._v("Content Management Systems (CMS)")])])],1)}),[],!1,null,"6e208a00",null);t.default=component.exports},84:function(e){e.exports=JSON.parse('{"a":{"homepage":{"title":"Homepage"},"pricing":{"title":"Pricing"},"enterprise_support":{"title":"Enterprise support"},"hosting":{"title":"Hosting"},"programming_language":{"title":"Programming language"},"framework":{"title":"Framework"},"database":{"title":"Database"},"review_workflow":{"title":"Review workflow for editors"},"content_versioning":{"title":"Versioning for content"},"content_types":{"title":"Content types"},"common_features":{"title":"Common features","children":{"search":{"title":"Search"},"search_suggestions":{"title":"Search suggestions"},"comments":{"title":"Comments"},"scheduled_publishing":{"title":"Scheduled publishing","explanation":"A feature that let\'s you publish content automatically at a previously specified date and time."},"emails":{"title":"Sending emails","explanation":"It\'s common that CMS\' and plugins only provide the functionality to send emails via external providers like Mailgun or similar."}}},"extendibility":{"title":"Extendibility","children":{"extendable":{"title":"Extendable"},"plugin_store":{"title":"Extension/Plugin store"},"custom_themes":{"title":"Custom themes"}}},"authentication":{"title":"Authentication","children":{"signup_confirmation_email":{"title":"Singup confirmation email"},"authentication_mechanism":{"title":"Authentication mechanism"},"2fa":{"title":"2FA"}}},"apis":{"title":"APIs","children":{"headless":{"title":"Headless or traditional"},"rest_api":{"title":"REST API"},"graphql":{"title":"GraphQL"}}},"media":{"title":"Media","children":{"image_upload":{"title":"Image upload"},"image_transformations":{"title":"Image transformations"}}},"i18n":{"title":"i18n","children":{"i18n_pages":{"title":"Translations per page"},"i18n_site_tree":{"title":"Customizable site tree per translation"}}},"forms":{"title":"Forms","children":{"form_builder":{"title":"Form builder"},"form_submissions":{"title":"Form submissions"}}}},"b":{"adobe_experience_manager":{"title":"Adobe Experience Manager"},"apostrophe":{"title":"Apostrophe"},"contentful":{"title":"Contentful","logo":"contentful.svg"},"craft_cms":{"title":"Craft CMS","logo":"craft_cms.svg"},"datocms":{"title":"DatoCMS","logo":"datocms.svg"},"ghost":{"title":"Ghost","logo":"ghost.png"},"graphcms":{"title":"GraphCMS","logo":"graphcms.svg"},"grav":{"title":"Grav","logo":"grav.svg"},"kirby":{"title":"Kirby"},"payload_cms":{"title":"Payload CMS"},"prismic":{"title":"Prismic"},"squarespace":{"title":"Squarespace","logo":"squarespace.svg"},"statamic":{"title":"Statamic","logo":"statamic.svg"},"storyblok":{"title":"Storyblok"},"strapi":{"title":"Strapi","logo":"strapi.svg"},"typo3":{"title":"TYPO3","logo":"typo3.png"},"wix":{"title":"Wix"},"wordpress":{"title":"WordPress","logo":"wordpress.png"},"wordpresscom":{"title":"WordPress.com"}}}')},88:function(e,t,n){"use strict";var r=n(1),o=n(125),l=n.n(o);r.a.use(l.a)},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(83);function r(e){var t=e.store,n=window.sessionStorage.getItem("disabledSystems");n&&(n=n.split(","),t.commit("filters/disableSystem",n));var r=window.sessionStorage.getItem("collapsedCategories");r&&(r=r.split(","),t.commit("categories/collapse",r))}}},[[130,17,3,18]]]);