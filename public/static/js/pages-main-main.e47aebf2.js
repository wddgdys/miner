(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-main"],{"0f75":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-3daa6601]{min-height:100%;background-color:#f4f6f6}.box[data-v-3daa6601]{min-height:100vh-calc(var(--window-bottom) - 0)}.box .bg[data-v-3daa6601]{position:fixed;width:100%;left:0;bottom:0}.box .header[data-v-3daa6601]{border-bottom:1px solid #f5f5f5;margin-bottom:8px}.box .userid[data-v-3daa6601]{padding:20px 10px;margin-bottom:8px}.box .userid > uni-text[data-v-3daa6601]{display:block;padding:4px 0}.box .points[data-v-3daa6601]{padding:15px 0;-webkit-justify-content:space-around;justify-content:space-around;margin-bottom:8px}.box .points .item uni-text[data-v-3daa6601]:nth-of-type(1){margin-bottom:6px;font-size:20px}.box .points .item uni-text[data-v-3daa6601]:nth-of-type(2){font-size:12px}body.?%PAGE?%[data-v-3daa6601]{background-color:#f4f6f6}',""]),t.exports=n},"279b":function(t,n,a){"use strict";var e,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"box"},[e("v-uni-image",{staticClass:"bg",attrs:{src:a("f5a4").replace(/^\./,""),mode:"widthFix"}}),e("v-uni-view",{staticClass:"status_bar"}),e("v-uni-view",{staticClass:"header bgwhite pd10 textcenter"},[t._v("首页")]),e("v-uni-view",{staticClass:"userid bgwhite pd10"},[e("adCell",{attrs:{text:"姓名",detail:t.userinfo.name,textColor:"#000",detailColor:"#000",showArrow:"false"}}),e("adCell",{attrs:{text:"游戏ID",detail:t.userinfo.game,textColor:"#000",detailColor:"#000",showArrow:"false"}}),e("adCell",{attrs:{text:"用户ID",detail:0==t.userinfo.plan?t.userinfo.phone+"(游客)":1==t.userinfo.plan?t.userinfo.phone+"(会员)":2==t.userinfo.plan?t.userinfo.phone+"(高级合伙人)":5==t.userinfo.plan?t.userinfo.phone+"(vip)":"",textColor:"#000",detailColor:"#000",showArrow:"false"}})],1),2!==t.userinfo.plan?e("v-uni-view",{staticClass:"points bgwhite flex"},[e("v-uni-view",{staticClass:"item flex flexcolumn alignItems"},[e("v-uni-text",{staticClass:"block"},[t._v(t._s(t.userinfo.active_points))]),e("v-uni-text",{staticClass:"block"},[t._v("可用积分")])],1),e("v-uni-view",{staticClass:"item flex flexcolumn alignItems"},[e("v-uni-text",{staticClass:"block"},[t._v(t._s(t.userinfo.miner))]),e("v-uni-text",{staticClass:"block"},[t._v("矿机等级")])],1)],1):t._e()],1)},o=[];a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}))},"759b":function(t,n,a){var e=a("0f75");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("71e498c9",e,!0,{sourceMap:!1,shadowMode:!1})},"770b":function(t,n,a){"use strict";a.r(n);var e=a("279b"),i=a("841f");for(var o in i)"default"!==o&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("9aa1");var s,r=a("f0c5"),u=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"3daa6601",null,!1,e["a"],s);n["default"]=u.exports},"841f":function(t,n,a){"use strict";a.r(n);var e=a("f532"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"9aa1":function(t,n,a){"use strict";var e=a("759b"),i=a.n(e);i.a},f532:function(t,n,a){"use strict";var e=a("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("f3f3")),o=e(a("4e7c")),s=a("2f62"),r={components:{adCell:o.default},computed:(0,i.default)({},(0,s.mapState)({userinfo:function(t){return t.userinfo}})),methods:(0,i.default)({},(0,s.mapMutations)(["setUserInfo"]),{getUserInfo:function(){var t=this;this.$api.info().then((function(n){t.setUserInfo(n.data),uni.setStorageSync("userinfo",n.data)}))}}),onShow:function(){this.getUserInfo()}};n.default=r},f5a4:function(t,n,a){t.exports=a.p+"static/img/bg.37b8b3d1.png"}}]);