(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(t,e,r){var content=r(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5835d6b5",content,!0,{sourceMap:!1})},175:function(t,e,r){"use strict";var n=r(173);r.n(n).a},176:function(t,e,r){(e=r(15)(!1)).push([t.i,".cell{position:relative;padding:.5rem}.source{display:block;margin-top:.125rem;color:rgba(0,0,0,.3)}.missing{opacity:0;position:absolute;left:.5rem;right:.5rem;top:.5rem;bottom:.5rem;padding:.5rem;background-color:rgba(96,159,159,.1);color:rgba(0,0,0,.4);font-size:.8rem;line-height:1.2;text-decoration:none}.missing:hover{opacity:1}",""]),t.exports=e},177:function(t,e,r){"use strict";r.r(e);var n={props:{systemData:{type:Object},category:{type:String}}},o=(r(175),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"cell"},[Object.keys(t.systemData).length?r("div",{staticClass:"cell__inner"},[t.systemData[t.category]?r("div",["homepage"===t.category||"plugin_store"===t.category?r("div",[r("a",{attrs:{href:t.systemData[t.category].url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.systemData[t.category].text))])]):r("div",[t._v("\n        "+t._s(t.systemData[t.category].text)+"\n\n        "),t.systemData[t.category].source?r("a",{staticClass:"source",attrs:{href:t.systemData[t.category].source,target:"_blank",rel:"noopener"}},[t._v("Source")]):t._e()])]):r("a",{staticClass:"missing",attrs:{href:""}},[t._m(0)])]):r("small",[t._v("\n    LOADING!\n  ")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("\n        Missing data."),e("br"),this._v("\n        Click here to contribute.\n      ")])}],!1,null,null,null);e.default=component.exports},179:function(t){t.exports=JSON.parse('{"categories":{"homepage":{"title":"Homepage"},"pricing":{"title":"Pricing"},"hosting":{"title":"Hosting"}},"systems":{"magento":{"title":"Magento"},"shopify":{"title":"Shopify"},"shopware":{"title":"Shopware"},"woocommerce":{"title":"WooCommerce"}}}')},186:function(t,e,r){var map={"./config.yml":[179],"./magento.yml":[199,19],"./shopify.yml":[200,20],"./shopware.yml":[201,21],"./woocommerce.yml":[202,22]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r.t(n,3)}))}n.keys=function(){return Object.keys(map)},n.id=186,t.exports=n},204:function(t,e,r){"use strict";r.r(e);var n=r(179),o={};for(var c in n.systems)n.systems.hasOwnProperty(c)&&(o[c]={});var l={name:"ContentManagementSystems",data:function(){var t=[];for(var e in n.systems)n.systems.hasOwnProperty(e)&&t.push({id:e,title:n.systems[e].title});var r=[];for(var c in n.categories)n.categories.hasOwnProperty(c)&&r.push({id:c,title:n.categories[c].title});return{categories:r,systems:t,systemData:o}},created:function(){var t=this,e=function(e){if(!n.systems.hasOwnProperty(e))return"continue";r(186)("./".concat(e,".yml")).then((function(r){t.systemData[e]=r.default?r.default:{}}))};for(var o in n.systems)e(o)}},m=r(6),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"cms"},[r("div",{staticClass:"table-wrapper"},[r("div",{staticClass:"table-wrapper__inner"},[r("table",[r("thead",[r("tr",[r("th"),t._v(" "),t._l(t.systems,(function(e){return r("th",{key:e.id},[r("span",[t._v(t._s(e.title))])])}))],2)]),t._v(" "),r("tbody",t._l(t.categories,(function(e){return r("tr",{key:e},[r("th",[r("span",[t._v(t._s(e.title))])]),t._v(" "),t._l(t.systems,(function(n){return r("Cell",{key:n.id,attrs:{systemData:t.systemData[n.id],category:e.id}})}))],2)})),0)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cell:r(177).default})}}]);