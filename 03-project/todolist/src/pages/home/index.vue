<!--1 模板-->
<template>
  <div class="home">{{ msg }} home page</div>
</template>

<!--2 逻辑-->
<script>
//导出当前组件的配置
export default {
  name: "Home",
  data() {
    return {
      msg: "hello",
    };
  },
};
</script>

<!--3 样式-->
<!--scoped 样式只对当前组件有效 原理是为当前组件自动生成一个属性，然后利用属性选择器选中添加样式-->
<style lang="less" scoped>
@priary-color: #f21;
div {
  color: @priary-color;
}
</style>