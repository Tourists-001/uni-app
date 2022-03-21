<template>
	<view class="follow-container">
		<view class="follow-tab">
			<view class="follow-tab-box">
				<view class="follow-tab-item" :class="{active:currentIndex===0}" @click="currentIndex = 0">文章</view>
				<view class="follow-tab-item" :class="{active:currentIndex===1}" @click="currentIndex = 1">作者</view>
			</view>
		</view>
		<!-- 内容切换区域 -->
		<view class="follow-list-container">
			<swiper class="follow-list-swiper" :current="currentIndex" @change="currentIndex = $event.detail.current">
				<swiper-item :class="{'no-data' : dataNone}">
					{{dataNone && '暂无收藏的文章'}}
					<ListItem :isShowLoading="isShowLoading" :articList="articList" v-if="articList.length"></ListItem>
					<!-- <view v-if="dataNone"  class="no-data">暂无收藏的文章</view> -->
				</swiper-item>
				<swiper-item :class="{'no-data' : AuthordataNone}">
					{{AuthordataNone && '暂无收藏的文章'}}
					<AuthorList :authorList="authorList"></AuthorList>
					<!-- <view v-if="AuthordataNone" class="no-data">暂无收藏的文章</view> -->
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			// #ifdef MP-WEIXIN
			if (!this.$store.state.userInfo) {
				uni.redirectTo({
					url: '/pages/userInfo/login/login'
				})
				return
			}
			// #endif
			uni.$on('updateArticle', () => {
				this._getFollowArticle('noLoading')
				this._getAuthorList('noLoading')
			})
			this._getFollowArticle()
			this._getAuthorList()
		},
		data() {
			return {
				currentIndex: 0,
				articList: [],
				isShowLoading: false,
				dataNone: '',
				AuthordataNone: '',
				authorList: []
			}
		},
		methods: {
			async _getFollowArticle(isLoading) {
				const list = await this.$http.get_follow_article({
					userId: this.userInfo._id,
					isLoading
				})
				if (!list.length) {
					this.dataNone = true
				} else {
					this.dataNone = ''
				}
				this.articList = list
				// !list.length && (this.dataNone = true) //list为空的时候，this.dataNone为 true
			},
			async _getAuthorList(isLoading) {
				const list = await this.$http.get_author_list({
					userId: this.userInfo._id,
					isLoading
				})
				if (!list.length) {
					this.AuthordataNone = true
				} else {
					this.AuthordataNone = ''
				}
				this.authorList = list
			}
		}
	}
</script>

<style lang="scss">
	@import "./css/follow.scss";
</style>
