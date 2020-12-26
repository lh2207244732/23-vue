import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//1 按照安装Vuex
Vue.use(Vuex)

//2 生成一个store实例，注意，整个应用只能有一个store实例
const store = new Vuex.Store({

        state,

        //store的计算属性
        getters,

        //处理派发过来的action
        actions,

        //mutations的处理方法必须是同步函数，是唯一改变state数据的方法
        mutations
})
//到处store实例
export default store