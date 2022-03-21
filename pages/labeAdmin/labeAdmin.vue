<template>
  <view class="label-container">
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">我的标签</view>
        <view class="label-edit" @click="startEdit">{{this.isEdit? '完成' :'编辑'}}</view>
      </view>
      <view class="label-content">
        <view class="label-content-item" v-for="(item,index) in selfLabeList" :key="index">
          {{item.name}}
          <uni-icons @click="deleteLabelItem(item)" v-if="isEdit" class="icon-close" type="clear" size="20" color="red"></uni-icons>
        </view>
        <view class="no-data" v-if="!selfLabeList.length">当前没有数据</view>
      </view>
    </view>
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">标签推荐</view>
      </view>
      <view class="label-content">
        <view class="label-content-item" v-for="(item,index) in recommendlabeList" :key="index" @click="changeSeflList(item)">
          {{item.name}}
        </view>
        <view class="no-data" v-show="!recommendlabeList.length">当前没有数据</view>
      </view>
    </view>
  </view>
</template>

<script>
	import { mapState } from 'vuex'
export default {
  data () {
    return {
      isEdit: false,
	  labelIds: []
    }
  },
  computed: {
  	...mapState(['labelList','userInfo']),
	selfLabeList() {
		return this.labelList.filter((item) => this.labelIds.includes(item._id))
	},
	recommendlabeList() {
		return this.labelList.filter((item) => !this.labelIds.includes(item._id) && item._id)
	}
  },
  watch: {
	  userInfo: {
		  immediate: true,
		  handler(newVal,oldVal) {
			 this.labelIds = this.userInfo.label_ids || [];
			 // console.log( this.labelIds)
			 // console.log(this.labelIds,)
		  }
	  }
  },
  methods: {
	  // ...mapMutations(['updateUserInfo']),
    // 编辑按钮事件
    startEdit () {
      this.isEdit && this._updateLabel();
      this.isEdit = !this.isEdit;
    },
    // 修改标签
   async _updateLabel() {
      const label_ids = this.selfLabeList.map(item => item._id)
	  const  {msg}  = await this.$http.updata_label_ids({userId:this.userInfo._id, label_ids})
	  console.log(msg)
	  uni.showToast({
	  	title: msg,
		// icon: 'none'
	  })
	  this.updateUserInfo({...this.userInfo,label_ids })
	  console.log(this.labelList)
    },
	changeSeflList(item) {
		if(!this.isEdit) return
		this.labelIds.push(item._id)
		// let newuserInfo = {
		// 	...this.userInfo,
		// 	label_ids: [].push(item._id)
		// }
		// this.updateUserInfo(newuserInfo)
		
	},
	deleteLabelItem(item) {
		console.log(item)
		this.labelIds = this.labelIds.filter((id) => id !== item._id)
	}
  }
}
</script>

<style lang="scss">
@import "./css/lableAdmin.scss";
</style>
