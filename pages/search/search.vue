<template>
	<view class="search-container">
		<!-- 搜索导航组件 -->
		<navBar isSearch="isSearch" :parentVal="parentVal" @updateVal="parentVal=$event"
			@sendSearchData='_sendSearchData' ref="foucus"></navBar>
		<!-- 搜索包裹 -->
		<view v-if="isShowHostory" class="search-wrapper">
			<!-- 没有进行搜索的操作 -->
			<view class="search-history-container">
				<!-- 头部 -->
				<view class="search-header">
					<text class="history-text">搜索历史</text>
					<text class="history-clean" @click="clearHistoryList">清空</text>
				</view>
				<!-- 内容部分 -->
				<view class="search-history-content" v-if="historyList.length">
					<view class="history-content-item" v-for="(item,i) in historyList" :key="i" @click="searchItem(item)">{{item}}</view>
				</view>
				<view v-else class="no-data">当前没有搜索历史</view>
			</view>

			<!-- 开始进行搜索的操作 -->
		</view>
	
	<view v-else class="search-list-container">
		<ListItem @saveSearchHistory="saveSearchHistory" v-if="searchList.length" :isShowLoadMore="false" :articList="searchList" />
		<view v-else class="no-data">没有搜索到相关数据</view>
	</view>
	</view>
</template>

<script>
	import { mapMutations, mapState } from 'vuex';
	export default {
		data() {
			return {
				isSearch: true,
				searchList: [],
				parentVal: "",
				isShowHostory: true
			}
		},
		computed: {
			...mapState(['historyList'])
		},
		watch: {
			searchList(newVal,oldVal) {
				// console.log(newVal,oldVal)
			}
		},
		methods: {
			async _sendSearchData() {
				this.isShowHostory = false
				if(!this.parentVal) {
					this.isShowHostory = true
					this.searchList = []
					return
				}
				const {
					articleList
				} = await this.$http.get_search_data({
					searchVal: this.parentVal
				})
				this.searchList = articleList
				// console.log(this.searchList)
			},
			saveSearchHistory() {
				this.setHistory(this.parentVal)
				// this. _sendSearchData()
			},
			clearHistoryList() {
				this.clearHistory()
			},
			searchItem(item) {
				this.parentVal = item
				this. _sendSearchData()
			},
			...mapMutations(['setHistory','clearHistory'])
		}
	}
</script>

<style lang="scss">
	@import './css/search.scss'
</style>
