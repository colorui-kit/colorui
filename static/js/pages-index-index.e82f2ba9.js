(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{PageCur:"basics"}},methods:{NavChange:function(a){this.PageCur=a.currentTarget.dataset.cur}}};t.default=e},8069:function(a,t,n){"use strict";n.r(t);var e=n("0d9b"),i=n.n(e);for(var c in e)["default"].indexOf(c)<0&&function(a){n.d(t,a,(function(){return e[a]}))}(c);t["default"]=i.a},f75a:function(a,t,n){"use strict";n.r(t);var e=n("f9bf"),i=n("8069");for(var c in i)["default"].indexOf(c)<0&&function(a){n.d(t,a,(function(){return i[a]}))}(c);var u,r=n("f0c5"),s=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"0162c65a",null,!1,e["a"],u);t["default"]=s.exports},f9bf:function(a,t,n){"use strict";var e;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return e}));var i=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",["basics"==a.PageCur?n("basics"):a._e(),"component"==a.PageCur?n("components"):a._e(),"plugin"==a.PageCur?n("plugin"):a._e(),n("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[n("v-uni-view",{staticClass:"action",attrs:{"data-cur":"basics"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-cu-image"},[n("v-uni-image",{attrs:{src:"/static/tabbar/basics"+["basics"==a.PageCur?"_cur":""]+".png"}})],1),n("v-uni-view",{class:"basics"==a.PageCur?"text-green":"text-gray"},[a._v("元素")])],1),n("v-uni-view",{staticClass:"action",attrs:{"data-cur":"component"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-cu-image"},[n("v-uni-image",{attrs:{src:"/static/tabbar/component"+["component"==a.PageCur?"_cur":""]+".png"}})],1),n("v-uni-view",{class:"component"==a.PageCur?"text-green":"text-gray"},[a._v("组件")])],1),n("v-uni-view",{staticClass:"action",attrs:{"data-cur":"plugin"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-cu-image"},[n("v-uni-image",{attrs:{src:"/static/tabbar/plugin"+["plugin"==a.PageCur?"_cur":""]+".png"}})],1),n("v-uni-view",{class:"plugin"==a.PageCur?"text-green":"text-gray"},[a._v("扩展")])],1)],1)],1)},c=[]}}]);