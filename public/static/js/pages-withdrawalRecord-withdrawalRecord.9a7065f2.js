(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-withdrawalRecord-withdrawalRecord"],{"2aaf":function(t,n,a){"use strict";var e=a("ee27");a("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("49bd")),o={components:{adCell:i.default},data:function(){return{list:[],page:1,noMore:!1}},methods:{getList:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$api.withdrawLog().then((function(n){console.log(n),t.list=t.list.concat(n.data.lists.data),t.list.length===n.data.lists.total&&(t.noMore=!0)}))}},onReachBottom:function(){this.noMore||(this.page++,this.getList(this.page))},onLoad:function(){this.getList()}};n.default=o},"34b3":function(t,n,a){var e=a("df90");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("03ee7628",e,!0,{sourceMap:!1,shadowMode:!1})},"49e5":function(t,n,a){"use strict";var e,i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"box"},[t._l(t.list,(function(n,e){return a("v-uni-view",{key:e,staticClass:"item"},[a("adCell",{attrs:{text:"提现金额："+n.money,detail:0===n.status?"待审核":1===n.status?"审合通过":"驳回",note:n.created_at,textColor:"#000",detailColor:"#000",showArrow:"false"}}),3===n.type?a("v-uni-view",{staticClass:"way bgwhite pd10"},[a("v-uni-text",[t._v("微信提现")]),a("v-uni-text",[t._v(t._s(n.weixin))])],1):t._e(),2===n.type?a("v-uni-view",{staticClass:"way bgwhite pd10"},[a("v-uni-text",[t._v("支付宝提现")]),a("v-uni-text",[t._v(t._s(n.alipay))])],1):t._e(),1===n.type?a("v-uni-view",{staticClass:"way bgwhite pd10"},[a("v-uni-text",[t._v("银行卡提现")]),a("v-uni-text",[t._v(t._s(n.bank_no))])],1):t._e()],1)})),t.noMore?a("v-uni-text",{staticClass:"noMore bgwhite textcenter block"},[t._v("没有更多了~")]):t._e()],2)},o=[];a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}))},"7bb0":function(t,n,a){"use strict";a.r(n);var e=a("2aaf"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},b39e:function(t,n,a){"use strict";var e=a("34b3"),i=a.n(e);i.a},df1c:function(t,n,a){"use strict";a.r(n);var e=a("49e5"),i=a("7bb0");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("b39e");var r,s=a("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"c09141a4",null,!1,e["a"],r);n["default"]=c.exports},df90:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-c09141a4]{min-height:100%;background-color:#f4f6f6}.box[data-v-c09141a4]{padding-top:8px}.box .item[data-v-c09141a4]{margin-bottom:8px}.box .item .way[data-v-c09141a4]{font-size:12px}.box .item .way uni-text[data-v-c09141a4]:nth-of-type(1){color:#999;margin-right:20px}.box .item[data-v-c09141a4]:last-of-type{margin-bottom:0}.box .noMore[data-v-c09141a4]{font-size:12px;padding:5px 0;color:#ccc}body.?%PAGE?%[data-v-c09141a4]{background-color:#f4f6f6}',""]),t.exports=n}}]);