<template>
  <div class="aside" >
    <el-scrollbar class="scroll-container" >
    <el-menu :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#fff"
      text-color="#3b4956"
      :unique-opened= true
      active-text-color="#57afff"
      router>
      <h2></h2>
      <el-menu-item index="home">
        <i class="el-icon-message-solid"></i>
        <span slot="title">通知</span>
      </el-menu-item>

      <el-submenu index="table">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span slot="title">表格</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="btable">基本表格</el-menu-item>
            <el-menu-item index="tExcel">导为Excel</el-menu-item>
            <el-menu-item index="tJson">导为JSON</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="user">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="tab">
        <i class="el-icon-tickets"></i>
        <span slot="title">Tab切换</span>
      </el-menu-item>

      <el-submenu index="system">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="role">角色管理</el-menu-item>
            <el-menu-item index="menu">菜单管理</el-menu-item>
            <el-menu-item index="notice">通知管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['isCollapse'])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
  }
  .router-link-active {
    text-decoration: none;
  }
.el-menu-item:hover {
    background-color: #e6f3ff!important;
  }
  .el-scrollbar__wrap{
      overflow-y: auto;
      overflow-x: scroll;
}
.el-scrollbar__bar.is-vertical {
  width: 3px;
}
.el-scrollbar__bar.is-horizontal{
  height: 0;
  left: 0;
}
</style>
<style lang="scss" scoped>
.collapse-width {
    width: 64px !important;
}
  .aside{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 180px;
    .el-menu {
      height: 100%;
      // overflow-y: auto;
      overflow-x: hidden;
      h2{
        line-height: 56px;
        text-align: center;
        font-size: 50px;
        color: #91cbff;
        width: 180px;
        height: 56px;
        background: url("../../assets/img/title1.jpg") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .el-submenu .el-menu-item{
    border-left: 3px solid #81c3ff;
    min-width: 180px;
  }
>>>.el-submenu__title:hover{
  background-color: #e6f3ff!important;
}
.scroll-container {
  height: 100%;
  overflow-x: hidden;
}
</style>
