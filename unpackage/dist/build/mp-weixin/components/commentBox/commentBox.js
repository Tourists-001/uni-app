(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/commentBox/commentBox"],{2393:function(n,e,t){"use strict";t.r(e);var o=t("2ddf"),c=t("c09f");for(var u in c)"default"!==u&&function(n){t.d(e,n,(function(){return c[n]}))}(u);t("ae09");var r,i=t("f0c5"),a=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=a.exports},"2ddf":function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={uniDateformat:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat")]).then(t.bind(null,"a5fd"))},commentBox:function(){return Promise.resolve().then(t.bind(null,"2393"))}},c=function(){var n=this,e=n.$createElement;n._self._c},u=[]},a4a0:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){Promise.resolve().then(function(){return resolve(t("2393"))}.bind(null,t)).catch(t.oe)},c={name:"commentBox",components:{commentBox:o},props:{item:{type:Object,default:function(){return[]}},isReply:{type:Boolean,default:!1}},data:function(){return{}},methods:{commentReply:function(n){n.isReply&&(n.comment.reply_id=n.comment.comment_id,n.comment.comment_id=this.item.comment_id),console.log(n),this.$emit("commentReply",n)}}};e.default=c},ae09:function(n,e,t){"use strict";var o=t("bc6e"),c=t.n(o);c.a},bc6e:function(n,e,t){},c09f:function(n,e,t){"use strict";t.r(e);var o=t("a4a0"),c=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/commentBox/commentBox-create-component',
    {
        'components/commentBox/commentBox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2393"))
        })
    },
    [['components/commentBox/commentBox-create-component']]
]);