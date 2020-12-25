<!--整个页面的根组件-->


<!--组件页面的结构-->
<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/todolist">Todolist</router-link>
    </nav>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<!--组件页面逻辑-->
<script>
// 引入组件
import Home from "./pages/home";
// 导出当前组件的配置
export default {
  // 注册组件
  components: {
    Home,
  },
};
</script>

<!--组件页面样式-->
<style lang="less">
</style>
