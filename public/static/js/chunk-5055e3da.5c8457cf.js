(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5055e3da"],{"85d5":function(t,e,n){},"95e8":function(t,e,n){"use strict";var i=n("85d5"),a=n.n(i);a.a},a481:function(t,e,n){"use strict";var i=n("cb7c"),a=n("4bf8"),s=n("9def"),r=n("4588"),o=n("0390"),c=n("5f1b"),l=Math.max,d=Math.min,u=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,(function(t,e,n,v){return[function(i,a){var s=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,s,a):n.call(String(s),i,a)},function(t,e){var a=v(n,t,this,e);if(a.done)return a.value;var u=i(t),h=String(this),f="function"===typeof e;f||(e=String(e));var m=u.global;if(m){var y=u.unicode;u.lastIndex=0}var b=[];while(1){var x=c(u,h);if(null===x)break;if(b.push(x),!m)break;var _=String(x[0]);""===_&&(u.lastIndex=o(h,s(u.lastIndex),y))}for(var k="",w=0,S=0;S<b.length;S++){x=b[S];for(var $=String(x[0]),I=l(d(r(x.index),h.length),0),T=[],P=1;P<x.length;P++)T.push(p(x[P]));var C=x.groups;if(f){var j=[$].concat(T,I,h);void 0!==C&&j.push(C);var A=String(e.apply(void 0,j))}else A=g($,h,I,T,C,e);I>=w&&(k+=h.slice(w,I)+A,w=I+$.length)}return k+h.slice(w)}];function g(t,e,i,s,r,o){var c=i+t.length,l=s.length,d=f;return void 0!==r&&(r=a(r),d=h),n.call(o,d,(function(n,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(c);case"<":o=r[a.slice(1,-1)];break;default:var d=+a;if(0===d)return n;if(d>l){var h=u(d/10);return 0===h?n:h<=l?void 0===s[h-1]?a.charAt(1):s[h-1]+a.charAt(1):n}o=s[d-1]}return void 0===o?"":o}))}}))},b4c05:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexContainer"},[n("div",{staticClass:"header"},[n("span",[t._v("千人计划用户列表")]),n("a-button",{staticClass:"button",on:{click:t.logout}},[t._v("登出")])],1),n("div",{staticClass:"search"},[n("a-input",{staticClass:"searchInput",attrs:{placeholder:"请输入要搜索的手机号",allowClear:!0},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}}),n("a-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.search}},[t._v("搜索")])],1),n("div",{staticClass:"table"},[n("a-table",{attrs:{columns:t.columns,dataSource:t.data,pagination:!1},scopedSlots:t._u([{key:"operation",fn:function(e,i){return n("div",{},[0===i.finish?n("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(e){return t.resolve(i.id)}}},[t._v("通过审核")]):t._e(),1===i.status?n("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(e){return t.freeze(i.id,2)}}},[t._v("冻结")]):t._e(),2===i.status?n("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(e){return t.freeze(i.id,1)}}},[t._v("解冻")]):t._e(),n("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(e){return t.editPoints(i.id)}}},[t._v("操作积分")]),n("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(e){return t.showTeam(i.id)}}},[t._v("查看团队")])])}},{key:"finish",fn:function(e,i){return n("div",{},[t._v("\n        "+t._s(1===i.finish?"会员":"游客")+"\n      ")])}},{key:"status",fn:function(e,i){return n("div",{},[t._v("\n        "+t._s(1===i.status?"正常":"冻结")+"\n      ")])}}])})],1),n("div",{staticClass:"page"},[n("a-pagination",{attrs:{defaultCurrent:t.current,total:t.total,showLessItems:""},on:{change:t.changePage}})],1),n("a-modal",{attrs:{title:"增减积分",maskClosable:!1},on:{ok:t.doEdit,cancel:t.cancelReject},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",[n("a-radio-group",{staticStyle:{"margin-bottom":"20px"},on:{change:t.changeEditPointsType},model:{value:t.editPointsType,callback:function(e){t.editPointsType=e},expression:"editPointsType"}},[n("a-radio-button",{attrs:{value:"1"}},[t._v("增加积分")]),n("a-radio-button",{attrs:{value:"2"}},[t._v("减少积分")])],1),n("a-input",{attrs:{type:"number",placeholder:"请输入要更改的积分数"},model:{value:t.points,callback:function(e){t.points=e},expression:"points"}})],1)]),n("a-modal",{attrs:{title:"查看团队成员详情",maskClosable:!1},on:{cancel:t.closeTeam},model:{value:t.visible2,callback:function(e){t.visible2=e},expression:"visible2"}},[n("template",{slot:"footer"},[n("div")]),n("div",{staticStyle:{"max-height":"650px","overflow-y":"auto"}},[n("a-tree",{attrs:{"load-data":t.loadTree,loadedKeys:t.loadedKeys,expandedKeys:t.expandedKeys,"tree-data":t.treeData}})],1)],2)],1)},a=[];function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t){if(Array.isArray(t))return s(t)}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return r(t)||o(t)||c(t)||l()}n("ac6a"),n("a481");var u=n("8ded"),h=n.n(u),f={data:function(){return{keywords:"",columns:[{title:"手机号",dataIndex:"phone",align:"center"},{title:"冻结积分",dataIndex:"frozen_points",align:"center"},{title:"可用积分",dataIndex:"active_points",align:"center"},{title:"已提现积分",dataIndex:"withdraw",align:"center"},{title:"上级",dataIndex:"parent_phone",align:"center"},{title:"团队第一人",dataIndex:"top_phone",align:"center"},{title:"团队单数",dataIndex:"lines",align:"center"},{title:"添加时间",dataIndex:"created_at",align:"center"},{title:"用户类型",scopedSlots:{customRender:"finish"},align:"center"},{title:"用户状态",scopedSlots:{customRender:"status"},align:"center"},{title:"操作",scopedSlots:{customRender:"operation"},align:"center"}],data:[],total:0,current:1,visible:!1,visible2:!1,editId:"",points:"",editPointsType:"",treeData:[],loadedKeys:[],expandedKeys:[]}},methods:{logout:function(){h.a.clearAll(),this.$message.success("已登出!"),this.$router.replace("/login")},search:function(){this.getList(1,this.keywords)},changePage:function(t){this.current=t,this.getList(this.current,this.keywords)},resolve:function(t){var e=this,n=0;this.data.forEach((function(e,i){e.id===t&&(n=i)})),this.$api.index_api.userAudit({id:t,finish:1}).then((function(t){console.log(t),"操作成功"===t&&(e.data[n].finish=1)})).catch((function(t){console.log(t)}))},freeze:function(t,e){var n=this,i=0;this.data.forEach((function(e,n){e.id===t&&(i=n)})),this.$api.index_api.status({id:t,status:e}).then((function(t){"操作成功"===t&&(2===e?n.$message.success("账号已成功冻结"):1===e&&n.$message.success("账号已解除冻结"),n.data[i].status=e)})).catch((function(t){console.log(t)}))},editPoints:function(t){this.visible=!0,this.editId=t},changeEditPointsType:function(t){this.editPointsType=t.target.value},doEdit:function(){var t=this;if(this.editPointsType)if(this.points){var e=0;this.data.forEach((function(n,i){n.id===t.editId&&(e=i)})),this.$api.index_api.points({id:this.editId,func:this.editPointsType,points:this.points}).then((function(n){"number"===typeof n&&(t.$message.success("积分更改成功"),t.data[e].active_points=n,t.editPointsType="",t.points="",t.visible=!1)})).catch((function(t){console.log(t)}))}else this.$message.error("请输入要更改的积分数");else this.$message.error("请选择操作积分类型")},cancelReject:function(){this.editPointsType="",this.points=""},showTeam:function(t){this.getTreeData(t)},closeTeam:function(){this.treeData=[],this.expandedKeys=[]},loadTree:function(t){var e=this;return new Promise((function(n){t.dataRef.children?n():e.$api.index_api.children({id:t.dataRef.id}).then((function(i){e.expandedKeys.push(t.dataRef.key),t.dataRef.children=i.children,e.treeData=d(e.treeData),n()})).catch((function(t){console.log(t),close()}))}))},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0,i=this.$message.loading("加载中",0);this.$api.index_api.member({page:e,keywords:n}).then((function(e){t.data=e.lists.data,t.total=e.lists.total,i()})).catch((function(t){console.log(t),i()}))},getTreeData:function(t,e){var n=this,i=this.$message.loading("加载中",0);this.$api.index_api.children({id:t}).then((function(t){i(),t.children.length?(n.visible2=!0,n.treeData=t.children):n.$message.warning("此账号没有下级")})).catch((function(t){console.log(t),i()}))}},created:function(){window._this=this,this.getList()}},p=f,v=(n("95e8"),n("2877")),g=Object(v["a"])(p,i,a,!1,null,"9b4e3612",null);e["default"]=g.exports}}]);