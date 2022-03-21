<template>
	<view>
		<view class="code-container">
			<view class="vCode-btn" @click="getForm">
				{{this.runTime ? `${time}秒后重试`: '获取验证码'}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"sendCode",
		// 不支持小程序
		// props:['form'],
		data() {
			return {
				timeId : null,
				time: 5,
				runTime: false,
			};
		},
		methods: {
			getForm() {
				if(this.runTime) return
				this.$emit('getForm',this._sendCode)
				
			},
		    async _sendCode(form) {
				const { phone } = await form.validateField(['phone'])
				this.runTime = true
				this.timeRunning()
				// 发送数据
				const { mobileCode, msg } = await this.$http.get_code({phone})
				uni.showToast({
					title: msg,
					icon: 'none'
				})
				this.$emit('setcurrentCode',mobileCode)
			},
			timeRunning() {
				this.timeId = setInterval(() => {
					if(this.time === 0) {
						clearInterval(this.timeId)
						this.timeId = null
                        this.runTime = false
						this.time = 5
						return 
					}
					this.time -- 
				},1000)
			}
		},
		beforeDestroy() {
			clearInterval(this.timeId)
			this.timeId = null
			this.runTime = false
			this.time = 6
		}
	}
</script>

<style lang="scss">
 .code-container {
	 flex-shrink: 0;
	 margin-right: 20rpx;
	 .vCode-btn {
		 background-color: red;
		 color: #FFFFFF;
		 padding: 20rpx;
		 border-radius: 10rpx;
		 opacity: .8;
		 font-size: 12rpx;
	 }
 }
</style>
