<template>
	<view class="login-container">
		<image src="../../../static/img/login_bg.png" class="banner-bg" mode=""></image>
		<!-- 导航 -->
		<view class="login-nav">
			<view class="nav-item" @click="changeLoginType('account')" :class="{'active':type === 'account'}">账号登录
			</view>
			<view class="nav-item" @click="changeLoginType('mobile')" :class="{'active':type !== 'account'}">手机号登录
			</view>
		</view>
		<!-- 表单 -->
		<uni-forms class="form" ref="form" :modelValue="formData">
			<view class="" v-if="type === 'account'">
				<uni-forms-item label="账号" name="loginName">
					<input type="text" value="" placeholder-class="placeholder" class="form-input" placeholder="请输入账号"
						v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<uni-easyinput @iconClick="iconClick" type="password" :inputBorder="false"
						placeholder-class="placeholder" class="form-input" placeholder="请输入密码"
						v-model="formData.password" />
					</uni-easyinput>
					<!-- <input > -->
				</uni-forms-item>
			</view>

			<view class="" v-else>
				<uni-forms-item label="手机号" name="phone">
					<input type="text" value="" placeholder-class="placeholder" class="form-input" placeholder="请输入手机号"
						v-model="formData.phone" />
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vClode">
					<input type="text" placeholder-class="placeholder" class="form-input" placeholder="请输入验证码"
						v-model="formData.vClode" />
					<sendCode @getForm="getForm" @setcurrentCode="returnCode = $event" />
				</uni-forms-item>
			</view>
		</uni-forms>
		<button class="login-btn" @click="_userLoginSubmit">立即登录</button>
		<view class="footer-select-container">
			<text>注册</text>
			<text>忘记密码</text>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		onReady() {
			this.$refs.form.setRules(this.userRules)
		},
		data() {
			return {
				formData: {
					loginName: '',
					password: '',
					phone: '',
					vClode: ''
				},
				type: 'account',
				returnCode: null,
			}
		},
		methods: {
			async _userLoginSubmit() {
				const res = await this.$refs.form.validate()
				// console.log(res)
				this._sendUserInfo({
					...res,
					type: this.type
				})
			},
			changeLoginType(type) {
				this.type = type
				this.$refs.form.clearValidate([]) //清空表单
			},
			async _sendUserInfo(data) {
				const userInfo = await this.$http.user_login(data)
				// console.log(userInfo)
				if (userInfo) {
					this.updateUserInfo(userInfo)
					uni.navigateBack()
					uni.showToast({
						title: '用户登录成功',
						icon: 'none'
					})
					// setTimeout(() => {
						// //#ifdef H5
						// try {
							uni.navigateBack()
						// } catch (e) {
						// 	uni.switchTab({
						// 		url: '/pages/index/index'
						// 	})
						// }
						//   uni.switchTab({
						//   	url: '/pages/index/index'
						//   })
						// //#endif
						// //#ifndef H5
						// uni.navigateBack()
						// //#endif
					// }, 1500)
				} else {
					uni.showToast({
						title: '用户名或密码错误',
						icon: 'none'
					})

				}
			},
			...mapMutations(['updateUserInfo']),
			//向验证码组件发送表单信息
			getForm(cb) {
				cb && cb(this.$refs.form)
			}
		}
	}
</script>
<style lang="scss">
	page {
		background-color: #f5f5f5
	}
</style>
<style lang="scss">
	@import '../css/login.scss'
</style>
