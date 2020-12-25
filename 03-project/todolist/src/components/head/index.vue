<template>
  <div class="head">
    <input type="text" v-model="task" />
    <button @click="addItem">提交</button>
  </div>
</template>

<script>
name: "Head";
export default {};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  height: 40px;
  margin-bottom: 10px;
}
.head input {
  width: 700px;
  outline: none;
  padding: 10px;
  font-size: 28px;
}
.head button {
  width: 100px;
}
</style>