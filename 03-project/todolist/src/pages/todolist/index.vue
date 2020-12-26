<!--1 模板-->
<template>
  <div class="Todolist">
    <Head :addItem="addItem"></Head>
    <List :list="list" :delItem="delItem"></List>
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

  data() {
    return {
      list: [],
      task: "",
    };
  },
  async mounted() {
    //   初始化完成，发送ajax请求
    const result = await axios.get("http://127.0.0.1:3000");
    this.list = result.data;
  },
  methods:{
        addItem(task){
            this.list.push({
                id:Date.now(),
                task:task
            })
        },
        delItem(id){
            const list = this.list.filter(item=>item.id != id)
            this.list = list
        }
    },
  computed: {
    total() {
      return this.list.length;
    },
  },
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