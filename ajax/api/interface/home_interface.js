import  ajax  from "../../http.js"
export const get_label_list  = data => ajax({
	name: 'get_lable_list',
	data,
})
//获取文章列表
export const get_article_list = data => ajax({
	name:"get_article_list",
	data
})

//s收藏
export const update_save_like = data => ajax({
	name: "update_save_like",
	data
})

//获取文章内容
export const get_search_data = data => ajax({
	name: "get_search_data",
	data
})

export const get_article_detail = data => ajax({
	name: "get_article_detail",
	data
})

export const update_comment = data => ajax({
	name: "update_comment",
	data
})


export const get_comments = data => ajax({
	name: "get_comments",
	data
})
