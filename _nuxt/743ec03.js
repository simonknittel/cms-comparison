(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4,6,10],{197:function(e,t,r){var content=r(208);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("c45d606a",content,!0,{sourceMap:!1})},198:function(e,t,r){var content=r(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("330b0a88",content,!0,{sourceMap:!1})},199:function(e,t,r){var content=r(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("535b1b84",content,!0,{sourceMap:!1})},206:function(e,t,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("08d576a4",content,!0,{sourceMap:!1})},207:function(e,t,r){"use strict";r(197)},208:function(e,t,r){var o=r(42)(!1);o.push([e.i,"th[data-v-43955a79]{z-index:3;position:sticky;left:0;width:14rem;padding:.5rem;box-shadow:2px 0 5px -3px rgba(0,0,0,.2);background-color:#fff;text-align:left;font-size:.8rem}@media(min-width:40rem){th[data-v-43955a79]{padding:1rem;font-size:1rem}}",""]),e.exports=o},209:function(e,t,r){"use strict";r(198)},210:function(e,t,r){var o=r(42)(!1);o.push([e.i,"td[data-v-be232192]{position:relative;width:14rem;padding:.5rem}@media(min-width:40rem){td[data-v-be232192]{padding:1rem}}.source[data-v-be232192]{display:block;margin-top:.125rem;color:rgba(0,0,0,.3)}",""]),e.exports=o},211:function(e,t,r){var content=r(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("e714e3ba",content,!0,{sourceMap:!1})},212:function(e,t,r){"use strict";r(199)},213:function(e,t,r){var o=r(42),n=r(214),l=r(215),c=o(!1),d=n(l);c.push([e.i,".label[data-v-9932e49c]{display:block;position:relative;padding-top:.25rem;padding-bottom:.25rem}.label[data-v-9932e49c]:hover{cursor:pointer}.label.is-child[data-v-9932e49c]{--checkbox-size:1.5rem;margin-left:calc(var(--checkbox-size) + .9rem)}.checkbox[data-v-9932e49c]{visibility:hidden;position:absolute;height:0;width:0}.fake-checkbox[data-v-9932e49c]{display:inline-block;vertical-align:middle;--checkbox-size:1.5rem;width:var(--checkbox-size);height:var(--checkbox-size);margin-right:.5rem;border:1px solid #40bfbf;border-radius:2px}.checkbox:checked+.fake-checkbox[data-v-9932e49c],.label:hover .fake-checkbox[data-v-9932e49c]{background-color:#40bfbf}.checkbox:checked+.fake-checkbox[data-v-9932e49c]{background-image:url("+d+");background-position:50%;background-repeat:no-repeat;background-size:70%}",""]),e.exports=c},214:function(e,t,r){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},215:function(e,t,r){e.exports=r.p+"4b6f86b7dab7dc55a23d7171581f6990.svg"},216:function(e,t,r){"use strict";r.r(t);var o={name:"RowHead",props:{title:{type:String,required:!0}}},n=(r(207),r(14)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("th",[e._v("\n  "+e._s(e.title)+"\n")])}),[],!1,null,"43955a79",null);t.default=component.exports},217:function(e,t,r){"use strict";r.r(t);var o={props:{system:Object,categoryId:String}},n=(r(209),r(14)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[Object.keys(e.system).length?r("div",[e.system[e.categoryId]?r("div",["homepage"===e.categoryId||"plugin_store"===e.categoryId?r("div",[r("a",{attrs:{href:e.system[e.categoryId].url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.system[e.categoryId].text))])]):r("div",[e._v("\n        "+e._s(e.system[e.categoryId].text)+"\n\n        "),e.system[e.categoryId].source?r("a",{staticClass:"source",attrs:{href:e.system[e.categoryId].source,target:"_blank",rel:"noopener"}},[e._v("Source")]):e._e()])]):e._e()]):r("small",[e._v("\n    LOADING!\n  ")])])}),[],!1,null,"be232192",null);t.default=component.exports},218:function(e,t,r){"use strict";r.r(t);var o={name:"FilterItem",props:{title:{type:String,required:!0},disabled:{type:Boolean,required:!0},isChild:{type:Boolean},onChange:{type:Function,required:!0}}},n=(r(212),r(14)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{class:{label:!0,"is-child":e.isChild}},[r("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:e.disabled},on:{change:e.onChange}}),e._v(" "),r("span",{staticClass:"fake-checkbox"}),e._v("\n  "+e._s(e.title)+"\n")])}),[],!1,null,"9932e49c",null);t.default=component.exports},219:function(e,t,r){"use strict";r.r(t);r(246);var o=r(14),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"table-wrapper"},[r("div",{staticClass:"table-wrapper__inner"},[r("table",[r("TableHead"),e._v(" "),r("TableBody")],1)])]),e._v(" "),e.$store.state.filters.overlayVisible?r("Filters"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableHead:r(257).default,TableBody:r(244).default,Filters:r(245).default,Main:r(219).default})},234:function(e,t,r){"use strict";r(206)},235:function(e,t,r){var o=r(42)(!1);o.push([e.i,"table[data-v-3b1a3578]{table-layout:fixed;width:100%;border-spacing:0;line-height:1.5}td[data-v-3b1a3578],th[data-v-3b1a3578]{vertical-align:top}.parent th[data-v-3b1a3578]{font-weight:400}.parent-title[data-v-3b1a3578]{box-shadow:2px 0 5px -3px rgba(0,0,0,.2);background-color:#f4fbfb}.parent-title-inner[data-v-3b1a3578]{display:inline-block;z-index:3;position:sticky;left:0;padding:.5rem;font-weight:700;font-size:.8rem}@media(min-width:40rem){.parent-title-inner[data-v-3b1a3578]{padding:1rem;font-size:1rem}}",""]),e.exports=o},236:function(e,t,r){"use strict";r(211)},237:function(e,t,r){var o=r(42)(!1);o.push([e.i,".container[data-v-25462d7a]{z-index:5;position:fixed;left:0;right:0;top:0;bottom:0}.background[data-v-25462d7a]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:hsla(0,0%,100%,.2)}.overlay[data-v-25462d7a]{box-shadow:3px 3px 5px 0 rgba(64,191,191,.2);z-index:1;position:relative;margin-left:auto;margin-right:auto;margin-top:5rem;width:62rem;max-width:95vw;height:calc(100% - 10rem);border-radius:3px;border:1px solid #40bfbf;background-color:#fff}.inner[data-v-25462d7a]{overflow:auto;height:100%;padding:2rem}.description[data-v-25462d7a]{margin-top:.5rem}.grid[data-v-25462d7a]{display:flex;margin-top:2rem}.left[data-v-25462d7a],.right[data-v-25462d7a]{width:50%}.column-list[data-v-25462d7a]{margin-top:.5rem}.close[data-v-25462d7a]{box-shadow:3px 3px 5px 0 rgba(64,191,191,.2);cursor:pointer;display:flex;justify-content:center;align-items:center;padding:.5rem;border:none;border-radius:.25rem;background-color:#40bfbf;color:#fff;position:absolute;right:0;top:2rem;transform:translateX(50%)}.close svg[data-v-25462d7a]{width:1rem;height:1rem;margin-right:.5rem}.close[data-v-25462d7a]:focus,.close[data-v-25462d7a]:hover{cursor:pointer;background-color:#6cc}.close[data-v-25462d7a]:active{background-color:#399}",""]),e.exports=o},238:function(e,t,r){var content=r(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("0eb76c23",content,!0,{sourceMap:!1})},244:function(e,t,r){"use strict";r.r(t);r(25),r(200),r(34),r(27);var o={name:"TableBody",computed:{visibleSystems:function(){var e=this;return Object.values(this.$store.state.cms.systems).filter((function(t){var r=t.id;return!e.$store.state.filters.disabledSystems.includes(r)})).sort((function(a,b){return a.title.localeCompare(b.title)}))}}},n=(r(234),r(14)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tbody",e._l(e.$store.state.cms.categories,(function(t){return r("tr",{key:t.id},[t.children?r("td",{staticClass:"parent",attrs:{colspan:e.visibleSystems.length+1}},[r("div",{staticClass:"parent-title"},[r("span",{staticClass:"parent-title-inner"},[e._v(e._s(t.title))])]),e._v(" "),r("table",[r("tbody",e._l(t.children,(function(t){return r("tr",{key:t.id},[r("RowHead",{attrs:{title:t.title}}),e._v(" "),e._l(e.visibleSystems,(function(e){return r("Cell",{key:e.id,attrs:{system:e,categoryId:t.id}})}))],2)})),0)])]):[r("RowHead",{attrs:{title:t.title}}),e._v(" "),e._l(e.visibleSystems,(function(e){return r("Cell",{key:e.id,attrs:{system:e,categoryId:t.id}})}))]],2)})),0)}),[],!1,null,"3b1a3578",null);t.default=component.exports;installComponents(component,{RowHead:r(216).default,Cell:r(217).default})},245:function(e,t,r){"use strict";r.r(t);r(26),r(18),r(25),r(44),r(45);var o=r(17),n=r(7),l=(r(85),r(34),r(27),r(200),r(54)),c=r(80),d=r(203);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"Filters",components:{CrossIcon:r.n(d).a},computed:{systems:function(){for(var e=[],t=0,r=Object.entries(c.b);t<r.length;t++){var o=Object(n.a)(r[t],2),l=o[0],d=o[1];e.push(h({id:l,disabled:this.$store.state.filters.disabledSystems.includes(l)},d))}return e},keymap:function(){return{esc:this.hideOverlay}},categories:function(){for(var e=[],t=0,r=Object.values(this.$store.state.cms.categories);t<r.length;t++){var o=r[t];if(e.push(o),o.children)for(var n=0,l=Object.values(o.children);n<l.length;n++){var c=l[n];e.push(h({isChild:!0},c))}}return e}},methods:h({onChange:function(e,t){e.currentTarget.checked?this.$store.commit("filters/disableSystem",t):this.$store.commit("filters/enableSystem",t)}},Object(l.b)({hideOverlay:"filters/hideOverlay"}))},m=(r(236),r(14)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"hotkey",rawName:"v-hotkey",value:e.keymap,expression:"keymap"}],staticClass:"container"},[r("div",{staticClass:"background",on:{click:e.hideOverlay}}),e._v(" "),r("div",{staticClass:"overlay"},[r("button",{staticClass:"close",attrs:{title:"Close filters"},on:{click:e.hideOverlay}},[r("CrossIcon"),e._v("\n      Close\n    ")],1),e._v(" "),r("div",{staticClass:"inner"},[r("h2",{staticClass:"heading"},[e._v("Filters")]),e._v(" "),r("p",{staticClass:"description"},[e._v("Select a checkbox to hide individual columns and rows")]),e._v(" "),r("div",{staticClass:"grid"},[r("div",{staticClass:"left"},[r("h3",{staticClass:"subheading"},[e._v("Columns")]),e._v(" "),r("div",{staticClass:"column-list"},e._l(e.systems,(function(t){return r("FilterItem",{key:t.id,attrs:{title:t.title,disabled:t.disabled,onChange:function(r){e.onChange(r,t.id)}}})})),1)]),e._v(" "),r("div",{staticClass:"right"},[r("h3",{staticClass:"subheading"},[e._v("Rows")]),e._v(" "),r("div",{staticClass:"column-list"},e._l(e.categories,(function(e){return r("FilterItem",{key:e.id,attrs:{title:e.title,disabled:!1,isChild:e.isChild,onChange:function(){}}})})),1)])])])])])}),[],!1,null,"25462d7a",null);t.default=component.exports;installComponents(component,{FilterItem:r(218).default})},246:function(e,t,r){"use strict";r(238)},247:function(e,t,r){var o=r(42)(!1);o.push([e.i,"main{position:absolute;left:0;right:0;top:6rem;bottom:0;font-size:.9rem}@media(min-width:40rem){main{left:1rem;right:1rem;bottom:1rem}}.table-wrapper{box-shadow:3px 3px 5px 0 rgba(64,191,191,.2);height:100%;background-color:#fff}.table-wrapper__inner{overflow:scroll;height:100%}.table-wrapper__inner::-webkit-scrollbar,.table-wrapper__inner::-webkit-scrollbar-track{width:.3rem;height:.3rem;background-color:transparent}.table-wrapper__inner::-webkit-scrollbar-thumb{background-color:#40bfbf}table{table-layout:fixed;width:100%;border-spacing:0;line-height:1.5}",""]),e.exports=o}}]);