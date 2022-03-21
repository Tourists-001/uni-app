'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {classify, page = 1, pageSize = 10} = event;
	let obj = {}
	if(classify !== '全部') {
		obj = {classify}
	}
   const list  =  await db.collection('article')
   .aggregate()  //使用聚合的形式进行数据匹配
   .match(obj)   //根据匹配条件进行数据获取
   .project({
	   content: 0  //本次查询不需要返回文章给前端
   })
   .skip(pageSize * (page - 1))  //第一页的数据从 0开始
   .limit(pageSize)  //每页返回多少条数据
   .end()
   console.log(list)
	//返回当前数据的总量
	const {total} = await db.collection('article').where(obj).count()
	//返回数据给客户端
	return{
		code: 0,
		msg: '数据获取成功',
		data: {
			articleList: list.data,
            total,
		}
	}
};
