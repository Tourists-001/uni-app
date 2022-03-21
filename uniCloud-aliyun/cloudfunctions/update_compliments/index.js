'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
     const {userId, articleId} = event
	 const userList = await db.collection('user').doc(userId).get()
	 const thumbs_up_article_ids = userList.data[0].thumbs_up_article_ids
	 let tempArr = null
	 let returnMsg = null
	 let thumbsNum = null
	if(thumbs_up_article_ids.includes(articleId)) {
		tempArr = dbCmd.pull(articleId)
		returnMsg = '取消点赞成功'
		thumbsNum = -1
	} else {
		tempArr = dbCmd.addToSet(articleId)
		returnMsg = '点赞成功'
		thumbsNum = 1
	}
	await db.collection('user').doc(userId).update({
		thumbs_up_article_ids: tempArr
	})
	await db.collection('article').doc(articleId).update({
		thumbs_up_count: dbCmd.inc(thumbsNum)
	})
	return {
		code: 0,
		data: {
			msg: returnMsg
		}
	}
};
