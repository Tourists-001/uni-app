'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
    const {userId} = event;
	let userInfo = await db.collection('user').doc(userId).get()
	let author_likes_ids = userInfo.data[0].author_likes_ids;
	
	let list = await db.collection('user')
	.aggregate()
	.addFields({
		is_like: $.in(['$id',author_likes_ids])
	})
	.project({
		loginName: false,
		password: false
	})
	.match({
		is_like: true
	})
	.end()
 	return {
		code: 0,
		msg: '获取成功',
		data:list.data
	}
};
