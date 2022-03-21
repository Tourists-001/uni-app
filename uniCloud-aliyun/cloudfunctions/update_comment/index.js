'use strict';
const db = uniCloud.database()
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {
		userId,
		articleId,
		content,
		comment_id = '',
		reply_id = '',
		is_reply = false
	} = event
	//获取用户信息
	let user = await db.collection('user').doc(userId).get()
	user = user.data[0]
	// 获取文章的数据便
	const article = await db.collection('article').doc(articleId).get();
	const comments = article.data[0].comments

	let commentObj = {
		comment_id: generatedId(5), //生成一个唯一的id
		comment_content: content,
		create_time: Date.now(),
		is_reply,
		replyArr: [],
		author: {
			author_id: user._id,
			author_name: user.author_name,
			avator: user.avatar,
			professinonal: user.professinonal,
		}
	}
	if(comment_id === '') {
	   commentObj = dbCmd.unshift(commentObj)
	} else {
		//获取当前的评论的集合，在这个集合里找到指定的那一条评论，修改他的replyArr属性
		let authorName = null
		let commentIndex = comments.findIndex(item => item.comment_id === comment_id)
		if(is_reply) {
			authorName = comments[commentIndex].replyArr.find(item => item.comment_id === reply_id).author.author_name
		} else {
			authorName = comments.find(item => item.comment_id === comment_id).author.author_name
		}
		commentObj.to = authorName
		commentObj = {
			[commentIndex]: {
				replyArr:dbCmd.unshift(commentObj)
			}
		}
	}
	await db.collection('article').doc(articleId).update({
		comments: commentObj
	})

	function generatedId(num) {
		return Number(Math.random().toString().substr(3, num) + Date.now()).toString(36)
	}
	return {
		code: 0,
		data: {
			msg: '评论成功',
		}
	}
};
