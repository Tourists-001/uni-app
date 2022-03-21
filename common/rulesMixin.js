export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					mobileReg: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
					userRules: {
						loginName: {
							rules:[{							
								required: true,
								'errorMessage': '用户名不能为空'
							},{
								validateFunction :this.validateLoginName,
							}
							]
						},
						password: {
							rules:[{
									required: true,
									'errorMessage': '密码不能为空'
							}]
						},
						phone: {
							rules:[{
								required: true,
								'errorMessage': '密码不能为空'
							},
							{
								validateFunction :this.validatePhone,
							}]
						},
						vClode: {
							rules:[{
								required: true,
								'errorMessage': '验证码不能为空'
							},
							{
								validateFunction :this.validatevClode,
							}]
						},
					}
				}
			},
			methods: {
				validateLoginName(rule,val,data,callback) {
					switch (true) {
						case 2 >= val.length > 6:
						callback ('用户名长度不正确')
						break
						default :
						return true
						
					}
				},
				validatePhone(rule,val,data,callback) {
					switch (true) {
						case !this.mobileReg.test(val) :
						callback ('手机号码格式不正确')
						break
						default :
						return true
						
					}
				},
				validatevClode(rule,val,data,callback) {
					//验证码规则
					switch (true) {
						case val !== this.returnCode :
						callback ('验证码错误')
						break
						default :
						return true
						
					}
				}
			}
		})
	}
}