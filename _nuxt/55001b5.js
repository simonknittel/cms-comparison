(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{197:function(t,e,r){var content=r(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("2f751da2",content,!0,{sourceMap:!1})},198:function(t,e,r){"use strict";r(197)},199:function(t,e,r){(e=r(16)(!1)).push([t.i,"td[data-v-b79219fe]{position:relative;padding:.5rem}.source[data-v-b79219fe]{display:block;margin-top:.125rem;color:rgba(0,0,0,.3)}.missing[data-v-b79219fe]{opacity:0;position:absolute;left:.5rem;right:.5rem;top:.5rem;bottom:.5rem;padding:.5rem;background-color:rgba(96,159,159,.1);color:rgba(0,0,0,.4);font-size:.8rem;line-height:1.2;text-decoration:none}.missing[data-v-b79219fe]:hover{opacity:1}",""]),t.exports=e},200:function(t,e,r){"use strict";r.r(e);var o={props:{system:Object,categoryId:String}},n=(r(198),r(5)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[Object.keys(t.system).length?r("div",[t.system[t.categoryId]?r("div",["homepage"===t.categoryId||"plugin_store"===t.categoryId?r("div",[r("a",{attrs:{href:t.system[t.categoryId].url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.system[t.categoryId].text))])]):r("div",[t._v("\n        "+t._s(t.system[t.categoryId].text)+"\n\n        "),t.system[t.categoryId].source?r("a",{staticClass:"source",attrs:{href:t.system[t.categoryId].source,target:"_blank",rel:"noopener"}},[t._v("Source")]):t._e()])]):r("a",{staticClass:"missing",attrs:{href:""}},[t._m(0)])]):r("small",[t._v("\n    LOADING!\n  ")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("\n        Missing data."),e("br"),this._v("\n        Click here to contribute.\n      ")])}],!1,null,"b79219fe",null);e.default=component.exports},205:function(t){t.exports=JSON.parse('{"categories":{"homepage":{"title":"Homepage"},"pricing":{"title":"Pricing"},"hosting":{"title":"Hosting"},"product_ratings":{"title":"Product ratings"},"percentage_coupons":{"title":"Discount by a percentage"},"fixed_amount_coupons":{"title":"Discount by a fixed amount"},"max_usages_coupons":{"title":"Limit max usages of coupons"},"stock_management":{"title":"Stock management"}},"systems":{"magento":{"title":"Magento"},"shopify":{"title":"Shopify"},"shopware":{"title":"Shopware"},"woocommerce":{"title":"WooCommerce"}}}')},220:function(t,e,r){var map={"./config.yml":[205],"./magento.yml":[221,23],"./shopify.yml":[222,24],"./shopware.yml":[223,25],"./woocommerce.yml":[224,26]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r.t(o,3)}))}o.keys=function(){return Object.keys(map)},o.id=220,t.exports=o},229:function(t,e,r){"use strict";r.r(e);var o=r(205),n={};for(var c in o.systems)o.systems.hasOwnProperty(c)&&(n[c]={});var l={name:"ShopSystems",head:{title:"Shop Systems"},data:function(){var t=[];for(var e in o.systems)o.systems.hasOwnProperty(e)&&t.push({id:e,title:o.systems[e].title});var r=[];for(var c in o.categories)o.categories.hasOwnProperty(c)&&r.push({id:c,title:o.categories[c].title});return{categories:r,systems:t,systemData:n}},created:function(){var t=this,e=function(e){if(!o.systems.hasOwnProperty(e))return"continue";r(220)("./".concat(e,".yml")).then((function(r){t.systemData[e]=r.default?r.default:{}}))};for(var n in o.systems)e(n)}},m=r(5),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"cms"},[r("div",{staticClass:"table-wrapper"},[r("div",{staticClass:"table-wrapper__inner"},[r("table",[r("thead",[r("tr",[r("th"),t._v(" "),t._l(t.systems,(function(e){return r("th",{key:e.id},[r("span",[t._v(t._s(e.title))])])}))],2)]),t._v(" "),r("tbody",t._l(t.categories,(function(e){return r("tr",{key:e},[r("th",[r("span",[t._v(t._s(e.title))])]),t._v(" "),t._l(t.systems,(function(o){return r("Cell",{key:o.id,attrs:{systemData:t.systemData[o.id],category:e.id}})}))],2)})),0)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Cell:r(200).default})}}]);