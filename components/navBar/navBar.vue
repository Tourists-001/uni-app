<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height: statusHeight + 'rpx'}"></view>
			<!-- 搜索界面的回退按钮 -->
			<view @click="returnArticleList" class="return-icon">
				<uni-icons type="back" size="22" color="#fff" :style="{top:statusHeight + 'rpx'}" v-if="isSearch">
				</uni-icons>
			</view>
			<view class="nav-bar-content"
				:style="{marginRight: marginRight + 'rpx',marginLeft: isSearch ? '20rpx' : ''}" @click="goSearchPage()">
				<uni-icons type="search" color="#999"></uni-icons>
				<view v-if="!isSearch" class="nav-bar-search-txt">
					输入文章标题进行搜索
				</view>
				<input v-model.trim="searchVal" type="text" placeholder="输入文章标题进行搜索" v-else class="search-input" confirm-type="search"
					@confirm="changeInput"/>
			</view>
		</view>
		<view :style="{height: statusHeight + 80 + 'rpx'}">

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isSearch: {
				// type: Boolean,
				default: false
			},
			parentVal: {
				type: String
			}
		},
		computed: {
			// 动态获取searchvalue内容
			searchVal: {
				get() {
					return this.parentVal
				},
				set(val) {
					this.$emit('updateVal', val)
					if (!val) {
						this.$emit('sendSearchData')
					}
				}
			}
		},
		name: "navBar",
		created() {
			this.getSystemInfo()
		},
		data() {
			return {
				statusHeight: 40,
				marginRight: 0
			};
		},
		methods: {
			getSystemInfo() {
				const {
					statusBarHeight
				} = uni.getSystemInfoSync()
				statusBarHeight && (this.statusHeight = statusBarHeight * 2)
				// #ifdef MP-WEIXIN
				const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.statusHeight = menuButtonInfo.top * 2
				this.marginRight = menuButtonInfo.width * 2
				// #endif
			},
			/* 跳转到搜搜界面*/
			goSearchPage() {
				if (this.isSearch) return
				uni.navigateTo({
					url: '/pages/search/search'

				})

			},
			returnArticleList() {
				// #ifdef H5
				uni.switchTab({
					url: '../../pages/index/index'
				})
				// #endif

				// #ifndef H5		
				uni.navigateBack()
				// #endif
			},
			changeInput() {
				this.$emit('sendSearchData')
			}
		}
	}
</script>
<style lang="scss">
	@import './css/navBar.scss'
</style>
