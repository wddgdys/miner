(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"098d":function(t,e,n){"use strict";n.r(e);var o=n("80e6"),a=n("34a1");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("1711");var i,s=n("f0c5"),l=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"365b2f79",null,!1,o["a"],i);e["default"]=l.exports},1711:function(t,e,n){"use strict";var o=n("f639"),a=n.n(o);a.a},"34a1":function(t,e,n){"use strict";n.r(e);var o=n("bf36"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"80e6":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"total bgwhite"},[n("v-uni-text",{staticClass:"textcenter block"},[t._v(t._s(t.points))]),n("v-uni-text",{staticClass:"textcenter block"},[t._v("累计积分")])],1),n("v-uni-view",{staticClass:"level1"},[n("adCell",{attrs:{text:"一级",textColor:"#000",showArrow:"false"}}),t._l(t.list1,(function(t,e){return n("adCell",{key:e,attrs:{text:"用户id："+t.phone,detail:"2400积分",textColor:"#000",detailColor:"#FF3030",showArrow:"false"}})})),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:!t.noMore1,expression:"!noMore1"}],staticClass:"block textcenter",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(1)}}},[t._v("点击加载更多")]),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.noMore1,expression:"noMore1"}],staticClass:"block textcenter noMore"},[t._v("没有更多了~")])],2),n("v-uni-view",{staticClass:"level2"},[n("adCell",{attrs:{text:"二级",textColor:"#000",showArrow:"false"}}),t._l(t.list2,(function(t,e){return n("adCell",{key:e,attrs:{text:"用户id："+t.phone,detail:"2400积分",textColor:"#000",detailColor:"#FF3030",showArrow:"false"}})})),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:!t.noMore2,expression:"!noMore2"}],staticClass:"block textcenter",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(2)}}},[t._v("点击加载更多")]),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.noMore2,expression:"noMore2"}],staticClass:"block textcenter noMore"},[t._v("没有更多了~")])],2)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},"85f9":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-365b2f79]{min-height:100%;background-color:#f4f6f6}.box[data-v-365b2f79]{height:100%}.box .total[data-v-365b2f79]{margin-top:8px;padding:20px;margin-bottom:8px}.box .total > uni-text[data-v-365b2f79]:nth-of-type(1){font-size:40px;margin-bottom:5px}.box .total > uni-text[data-v-365b2f79]:nth-of-type(2){font-size:12px}.box .level1[data-v-365b2f79]{margin-bottom:8px}.box .level1 uni-text[data-v-365b2f79]{background-color:#fff;font-size:12px;padding:5px 0}.box .level1 uni-text.noMore[data-v-365b2f79]{color:#ccc}.box .level2 uni-text[data-v-365b2f79]{background-color:#fff;font-size:12px;padding:5px 0}.box .level2 uni-text.noMore[data-v-365b2f79]{color:#ccc}body.?%PAGE?%[data-v-365b2f79]{background-color:#f4f6f6}',""]),t.exports=e},bf36:function(t,e,n){"use strict";var o=n("ee27");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("49bd")),r={components:{adCell:a.default},data:function(){return{points:0,list1:[],list2:[],page1:1,page2:1,noMore1:!1,noMore2:!1}},methods:{getList:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$api.lists({type:t,page:n}).then((function(n){console.log(n),e.points=n.data.points,1===t?(e.list1=e.list1.concat(n.data.lists.data),e.list1.length===n.data.lists.total&&(e.noMore1=!0)):2===t&&(e.list2=e.list2.concat(n.data.lists.data),e.list2.length===n.data.lists.total&&(e.noMore2=!0))}))},loadMore:function(t){1===t&&this.page1++,2===t&&this.page2++,this.getList(t,1===t?this.page1:this.page2)}},onLoad:function(){this.getList(1),this.getList(2)}};e.default=r},f639:function(t,e,n){var o=n("85f9");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("15271cfd",o,!0,{sourceMap:!1,shadowMode:!1})}}]);