import { mapState,mapMutations } from "vuex"
export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					// userInfo: ''
				}
			},
			computed:  {
				...mapState(['userInfo'])
			},
			methods: {
				checkedIsLogin() {
					return new Promise((resolve) => {
						if(this.userInfo) {
							resolve()
						} else {
							uni.navigateTo({
								url: '/pages/userinfo/login/login'
							})
						}
					})
				},
				...mapMutations(['updateUserInfo'])
			},
		})
	}
}