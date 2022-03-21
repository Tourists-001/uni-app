import App from './App'
import nodule from './ajax/api/index.js'

import Vue from 'vue'
import userRuleMixin from './common/rulesMixin.js'
import commonMixin from './common/commonMixin.js'
import {router,RouterMount} from './router.js'  //路径换成自己的
Vue.use(router)
Vue.use(userRuleMixin)
Vue.use(commonMixin)
Vue.prototype.$http = nodule
import store from './store/index.js'
// Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store,
})
// app.$mount()

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

