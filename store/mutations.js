export default {
  updateUserInfo(state,userInfo) {
    uni.setStorageSync('userInfo',userInfo);
    state.userInfo = userInfo;
  },
  setHistory(state,val) {
    let list = state.historyList
	if((list.length > 0) && list.findIndex(item => item ===val) > -1) return
	list.unshift(val)
	uni.setStorageSync('historyList',list)
	state.historyList = list
  },
  clearHistory(state) {
	  // uni.setStorageSync('historyList',list)
	  uni.removeStorageSync('historyList')
	  state.historyList = []
  },
    // 设置导航栏选项卡
    setLabelList (state, labelList) {
      uni.setStorageSync('labelList',labelList)
      state.labelList = labelList
    }
}