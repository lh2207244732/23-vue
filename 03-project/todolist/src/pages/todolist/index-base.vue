<!--1 模板-->
<template>
  <div class="Todolist">
    <div class="head">
      <input type="text" v-model="task" />
      <button @click="addItem">提交</button>
    </div>
    <!-- transition-group默认生成span元素 使用tag属性用来更换为其他元素 name属性用来改变类名前缀 -->
    <transition-group class="list" tag="ul" name="fade">
      <li
        class="item"
        v-for="item in list"
        :key="item.id"
        @click="delItem(item.id)"
      >
        {{ item.task }}
      </li>
    </transition-group>
    <p class="footer">共计{{ total }}条数据</p>
  </div>
</template>
<!--2 逻辑-->
<script>
import axios from "axios";
export default {
  name: "Todolist",
  data() {
    return {
      list: [
        { id: 1, task: "learn vue" },
        { id: 2, task: "learn react" },
      ],
      task: "",
    };
  },
  async mounted() {
    //   初始化完成，发送ajax请求
    const result = await axios.get("http://127.0.0.1:3000");
    this.list = result.data;
  },
  methods: {
    addItem() {
      this.list.push({
        id: Date.now(),
        task: this.task,
      }),
        (this.task = "");
    },
    delItem(id) {
      const list = this.list.filter((item) => item.id != id);
      this.list = list;
    },
  },
  computed: {
    total() {
      return this.list.length;
    },
  },
};
</script>
<!--3 样式-->
<style lang="less" scoped>
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
.Todolist .head {
  display: flex;
  height: 40px;
  margin-bottom: 10px;
}
.Todolist .head input {
  width: 700px;
  outline: none;
  padding: 10px;
  font-size: 28px;
}
.Todolist .head button {
  width: 100px;
}
.Todolist .item {
  width: 100%;
  line-height: 40px;
  padding: 5px 0;
  border-bottom: 1px dashed #ccc;
  cursor: pointer;
}
.Todolist .item:hover {
  background-color: #eee;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.footer {
  margin-top: 15px;
}
</style>