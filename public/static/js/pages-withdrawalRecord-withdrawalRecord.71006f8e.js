(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-withdrawalRecord-withdrawalRecord"],{"2aaf":function(t,a,n){"use strict";var e=n("ee27");n("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("49bd")),o={components:{adCell:i.default},data:function(){return{list:[],page:1,noMore:!1}},methods:{getList:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$api.withdrawLog({page:a}).then((function(a){console.log(a),t.list=t.list.concat(a.data.lists.data),t.list.length===a.data.lists.total&&(t.noMore=!0)}))}},onReachBottom:function(){this.noMore||(this.page++,this.getList(this.page))},onShow:function(){this.noMore=!1,this.page=1,this.list=[],this.getList()}};a.default=o},"364d":function(t,a,n){var e=n("5f22");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("712344b6",e,!0,{sourceMap:!1,shadowMode:!1})},"5f22":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-489a3a16]{min-height:100%;background-color:#f4f6f6}.box .header[data-v-489a3a16]{margin-bottom:8px}.box .item[data-v-489a3a16]{margin-bottom:8px}.box .item .way[data-v-489a3a16]{font-size:12px}.box .item .way uni-text[data-v-489a3a16]:nth-of-type(1){color:#999;margin-right:20px}.box .item[data-v-489a3a16]:last-of-type{margin-bottom:0}.box .noMore[data-v-489a3a16]{font-size:12px;padding:5px 0;color:#ccc}body.?%PAGE?%[data-v-489a3a16]{background-color:#f4f6f6}',""]),t.exports=a},"7bb0":function(t,a,n){"use strict";n.r(a);var e=n("2aaf"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},"9a2c":function(t,a,n){"use strict";var e=n("364d"),i=n.n(e);i.a},cf49:function(t,a,n){"use strict";var e,i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"header bgwhite pd10 textcenter"},[t._v("提现记录")]),t._l(t.list,(function(a,e){return n("v-uni-view",{key:e,staticClass:"item"},[n("adCell",{attrs:{text:"提现金额："+a.money,detail:0===a.status?"待审核":1===a.status?"审核通过":"驳回",note:a.created_at,textColor:"#000",detailColor:"#000",showArrow:"false"}}),3===a.type?n("v-uni-view",{staticClass:"way bgwhite pd10"},[n("v-uni-text",[t._v("微信提现")]),n("v-uni-text",[t._v(t._s(a.weixin))])],1):t._e(),2===a.type?n("v-uni-view",{staticClass:"way bgwhite pd10"},[n("v-uni-text",[t._v("支付宝提现")]),n("v-uni-text",[t._v(t._s(a.alipay))])],1):t._e(),1===a.type?n("v-uni-view",{staticClass:"way bgwhite pd10"},[n("v-uni-text",[t._v("银行卡提现")]),n("v-uni-text",[t._v(t._s(a.bank_no))])],1):t._e()],1)})),t.noMore?n("v-uni-text",{staticClass:"noMore bgwhite textcenter block"},[t._v("没有更多了~")]):t._e()],2)},o=[];n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}))},df1c:function(t,a,n){"use strict";n.r(a);var e=n("cf49"),i=n("7bb0");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("9a2c");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"489a3a16",null,!1,e["a"],r);a["default"]=c.exports}}]);