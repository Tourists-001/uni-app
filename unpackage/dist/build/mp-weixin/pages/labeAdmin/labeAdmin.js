(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/labeAdmin/labeAdmin"],{"10ff":function(e,t,n){"use strict";n.r(t);var r=n("f9a9"),i=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=i.a},5831:function(e,t,n){"use strict";n.r(t);var r=n("8d7a"),i=n("10ff");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("8475");var o,a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=s.exports},8475:function(e,t,n){"use strict";var r=n("895a"),i=n.n(r);i.a},"895a":function(e,t,n){},"8d7a":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"e1df"))}},i=function(){var e=this,t=e.$createElement;e._self._c},u=[]},e994:function(e,t,n){"use strict";(function(e){n("829e");r(n("66fd"));var t=r(n("5831"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},f9a9:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),i=n("26cb");function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,i,u,o){try{var a=e[u](o),s=a.value}catch(c){return void n(c)}a.done?t(s):Promise.resolve(s).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var u=e.apply(t,n);function a(e){o(u,r,i,a,s,"next",e)}function s(e){o(u,r,i,a,s,"throw",e)}a(void 0)}))}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f={data:function(){return{isEdit:!1,labelIds:[]}},computed:c(c({},(0,i.mapState)(["labelList","userInfo"])),{},{selfLabeList:function(){var e=this;return this.labelList.filter((function(t){return e.labelIds.includes(t._id)}))},recommendlabeList:function(){var e=this;return this.labelList.filter((function(t){return!e.labelIds.includes(t._id)&&t._id}))}}),watch:{userInfo:{immediate:!0,handler:function(e,t){this.labelIds=this.userInfo.label_ids||[]}}},methods:{startEdit:function(){this.isEdit&&this._updateLabel(),this.isEdit=!this.isEdit},_updateLabel:function(){var t=this;return a(r.default.mark((function n(){var i,u,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.selfLabeList.map((function(e){return e._id})),n.next=3,t.$http.updata_label_ids({userId:t.userInfo._id,label_ids:i});case 3:u=n.sent,o=u.msg,console.log(o),e.showToast({title:o}),t.updateUserInfo(c(c({},t.userInfo),{},{label_ids:i})),console.log(t.labelList);case 9:case"end":return n.stop()}}),n)})))()},changeSeflList:function(e){this.isEdit&&this.labelIds.push(e._id)},deleteLabelItem:function(e){console.log(e),this.labelIds=this.labelIds.filter((function(t){return t!==e._id}))}}};t.default=f}).call(this,n("543d")["default"])}},[["e994","common/runtime","common/vendor"]]]);