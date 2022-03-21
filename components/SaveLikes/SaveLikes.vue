<template>
	<view class="save-incons" @click.stop="changeSaveStatus">
		<uni-icons  color="#ff6600" :type="isSave ? 'heart-filled' : 'heart'" size="20" ></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"SaveLikes",
		props:{
			articleID :String
		},
		// data() {
		// 	return {
		// 		isSave: false
		// 	};
		// },
		computed: {
			isSave() {
				try {
				return this.userInfo && this.userInfo.article_likes_ids.includes(this.articleID)
				} catch (e) {
					return false
				}
			}
		},
		methods: {
			async changeSaveStatus() {
				// 判断用户是否登录
				await this.checkedIsLogin()
                const {msg,newUserInfo} = await this.$http.update_save_like({
					articleId :this.articleID,
					userId: this.userInfo._id
				})
				uni.showToast({
					title: msg,
					icon: 'none'
				})
				this.updateUserInfo({...this.userInfo,...newUserInfo})
				// console.log(newUserInfo)
				uni.$emit('updateArticle')
			}
		}
	}
</script>

<style>

</style>
