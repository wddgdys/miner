(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0201":function(t,e,n){"use strict";n.r(e);var i=n("dde4"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"1d05":function(t,e,n){"use strict";n.r(e);var i=n("6381"),o=n("0201");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("a9e9");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"b577c636",null,!1,i["a"],s);e["default"]=c.exports},"637b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box .header[data-v-b577c636]{border-bottom:1px solid #f5f5f5;margin-bottom:30px}.box .tabs[data-v-b577c636]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:16px;margin-bottom:20px}.box .tabs > uni-view[data-v-b577c636]{padding:0 20px}.box .tabs > uni-view uni-text[data-v-b577c636]{display:block;margin-bottom:5px}.box .tabs > uni-view .line[data-v-b577c636]{height:3px;width:40px;margin:0 auto;background-color:#fff}.box .tabs uni-view.active[data-v-b577c636]{color:#ff3030}.box .tabs uni-view.active .line[data-v-b577c636]{height:3px;background-color:#ff3030}.box .input[data-v-b577c636]{width:90%;height:52px;border-radius:26px;border:1px solid #d3d3d3;font-size:15px;padding-left:30px;margin:0 auto;box-sizing:border-box;margin-bottom:30px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.box .input uni-input[data-v-b577c636]{height:100%;font-size:15px}.box .input .canClick[data-v-b577c636]{color:#ff3030}.box .input .noClick[data-v-b577c636]{color:#ccc}.box .getCode[data-v-b577c636]{font-size:12px;width:60px;text-align:center;margin-right:30px}.box > uni-button[data-v-b577c636]{width:90%;height:52px;border-radius:26px;border:none;background-color:#ff3030;color:#fff}.box .register[data-v-b577c636]{width:80%;margin:0 auto 20px auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.box .register uni-text[data-v-b577c636]{color:#ff3030;font-size:13px;text-align:right}.box .register uni-text[data-v-b577c636]:nth-of-type(2){color:#999}',""]),t.exports=e},6381:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"status_bar"}),n("v-uni-view",{staticClass:"header pd10 textcenter"},[t._v("登录")]),n("v-uni-view",{staticClass:"tabs"},[n("v-uni-view",{class:{active:1===t.loginType},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(1)}}},[n("v-uni-text",[t._v("密码登录")]),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{class:{active:2===t.loginType},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(2)}}},[n("v-uni-text",[t._v("验证码登录")]),n("v-uni-view",{staticClass:"line"})],1)],1),n("v-uni-input",{staticClass:"pd10 input",attrs:{type:"text",placeholder:"请输入账号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),1===t.loginType?n("v-uni-input",{staticClass:"pd10 input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}):t._e(),2===t.loginType?n("v-uni-view",{staticClass:"flex input alignItems"},[n("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码"},model:{value:t.phoneCode,callback:function(e){t.phoneCode=e},expression:"phoneCode"}}),n("v-uni-view",{staticClass:"getCode",class:{canClick:t.canClick,noClick:!t.canClick},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.btnText))])],1):t._e(),n("v-uni-view",{staticClass:"register flex"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/register/register")}}},[t._v("去注册")]),1===t.loginType?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/forgot/forgot")}}},[t._v("忘记密码")]):t._e()],1),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("登录")])],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"6c21":function(t,e,n){var i=n("637b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("f98a2a2c",i,!0,{sourceMap:!1,shadowMode:!1})},a9e9:function(t,e,n){"use strict";var i=n("6c21"),o=n.n(i);o.a},dde4:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("f3f3")),a=n("2f62"),s={data:function(){return{phone:"",password:"",phoneCode:"",loginType:1,btnText:"获取验证码",time:60,canClick:!0}},methods:(0,o.default)({},(0,a.mapMutations)(["setUserInfo"]),{changeTab:function(t){this.phoneCode="",this.password="",this.loginType=t},go:function(t){"/pages/register/register"===t?uni.redirectTo({url:t}):uni.navigateTo({url:t})},getCode:function(){var t=this;if(this.canClick){var e=/^1(3|4|5|6|7|8|9)\d{9}$/;if(!e.test(this.phone))return void uni.showToast({title:"请输入正确的手机号",icon:"none"});this.$api.send({phone:this.phone}).then((function(e){0===e.code?t.startTimer():uni.showToast({title:e.message,icon:"none"})}))}},startTimer:function(){var t=this;this.canClick=!1,this.btnText=this.time;var e=setInterval((function(){t.time--,t.btnText=t.time,t.time<=0&&(t.btnText="获取验证码",t.time=60,t.canClick=!0,clearInterval(e))}),1e3)},login:function(){var t=this;if(1===this.loginType){if(!this.phone||!this.password)return void uni.showToast({title:"请填写用户名和密码",icon:"none"});this.$api.login({phone:this.phone,password:this.password}).then((function(e){0===e.code?(uni.setStorageSync("userinfo",e.data.user),t.setUserInfo(e.data.user),uni.setStorageSync("token",e.data.token),uni.switchTab({url:"/pages/withdrawalRecord/withdrawalRecord"})):uni.showToast({title:e.message,icon:"none"})}))}else{if(!this.phone||!this.phoneCode)return void uni.showToast({title:"请填写手机号和验证码",icon:"none"});this.$api.verification({phone:this.phone,second:this.phoneCode}).then((function(e){0===e.code?(uni.setStorageSync("userinfo",e.data.user),t.setUserInfo(e.data.user),uni.setStorageSync("token",e.data.token),uni.switchTab({url:"/pages/withdrawalRecord/withdrawalRecord"})):uni.showToast({title:e.message,icon:"none"})}))}}})};e.default=s}}]);