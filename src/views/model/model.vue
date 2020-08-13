<template>
  <div class="model">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
  .model{
    margin: 10px;
    // padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
  }

</style>
