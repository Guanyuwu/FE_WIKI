import Vue from 'vue'
import App from './App.vue'
//全局注册 每个自组件都能访问到 vuex
import store from './store'
//http://element-cn.eleme.io/#/zh-CN/component/quickstart
import 'element-ui/lib/theme-chalk/index.css';
import eleMentUi from 'element-ui'

Vue.use(eleMentUi)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
