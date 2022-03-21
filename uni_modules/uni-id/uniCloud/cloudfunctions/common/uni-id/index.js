"use strict";

function e(e) {
	return e && "object" == typeof e && "default" in e ? e.default : e
}
var t = e(require("crypto")),
	r = e(require("buffer")),
	n = e(require("stream")),
	i = e(require("util"));
const o = {
		PARAM_ERROR: {
			errCode: "param-error"
		},
		PARAM_REQUIRED: {
			errCode: "param-required"
		},
		USER_NOT_EXIST: {
			errCode: "user-not-exist"
		},
		ROLE_NOT_EXIST: {
			errCode: "role-not-exist"
		},
		PERMISSION_NOT_EXIST: {
			errCode: "permission-not-exist"
		},
		MULTI_USER_MATCHED: {
			errCode: "multi-user-matched"
		},
		USER_INFO_ERROR: {
			errCode: "user-info-error"
		},
		USER_ACCOUNT_CONFLICT: {
			errCode: "user-account-conflict"
		},
		USER_ACCOUNT_CLOSED: {
			errCode: "user-account-closed"
		},
		ACCOUNT_ALREADY_REGISTED: {
			errCode: "account-already-registed"
		},
		ACCOUNT_NOT_REGISTED: {
			errCode: "account-not-registed"
		},
		ACCOUNT_already_BOUND: {
			errCode: "account-already-bound"
		},
		UNBIND_FAILED: {
			errCode: "unbind-failed"
		},
		INVALID_INVITE_CODE: {
			errCode: "invalid-invite-code"
		},
		SET_INVITE_CODE_FAILED: {
			errCode: "set-invite-code-failed"
		},
		GET_THIRD_PARTY_ACCOUNT_FAILED: {
			errCode: "get-third-party-account-failed"
		}
	},
	s = {
		0: {
			errCode: 0,
			errMsg: ""
		},
		10001: {
			errCode: "account-banned"
		},
		10002: o.USER_NOT_EXIST,
		10003: o.MULTI_USER_MATCHED,
		10004: o.USER_INFO_ERROR,
		10005: o.USER_ACCOUNT_CONFLICT,
		10006: o.USER_ACCOUNT_CLOSED,
		10102: {
			errCode: "password-error"
		},
		10103: {
			errCode: "password-error-exceed-limit"
		},
		10201: o.ACCOUNT_ALREADY_REGISTED,
		10202: o.ACCOUNT_NOT_REGISTED,
		10203: o.INVALID_INVITE_CODE,
		10301: o.ACCOUNT_ALREADY_REGISTED,
		10302: o.ACCOUNT_NOT_REGISTED,
		10401: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10402: o.ACCOUNT_ALREADY_REGISTED,
		10403: o.ACCOUNT_NOT_REGISTED,
		10501: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10502: o.ACCOUNT_ALREADY_REGISTED,
		10503: o.ACCOUNT_NOT_REGISTED,
		10601: o.ACCOUNT_ALREADY_REGISTED,
		10602: o.ACCOUNT_NOT_REGISTED,
		10701: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10702: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10703: o.ACCOUNT_ALREADY_REGISTED,
		10704: o.ACCOUNT_NOT_REGISTED,
		10705: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10706: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10801: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		10802: o.ACCOUNT_ALREADY_REGISTED,
		10803: o.ACCOUNT_NOT_REGISTED,
		20101: o.PARAM_REQUIRED,
		20102: o.ACCOUNT_ALREADY_REGISTED,
		30101: o.PARAM_REQUIRED,
		30201: {
			errCode: "check-device-feature-failed"
		},
		30202: {
			errCode: "token-not-exist"
		},
		30203: {
			errCode: "token-expired"
		},
		30204: {
			errCode: "check-token-failed"
		},
		40201: o.USER_NOT_EXIST,
		40202: {
			errCode: "invalid-old-password"
		},
		50101: o.PARAM_REQUIRED,
		50102: o.PARAM_ERROR,
		50201: o.PARAM_REQUIRED,
		50203: o.PARAM_ERROR,
		50202: {
			errCode: "invalid-verify-code"
		},
		50301: {
			errCode: "send-sms-code-failed"
		},
		60101: o.ACCOUNT_already_BOUND,
		60201: o.ACCOUNT_already_BOUND,
		60301: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		60302: o.ACCOUNT_already_BOUND,
		60401: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		60402: o.ACCOUNT_already_BOUND,
		60501: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		60502: o.ACCOUNT_already_BOUND,
		70101: o.UNBIND_FAILED,
		70201: o.UNBIND_FAILED,
		70301: o.UNBIND_FAILED,
		70401: o.UNBIND_FAILED,
		70501: o.UNBIND_FAILED,
		80301: o.USER_NOT_EXIST,
		80401: o.SET_INVITE_CODE_FAILED,
		80402: o.SET_INVITE_CODE_FAILED,
		80501: o.INVALID_INVITE_CODE,
		80502: o.USER_NOT_EXIST,
		80503: {
			errCode: "modify-invite-code-is-not-allowed"
		},
		80601: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80602: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80701: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80702: o.GET_THIRD_PARTY_ACCOUNT_FAILED,
		80801: {
			errCode: "decrypt-weixin-data-failed"
		},
		80802: {
			errCode: "decrypt-weixin-data-failed"
		},
		80803: {
			errCode: "invalid-weixin-appid"
		},
		80804: o.PARAM_REQUIRED,
		80805: o.PARAM_REQUIRED,
		80806: o.PARAM_REQUIRED,
		90001: {
			errCode: "database-operation-failed"
		},
		90002: o.PARAM_REQUIRED,
		90003: o.PARAM_ERROR,
		90004: o.USER_NOT_EXIST,
		90005: o.ROLE_NOT_EXIST,
		90006: o.PERMISSION_NOT_EXIST
	};
class a extends Error {
	constructor(e) {
		super(e.message), this.errMsg = e.message || "", Object.defineProperties(this, {
			message: {
				get() {
					return `errCode: ${e.code||""} | errMsg: ` + this.errMsg
				},
				set(e) {
					this.errMsg = e
				}
			}
		})
	}
}
const c = Object.prototype.toString,
	u = Object.prototype.hasOwnProperty;

function d(e, t) {
	return u.call(e, t)
}

function l(e) {
	return "[object Object]" === c.call(e)
}

function p(e) {
	return "function" == typeof e
}

function f(e) {
	return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
}

function h(e) {
	return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
}
const m = /_(\w)/g,
	g = /[A-Z]/g;

function y(e) {
	return e.replace(m, (e, t) => t ? t.toUpperCase() : "")
}

function w(e) {
	return e.replace(g, e => "_" + e.toLowerCase())
}

function v(e, t) {
	let r, n;
	switch (t) {
		case "snake2camel":
			n = y, r = m;
			break;
		case "camel2snake":
			n = w, r = g
	}
	for (const i in e)
		if (d(e, i) && r.test(i)) {
			const r = n(i);
			e[r] = e[i], delete e[i], l(e[r]) ? e[r] = v(e[r], t) : Array.isArray(e[r]) && (e[r] = e[r].map(e => v(e,
				t)))
		} return e
}

function _(e) {
	return v(e, "snake2camel")
}

function b(e) {
	return v(e, "camel2snake")
}

function E(e) {
	return function(e, t = "-") {
		e = e || new Date;
		const r = [];
		return r.push(e.getFullYear()), r.push(("00" + (e.getMonth() + 1)).substr(-2)), r.push(("00" + e.getDate())
			.substr(-2)), r.join(t)
	}(e = e || new Date) + " " + function(e, t = ":") {
		e = e || new Date;
		const r = [];
		return r.push(("00" + e.getHours()).substr(-2)), r.push(("00" + e.getMinutes()).substr(-2)), r.push(("00" +
			e.getSeconds()).substr(-2)), r.join(t)
	}(e)
}

function C() {
	"development" === process.env.NODE_ENV && console.log(...arguments)
}

function T(e = 6) {
	let t = "";
	for (let r = 0; r < e; r++) t += Math.floor(10 * Math.random());
	return t
}

function A(e) {
	return Array.from(new Set(e))
}

function x(e = {}, t) {
	if (!t || !e) return e;
	const r = ["_pre", "_purify", "_post"];
	t._pre && (e = t._pre(e));
	let n = {
		shouldDelete: new Set([])
	};
	if (t._purify) {
		const e = t._purify;
		for (const t in e) e[t] = new Set(e[t]);
		n = Object.assign(n, e)
	}
	if (l(t))
		for (const i in t) {
			const o = t[i];
			p(o) && -1 === r.indexOf(i) ? e[i] = o(e) : "string" == typeof o && -1 === r.indexOf(i) && (e[i] = e[o], n
				.shouldDelete.add(o))
		} else p(t) && (e = t(e));
	if (n.shouldDelete)
		for (const t of n.shouldDelete) delete e[t];
	return t._post && (e = t._post(e)), e
}

function S(e, t) {
	const r = new e(t);
	return new Proxy(r, {
		get: function(e, t) {
			if ("function" == typeof e[t] && 0 !== t.indexOf("_") && e._protocols && e._protocols[t]) {
				const r = e._protocols[t];
				return async function(n) {
					n = x(n, r.args);
					let i = await e[t](n);
					return i = x(i, r.returnValue), i
				}
			}
			return e[t]
		}
	})
}

function I(e) {
	if (l(e))
		if (0 === e.code) e.errCode = e.code, e.message = e.errMsg = e.msg, delete e.messageValues;
		else if (d(s, e.code)) {
		const t = s[e.code];
		e.errCode = "uni-id-" + t.errCode, e.errMsg = this.t(t.errCode, e.messageValues || {}) || e.msg, e.message = e
			.msg = e.errMsg, delete e.messageValues
	} else e.code && console.warn(`error code not found, error code: ${e.code}, please contact us`)
}
var O = {
	"zh-Hans": {
		alipay: "支付宝",
		wechat: "微信",
		user: "用户",
		"user-id": "用户ID",
		"dcloud-appid": "应用Appid",
		"dcloud-appid-list": "应用列表",
		account: "账号",
		username: "用户名",
		email: "邮箱",
		mobile: "手机号",
		"wechat-openid": "微信openid",
		"wechat-account": "微信账号",
		"alipay-account": "支付宝账号",
		"qq-openid": "QQ openid",
		"qq-account": "QQ账号",
		"apple-account": "苹果账号",
		password: "密码",
		"verify-code": "验证码",
		"verify-code-type": "验证码类型",
		"user-unique-param": "用户名、邮箱或手机号",
		"role-id": "角色ID",
		"permission-id": "权限ID",
		login: "登录",
		"verify-mobile": "验证手机",
		"context-param-required": "context内缺少{param}，请使用uniID.createInstance传入客户端信息",
		"config-param-require": "uni-id的配置内缺少{param}",
		"uni-verify-config-required": "请在config.json中配置service.univerify下一键登录相关参数",
		"login-with-invite-type-required": "强制使用邀请码注册时，需指明type为register还是login",
		"type-array-required": "{param}应为数组形式",
		"query-field-warning": "检测到当前使用queryField匹配多字段进行登录操作，需要注意：uni-id并未限制用户名不能是手机号或邮箱，需要开发者自行限制。否则可能出现用户输入abc@xx.com会同时匹配到邮箱为此值的用户和用户名为此值的用户，导致登录失败",
		"add-role-admin-is-not-allowed": "不可新增roleID为admin的角色",
		"password-secret-type-error": "config内passwordSecret类型错误，只可设置string类型和array类型",
		"token-expires-config-warning": "tokenExpiresIn不可小于或等于tokenExpiresThreshold",
		"type-function-required": "{param}应为function类型",
		"dev-warning": "当前正在使用uniID.dev属性，注意此属性仅可用于开发调试",
		"config-file-invalid": "请确保公用模块uni-id对应的配置文件（common/uni-config-center/uni-id/config.json）格式正确（不可包含注释）",
		"config-file-not-found": "请在common/uni-config-center/uni-id/config.json内添加uni-id相关配置信息",
		"hx-version-warning": "当前使用的HBuilderX版本过低，请升级HBuilderX到最新版本",
		"account-banned": "账号已禁用",
		"user-not-exist": "用户不存在",
		"multi-user-matched": "匹配到多个账号",
		"user-info-error": "用户信息不正确",
		"user-account-conflict": "用户账号冲突",
		"user-account-closed": "此账号已注销",
		"password-error": "密码错误",
		"password-error-exceed-limit": "密码错误次数过多，请稍后再试",
		"account-already-registed": "此{type}已注册",
		"account-not-registed": "此{type}尚未注册",
		"invalid-invite-code": "邀请码无效",
		"get-third-party-account-failed": "获取{account}失败",
		"param-required": "{param}不可为空",
		"check-device-feature-failed": "设备特征校验未通过",
		"token-not-exist": "云端已不包含此token",
		"token-expired": "token已过期",
		"check-token-failed": "token校验未通过",
		"invalid-old-password": "旧密码错误",
		"param-error": "{param}参数错误，{reason}",
		"invalid-verify-code": "验证码错误或已失效",
		"send-sms-code-failed": "验证码发送失败",
		"account-already-bound": "此{type}已绑定",
		"unbind-failed": "解绑失败",
		"set-invite-code-failed": "邀请码设置失败",
		"modify-invite-code-is-not-allowed": "邀请码不可修改",
		"decrypt-weixin-data-failed": "解密失败",
		"invalid-weixin-appid": "appid不匹配",
		"database-operation-failed": "数据库读写异常",
		"role-not-exist": "角色不存在",
		"permission-not-exist": "权限不存在",
		"context-required": "uni-id无法获取context.{key}，请使用uniID.createInstance方法传入"
	},
	en: {
		alipay: "alipay",
		wechat: "wechat",
		user: "user",
		"user-id": "user id",
		"dcloud-appid": "DCloud appid",
		"dcloud-appid-list": "DCloud appid list",
		account: "account",
		username: "username",
		email: "email",
		mobile: "phone number",
		"wechat-openid": "wechat openid",
		"wechat-account": "wechat account",
		"alipay-account": "alipay account",
		"qq-openid": "QQ openid",
		"qq-account": "QQ account",
		"apple-account": "apple account",
		password: "password",
		"verify-code": "verify code",
		"verify-code-type": "verify code type",
		"user-unique-param": "username, email or mobile phone number",
		"role-id": "role id",
		"permission-id": "permission id",
		login: "login",
		"verify-mobile": "verify mobile phone number",
		"context-param-required": "You should pass {param} in context using uniID.createInstance",
		"config-param-require": "{param} is required in uni-id's config",
		"uni-verify-config-required": "univerify config required: service.univerify",
		"login-with-invite-type-required": "parameter type is required when forceInviteCode set to true",
		"type-array-required": "type of {param} must be array",
		"query-field-warning": "You are using multi query field to login, be aware that uni-id will not check username's fromat, eg: abc@xx.com is a valid username for uni-id. You should check username in your code.",
		"add-role-admin-is-not-allowed": 'add role with an id of "admin" is not allowed',
		"password-secret-type-error": "passwordSecret in config must be string or array",
		"token-expires-config-warning": "tokenExpiresIn must be greater than tokenExpiresThreshold",
		"type-function-required": "{param} must be a function",
		"dev-warning": "warning: uniID.dev is only for development",
		"config-file-invalid": "invalid config file (common/uni-config-center/uni-id/config.json), please note that comment is not allowed",
		"config-file-not-found": "config file (common/uni-config-center/uni-id/config.json) not found",
		"hx-version-warning": "The HBuilderX you are using is too old, please upgrade to the latest version of HBuilderX",
		"account-banned": "account is banned",
		"user-not-exist": "user does not exist",
		"multi-user-matched": "multiple users are matched",
		"user-info-error": "user info error",
		"user-account-conflict": "user account conflict",
		"user-account-closed": "user account was closed",
		"password-error": "password is incorrect",
		"password-error-exceed-limit": "password error exceed limit",
		"account-already-registed": "{type} is already registed",
		"account-not-registed": "{type} is not registed",
		"invalid-invite-code": "invalid invite code",
		"get-third-party-account-failed": "get {account} failed",
		"param-required": "{param} is required",
		"check-device-feature-failed": "check device feature failed",
		"token-not-exist": "token is not exist",
		"token-expired": "token is expired",
		"check-token-failed": "check token failed",
		"invalid-old-password": "invalid old password",
		"param-error": "{param} error, {reason}",
		"invalid-verify-code": "invalid verify code",
		"send-sms-code-failed": "send sms code failed",
		"account-already-bound": "{type} is already bound",
		"unbind-failed": "unbind failed",
		"set-invite-code-failed": "set invite code failed",
		"modify-invite-code-is-not-allowed": "invite code modification is not allowed",
		"decrypt-weixin-data-failed": "decrypt weixin data failed",
		"invalid-weixin-appid": "invalid weixin appid",
		"database-operation-failed": "database operation failed",
		"role-not-exist": "role does not exist",
		"permission-not-exist": "permission does not exist",
		"context-required": "context.{key} is required, you should pass context using uniID.createInstance"
	}
};
const k = uniCloud.database(),
	j = k.collection("uni-id-users"),
	R = k.collection("opendb-verify-codes"),
	P = k.collection("uni-id-roles"),
	D = k.collection("uni-id-permissions"),
	q = {
		username: "username",
		mobile: "mobile",
		email: "email",
		wx_unionid: "wechat-account",
		"wx_openid.app-plus": "wechat-account",
		"wx_openid.app": "wechat-account",
		"wx_openid.mp-weixin": "wechat-account",
		qq_unionid: "qq-account",
		"qq_openid.app-plus": "qq-account",
		"qq_openid.app": "qq-account",
		"qq_openid.mp-weixin": "qq-account",
		ali_openid: "alipay-account",
		apple_openid: "alipay-account"
	},
	N = 90002,
	L = 90003,
	U = 90004,
	V = 90005,
	M = 0,
	B = 1,
	F = 4;
async function $({
	uid: e,
	status: t
} = {}) {
	return e ? (await j.doc(e).update({
		status: t,
		status_update_date: Date.now()
	}), {
		code: 0
	}) : {
		code: N,
		messageValues: {
			param: this.t("user-id")
		}
	}
}
async function H({
	name: e,
	url: t,
	data: r,
	options: n,
	defaultOptions: i
}) {
	let o = {};
	const s = b(Object.assign({}, r));
	s && s.access_token && delete s.access_token;
	try {
		n = Object.assign({}, i, n, {
			data: s
		}), o = await uniCloud.httpclient.request(t, n)
	} catch (t) {
		return function(e, t) {
			throw new a({
				code: t.code || -2,
				message: t.message || e + " fail"
			})
		}(e, t)
	}
	let c = o.data;
	const u = o.headers["content-type"];
	if (!Buffer.isBuffer(c) || 0 !== u.indexOf("text/plain") && 0 !== u.indexOf("application/json")) Buffer
		.isBuffer(c) && (c = {
			buffer: c,
			contentType: u
		});
	else try {
		c = JSON.parse(c.toString())
	} catch (e) {
		c = c.toString()
	}
	return _(function(e, t) {
		if (t.errcode) throw new a({
			code: t.errcode || -2,
			message: t.errmsg || e + " fail"
		});
		return delete t.errcode, delete t.errmsg, {
			...t,
			errMsg: e + " ok",
			errCode: 0
		}
	}(e, c || {
		errCode: -2,
		errMsg: "Request failed"
	}))
}

function K(e, t) {
	let r = "";
	if (t && t.accessToken) {
		r = `${e.indexOf("?")>-1?"&":"?"}access_token=${t.accessToken}`
	}
	return `${e}${r}`
}
class G {
	constructor(e) {
		this.options = Object.assign({
			baseUrl: "https://api.weixin.qq.com",
			timeout: 5e3
		}, e)
	}
	async _requestWxOpenapi({
		name: e,
		url: t,
		data: r,
		options: n
	}) {
		const i = {
			method: "GET",
			dataType: "json",
			dataAsQueryString: !0,
			timeout: this.options.timeout
		};
		return await H({
			name: "auth." + e,
			url: `${this.options.baseUrl}${K(t,r)}`,
			data: r,
			options: n,
			defaultOptions: i
		})
	}
	async code2Session(e) {
		return await this._requestWxOpenapi({
			name: "code2Session",
			url: "/sns/jscode2session",
			data: {
				grant_type: "authorization_code",
				appid: this.options.appId,
				secret: this.options.secret,
				js_code: e
			}
		})
	}
	async getOauthAccessToken(e) {
		const t = await this._requestWxOpenapi({
			name: "getOauthAccessToken",
			url: "/sns/oauth2/access_token",
			data: {
				grant_type: "authorization_code",
				appid: this.options.appId,
				secret: this.options.secret,
				code: e
			}
		});
		return t.expiresIn && (t.expired = Date.now() + t.expiresIn), t
	}
}
async function z({
	name: e,
	url: t,
	data: r,
	options: n,
	defaultOptions: i
}) {
	let o;
	n = Object.assign({}, i, n, {
		data: b(Object.assign({}, r))
	});
	try {
		o = await uniCloud.httpclient.request(t, n)
	} catch (t) {
		return function(e, t) {
			throw new a({
				code: t.code || -2,
				message: t.message || e + " fail"
			})
		}(e, t)
	}
	let s = o.data;
	const c = o.headers["content-type"];
	if (!Buffer.isBuffer(s) || 0 !== c.indexOf("text/plain") && 0 !== c.indexOf("application/json")) Buffer
		.isBuffer(s) && (s = {
			buffer: s,
			contentType: c
		});
	else try {
		s = JSON.parse(s.toString())
	} catch (e) {
		s = s.toString()
	}
	return _(function(e, t) {
		if (t.ret || t.error) {
			const r = t.ret || t.error || t.errcode || -2,
				n = t.msg || t.error_description || t.errmsg || e + " fail";
			throw new a({
				code: r,
				message: n
			})
		}
		return delete t.ret, delete t.msg, delete t.error, delete t.error_description, delete t.errcode,
			delete t.errmsg, {
				...t,
				errMsg: e + " ok",
				errCode: 0
			}
	}(e, s || {
		errCode: -2,
		errMsg: "Request failed"
	}))
}
class Q {
	constructor(e) {
		this.options = Object.assign({
			baseUrl: "https://graph.qq.com",
			timeout: 5e3
		}, e)
	}
	async _requestQQOpenapi({
		name: e,
		url: t,
		data: r,
		options: n
	}) {
		const i = {
			method: "GET",
			dataType: "json",
			dataAsQueryString: !0,
			timeout: this.options.timeout
		};
		var o, s;
		return await z({
			name: "auth." + e,
			url: (o = this.options.baseUrl, s = t, /^https?:/.test(s) ? s : o + s),
			data: r,
			options: n,
			defaultOptions: i
		})
	}
	async getOpenidByToken({
		accessToken: e
	} = {}) {
		const t = await this._requestQQOpenapi({
			name: "getOpenidByToken",
			url: "/oauth2.0/me",
			data: {
				accessToken: e,
				unionid: 1,
				fmt: "json"
			}
		});
		if (t.clientId !== this.options.appId) throw new a({
			code: "APPID_NOT_MATCH",
			message: "appid not match"
		});
		return {
			openid: t.openid,
			unionid: t.unionid
		}
	}
	async code2Session({
		code: e
	} = {}) {
		return await this._requestQQOpenapi({
			name: "getOpenidByToken",
			url: "https://api.q.qq.com/sns/jscode2session",
			data: {
				grant_type: "authorization_code",
				appid: this.options.appId,
				secret: this.options.secret,
				js_code: e
			}
		})
	}
}
const Y = {
	RSA: "RSA-SHA1",
	RSA2: "RSA-SHA256"
};
var X = {
	code2Session: {
		returnValue: {
			openid: "userId"
		}
	}
};
class J extends class {
	constructor(e = {}) {
		if (!e.appId) throw new Error("appId required");
		if (!e.privateKey) throw new Error("privateKey required");
		const t = {
			gateway: "https://openapi.alipay.com/gateway.do",
			timeout: 5e3,
			charset: "utf-8",
			version: "1.0",
			signType: "RSA2",
			timeOffset: -(new Date).getTimezoneOffset() / 60,
			keyType: "PKCS8"
		};
		e.sandbox && (e.gateway = "https://openapi.alipaydev.com/gateway.do"), this.options = Object.assign({}, t,
			e);
		const r = "PKCS8" === this.options.keyType ? "PRIVATE KEY" : "RSA PRIVATE KEY";
		this.options.privateKey = this._formatKey(this.options.privateKey, r), this.options.alipayPublicKey && (this
			.options.alipayPublicKey = this._formatKey(this.options.alipayPublicKey, "PUBLIC KEY"))
	}
	_formatKey(e, t) {
		return `-----BEGIN ${t}-----\n${e}\n-----END ${t}-----`
	}
	_formatUrl(e, t) {
		let r = e;
		const n = ["app_id", "method", "format", "charset", "sign_type", "sign", "timestamp", "version",
			"notify_url", "return_url", "auth_token", "app_auth_token"
		];
		for (const e in t)
			if (n.indexOf(e) > -1) {
				const n = encodeURIComponent(t[e]);
				r = `${r}${r.includes("?")?"&":"?"}${e}=${n}`, delete t[e]
			} return {
			execParams: t,
			url: r
		}
	}
	_getSign(e, r) {
		const n = r.bizContent || null;
		delete r.bizContent;
		const i = Object.assign({
			method: e,
			appId: this.options.appId,
			charset: this.options.charset,
			version: this.options.version,
			signType: this.options.signType,
			timestamp: E((o = this.options.timeOffset, new Date(Date.now() + 6e4 * ((new Date)
				.getTimezoneOffset() + 60 * (o || 0)))))
		}, r);
		var o;
		n && (i.bizContent = JSON.stringify(b(n)));
		const s = b(i),
			a = Object.keys(s).sort().map(e => {
				let t = s[e];
				return "[object String]" !== Array.prototype.toString.call(t) && (t = JSON.stringify(t)),
					`${e}=${t}`
			}).join("&"),
			c = t.createSign(Y[this.options.signType]).update(a, "utf8").sign(this.options.privateKey, "base64");
		return Object.assign(s, {
			sign: c
		})
	}
	async _exec(e, t = {}, r = {}) {
		const n = this._getSign(e, t),
			{
				url: i,
				execParams: o
			} = this._formatUrl(this.options.gateway, n),
			{
				status: s,
				data: a
			} = await uniCloud.httpclient.request(i, {
				method: "POST",
				data: o,
				dataType: "text",
				timeout: this.options.timeout
			});
		if (200 !== s) throw new Error("request fail");
		const c = JSON.parse(a),
			u = e.replace(/\./g, "_") + "_response",
			d = c[u],
			l = c.error_response;
		if (d) {
			if (!r.validateSign || this._checkResponseSign(a, u)) {
				if (!d.code || "10000" === d.code) {
					return {
						errCode: 0,
						errMsg: d.msg || "",
						..._(d)
					}
				}
				const e = d.sub_code ? `${d.sub_code} ${d.sub_msg}` : "" + (d.msg || "unkonwn error");
				throw new Error(e)
			}
			throw new Error("check sign error")
		}
		if (l) throw new Error(l.sub_msg || l.msg || "request fail");
		throw new Error("request fail")
	}
	_checkResponseSign(e, r) {
		if (!this.options.alipayPublicKey || "" === this.options.alipayPublicKey) return console.warn(
			"options.alipayPublicKey is empty"), !0;
		if (!e) return !1;
		const n = this._getSignStr(e, r),
			i = JSON.parse(e).sign,
			o = t.createVerify(Y[this.options.signType]);
		return o.update(n, "utf8"), o.verify(this.options.alipayPublicKey, i, "base64")
	}
	_getSignStr(e, t) {
		let r = e.trim();
		const n = e.indexOf(t + '"'),
			i = e.lastIndexOf('"sign"');
		return r = r.substr(n + t.length + 1), r = r.substr(0, i), r = r.replace(/^[^{]*{/g, "{"), r = r.replace(
			/\}([^}]*)$/g, "}"), r
	}
} {
	constructor(e) {
		super(e), this._protocols = X
	}
	async code2Session(e) {
		return await this._exec("alipay.system.oauth.token", {
			grantType: "authorization_code",
			code: e
		})
	}
}

function W(e) {
	var t = e[0];
	return t < "0" || t > "7" ? "00" + e : e
}

function Z(e) {
	var t = e.toString(16);
	return t.length % 2 ? "0" + t : t
}

function ee(e) {
	if (e <= 127) return Z(e);
	var t = Z(e);
	return Z(128 + t.length / 2) + t
}
var te = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" !=
	typeof global ? global : "undefined" != typeof self ? self : {};

function re(e, t) {
	return e(t = {
		exports: {}
	}, t.exports), t.exports
}
var ne = re((function(e, t) {
		var n = r.Buffer;

		function i(e, t) {
			for (var r in e) t[r] = e[r]
		}

		function o(e, t, r) {
			return n(e, t, r)
		}
		n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = o), o
			.prototype = Object.create(n.prototype), i(n, o), o.from = function(e, t, r) {
				if ("number" == typeof e) throw new TypeError("Argument must not be a number");
				return n(e, t, r)
			}, o.alloc = function(e, t, r) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				var i = n(e);
				return void 0 !== t ? "string" == typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0), i
			}, o.allocUnsafe = function(e) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				return n(e)
			}, o.allocUnsafeSlow = function(e) {
				if ("number" != typeof e) throw new TypeError("Argument must be a number");
				return r.SlowBuffer(e)
			}
	})),
	ie = (ne.Buffer, ne.Buffer);

function oe(e) {
	if (this.buffer = null, this.writable = !0, this.readable = !0, !e) return this.buffer = ie.alloc(0), this;
	if ("function" == typeof e.pipe) return this.buffer = ie.alloc(0), e.pipe(this), this;
	if (e.length || "object" == typeof e) return this.buffer = e, this.writable = !1, process.nextTick(function() {
		this.emit("end", e), this.readable = !1, this.emit("close")
	}.bind(this)), this;
	throw new TypeError("Unexpected data type (" + typeof e + ")")
}
i.inherits(oe, n), oe.prototype.write = function(e) {
	this.buffer = ie.concat([this.buffer, ie.from(e)]), this.emit("data", e)
}, oe.prototype.end = function(e) {
	e && this.write(e), this.emit("end", e), this.emit("close"), this.writable = !1, this.readable = !1
};
var se = oe,
	ae = r.Buffer,
	ce = r.SlowBuffer,
	ue = de;

function de(e, t) {
	if (!ae.isBuffer(e) || !ae.isBuffer(t)) return !1;
	if (e.length !== t.length) return !1;
	for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
	return 0 === r
}
de.install = function() {
	ae.prototype.equal = ce.prototype.equal = function(e) {
		return de(this, e)
	}
};
var le = ae.prototype.equal,
	pe = ce.prototype.equal;

function fe(e) {
	return (e / 8 | 0) + (e % 8 == 0 ? 0 : 1)
}
de.restore = function() {
	ae.prototype.equal = le, ce.prototype.equal = pe
};
var he = {
	ES256: fe(256),
	ES384: fe(384),
	ES512: fe(521)
};
var me = function(e) {
		var t = he[e];
		if (t) return t;
		throw new Error('Unknown algorithm "' + e + '"')
	},
	ge = ne.Buffer;

function ye(e) {
	if (ge.isBuffer(e)) return e;
	if ("string" == typeof e) return ge.from(e, "base64");
	throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")
}

function we(e, t, r) {
	for (var n = 0; t + n < r && 0 === e[t + n];) ++n;
	return e[t + n] >= 128 && --n, n
}
var ve = {
		derToJose: function(e, t) {
			e = ye(e);
			var r = me(t),
				n = r + 1,
				i = e.length,
				o = 0;
			if (48 !== e[o++]) throw new Error('Could not find expected "seq"');
			var s = e[o++];
			if (129 === s && (s = e[o++]), i - o < s) throw new Error('"seq" specified length of "' + s +
				'", only "' + (i - o) + '" remaining');
			if (2 !== e[o++]) throw new Error('Could not find expected "int" for "r"');
			var a = e[o++];
			if (i - o - 2 < a) throw new Error('"r" specified length of "' + a + '", only "' + (i - o - 2) +
				'" available');
			if (n < a) throw new Error('"r" specified length of "' + a + '", max of "' + n + '" is acceptable');
			var c = o;
			if (o += a, 2 !== e[o++]) throw new Error('Could not find expected "int" for "s"');
			var u = e[o++];
			if (i - o !== u) throw new Error('"s" specified length of "' + u + '", expected "' + (i - o) + '"');
			if (n < u) throw new Error('"s" specified length of "' + u + '", max of "' + n + '" is acceptable');
			var d = o;
			if ((o += u) !== i) throw new Error('Expected to consume entire buffer, but "' + (i - o) +
				'" bytes remain');
			var l = r - a,
				p = r - u,
				f = ge.allocUnsafe(l + a + p + u);
			for (o = 0; o < l; ++o) f[o] = 0;
			e.copy(f, o, c + Math.max(-l, 0), c + a);
			for (var h = o = r; o < h + p; ++o) f[o] = 0;
			return e.copy(f, o, d + Math.max(-p, 0), d + u), f = (f = f.toString("base64")).replace(/=/g, "")
				.replace(/\+/g, "-").replace(/\//g, "_")
		},
		joseToDer: function(e, t) {
			e = ye(e);
			var r = me(t),
				n = e.length;
			if (n !== 2 * r) throw new TypeError('"' + t + '" signatures must be "' + 2 * r + '" bytes, saw "' + n +
				'"');
			var i = we(e, 0, r),
				o = we(e, r, e.length),
				s = r - i,
				a = r - o,
				c = 2 + s + 1 + 1 + a,
				u = c < 128,
				d = ge.allocUnsafe((u ? 2 : 3) + c),
				l = 0;
			return d[l++] = 48, u ? d[l++] = c : (d[l++] = 129, d[l++] = 255 & c), d[l++] = 2, d[l++] = s, i < 0 ? (
					d[l++] = 0, l += e.copy(d, l, 0, r)) : l += e.copy(d, l, i, r), d[l++] = 2, d[l++] = a, o < 0 ?
				(d[l++] = 0, e.copy(d, l, r)) : e.copy(d, l, r + o), d
		}
	},
	_e = ne.Buffer,
	be = "secret must be a string or buffer",
	Ee = "key must be a string or a buffer",
	Ce = "function" == typeof t.createPublicKey;

function Te(e) {
	if (!_e.isBuffer(e) && "string" != typeof e) {
		if (!Ce) throw Ie(Ee);
		if ("object" != typeof e) throw Ie(Ee);
		if ("string" != typeof e.type) throw Ie(Ee);
		if ("string" != typeof e.asymmetricKeyType) throw Ie(Ee);
		if ("function" != typeof e.export) throw Ie(Ee)
	}
}

function Ae(e) {
	if (!_e.isBuffer(e) && "string" != typeof e && "object" != typeof e) throw Ie(
		"key must be a string, a buffer or an object")
}

function xe(e) {
	return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function Se(e) {
	var t = 4 - (e = e.toString()).length % 4;
	if (4 !== t)
		for (var r = 0; r < t; ++r) e += "=";
	return e.replace(/\-/g, "+").replace(/_/g, "/")
}

function Ie(e) {
	var t = [].slice.call(arguments, 1),
		r = i.format.bind(i, e).apply(null, t);
	return new TypeError(r)
}

function Oe(e) {
	var t;
	return t = e, _e.isBuffer(t) || "string" == typeof t || (e = JSON.stringify(e)), e
}

function ke(e) {
	return function(r, n) {
		! function(e) {
			if (!_e.isBuffer(e)) {
				if ("string" == typeof e) return e;
				if (!Ce) throw Ie(be);
				if ("object" != typeof e) throw Ie(be);
				if ("secret" !== e.type) throw Ie(be);
				if ("function" != typeof e.export) throw Ie(be)
			}
		}(n), r = Oe(r);
		var i = t.createHmac("sha" + e, n);
		return xe((i.update(r), i.digest("base64")))
	}
}

function je(e) {
	return function(t, r, n) {
		var i = ke(e)(t, n);
		return ue(_e.from(r), _e.from(i))
	}
}

function Re(e) {
	return function(r, n) {
		Ae(n), r = Oe(r);
		var i = t.createSign("RSA-SHA" + e);
		return xe((i.update(r), i.sign(n, "base64")))
	}
}

function Pe(e) {
	return function(r, n, i) {
		Te(i), r = Oe(r), n = Se(n);
		var o = t.createVerify("RSA-SHA" + e);
		return o.update(r), o.verify(i, n, "base64")
	}
}

function De(e) {
	return function(r, n) {
		Ae(n), r = Oe(r);
		var i = t.createSign("RSA-SHA" + e);
		return xe((i.update(r), i.sign({
			key: n,
			padding: t.constants.RSA_PKCS1_PSS_PADDING,
			saltLength: t.constants.RSA_PSS_SALTLEN_DIGEST
		}, "base64")))
	}
}

function qe(e) {
	return function(r, n, i) {
		Te(i), r = Oe(r), n = Se(n);
		var o = t.createVerify("RSA-SHA" + e);
		return o.update(r), o.verify({
			key: i,
			padding: t.constants.RSA_PKCS1_PSS_PADDING,
			saltLength: t.constants.RSA_PSS_SALTLEN_DIGEST
		}, n, "base64")
	}
}

function Ne(e) {
	var t = Re(e);
	return function() {
		var r = t.apply(null, arguments);
		return r = ve.derToJose(r, "ES" + e)
	}
}

function Le(e) {
	var t = Pe(e);
	return function(r, n, i) {
		return n = ve.joseToDer(n, "ES" + e).toString("base64"), t(r, n, i)
	}
}

function Ue() {
	return function() {
		return ""
	}
}

function Ve() {
	return function(e, t) {
		return "" === t
	}
}
Ce && (Ee += " or a KeyObject", be += "or a KeyObject");
var Me = function(e) {
		var t = {
				hs: ke,
				rs: Re,
				ps: De,
				es: Ne,
				none: Ue
			},
			r = {
				hs: je,
				rs: Pe,
				ps: qe,
				es: Le,
				none: Ve
			},
			n = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
		if (!n) throw Ie(
			'"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".',
			e);
		var i = (n[1] || n[3]).toLowerCase(),
			o = n[2];
		return {
			sign: t[i](o),
			verify: r[i](o)
		}
	},
	Be = r.Buffer,
	Fe = function(e) {
		return "string" == typeof e ? e : "number" == typeof e || Be.isBuffer(e) ? e.toString() : JSON.stringify(e)
	},
	$e = ne.Buffer;

function He(e, t) {
	return $e.from(e, t).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
}

function Ke(e) {
	var t = e.header,
		r = e.payload,
		n = e.secret || e.privateKey,
		o = e.encoding,
		s = Me(t.alg),
		a = function(e, t, r) {
			r = r || "utf8";
			var n = He(Fe(e), "binary"),
				o = He(Fe(t), r);
			return i.format("%s.%s", n, o)
		}(t, r, o),
		c = s.sign(a, n);
	return i.format("%s.%s", a, c)
}

function Ge(e) {
	var t = e.secret || e.privateKey || e.key,
		r = new se(t);
	this.readable = !0, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key =
		r, this.payload = new se(e.payload), this.secret.once("close", function() {
			!this.payload.writable && this.readable && this.sign()
		}.bind(this)), this.payload.once("close", function() {
			!this.secret.writable && this.readable && this.sign()
		}.bind(this))
}
i.inherits(Ge, n), Ge.prototype.sign = function() {
	try {
		var e = Ke({
			header: this.header,
			payload: this.payload.buffer,
			secret: this.secret.buffer,
			encoding: this.encoding
		});
		return this.emit("done", e), this.emit("data", e), this.emit("end"), this.readable = !1, e
	} catch (e) {
		this.readable = !1, this.emit("error", e), this.emit("close")
	}
}, Ge.sign = Ke;
var ze = Ge,
	Qe = ne.Buffer,
	Ye = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function Xe(e) {
	if (function(e) {
			return "[object Object]" === Object.prototype.toString.call(e)
		}(e)) return e;
	try {
		return JSON.parse(e)
	} catch (e) {
		return
	}
}

function Je(e) {
	var t = e.split(".", 1)[0];
	return Xe(Qe.from(t, "base64").toString("binary"))
}

function We(e) {
	return e.split(".")[2]
}

function Ze(e) {
	return Ye.test(e) && !!Je(e)
}

function et(e, t, r) {
	if (!t) {
		var n = new Error("Missing algorithm parameter for jws.verify");
		throw n.code = "MISSING_ALGORITHM", n
	}
	var i = We(e = Fe(e)),
		o = function(e) {
			return e.split(".", 2).join(".")
		}(e);
	return Me(t).verify(o, i, r)
}

function tt(e, t) {
	if (t = t || {}, !Ze(e = Fe(e))) return null;
	var r = Je(e);
	if (!r) return null;
	var n = function(e, t) {
		t = t || "utf8";
		var r = e.split(".")[1];
		return Qe.from(r, "base64").toString(t)
	}(e);
	return ("JWT" === r.typ || t.json) && (n = JSON.parse(n, t.encoding)), {
		header: r,
		payload: n,
		signature: We(e)
	}
}

function rt(e) {
	var t = (e = e || {}).secret || e.publicKey || e.key,
		r = new se(t);
	this.readable = !0, this.algorithm = e.algorithm, this.encoding = e.encoding, this.secret = this.publicKey = this
		.key = r, this.signature = new se(e.signature), this.secret.once("close", function() {
			!this.signature.writable && this.readable && this.verify()
		}.bind(this)), this.signature.once("close", function() {
			!this.secret.writable && this.readable && this.verify()
		}.bind(this))
}
i.inherits(rt, n), rt.prototype.verify = function() {
	try {
		var e = et(this.signature.buffer, this.algorithm, this.key.buffer),
			t = tt(this.signature.buffer, this.encoding);
		return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = !1, e
	} catch (e) {
		this.readable = !1, this.emit("error", e), this.emit("close")
	}
}, rt.decode = tt, rt.isValid = Ze, rt.verify = et;
var nt = rt,
	it = {
		ALGORITHMS: ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384",
			"ES512"
		],
		sign: ze.sign,
		verify: nt.verify,
		decode: nt.decode,
		isValid: nt.isValid,
		createSign: function(e) {
			return new ze(e)
		},
		createVerify: function(e) {
			return new nt(e)
		}
	},
	ot = function(e, t) {
		t = t || {};
		var r = it.decode(e, t);
		if (!r) return null;
		var n = r.payload;
		if ("string" == typeof n) try {
			var i = JSON.parse(n);
			null !== i && "object" == typeof i && (n = i)
		} catch (e) {}
		return !0 === t.complete ? {
			header: r.header,
			payload: n,
			signature: r.signature
		} : n
	},
	st = function(e, t) {
		Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name =
			"JsonWebTokenError", this.message = e, t && (this.inner = t)
	};
(st.prototype = Object.create(Error.prototype)).constructor = st;
var at = st,
	ct = function(e, t) {
		at.call(this, e), this.name = "NotBeforeError", this.date = t
	};
(ct.prototype = Object.create(at.prototype)).constructor = ct;
var ut = ct,
	dt = function(e, t) {
		at.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t
	};
(dt.prototype = Object.create(at.prototype)).constructor = dt;
var lt = dt,
	pt = 1e3,
	ft = 60 * pt,
	ht = 60 * ft,
	mt = 24 * ht,
	gt = function(e, t) {
		t = t || {};
		var r = typeof e;
		if ("string" === r && e.length > 0) return function(e) {
			if ((e = String(e)).length > 100) return;
			var t =
				/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
				.exec(e);
			if (!t) return;
			var r = parseFloat(t[1]);
			switch ((t[2] || "ms").toLowerCase()) {
				case "years":
				case "year":
				case "yrs":
				case "yr":
				case "y":
					return 315576e5 * r;
				case "weeks":
				case "week":
				case "w":
					return 6048e5 * r;
				case "days":
				case "day":
				case "d":
					return r * mt;
				case "hours":
				case "hour":
				case "hrs":
				case "hr":
				case "h":
					return r * ht;
				case "minutes":
				case "minute":
				case "mins":
				case "min":
				case "m":
					return r * ft;
				case "seconds":
				case "second":
				case "secs":
				case "sec":
				case "s":
					return r * pt;
				case "milliseconds":
				case "millisecond":
				case "msecs":
				case "msec":
				case "ms":
					return r;
				default:
					return
			}
		}(e);
		if ("number" === r && isFinite(e)) return t.long ? function(e) {
			var t = Math.abs(e);
			if (t >= mt) return yt(e, t, mt, "day");
			if (t >= ht) return yt(e, t, ht, "hour");
			if (t >= ft) return yt(e, t, ft, "minute");
			if (t >= pt) return yt(e, t, pt, "second");
			return e + " ms"
		}(e) : function(e) {
			var t = Math.abs(e);
			if (t >= mt) return Math.round(e / mt) + "d";
			if (t >= ht) return Math.round(e / ht) + "h";
			if (t >= ft) return Math.round(e / ft) + "m";
			if (t >= pt) return Math.round(e / pt) + "s";
			return e + "ms"
		}(e);
		throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
	};

function yt(e, t, r, n) {
	var i = t >= 1.5 * r;
	return Math.round(e / r) + " " + n + (i ? "s" : "")
}
var wt = function(e, t) {
		var r = t || Math.floor(Date.now() / 1e3);
		if ("string" == typeof e) {
			var n = gt(e);
			if (void 0 === n) return;
			return Math.floor(r + n / 1e3)
		}
		return "number" == typeof e ? r + e : void 0
	},
	vt = re((function(e, t) {
		var r;
		t = e.exports = G, r = "object" == typeof process && process.env && process.env.NODE_DEBUG &&
			/\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
				var e = Array.prototype.slice.call(arguments, 0);
				e.unshift("SEMVER"), console.log.apply(console, e)
			} : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
		var n = Number.MAX_SAFE_INTEGER || 9007199254740991,
			i = t.re = [],
			o = t.src = [],
			s = 0,
			a = s++;
		o[a] = "0|[1-9]\\d*";
		var c = s++;
		o[c] = "[0-9]+";
		var u = s++;
		o[u] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
		var d = s++;
		o[d] = "(" + o[a] + ")\\.(" + o[a] + ")\\.(" + o[a] + ")";
		var l = s++;
		o[l] = "(" + o[c] + ")\\.(" + o[c] + ")\\.(" + o[c] + ")";
		var p = s++;
		o[p] = "(?:" + o[a] + "|" + o[u] + ")";
		var f = s++;
		o[f] = "(?:" + o[c] + "|" + o[u] + ")";
		var h = s++;
		o[h] = "(?:-(" + o[p] + "(?:\\." + o[p] + ")*))";
		var m = s++;
		o[m] = "(?:-?(" + o[f] + "(?:\\." + o[f] + ")*))";
		var g = s++;
		o[g] = "[0-9A-Za-z-]+";
		var y = s++;
		o[y] = "(?:\\+(" + o[g] + "(?:\\." + o[g] + ")*))";
		var w = s++,
			v = "v?" + o[d] + o[h] + "?" + o[y] + "?";
		o[w] = "^" + v + "$";
		var _ = "[v=\\s]*" + o[l] + o[m] + "?" + o[y] + "?",
			b = s++;
		o[b] = "^" + _ + "$";
		var E = s++;
		o[E] = "((?:<|>)?=?)";
		var C = s++;
		o[C] = o[c] + "|x|X|\\*";
		var T = s++;
		o[T] = o[a] + "|x|X|\\*";
		var A = s++;
		o[A] = "[v=\\s]*(" + o[T] + ")(?:\\.(" + o[T] + ")(?:\\.(" + o[T] + ")(?:" + o[h] + ")?" + o[y] +
			"?)?)?";
		var x = s++;
		o[x] = "[v=\\s]*(" + o[C] + ")(?:\\.(" + o[C] + ")(?:\\.(" + o[C] + ")(?:" + o[m] + ")?" + o[y] +
			"?)?)?";
		var S = s++;
		o[S] = "^" + o[E] + "\\s*" + o[A] + "$";
		var I = s++;
		o[I] = "^" + o[E] + "\\s*" + o[x] + "$";
		var O = s++;
		o[O] = "(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";
		var k = s++;
		o[k] = "(?:~>?)";
		var j = s++;
		o[j] = "(\\s*)" + o[k] + "\\s+", i[j] = new RegExp(o[j], "g");
		var R = s++;
		o[R] = "^" + o[k] + o[A] + "$";
		var P = s++;
		o[P] = "^" + o[k] + o[x] + "$";
		var D = s++;
		o[D] = "(?:\\^)";
		var q = s++;
		o[q] = "(\\s*)" + o[D] + "\\s+", i[q] = new RegExp(o[q], "g");
		var N = s++;
		o[N] = "^" + o[D] + o[A] + "$";
		var L = s++;
		o[L] = "^" + o[D] + o[x] + "$";
		var U = s++;
		o[U] = "^" + o[E] + "\\s*(" + _ + ")$|^$";
		var V = s++;
		o[V] = "^" + o[E] + "\\s*(" + v + ")$|^$";
		var M = s++;
		o[M] = "(\\s*)" + o[E] + "\\s*(" + _ + "|" + o[A] + ")", i[M] = new RegExp(o[M], "g");
		var B = s++;
		o[B] = "^\\s*(" + o[A] + ")\\s+-\\s+(" + o[A] + ")\\s*$";
		var F = s++;
		o[F] = "^\\s*(" + o[x] + ")\\s+-\\s+(" + o[x] + ")\\s*$";
		var $ = s++;
		o[$] = "(<|>)?=?\\s*\\*";
		for (var H = 0; H < 35; H++) r(H, o[H]), i[H] || (i[H] = new RegExp(o[H]));

		function K(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof G) return e;
			if ("string" != typeof e) return null;
			if (e.length > 256) return null;
			if (!(t.loose ? i[b] : i[w]).test(e)) return null;
			try {
				return new G(e, t)
			} catch (e) {
				return null
			}
		}

		function G(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof G) {
				if (e.loose === t.loose) return e;
				e = e.version
			} else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
			if (e.length > 256) throw new TypeError("version is longer than 256 characters");
			if (!(this instanceof G)) return new G(e, t);
			r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
			var o = e.trim().match(t.loose ? i[b] : i[w]);
			if (!o) throw new TypeError("Invalid Version: " + e);
			if (this.raw = e, this.major = +o[1], this.minor = +o[2], this.patch = +o[3], this.major > n || this
				.major < 0) throw new TypeError("Invalid major version");
			if (this.minor > n || this.minor < 0) throw new TypeError("Invalid minor version");
			if (this.patch > n || this.patch < 0) throw new TypeError("Invalid patch version");
			o[4] ? this.prerelease = o[4].split(".").map((function(e) {
				if (/^[0-9]+$/.test(e)) {
					var t = +e;
					if (t >= 0 && t < n) return t
				}
				return e
			})) : this.prerelease = [], this.build = o[5] ? o[5].split(".") : [], this.format()
		}
		t.parse = K, t.valid = function(e, t) {
			var r = K(e, t);
			return r ? r.version : null
		}, t.clean = function(e, t) {
			var r = K(e.trim().replace(/^[=v]+/, ""), t);
			return r ? r.version : null
		}, t.SemVer = G, G.prototype.format = function() {
			return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease
				.length && (this.version += "-" + this.prerelease.join(".")), this.version
		}, G.prototype.toString = function() {
			return this.version
		}, G.prototype.compare = function(e) {
			return r("SemVer.compare", this.version, this.options, e), e instanceof G || (e = new G(e, this
				.options)), this.compareMain(e) || this.comparePre(e)
		}, G.prototype.compareMain = function(e) {
			return e instanceof G || (e = new G(e, this.options)), Q(this.major, e.major) || Q(this.minor, e
				.minor) || Q(this.patch, e.patch)
		}, G.prototype.comparePre = function(e) {
			if (e instanceof G || (e = new G(e, this.options)), this.prerelease.length && !e.prerelease
				.length) return -1;
			if (!this.prerelease.length && e.prerelease.length) return 1;
			if (!this.prerelease.length && !e.prerelease.length) return 0;
			var t = 0;
			do {
				var n = this.prerelease[t],
					i = e.prerelease[t];
				if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
				if (void 0 === i) return 1;
				if (void 0 === n) return -1;
				if (n !== i) return Q(n, i)
			} while (++t)
		}, G.prototype.inc = function(e, t) {
			switch (e) {
				case "premajor":
					this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc(
						"pre", t);
					break;
				case "preminor":
					this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
					break;
				case "prepatch":
					this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
					break;
				case "prerelease":
					0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
					break;
				case "major":
					0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
						this.minor = 0, this.patch = 0, this.prerelease = [];
					break;
				case "minor":
					0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this
						.prerelease = [];
					break;
				case "patch":
					0 === this.prerelease.length && this.patch++, this.prerelease = [];
					break;
				case "pre":
					if (0 === this.prerelease.length) this.prerelease = [0];
					else {
						for (var r = this.prerelease.length; --r >= 0;) "number" == typeof this.prerelease[
							r] && (this.prerelease[r]++, r = -2); - 1 === r && this.prerelease.push(0)
					}
					t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t,
						0]) : this.prerelease = [t, 0]);
					break;
				default:
					throw new Error("invalid increment argument: " + e)
			}
			return this.format(), this.raw = this.version, this
		}, t.inc = function(e, t, r, n) {
			"string" == typeof r && (n = r, r = void 0);
			try {
				return new G(e, r).inc(t, n).version
			} catch (e) {
				return null
			}
		}, t.diff = function(e, t) {
			if (W(e, t)) return null;
			var r = K(e),
				n = K(t),
				i = "";
			if (r.prerelease.length || n.prerelease.length) {
				i = "pre";
				var o = "prerelease"
			}
			for (var s in r)
				if (("major" === s || "minor" === s || "patch" === s) && r[s] !== n[s]) return i + s;
			return o
		}, t.compareIdentifiers = Q;
		var z = /^[0-9]+$/;

		function Q(e, t) {
			var r = z.test(e),
				n = z.test(t);
			return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
		}

		function Y(e, t, r) {
			return new G(e, r).compare(new G(t, r))
		}

		function X(e, t, r) {
			return Y(e, t, r) > 0
		}

		function J(e, t, r) {
			return Y(e, t, r) < 0
		}

		function W(e, t, r) {
			return 0 === Y(e, t, r)
		}

		function Z(e, t, r) {
			return 0 !== Y(e, t, r)
		}

		function ee(e, t, r) {
			return Y(e, t, r) >= 0
		}

		function te(e, t, r) {
			return Y(e, t, r) <= 0
		}

		function re(e, t, r, n) {
			switch (t) {
				case "===":
					return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version),
						e === r;
				case "!==":
					return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version),
						e !== r;
				case "":
				case "=":
				case "==":
					return W(e, r, n);
				case "!=":
					return Z(e, r, n);
				case ">":
					return X(e, r, n);
				case ">=":
					return ee(e, r, n);
				case "<":
					return J(e, r, n);
				case "<=":
					return te(e, r, n);
				default:
					throw new TypeError("Invalid operator: " + t)
			}
		}

		function ne(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof ne) {
				if (e.loose === !!t.loose) return e;
				e = e.value
			}
			if (!(this instanceof ne)) return new ne(e, t);
			r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === ie ?
				this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
		}
		t.rcompareIdentifiers = function(e, t) {
			return Q(t, e)
		}, t.major = function(e, t) {
			return new G(e, t).major
		}, t.minor = function(e, t) {
			return new G(e, t).minor
		}, t.patch = function(e, t) {
			return new G(e, t).patch
		}, t.compare = Y, t.compareLoose = function(e, t) {
			return Y(e, t, !0)
		}, t.rcompare = function(e, t, r) {
			return Y(t, e, r)
		}, t.sort = function(e, r) {
			return e.sort((function(e, n) {
				return t.compare(e, n, r)
			}))
		}, t.rsort = function(e, r) {
			return e.sort((function(e, n) {
				return t.rcompare(e, n, r)
			}))
		}, t.gt = X, t.lt = J, t.eq = W, t.neq = Z, t.gte = ee, t.lte = te, t.cmp = re, t.Comparator = ne;
		var ie = {};

		function oe(e, t) {
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), e instanceof oe) return e.loose === !!t.loose && e.includePrerelease === !!t
				.includePrerelease ? e : new oe(e.raw, t);
			if (e instanceof ne) return new oe(e.value, t);
			if (!(this instanceof oe)) return new oe(e, t);
			if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this
				.raw = e, this.set = e.split(/\s*\|\|\s*/).map((function(e) {
					return this.parseRange(e.trim())
				}), this).filter((function(e) {
					return e.length
				})), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
			this.format()
		}

		function se(e) {
			return !e || "x" === e.toLowerCase() || "*" === e
		}

		function ae(e, t, r, n, i, o, s, a, c, u, d, l, p) {
			return ((t = se(r) ? "" : se(n) ? ">=" + r + ".0.0" : se(i) ? ">=" + r + "." + n + ".0" : ">=" +
				t) + " " + (a = se(c) ? "" : se(u) ? "<" + (+c + 1) + ".0.0" : se(d) ? "<" + c + "." + (+u +
					1) + ".0" : l ? "<=" + c + "." + u + "." + d + "-" + l : "<=" + a)).trim()
		}

		function ce(e, t, n) {
			for (var i = 0; i < e.length; i++)
				if (!e[i].test(t)) return !1;
			if (t.prerelease.length && !n.includePrerelease) {
				for (i = 0; i < e.length; i++)
					if (r(e[i].semver), e[i].semver !== ie && e[i].semver.prerelease.length > 0) {
						var o = e[i].semver;
						if (o.major === t.major && o.minor === t.minor && o.patch === t.patch) return !0
					} return !1
			}
			return !0
		}

		function ue(e, t, r) {
			try {
				t = new oe(t, r)
			} catch (e) {
				return !1
			}
			return t.test(e)
		}

		function de(e, t, r, n) {
			var i, o, s, a, c;
			switch (e = new G(e, n), t = new oe(t, n), r) {
				case ">":
					i = X, o = te, s = J, a = ">", c = ">=";
					break;
				case "<":
					i = J, o = ee, s = X, a = "<", c = "<=";
					break;
				default:
					throw new TypeError('Must provide a hilo val of "<" or ">"')
			}
			if (ue(e, t, n)) return !1;
			for (var u = 0; u < t.set.length; ++u) {
				var d = t.set[u],
					l = null,
					p = null;
				if (d.forEach((function(e) {
						e.semver === ie && (e = new ne(">=0.0.0")), l = l || e, p = p || e, i(e.semver,
							l.semver, n) ? l = e : s(e.semver, p.semver, n) && (p = e)
					})), l.operator === a || l.operator === c) return !1;
				if ((!p.operator || p.operator === a) && o(e, p.semver)) return !1;
				if (p.operator === c && s(e, p.semver)) return !1
			}
			return !0
		}
		ne.prototype.parse = function(e) {
			var t = this.options.loose ? i[U] : i[V],
				r = e.match(t);
			if (!r) throw new TypeError("Invalid comparator: " + e);
			this.operator = r[1], "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new G(
				r[2], this.options.loose) : this.semver = ie
		}, ne.prototype.toString = function() {
			return this.value
		}, ne.prototype.test = function(e) {
			return r("Comparator.test", e, this.options.loose), this.semver === ie || ("string" ==
				typeof e && (e = new G(e, this.options)), re(e, this.operator, this.semver, this
					.options))
		}, ne.prototype.intersects = function(e, t) {
			if (!(e instanceof ne)) throw new TypeError("a Comparator is required");
			var r;
			if (t && "object" == typeof t || (t = {
					loose: !!t,
					includePrerelease: !1
				}), "" === this.operator) return r = new oe(e.value, t), ue(this.value, r, t);
			if ("" === e.operator) return r = new oe(this.value, t), ue(e.semver, r, t);
			var n = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e
					.operator),
				i = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e
					.operator),
				o = this.semver.version === e.semver.version,
				s = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e
					.operator),
				a = re(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this
				.operator) && ("<=" === e.operator || "<" === e.operator),
				c = re(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this
				.operator) && (">=" === e.operator || ">" === e.operator);
			return n || i || o && s || a || c
		}, t.Range = oe, oe.prototype.format = function() {
			return this.range = this.set.map((function(e) {
				return e.join(" ").trim()
			})).join("||").trim(), this.range
		}, oe.prototype.toString = function() {
			return this.range
		}, oe.prototype.parseRange = function(e) {
			var t = this.options.loose;
			e = e.trim();
			var n = t ? i[F] : i[B];
			e = e.replace(n, ae), r("hyphen replace", e), e = e.replace(i[M], "$1$2$3"), r(
					"comparator trim", e, i[M]), e = (e = (e = e.replace(i[j], "$1~")).replace(i[q], "$1^"))
				.split(/\s+/).join(" ");
			var o = t ? i[U] : i[V],
				s = e.split(" ").map((function(e) {
					return function(e, t) {
						return r("comp", e, t), e = function(e, t) {
							return e.trim().split(/\s+/).map((function(e) {
								return function(e, t) {
									r("caret", e, t);
									var n = t.loose ? i[L] : i[N];
									return e.replace(n, (function(t, n, i,
										o, s) {
										var a;
										return r("caret", e, t,
												n, i, o, s), se(
												n) ? a = "" :
											se(i) ? a = ">=" +
											n + ".0.0 <" + (+n +
												1) + ".0.0" :
											se(o) ? a = "0" ===
											n ? ">=" + n + "." +
											i + ".0 <" + n +
											"." + (+i + 1) +
											".0" : ">=" + n +
											"." + i + ".0 <" + (
												+n + 1) +
											".0.0" : s ? (r(
													"replaceCaret pr",
													s), a =
												"0" === n ?
												"0" === i ?
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + i +
												"." + (+o + 1) :
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + (+i +
													1) + ".0" :
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												(+n + 1) +
												".0.0") : (r(
													"no pr"),
												a = "0" === n ?
												"0" === i ?
												">=" + n + "." +
												i + "." + o +
												" <" + n + "." +
												i + "." + (+o +
													1) : ">=" +
												n + "." + i +
												"." + o + " <" +
												n + "." + (+i +
													1) + ".0" :
												">=" + n + "." +
												i + "." + o +
												" <" + (+n +
												1) + ".0.0"), r(
												"caret return",
												a), a
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("caret", e), e = function(e, t) {
							return e.trim().split(/\s+/).map((function(e) {
								return function(e, t) {
									var n = t.loose ? i[P] : i[R];
									return e.replace(n, (function(t, n, i,
										o, s) {
										var a;
										return r("tilde", e, t,
												n, i, o, s), se(
												n) ? a = "" :
											se(i) ? a = ">=" +
											n + ".0.0 <" + (+n +
												1) + ".0.0" :
											se(o) ? a = ">=" +
											n + "." + i +
											".0 <" + n + "." + (
												+i + 1) + ".0" :
											s ? (r("replaceTilde pr",
													s), a =
												">=" + n + "." +
												i + "." + o +
												"-" + s + " <" +
												n + "." + (+i +
													1) + ".0") :
											a = ">=" + n + "." +
											i + "." + o + " <" +
											n + "." + (+i + 1) +
											".0", r(
												"tilde return",
												a), a
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("tildes", e), e = function(e, t) {
							return r("replaceXRanges", e, t), e.split(/\s+/).map((function(
								e) {
								return function(e, t) {
									e = e.trim();
									var n = t.loose ? i[I] : i[S];
									return e.replace(n, (function(t, n, i,
										o, s, a) {
										r("xRange", e, t, n, i,
											o, s, a);
										var c = se(i),
											u = c || se(o),
											d = u || se(s);
										return "=" === n && d &&
											(n = ""), c ? t =
											">" === n || "<" ===
											n ? "<0.0.0" : "*" :
											n && d ? (u && (o =
													0), s = 0,
												">" === n ? (n =
													">=", u ? (
														i = +i +
														1, o =
														0, s = 0
														) : (
														o = +o +
														1, s = 0
														)) :
												"<=" === n && (
													n = "<", u ?
													i = +i + 1 :
													o = +o + 1),
												t = n + i +
												"." + o + "." +
												s) : u ? t =
											">=" + i +
											".0.0 <" + (+i +
											1) + ".0.0" : d && (
												t = ">=" + i +
												"." + o +
												".0 <" + i +
												"." + (+o + 1) +
												".0"), r(
												"xRange return",
												t), t
									}))
								}(e, t)
							})).join(" ")
						}(e, t), r("xrange", e), e = function(e, t) {
							return r("replaceStars", e, t), e.trim().replace(i[$], "")
						}(e, t), r("stars", e), e
					}(e, this.options)
				}), this).join(" ").split(/\s+/);
			return this.options.loose && (s = s.filter((function(e) {
				return !!e.match(o)
			}))), s = s.map((function(e) {
				return new ne(e, this.options)
			}), this)
		}, oe.prototype.intersects = function(e, t) {
			if (!(e instanceof oe)) throw new TypeError("a Range is required");
			return this.set.some((function(r) {
				return r.every((function(r) {
					return e.set.some((function(e) {
						return e.every((function(e) {
							return r.intersects(e, t)
						}))
					}))
				}))
			}))
		}, t.toComparators = function(e, t) {
			return new oe(e, t).set.map((function(e) {
				return e.map((function(e) {
					return e.value
				})).join(" ").trim().split(" ")
			}))
		}, oe.prototype.test = function(e) {
			if (!e) return !1;
			"string" == typeof e && (e = new G(e, this.options));
			for (var t = 0; t < this.set.length; t++)
				if (ce(this.set[t], e, this.options)) return !0;
			return !1
		}, t.satisfies = ue, t.maxSatisfying = function(e, t, r) {
			var n = null,
				i = null;
			try {
				var o = new oe(t, r)
			} catch (e) {
				return null
			}
			return e.forEach((function(e) {
				o.test(e) && (n && -1 !== i.compare(e) || (i = new G(n = e, r)))
			})), n
		}, t.minSatisfying = function(e, t, r) {
			var n = null,
				i = null;
			try {
				var o = new oe(t, r)
			} catch (e) {
				return null
			}
			return e.forEach((function(e) {
				o.test(e) && (n && 1 !== i.compare(e) || (i = new G(n = e, r)))
			})), n
		}, t.minVersion = function(e, t) {
			e = new oe(e, t);
			var r = new G("0.0.0");
			if (e.test(r)) return r;
			if (r = new G("0.0.0-0"), e.test(r)) return r;
			r = null;
			for (var n = 0; n < e.set.length; ++n) {
				e.set[n].forEach((function(e) {
					var t = new G(e.semver.version);
					switch (e.operator) {
						case ">":
							0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t
								.raw = t.format();
						case "":
						case ">=":
							r && !X(r, t) || (r = t);
							break;
						case "<":
						case "<=":
							break;
						default:
							throw new Error("Unexpected operation: " + e.operator)
					}
				}))
			}
			if (r && e.test(r)) return r;
			return null
		}, t.validRange = function(e, t) {
			try {
				return new oe(e, t).range || "*"
			} catch (e) {
				return null
			}
		}, t.ltr = function(e, t, r) {
			return de(e, t, "<", r)
		}, t.gtr = function(e, t, r) {
			return de(e, t, ">", r)
		}, t.outside = de, t.prerelease = function(e, t) {
			var r = K(e, t);
			return r && r.prerelease.length ? r.prerelease : null
		}, t.intersects = function(e, t, r) {
			return e = new oe(e, r), t = new oe(t, r), e.intersects(t)
		}, t.coerce = function(e) {
			if (e instanceof G) return e;
			if ("string" != typeof e) return null;
			var t = e.match(i[O]);
			if (null == t) return null;
			return K(t[1] + "." + (t[2] || "0") + "." + (t[3] || "0"))
		}
	})),
	_t = (vt.SEMVER_SPEC_VERSION, vt.re, vt.src, vt.parse, vt.valid, vt.clean, vt.SemVer, vt.inc, vt.diff, vt
		.compareIdentifiers, vt.rcompareIdentifiers, vt.major, vt.minor, vt.patch, vt.compare, vt.compareLoose, vt
		.rcompare, vt.sort, vt.rsort, vt.gt, vt.lt, vt.eq, vt.neq, vt.gte, vt.lte, vt.cmp, vt.Comparator, vt.Range, vt
		.toComparators, vt.satisfies, vt.maxSatisfying, vt.minSatisfying, vt.minVersion, vt.validRange, vt.ltr, vt.gtr,
		vt.outside, vt.prerelease, vt.intersects, vt.coerce, vt.satisfies(process.version, "^6.12.0 || >=8.0.0")),
	bt = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512"],
	Et = ["RS256", "RS384", "RS512"],
	Ct = ["HS256", "HS384", "HS512"];
_t && (bt.splice(3, 0, "PS256", "PS384", "PS512"), Et.splice(3, 0, "PS256", "PS384", "PS512"));
var Tt = /^\s+|\s+$/g,
	At = /^[-+]0x[0-9a-f]+$/i,
	xt = /^0b[01]+$/i,
	St = /^0o[0-7]+$/i,
	It = /^(?:0|[1-9]\d*)$/,
	Ot = parseInt;

function kt(e) {
	return e != e
}

function jt(e, t) {
	return function(e, t) {
		for (var r = -1, n = e ? e.length : 0, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
		return i
	}(t, (function(t) {
		return e[t]
	}))
}
var Rt, Pt, Dt = Object.prototype,
	qt = Dt.hasOwnProperty,
	Nt = Dt.toString,
	Lt = Dt.propertyIsEnumerable,
	Ut = (Rt = Object.keys, Pt = Object, function(e) {
		return Rt(Pt(e))
	}),
	Vt = Math.max;

function Mt(e, t) {
	var r = $t(e) || function(e) {
			return function(e) {
				return Gt(e) && Ht(e)
			}(e) && qt.call(e, "callee") && (!Lt.call(e, "callee") || "[object Arguments]" == Nt.call(e))
		}(e) ? function(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}(e.length, String) : [],
		n = r.length,
		i = !!n;
	for (var o in e) !t && !qt.call(e, o) || i && ("length" == o || Ft(o, n)) || r.push(o);
	return r
}

function Bt(e) {
	if (r = (t = e) && t.constructor, n = "function" == typeof r && r.prototype || Dt, t !== n) return Ut(e);
	var t, r, n, i = [];
	for (var o in Object(e)) qt.call(e, o) && "constructor" != o && i.push(o);
	return i
}

function Ft(e, t) {
	return !!(t = null == t ? 9007199254740991 : t) && ("number" == typeof e || It.test(e)) && e > -1 && e % 1 == 0 &&
		e < t
}
var $t = Array.isArray;

function Ht(e) {
	return null != e && function(e) {
		return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
	}(e.length) && ! function(e) {
		var t = Kt(e) ? Nt.call(e) : "";
		return "[object Function]" == t || "[object GeneratorFunction]" == t
	}(e)
}

function Kt(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}

function Gt(e) {
	return !!e && "object" == typeof e
}
var zt = function(e, t, r, n) {
		var i;
		e = Ht(e) ? e : (i = e) ? jt(i, function(e) {
			return Ht(e) ? Mt(e) : Bt(e)
		}(i)) : [], r = r && !n ? function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || Gt(e) && "[object Symbol]" == Nt.call(e)
								}(e)) return NaN;
							if (Kt(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = Kt(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(Tt, "");
							var r = xt.test(e);
							return r || St.test(e) ? Ot(e.slice(2), r ? 2 : 8) : At.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(r) : 0;
		var o = e.length;
		return r < 0 && (r = Vt(o + r, 0)),
			function(e) {
				return "string" == typeof e || !$t(e) && Gt(e) && "[object String]" == Nt.call(e)
			}(e) ? r <= o && e.indexOf(t, r) > -1 : !!o && function(e, t, r) {
				if (t != t) return function(e, t, r, n) {
					for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
						if (t(e[o], o, e)) return o;
					return -1
				}(e, kt, r);
				for (var n = r - 1, i = e.length; ++n < i;)
					if (e[n] === t) return n;
				return -1
			}(e, t, r) > -1
	},
	Qt = Object.prototype.toString;
var Yt = function(e) {
		return !0 === e || !1 === e || function(e) {
			return !!e && "object" == typeof e
		}(e) && "[object Boolean]" == Qt.call(e)
	},
	Xt = /^\s+|\s+$/g,
	Jt = /^[-+]0x[0-9a-f]+$/i,
	Wt = /^0b[01]+$/i,
	Zt = /^0o[0-7]+$/i,
	er = parseInt,
	tr = Object.prototype.toString;

function rr(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}
var nr = function(e) {
		return "number" == typeof e && e == function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || function(e) {
										return !!e && "object" == typeof e
									}(e) && "[object Symbol]" == tr.call(e)
								}(e)) return NaN;
							if (rr(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = rr(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(Xt, "");
							var r = Wt.test(e);
							return r || Zt.test(e) ? er(e.slice(2), r ? 2 : 8) : Jt.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(e)
	},
	ir = Object.prototype.toString;
var or = function(e) {
	return "number" == typeof e || function(e) {
		return !!e && "object" == typeof e
	}(e) && "[object Number]" == ir.call(e)
};
var sr = Function.prototype,
	ar = Object.prototype,
	cr = sr.toString,
	ur = ar.hasOwnProperty,
	dr = cr.call(Object),
	lr = ar.toString,
	pr = function(e, t) {
		return function(r) {
			return e(t(r))
		}
	}(Object.getPrototypeOf, Object);
var fr = function(e) {
		if (! function(e) {
				return !!e && "object" == typeof e
			}(e) || "[object Object]" != lr.call(e) || function(e) {
				var t = !1;
				if (null != e && "function" != typeof e.toString) try {
					t = !!(e + "")
				} catch (e) {}
				return t
			}(e)) return !1;
		var t = pr(e);
		if (null === t) return !0;
		var r = ur.call(t, "constructor") && t.constructor;
		return "function" == typeof r && r instanceof r && cr.call(r) == dr
	},
	hr = Object.prototype.toString,
	mr = Array.isArray;
var gr = function(e) {
		return "string" == typeof e || !mr(e) && function(e) {
			return !!e && "object" == typeof e
		}(e) && "[object String]" == hr.call(e)
	},
	yr = /^\s+|\s+$/g,
	wr = /^[-+]0x[0-9a-f]+$/i,
	vr = /^0b[01]+$/i,
	_r = /^0o[0-7]+$/i,
	br = parseInt,
	Er = Object.prototype.toString;

function Cr(e, t) {
	var r;
	if ("function" != typeof t) throw new TypeError("Expected a function");
	return e = function(e) {
			var t = function(e) {
					if (!e) return 0 === e ? e : 0;
					if ((e = function(e) {
							if ("number" == typeof e) return e;
							if (function(e) {
									return "symbol" == typeof e || function(e) {
										return !!e && "object" == typeof e
									}(e) && "[object Symbol]" == Er.call(e)
								}(e)) return NaN;
							if (Tr(e)) {
								var t = "function" == typeof e.valueOf ? e.valueOf() : e;
								e = Tr(t) ? t + "" : t
							}
							if ("string" != typeof e) return 0 === e ? e : +e;
							e = e.replace(yr, "");
							var r = vr.test(e);
							return r || _r.test(e) ? br(e.slice(2), r ? 2 : 8) : wr.test(e) ? NaN : +e
						}(e)) === 1 / 0 || e === -1 / 0) {
						return 17976931348623157e292 * (e < 0 ? -1 : 1)
					}
					return e == e ? e : 0
				}(e),
				r = t % 1;
			return t == t ? r ? t - r : t : 0
		}(e),
		function() {
			return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = void 0), r
		}
}

function Tr(e) {
	var t = typeof e;
	return !!e && ("object" == t || "function" == t)
}
var Ar = function(e) {
		return Cr(2, e)
	},
	xr = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
_t && xr.splice(3, 0, "PS256", "PS384", "PS512");
var Sr = {
		expiresIn: {
			isValid: function(e) {
				return nr(e) || gr(e) && e
			},
			message: '"expiresIn" should be a number of seconds or string representing a timespan'
		},
		notBefore: {
			isValid: function(e) {
				return nr(e) || gr(e) && e
			},
			message: '"notBefore" should be a number of seconds or string representing a timespan'
		},
		audience: {
			isValid: function(e) {
				return gr(e) || Array.isArray(e)
			},
			message: '"audience" must be a string or array'
		},
		algorithm: {
			isValid: zt.bind(null, xr),
			message: '"algorithm" must be a valid string enum value'
		},
		header: {
			isValid: fr,
			message: '"header" must be an object'
		},
		encoding: {
			isValid: gr,
			message: '"encoding" must be a string'
		},
		issuer: {
			isValid: gr,
			message: '"issuer" must be a string'
		},
		subject: {
			isValid: gr,
			message: '"subject" must be a string'
		},
		jwtid: {
			isValid: gr,
			message: '"jwtid" must be a string'
		},
		noTimestamp: {
			isValid: Yt,
			message: '"noTimestamp" must be a boolean'
		},
		keyid: {
			isValid: gr,
			message: '"keyid" must be a string'
		},
		mutatePayload: {
			isValid: Yt,
			message: '"mutatePayload" must be a boolean'
		}
	},
	Ir = {
		iat: {
			isValid: or,
			message: '"iat" should be a number of seconds'
		},
		exp: {
			isValid: or,
			message: '"exp" should be a number of seconds'
		},
		nbf: {
			isValid: or,
			message: '"nbf" should be a number of seconds'
		}
	};

function Or(e, t, r, n) {
	if (!fr(r)) throw new Error('Expected "' + n + '" to be a plain object.');
	Object.keys(r).forEach((function(i) {
		var o = e[i];
		if (o) {
			if (!o.isValid(r[i])) throw new Error(o.message)
		} else if (!t) throw new Error('"' + i + '" is not allowed in "' + n + '"')
	}))
}
var kr = {
		audience: "aud",
		issuer: "iss",
		subject: "sub",
		jwtid: "jti"
	},
	jr = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"],
	Rr = function(e, t, r, n) {
		var i;
		if ("function" != typeof r || n || (n = r, r = {}), r || (r = {}), r = Object.assign({}, r), i = n || function(
				e, t) {
				if (e) throw e;
				return t
			}, r.clockTimestamp && "number" != typeof r.clockTimestamp) return i(new at(
			"clockTimestamp must be a number"));
		if (void 0 !== r.nonce && ("string" != typeof r.nonce || "" === r.nonce.trim())) return i(new at(
			"nonce must be a non-empty string"));
		var o = r.clockTimestamp || Math.floor(Date.now() / 1e3);
		if (!e) return i(new at("jwt must be provided"));
		if ("string" != typeof e) return i(new at("jwt must be a string"));
		var s, a = e.split(".");
		if (3 !== a.length) return i(new at("jwt malformed"));
		try {
			s = ot(e, {
				complete: !0
			})
		} catch (e) {
			return i(e)
		}
		if (!s) return i(new at("invalid token"));
		var c, u = s.header;
		if ("function" == typeof t) {
			if (!n) return i(new at(
				"verify must be called asynchronous if secret or public key is provided as a callback"));
			c = t
		} else c = function(e, r) {
			return r(null, t)
		};
		return c(u, (function(t, n) {
			if (t) return i(new at("error in secret or public key callback: " + t.message));
			var c, d = "" !== a[2].trim();
			if (!d && n) return i(new at("jwt signature is required"));
			if (d && !n) return i(new at("secret or public key must be provided"));
			if (d || r.algorithms || (r.algorithms = ["none"]), r.algorithms || (r.algorithms = ~n
					.toString().indexOf("BEGIN CERTIFICATE") || ~n.toString().indexOf("BEGIN PUBLIC KEY") ?
					bt : ~n.toString().indexOf("BEGIN RSA PUBLIC KEY") ? Et : Ct), !~r.algorithms.indexOf(s
					.header.alg)) return i(new at("invalid algorithm"));
			try {
				c = it.verify(e, s.header.alg, n)
			} catch (e) {
				return i(e)
			}
			if (!c) return i(new at("invalid signature"));
			var l = s.payload;
			if (void 0 !== l.nbf && !r.ignoreNotBefore) {
				if ("number" != typeof l.nbf) return i(new at("invalid nbf value"));
				if (l.nbf > o + (r.clockTolerance || 0)) return i(new ut("jwt not active", new Date(1e3 * l
					.nbf)))
			}
			if (void 0 !== l.exp && !r.ignoreExpiration) {
				if ("number" != typeof l.exp) return i(new at("invalid exp value"));
				if (o >= l.exp + (r.clockTolerance || 0)) return i(new lt("jwt expired", new Date(1e3 * l
					.exp)))
			}
			if (r.audience) {
				var p = Array.isArray(r.audience) ? r.audience : [r.audience];
				if (!(Array.isArray(l.aud) ? l.aud : [l.aud]).some((function(e) {
						return p.some((function(t) {
							return t instanceof RegExp ? t.test(e) : t === e
						}))
					}))) return i(new at("jwt audience invalid. expected: " + p.join(" or ")))
			}
			if (r.issuer && ("string" == typeof r.issuer && l.iss !== r.issuer || Array.isArray(r.issuer) &&
					-1 === r.issuer.indexOf(l.iss))) return i(new at("jwt issuer invalid. expected: " + r
				.issuer));
			if (r.subject && l.sub !== r.subject) return i(new at("jwt subject invalid. expected: " + r
				.subject));
			if (r.jwtid && l.jti !== r.jwtid) return i(new at("jwt jwtid invalid. expected: " + r.jwtid));
			if (r.nonce && l.nonce !== r.nonce) return i(new at("jwt nonce invalid. expected: " + r.nonce));
			if (r.maxAge) {
				if ("number" != typeof l.iat) return i(new at("iat required when maxAge is specified"));
				var f = wt(r.maxAge, l.iat);
				if (void 0 === f) return i(new at(
					'"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
					));
				if (o >= f + (r.clockTolerance || 0)) return i(new lt("maxAge exceeded", new Date(1e3 * f)))
			}
			if (!0 === r.complete) {
				var h = s.signature;
				return i(null, {
					header: u,
					payload: l,
					signature: h
				})
			}
			return i(null, l)
		}))
	},
	Pr = function(e, t, r, n) {
		"function" == typeof r ? (n = r, r = {}) : r = r || {};
		var i = "object" == typeof e && !Buffer.isBuffer(e),
			o = Object.assign({
				alg: r.algorithm || "HS256",
				typ: i ? "JWT" : void 0,
				kid: r.keyid
			}, r.header);

		function s(e) {
			if (n) return n(e);
			throw e
		}
		if (!t && "none" !== r.algorithm) return s(new Error("secretOrPrivateKey must have a value"));
		if (void 0 === e) return s(new Error("payload is required"));
		if (i) {
			try {
				! function(e) {
					Or(Ir, !0, e, "payload")
				}(e)
			} catch (e) {
				return s(e)
			}
			r.mutatePayload || (e = Object.assign({}, e))
		} else {
			var a = jr.filter((function(e) {
				return void 0 !== r[e]
			}));
			if (a.length > 0) return s(new Error("invalid " + a.join(",") + " option for " + typeof e + " payload"))
		}
		if (void 0 !== e.exp && void 0 !== r.expiresIn) return s(new Error(
			'Bad "options.expiresIn" option the payload already has an "exp" property.'));
		if (void 0 !== e.nbf && void 0 !== r.notBefore) return s(new Error(
			'Bad "options.notBefore" option the payload already has an "nbf" property.'));
		try {
			! function(e) {
				Or(Sr, !1, e, "options")
			}(r)
		} catch (e) {
			return s(e)
		}
		var c = e.iat || Math.floor(Date.now() / 1e3);
		if (r.noTimestamp ? delete e.iat : i && (e.iat = c), void 0 !== r.notBefore) {
			try {
				e.nbf = wt(r.notBefore, c)
			} catch (e) {
				return s(e)
			}
			if (void 0 === e.nbf) return s(new Error(
				'"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
				))
		}
		if (void 0 !== r.expiresIn && "object" == typeof e) {
			try {
				e.exp = wt(r.expiresIn, c)
			} catch (e) {
				return s(e)
			}
			if (void 0 === e.exp) return s(new Error(
				'"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
				))
		}
		Object.keys(kr).forEach((function(t) {
			var n = kr[t];
			if (void 0 !== r[t]) {
				if (void 0 !== e[n]) return s(new Error('Bad "options.' + t +
					'" option. The payload already has an "' + n + '" property.'));
				e[n] = r[t]
			}
		}));
		var u = r.encoding || "utf8";
		if ("function" != typeof n) return it.sign({
			header: o,
			payload: e,
			secret: t,
			encoding: u
		});
		n = n && Ar(n), it.createSign({
			header: o,
			privateKey: t,
			payload: e,
			encoding: u
		}).once("error", n).once("done", (function(e) {
			n(null, e)
		}))
	};
let Dr = [];
class qr {
	constructor(e) {
		this.options = Object.assign({
			baseUrl: "https://appleid.apple.com",
			timeout: 1e4
		}, e)
	}
	async _fetch(e, t) {
		const {
			baseUrl: r
		} = this.options;
		return uniCloud.httpclient.request(r + e, t)
	}
	async verifyIdentityToken(e) {
		const t = e.split(".")[0],
			{
				kid: r
			} = JSON.parse(Buffer.from(t, "base64").toString());
		if (!Dr.length) try {
			Dr = await this.getAuthKeys()
		} catch (e) {
			return {
				code: 10705,
				msg: e.message
			}
		}
		const n = this.getUsedKey(Dr, r);
		if (!Object.keys(n).length && !this.fetched) try {
			Dr = await this.getAuthKeys()
		} catch (e) {
			return {
				code: 10705,
				msg: e.message
			}
		}
		let i = null;
		try {
			i = Rr(e, function(e, t) {
				var r = Buffer.from(e, "base64"),
					n = Buffer.from(t, "base64"),
					i = r.toString("hex"),
					o = n.toString("hex");
				i = W(i), o = W(o);
				var s = i.length / 2,
					a = o.length / 2,
					c = ee(s),
					u = ee(a),
					d = "30" + ee(s + a + c.length / 2 + u.length / 2 + 2) + "02" + c + i + "02" + u + o;
				return "-----BEGIN RSA PUBLIC KEY-----\n" + Buffer.from(d, "hex").toString("base64").match(
					/.{1,64}/g).join("\n") + "\n-----END RSA PUBLIC KEY-----\n"
			}(n.n, n.e), {
				algorithms: n.alg
			})
		} catch (e) {
			return {
				code: 10705,
				msg: e.message
			}
		}
		return {
			code: 0,
			msg: i
		}
	}
	async getAuthKeys() {
		const {
			status: e,
			data: t
		} = await this._fetch("/auth/keys", {
			method: "GET",
			dataType: "json",
			timeout: this.options.timeout
		});
		if (200 !== e) throw new Error("request https://appleid.apple.com/auth/keys fail");
		return t.keys
	}
	getUsedKey(e, t) {
		let r = {};
		for (let n = 0; n < e.length; n++) {
			const i = e[n];
			if (i.kid === t) {
				r = i;
				break
			}
		}
		return r
	}
}
var Nr = function(e = {}) {
		return e.appId = e.appid, e.secret = e.appsecret, S(G, e)
	},
	Lr = function(e = {}) {
		return e.appId = e.appid, e.secret = e.appsecret, S(Q, e)
	},
	Ur = function(e = {}) {
		return e.appId = e.appid, S(J, e)
	},
	Vr = function(e = {}) {
		return S(qr, e)
	};

function Mr(e = 6) {
	const t = ["2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N",
		"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
	];
	let r = "";
	for (let n = 0; n < e; n++) r += t[Math.floor(Math.random() * t.length)];
	return r
}
const Br = k.command;
async function Fr({
	uid: e,
	dcloudAppidList: t
} = {}) {
	if (!e) return {
		code: N,
		messageValues: {
			param: this.t("user-id")
		}
	};
	if (!t || 0 === t.length || t.some(e => void 0 === e)) return {
		code: N,
		messageValues: {
			param: this.t("dcloud-appid")
		}
	};
	const r = await j.doc(e).get(),
		n = r && r.data && r.data[0];
	if (!n) return {
		code: 10002
	};
	const i = Object.keys(q).reduce((e, t) => {
		const r = t,
			i = function(e, t) {
				return t.split(".").reduce((e, t) => e && e[t], e)
			}(n, t);
		return i && e.push({
			[r]: i
		}), e
	}, []);
	let o;
	const s = {
			dcloud_appid: Br.in(t),
			_id: Br.neq(n._id)
		},
		a = {
			dcloud_appid: Br.exists(!1),
			_id: Br.neq(n._id)
		};
	switch (i.length) {
		case 0:
			return {
				code: 10004
			};
		case 1:
			o = Br.or([Br.and([i[0], s]), Br.and([i[0], a])]);
			break;
		default:
			o = Br.or([Br.and([Br.or(i), s]), Br.and([Br.or(i), a])])
	}
	const c = await j.where(o).limit(1).get();
	return c && c.data && c.data[0] ? {
		code: 10005
	} : {
		code: 0
	}
}
const $r = uniCloud.database().command;
const Hr = uniCloud.database();
const Kr = uniCloud.database();
const Gr = uniCloud.database();
async function zr(e) {
	const t = ["apiKey", "apiSecret"];
	for (let r = 0, n = t.length; r < n; r++) {
		const n = t[r];
		if (!e[n]) throw new Error(this.t("config-param-requred", {
			param: "service.univerify." + n
		}))
	}
	if (!e.openid || !e.access_token) throw new Error(this.t("config-param-requred", {
		param: "openid, access_token"
	}));
	return function(e, t) {
		const r = {
			0: "",
			4e3: "缺失参数",
			4001: "apiKey不存在",
			4002: "sign校验不通过",
			4003: "appid不存在",
			4004: "应用未开通一键登录服务",
			4005: "应用开通的一键登录服务正在审核中",
			4006: "服务空间不在白名单中",
			4100: "账户余额不足",
			5e3: "获取手机号失败，请稍后重试(或其他未知错误)"
		};
		return {
			...e,
			msg: r[e.code] ? "[getPhoneNumber] 获取手机号: " + r[e.code] : e.errMsg
		}
	}(await uniCloud.getPhoneNumber({
		provider: "univerify",
		...e
	}))
}
const Qr = uniCloud.database();
const Yr = uniCloud.database();
const Xr = uniCloud.database();
const Jr = uniCloud.database().command;
const Wr = uniCloud.database();
const Zr = uniCloud.database();
const en = uniCloud.database();
const tn = uniCloud.database();
const rn = uniCloud.database();
const nn = uniCloud.database();
const on = uniCloud.database();
const sn = uniCloud.database().command;
const an = uniCloud.database();
var cn = Object.freeze({
		__proto__: null,
		getUserInfo: async function({
			uid: e,
			field: t
		}) {
			if (!e) return {
				code: N,
				messageValues: {
					param: this.t("user-id")
				}
			};
			let r;
			if (t && t.length) {
				const n = {};
				for (let e = 0; e < t.length; e++) n[t[e]] = !0;
				r = await j.doc(e).field(n).get()
			} else r = await j.doc(e).get();
			return 0 === r.data.length ? {
				code: 80301
			} : {
				code: 0,
				msg: "",
				userInfo: r.data[0]
			}
		},
		getUserInfoByToken: async function(e) {
			const t = this._verifyToken(e);
			return t.code || (delete t.iat, delete t.exp), t
		},
		resetPwd: async function({
			uid: e,
			password: t
		}) {
			const {
				passwordHash: r,
				version: n
			} = this.encryptPwd(t), i = {
				password: r,
				token: []
			};
			return n && (i.password_secret_version = n), C("upRes", await j.doc(e).update(i)), {
				code: 0,
				msg: ""
			}
		},
		setAvatar: async function(e) {
			return await j.doc(e.uid).update({
				avatar: e.avatar
			}), {
				code: 0,
				msg: ""
			}
		},
		updatePwd: async function(e) {
			const t = await j.doc(e.uid).get();
			if (t && t.data && t.data.length > 0) {
				if (0 === this._checkPwd(t.data[0], e.oldPassword).code) {
					const {
						passwordHash: r,
						version: n
					} = this.encryptPwd(e.newPassword), i = {
						password: r,
						token: []
					};
					n && (i.password_secret_version = n);
					return C("upRes", await j.doc(t.data[0]._id).update(i)), {
						code: 0,
						msg: ""
					}
				}
				return {
					code: 40202
				}
			}
			return {
				code: 40201
			}
		},
		updateUser: async function(e) {
			const t = e.uid;
			if (!t) return {
				code: N,
				messageValues: {
					param: this.t("user-id")
				}
			};
			delete e.uid;
			const {
				username: r,
				email: n
			} = e, {
				usernameToLowerCase: i,
				emailToLowerCase: o
			} = this._getConfig();
			let s = r && r.trim(),
				a = n && n.trim();
			return s && (i && (s = s.toLowerCase()), e.username = s), a && (o && (a = a.toLowerCase()), e
				.email = a), C("update -> upRes", await j.doc(t).update(e)), {
				code: 0,
				msg: ""
			}
		},
		banAccount: async function({
			uid: e
		} = {}) {
			return $.call(this, {
				uid: e,
				status: B
			})
		},
		unbanAccount: async function({
			uid: e
		} = {}) {
			return $.call(this, {
				uid: e,
				status: M
			})
		},
		closeAccount: async function({
			uid: e
		} = {}) {
			return $.call(this, {
				uid: e,
				status: F
			})
		},
		openAccount: async function({
			uid: e
		} = {}) {
			return $.call(this, {
				uid: e,
				status: M
			})
		},
		_getAlipayApi: function() {
			const e = this.context.PLATFORM,
				t = this._getConfig();
			if (!t.oauth || !t.oauth.alipay) throw new Error(this.t("config-param-require", {
				param: e + ".alipay"
			}));
			return ["appid", "privateKey"].forEach(r => {
				if (!t.oauth.alipay[r]) throw new Error(this.t("config-param-require", {
					param: `${e}.alipay.${r}`
				}))
			}), Ur({
				...t.oauth.alipay
			})
		},
		_getValidInviteCode: async function({
			inviteCode: e
		}) {
			let t, r = 10;
			e ? (r = 1, t = e) : t = Mr();
			let n = !1;
			try {
				for (; r > 0 && !n;) {
					r--;
					if (0 === (await j.where({
							my_invite_code: t
						}).get()).data.length) {
						n = !0;
						break
					}
					t = Mr()
				}
				t = Mr()
			} catch (e) {}
			return n ? {
				code: 0,
				inviteCode: t
			} : e ? {
				code: 80401
			} : {
				code: 80402
			}
		},
		_addUser: async function(e, {
			needPermission: t,
			autoSetDcloudAppid: r = !0
		} = {}) {
			const n = this._getConfig(),
				i = {
					...e,
					dcloud_appid: r ? [this.context.APPID] : [],
					register_date: Date.now(),
					register_ip: this.context.CLIENTIP
				},
				o = (await j.add(i)).id;
			let s;
			if (n.removePermissionAndRoleFromToken) s = await this.createToken({
				uid: o,
				needPermission: t
			});
			else {
				const t = e.role || [];
				let r;
				r = 0 === t.length || t.includes("admin") ? [] : await this._getPermissionListByRoleList(t), s =
					await this.createToken({
						uid: o,
						role: t,
						permission: r
					})
			}
			const {
				token: a,
				tokenExpired: c
			} = s;
			return await j.doc(o).update({
				token: [a]
			}), {
				token: a,
				tokenExpired: c,
				uid: o,
				type: "register",
				userInfo: Object.assign({}, i, {
					token: a
				})
			}
		},
		_loginExec: async function(e, t = {}) {
			if (e.status === B) return {
				code: 10001
			};
			if (e.status === F) return {
				code: 10006
			};
			const r = this._getConfig();
			let n = e.token || [];
			"string" == typeof n && (n = [n]);
			const i = this._getExpiredToken(n);
			let o;
			if (n = n.filter(e => -1 === i.indexOf(e)), r.removePermissionAndRoleFromToken) {
				const r = t.needPermission;
				o = await this.createToken({
					uid: e._id,
					needPermission: r
				})
			} else {
				const t = e.role || [];
				let r;
				r = 0 === t.length || t.includes("admin") ? [] : await this._getPermissionListByRoleList(t), o =
					await this.createToken({
						uid: e._id,
						role: t,
						permission: r
					})
			}
			const {
				token: s,
				tokenExpired: a
			} = o;
			n.push(s), e.token = n;
			const c = {
				last_login_date: Date.now(),
				last_login_ip: this.context.CLIENTIP,
				token: n,
				...t.extraData
			};
			await j.doc(e._id).update(c);
			const u = Object.assign({}, e, c);
			return {
				code: 0,
				msg: "",
				token: s,
				uid: u._id,
				username: u.username,
				type: "login",
				userInfo: u,
				tokenExpired: a
			}
		},
		_registerExec: async function(e, {
			needPermission: t,
			autoSetDcloudAppid: r = !0
		} = {}) {
			const {
				my_invite_code: n
			} = e;
			if (this._getConfig().autoSetInviteCode || n) {
				const t = await this._getValidInviteCode({
					inviteCode: n
				});
				if (t.code) return t;
				e.my_invite_code = t.inviteCode
			}
			return {
				code: 0,
				msg: "",
				...await this._addUser(e, {
					needPermission: t,
					autoSetDcloudAppid: r
				})
			}
		},
		_getWeixinApi: function({
			platform: e
		} = {}) {
			const t = this.context.PLATFORM,
				r = this._getConfig();
			if (!r.oauth || !r.oauth.weixin) throw new Error(this.t("config-param-require", {
				param: t + ".weixin"
			}));
			return ["appid", "appsecret"].forEach(e => {
				if (!r.oauth.weixin[e]) throw new Error(this.t("config-param-require", {
					param: `${t}.weixin.${e}`
				}))
			}), Nr({
				...r.oauth.weixin
			})
		},
		_getQQApi: function() {
			const e = this.context.PLATFORM,
				t = this._getConfig();
			if (!t.oauth || !t.oauth.qq) throw new Error(this.t("config-param-require", {
				param: e + ".qq"
			}));
			return ["appid", "appsecret"].forEach(r => {
				if (!t.oauth.qq[r]) throw new Error(this.t("config-param-require", {
					param: `${e}.qq.${r}`
				}))
			}), Lr({
				...t.oauth.qq
			})
		},
		_getMatchedUser: function(e, t) {
			if (0 === e.length) return {
				code: 10002
			};
			let r;
			const n = {},
				i = {};
			for (let r = e.length - 1; r >= 0; r--) {
				const o = e[r];
				for (let s = 0; s < t.length; s++) {
					const {
						field: a,
						value: c,
						fallbackValue: u
					} = t[s];
					c && o[a] === c ? (n[a] = o, e.splice(r, 1)) : u && o[a] === u && (n[a] || (n[a] = o), i[
						a] = !0, e.splice(r, 1))
				}
			}
			const o = Object.keys(n);
			let s;
			switch (o.length) {
				case 0:
					r = e[0], e.splice(0, 1);
					break;
				case 1:
					s = o[0], r = n[s];
					break;
				default:
					return {
						code: 10003, messageValues: {
							target: "用户"
						}
					}
			}
			return e.length > 0 ? {
				code: 10003,
				messageValues: {
					target: "用户"
				}
			} : {
				code: 0,
				msg: "",
				userMatched: r,
				fieldMatched: s,
				isFallbackValueMatched: !!s && i[s]
			}
		},
		_getCurrentAppUser: function(e) {
			const t = this.context.APPID;
			return e.filter(e => void 0 === e.dcloud_appid || null === e.dcloud_appid || e.dcloud_appid.indexOf(
				t) > -1 || e.dcloud_appid.indexOf(null) > -1)
		},
		_checkLoginUserList: function(e) {
			if (e && 1 !== e.length) return e[0].status === F ? {
				code: 10006
			} : {
				code: 10005
			}
		},
		setAuthorizedAppLogin: async function({
			uid: e,
			dcloudAppidList: t
		} = {}) {
			if ("array" !== h(t)) return {
				code: L,
				messageValues: {
					param: "dcloudAppidList",
					reason: this.t("type-array-required", {
						param: this.t("dcloud-appid-list")
					})
				}
			};
			if (t && 0 !== t.length) {
				const r = await Fr.bind(this)({
					uid: e,
					dcloudAppidList: t
				});
				if (r.code) return r
			}
			return await j.doc(e).update({
				dcloud_appid: Br.set(t)
			}), {
				code: 0
			}
		},
		authorizeAppLogin: async function({
			uid: e,
			dcloudAppid: t
		} = {}) {
			const r = await Fr.bind(this)({
				uid: e,
				dcloudAppidList: [t]
			});
			return r.code ? r : (await j.doc(e).update({
				dcloud_appid: Br.push(t)
			}), {
				code: 0
			})
		},
		forbidAppLogin: async function({
			uid: e,
			dcloudAppid: t
		} = {}) {
			return e ? (await j.doc(e).update({
				dcloud_appid: Br.pull(t)
			}), {
				code: 0
			}) : {
				code: N,
				messageValues: {
					param: this.t("user-id")
				}
			}
		},
		acceptInvite: async function({
			uid: e,
			inviteCode: t
		}) {
			const r = await j.where({
				_id: $r.neq(e),
				inviter_uid: $r.not($r.all([e])),
				my_invite_code: t
			}).get();
			if (1 !== r.data.length) return {
				code: 80501,
				msg: "邀请码无效"
			};
			const n = [r.data[0]._id].concat(r.data[0].inviter_uid || []),
				i = await j.doc(e).field({
					my_invite_code: !0,
					inviter_uid: !0
				}).get();
			if (0 === i.data.length) return {
				code: 80502
			};
			if (i.data[0].inviter_uid && i.data[0].inviter_uid.length > 0) return {
				code: 80503,
				msg: "邀请码不可修改"
			};
			const o = Date.now();
			return await j.doc(e).update({
				inviter_uid: n,
				invite_time: o
			}), await j.where({
				inviter_uid: e
			}).update({
				inviter_uid: $r.push(n)
			}), {
				code: 0,
				msg: ""
			}
		},
		getInvitedUser: async function({
			uid: e,
			level: t = 1,
			limit: r = 20,
			offset: n = 0,
			needTotal: i = !1
		}) {
			const o = {
				code: 0,
				msg: "",
				invitedUser: (await j.where({
					["inviter_uid." + (t - 1)]: e
				}).field({
					_id: !0,
					username: !0,
					mobile: !0,
					invite_time: !0
				}).orderBy("invite_time", "desc").skip(n).limit(r).get()).data
			};
			if (i) {
				const r = await j.where({
					["inviter_uid." + (t - 1)]: e
				}).count();
				o.total = r.total
			}
			return o
		},
		setUserInviteCode: async function({
			uid: e,
			myInviteCode: t
		}) {
			const r = await this._getValidInviteCode({
				inviteCode: t
			});
			return r.code ? r : (await j.doc(e).update({
				my_invite_code: r.inviteCode
			}), {
				code: 0,
				msg: "",
				myInviteCode: r.inviteCode
			})
		},
		loginByAlipay: async function(e) {
			"string" == typeof e && (e = {
				code: e
			});
			const {
				needPermission: t,
				code: r,
				myInviteCode: n,
				role: i,
				type: o
			} = e, {
				openid: s
			} = await this._getAlipayApi().code2Session(r);
			if (!s) return {
				code: 10501,
				messageValues: {
					account: this.t("alipay-account")
				}
			};
			let a = await j.where({
				ali_openid: s
			}).get();
			if (a = this._getCurrentAppUser(a.data), a && a.length > 0) {
				if ("register" === o) return {
					code: 10502,
					messageValues: {
						type: this.t("alipay-account")
					}
				};
				if (1 !== a.length) return {
					code: 10005
				};
				const e = a[0],
					r = await this._loginExec(e, {
						needPermission: t
					});
				if (0 !== r.code) return r;
				const {
					userInfo: n
				} = r;
				return {
					...r,
					openid: s,
					mobileConfirmed: 1 === n.mobile_confirmed,
					emailConfirmed: 1 === n.email_confirmed
				}
			} {
				if ("login" === o) return {
					code: 10503,
					messageValues: {
						type: this.t("alipay-account")
					}
				};
				const e = {
					ali_openid: s
				};
				e.my_invite_code = n, e.role = i;
				const r = await this._registerExec(e, {
					needPermission: t
				});
				return 0 !== r.code ? r : {
					...r,
					openid: s,
					mobileConfirmed: !1,
					emailConfirmed: !1
				}
			}
		},
		loginByEmail: async function({
			email: e,
			code: t,
			password: r,
			myInviteCode: n,
			type: i,
			needPermission: o,
			role: s
		}) {
			if (!(e = e && e.trim())) return {
				code: N,
				messageValues: {
					param: "邮箱"
				}
			};
			const {
				emailToLowerCase: a
			} = this._getConfig();
			let c = e;
			a && (c = e.toLowerCase());
			const u = await this.verifyCode({
				email: c,
				code: t,
				type: i || "login"
			});
			if (0 !== u.code) return u;
			let d = {
				email: e,
				email_confirmed: 1
			};
			const l = {
					field: "email",
					value: e
				},
				p = Hr.command;
			c !== e && (d = p.or(d, {
				email: c,
				email_confirmed: 1
			}), l.fallbackValue = c);
			let f = await j.where(d).get();
			if (f = this._getCurrentAppUser(f.data), f && f.length > 0) {
				if ("register" === i) return {
					code: 10301,
					messageValues: {
						type: "邮箱"
					}
				};
				const e = this._getMatchedUser(f, [l]);
				if (e.code) return e;
				const {
					userMatched: t
				} = e, r = await this._loginExec(t, {
					needPermission: o
				});
				return 0 !== r.code ? r : {
					...r,
					email: c
				}
			} {
				if ("login" === i) return {
					code: 10302,
					messageValues: {
						type: "邮箱"
					}
				};
				const e = {
						email: c,
						email_confirmed: 1
					},
					t = r && r.trim();
				if (t) {
					const {
						passwordHash: r,
						version: n
					} = this.encryptPwd(t);
					e.password = r, n && (e.password_secret_version = n)
				}
				e.my_invite_code = n, e.role = s;
				const a = await this._registerExec(e, {
					needPermission: o
				});
				return 0 !== a.code ? a : {
					...a,
					email: c
				}
			}
		},
		loginBySms: async function({
			mobile: e,
			code: t,
			password: r,
			inviteCode: n,
			myInviteCode: i,
			type: o,
			needPermission: s,
			role: a
		}) {
			if (!(e = e && e.trim())) return {
				code: N,
				messageValues: {
					param: this.t("mobile")
				}
			};
			const c = this._getConfig();
			if (c.forceInviteCode && !o) throw new Error(this.t("login-with-invite-type-required"));
			const u = await this.verifyCode({
				mobile: e,
				code: t,
				type: o || "login"
			});
			if (0 !== u.code) return u;
			const d = {
				mobile: e,
				mobile_confirmed: 1
			};
			let l = await j.where(d).get();
			if (l = this._getCurrentAppUser(l.data), l && l.length > 0) {
				if ("register" === o) return {
					code: 10201,
					messageValues: {
						type: this.t("mobile")
					}
				};
				if (1 !== l.length) return {
					code: 10005
				};
				const t = l[0],
					r = await this._loginExec(t, {
						needPermission: s
					});
				return 0 !== r.code ? r : {
					...r,
					mobile: e
				}
			} {
				const t = Date.now();
				if ("login" === o) return {
					code: 10202,
					messageValues: {
						type: this.t("mobile")
					}
				};
				const u = {
						mobile: e,
						mobile_confirmed: 1,
						register_ip: this.context.CLIENTIP,
						register_date: t
					},
					d = r && r.trim();
				if (d) {
					const {
						passwordHash: e,
						version: t
					} = this.encryptPwd(d);
					u.password = e, t && (u.password_secret_version = t)
				}
				if (n) {
					const e = await j.where({
						my_invite_code: n
					}).get();
					if (1 !== e.data.length) return {
						code: 10203
					};
					u.inviter_uid = [e.data[0]._id].concat(e.data[0].inviter_uid || []), u.invite_time = t
				} else if (c.forceInviteCode) return {
					code: 10203
				};
				u.my_invite_code = i, u.role = a;
				const l = await this._registerExec(u, {
					needPermission: s
				});
				return 0 !== l.code ? l : {
					...l,
					mobile: e
				}
			}
		},
		loginByWeixin: async function(e) {
			"string" == typeof e && (e = {
				code: e
			});
			const {
				needPermission: t,
				platform: r,
				code: n,
				myInviteCode: i,
				role: o,
				type: s
			} = e, a = r || this.context.PLATFORM, c = "mp-weixin" === a, {
				openid: u,
				unionid: d,
				sessionKey: l,
				accessToken: p,
				refreshToken: f,
				expired: h
			} = await this._getWeixinApi()[c ? "code2Session" : "getOauthAccessToken"](n);
			if (!u) return {
				code: 10401,
				messageValues: {
					account: "微信openid"
				}
			};
			let m;
			m = c ? {
				sessionKey: l
			} : {
				accessToken: p,
				refreshToken: f,
				accessTokenExpired: h
			};
			const g = Kr.command,
				y = [{
					wx_openid: {
						[a]: u
					}
				}];
			d && y.push({
				wx_unionid: d
			});
			let w = await j.where(g.or(...y)).get();
			if (w = this._getCurrentAppUser(w.data), w && w.length > 0) {
				if ("register" === s) return {
					code: 10402,
					messageValues: {
						type: this.t("wechat-account")
					}
				};
				if (1 !== w.length) return {
					code: 10005
				};
				const e = w[0],
					r = {
						wx_openid: {
							[a]: u
						}
					};
				d && (r.wx_unionid = d);
				const n = await this._loginExec(e, {
					needPermission: t,
					extraData: r
				});
				if (0 !== n.code) return n;
				const {
					userInfo: i
				} = n;
				return {
					...n,
					openid: u,
					unionid: d,
					...m,
					mobileConfirmed: 1 === i.mobile_confirmed,
					emailConfirmed: 1 === i.email_confirmed
				}
			} {
				if ("login" === s) return {
					code: 10403,
					messageValues: {
						type: this.t("wechat-account")
					}
				};
				const e = {
					wx_openid: {
						[a]: u
					},
					wx_unionid: d
				};
				e.my_invite_code = i, e.role = o;
				const r = await this._registerExec(e, {
					needPermission: t
				});
				return 0 !== r.code ? r : {
					...r,
					openid: u,
					unionid: d,
					...m,
					mobileConfirmed: !1,
					emailConfirmed: !1
				}
			}
		},
		loginByQQ: async function({
			code: e,
			accessToken: t,
			myInviteCode: r,
			needPermission: n,
			role: i,
			type: o
		} = {}) {
			const s = this.context.PLATFORM,
				a = "mp-qq" === s,
				{
					openid: c,
					unionid: u,
					sessionKey: d
				} = await this._getQQApi()[a ? "code2Session" : "getOpenidByToken"]({
					code: e,
					accessToken: t
				});
			if (!c) return {
				code: 10801,
				messageValues: {
					account: "qq openid"
				}
			};
			const l = {
					accessToken: t,
					sessionKey: d
				},
				p = Gr.command,
				f = [{
					qq_openid: {
						[s]: c
					}
				}];
			u && f.push({
				qq_unionid: u
			});
			let h = await j.where(p.or(...f)).get();
			if (h = this._getCurrentAppUser(h.data), h && h.length > 0) {
				if ("register" === o) return {
					code: 10802,
					messageValues: {
						type: this.t("qq-account")
					}
				};
				if (1 !== h.length) return {
					code: 10005
				};
				const e = h[0],
					t = {
						qq_openid: {
							[s]: c
						}
					};
				u && (t.qq_unionid = u);
				const r = await this._loginExec(e, {
					needPermission: n,
					extraData: t
				});
				if (0 !== r.code) return r;
				const {
					userInfo: i
				} = r;
				return {
					...r,
					openid: c,
					unionid: u,
					...l,
					mobileConfirmed: 1 === i.mobile_confirmed,
					emailConfirmed: 1 === i.email_confirmed
				}
			} {
				if ("login" === o) return {
					code: 10803,
					messageValues: {
						type: this.t("qq-account")
					}
				};
				const e = {
					qq_openid: {
						[s]: c
					},
					qq_unionid: u
				};
				e.my_invite_code = r, e.role = i;
				const t = await this._registerExec(e);
				return 0 !== t.code ? t : {
					...t,
					openid: c,
					unionid: u,
					...l,
					mobileConfirmed: !1,
					emailConfirmed: !1
				}
			}
		},
		loginByUniverify: async function({
			openid: e,
			access_token: t,
			password: r,
			inviteCode: n,
			myInviteCode: i,
			type: o,
			needPermission: s,
			role: a
		}) {
			const c = this._getConfig(),
				u = c && c.service && c.service.univerify;
			if (!u) throw new Error(this.t("uni-verify-config-required"));
			if (c.forceInviteCode && !o) throw new Error(this.t("login-with-invite-type-required"));
			const d = await zr.bind(this)({
				...u,
				openid: e,
				access_token: t
			});
			if (0 !== d.code) return d;
			const l = String(d.phoneNumber);
			let p = await j.where({
				mobile: l,
				mobile_confirmed: 1
			}).get();
			if (p = this._getCurrentAppUser(p.data), p && p.length > 0) {
				if ("register" === o) return {
					code: 10601,
					messageValues: {
						type: this.t("mobile")
					}
				};
				if (1 !== p.length) return {
					code: 10005
				};
				const e = p[0],
					t = await this._loginExec(e, {
						needPermission: s
					});
				return 0 !== t.code ? t : {
					...t,
					mobile: l
				}
			}
			if ("login" === o) return {
				code: 10602,
				messageValues: {
					type: this.t("mobile")
				}
			};
			const f = Date.now(),
				h = {
					mobile: l,
					my_invite_code: i,
					mobile_confirmed: 1,
					role: a
				},
				m = r && r.trim();
			if (m) {
				const {
					passwordHash: e,
					version: t
				} = this.encryptPwd(m);
				h.password = e, t && (h.password_secret_version = t)
			}
			if (n) {
				let e = await j.where({
					my_invite_code: n
				}).get();
				if (1 !== e.data.length) return {
					code: 10203
				};
				e = e.data[0], h.inviter_uid = [e._id].concat(e.inviter_uid || []), h.invite_time = f
			} else if (c.forceInviteCode) return {
				code: 10203
			};
			h.my_invite_code = i;
			const g = await this._registerExec(h, {
				needPermission: s
			});
			return 0 !== g.code ? g : {
				...g,
				mobile: l
			}
		},
		loginByApple: async function({
			nickName: e,
			fullName: t,
			identityToken: r,
			myInviteCode: n,
			type: i,
			needPermission: o,
			platform: s,
			role: a
		}) {
			const c = this._getConfig(),
				u = c && c.oauth && c.oauth.apple,
				d = u && u.bundleId;
			if (!d) throw new Error(this.t("config-param-require", {
				param: "(app || app-plus).apple.bundleId"
			}));
			if (!r) return {
				code: N,
				messageValues: {
					param: "identityToken"
				}
			};
			t = e || (t && Object.keys(t).length > 0 ? t.familyName + t.givenName : "");
			const {
				code: l,
				msg: p
			} = await Vr().verifyIdentityToken(r);
			if (0 !== l) return {
				code: l,
				msg: p,
				messageValues: {
					account: this.t("apple-account")
				}
			};
			const {
				iss: f,
				sub: h,
				aud: m,
				email: g
			} = p;
			if ("https://appleid.apple.com" !== f) return {
				code: 10706,
				messageValues: {
					account: this.t("apple-account")
				}
			};
			if (!h) return {
				code: 10701,
				messageValues: {
					account: this.t("apple-account")
				}
			};
			if (d !== m) return {
				code: 10702,
				messageValues: {
					account: this.t("apple-account")
				}
			};
			const y = t || "User-" + (g ? g.split("@")[0] : Math.random().toString(32).slice(2));
			let w = await j.where({
				apple_openid: h
			}).get();
			if (w = this._getCurrentAppUser(w.data), w && w.length > 0) {
				if ("register" === i) return {
					code: 10703,
					messageValues: {
						type: this.t("apple-account")
					}
				};
				if (1 !== w.length) return {
					code: 10005
				};
				const e = w[0],
					t = await this._loginExec(e, {
						needPermission: o
					});
				return 0 !== t.code ? t : {
					...t,
					openid: h
				}
			}
			if ("login" === i) return {
				code: 10704,
				messageValues: {
					type: this.t("apple-account")
				}
			};
			const v = {
					nickname: y,
					apple_openid: h,
					my_invite_code: n,
					role: a
				},
				_ = await this._registerExec(v, {
					needPermission: o
				});
			return 0 !== _.code ? _ : {
				..._,
				openid: h
			}
		},
		login: async function({
			username: e,
			password: t,
			queryField: r = [],
			needPermission: n
		}) {
			const i = Qr.command,
				o = [];
			r && r.length || (r = ["username"]), r.length > 1 && console.warn(this.t("query-field-warning"));
			const {
				usernameToLowerCase: s,
				emailToLowerCase: a,
				passwordErrorLimit: c,
				passwordErrorRetryTime: u
			} = this._getConfig(), d = {
				email: {
					email_confirmed: 1
				},
				mobile: {
					mobile_confirmed: 1
				}
			}, l = {}, p = e && e.trim();
			if (!p) return {
				code: N,
				messageValues: {
					param: this.t("username")
				}
			};
			s && (l.username = p.toLowerCase()), a && (l.email = p.toLowerCase());
			const f = [];
			r.forEach(t => {
				o.push({
					[t]: e,
					...d[t]
				});
				const r = {
					field: t,
					value: e
				};
				"username" === t && l.username !== e ? (o.push({
					[t]: l.username,
					...d[t]
				}), r.fallbackValue = l.username) : "email" === t && l.email !== e && (o.push({
					[t]: l.email,
					...d[t]
				}), r.fallbackValue = l.email), f.push(r)
			});
			let h = await j.where(i.or(...o)).get();
			h = this._getCurrentAppUser(h.data);
			const m = this.context.CLIENTIP,
				g = this._getMatchedUser(h, f);
			if (g.code) return g;
			const {
				userMatched: y
			} = g;
			let w = y.login_ip_limit || [];
			w = w.filter(e => e.last_error_time > Date.now() - 1e3 * u);
			let v = w.find(e => e.ip === m);
			if (v && v.error_times >= c) return {
				code: 10103
			};
			const _ = t && t.trim();
			if (!_) return {
				code: N,
				messageValues: {
					param: "密码"
				}
			};
			const b = this._checkPwd(y, _);
			if (0 === b.code) {
				const e = w.indexOf(v);
				e > -1 && w.splice(e, 1);
				const t = {
						login_ip_limit: w
					},
					{
						passwordHash: r,
						passwordVersion: i
					} = b;
				r && i && (t.password = r, t.password_secret_version = i);
				const o = await this._loginExec(y, {
					needPermission: n,
					extraData: t
				});
				return o.code, o
			}
			return v ? (v.error_times++, v.last_error_time = Date.now()) : (v = {
				ip: m,
				error_times: 1,
				last_error_time: Date.now()
			}, w.push(v)), await j.doc(y._id).update({
				login_ip_limit: w
			}), {
				code: 10102,
				msg: "密码错误"
			}
		},
		register: async function(e) {
			const t = [],
				r = [{
					name: "username",
					desc: this.t("username")
				}, {
					name: "email",
					desc: this.t("email"),
					extraCond: {
						email_confirmed: 1
					}
				}, {
					name: "mobile",
					desc: this.t("mobile"),
					extraCond: {
						mobile_confirmed: 1
					}
				}],
				{
					usernameToLowerCase: n,
					emailToLowerCase: i
				} = this._getConfig();
			r.forEach(r => {
				const o = r.name;
				let s = e[o] && e[o].trim();
				s ? (("username" === r.name && n || "email" === r.name && i) && (s = s.toLowerCase()),
					e[o] = s, t.push({
						[o]: s,
						...r.extraCond
					})) : delete e[o]
			});
			const {
				username: o,
				email: s,
				mobile: a,
				myInviteCode: c,
				needPermission: u,
				autoSetDcloudAppid: d = !0
			} = e;
			if ("needPermission" in e && delete e.needPermission, "autoSetDcloudAppid" in e && delete e
				.autoSetDcloudAppid, 0 === t.length) return {
				code: 20101,
				messageValues: {
					param: this.t("user-unique-param")
				}
			};
			const l = Yr.command;
			let p = await j.where(l.or(...t)).get();
			if (p = this._getCurrentAppUser(p.data), p && p.length > 0) {
				const t = p[0];
				if (t.status === F) return {
					code: 10006
				};
				for (let n = 0; n < r.length; n++) {
					const i = r[n];
					let o = !0;
					if (i.extraCond && (o = Object.keys(i.extraCond).every(e => t[e] === i.extraCond[e])), t[i
							.name] === e[i.name] && o) return {
						code: 20102,
						messageValues: {
							type: i.desc
						}
					}
				}
			}
			const f = e.password && e.password.trim();
			if (!f) return {
				code: N,
				messageValues: {
					param: this.t("password")
				}
			};
			const {
				passwordHash: h,
				version: m
			} = this.encryptPwd(f);
			e.password = h, m && (e.password_secret_version = m), e.my_invite_code = c, delete e.myInviteCode;
			const g = await this._registerExec(e, {
				needPermission: u,
				autoSetDcloudAppid: d
			});
			return 0 !== g.code ? g : {
				...g,
				username: o,
				email: s,
				mobile: a
			}
		},
		logout: async function(e) {
			const t = await this.checkToken(e);
			if (t.code) return t;
			const r = Xr.command;
			return await j.doc(t.uid).update({
				token: r.pull(e)
			}), {
				code: 0,
				msg: ""
			}
		},
		getRoleByUid: async function({
			uid: e
		}) {
			if (!e) return {
				code: N,
				messageValues: {
					param: this.t("user-id")
				}
			};
			const t = await j.doc(e).get();
			return 0 === t.data.length ? {
				code: U
			} : {
				code: 0,
				msg: "",
				role: t.data[0].role || []
			}
		},
		getPermissionByRole: async function({
			roleID: e
		}) {
			if (!e) return {
				code: N,
				messageValues: {
					param: "roleID"
				}
			};
			if ("admin" === e) {
				return {
					code: 0,
					msg: "",
					permission: (await D.limit(1e3).get()).data.map(e => e.permission_id)
				}
			}
			const t = await P.where({
				role_id: e
			}).get();
			return 0 === t.data.length ? {
				code: V
			} : {
				code: 0,
				msg: "",
				permission: t.data[0].permission || []
			}
		},
		getPermissionByUid: async function({
			uid: e
		}) {
			const t = await j.aggregate().match({
					_id: e
				}).project({
					role: !0
				}).unwind("$role").lookup({
					from: "uni-id-roles",
					localField: "role",
					foreignField: "role_id",
					as: "roleDetail"
				}).unwind("$roleDetail").replaceRoot({
					newRoot: "$roleDetail"
				}).end(),
				r = [];
			return t.data.forEach(e => {
				Array.prototype.push.apply(r, e.permission)
			}), {
				code: 0,
				msg: "",
				permission: A(r)
			}
		},
		bindRole: async function({
			uid: e,
			roleList: t,
			reset: r = !1
		}) {
			const n = {};
			return "string" == typeof t && (t = [t]), n.role = r ? t : Jr.push(t), await j.doc(e).update(n), {
				code: 0,
				msg: ""
			}
		},
		bindPermission: async function({
			roleID: e,
			permissionList: t,
			reset: r = !1
		}) {
			const n = {};
			return "string" == typeof t && (t = [t]), n.permission = r ? t : Jr.push(t), await P.where({
				role_id: e
			}).update(n), {
				code: 0,
				msg: ""
			}
		},
		unbindRole: async function({
			uid: e,
			roleList: t
		}) {
			return "string" == typeof t && (t = [t]), await j.doc(e).update({
				role: Jr.pull(Jr.in(t))
			}), {
				code: 0,
				msg: ""
			}
		},
		unbindPermission: async function({
			roleID: e,
			permissionList: t
		}) {
			return "string" == typeof t && (t = [t]), await P.where({
				role_id: e
			}).update({
				permission: Jr.pull(Jr.in(t))
			}), {
				code: 0,
				msg: ""
			}
		},
		addRole: async function({
			roleID: e,
			roleName: t,
			comment: r,
			permission: n = []
		}) {
			return e ? "admin" === e ? {
				code: L,
				messageValues: {
					param: "roleID",
					reason: this.t("add-role-admin-is-not-allowed")
				}
			} : (await P.add({
				role_id: e,
				role_name: t,
				comment: r,
				permission: n,
				create_date: Date.now()
			}), {
				code: 0,
				msg: ""
			}) : {
				code: N,
				messageValues: {
					param: this.t("role-id")
				}
			}
		},
		addPermission: async function({
			permissionID: e,
			permissionName: t,
			comment: r
		}) {
			return e ? (await D.add({
				permission_id: e,
				permission_name: t,
				comment: r,
				create_date: Date.now()
			}), {
				code: 0,
				msg: ""
			}) : {
				code: N,
				messageValues: {
					param: this.t("permission-id")
				}
			}
		},
		getRoleList: async function({
			limit: e = 20,
			offset: t = 0,
			needTotal: r = !0
		}) {
			const n = {
				code: 0,
				msg: "",
				roleList: (await P.skip(t).limit(e).get()).data
			};
			if (r) {
				const {
					total: e
				} = await P.where({
					_id: Jr.exists(!0)
				}).count();
				n.total = e
			}
			return n
		},
		getRoleInfo: async function(e) {
			const t = await P.where({
				role_id: e
			}).get();
			return 0 === t.data.length ? {
				code: V
			} : {
				code: 0,
				...t.data[0]
			}
		},
		updateRole: async function({
			roleID: e,
			roleName: t,
			comment: r,
			permission: n
		}) {
			return e ? (await P.where({
				role_id: e
			}).update({
				role_name: t,
				comment: r,
				permission: n
			}), {
				code: 0,
				msg: ""
			}) : {
				code: N,
				messageValues: {
					param: this.t("role-id")
				}
			}
		},
		deleteRole: async function({
			roleID: e
		}) {
			const t = h(e);
			if ("string" === t) e = [e];
			else if ("array" !== t) throw new Error("typeof roleID must be array or string");
			return await P.where({
				role_id: Jr.in(e)
			}).remove(), await j.where({
				role: Jr.elemMatch(Jr.in(e))
			}).update({
				role: Jr.pullAll(e)
			}), {
				code: 0,
				msg: ""
			}
		},
		getPermissionList: async function({
			limit: e = 20,
			offset: t = 0,
			needTotal: r = !0
		}) {
			const n = {
				code: 0,
				msg: "",
				permissionList: (await D.skip(t).limit(e).get()).data
			};
			if (r) {
				const {
					total: e
				} = await D.where({
					_id: Jr.exists(!0)
				}).count();
				n.total = e
			}
			return n
		},
		getPermissionInfo: async function(e) {
			const t = await D.where({
				permission_id: e
			}).get();
			return 0 === t.data.length ? {
				code: N,
				messageValues: {
					param: this.t("permission-id")
				}
			} : {
				code: 0,
				...t.data[0]
			}
		},
		updatePermission: async function({
			permissionID: e,
			permissionName: t,
			comment: r
		}) {
			return e ? (await D.where({
				permission_id: e
			}).update({
				permission_name: t,
				comment: r
			}), {
				code: 0,
				msg: ""
			}) : {
				code: N,
				messageValues: {
					param: this.t("permission-id")
				}
			}
		},
		deletePermission: async function({
			permissionID: e
		}) {
			const t = h(e);
			if ("string" === t) e = [e];
			else if ("array" !== t) throw new Error("typeof permissionID must be array or string");
			return await D.where({
				permission_id: Jr.in(e)
			}).remove(), await P.where({
				permission: Jr.elemMatch(Jr.in(e))
			}).update({
				permission: Jr.pullAll(e)
			}), {
				code: 0,
				msg: ""
			}
		},
		bindAlipay: async function({
			uid: e,
			code: t,
			platform: r
		}) {
			const n = r || this.context.PLATFORM,
				{
					openid: i
				} = await this._getAlipayApi({
					platform: n
				}).code2Session(t);
			if (!i) return {
				code: 60401,
				messageValues: {
					account: this.t("alipay-account")
				}
			};
			let o = await j.where({
				ali_openid: i
			}).get();
			return o = this._getCurrentAppUser(o.data), o && o.length > 0 ? {
				code: 60402,
				messageValues: {
					type: this.t("alipay-account")
				}
			} : (await j.doc(e).update({
				ali_openid: i
			}), {
				code: 0,
				openid: i,
				msg: ""
			})
		},
		bindEmail: async function({
			uid: e,
			email: t,
			code: r
		}) {
			if (!(t = t && t.trim())) return {
				code: N,
				messageValues: {
					param: "邮箱"
				}
			};
			if (!r) return {
				code: N,
				messageValues: {
					param: "验证码"
				}
			};
			const {
				emailToLowerCase: n
			} = this._getConfig();
			n && (t = t.toLowerCase());
			let i = await j.where({
				email: t,
				email_confirmed: 1
			}).get();
			if (i = this._getCurrentAppUser(i.data), i && i.length > 0) return {
				code: 60201,
				messageValues: {
					type: "邮箱"
				}
			};
			if (r) {
				const e = await this.verifyCode({
					email: t,
					code: r,
					type: "bind"
				});
				if (0 !== e.code) return e
			}
			return await j.doc(e).update({
				email: t,
				email_confirmed: 1
			}), {
				code: 0,
				msg: "",
				email: t
			}
		},
		bindMobile: async function({
			uid: e,
			mobile: t,
			code: r,
			openid: n,
			access_token: i,
			type: o = "sms"
		}) {
			if ("univerify" === o) {
				const e = this._getConfig(),
					r = e && e.service && e.service.univerify;
				if (!r) throw new Error("请在config.json中配置service.univerify下一键登录相关参数");
				const o = await zr.bind(this)({
					...r,
					openid: n,
					access_token: i
				});
				if (0 !== o.code) return o;
				t = "" + o.phoneNumber
			}
			let s = await j.where({
				mobile: t,
				mobile_confirmed: 1
			}).get();
			if (s = this._getCurrentAppUser(s.data), s && s.length > 0) return {
				code: 60101,
				messageValues: {
					type: "手机号"
				}
			};
			if ("sms" === o && r) {
				if (!t) return {
					code: N,
					messageValues: {
						param: this.t("mobile")
					}
				};
				if (!r) return {
					code: N,
					messageValues: {
						param: this.t("verify-code")
					}
				};
				const e = await this.verifyCode({
					mobile: t,
					code: r,
					type: "bind"
				});
				if (0 !== e.code) return e
			}
			return await j.doc(e).update({
				mobile: t,
				mobile_confirmed: 1
			}), {
				code: 0,
				msg: "",
				mobile: t
			}
		},
		bindWeixin: async function({
			uid: e,
			code: t,
			platform: r
		}) {
			const n = r || this.context.PLATFORM,
				i = "mp-weixin" === n,
				{
					openid: o,
					unionid: s,
					sessionKey: a,
					accessToken: c,
					refreshToken: u,
					expired: d
				} = await this._getWeixinApi({
					platform: n
				})[i ? "code2Session" : "getOauthAccessToken"](t);
			if (!o) return {
				code: 60301,
				messageValues: {
					account: "微信openid"
				}
			};
			const l = Wr.command,
				p = [{
					wx_openid: {
						[n]: o
					}
				}];
			s && p.push({
				wx_unionid: s
			});
			let f = await j.where(l.or(...p)).get();
			if (f = this._getCurrentAppUser(f.data), f && f.length > 0) return {
				code: 60302,
				messageValues: {
					type: this.t("wechat-account")
				}
			};
			const h = {
				wx_openid: {
					[n]: o
				}
			};
			let m;
			return s && (h.wx_unionid = s), await j.doc(e).update(h), m = i ? {
				sessionKey: a
			} : {
				accessToken: c,
				refreshToken: u,
				accessTokenExpired: d
			}, {
				code: 0,
				msg: "",
				openid: o,
				unionid: s,
				...m
			}
		},
		bindQQ: async function({
			uid: e,
			code: t,
			accessToken: r,
			platform: n
		} = {}) {
			const i = n || this.context.PLATFORM,
				o = "mp-qq" === i,
				{
					openid: s,
					unionid: a,
					sessionKey: c
				} = await this._getQQApi()[o ? "code2Session" : "getOpenidByToken"]({
					code: t,
					accessToken: r
				});
			if (!s) return {
				code: 60501,
				messageValues: {
					account: "qq openid"
				}
			};
			const u = Zr.command,
				d = [{
					qq_openid: {
						[i]: s
					}
				}];
			a && d.push({
				qq_unionid: a
			});
			let l = await j.where(u.or(...d)).get();
			if (l = this._getCurrentAppUser(l.data), l && l.length > 0) return {
				code: 60502,
				messageValues: {
					type: this.t("qq-account")
				}
			};
			const p = {
				qq_openid: {
					[i]: s
				}
			};
			return a && (p.qq_unionid = a), await j.doc(e).update(p), {
				code: 0,
				msg: "",
				openid: s,
				unionid: a,
				...{
					accessToken: r,
					sessionKey: c
				}
			}
		},
		unbindAlipay: async function(e) {
			const t = en.command,
				r = await j.doc(e).update({
					ali_openid: t.remove()
				});
			return C("upRes:", r), 1 === r.updated ? {
				code: 0,
				msg: ""
			} : {
				code: 70401
			}
		},
		unbindEmail: async function({
			uid: e,
			email: t,
			code: r
		}) {
			if (t = t && t.trim(), !e || !t) return {
				code: N,
				messageValues: {
					param: e ? this.t("email") : this.t("user-id")
				}
			};
			const {
				emailToLowerCase: n
			} = this._getConfig();
			if (r) {
				const e = await this.verifyCode({
					email: t,
					code: r,
					type: "unbind"
				});
				if (0 !== e.code) return e
			}
			const i = tn.command;
			let o = {
				_id: e,
				email: t
			};
			if (n) {
				const r = t.toLowerCase();
				r !== t && (o = i.or(o, {
					_id: e,
					email: r
				}))
			}
			return 1 === (await j.where(o).update({
				email: i.remove(),
				email_confirmed: i.remove()
			})).updated ? {
				code: 0,
				msg: ""
			} : {
				code: 70201
			}
		},
		unbindMobile: async function({
			uid: e,
			mobile: t,
			code: r
		}) {
			if (r) {
				const e = await this.verifyCode({
					mobile: t,
					code: r,
					type: "unbind"
				});
				if (0 !== e.code) return e
			}
			const n = rn.command;
			return 1 === (await j.where({
				_id: e,
				mobile: t
			}).update({
				mobile: n.remove(),
				mobile_confirmed: n.remove()
			})).updated ? {
				code: 0,
				msg: ""
			} : {
				code: 70101
			}
		},
		unbindWeixin: async function(e) {
			const t = nn.command,
				r = await j.doc(e).update({
					wx_openid: t.remove(),
					wx_unionid: t.remove()
				});
			return C("upRes:", r), 1 === r.updated ? {
				code: 0,
				msg: ""
			} : {
				code: 70301
			}
		},
		unbindQQ: async function(e) {
			const t = on.command,
				r = await j.doc(e).update({
					qq_openid: t.remove(),
					qq_unionid: t.remove()
				});
			return C("upRes:", r), 1 === r.updated ? {
				code: 0,
				msg: ""
			} : {
				code: 70501
			}
		},
		code2SessionAlipay: async function(e) {
			let t = e;
			"string" == typeof e && (t = {
				code: e
			});
			try {
				const e = t.platform || this.context.PLATFORM,
					r = await this._getAlipayApi({
						platform: e
					}).code2Session(t.code);
				return r.openid ? {
					code: 0,
					msg: "",
					...r
				} : {
					code: 80701,
					messageValues: {
						account: this.t("alipay-account")
					}
				}
			} catch (e) {
				return {
					code: 80702,
					messageValues: {
						account: this.t("alipay-account")
					}
				}
			}
		},
		code2SessionWeixin: async function(e) {
			let t = e;
			"string" == typeof e && (t = {
				code: e
			});
			try {
				const e = t.platform || this.context.PLATFORM,
					r = await this._getWeixinApi({
						platform: e
					})["mp-weixin" === e ? "code2Session" : "getOauthAccessToken"](t.code);
				return r.openid ? {
					code: 0,
					msg: "",
					...r
				} : {
					code: 80601,
					messageValues: {
						account: "微信openid"
					}
				}
			} catch (e) {
				return {
					code: 80602,
					messageValues: {
						account: "微信openid"
					}
				}
			}
		},
		verifyAppleIdentityToken: async function({
			identityToken: e,
			platform: t
		}) {
			const r = t || this.context.PLATFORM,
				{
					code: n,
					msg: i
				} = await Vr({
					clientType: r
				}).verifyIdentityToken(e);
			return 0 !== n ? {
				code: n,
				msg: i
			} : {
				code: n,
				msg: "验证通过",
				...i
			}
		},
		wxBizDataCrypt: async function({
			code: e,
			sessionKey: r,
			encryptedData: n,
			iv: i
		}) {
			if (!n) return {
				code: N,
				messageValues: {
					param: "encryptedData"
				}
			};
			if (!i) return {
				code: N,
				messageValues: {
					param: "iv"
				}
			};
			if (!e && !r) return {
				code: N,
				messageValues: {
					param: "sessionKey"
				}
			};
			const o = this._getWeixinApi();
			if (!r) {
				const t = await o.code2Session(e);
				if (!t.sessionKey) return {
					code: 80801
				};
				r = t.sessionKey
			}
			r = Buffer.from(r, "base64"), n = Buffer.from(n, "base64"), i = Buffer.from(i, "base64");
			try {
				var s = t.createDecipheriv("aes-128-cbc", r, i);
				s.setAutoPadding(!0);
				var a = s.update(n, "binary", "utf8");
				a += s.final("utf8"), a = JSON.parse(a)
			} catch (e) {
				return console.error(e), {
					code: 80802
				}
			}
			return a.watermark.appid !== o.options.appId ? {
				code: 80803
			} : {
				code: 0,
				msg: "",
				...a
			}
		},
		encryptPwd: function(e, {
			value: r,
			version: n
		} = {}) {
			if (!(e = e && e.trim())) throw new Error(this.t("param-required", {
				param: this.t("password")
			}));
			if (!r) {
				const e = this._getConfig(),
					{
						passwordSecret: t
					} = e;
				if ("array" === h(t)) {
					const e = t.sort((e, t) => e.version - t.version);
					r = e[e.length - 1].value, n = e[e.length - 1].version
				} else r = t
			}
			if (!r) throw new Error(this.t("param-error", {
				param: "passwordSecret",
				reason: "invalid passwordSecret"
			}));
			const i = t.createHmac("sha1", r.toString("ascii"));
			return i.update(e), {
				passwordHash: i.digest("hex"),
				version: n
			}
		},
		checkToken: async function(e, {
			needPermission: t,
			needUserInfo: r = !0
		} = {}) {
			const n = this._getConfig(),
				i = this._verifyToken(e);
			if (i.code) return i;
			const {
				uid: o,
				needPermission: s,
				role: a,
				permission: c,
				exp: u,
				iat: d,
				...l
			} = i, p = a && c;
			t = void 0 === t ? s : t;
			const f = n.removePermissionAndRoleFromToken || !p || r,
				h = !n.removePermissionAndRoleFromToken && !p || n.removePermissionAndRoleFromToken && p || n
				.tokenExpiresThreshold && u - Date.now() / 1e3 < n.tokenExpiresThreshold;
			let m = {};
			if (f || h) {
				const t = await j.doc(o).get();
				if (!t.data || 0 === t.data.length || !t.data[0].token) return {
					code: 30202
				};
				if (m = t.data[0], m.status === B) return {
					code: 10001
				};
				if (m.status === F) return {
					code: 10006
				};
				let r = m.token;
				if (r ? "string" == typeof r && (r = [r]) : r = [], -1 === r.indexOf(e)) return {
					code: 30202
				}
			}
			const g = {
				code: 0,
				uid: o,
				...l
			};
			let y, w;
			if (p && (g.role = a, g.permission = c), r && (g.userInfo = m), (!p && t || h) && (y = g.role = m
					.role || [], w = 0 === y.length || y.includes("admin") ? g.permission = [] : g.permission =
					await this._getPermissionListByRoleList(g.role), t && (g.role = y, g.permission = w)), h) {
				let e;
				e = n.removePermissionAndRoleFromToken ? await this.createToken({
					uid: o,
					needPermission: s
				}) : await this.createToken({
					uid: o,
					role: y,
					permission: w
				});
				let t = m.token;
				t ? "string" == typeof t && (t = [t]) : t = [];
				const r = this._getExpiredToken(t);
				return t = t.filter(e => -1 === r.indexOf(e)), t.push(e.token), await j.doc(o).update({
					token: t,
					last_login_date: Date.now(),
					last_login_ip: this.context.CLIENTIP
				}), {
					...g,
					...e
				}
			}
			return g
		},
		createToken: function({
			uid: e,
			needPermission: t,
			role: r,
			permission: n
		}) {
			if (!e) return {
				code: 30101,
				messageValues: {
					param: this.t("user-id")
				}
			};
			const i = {
					uid: e,
					needPermission: t,
					role: r,
					permission: n
				},
				o = this._getConfig();
			if (!this.interceptorMap.has("customToken")) {
				const e = {
					...i
				};
				return this._createTokenInternal({
					signContent: e,
					config: o
				})
			}
			const s = this.interceptorMap.get("customToken");
			if ("function" != typeof s) throw new Error(this.t("type-function-required", "customToken"));
			const a = s(i);
			return a instanceof Promise ? a.then(e => this._createTokenInternal({
				signContent: e,
				config: o
			})) : this._createTokenInternal({
				signContent: a,
				config: o
			})
		},
		_checkPwd: function(e, t) {
			if (!t) return {
				code: 1
			};
			const {
				password: r,
				password_secret_version: n
			} = e, i = this._getConfig(), {
				passwordSecret: o
			} = i, s = h(o);
			if ("string" === s) {
				const {
					passwordHash: e
				} = this.encryptPwd(t, {
					value: o
				});
				return e === r ? {
					code: 0,
					message: ""
				} : {
					code: 2
				}
			}
			if ("array" !== s) throw new Error(this.t("password-secret-type-error"));
			const a = o.sort((e, t) => e.version - t.version);
			let c;
			if (c = n ? a.find(e => e.version === n) : a[0], !c) return {
				code: 3
			};
			const u = a[a.length - 1],
				{
					passwordHash: d
				} = this.encryptPwd(t, c);
			if (d === r) {
				const e = {
					code: 0
				};
				if (c !== u) {
					const {
						passwordHash: r,
						version: n
					} = this.encryptPwd(t, u);
					e.passwordHash = r, e.passwordVersion = n
				}
				return e
			}
			return {
				code: 4,
				message: ""
			}
		},
		_verifyToken: function(e) {
			const t = this._getConfig();
			let r;
			try {
				r = Rr(e, t.tokenSecret)
			} catch (e) {
				return "TokenExpiredError" === e.name ? {
					code: 30203,
					err: e
				} : {
					code: 30204,
					err: e
				}
			}
			return t.bindTokenToDevice && r.clientId && r.clientId !== this._getClientUaHash() ? {
				code: 30201
			} : {
				code: 0,
				message: "",
				...r
			}
		},
		_getExpiredToken: function(e) {
			const t = this._getConfig(),
				r = [];
			return e.forEach(e => {
				try {
					Rr(e, t.tokenSecret)
				} catch (t) {
					r.push(e)
				}
			}), r
		},
		_getPermissionListByRoleList: async function(e) {
			if (!Array.isArray(e)) return [];
			if (0 === e.length) return [];
			if (e.includes("admin")) {
				return (await D.limit(500).get()).data.map(e => e.permission_id)
			}
			const t = await P.where({
					role_id: sn.in(e)
				}).get(),
				r = [];
			return t.data.forEach(e => {
				Array.prototype.push.apply(r, e.permission)
			}), A(r)
		},
		_getClientUaHash: function() {
			const e = t.createHash("md5"),
				r = /MicroMessenger/i.test(this.context.CLIENTUA) ? this.context.CLIENTUA.replace(
					/(MicroMessenger\S+).*/i, "$1") : this.context.CLIENTUA;
			return e.update(r), e.digest("hex")
		},
		_createTokenInternal: function({
			signContent: e,
			config: t
		}) {
			if (t.tokenExpiresIn && t.tokenExpiresThreshold && t.tokenExpiresIn <= t.tokenExpiresThreshold)
				throw new Error(this.t("token-expires-config-warning"));
			return "object" === h(e) && e.uid ? (t.bindTokenToDevice && (e.clientId = this
		._getClientUaHash()), {
				token: Pr(e, t.tokenSecret, {
					expiresIn: t.tokenExpiresIn
				}),
				tokenExpired: Date.now() + 1e3 * t.tokenExpiresIn
			}) : {
				code: 30101,
				messageValues: {
					param: this.t("user-id")
				}
			}
		},
		setVerifyCode: async function({
			mobile: e,
			email: t,
			code: r,
			expiresIn: n,
			type: i
		}) {
			if (t = t && t.trim(), e = e && e.trim(), t) {
				const {
					emailToLowerCase: e
				} = this._getConfig();
				e && (t = t.toLowerCase())
			}
			if (!e && !t) return {
				code: 50101,
				messageValues: {
					param: "手机号或邮箱"
				}
			};
			if (e && t) return {
				code: 50102,
				messageValues: {
					param: "参数",
					reason: "手机号和邮箱不可同时存在"
				}
			};
			r || (r = T()), n || (n = 180);
			const o = Date.now(),
				s = {
					mobile: e,
					email: t,
					type: i,
					code: r,
					state: 0,
					ip: this.context.CLIENTIP,
					created_at: o,
					expired_at: o + 1e3 * n
				};
			return C("addRes", await R.add(s)), {
				code: 0,
				mobile: e,
				email: t
			}
		},
		verifyCode: async function({
			mobile: e,
			email: t,
			code: r,
			type: n
		}) {
			if (t = t && t.trim(), e = e && e.trim(), t) {
				const {
					emailToLowerCase: e
				} = this._getConfig();
				e && (t = t.toLowerCase())
			}
			if (!e && !t) return {
				code: 50201,
				messageValues: {
					param: "手机号或邮箱"
				}
			};
			if (e && t) return {
				code: 50203,
				messageValues: {
					param: "参数",
					reason: "手机号和邮箱不可同时存在"
				}
			};
			const i = an.command,
				o = Date.now(),
				s = {
					mobile: e,
					email: t,
					type: n,
					code: r,
					state: 0,
					expired_at: i.gt(o)
				},
				a = await R.where(s).orderBy("created_at", "desc").limit(1).get();
			if (C("verifyRecord:", a), a && a.data && a.data.length > 0) {
				const e = a.data[0];
				return C("upRes", await R.doc(e._id).update({
					state: 1
				})), {
					code: 0,
					msg: "验证通过"
				}
			}
			return {
				code: 50202,
				msg: "验证码错误或已失效"
			}
		},
		sendSmsCode: async function({
			mobile: e,
			code: t,
			type: r,
			templateId: n
		}) {
			if (!e) return {
				code: N,
				messageValues: {
					param: this.t("mobile")
				}
			};
			if (t || (t = T()), !r) return {
				code: N,
				messageValues: {
					param: this.t("verify-code-type")
				}
			};
			const i = this._getConfig();
			let o = i && i.service && i.service.sms;
			if (!o) throw new Error(this.t("config-param-required", {
				param: "service.sms"
			}));
			o = Object.assign({
				codeExpiresIn: 300
			}, o);
			const s = ["smsKey", "smsSecret"];
			for (let e = 0, t = s.length; e < t; e++) {
				const t = s[e];
				if (!o[t]) throw new Error(this.t("config-param-required", {
					param: "service.sms." + t
				}))
			}
			const {
				name: a,
				smsKey: c,
				smsSecret: u,
				codeExpiresIn: d
			} = o;
			let l;
			switch (r) {
				case "login":
					l = this.t("login");
					break;
				default:
					l = this.t("verify-mobile")
			}
			try {
				const i = {
					name: a,
					code: t,
					action: l,
					expMinute: "" + Math.round(d / 60)
				};
				a && (i.name = a), await uniCloud.sendSms({
					smsKey: c,
					smsSecret: u,
					phone: e,
					templateId: n || "uniID_code",
					data: i
				});
				const o = await this.setVerifyCode({
					mobile: e,
					code: t,
					expiresIn: d,
					type: r
				});
				return o.code >= 0 ? o : {
					code: 0,
					msg: ""
				}
			} catch (e) {
				return {
					code: 50301
				}
			}
		}
	}),
	un = re((function(e, t) {
		var r = /^\[object .+?Constructor\]$/,
			n = /^(?:0|[1-9]\d*)$/,
			i = {};
		i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i[
				"[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i[
				"[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i[
				"[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i[
			"[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i[
				"[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i[
				"[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
		var o = "object" == typeof te && te && te.Object === Object && te,
			s = "object" == typeof self && self && self.Object === Object && self,
			a = o || s || Function("return this")(),
			c = t && !t.nodeType && t,
			u = c && e && !e.nodeType && e,
			d = u && u.exports === c,
			l = d && o.process,
			p = function() {
				try {
					var e = u && u.require && u.require("util").types;
					return e || l && l.binding && l.binding("util")
				} catch (e) {}
			}(),
			f = p && p.isTypedArray;

		function h(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		var m, g = Array.prototype,
			y = Function.prototype,
			w = Object.prototype,
			v = a["__core-js_shared__"],
			_ = y.toString,
			b = w.hasOwnProperty,
			E = (m = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "")) ? "Symbol(src)_1." + m : "",
			C = w.toString,
			T = _.call(Object),
			A = RegExp("^" + _.call(b).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(
				/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
			x = d ? a.Buffer : void 0,
			S = a.Symbol,
			I = a.Uint8Array,
			O = x ? x.allocUnsafe : void 0,
			k = function(e, t) {
				return function(r) {
					return e(t(r))
				}
			}(Object.getPrototypeOf, Object),
			j = Object.create,
			R = w.propertyIsEnumerable,
			P = g.splice,
			D = S ? S.toStringTag : void 0,
			q = function() {
				try {
					var e = ae(Object, "defineProperty");
					return e({}, "", {}), e
				} catch (e) {}
			}(),
			N = x ? x.isBuffer : void 0,
			L = Math.max,
			U = Date.now,
			V = ae(a, "Map"),
			M = ae(Object, "create"),
			B = function() {
				function e() {}
				return function(t) {
					if (!ve(t)) return {};
					if (j) return j(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();

		function F(e) {
			var t = -1,
				r = null == e ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}

		function $(e) {
			var t = -1,
				r = null == e ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}

		function H(e) {
			var t = -1,
				r = null == e ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}

		function K(e) {
			var t = this.__data__ = new $(e);
			this.size = t.size
		}

		function G(e, t) {
			var r = he(e),
				n = !r && fe(e),
				i = !r && !n && ge(e),
				o = !r && !n && !i && be(e),
				s = r || n || i || o,
				a = s ? function(e, t) {
					for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
					return n
				}(e.length, String) : [],
				c = a.length;
			for (var u in e) !t && !b.call(e, u) || s && ("length" == u || i && ("offset" == u || "parent" ==
				u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ce(u, c)) || a.push(
				u);
			return a
		}

		function z(e, t, r) {
			(void 0 !== r && !pe(e[t], r) || void 0 === r && !(t in e)) && X(e, t, r)
		}

		function Q(e, t, r) {
			var n = e[t];
			b.call(e, t) && pe(n, r) && (void 0 !== r || t in e) || X(e, t, r)
		}

		function Y(e, t) {
			for (var r = e.length; r--;)
				if (pe(e[r][0], t)) return r;
			return -1
		}

		function X(e, t, r) {
			"__proto__" == t && q ? q(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		F.prototype.clear = function() {
			this.__data__ = M ? M(null) : {}, this.size = 0
		}, F.prototype.delete = function(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}, F.prototype.get = function(e) {
			var t = this.__data__;
			if (M) {
				var r = t[e];
				return "__lodash_hash_undefined__" === r ? void 0 : r
			}
			return b.call(t, e) ? t[e] : void 0
		}, F.prototype.has = function(e) {
			var t = this.__data__;
			return M ? void 0 !== t[e] : b.call(t, e)
		}, F.prototype.set = function(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = M && void 0 === t ?
				"__lodash_hash_undefined__" : t, this
		}, $.prototype.clear = function() {
			this.__data__ = [], this.size = 0
		}, $.prototype.delete = function(e) {
			var t = this.__data__,
				r = Y(t, e);
			return !(r < 0) && (r == t.length - 1 ? t.pop() : P.call(t, r, 1), --this.size, !0)
		}, $.prototype.get = function(e) {
			var t = this.__data__,
				r = Y(t, e);
			return r < 0 ? void 0 : t[r][1]
		}, $.prototype.has = function(e) {
			return Y(this.__data__, e) > -1
		}, $.prototype.set = function(e, t) {
			var r = this.__data__,
				n = Y(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}, H.prototype.clear = function() {
			this.size = 0, this.__data__ = {
				hash: new F,
				map: new(V || $),
				string: new F
			}
		}, H.prototype.delete = function(e) {
			var t = se(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}, H.prototype.get = function(e) {
			return se(this, e).get(e)
		}, H.prototype.has = function(e) {
			return se(this, e).has(e)
		}, H.prototype.set = function(e, t) {
			var r = se(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}, K.prototype.clear = function() {
			this.__data__ = new $, this.size = 0
		}, K.prototype.delete = function(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}, K.prototype.get = function(e) {
			return this.__data__.get(e)
		}, K.prototype.has = function(e) {
			return this.__data__.has(e)
		}, K.prototype.set = function(e, t) {
			var r = this.__data__;
			if (r instanceof $) {
				var n = r.__data__;
				if (!V || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new H(n)
			}
			return r.set(e, t), this.size = r.size, this
		};
		var J, W = function(e, t, r) {
			for (var n = -1, i = Object(e), o = r(e), s = o.length; s--;) {
				var a = o[J ? s : ++n];
				if (!1 === t(i[a], a, i)) break
			}
			return e
		};

		function Z(e) {
			return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : D && D in Object(e) ?
				function(e) {
					var t = b.call(e, D),
						r = e[D];
					try {
						e[D] = void 0;
						var n = !0
					} catch (e) {}
					var i = C.call(e);
					n && (t ? e[D] = r : delete e[D]);
					return i
				}(e) : function(e) {
					return C.call(e)
				}(e)
		}

		function ee(e) {
			return _e(e) && "[object Arguments]" == Z(e)
		}

		function re(e) {
			return !(!ve(e) || function(e) {
				return !!E && E in e
			}(e)) && (ye(e) ? A : r).test(function(e) {
				if (null != e) {
					try {
						return _.call(e)
					} catch (e) {}
					try {
						return e + ""
					} catch (e) {}
				}
				return ""
			}(e))
		}

		function ne(e) {
			if (!ve(e)) return function(e) {
				var t = [];
				if (null != e)
					for (var r in Object(e)) t.push(r);
				return t
			}(e);
			var t = ue(e),
				r = [];
			for (var n in e)("constructor" != n || !t && b.call(e, n)) && r.push(n);
			return r
		}

		function ie(e, t, r, n, i) {
			e !== t && W(t, (function(o, s) {
				if (i || (i = new K), ve(o)) ! function(e, t, r, n, i, o, s) {
					var a = de(e, r),
						c = de(t, r),
						u = s.get(c);
					if (u) return void z(e, r, u);
					var d = o ? o(a, c, r + "", e, t, s) : void 0,
						l = void 0 === d;
					if (l) {
						var p = he(c),
							f = !p && ge(c),
							h = !p && !f && be(c);
						d = c, p || f || h ? he(a) ? d = a : _e(m = a) && me(m) ? d = function(
							e, t) {
							var r = -1,
								n = e.length;
							t || (t = Array(n));
							for (; ++r < n;) t[r] = e[r];
							return t
						}(a) : f ? (l = !1, d = function(e, t) {
							if (t) return e.slice();
							var r = e.length,
								n = O ? O(r) : new e.constructor(r);
							return e.copy(n), n
						}(c, !0)) : h ? (l = !1, d = function(e, t) {
							var r = t ? (n = e.buffer, i = new n.constructor(n
								.byteLength), new I(i).set(new I(n)), i) : e.buffer;
							var n, i;
							return new e.constructor(r, e.byteOffset, e.length)
						}(c, !0)) : d = [] : function(e) {
							if (!_e(e) || "[object Object]" != Z(e)) return !1;
							var t = k(e);
							if (null === t) return !0;
							var r = b.call(t, "constructor") && t.constructor;
							return "function" == typeof r && r instanceof r && _.call(r) ==
								T
						}(c) || fe(c) ? (d = a, fe(a) ? d = function(e) {
							return function(e, t, r, n) {
								var i = !r;
								r || (r = {});
								var o = -1,
									s = t.length;
								for (; ++o < s;) {
									var a = t[o],
										c = n ? n(r[a], e[a], a, r, e) : void 0;
									void 0 === c && (c = e[a]), i ? X(r, a, c) : Q(
										r, a, c)
								}
								return r
							}(e, Ee(e))
						}(a) : ve(a) && !ye(a) || (d = function(e) {
							return "function" != typeof e.constructor || ue(e) ?
								{} : B(k(e))
						}(c))) : l = !1
					}
					var m;
					l && (s.set(c, d), i(d, c, n, o, s), s.delete(c));
					z(e, r, d)
				}(e, t, s, r, ie, n, i);
				else {
					var a = n ? n(de(e, s), o, s + "", e, t, i) : void 0;
					void 0 === a && (a = o), z(e, s, a)
				}
			}), Ee)
		}

		function oe(e, t) {
			return le(function(e, t, r) {
				return t = L(void 0 === t ? e.length - 1 : t, 0),
					function() {
						for (var n = arguments, i = -1, o = L(n.length - t, 0), s = Array(o); ++i < o;)
							s[i] = n[t + i];
						i = -1;
						for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
						return a[t] = r(s), h(e, this, a)
					}
			}(e, t, Ae), e + "")
		}

		function se(e, t) {
			var r, n, i = e.__data__;
			return ("string" == (n = typeof(r = t)) || "number" == n || "symbol" == n || "boolean" == n ?
				"__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map
		}

		function ae(e, t) {
			var r = function(e, t) {
				return null == e ? void 0 : e[t]
			}(e, t);
			return re(r) ? r : void 0
		}

		function ce(e, t) {
			var r = typeof e;
			return !!(t = null == t ? 9007199254740991 : t) && ("number" == r || "symbol" != r && n.test(e)) &&
				e > -1 && e % 1 == 0 && e < t
		}

		function ue(e) {
			var t = e && e.constructor;
			return e === ("function" == typeof t && t.prototype || w)
		}

		function de(e, t) {
			if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
		}
		var le = function(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = U(),
					i = 16 - (n - r);
				if (r = n, i > 0) {
					if (++t >= 800) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}(q ? function(e, t) {
			return q(e, "toString", {
				configurable: !0,
				enumerable: !1,
				value: (r = t, function() {
					return r
				}),
				writable: !0
			});
			var r
		} : Ae);

		function pe(e, t) {
			return e === t || e != e && t != t
		}
		var fe = ee(function() {
				return arguments
			}()) ? ee : function(e) {
				return _e(e) && b.call(e, "callee") && !R.call(e, "callee")
			},
			he = Array.isArray;

		function me(e) {
			return null != e && we(e.length) && !ye(e)
		}
		var ge = N || function() {
			return !1
		};

		function ye(e) {
			if (!ve(e)) return !1;
			var t = Z(e);
			return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" ==
				t || "[object Proxy]" == t
		}

		function we(e) {
			return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
		}

		function ve(e) {
			var t = typeof e;
			return null != e && ("object" == t || "function" == t)
		}

		function _e(e) {
			return null != e && "object" == typeof e
		}
		var be = f ? function(e) {
			return function(t) {
				return e(t)
			}
		}(f) : function(e) {
			return _e(e) && we(e.length) && !!i[Z(e)]
		};

		function Ee(e) {
			return me(e) ? G(e, !0) : ne(e)
		}
		var Ce, Te = (Ce = function(e, t, r) {
			ie(e, t, r)
		}, oe((function(e, t) {
			var r = -1,
				n = t.length,
				i = n > 1 ? t[n - 1] : void 0,
				o = n > 2 ? t[2] : void 0;
			for (i = Ce.length > 3 && "function" == typeof i ? (n--, i) : void 0, o && function(
					e, t, r) {
					if (!ve(r)) return !1;
					var n = typeof t;
					return !!("number" == n ? me(r) && ce(t, r.length) : "string" == n && t in
						r) && pe(r[t], e)
				}(t[0], t[1], o) && (i = n < 3 ? void 0 : i, n = 1), e = Object(e); ++r < n;) {
				var s = t[r];
				s && Ce(e, s, r, i)
			}
			return e
		})));

		function Ae(e) {
			return e
		}
		e.exports = Te
	}));
let dn;
try {
	dn = require("uni-config-center")
} catch (e) {
	throw new Error("Plugin[uni-config-center] was not found")
}
class ln {
	constructor({
		context: e,
		clientInfo: t,
		config: r
	} = {}) {
		const n = dn({
			pluginId: "uni-id"
		});
		this.pluginConfig = n, this.config = r || this._getConfigContent(), this._configCache = {}, Object
			.defineProperty(this, "context", {
				get() {
					let r;
					r = t ? {
						OS: t.os,
						CLIENTIP: t.clientIP,
						CLIENTUA: t.userAgent,
						PLATFORM: t.platform,
						APPID: t.appId,
						LOCALE: t.locale,
						DEVICEID: t.deviceId
					} : Object.assign({}, e || global.__ctx__ || {});
					const n = ["CLIENTIP", "PLATFORM", "APPID", "LOCALE"];
					for (let e = 0; e < n.length; e++) {
						const t = n[e];
						void 0 === r[t] && console.warn(i.t("context-required", {
							key: t
						}))
					}
					const o = r.APPID,
						s = r.PLATFORM;
					if ("app" === s || "app-plus" === s) {
						const e = this._getAppConfig(this.config, o);
						if (e.preferedAppPlatform) {
							if ("app" !== e.preferedAppPlatform && "app-plus" !== e.preferedAppPlatform)
								throw new Error("invalid preferedAppPlatform value in config");
							r.PLATFORM = e.preferedAppPlatform
						}
						if ("app" === r.PLATFORM && e["app-plus"] || "app-plus" === r.PLATFORM && e.app)
							throw new Error(
								`Client platform is ${r.PLATFORM}, but ${"app"===r.PLATFORM?"app-plus":"app"} was found in config. Please refer to: https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=prefered-app-platform`
								)
					}
					return r
				}
			}), this.interceptorMap = new Map, n && n.hasFile("custom-token.js") && this.setInterceptor(
				"customToken", require(n.resolve("custom-token.js")));
		let i, o = O;
		if (n && n.hasFile("lang/index.js")) {
			const e = n.requireFile("lang/index.js");
			o = un(O, e)
		}
		if (!uniCloud.initI18n) throw new Error(
			"The HBuilderX you are using is too old, please upgrade to the latest version of HBuilderX");
		i = uniCloud.initI18n({
			locale: "en",
			fallbackLocale: "zh-Hans",
			messages: o
		}), Object.defineProperty(this, "t", {
			get() {
				return i.setLocale(this.context.LOCALE || "zh-Hans"), i.t.bind(i)
			}
		})
	}
	get dev() {
		return console.warn(this.t("dev-warning")), {
			getConfig: this._getConfig.bind(this)
		}
	}
	_getAppConfig(e, t) {
		return Array.isArray(e) ? e.find(e => e.dcloudAppid === t) || e.find(e => e.isDefaultConfig) : e
	}
	_getConfigContent() {
		if (this.pluginConfig && this.pluginConfig.hasFile("config.json")) {
			let e;
			try {
				e = this.pluginConfig.config()
			} catch (e) {
				throw new Error(this.t("config-file-invalid") + "\n" + e.messages)
			}
			return Array.isArray(e) ? e : e[0] ? Object.values(e) : e
		}
	}
	init() {
		throw new Error("uniID.init has been deprecated, use uniID.createInstance instead")
	}
	setInterceptor(e, t) {
		this.interceptorMap.set(e, t)
	}
	_getConfig({
		appid: e,
		platform: t
	} = {}) {
		const r = `${e=e||this.context.APPID}_${t=t||this.context.PLATFORM}`;
		if (this._configCache[r]) return this._configCache[r];
		if (!(this.config && 0 !== Object.keys(this.config).length)) throw new Error(this.t(
			"config-file-not-found"));
		const n = this._getAppConfig(this.config),
			i = Object.assign(n, n[t]) || {},
			o = Object.assign({
				bindTokenToDevice: !1,
				tokenExpiresIn: 7200,
				tokenExpiresThreshold: 1200,
				passwordErrorLimit: 6,
				passwordErrorRetryTime: 3600,
				usernameToLowerCase: !0,
				emailToLowerCase: !0
			}, i);
		return ["passwordSecret", "tokenSecret", "tokenExpiresIn", "passwordErrorLimit", "passwordErrorRetryTime"]
			.forEach(e => {
				if (!o || !o[e]) throw new Error(this.t("config-param-required", {
					param: e
				}))
			}), this._configCache[r] = o, o
	}
}
for (const e in cn) ln.prototype[e] = cn[e];

function pn({
	context: e,
	config: t
} = {}) {
	const r = new ln({
		context: e,
		config: t
	});
	return new Proxy(r, {
		get(e, t) {
			if (t in e && 0 !== t.indexOf("_")) {
				if ("function" == typeof e[t]) return (r = e[t], function() {
					const e = r.apply(this, arguments);
					return f(e) ? e.then(e => (I.bind(this)(e), e)) : (I.bind(this)(e), e)
				}).bind(e);
				if ("context" !== t && "config" !== t) return e[t]
			}
			var r
		}
	})
}
ln.prototype.createInstance = pn;
var fn = pn();
module.exports = fn;
