export default ({name,data={}})=> {
	/* 导出pormise对象 */
	return new Promise((resolve,reject) => {
		const loading = data.isLoading;
		data.isLoading && delete data.isLoading
		!loading && uni.showLoading({
		})
		uniCloud.callFunction({
			name,
            data,
			success({result}) {
				if(result.code === 0) {
					resolve(result.data)
				}else {
					resolve(result.data)
					uni.showToast({icon:"none",title:result.msg})
				}
			},
			fail(err) {
				reject(err)
			},
			complete() {
				!loading && uni.hideLoading({})
			}
		})
	})
}
