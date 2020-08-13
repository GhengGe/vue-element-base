<template>
  <div class="headerTop">
    <div class="fl">
       <!-- <div >1111111111</div> -->
      <i :class="icon" @click="toggleClick()" class="icon"></i>
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="true" @click="toggleClick()">展开</el-radio-button>
        <el-radio-button :label="false"  @click="toggleClick()">收起</el-radio-button>
      </el-radio-group> -->
      <crumb></crumb>
    </div>
    <userInfo class="fr"></userInfo>
  </div>
</template>
<script>
import crumb from '@/components/layout/crumb'
import userInfo from '@/views/userInfo/userInfo'
export default {
  data () {
    return {
      isCollapse: false,
      icon: 'el-icon-s-fold'
    }
  },
  components: {
    crumb,
    userInfo
  },
  computed: {
    getIsCollapse () {
      return this.$store.state.isCollapse
    }
    // getIsCollapse: {
    //   get: function () {
    //     return this.$store.state.isCollapse
    //   },
    //   set: function (newValue) {
    //     this.$store.commit('IS_COLLAPSE', newValue)
    //   }
    // }
  },
  methods: {
    toggleClick () {
      if (this.icon === 'el-icon-s-fold') {
        this.icon = 'el-icon-s-unfold'
      } else {
        this.icon = 'el-icon-s-fold'
      }
      console.log('111', this.isCollapse)
      this.isCollapse = !this.isCollapse
      this.$store.commit('IS_COLLAPSE', this.isCollapse)
    }
  }
}
</script>
<style lang="scss" scoped>
  .headerTop {
    // background-color: pink;
    border-bottom: 1px solid #ccc;
    .icon{
      line-height: 50px;
      font-size: 28px;
      margin-left: 15px;
      float: left;
    }
  }
</style>
