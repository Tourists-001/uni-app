<template>
  <view>
    <!-- 基础卡片 -->
    <view
      class="list-card"
      v-if="item.mode === 'base'"
      @click="goArticleDetail"
    >
      <view class="list-card-img">
        <image
          :src="item.cover[0] ? item.cover[0] : '/static/img/logo.jpeg'"
          mode="aspectFill"
        ></image>
      </view>
      <view class="list-card-content">
        <view class="list-card-content-title">
          <text>{{ item.title }}</text>
          <SaveLikes :articleID="item._id"></SaveLikes>
        </view>
        <view class="list-card-content-desc">
          <view class="article-type">
            {{ item.classify }}
          </view>
          <view class="browse-number"> {{ item.browse_count }}浏览 </view>
        </view>
      </view>
    </view>
    <!-- 多图模式 -->
    <view
      class="list-card mode-column"
      v-if="item.mode === 'column'"
      @click="goArticleDetail"
    >
      <view class="list-card-top">
        <text>{{ item.title }}</text>
        <SaveLikes :articleID="item._id"></SaveLikes>
      </view>
      <view class="list-card-middle">
        <view
          class="image-container"
          v-for="(img, index) in item.cover.slice(0, 3)"
          :key="index"
        >
          <image :src="img" mode="aspectFill"></image>
        </view>
      </view>
      <view class="list-card-content-desc list-card-bottom">
        <view class="article-type">
          {{ item.classify }}
        </view>
        <view class="browse-number"> {{ item.browse_count }}浏览 </view>
      </view>
    </view>
    <!-- 大图模式 -->
    <view
      class="list-card mode-image"
      v-if="item.mode === 'image'"
      @click="goArticleDetail"
    >
      <view class="list-card-top">
        <view class="image-container">
          <image
            :src="item.cover[0] ? item.cover[0] : '/static/img/logo.jpeg'"
            mode="aspectFill"
          ></image>
        </view>
      </view>
      <view class="list-card-middle">
        <text>{{ item.title }}</text>
        <SaveLikes :articleID="item._id"></SaveLikes>
      </view>
      <view class="list-card-content-desc list-card-bottom">
        <view class="article-type">
          {{ item.classify }}
        </view>
        <view class="browse-number"> {{ item.browse_count }}浏览 </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ListCard",
  props: {
    item: Object,
  },
  watch: {
	  item(newVal,oldVal) {
		  // console.log(newVal,oldVal)
	  }
  },
  methods: {
    goArticleDetail() {
        // console.log(this.item);
      const {
        _id,
        title,
        author,
        create_time,
        thumbs_up_count,
        browse_count,
      } = this.item;
      const params = {
        _id,
        title,
        author,
        create_time,
        thumbs_up_count,
        browse_count,
      };
    //   console.log(params)
      // uni.navigateTo({
      //   url: `/pages/articleDateil/articleDateil?params=${JSON.stringify(params)}`,
      // });
	  this.$Router.push({
		  path: '/pages/articleDateil/articleDateil',
		  query: params
	  })
      this.$emit("saveSearchHistory");
    },
  },
};
</script>

<style lang="scss">
@import "./css/ListCard.scss";
</style>
