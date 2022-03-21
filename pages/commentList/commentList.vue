<template>
	<view>
		<view class="comment-content-container" v-for="(item,i) in commentList" :key="i">
			<commentBox @commentReply="commentReply" :item="item"></commentBox>
		</view>
			<uni-load-more v-if="commentList.length || commentList.length > 5" :status="loading"></uni-load-more>
			<!-- 弹窗展示 -->
			<commentMasker :showPopup="showPopup" @closePopupMask="closePopupMask" @sendCommentData="_sendCommentData">
			</commentMasker>
	</view>
</template>

<script>
	export default {
		onLoad(props) {
			this.articleId = props.articleId
			console.log(this.articleId)
			this._getCommentList()
		},
		onReachBottom() {
			if(this.loading === 'noMore') return
			this.page ++
			this._getCommentList()
		},
		data() {
			return {
				articleId: '',
				pageSize: 5,
				page: 1,
				commentList: [],
				commentData: '',
				loading: 'loading',
				showPopup: false,
				replyData: {}
			}
		},
		methods: {
			async _getCommentList() {
				const res = await this.$http.get_comments({
					articleId:this.articleId,
					pageSize:this.pageSize,
					page: this.page
				})
				if(res.length === 0) {
					this.loading = 'noMore'
				}
				let oldList = JSON.parse(JSON.stringify(this.commentList))
				    oldList.push(...res)
				    this.commentList  = oldList
			},
			commentReply(data) {
				// console.log(data,'=======')
				this.replyData = {
					comment_id: data.comment.comment_id,
					is_reply: data.isReply
				}
				data.comment.reply_id && (this.replyData.reply_id = data.comment.reply_id)
				this.openCommentMask()
			},
		  closePopupMask() {},
			async _sendCommentData(val, callback) {
				const {
					msg
				} = await this.$http.update_comment({
					userId: this.userInfo._id,
					articleId: this.articleId,
					content: val,
					...this.replyData
				})
				uni.showToast({
					title: msg
				})
				this.showPopup = false
				this.replyData = {}
				this.page = 1
				this.commentList = []
				this.loading = 'loading'
				this._getCommentList()
				callback()
			},
		  openCommentMask() {
			this.checkedIsLogin()
			this.showPopup = true
		},
		},
	}
</script>

<style lang="scss">
.comment-content-container{
	padding: 0 30rpx;
	border: 1px solid #000;
}
</style>
