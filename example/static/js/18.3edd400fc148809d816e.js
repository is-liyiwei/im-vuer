webpackJsonp([18],{iBI5:function(i,a){},uscS:function(i,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={name:"radio",data:function(){return{radio1:"我是1",radio2:2,radio3:"",radio4:"big1"}},watch:{radio1:function(i,a){console.log(i,a)},radio2:function(i,a){console.log(i,a)},radio3:function(i,a){console.log(i,a)},radio4:function(i,a){console.log(i,a)}}},t={render:function(){var i=this,a=i.$createElement,o=i._self._c||a;return o("div",{staticClass:"demo-radio"},[o("im-radio",{model:{value:i.radio1,callback:function(a){i.radio1=a},expression:"radio1"}},[o("im-radio-item",{attrs:{val:"我是1"}}),i._v(" "),o("im-radio-item",{attrs:{val:"我是2"}}),i._v(" "),o("im-radio-item",{attrs:{val:"我是3"}})],1),i._v(" "),o("p",{staticClass:"result"},[i._v("已选："+i._s(i.radio1))]),i._v(" "),o("im-radio",{model:{value:i.radio2,callback:function(a){i.radio2=a},expression:"radio2"}},i._l(3,function(i,a){return o("im-radio-item",{key:a,attrs:{val:i,bgColor:"#f00",textColor:"#f00"}})})),i._v(" "),o("p",{staticClass:"result"},[i._v("已选："+i._s(i.radio2))]),i._v(" "),o("im-radio",{model:{value:i.radio3,callback:function(a){i.radio3=a},expression:"radio3"}},[o("im-radio-item",{attrs:{val:"启用1"}}),i._v(" "),o("im-radio-item",{attrs:{val:"启用2"}}),i._v(" "),o("im-radio-item",{attrs:{val:"禁用1",disabled:!0,bgColor:"#333",textColor:"#333"}})],1),i._v(" "),o("p",{staticClass:"result"},[i._v("已选："+i._s(i.radio3))]),i._v(" "),o("im-radio",{model:{value:i.radio4,callback:function(a){i.radio4=a},expression:"radio4"}},[o("im-radio-item",{attrs:{val:"big1",size:"60px"}}),i._v(" "),o("im-radio-item",{attrs:{val:"big2",size:"60px"}}),i._v(" "),o("im-radio-item",{attrs:{val:"big3",size:"60px"}})],1),i._v(" "),o("p",{staticClass:"result"},[i._v("已选："+i._s(i.radio4))])],1)},staticRenderFns:[]};var e=o("C7Lr")(r,t,!1,function(i){o("iBI5")},"data-v-06d2efeb",null);a.default=e.exports}});