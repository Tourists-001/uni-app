<template>
	<view>
		<uni-popup ref="popup" type="bottom" :mask-click="false">
			<!-- 内容区域 -->
			<view class="popup-wrapper">
				<view class="popup-header">
					<view class="popup-header-item" @click="closePopupMask">
						取消
					</view>
					<view class="popup-header-item" @click="sendCommentData">
						发布
					</view>
				</view>
				<view class="popup-content">
					<textarea class="popup-content-textarea" v-model.trim="commentVal" placeholder="请输入评论内容" maxlength="20"/>
					<view class="popup-content-count">
						{{commentVal.length}}/200
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name:"commentMasker",
		props:{
			showPopup:Boolean
		},
        watch: {
            showPopup(newVal) {
                newVal ? this.$refs.popup.open() :this.$refs.popup.close()
            }
        },
		data() {
			return {
				commentVal: ''
			};
		},
		methods: {
			closePopupMask() {
				this.commentVal = ''
				this.$emit('closePopupMask',false)
			},
			sendCommentData() {
				if(!this.commentVal) {
					uni.showToast({
						title: '请输入评论内容',
						icon: 'none'
					})
					return
				}
				this.$emit('sendCommentData',this.commentVal,() => {
					this.commentVal = ''
				})
			}
		}
	}
</script>

<style lang="scss">
.popup-wrapper {
	background-color: #fff;
	.popup-header {
		@include  flex();
		font-size: 18px;
		color: #000;
		border-bottom: 1px solid #F5F5F5;
		.popup-header-item {
			height: 100rpx;
			line-height: 100rpx;
			padding: 0 30rpx;
			
		}
	}
	.popup-content {
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx;
		.popup-content-textarea {
			width: 100%;
			height: 400rpx;
		}
		.popup-content-count {
			@include flex(flex-end);
			color:$c-9;
			
		}
	}
}
</style>
