<template>
	<view class="comment-box">
		<view class="comment-header">
			<view class="comment-header-logo">
				<image :src="item.author.avator" mode="aspectFill"></image>
			</view>
			<view class="comment-header-info">
				<view class="title" v-if="!item.is_reply">
					{{item.author.author_name}}
				</view>
				<view class="title" v-else>
					{{item.author.author_name}}
					<text class="reply-text">回复</text>
					{{item.to}}
				</view>
				<view class="">
					<uni-dateformat :date="item.create_time" format="yy-MM-dd hh:mm:ss"></uni-dateformat>
				</view>
			</view>
		</view>
		<!-- 评论内容展示 -->
		<view class="comment-content">
			<view class="">
				{{item.comment_content}}
			</view>
		
		<view class="comment-info">
			<view class="comment-button" @click="commentReply({comment:item,isReply})">
				回复
			</view>
		</view>
		<!-- 递归 -->
		<view class="comment-reply-list" v-for="i in item.replyArr" :key="i.comment_id">
			<commentBox :isReply="true" :item="i" @commentReply='commentReply'/></commentBox>
		</view>
	</view>
	</view>
</template>

<script>
	import commentBox from '@/components/commentBox/commentBox.vue'
	export default {
		name:"commentBox",
		components: {
			commentBox,
		},
		props: {
			item: {
				type:Object,
				default:() => {
					return []
				}
			},
			isReply: {
				type:Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			commentReply(data) {
				if(data.isReply) {
					data.comment.reply_id = data.comment.comment_id,
					data.comment.comment_id = this.item.comment_id
				}
				console.log(data)
				this.$emit('commentReply',data)
			}
		}
	}
</script>

<style lang="scss">
@import './css/commentBox.scss';
</style>
