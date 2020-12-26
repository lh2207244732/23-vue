//整个项目的打包入口文件
import Vue from 'vue'
import App from './App.vue'

//引入router实例
import router from './router/index'
//引入store实例
import store from './store'

//关闭生产环境模式更改提示
Vue.config.productionTip = false

//生成根组件的实例
new Vue({
  store,//配置store
  router,//配置router
  render: h => h(App)
}).$mount('#app')
