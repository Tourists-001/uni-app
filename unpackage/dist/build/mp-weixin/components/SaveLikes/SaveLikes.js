(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/SaveLikes/SaveLikes"],{"17f3":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"e1df"))}},u=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"202c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,r,u,o,c){try{var i=e[o](c),a=i.value}catch(s){return void n(s)}i.done?t(a):Promise.resolve(a).then(r,u)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var o=e.apply(t,n);function c(e){a(o,r,u,c,i,"next",e)}function i(e){a(o,r,u,c,i,"throw",e)}c(void 0)}))}}var f={name:"SaveLikes",props:{articleID:String},computed:{isSave:function(){try{return this.userInfo&&this.userInfo.article_likes_ids.includes(this.articleID)}catch(e){return!1}}},methods:{changeSaveStatus:function(){var t=this;return s(r.default.mark((function n(){var u,o,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.checkedIsLogin();case 2:return n.next=4,t.$http.update_save_like({articleId:t.articleID,userId:t.userInfo._id});case 4:u=n.sent,o=u.msg,i=u.newUserInfo,e.showToast({title:o,icon:"none"}),t.updateUserInfo(c(c({},t.userInfo),i)),e.$emit("updateArticle");case 10:case"end":return n.stop()}}),n)})))()}}};t.default=f}).call(this,n("543d")["default"])},"2b28":function(e,t,n){"use strict";n.r(t);var r=n("17f3"),u=n("549a");for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var c,i=n("f0c5"),a=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=a.exports},"549a":function(e,t,n){"use strict";n.r(t);var r=n("202c"),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/SaveLikes/SaveLikes-create-component',
    {
        'components/SaveLikes/SaveLikes-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2b28"))
        })
    },
    [['components/SaveLikes/SaveLikes-create-component']]
]);
