(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(t,e,r){var content=r(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("5835d6b5",content,!0,{sourceMap:!1})},180:function(t){t.exports=JSON.parse('{"categories":{"homepage":{"title":"Homepage"},"pricing":{"title":"Pricing"},"enterprise_support":{"title":"Enterprise support"},"extendable":{"title":"Extendable"},"plugin_store":{"title":"Plugin store"},"custom_themes":{"title":"Custom themes"},"hosting":{"title":"Hosting"},"programming_language":{"title":"Programming language"},"framework":{"title":"Framework"},"database":{"title":"Database"},"scheduled_publishing":{"title":"Scheduled publishing"},"signup_confirmation_email":{"title":"Singup confirmation email"},"emails_via_extensions":{"title":"Sending emails via custom extensions"},"2fa":{"title":"2FA"},"rest_api":{"title":"REST API"},"graphql":{"title":"GraphQL"},"image_upload":{"title":"Image upload"},"image_transformations":{"title":"Image transformations"},"comments":{"title":"Comments"},"i18n_pages":{"title":"Translations per page"},"i18n_site_tree":{"title":"Customizable site tree per translation"},"search":{"title":"Search"},"review_workflow":{"title":"Review workflow for editors"},"content_versioning":{"title":"Versioning for content"},"authentication_mechanism":{"title":"Authentication mechanism"}},"systems":{"adobe_experience_manager":{"title":"Adobe Experience Manager"},"contentful":{"title":"Contentful","logo":"contentful.svg"},"craft_cms":{"title":"Craft CMS"},"datocms":{"title":"DatoCMS"},"ghost":{"title":"Ghost"},"graphcms":{"title":"GraphCMS","logo":"graphcms.svg"},"grav":{"title":"Grav"},"kirby":{"title":"Kirby"},"squarespace":{"title":"Squarespace","logo":"squarespace.svg"},"statamic":{"title":"Statamic"},"strapi":{"title":"Strapi"},"typo3":{"title":"TYPO3","logo":"typo3.png"},"wix":{"title":"Wix"},"wordpress":{"title":"WordPress","logo":"wordpress.png"},"wordpresscom":{"title":"WordPress.com"}}}')},181:function(t,e,r){"use strict";r(179)},182:function(t,e,r){(e=r(16)(!1)).push([t.i,".cell{position:relative;padding:.5rem}.source{display:block;margin-top:.125rem;color:rgba(0,0,0,.3)}.missing{opacity:0;position:absolute;left:.5rem;right:.5rem;top:.5rem;bottom:.5rem;padding:.5rem;background-color:rgba(96,159,159,.1);color:rgba(0,0,0,.4);font-size:.8rem;line-height:1.2;text-decoration:none}.missing:hover{opacity:1}",""]),t.exports=e},183:function(t,e,r){"use strict";r.r(e);var n={props:{systemData:{type:Object},category:{type:String}}},o=(r(181),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"cell"},[Object.keys(t.systemData).length?r("div",{staticClass:"cell__inner"},[t.systemData[t.category]?r("div",["homepage"===t.category||"plugin_store"===t.category?r("div",[r("a",{attrs:{href:t.systemData[t.category].url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.systemData[t.category].text))])]):r("div",[t._v("\n        "+t._s(t.systemData[t.category].text)+"\n\n        "),t.systemData[t.category].source?r("a",{staticClass:"source",attrs:{href:t.systemData[t.category].source,target:"_blank",rel:"noopener"}},[t._v("Source")]):t._e()])]):r("a",{staticClass:"missing",attrs:{href:""}},[t._m(0)])]):r("small",[t._v("\n    LOADING!\n  ")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("\n        Missing data."),e("br"),this._v("\n        Click here to contribute.\n      ")])}],!1,null,null,null);e.default=component.exports},184:function(t,e,r){var content=r(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("6b1f5b7a",content,!0,{sourceMap:!1})},185:function(t,e,r){var content=r(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("2b9974f1",content,!0,{sourceMap:!1})},187:function(t,e,r){var map={"./contentful.svg":188,"./graphcms.svg":189,"./squarespace.svg":190,"./typo3.png":191,"./wordpress.png":192};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=187},188:function(t,e,r){t.exports=r.p+"img/contentful.2af8953.svg"},189:function(t,e,r){t.exports=r.p+"img/graphcms.bf3f499.svg"},190:function(t,e,r){t.exports=r.p+"img/squarespace.47ad17c.svg"},191:function(t,e,r){t.exports=r.p+"img/typo3.1827893.png"},192:function(t,e,r){t.exports=r.p+"img/wordpress.ca7536f.png"},193:function(t,e,r){var map={"./adobe_experience_manager.yml":[199,8],"./config.yml":[180],"./contentful.yml":[200,9],"./craft_cms.yml":[201,10],"./datocms.yml":[202,11],"./ghost.yml":[203,12],"./graphcms.yml":[204,13],"./grav.yml":[205,14],"./kirby.yml":[206,15],"./squarespace.yml":[207,16],"./statamic.yml":[208,17],"./strapi.yml":[209,18],"./typo3.yml":[210,19],"./wix.yml":[211,20],"./wordpress.yml":[212,21],"./wordpresscom.yml":[213,22]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r.t(n,3)}))}n.keys=function(){return Object.keys(map)},n.id=193,t.exports=n},194:function(t,e,r){"use strict";r(184)},195:function(t,e,r){(e=r(16)(!1)).push([t.i,'.cms{margin-left:1rem;margin-right:1rem;font-size:.9rem}.table-wrapper{position:relative;box-shadow:3px 3px 5px 0 rgba(0,0,0,.05);background-color:#fff}.table-wrapper:after{content:"";position:absolute;right:0;top:0;width:10rem;height:100%;background:linear-gradient(270deg,#fff,transparent)}.table-wrapper__inner{overflow-x:auto}.table-wrapper__inner::-webkit-scrollbar,.table-wrapper__inner::-webkit-scrollbar-track{height:.3rem;background-color:transparent}.table-wrapper__inner::-webkit-scrollbar-thumb{background-color:rgba(96,159,159,.3)}table{table-layout:fixed;width:100%;padding:0 1rem 1rem;line-height:1.5}thead th{width:12rem;max-height:5rem;vertical-align:center}thead th:first-of-type{width:9rem}thead th:first-of-type span{border-bottom:none}thead th img{width:90%;margin-left:auto;margin-right:auto}tbody td,tbody th{vertical-align:top}tbody th{text-align:left}th{padding:.5rem}th span{display:inline-block;padding-bottom:.25rem;border-bottom:2px solid rgba(96,159,159,.3)}td:nth-of-type(odd){background-color:rgba(96,159,159,.05)}td:nth-of-type(2n){background-color:rgba(96,159,159,.1)}',""]),t.exports=e},196:function(t,e,r){"use strict";r(185)},197:function(t,e,r){(e=r(16)(!1)).push([t.i,".filters-overlay{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:36rem;max-width:95vw;height:100%;max-height:70vh;padding:2rem;border-radius:3px;background-color:#fff}.filters-system{display:block}",""]),t.exports=e},218:function(t,e,r){"use strict";r.r(e);r(65),r(24),r(25),r(10),r(53),r(31),r(41);var n=r(39),o=r(50),l=r(180);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"Filters",computed:{systems:function(){var t=[];for(var e in l.systems)l.systems.hasOwnProperty(e)&&t.push(m({id:e,disabled:this.$store.state.filters.disabledSystems.includes(e)},l.systems[e]));return t}},methods:m({onChange:function(t,e){t.currentTarget.checked?this.$store.commit("filters/disableSystem",e):this.$store.commit("filters/enableSystem",e)}},Object(o.b)({hideOverlay:"filters/hideOverlay"}))},d=(r(196),r(6)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"filters-overlay"},[r("button",{on:{click:t.hideOverlay}},[t._v("X")]),t._v(" "),r("h2",[t._v("Show/hide")]),t._v(" "),t._l(t.systems,(function(e){return r("label",{key:e.id,staticClass:"filters-system"},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.disabled},on:{change:function(r){t.onChange(r,e)}}}),t._v("\n    "+t._s(e.title)+"\n  ")])}))],2)}),[],!1,null,null,null);e.default=component.exports},219:function(t,e,r){"use strict";r.r(e);r(65),r(24),r(25),r(10),r(53),r(31),r(41);var n=r(39),o=r(180),l=r(50);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={};for(var d in o.systems)o.systems.hasOwnProperty(d)&&(f[d]={});var y={name:"ContentManagementSystems",data:function(){var t=[];for(var e in o.categories)o.categories.hasOwnProperty(e)&&t.push({id:e,title:o.categories[e].title});return{categories:t,systemData:f}},created:function(){var t=this,e=function(e){if(!o.systems.hasOwnProperty(e))return"continue";r(193)("./".concat(e,".yml")).then((function(r){t.systemData[e]=r.default?r.default:{}}))};for(var n in o.systems)e(n)},methods:m({},Object(l.b)({toggleOverlay:"filters/toggleOverlay",disableSystem:"filters/disableSystem"})),computed:{systems:function(){var t=[];for(var e in o.systems)o.systems.hasOwnProperty(e)&&(this.$store.state.filters.disabledSystems.includes(e)||t.push(m({id:e},o.systems[e])));return t},overlayVisible:function(){return this.$store.state.filters.overlayVisible}}},h=(r(194),r(6)),component=Object(h.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"cms"},[n("div",{staticClass:"table-wrapper"},[n("div",{staticClass:"table-wrapper__inner"},[n("table",[n("thead",[n("tr",[n("th",[n("button",{on:{click:t.toggleOverlay}},[t._v("Filters")])]),t._v(" "),t._l(t.systems,(function(e){return n("th",{key:e.id},[e.logo?n("img",{attrs:{src:r(187)("./"+e.logo),alt:e.title}}):n("span",[t._v(t._s(e.title))]),t._v(" "),n("button",{on:{click:function(){t.disableSystem(e)}}},[t._v("X")])])}))],2)]),t._v(" "),n("tbody",t._l(t.categories,(function(e){return n("tr",{key:e.id},[n("th",[n("span",[t._v(t._s(e.title))])]),t._v(" "),t._l(t.systems,(function(r){return n("Cell",{key:r.id,attrs:{systemData:t.systemData[r.id],category:e.id}})}))],2)})),0)])])]),t._v(" "),t.overlayVisible?n("Filters"):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cell:r(183).default,Filters:r(218).default})}}]);