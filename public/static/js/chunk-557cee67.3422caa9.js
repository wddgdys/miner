(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-557cee67"],{"24e2":function(t,e,n){},7706:function(t,e,n){"use strict";var a=n("24e2"),s=n.n(a);s.a},a481:function(t,e,n){"use strict";var a=n("cb7c"),s=n("4bf8"),i=n("9def"),c=n("4588"),r=n("0390"),o=n("5f1b"),l=Math.max,u=Math.min,d=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,p){return[function(a,s){var i=t(this),c=void 0==a?void 0:a[e];return void 0!==c?c.call(a,i,s):n.call(String(i),a,s)},function(t,e){var s=p(n,t,this,e);if(s.done)return s.value;var d=a(t),h=String(this),f="function"===typeof e;f||(e=String(e));var _=d.global;if(_){var b=d.unicode;d.lastIndex=0}var m=[];while(1){var k=o(d,h);if(null===k)break;if(m.push(k),!_)break;var y=String(k[0]);""===y&&(d.lastIndex=r(h,i(d.lastIndex),b))}for(var x="",j=0,S=0;S<m.length;S++){k=m[S];for(var w=String(k[0]),$=l(u(c(k.index),h.length),0),I=[],C=1;C<k.length;C++)I.push(v(k[C]));var R=k.groups;if(f){var L=[w].concat(I,$,h);void 0!==R&&L.push(R);var A=String(e.apply(void 0,L))}else A=g(w,h,$,I,R,e);$>=j&&(x+=h.slice(j,$)+A,j=$+w.length)}return x+h.slice(j)}];function g(t,e,a,i,c,r){var o=a+t.length,l=i.length,u=f;return void 0!==c&&(c=s(c),u=h),n.call(r,u,(function(n,s){var r;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(o);case"<":r=c[s.slice(1,-1)];break;default:var u=+s;if(0===u)return n;if(u>l){var h=d(u/10);return 0===h?n:h<=l?void 0===i[h-1]?s.charAt(1):i[h-1]+s.charAt(1):n}r=i[u-1]}return void 0===r?"":r}))}}))},b30e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexContainer"},[n("div",{staticClass:"header"},[n("span",[t._v("相玉有钱千人计划提现审核")]),n("a-button",{staticClass:"button",on:{click:t.logout}},[t._v("登出")])],1),n("div",{staticClass:"btns"},[n("span",[t._v("筛选:")]),n("a-button",{staticClass:"btn",attrs:{type:0==t.status?"primary":""},on:{click:function(e){return t.changeStatus(0)}}},[t._v("待审核")]),n("a-button",{staticClass:"btn",attrs:{type:1==t.status?"primary":""},on:{click:function(e){return t.changeStatus(1)}}},[t._v("已通过")]),n("a-button",{staticClass:"btn",attrs:{type:2==t.status?"primary":""},on:{click:function(e){return t.changeStatus(2)}}},[t._v("已驳回")])],1),n("div",{staticClass:"table"},[n("a-table",{attrs:{columns:t.columns,dataSource:t.data,pagination:!1},scopedSlots:t._u([{key:"operation",fn:function(e,a){return n("div",{},[0===t.status?n("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(e){return t.resolve(a.id)}}},[t._v("同意")]):t._e(),0===t.status?n("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(e){return t.reject(a.id)}}},[t._v("驳回")]):t._e()])}},{key:"type",fn:function(e,a){return n("span",{},[t._v(t._s(3===a.type?"微信":2===a.type?"支付宝":"银行卡"))])}},{key:"info",fn:function(e,a){return n("div",{},[3===a.type?n("span",{attrs:{title:a.weixin}},[t._v(t._s(a.weixin))]):t._e(),2===a.type?n("span",{attrs:{title:a.alipay}},[t._v(t._s(a.alipay))]):t._e(),1===a.type?n("span",{attrs:{title:a.bank_name+"，"+a.bank_no+"，"+a.bank_address}},[t._v(t._s(a.bank_name+"，"+a.bank_no+"，"+a.bank_address))]):t._e()])}},{key:"reject_msg",fn:function(e,a){return n("div",{staticStyle:{width:"300px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},attrs:{title:a.reject_msg}},[t._v(t._s(a.reject_msg))])}}])})],1),n("div",{staticClass:"page"},[n("a-pagination",{attrs:{defaultCurrent:t.current,total:t.total,showLessItems:""},on:{change:t.changePage}})],1),n("a-modal",{attrs:{title:"请填写驳回原因",maskClosable:!1},on:{ok:function(e){return t.handleReject(t.rejectId)},cancel:t.cancelReject},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("a-input",{model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1)],1)},s=[],i=(n("ac6a"),n("a481"),n("8ded")),c=n.n(i),r={data:function(){return{status:0,columns:[{title:"申请人",dataIndex:"user_id",align:"center"},{title:"申请时间",dataIndex:"created_at",align:"center"},{title:"提现金额",dataIndex:"money",align:"center"},{title:"提现方式",scopedSlots:{customRender:"type"},align:"center"},{title:"账户信息",scopedSlots:{customRender:"info"},align:"center"},{title:"操作",scopedSlots:{customRender:"operation"},align:"center"},{title:"驳回原因",scopedSlots:{customRender:"reject_msg"},align:"center",width:300}],data:[],total:0,current:1,visible:!1,rejectId:0,reason:""}},methods:{logout:function(){c.a.clearAll(),this.$message.success("已登出!"),this.$router.replace("/login")},changeStatus:function(t){this.status=t,this.current=1,this.getList(this.status)},changePage:function(t){this.current=t,this.getList(this.status,this.current)},resolve:function(t){var e=this,n=0;this.data.forEach((function(e,a){e.id===t&&(n=a)})),this.$confirm({title:"确认通过此申请吗？",onOk:function(){e.$api.index_api.audit({status:1,id:t}).then((function(t){"修改成功"===t&&(e.$message.success("此申请已通过!"),e.data.splice(n,1))})).catch((function(t){console.log(t)}))}})},reject:function(t){this.rejectId=t,this.visible=!0},handleReject:function(){var t=this,e=0;this.data.forEach((function(n,a){n.id===t.rejectId&&(e=a)})),this.$api.index_api.audit({status:2,id:this.rejectId,reject_msg:this.reason}).then((function(n){"修改成功"===n&&(t.reason="",t.visible=!1,t.$message.success("此申请已驳回!"),t.data.splice(e,1))})).catch((function(t){console.log(t)}))},cancelReject:function(){console.log("cancel"),this.rejectId=0,this.reason=""},getList:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.$message.loading("加载中",0);this.$api.index_api.withdraw({status:t,page:n}).then((function(t){e.data=t.lists.data,e.total=t.lists.total,a()})).catch((function(t){console.log(t),a()}))}},created:function(){this.getList(this.status)}},o=r,l=(n("7706"),n("2877")),u=Object(l["a"])(o,a,s,!1,null,"7be3731d",null);e["default"]=u.exports}}]);