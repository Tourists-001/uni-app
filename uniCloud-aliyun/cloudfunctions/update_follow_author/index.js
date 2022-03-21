'use strict';
const db = uniCloud.database()
    const dbCmd = db.command
exports.main = async (event, context) => {
	const {userId,authorId} = event;
	const user = await db.collection('user').doc(userId).get()
	const authorLikesIds = user.data[0].author_likes_ids
	let returnMsg = ''
	let author_ids = null
	if(authorLikesIds.includes(authorId)) {
		author_ids = dbCmd.pull(authorId)
		returnMsg = '取消关注'
	} else {
		author_ids = dbCmd.addToSet(authorId)
		returnMsg = '关注作者'
	}
	await db.collection('user').doc(userId).update({
		author_likes_ids: author_ids
	})
 	return {
		code: 0,
		data: {
			msg: returnMsg
		}
	}
};
