<template>
  <div class="system">
    <!-- <h3>{{ $route.meta.title }}</h3> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // title: '角色管理'
    }
  }
}
</script>
<style lang="scss" scoped>
  .system{
    margin: 10px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    h3 {
      font-size: 18px;
      border-top: 4px solid #b7b5b5;
      border-bottom: 1px solid #ccc;
      padding-left: 15px;
      line-height: 48px;
    }
  }

</style>
