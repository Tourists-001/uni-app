<template>
	<view>
		<view class="list-scroll-container">
			<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadsmore">
				<view>
					<ListCard @saveSearchHistory="$emit('saveSearchHistory')" v-for="item in articList" :key="item._id" :item="item"/>
				</view>
				<uni-load-more v-if="isShowLoadMore && (articList.length === 0 || articList.length > 7)" :status= "loadData.loading || 'loading'"></uni-load-more>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"ListItem",
		props: {
			articList: {
				type:Array,
				default:() => {
					return []
				},
			},
			loadData: {
				type:Object,
				default:() => {
					return {
						loading: 'loading'
					}
				}
			},
			isShowLoadMore: {
				type: Boolean,
				default: true
			}
		},
		created() {
			// console.log(this.articList)
		},
		methods: {
			loadsmore() {
				// console.log(this.articList)
				this.$emit('loadsmore')
				// console.log(this.loadData)
			},
		}
	}
</script>

<style lang="scss">
	.list-scroll-container {
		height:110vh;
		.list-scroll {
			overflow: hidden;
			height: 100%;
			box-sizing: border-box;
		}
	}

</style>
