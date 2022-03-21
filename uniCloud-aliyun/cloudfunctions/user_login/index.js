'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
   const { loginName,pasword,phone,type } = event
   const { affectedDocs, data } = await db.collection('user')
   .aggregate()
   .match(type === 'account' ? {loginName,pasword} : {phone})
   .end()
   
	return affectedDocs ? {
		code: 0,
		msg: '获取用户信息成功',
		data: data[0]
	}
	: {
		code: 0,
		msg: type === 'account' ? '用户名或密码错误' : '手机号或验证码有误'
	}
};
