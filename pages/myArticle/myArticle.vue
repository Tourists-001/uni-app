<template>
	<view>
		<ListCard :item="item" v-for="item in articleList" :key="item._id"></ListCard>
		<view v-if="AuthordataNone" class="no-data">暂无发布的文章</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._getMyArticle()
		},
		data() {
			return {
				articleList: [],
				AuthordataNone: ''
			}
		},
		methods: {
		  async	_getMyArticle() {
			  const res = await this.$http.get_my_article({userId: this.userInfo._id})
			  this.articleList = res
			  if(!res.length) {
				  this.AuthordataNone = true
			  }
			  // console.log(res)
		  }
		}
	}
</script>

<style>
    .no-data {
        height: 400rpx;
        line-height: 400rpx;
        width: 100%;
        text-align: center;
        font-size: 24rpx;
        color: #666;
    }
</style>
