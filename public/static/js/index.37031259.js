(function(e){function n(n){for(var r,o,c=n[0],s=n[1],u=n[2],l=0,f=[];l<c.length;l++)o=c[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var s=t[o];0!==a[s]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={index:0},i=[];function o(e){return c.p+"static/js/"+({"pages-forgot-forgot":"pages-forgot-forgot","pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5":"pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5","pages-index-index":"pages-index-index","pages-main-main":"pages-main-main","pages-mine-mine":"pages-mine-mine","pages-record-record":"pages-record-record","pages-withdrawal-withdrawal":"pages-withdrawal-withdrawal","pages-withdrawalRecord-withdrawalRecord":"pages-withdrawalRecord-withdrawalRecord","pages-login-login":"pages-login-login","pages-register-register":"pages-register-register"}[e]||e)+"."+{"pages-forgot-forgot":"289fce73","pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5":"23676c84","pages-index-index":"3091b4c0","pages-main-main":"499c29de","pages-mine-mine":"d867a86a","pages-record-record":"e90dae90","pages-withdrawal-withdrawal":"25c075a3","pages-withdrawalRecord-withdrawalRecord":"7bf8513d","pages-login-login":"8d8e9e76","pages-register-register":"1f3f70f6"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(e),i=function(n){s.onerror=s.onload=null,clearTimeout(u);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,t[1](o)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="./",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("d803")},"036f":function(e,n,t){"use strict";t.r(n);var r=t("06b7"),a=t("7baa");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("c094");var o,c=t("f0c5"),s=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=s.exports},"06b7":function(e,n,t){"use strict";var r,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}))},"1d82":function(e,n,t){"use strict";var r=t("ee27");t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("77ec")),i={get:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,r){(0,a.default)({url:e,data:n,method:"GET"}).then((function(e){t(e.data)})).catch((function(e){uni.showToast({title:e.data,icon:"none"}),r(e)}))}))},post:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,r){(0,a.default)({url:e,data:n,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then((function(e){t(e.data)})).catch((function(e){uni.showToast({title:e.data,icon:"none"}),r(e)}))}))}},o=i;n.default=o},"77ec":function(e,n,t){"use strict";var r=t("ee27");t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("e143")),i=r(t("9500")),o=function(e){return e.header||(e.header={}),new Promise((function(n,t){var r=uni.getStorageSync("token");r&&(e.data.token=r),"GET"===e.method&&(e.data._t=(new Date).getTime()),uni.request({url:a.default.prototype.baseURL+e.url,data:"GET"===e.method?e.data:i.default.stringify(e.data),method:e.method,timeout:3e4,header:e.header,success:function(e){200===e.statusCode?(201==e.data.code&&(uni.clearStorage(),uni.reLaunch({url:"/pages/login/login"})),n(e)):t(e)}})}))},c=o;n.default=c},"7baa":function(e,n,t){"use strict";t.r(n);var r=t("f9af"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"8ea0":function(e,n,t){"use strict";(function(e){var n=t("ee27"),r=n(t("e143"));e["____0ABFE30____"]=!0,delete e["____0ABFE30____"],e.__uniConfig={tabBar:{color:"#7a7e83",selectedColor:"#FF3030",backgroundColor:"#ffffff",list:[{pagePath:"pages/main/main",text:"首页",iconPath:"static/img/home.png",selectedIconPath:"static/img/home_selected.png",redDot:!1,badge:""},{pagePath:"pages/withdrawalRecord/withdrawalRecord",text:"提现记录",iconPath:"static/img/index.png",selectedIconPath:"static/img/index_selected.png",redDot:!1,badge:""},{pagePath:"pages/mine/mine",text:"个人中心",iconPath:"static/img/mine.png",selectedIconPath:"static/img/mine_selected.png",redDot:!1,badge:""}],borderStyle:"black"},globalStyle:{navigationBarTextStyle:"black",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,r.default.component("pages-main-main",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5"),t.e("pages-main-main")]).then(function(){return e(t("770b"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-withdrawalRecord-withdrawalRecord",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5"),t.e("pages-withdrawalRecord-withdrawalRecord")]).then(function(){return e(t("b296"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-index-index",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5"),t.e("pages-index-index")]).then(function(){return e(t("2dc3"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-mine-mine",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5"),t.e("pages-mine-mine")]).then(function(){return e(t("ba9b"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-login-login",(function(e){var n={component:t.e("pages-login-login").then(function(){return e(t("1d05"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-record-record",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5"),t.e("pages-record-record")]).then(function(){return e(t("c15a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-withdrawal-withdrawal",(function(e){var n={component:Promise.all([t.e("pages-index-index~pages-main-main~pages-mine-mine~pages-record-record~pages-withdrawal-withdrawal~pa~a9c3ebc5"),t.e("pages-withdrawal-withdrawal")]).then(function(){return e(t("a21a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-register-register",(function(e){var n={component:t.e("pages-register-register").then(function(){return e(t("2d01"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-forgot-forgot",(function(e){var n={component:t.e("pages-forgot-forgot").then(function(){return e(t("a5ec"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/main/main",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"首页",navigationBarTextStyle:"black",navigationStyle:"custom"})},[e("pages-main-main",{slot:"page"})])}},meta:{id:1,name:"pages-main-main",isNVue:!1,pagePath:"pages/main/main",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/withdrawalRecord/withdrawalRecord",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"提现记录",navigationBarTextStyle:"black",navigationStyle:"custom"})},[e("pages-withdrawalRecord-withdrawalRecord",{slot:"page"})])}},meta:{id:2,name:"pages-withdrawalRecord-withdrawalRecord",isNVue:!1,pagePath:"pages/withdrawalRecord/withdrawalRecord",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:0}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"我的邀请",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#fff"})},[e("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",windowTop:44}},{path:"/pages/mine/mine",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"个人中心",navigationBarTextStyle:"black",navigationStyle:"custom"})},[e("pages-mine-mine",{slot:"page"})])}},meta:{id:3,name:"pages-mine-mine",isNVue:!1,pagePath:"pages/mine/mine",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:0}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"相玉有钱矿机版",navigationBarTextStyle:"black",navigationStyle:"custom"})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!1,pagePath:"pages/login/login",windowTop:0}},{path:"/pages/record/record",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"分红记录",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#fff"})},[e("pages-record-record",{slot:"page"})])}},meta:{name:"pages-record-record",isNVue:!1,pagePath:"pages/record/record",windowTop:44}},{path:"/pages/withdrawal/withdrawal",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"申请提现",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#fff"})},[e("pages-withdrawal-withdrawal",{slot:"page"})])}},meta:{name:"pages-withdrawal-withdrawal",isNVue:!1,pagePath:"pages/withdrawal/withdrawal",windowTop:44}},{path:"/pages/register/register",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"千人计划注册",navigationBarTextStyle:"black",navigationStyle:"custom"})},[e("pages-register-register",{slot:"page"})])}},meta:{name:"pages-register-register",isNVue:!1,pagePath:"pages/register/register",windowTop:0}},{path:"/pages/forgot/forgot",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"重置密码",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#fff"})},[e("pages-forgot-forgot",{slot:"page"})])}},meta:{name:"pages-forgot-forgot",isNVue:!1,pagePath:"pages/forgot/forgot",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},9500:function(e,n,t){var r;t("a4d3"),t("e01a"),t("99af"),t("4de4"),t("4160"),t("c975"),t("a15b"),t("13d5"),t("fb6a"),t("4e82"),t("accc"),t("b64b"),t("d3b7"),t("e25e"),t("ac1f"),t("25f0"),t("5319"),t("1276"),t("159b"),function(n){e.exports=n()}((function(){return function(){function e(n,t,a){function i(c,s){if(!t[c]){if(!n[c]){var u="function"==typeof r&&r;if(!s&&u)return r(c,!0);if(o)return o(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var d=t[c]={exports:{}};n[c][0].call(d.exports,(function(e){var t=n[c][1][e];return i(t||e)}),d,d.exports,e,n,t,a)}return t[c].exports}for(var o="function"==typeof r&&r,c=0;c<a.length;c++)i(a[c]);return i}return e}()({1:[function(e,n,t){"use strict";var r=String.prototype.replace,a=/%20/g,i=e("./utils"),o={RFC1738:"RFC1738",RFC3986:"RFC3986"};n.exports=i.assign({default:o.RFC3986,formatters:{RFC1738:function(e){return r.call(e,a,"+")},RFC3986:function(e){return String(e)}}},o)},{"./utils":5}],2:[function(e,n,t){"use strict";var r=e("./stringify"),a=e("./parse"),i=e("./formats");n.exports={formats:i,parse:a,stringify:r}},{"./formats":1,"./parse":3,"./stringify":4}],3:[function(e,n,t){"use strict";var r=e("./utils"),a=Object.prototype.hasOwnProperty,i=Array.isArray,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,n){return String.fromCharCode(parseInt(n,10))}))},s=function(e,n){return e&&"string"===typeof e&&n.comma&&e.indexOf(",")>-1?e.split(","):e},u="utf8=%26%2310003%3B",l="utf8=%E2%9C%93",d=function(e,n){var t,d={},f=n.ignoreQueryPrefix?e.replace(/^\?/,""):e,p=n.parameterLimit===1/0?void 0:n.parameterLimit,g=f.split(n.delimiter,p),m=-1,y=n.charset;if(n.charsetSentinel)for(t=0;t<g.length;++t)0===g[t].indexOf("utf8=")&&(g[t]===l?y="utf-8":g[t]===u&&(y="iso-8859-1"),m=t,t=g.length);for(t=0;t<g.length;++t)if(t!==m){var h,w,b=g[t],_=b.indexOf("]="),v=-1===_?b.indexOf("="):_+1;-1===v?(h=n.decoder(b,o.decoder,y,"key"),w=n.strictNullHandling?null:""):(h=n.decoder(b.slice(0,v),o.decoder,y,"key"),w=r.maybeMap(s(b.slice(v+1),n),(function(e){return n.decoder(e,o.decoder,y,"value")}))),w&&n.interpretNumericEntities&&"iso-8859-1"===y&&(w=c(w)),b.indexOf("[]=")>-1&&(w=i(w)?[w]:w),a.call(d,h)?d[h]=r.combine(d[h],w):d[h]=w}return d},f=function(e,n,t,r){for(var a=r?n:s(n,t),i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&t.parseArrays)o=[].concat(a);else{o=t.plainObjects?Object.create(null):{};var u="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,l=parseInt(u,10);t.parseArrays||""!==u?!isNaN(l)&&c!==u&&String(l)===u&&l>=0&&t.parseArrays&&l<=t.arrayLimit?(o=[],o[l]=a):o[u]=a:o={0:a}}a=o}return a},p=function(e,n,t,r){if(e){var i=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,c=/(\[[^[\]]*])/g,s=t.depth>0&&o.exec(i),u=s?i.slice(0,s.index):i,l=[];if(u){if(!t.plainObjects&&a.call(Object.prototype,u)&&!t.allowPrototypes)return;l.push(u)}var d=0;while(t.depth>0&&null!==(s=c.exec(i))&&d<t.depth){if(d+=1,!t.plainObjects&&a.call(Object.prototype,s[1].slice(1,-1))&&!t.allowPrototypes)return;l.push(s[1])}return s&&l.push("["+i.slice(s.index)+"]"),f(l,n,t,r)}},g=function(e){if(!e)return o;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n="undefined"===typeof e.charset?o.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?o.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:o.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:o.arrayLimit,charset:n,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:o.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:o.comma,decoder:"function"===typeof e.decoder?e.decoder:o.decoder,delimiter:"string"===typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:o.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:o.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:o.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:o.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:o.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:o.strictNullHandling}};n.exports=function(e,n){var t=g(n);if(""===e||null===e||"undefined"===typeof e)return t.plainObjects?Object.create(null):{};for(var a="string"===typeof e?d(e,t):e,i=t.plainObjects?Object.create(null):{},o=Object.keys(a),c=0;c<o.length;++c){var s=o[c],u=p(s,a[s],t,"string"===typeof e);i=r.merge(i,u,t)}return r.compact(i)}},{"./utils":5}],4:[function(e,n,t){"use strict";var r=e("./utils"),a=e("./formats"),i=Object.prototype.hasOwnProperty,o={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,n){return e+"["+n+"]"},repeat:function(e){return e}},c=Array.isArray,s=Array.prototype.push,u=function(e,n){s.apply(e,c(n)?n:[n])},l=Date.prototype.toISOString,d=a["default"],f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,format:d,formatter:a.formatters[d],indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},p=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e},g=function e(n,t,a,i,o,s,l,d,g,m,y,h,w){var b=n;if("function"===typeof l?b=l(t,b):b instanceof Date?b=m(b):"comma"===a&&c(b)&&(b=r.maybeMap(b,(function(e){return e instanceof Date?m(e):e})).join(",")),null===b){if(i)return s&&!h?s(t,f.encoder,w,"key"):t;b=""}if(p(b)||r.isBuffer(b)){if(s){var _=h?t:s(t,f.encoder,w,"key");return[y(_)+"="+y(s(b,f.encoder,w,"value"))]}return[y(t)+"="+y(String(b))]}var v,x=[];if("undefined"===typeof b)return x;if(c(l))v=l;else{var C=Object.keys(b);v=d?C.sort(d):C}for(var S=0;S<v.length;++S){var P=v[S],j=b[P];if(!o||null!==j){var O=c(b)?"function"===typeof a?a(t,P):t:t+(g?"."+P:"["+P+"]");u(x,e(j,O,a,i,o,s,l,d,g,m,y,h,w))}}return x},m=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var n=e.charset||f.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=a["default"];if("undefined"!==typeof e.format){if(!i.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var r=a.formatters[t],o=f.filter;return("function"===typeof e.filter||c(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?f.allowDots:!!e.allowDots,charset:n,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?f.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:f.encode,encoder:"function"===typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:o,formatter:r,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}};n.exports=function(e,n){var t,r,a=e,i=m(n);"function"===typeof i.filter?(r=i.filter,a=r("",a)):c(i.filter)&&(r=i.filter,t=r);var s,l=[];if("object"!==typeof a||null===a)return"";s=n&&n.arrayFormat in o?n.arrayFormat:n&&"indices"in n?n.indices?"indices":"repeat":"indices";var d=o[s];t||(t=Object.keys(a)),i.sort&&t.sort(i.sort);for(var f=0;f<t.length;++f){var p=t[f];i.skipNulls&&null===a[p]||u(l,g(a[p],p,d,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var y=l.join(i.delimiter),h=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),y.length>0?h+y:""}},{"./formats":1,"./utils":5}],5:[function(e,n,t){"use strict";var r=Object.prototype.hasOwnProperty,a=Array.isArray,i=function(){for(var e=[],n=0;n<256;++n)e.push("%"+((n<16?"0":"")+n.toString(16)).toUpperCase());return e}(),o=function(e){while(e.length>1){var n=e.pop(),t=n.obj[n.prop];if(a(t)){for(var r=[],i=0;i<t.length;++i)"undefined"!==typeof t[i]&&r.push(t[i]);n.obj[n.prop]=r}}},c=function(e,n){for(var t=n&&n.plainObjects?Object.create(null):{},r=0;r<e.length;++r)"undefined"!==typeof e[r]&&(t[r]=e[r]);return t},s=function e(n,t,i){if(!t)return n;if("object"!==typeof t){if(a(n))n.push(t);else{if(!n||"object"!==typeof n)return[n,t];(i&&(i.plainObjects||i.allowPrototypes)||!r.call(Object.prototype,t))&&(n[t]=!0)}return n}if(!n||"object"!==typeof n)return[n].concat(t);var o=n;return a(n)&&!a(t)&&(o=c(n,i)),a(n)&&a(t)?(t.forEach((function(t,a){if(r.call(n,a)){var o=n[a];o&&"object"===typeof o&&t&&"object"===typeof t?n[a]=e(o,t,i):n.push(t)}else n[a]=t})),n):Object.keys(t).reduce((function(n,a){var o=t[a];return r.call(n,a)?n[a]=e(n[a],o,i):n[a]=o,n}),o)},u=function(e,n){return Object.keys(n).reduce((function(e,t){return e[t]=n[t],e}),e)},l=function(e,n,t){var r=e.replace(/\+/g," ");if("iso-8859-1"===t)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(a){return r}},d=function(e,n,t){if(0===e.length)return e;var r=e;if("symbol"===typeof e?r=Symbol.prototype.toString.call(e):"string"!==typeof e&&(r=String(e)),"iso-8859-1"===t)return escape(r).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var a="",o=0;o<r.length;++o){var c=r.charCodeAt(o);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?a+=r.charAt(o):c<128?a+=i[c]:c<2048?a+=i[192|c>>6]+i[128|63&c]:c<55296||c>=57344?a+=i[224|c>>12]+i[128|c>>6&63]+i[128|63&c]:(o+=1,c=65536+((1023&c)<<10|1023&r.charCodeAt(o)),a+=i[240|c>>18]+i[128|c>>12&63]+i[128|c>>6&63]+i[128|63&c])}return a},f=function(e){for(var n=[{obj:{o:e},prop:"o"}],t=[],r=0;r<n.length;++r)for(var a=n[r],i=a.obj[a.prop],c=Object.keys(i),s=0;s<c.length;++s){var u=c[s],l=i[u];"object"===typeof l&&null!==l&&-1===t.indexOf(l)&&(n.push({obj:i,prop:u}),t.push(l))}return o(n),e},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},g=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},m=function(e,n){return[].concat(e,n)},y=function(e,n){if(a(e)){for(var t=[],r=0;r<e.length;r+=1)t.push(n(e[r]));return t}return n(e)};n.exports={arrayToObject:c,assign:u,combine:m,compact:f,decode:l,encode:d,isBuffer:g,isRegExp:p,maybeMap:y,merge:s}},{}]},{},[2])(2)}))},"9b4c":function(e,n,t){"use strict";var r=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("1d82")),i={login:function(e){return a.default.post("/login",e)},verification:function(e){return a.default.post("/verification",e)},register:function(e){return a.default.post("/register",e)},info:function(e){return a.default.get("/user/info",e)},dividend:function(e){return a.default.get("/user/dividend",e)},lists:function(e){return a.default.get("/user/lists",e)},withdrawLog:function(e){return a.default.get("/user/withdrawLog",e)},withdraw:function(e){return a.default.post("/user/withdraw",e)},send:function(e){return a.default.post("/send",e)},reset:function(e){return a.default.post("/reset",e)},getSwitch:function(e){return a.default.get("/user/switch",e)}},o=i;n.default=o},abf0:function(e,n,t){var r=t("c0af");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=t("4f06").default;a("9a2a9874",r,!0,{sourceMap:!1,shadowMode:!1})},c094:function(e,n,t){"use strict";var r=t("abf0"),a=t.n(r);a.a},c0af:function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */.status_bar{height:0;width:100%}.textcenter{text-align:center}.margincenter{margin:0 auto}.flex{display:-webkit-box;display:-webkit-flex;display:flex}.flexcolumn{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.justifyContent{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.alignItems{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flex1{-webkit-box-flex:1;-webkit-flex:1;flex:1}.absolute{position:absolute}.relative{position:relative}.pd10{padding:10px}.block{display:block}.bold{font-weight:700}.bgwhite{background-color:#fff}",""]),e.exports=n},c150:function(e,n,t){"use strict";var r=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("e143")),i=r(t("2f62"));a.default.use(i.default);var o=new i.default.Store({state:{userinfo:uni.getStorageSync("userinfo")||""},mutations:{setUserInfo:function(e,n){e.userinfo=n}}}),c=o;n.default=c},d803:function(e,n,t){"use strict";var r=t("ee27"),a=r(t("f3f3"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("8ea0"),t("1c31");var i=r(t("e143")),o=r(t("036f")),c=r(t("9b4c")),s=r(t("c150"));i.default.config.productionTip=!1,i.default.prototype.baseURL="http://miner.njtrtw.ltd/api",i.default.prototype.$api=c.default,o.default.mpType="app";var u=new i.default((0,a.default)({store:s.default},o.default));u.$mount()},f9af:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={onLaunch:function(){uni.getStorageSync("token")||uni.reLaunch({url:"/pages/login/login"})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=r}});