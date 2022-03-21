'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
    const {userId,filePath} = event;
	const user = await db.collection('user').doc(userId).get()
	const oldUrl = user.data[0].avatar
	// 判断一下之前的用户头像是否包含在对象存储中，如果有的话，我们就删除
	try{
		await uniCloud.deleteFile({
			fileList: oldUrl
		})
	}catch(e) {
		console.log(e)
	}
	// 跟新头像
	await db.collection('user').doc(userId).update({
		avatar: filePath
	})
	// 跟新文章作者的头像
	const id = user.data[0].id
	await db.collection('article').where({
		'author.id': id
	})
	.update({
		'author.avatar' :filePath
	})
	return {
		code: 0,
		data: {
			msg: '修改头像成功'
		}
	}
};
