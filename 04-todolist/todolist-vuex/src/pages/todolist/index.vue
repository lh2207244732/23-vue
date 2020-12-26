<!--1 模板-->
<template>
  <div class="Todolist">
    <Head></Head>
    <List></List>
  </div>
</template>
<!--2 逻辑-->
<script>
import axios from "axios";

//引入组件
import Head from "../../components/head";
import List from "../../components/list";

export default {
  name: "Todolist",
  //注册组件
  components: {
    Head,
    List,
  },
mounted(){
  //组件加载完成，派发action
   this.$store.dispatch('loadItem')
}
};
</script>
<!--3 样式-->
<style lang="less" >
    * {
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
    }
    .Todolist {
      width: 800px;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
    }
</style>