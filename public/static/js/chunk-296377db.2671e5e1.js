(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-296377db"],{"6cb0":function(e,t,i){"use strict";var a=i("e85d"),n=i.n(a);n.a},a481:function(e,t,i){"use strict";var a=i("cb7c"),n=i("4bf8"),s=i("9def"),o=i("4588"),r=i("0390"),l=i("5f1b"),c=Math.max,d=Math.min,u=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};i("214f")("replace",2,(function(e,t,i,f){return[function(a,n){var s=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,s,n):i.call(String(s),a,n)},function(e,t){var n=f(i,e,this,t);if(n.done)return n.value;var u=a(e),h=String(this),p="function"===typeof t;p||(t=String(t));var m=u.global;if(m){var b=u.unicode;u.lastIndex=0}var y=[];while(1){var w=l(u,h);if(null===w)break;if(y.push(w),!m)break;var x=String(w[0]);""===x&&(u.lastIndex=r(h,s(u.lastIndex),b))}for(var k="",_=0,S=0;S<y.length;S++){w=y[S];for(var I=String(w[0]),$=c(d(o(w.index),h.length),0),P=[],T=1;T<w.length;T++)P.push(v(w[T]));var R=w.groups;if(p){var C=[I].concat(P,$,h);void 0!==R&&C.push(R);var j=String(t.apply(void 0,C))}else j=g(I,h,$,P,R,t);$>=_&&(k+=h.slice(_,$)+j,_=$+I.length)}return k+h.slice(_)}];function g(e,t,a,s,o,r){var l=a+e.length,c=s.length,d=p;return void 0!==o&&(o=n(o),d=h),i.call(r,d,(function(i,n){var r;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(l);case"<":r=o[n.slice(1,-1)];break;default:var d=+n;if(0===d)return i;if(d>c){var h=u(d/10);return 0===h?i:h<=c?void 0===s[h-1]?n.charAt(1):s[h-1]+n.charAt(1):i}r=s[d-1]}return void 0===r?"":r}))}}))},b4c05:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"indexContainer"},[i("div",{staticClass:"header"},[i("span",[e._v("矿机用户列表")]),i("a-button",{staticClass:"button",on:{click:e.logout}},[e._v("登出")])],1),i("div",{staticClass:"search"},[i("a-input",{staticClass:"searchInput",attrs:{placeholder:"请输入要搜索的手机号",allowClear:!0},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),i("a-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")])],1),i("div",{staticClass:"table"},[i("a-table",{attrs:{columns:e.columns,dataSource:e.data,pagination:!1},scopedSlots:e._u([{key:"operation",fn:function(t,a){return i("div",{},[0===a.finish?i("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(t){return e.resolve(a.id)}}},[e._v("通过审核")]):e._e(),1===a.status?i("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(t){return e.freeze(a.id,2)}}},[e._v("冻结")]):e._e(),2===a.status?i("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(t){return e.freeze(a.id,1)}}},[e._v("解冻")]):e._e(),i("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(t){return e.editPoints(a.id)}}},[e._v("操作积分")]),i("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(t){return e.reSetPassword(a.id)}}},[e._v("重置密码")]),i("a",{staticStyle:{margin:"0 5px"},attrs:{href:"javascript:;"},on:{click:function(t){return e.showTeam(a.id)}}},[e._v("查看团队")])])}},{key:"finish",fn:function(t,a){return i("div",{},[e._v("\n        "+e._s(1===a.finish?"会员":"游客")+"\n      ")])}},{key:"status",fn:function(t,a){return i("div",{},[e._v("\n        "+e._s(1===a.status?"正常":"冻结")+"\n      ")])}}])})],1),i("div",{staticClass:"page"},[i("a-pagination",{attrs:{defaultCurrent:e.current,total:e.total,showLessItems:""},on:{change:e.changePage}})],1),i("a-modal",{attrs:{title:"增减积分",maskClosable:!1},on:{ok:e.doEdit,cancel:e.cancelReject},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("div",[i("a-radio-group",{staticStyle:{"margin-bottom":"20px"},on:{change:e.changeEditPointsType},model:{value:e.editPointsType,callback:function(t){e.editPointsType=t},expression:"editPointsType"}},[i("a-radio-button",{attrs:{value:"1"}},[e._v("增加积分")]),i("a-radio-button",{attrs:{value:"2"}},[e._v("减少积分")])],1),i("a-input",{attrs:{type:"number",placeholder:"请输入要更改的积分数"},model:{value:e.points,callback:function(t){e.points=t},expression:"points"}})],1)]),i("a-modal",{attrs:{title:"查看团队成员详情",maskClosable:!1},on:{cancel:e.closeTeam},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[i("template",{slot:"footer"},[i("div")]),i("div",{staticStyle:{"max-height":"650px","overflow-y":"auto"}},[i("a-tree",{attrs:{"load-data":e.loadTree,loadedKeys:e.loadedKeys,expandedKeys:e.expandedKeys,"tree-data":e.treeData}})],1)],2),i("a-modal",{attrs:{title:"重置密码",maskClosable:!1},on:{ok:e.doReset,cancel:e.cancelReSetPassword},model:{value:e.visible3,callback:function(t){e.visible3=t},expression:"visible3"}},[i("div",[i("a-input",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("a-input",{attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.repassword,callback:function(t){e.repassword=t},expression:"repassword"}})],1)]),i("a-modal",{attrs:{title:"审核",maskClosable:!1},on:{ok:e.doResolve,cancel:e.cancelResolve},model:{value:e.visible4,callback:function(t){e.visible4=t},expression:"visible4"}},[i("div",[i("span",[e._v("请选择矿机等级：")]),i("a-select",{staticStyle:{width:"120px"},on:{change:e.changeLevel},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},e._l(e.levelData,(function(t,a){return i("a-select-option",{key:a,attrs:{value:t.frozen_points}},[e._v(e._s(t.name))])})),1)],1)])],1)},n=[];function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function o(e){if(Array.isArray(e))return s(e)}function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e,t){if(e){if("string"===typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return o(e)||r(e)||l(e)||c()}i("ac6a"),i("a481");var u=i("8ded"),h=i.n(u),p={data:function(){return{keywords:"",columns:[{title:"手机号",dataIndex:"phone",align:"center"},{title:"姓名",dataIndex:"name",align:"center"},{title:"游戏ID",dataIndex:"game",align:"center"},{title:"冻结积分",dataIndex:"frozen_points",align:"center"},{title:"可用积分",dataIndex:"active_points",align:"center"},{title:"已提现积分",dataIndex:"withdraw",align:"center"},{title:"上级",dataIndex:"parent_phone",align:"center"},{title:"团队第一人",dataIndex:"top_phone",align:"center"},{title:"团队单数",dataIndex:"lines",align:"center"},{title:"添加时间",dataIndex:"created_at",align:"center"},{title:"用户类型",scopedSlots:{customRender:"finish"},align:"center"},{title:"用户状态",scopedSlots:{customRender:"status"},align:"center"},{title:"操作",scopedSlots:{customRender:"operation"},align:"center"}],data:[],levelData:[],total:0,current:1,visible:!1,visible2:!1,visible3:!1,visible4:!1,resolveId:"",level:"",editId:"",resetId:"",password:"",repassword:"",points:"",editPointsType:"",treeData:[],loadedKeys:[],expandedKeys:[]}},methods:{logout:function(){h.a.clearAll(),this.$message.success("已登出!"),this.$router.replace("/login")},search:function(){this.getList(1,this.keywords)},changePage:function(e){this.current=e,this.getList(this.current,this.keywords)},resolve:function(e){this.visible4=!0,this.resolveId=e},changeLevel:function(e){this.level=e},doResolve:function(){var e=this;if(this.level){this.data.forEach((function(t,i){t.id===e.resolveId&&i})),this.$api.index_api.userAudit({id:this.resolveId,frozen_points:this.level,finish:1}).then((function(t){"操作成功"===t&&(e.$message.success(t),e.level="",e.visible4=!1,e.getList(e.current,e.keywords))})).catch((function(e){console.log(e)}))}else this.$message.error("请选择矿机等级")},cancelResolve:function(){this.level=""},freeze:function(e,t){var i=this,a=0;this.data.forEach((function(t,i){t.id===e&&(a=i)})),this.$api.index_api.status({id:e,status:t}).then((function(e){"操作成功"===e&&(2===t?i.$message.success("账号已成功冻结"):1===t&&i.$message.success("账号已解除冻结"),i.data[a].status=t)})).catch((function(e){console.log(e)}))},editPoints:function(e){this.visible=!0,this.editId=e},changeEditPointsType:function(e){this.editPointsType=e.target.value},doEdit:function(){var e=this;if(this.editPointsType)if(this.points){var t=0;this.data.forEach((function(i,a){i.id===e.editId&&(t=a)})),this.$api.index_api.points({id:this.editId,func:this.editPointsType,points:this.points}).then((function(i){"number"===typeof i&&(e.$message.success("积分更改成功"),e.data[t].active_points=i,e.editPointsType="",e.points="",e.visible=!1)})).catch((function(e){console.log(e)}))}else this.$message.error("请输入要更改的积分数");else this.$message.error("请选择操作积分类型")},cancelReject:function(){this.editPointsType="",this.points=""},showTeam:function(e){this.getTreeData(e)},closeTeam:function(){this.treeData=[],this.expandedKeys=[]},loadTree:function(e){var t=this;return new Promise((function(i){e.dataRef.children?i():t.$api.index_api.children({id:e.dataRef.id}).then((function(a){t.expandedKeys.push(e.dataRef.key),e.dataRef.children=a.children,t.treeData=d(t.treeData),i()})).catch((function(e){console.log(e),close()}))}))},getTreeData:function(e,t){var i=this,a=this.$message.loading("加载中",0);this.$api.index_api.children({id:e}).then((function(e){a(),e.children.length?(i.visible2=!0,i.treeData=e.children):i.$message.warning("此账号没有下级")})).catch((function(e){console.log(e),a()}))},reSetPassword:function(e){this.visible3=!0,this.resetId=e},cancelReSetPassword:function(){this.password="",this.repassword=""},doReset:function(){var e=this;this.password===this.repassword?this.$api.index_api.resetpwd({id:this.resetId,password:this.repassword}).then((function(t){t instanceof Array&&0===t.length&&(e.$message.success("密码重置成功"),e.password="",e.repassword="",e.visible3=!1)})).catch((function(e){console.log(e)})):this.$message.error("两次密码输入不一致")},getLevelList:function(){var e=this;this.$api.index_api.level().then((function(t){e.levelData=t})).catch((function(e){console.log(e)}))},getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1?arguments[1]:void 0,a=this.$message.loading("加载中",0);this.$api.index_api.member({page:t,keywords:i}).then((function(t){e.data=t.lists.data,e.total=t.lists.total,a()})).catch((function(e){console.log(e),a()}))}},created:function(){window._this=this,this.getLevelList(),this.getList()}},v=p,f=(i("6cb0"),i("2877")),g=Object(f["a"])(v,a,n,!1,null,"310d13f8",null);t["default"]=g.exports},e85d:function(e,t,i){}}]);