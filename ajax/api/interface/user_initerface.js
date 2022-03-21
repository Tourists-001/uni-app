import  ajax  from "../../http.js"
export const user_login = data => ajax({
	name:"user_login",
	data
})
//发送验证码
export const  get_code = data => ajax({
	name:"get_code ",
	data
})

//跟新标签

export const  updata_label_ids = data => ajax({
	name:"updata_label_ids",
	data
})


export const  update_follow_author = data => ajax({
	name:"update_follow_author",
	data
})

export const  update_compliments = data => ajax({
	name:"update_compliments",
	data
})


export const  get_follow_article = data => ajax({
	name:"get_follow_article",
	data
})

export const  get_author_list = data => ajax({
	name:"get_author_list",
	data
})

export const get_my_article = data => ajax({
	name:"get_my_article",
	data
})


export const update_feedback = data => ajax({
	name:"update_feedback",
	data
})

export const update_user_avatar = data => ajax({
	name:"update_user_avatar",
	data
})