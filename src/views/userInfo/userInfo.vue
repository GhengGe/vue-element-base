<template>
  <div class="userInfo">
    <div class="img">
     <el-avatar shape="square" :size="40" :src="require('../../assets/img/tou.jpg')"></el-avatar>
     <!-- <img src="../../assets/img/tou.jpg" alt="头像" style="width: 40px; height:40px;"> -->
    </div>
    <div class="name">
      <span>{{ name }}</span><br>
      <el-popover
        placement="bottom"
        width="100"
        trigger="click">
        <div class="down">
          <router-link to="/userData" class="lists">个人中心</router-link>
          <!-- <router-link to="/userData" class="lists">修改密码</router-link> -->
          <hr>
          <router-link to="/userData" class="lists">安全退出</router-link>
        </div>
        <el-button slot="reference">{{ grade }} <i class="el-icon-caret-bottom"></i></el-button>
      </el-popover>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // url: '../../assets/img/tou.jpg',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      name: '胡图图',
      grade: '超级管理员'
    }
  }
}
</script>
<style lang="scss" scoped>
  .userInfo {
    margin-top: 5px;
    .img{
      float: left;
    }
    .name {
      float: left;
      margin-left: 15px;
      margin-right: 30px;
    }
  }
  .el-button{
    padding: 5px 0;
    border: none;
  }
  .down{
    .lists {
      display: block;
      padding: 8px;
    }
    .lists:hover {
      background-color: #eee;
      border-radius: 4px;
    }
  }
</style>
