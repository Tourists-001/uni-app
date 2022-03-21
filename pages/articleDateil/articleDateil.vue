<template>
	<view class="article-detail-container">
		<view class="detail-title"> {{ articleData.title }} </view>
		<view class="detail-header">
			<view class="detail-logo">
				<image :src="articleData.author.avatar" :mode="articleData.author.status"></image>
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">
					{{ articleData.author.author_name }}
				</view>
				<view class="detail-header-content-info">
					<text>{{ articleData.create_time }}</text>
					<text>{{ articleData.browse_count }} 浏览</text>
					<text>{{ articleData.thumbs_up_count }} 赞</text>
				</view>
			</view>
			<button type="default" class="detail-header-button" @click="_followAuthor">
				{{isFollowAutor ? '取消关注': '关注'}}
			</button>
		</view>
		<view class="detail-content-container">
			<view class="detail-html">
				<u-parse className="markdown-body" :content="article" noData="加载中..." />
			</view>
			<!-- 评论内容部分 -->
			<view class="detail-comment">
				<view class="comment-title">
					最新评论
				</view>
				<view class="comment-content-container" v-for="(item,i) in commentList" :key="i">
					<commentBox @commentReply="commentReply" :commentData="commentData" :item="item"></commentBox>
				</view>
				<view class="no-data" v-if="commentList.length">
					暂无评论
				</view>
			</view>
		</view>

		<!-- 评论组件 -->
		<view class="detail-bottom">
			<view class="input-container" @click="openCommentMask()">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#f07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icon-box" @click="goComentlist">
					<uni-icons type="chat" size="22" color="#f07373"></uni-icons>
				</view>
				<SaveLikes class="detail-bottom-icon-box" :articleID="articleData._id" />
				<!-- 				<view class="detail-bottom-icon-box">
					<uni-icons type="heart" size="22" color="#f07373"></uni-icons>
				</view> -->
				<view class="detail-bottom-icon-box">
					<uni-icons :type="isCompliments ? 'hand-up-filled' : 'hand-up'" size="22" color="#f07373"
						@click="_upDatacompliments"></uni-icons>
				</view>
			</view>
		</view>
		<commentMasker :showPopup="showPopup" @closePopupMask="closePopupMask" @sendCommentData="_sendCommentData">
		</commentMasker>
	</view>
</template>

<script>
	import marked from "marked";
	import uParse from "@/components/gaoyia-parse/parse.vue";
	export default {
		components: {
			uParse,
		},
		onLoad(...options) {
			this.articleData = this.$Router.currentRoute.query
			console.log(this.$Router.currentRoute.query,'===')
			// console.log(this.articleData)
			this._getArticleDetail();
			// 初始化获取评论列表
			this._getCommentList()
		},
		data() {
			return {
				articleData: null,
				showPopup: false,
				commentList: [],
				commentData: [],
				replyData: null,
			};
		},
		methods: {
			async _getArticleDetail() {
				const res = await this.$http.get_article_detail({
					article_id: this.articleData._id,
				});
				this.articleData = res;
			},
			openCommentMask() {
				this.checkedIsLogin()
				this.showPopup = true
			},
			closePopupMask() {
				this.showPopup = false
			},
			async _sendCommentData(val, callback) {
				const {
					msg
				} = await this.$http.update_comment({
					userId: this.userInfo._id,
					articleId: this.articleData._id,
					content: val,
					...this.replyData
				})
				uni.showToast({
					title: msg
				})
				this.showPopup = false
				this.replyData = {}
				this._getCommentList()
				callback()
			},
			async _getCommentList() {
				const res = await this.$http.get_comments({
					articleId: this.articleData._id
				})
				this.commentList = res
				// console.log(this.commentList)
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
			async _followAuthor() {
				await this.checkedIsLogin()
				const {
					msg
				} = await this.$http.update_follow_author({
					authorId: this.articleData.author.id,
					userId: this.userInfo._id
				})
				uni.showToast({
					title: msg,
				})
				// 改变store
				let followIds = [...this.userInfo.author_likes_ids]
				if (followIds.includes(this.articleData.author.id)) {
					followIds = followIds.filter(item => item !== this.articleData.author.id)
				} else {
					followIds.push(this.articleData.author.id)
				}
				// console.log(followIds)
				this.updateUserInfo({
					...this.userInfo,
					author_likes_ids: followIds
				})
				this.$emit('updateArticle')
			},
		 async _upDatacompliments() {
				await this.checkedIsLogin()
				const {msg} = await this.$http.update_compliments({
					articleId: this.articleData._id,
					userId: this.userInfo._id
			 })
			 uni.showToast({
			 	title: msg,
			 })
			 // 改变store
			 let followIds = [...this.userInfo.thumbs_up_article_ids]
			 if (followIds.includes(this.articleData._id)) {
			 	followIds = followIds.filter(item => item !== this.articleData._id)
				this.articleData.thumbs_up_count -=1
			 } else {
				 console.log(followIds.push(this.articleData._id))
			 	followIds.push(this.articleData._id)
				this.articleData.thumbs_up_count +=1
			 }
			 // console.log(followIds)
			 this.updateUserInfo({
			 	...this.userInfo,
			 	thumbs_up_article_ids: followIds
			 })
			},
			goComentlist() {
				uni.navigateTo({
					url: `/pages/commentList/commentList?articleId=${this.articleData._id}`
				})
			}
		},
		computed: {
			article() {
				try {
					return marked(this.articleData.content)
				} catch (e) {
					return null
				}
			},
			// 是否关注
			isFollowAutor() {
				try {
					return this.userInfo && this.userInfo.author_likes_ids.includes(this.articleData.author.id)
				} catch (e) {
					return false
				}
			},
			// 点赞
			isCompliments() {
				try {
					return this.userInfo && this.userInfo.thumbs_up_article_ids.includes(this.articleData._id)
				} catch (e) {
					return false
				}
			}
		}
	};
</script>

<style lang="scss">
	@import "./css/articleDateil.scss";
</style>
