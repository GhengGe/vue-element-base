<template>
  <!-- 打开标签的容器 -->
  <div class="tags">
    <scroll-pane wrap-class="scrollbar-wrapper">
      <ul>
        <li
          class="tags-li"
          v-for="(item,index) in tagsList"
          :key="index"
          :class="{'active': isActive(item.path)}"
        >
          <router-link :to="item.path" class="tags-li-title">{{ item.title }}</router-link>
          <span class="tags-li-icon" @click="closeTags(index,item.path)">
            <i class="el-icon-close"></i>
          </span>
        </li>
      </ul>
    </scroll-pane>
    <div class="tags-close-box">
      <el-dropdown @command="handleCommand">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
          <!-- <el-dropdown-item command="all">关闭所有</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import ScrollPane from './ScrollPane'
export default {
  created () {
    // 判断标签里面是否有值 有的话直接加载
    console.log('this.tagsList', this.tagsList)
    if (this.tagsList.length === 0) {
      this.setTags(this.$route)
    }
  },
  components: {
    ScrollPane
  },
  computed: {
    // computed 方法里面没有set方法因此不能使用mapState,需要重新定义set方法
    tagsList: {
      get: function () {
        return this.$store.state.tagsList
      },
      set: function (newValue) {
        this.$store.commit('TAGS_LIST', newValue)
        // this.$store.state.tagsList = newValue;
      }
    }
  },
  watch: {
    // 监听路由变化
    $route (newValue, oldValue) {
      this.setTags(newValue)
    }
  },
  methods: {
    // 选中的高亮
    isActive (path) {
      return path === this.$route.fullPath
    },
    handleCommand (command) {
      if (command === 'closeOther') {
        // 关闭其他标签
        const curItem = this.tagsList.filter(item => {
          return item.path === this.$route.fullPath
        })
        this.tagsList = curItem
      }
    },
    // 添加标签
    setTags (route) {
      let isIn = this.tagsList.some(item => {
        // 判断标签是否存在
        return item.path === route.fullPath
      })
      // 不存在
      if (!isIn) {
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name
        })
        // 存到vuex
        this.$store.commit('TAGS_LIST', this.tagsList)
      }
    },
    closeTags (index, path) {
      console.log('closeTags', index, path)
      console.log('this.tagsList', this.tagsList)
      if (this.tagsList.length === 1) {
        this.$message.warning('不可全都关闭')
      } else {
        this.$store.commit('TAGS_LIST', this.tagsList)
      }
      // if (path === this.$route.fullPath) {
      //   console.log('11', this.$store.state.tagsList[this.$store.state.tagsList.length - 1])
      //   // 如果关闭当前直接跳到下一个
      //   this.$router.push(
      //     this.$store.state.tagsList[this.$store.state.tagsList.length - 1]
      //   )
      // }

      // if (path === this.$route.fullPath) {
      //   return
      // }
      // 关闭的标签是最右边的话，往左边跳转一个
      if (index === this.tagsList.length) {
        this.$router.push({ name: this.tagsList[index - 1].name })
      } else {
        // 否则往右边跳转
        this.$router.push({ name: this.tagsList[index].name })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 100px;
  box-shadow: 0 2px 6px #ddd;
  z-index: 10;
}

.tags ul {
  box-sizing: border-box;
  width: 1000%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li.active {
  color: white;
  border: 1px solid #bdb7ff;
  background-color: #bdb7ff;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active .tags-li-title {
  color: white;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  // width: 110px;
  height: 30px;
  background: white;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
<style>
.tags .el-scrollbar .scrollbar-wrapper .el-scrollbar__view {
  overflow: initial !important;
}
</style>
