(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{177:function(t,e,r){var content=r(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("5835d6b5",content,!0,{sourceMap:!1})},178:function(t,e,r){"use strict";r(177)},179:function(t,e,r){(e=r(16)(!1)).push([t.i,".cell{position:relative;padding:.5rem}.source{display:block;margin-top:.125rem;color:rgba(0,0,0,.3)}.missing{opacity:0;position:absolute;left:.5rem;right:.5rem;top:.5rem;bottom:.5rem;padding:.5rem;background-color:rgba(96,159,159,.1);color:rgba(0,0,0,.4);font-size:.8rem;line-height:1.2;text-decoration:none}.missing:hover{opacity:1}",""]),t.exports=e},180:function(t,e,r){"use strict";r.r(e);var n={props:{systemData:{type:Object},category:{type:String}}},o=(r(178),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"cell"},[Object.keys(t.systemData).length?r("div",{staticClass:"cell__inner"},[t.systemData[t.category]?r("div",["homepage"===t.category||"plugin_store"===t.category?r("div",[r("a",{attrs:{href:t.systemData[t.category].url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.systemData[t.category].text))])]):r("div",[t._v("\n        "+t._s(t.systemData[t.category].text)+"\n\n        "),t.systemData[t.category].source?r("a",{staticClass:"source",attrs:{href:t.systemData[t.category].source,target:"_blank",rel:"noopener"}},[t._v("Source")]):t._e()])]):r("a",{staticClass:"missing",attrs:{href:""}},[t._m(0)])]):r("small",[t._v("\n    LOADING!\n  ")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("\n        Missing data."),e("br"),this._v("\n        Click here to contribute.\n      ")])}],!1,null,null,null);e.default=component.exports},181:function(t){t.exports=JSON.parse('{"categories":{"homepage":{"title":"Homepage"},"pricing":{"title":"Pricing"},"enterprise_support":{"title":"Enterprise support"},"extendable":{"title":"Extendable"},"plugin_store":{"title":"Plugin store"},"custom_themes":{"title":"Custom themes"},"hosting":{"title":"Hosting"},"programming_language":{"title":"Programming language"},"framework":{"title":"Framework"},"database":{"title":"Database"},"scheduled_publishing":{"title":"Scheduled publishing"},"signup_confirmation_email":{"title":"Singup confirmation email"},"emails_via_extensions":{"title":"Sending emails via custom extensions"},"2fa":{"title":"2FA"},"rest_api":{"title":"REST API"},"graphql":{"title":"GraphQL"},"image_upload":{"title":"Image upload"},"image_transformations":{"title":"Image transformations"},"comments":{"title":"Comments"},"i18n_pages":{"title":"Translations per page"},"i18n_site_tree":{"title":"Customizable site tree per translation"},"search":{"title":"Search"},"review_workflow":{"title":"Review workflow for editors"},"content_versioning":{"title":"Versioning for content"},"authentication_mechanism":{"title":"Authentication mechanism"}},"systems":{"contentful":{"title":"Contentful","logo":"contentful.svg"},"craft_cms":{"title":"Craft CMS"},"datocms":{"title":"DatoCMS"},"ghost":{"title":"Ghost"},"graphcms":{"title":"GraphCMS","logo":"graphcms.svg"},"grav":{"title":"Grav"},"kirby":{"title":"Kirby"},"squarespace":{"title":"Squarespace","logo":"squarespace.svg"},"strapi":{"title":"Strapi"},"typo3":{"title":"TYPO3","logo":"typo3.png"},"wix":{"title":"Wix"},"wordpress":{"title":"WordPress","logo":"wordpress.png"},"wordpresscom":{"title":"WordPress.com"},"statamic":{"title":"Statamic"},"adobe_experience_manager":{"title":"Adobe Experience Manager"}}}')},182:function(t,e,r){var content=r(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("6b1f5b7a",content,!0,{sourceMap:!1})},184:function(t,e,r){var map={"./contentful.svg":185,"./graphcms.svg":186,"./squarespace.svg":187,"./typo3.png":188,"./wordpress.png":189};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=184},185:function(t,e,r){t.exports=r.p+"img/contentful.2af8953.svg"},186:function(t,e,r){t.exports=r.p+"img/graphcms.bf3f499.svg"},187:function(t,e,r){t.exports=r.p+"img/squarespace.47ad17c.svg"},188:function(t,e,r){t.exports=r.p+"img/typo3.1827893.png"},189:function(t,e,r){t.exports=r.p+"img/wordpress.ca7536f.png"},190:function(t,e,r){var map={"./adobe_experience_manager.yml":[194,8],"./config.yml":[181],"./contentful.yml":[195,9],"./craft_cms.yml":[196,10],"./datocms.yml":[197,11],"./ghost.yml":[198,12],"./graphcms.yml":[199,13],"./grav.yml":[200,14],"./kirby.yml":[201,15],"./squarespace.yml":[202,16],"./statamic.yml":[203,17],"./strapi.yml":[204,18],"./typo3.yml":[205,19],"./wix.yml":[206,20],"./wordpress.yml":[207,21],"./wordpresscom.yml":[208,22]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r.t(n,3)}))}n.keys=function(){return Object.keys(map)},n.id=190,t.exports=n},191:function(t,e,r){"use strict";r(182)},192:function(t,e,r){(e=r(16)(!1)).push([t.i,'.cms{margin-left:1rem;margin-right:1rem;font-size:.9rem}.table-wrapper{position:relative;box-shadow:3px 3px 5px 0 rgba(0,0,0,.05);background-color:#fff}.table-wrapper:after{content:"";position:absolute;right:0;top:0;width:10rem;height:100%;background:linear-gradient(270deg,#fff,transparent)}.table-wrapper__inner{overflow-x:auto}.table-wrapper__inner::-webkit-scrollbar,.table-wrapper__inner::-webkit-scrollbar-track{height:.3rem;background-color:transparent}.table-wrapper__inner::-webkit-scrollbar-thumb{background-color:rgba(96,159,159,.3)}table{table-layout:fixed;width:100%;padding:0 1rem 1rem;line-height:1.5}thead th{width:12rem;max-height:5rem;vertical-align:center}thead th:first-of-type{width:9rem}thead th:first-of-type span{border-bottom:none}thead th img{width:90%;margin-left:auto;margin-right:auto}tbody td,tbody th{vertical-align:top}tbody th{text-align:left}th{padding:.5rem}th span{display:inline-block;padding-bottom:.25rem;border-bottom:2px solid rgba(96,159,159,.3)}td:nth-of-type(odd){background-color:rgba(96,159,159,.05)}td:nth-of-type(2n){background-color:rgba(96,159,159,.1)}',""]),t.exports=e},213:function(t,e,r){"use strict";r.r(e);r(63),r(26),r(27),r(11),r(49);var n=r(35),o=r(181);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={};for(var f in o.systems)o.systems.hasOwnProperty(f)&&(m[f]={});var d={name:"ContentManagementSystems",data:function(){var t=[];for(var e in o.systems)o.systems.hasOwnProperty(e)&&t.push(c({id:e},o.systems[e]));var r=[];for(var n in o.categories)o.categories.hasOwnProperty(n)&&r.push({id:n,title:o.categories[n].title});return{categories:r,systems:t,systemData:m}},created:function(){var t=this,e=function(e){if(!o.systems.hasOwnProperty(e))return"continue";r(190)("./".concat(e,".yml")).then((function(r){t.systemData[e]=r.default?r.default:{}}))};for(var n in o.systems)e(n)}},y=(r(191),r(6)),component=Object(y.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"cms"},[n("div",{staticClass:"table-wrapper"},[n("div",{staticClass:"table-wrapper__inner"},[n("table",[n("thead",[n("tr",[n("th"),t._v(" "),t._l(t.systems,(function(e){return n("th",{key:e.id},[e.logo?n("img",{attrs:{src:r(184)("./"+e.logo),alt:e.title}}):n("span",[t._v(t._s(e.title))])])}))],2)]),t._v(" "),n("tbody",t._l(t.categories,(function(e){return n("tr",{key:e},[n("th",[n("span",[t._v(t._s(e.title))])]),t._v(" "),t._l(t.systems,(function(r){return n("Cell",{key:r.id,attrs:{systemData:t.systemData[r.id],category:e.id}})}))],2)})),0)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cell:r(180).default})}}]);