(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-main"],{"4e5b":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"box"},[i("v-uni-image",{staticClass:"bg",attrs:{src:n("f5a4").replace(/^\./,""),mode:"widthFix"}}),i("v-uni-view",{staticClass:"status_bar"}),i("v-uni-view",{staticClass:"header bgwhite pd10 textcenter"},[t._v("首页")]),i("v-uni-view",{staticClass:"userid bgwhite pd10"},[i("adCell",{attrs:{text:"姓名",detail:t.userinfo.name,textColor:"#000",detailColor:"#000",showArrow:"false"}}),i("adCell",{attrs:{text:"游戏ID",detail:t.userinfo.game,textColor:"#000",detailColor:"#000",showArrow:"false"}}),i("adCell",{attrs:{text:"用户ID",detail:0==t.userinfo.plan?t.userinfo.phone+"(游客)":1==t.userinfo.plan?t.userinfo.phone+"(会员)":2==t.userinfo.plan?t.userinfo.phone+"(高级合伙人)":5==t.userinfo.plan?t.userinfo.phone+"(vip)":"",textColor:"#000",detailColor:"#000",showArrow:"false"}})],1),2!==t.userinfo.plan?i("v-uni-view",{staticClass:"points bgwhite flex"},[i("v-uni-view",{staticClass:"item flex flexcolumn alignItems"},[i("v-uni-text",{staticClass:"block"},[t._v(t._s(t.userinfo.active_points))]),i("v-uni-text",{staticClass:"block"},[t._v("可用积分")])],1),i("v-uni-view",{staticClass:"item flex flexcolumn alignItems"},[i("v-uni-text",{staticClass:"block"},[t._v(t._s(t.userinfo.miner))]),i("v-uni-text",{staticClass:"block"},[t._v("矿机等级")])],1)],1):t._e(),5==t.userinfo.plan?i("v-uni-view",{staticClass:"points bgwhite flex"},[i("v-uni-view",{staticClass:"item flex flexcolumn alignItems"},[i("v-uni-text",{staticClass:"block"},[t._v(t._s(t.userinfo.count_chu))]),i("v-uni-text",{staticClass:"block"},[t._v("团队初级矿机数")])],1),i("v-uni-view",{staticClass:"item flex flexcolumn alignItems"},[i("v-uni-text",{staticClass:"block"},[t._v(t._s(t.userinfo.count_zho))]),i("v-uni-text",{staticClass:"block"},[t._v("团队中级级矿机数")])],1),i("v-uni-view",{staticClass:"item flex flexcolumn alignItems"},[i("v-uni-text",{staticClass:"block"},[t._v(t._s(t.userinfo.count_gao))]),i("v-uni-text",{staticClass:"block"},[t._v("团队高级级矿机数")])],1)],1):t._e()],1)},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},"770b":function(t,e,n){"use strict";n.r(e);var i=n("4e5b"),a=n("841f");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("ce4c");var o,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"7b541c3f",null,!1,i["a"],o);e["default"]=u.exports},"841f":function(t,e,n){"use strict";n.r(e);var i=n("f532"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},aba8:function(t,e,n){var i=n("e551");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7b5b3ce6",i,!0,{sourceMap:!1,shadowMode:!1})},ce4c:function(t,e,n){"use strict";var i=n("aba8"),a=n.n(i);a.a},e551:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-7b541c3f]{min-height:100%;background-color:#f4f6f6}.box[data-v-7b541c3f]{min-height:100vh-calc(var(--window-bottom) - 0)}.box .bg[data-v-7b541c3f]{position:fixed;width:100%;left:0;bottom:0}.box .header[data-v-7b541c3f]{border-bottom:1px solid #f5f5f5;margin-bottom:8px}.box .userid[data-v-7b541c3f]{padding:20px 10px;margin-bottom:8px}.box .userid > uni-text[data-v-7b541c3f]{display:block;padding:4px 0}.box .points[data-v-7b541c3f]{padding:15px 0;-webkit-justify-content:space-around;justify-content:space-around;margin-bottom:8px}.box .points .item uni-text[data-v-7b541c3f]:nth-of-type(1){margin-bottom:6px;font-size:20px}.box .points .item uni-text[data-v-7b541c3f]:nth-of-type(2){font-size:12px}body.?%PAGE?%[data-v-7b541c3f]{background-color:#f4f6f6}',""]),t.exports=e},f532:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f3f3")),s=i(n("4e7c")),o=n("2f62"),r={components:{adCell:s.default},computed:(0,a.default)({},(0,o.mapState)({userinfo:function(t){return t.userinfo}})),methods:(0,a.default)({},(0,o.mapMutations)(["setUserInfo"]),{getUserInfo:function(){var t=this;this.$api.info().then((function(e){t.setUserInfo(e.data),uni.setStorageSync("userinfo",e.data)}))}}),onShow:function(){this.getUserInfo()}};e.default=r},f5a4:function(t,e,n){t.exports=n.p+"static/img/bg.37b8b3d1.png"}}]);