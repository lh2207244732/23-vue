import Vue from 'vue'
import VueRouter from 'vue-router'
//1 安装VueRouter
Vue.use(VueRouter)
//2 引入组件
import Home from '../pages/home'
import Todolist from '../pages/todolist'
//3 定义路由
const routes = [
    { path: '/home', component: Home },
    { path: '/todolist', component: Todolist }
]
//4 根据路由创建router实例
const router = new VueRouter({
    routes,
    //使用H5路由 
    mode: 'history'
})

//5 导出router实例
export default router