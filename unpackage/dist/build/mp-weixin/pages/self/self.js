(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/self/self"],{"16b6":function(e,t,n){"use strict";n.r(t);var r=n("3d3d"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},"3d3d":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n,r,u,a,o){try{var c=e[a](o),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,u)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var a=e.apply(t,n);function o(e){s(a,r,u,o,c,"next",e)}function c(e){s(a,r,u,o,c,"throw",e)}o(void 0)}))}}var l={data:function(){return{currentVersion:"1.0.0",haveNewVersion:!1}},methods:{goLoginPage:function(){e.navigateTo({url:"/pages/userinfo/login/login"})},siginOut:function(){this.$store.commit("updateUserInfo",null),e.navigateTo({url:"/pages/index/index"})},goMyArticlePage:function(){e.navigateTo({url:"/pages/myArticle/myArticle"})},goFeedbackPage:function(){e.navigateTo({url:"/pages/feedback/feedback"})},changeAvatar:function(){var t=this;e.chooseImage({count:1,success:function(){var e=f(u.default.mark((function e(n){var r;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._uploadFile(n.tempFilePaths[0],n.tempFiles[0].name);case 2:return r=e.sent,e.next=5,t._updateUserAvatar(r);case 5:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()})},_uploadFile:function(e,t){return f(u.default.mark((function n(){var a,o,c;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),a=String(t),console.log(a,"====="),n.next=5,r.uploadFile({filePath:e,cloudPath:a});case 5:return o=n.sent,c=o.fileID,n.abrupt("return",c);case 8:case"end":return n.stop()}}),n)})))()},_updateUserAvatar:function(t){var n=this;return f(u.default.mark((function r(){var a,o;return u.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$http.update_user_avatar({userId:n.userInfo._id,filePath:t});case 2:a=r.sent,o=a.msg,e.showToast({title:o,icon:"none"}),n.updateUserInfo(c(c({},n.userInfo),{},{avatar:t}));case 6:case"end":return r.stop()}}),r)})))()}}};t.default=l}).call(this,n("543d")["default"],n("a9ff")["default"])},"40f8":function(e,t,n){"use strict";n.r(t);var r=n("e2bb"),u=n("16b6");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("e61c");var o,c=n("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=i.exports},"96de":function(e,t,n){},c2fe:function(e,t,n){"use strict";(function(e){n("829e");r(n("66fd"));var t=r(n("40f8"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},e2bb:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"e1df"))}},u=function(){var e=this,t=e.$createElement;e._self._c},a=[]},e61c:function(e,t,n){"use strict";var r=n("96de"),u=n.n(r);u.a}},[["c2fe","common/runtime","common/vendor"]]]);