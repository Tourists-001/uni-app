<template>
	<view>
		<view class="feedback-title">
			意见反馈:
		</view>
		<view class="feedback-content">
			  <textarea v-model="content" placeholder="请输入要反馈的内容" />
		</view>
		<view class="feedback-title">
			反馈图片：
		</view>
		<view class="feedback-image-box">
			<view class="feedback-image-item" v-for="(item, i) in imageList" :key="i">
				<view class="close-btn" @click="delImage(i)">
					<uni-icons  class="close-icon" type="closeempty" size="18" color="#fff"></uni-icons>
				</view>
				<view class="image-box">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			</view>
			<view class="feedback-image-item" v-if="imageList.length < 5" @click="_addImage">
				<view class="image-box">
					<uni-icons type="plusempty" size="50" color="#eee"></uni-icons>
				</view>
			</view>
		</view>
		<button type="warn" class="feedback-button" @click="_submitFeedback">提交反馈意见</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				imageList: [],
			}
		},
		methods: {
			async _addImage() {
				const count = 5 -  this.imageList.length
				uni.chooseImage({
					count,
					success: res => {
						const tempFilePaths = res.tempFilePaths
						tempFilePaths.forEach((item,i) => {
							if(i < count) {
								this.imageList.push({
									url:item,
									name: res.tempFiles[i].name
								})
							}
						})
					}
				});
			},
			async _submitFeedback() {
				if(!this.content) {
					uni.showToast({
						title: '文本不能为空',
						icon: 'none'
					})
					return
				}
				// 上传图片
				uni.showLoading()
				const feedbaclImageList = await Promise.all(this.getFiledId())
				uni.hideLoading()
				const {msg} = await this.$http.update_feedback({
					content: this.content,
					userId: this.userInfo._id,
					feedbaclImageList
				})
				uni.showToast({
					title: msg,
				})
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/self/self'
					})
				},1500)
			},
			delImage(i) {
				this.imageList.splice(i,1)
			},
			getFiledId() {
				return this.imageList.map(item => {
						var name = String(item.name)
					return new Promise(async resolve => {
						const result = await uniCloud.uploadFile({
							filePath: item.url,
							cloudPath: name
						})
						resolve(result.fileID)
					})
				})
			}
		}
	}
</script>

<style lang="scss">
@import './css/feedback.scss'
</style>
