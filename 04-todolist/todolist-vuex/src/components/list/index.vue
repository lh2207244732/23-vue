<template>
  <div>
    <transition-group class="list" tag="ul" name="fade">
      <li
        class="item"
        v-for="item in this.$store.state.list"
        :key="item.id"
        @click="delItem(item.id)"
      >
        {{ item.task }}
      </li>
    </transition-group>
    <p class="footer">共计{{ this.$store.getters.total }}条数据</p>
  </div>
</template>

<script>
export default {
  name: "List",
  methods:{
    delItem(id){
      this.$store.commit('delItem',id)
    }
  }
};
</script>

<style lang="less" scoped>
    .item {
      width: 100%;
      line-height: 40px;
      padding: 5px 0;
      border-bottom: 1px dashed #ccc;
      cursor: pointer;
    }
    .item:hover {
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