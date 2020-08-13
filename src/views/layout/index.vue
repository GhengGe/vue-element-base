<template>
    <div class="cont">
        <asideItem :class="this.$store.state.isCollapse? 'collapse1' : ''"></asideItem>
        <div class="right" :class="this.$store.state.isCollapse? 'collapse2' : ''">
          <div class="header" >
            <headerTop></headerTop>
            <tags></tags>
          </div>
          <div class="contItem">
            <!-- <el-scrollbar > -->
            <router-view ></router-view>
            <!-- </el-scrollbar> -->
          </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import asideItem from '@/components/layout/AsideItem'
import headerTop from '@/components/layout/HeaderTop'
import tags from '@/components/layout/Tags'
export default {
  data () {
    return {
      collapse: ''
    }
  },
  components: {
    asideItem,
    tags,
    headerTop
  },
  computed: {
    ...mapState(['isCollapse'])
  },
  watch: {
    look () {
    }
  }
}
</script>
<style lang="scss" scoped>
  .cont{
    height: 100%;
    .asideItem{
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 180px;
    }
    .right {
      margin-left: 180px;
      height: 100%;
      background-color: #f7f7f7;
      -webkit-transition: margin-left 0.28s;
      transition: margin-left 0.28s;
      .header{
        // position: fixed;
        // top: 0;
        // right: 0;
        // left: 0;
        // margin-left: 180px;
        background-color: #fff;
        z-index: 99;
        .headerTop {
          height: 50px;
        }
      }
      .contItem {
        // background-color: #eee;
        height: calc(100% - 50px);
        // padding: 15px;
        // margin-top: 80px;
        overflow: auto;
      }
    }
  }
  .collapse1 {
    width: 52px!important;
    // animation: width 0.5s ;
    // -moz-animation: width 0.5s ;
    // /* Firefox */
    // -webkit-animation: width 0.5s ;
    // /* Safari 和 Chrome */
    // -o-animation: width 0.5s ;
  }
  .collapse2 {
    margin-left: 52px!important;
    // animation: margin 0.5s ;
    // -moz-animation: margin 0.5s ;
    // /* Firefox */
    // -webkit-animation: margin 0.5s ;
    // /* Safari 和 Chrome */
    // -o-animation: margin 0.5s ;
  }

  @keyframes margin{
  from{
    margin-left: 180px;
  }
  to{
    margin-left: 52px;
  }
}
@keyframes width{
  from{
    width: 180px;
  }
  to{
    width: 52px;
  }
}
</style>
