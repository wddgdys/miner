(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22b34c0a"],{"17a5":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"box"},[r("div",{staticClass:"header"},[r("span",[t._v("请选择业务")]),r("a-button",{staticClass:"button",on:{click:t.logout}},[t._v("登出")])],1),r("div",{staticClass:"btn"},[r("a-button",{attrs:{type:"primary"},on:{click:function(n){return t.go("/index")}}},[t._v("千人计划提现审核")]),t._v("\n        \n    "),r("a-button",{attrs:{type:"primary"},on:{click:function(n){return t.go("/index2")}}},[t._v("添加高级合伙人目标分")])],1)])},e=[],i=(r("a481"),r("8ded")),c=r.n(i),o={methods:{logout:function(){c.a.clearAll(),this.$message.success("已登出!"),this.$router.replace("/login")},go:function(t){this.$router.push(t)}}},s=o,u=(r("ec84"),r("2877")),l=Object(u["a"])(s,a,e,!1,null,"32d06f7c",null);n["default"]=l.exports},a47d:function(t,n,r){},a481:function(t,n,r){"use strict";var a=r("cb7c"),e=r("4bf8"),i=r("9def"),c=r("4588"),o=r("0390"),s=r("5f1b"),u=Math.max,l=Math.min,v=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,(function(t,n,r,g){return[function(a,e){var i=t(this),c=void 0==a?void 0:a[n];return void 0!==c?c.call(a,i,e):r.call(String(i),a,e)},function(t,n){var e=g(r,t,this,n);if(e.done)return e.value;var v=a(t),d=String(this),f="function"===typeof n;f||(n=String(n));var b=v.global;if(b){var $=v.unicode;v.lastIndex=0}var k=[];while(1){var x=s(v,d);if(null===x)break;if(k.push(x),!b)break;var w=String(x[0]);""===w&&(v.lastIndex=o(d,i(v.lastIndex),$))}for(var m="",S=0,_=0;_<k.length;_++){x=k[_];for(var y=String(x[0]),A=u(l(c(x.index),d.length),0),C=[],I=1;I<x.length;I++)C.push(h(x[I]));var M=x.groups;if(f){var J=[y].concat(C,A,d);void 0!==M&&J.push(M);var j=String(n.apply(void 0,J))}else j=p(y,d,A,C,M,n);A>=S&&(m+=d.slice(S,A)+j,S=A+y.length)}return m+d.slice(S)}];function p(t,n,a,i,c,o){var s=a+t.length,u=i.length,l=f;return void 0!==c&&(c=e(c),l=d),r.call(o,l,(function(r,e){var o;switch(e.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(s);case"<":o=c[e.slice(1,-1)];break;default:var l=+e;if(0===l)return r;if(l>u){var d=v(l/10);return 0===d?r:d<=u?void 0===i[d-1]?e.charAt(1):i[d-1]+e.charAt(1):r}o=i[l-1]}return void 0===o?"":o}))}}))},ec84:function(t,n,r){"use strict";var a=r("a47d"),e=r.n(a);e.a}}]);