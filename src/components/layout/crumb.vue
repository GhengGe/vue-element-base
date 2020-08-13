<template>
    <div class="crumb">
        <!-- 面包屑导航区域 -->
        <el-breadcrumb separator="/" class="nav">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <transition name="fade" mode="out-in">
                <el-breadcrumb-item >{{$route.meta.title === '通知'? '' : $route.meta.title}}</el-breadcrumb-item>
                <!-- <el-breadcrumb-item else >{{$route.meta.title}}</el-breadcrumb-item> -->
            </transition>
        </el-breadcrumb>

    </div>
</template>
<script>
export default {
  components: {
  },
  methods: {

  }
}
</script>
<style  lang="scss" scoped>
  .crumb {
    margin-left: 55px;
    // position: fixed;
    // top: 0;
    z-index: 15;
  }
  .el-breadcrumb {
    font-size: 18px;
    line-height: 50px;
}
</style>
