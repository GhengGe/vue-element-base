<template>
    <div class="home">
        <div class="lists">
          <!-- <ul>
            <li>通知一</li>
            <li>通知一</li>
            <li>通知一</li>
            <li>通知一</li>
          </ul> -->
          <el-row :gutter="20">
            <el-col :sm="12" :md="6">
              <div  class="item">
                <div><i class="el-icon-user color1"></i></div>
                <div><p>今日访问</p><p>1024</p></div>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div  class="item">
                <div><i class="el-icon-s-promotion color2"></i></div>
                <div><p>意向表单</p><p>1024</p></div>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div  class="item">
                <div><i class="el-icon-data-line color3"></i></div>
                <div><p>搜集链接</p><p>1024</p></div>
              </div>
            </el-col>
            <el-col :sm="12" :md="6">
              <div  class="item">
                <div><i class="el-icon-view color4"></i></div>
                <div><p>总访问量</p><p>1024</p></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div @click="toggleClick ()" class="">欢迎登录</div>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    toggleClick () {
      console.log('111')
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    // width: 100%;
    // background-color: #fff;
    // height: 100%;
    margin: 15px;
    .lists {
      .item {
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        float: left;
        width: 100%;
        height: 110px;
        line-height: 90px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 2px 2px 2px #ccc;
        margin: 15px 0px;
        padding: 10px;
        box-sizing: border-box;
        div{
          width: 50%;
          float: left;
          // padding: 10px;
          box-sizing: border-box;
          height: 100%;
          p{
            line-height: 30px;
            margin: 0;
            font-size: 20px;
            text-align: center;
          }
        }
        div:nth-child(2){
          padding: 10px;
          box-sizing: border-box;
        }
        i{
          font-size: 60px;
          width: 90px;
          height: 90px;
          line-height: 90px;
          text-align: center;
          border-radius: 8px;
        }
        .color1{
          color: #4d79f6;
        }
        .color2{
          color: #f0b600;
        }
        .color3{
          color: #34a853;
        }
        .color4{
          color: #e2918c;
        }
      }
    }
  }
.item:hover .color1 {
  color: #fff!important;
  background-color: #4d79f6;
}
.item:hover .color2 {
  color: #fff!important;
  background-color: #f0b600;
}
.item:hover .color3 {
  color: #fff!important;
  background-color: #34a853;
}
.item:hover .color4 {
  color: #fff!important;
  background-color: #e2918c;
}
</style>
