(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,9],{198:function(t,e,r){var content=r(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("c45d606a",content,!0,{sourceMap:!1})},199:function(t,e,r){var content=r(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("330b0a88",content,!0,{sourceMap:!1})},201:function(t,e,r){var n=r(4),o=r(125)(!1);n(n.S,"Object",{values:function(t){return o(t)}})},217:function(t,e,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("08d576a4",content,!0,{sourceMap:!1})},218:function(t,e,r){"use strict";r(198)},219:function(t,e,r){var n=r(42)(!1);n.push([t.i,"th[data-v-43955a79]{z-index:3;position:sticky;left:0;width:14rem;padding:.5rem;box-shadow:2px 0 5px -3px rgba(0,0,0,.2);background-color:#fff;text-align:left;font-size:.8rem}@media(min-width:40rem){th[data-v-43955a79]{padding:1rem;font-size:1rem}}",""]),t.exports=n},220:function(t,e,r){"use strict";r(199)},221:function(t,e,r){var n=r(42)(!1);n.push([t.i,"td[data-v-be232192]{position:relative;width:14rem;padding:.5rem}@media(min-width:40rem){td[data-v-be232192]{padding:1rem}}.source[data-v-be232192]{display:block;margin-top:.125rem;color:rgba(0,0,0,.3)}",""]),t.exports=n},228:function(t,e,r){"use strict";r.r(e);var n={name:"RowHead",props:{title:{type:String,required:!0}}},o=(r(218),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("th",[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"43955a79",null);e.default=component.exports},229:function(t,e,r){"use strict";r.r(e);var n={props:{system:Object,categoryId:String}},o=(r(220),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[Object.keys(t.system).length?r("div",[t.system[t.categoryId]?r("div",["homepage"===t.categoryId||"plugin_store"===t.categoryId?r("div",[r("a",{attrs:{href:t.system[t.categoryId].url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.system[t.categoryId].text))])]):r("div",[t._v("\n        "+t._s(t.system[t.categoryId].text)+"\n\n        "),t.system[t.categoryId].source?r("a",{staticClass:"source",attrs:{href:t.system[t.categoryId].source,target:"_blank",rel:"noopener"}},[t._v("Source")]):t._e()])]):t._e()]):r("small",[t._v("\n    LOADING!\n  ")])])}),[],!1,null,"be232192",null);e.default=component.exports},234:function(t,e,r){"use strict";r(217)},235:function(t,e,r){var n=r(42)(!1);n.push([t.i,"table[data-v-3b1a3578]{table-layout:fixed;width:100%;border-spacing:0;line-height:1.5}td[data-v-3b1a3578],th[data-v-3b1a3578]{vertical-align:top}.parent th[data-v-3b1a3578]{font-weight:400}.parent-title[data-v-3b1a3578]{box-shadow:2px 0 5px -3px rgba(0,0,0,.2);background-color:#f4fbfb}.parent-title-inner[data-v-3b1a3578]{display:inline-block;z-index:3;position:sticky;left:0;padding:.5rem;font-weight:700;font-size:.8rem}@media(min-width:40rem){.parent-title-inner[data-v-3b1a3578]{padding:1rem;font-size:1rem}}",""]),t.exports=n},247:function(t,e,r){"use strict";r.r(e);r(25),r(201),r(34),r(27);var n={name:"TableBody",computed:{visibleSystems:function(){var t=this;return Object.values(this.$store.state.cms.systems).filter((function(e){var r=e.id;return!t.$store.state.filters.disabledSystems.includes(r)})).sort((function(a,b){return a.title.localeCompare(b.title)}))}}},o=(r(234),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tbody",t._l(t.$store.state.cms.categories,(function(e){return r("tr",{key:e.id},[e.children?r("td",{staticClass:"parent",attrs:{colspan:t.visibleSystems.length+1}},[r("div",{staticClass:"parent-title"},[r("span",{staticClass:"parent-title-inner"},[t._v(t._s(e.title))])]),t._v(" "),r("table",[r("tbody",t._l(e.children,(function(e){return r("tr",{key:e.id},[r("RowHead",{attrs:{title:e.title}}),t._v(" "),t._l(t.visibleSystems,(function(t){return r("Cell",{key:t.id,attrs:{system:t,categoryId:e.id}})}))],2)})),0)])]):[r("RowHead",{attrs:{title:e.title}}),t._v(" "),t._l(t.visibleSystems,(function(t){return r("Cell",{key:t.id,attrs:{system:t,categoryId:e.id}})}))]],2)})),0)}),[],!1,null,"3b1a3578",null);e.default=component.exports;installComponents(component,{RowHead:r(228).default,Cell:r(229).default})}}]);