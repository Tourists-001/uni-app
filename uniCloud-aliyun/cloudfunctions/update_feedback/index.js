'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
    const {userId,content,feedbaclImageList} = event;
	await db.collection('feedback').add({
		user_id: userId,
		content,
		feedbaclImageList
	})
	return {
		code: 0,
		data:{
			msg: '反馈成功'
		}
	}
};
