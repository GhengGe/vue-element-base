<template>
  <div class="monitor">
    <div class="tab-cont">
      <ul class="tab-title">
        <li>
          <a href="https://github.com/alibaba/druid/wiki" target="_blank" class="brand lang" langkey="">Druid Monitor</a>
        </li>
        <li v-for="(item, index) in tablists" :key="item.name" :label="item.lable" :class="{active:active==index}" @click="handleClick(item.lable, item.view, index)">{{item.lable}}</li>
        <li>
          <el-button type="primary" class="btn" plain>重置</el-button>
          <el-button type="primary" class="btn" plain>记录日志并重置</el-button>
        </li>
      </ul>
      <div class="tab-list">
        <div>{{ content }}</div>
        <component :is="currentView"></component>
      </div>
    </div>
  </div>
</template>
<script>
import index from '../../components/tabs/index'
import dataSou from '../../components/tabs/dataSou'
import sql from '../../components/tabs/sql'
import javascript from '../../components/tabs/javascript'
import webApp from '../../components/tabs/webApp'
import vue from '../../components/tabs/vue'
import java from '../../components/tabs/java'
import python from '../../components/tabs/python'
import uniApp from '../../components/tabs/uniApp'
export default {
  data () {
    return {
      active: 0,
      tablists: [
        {view: 'index', lable: '首页'},
        {view: 'dataSou', lable: '数据源'},
        {view: 'sql', lable: 'SQL监控'},
        {view: 'javascript', lable: 'SQL防火墙'},
        {view: 'webApp', lable: 'Web应用'},
        {view: 'vue', lable: 'URI监控'},
        {view: 'java', lable: 'Session监控'},
        {view: 'python', lable: 'spring监控'},
        {view: 'uniApp', lable: 'JSON API'}
      ],
      content: '123',
      currentView: 'index'
    }
  },
  components: {
    index,
    dataSou,
    sql,
    javascript,
    webApp,
    vue,
    java,
    python,
    uniApp
  },
  // 页面加载自动运行函数
  mounted: function () {
  },
  methods: {
    // 切换栏
    handleClick (name, view, num) {
      console.log(name, num)
      this.content = name
      this.active = num
      this.currentView = view
      // for (let i in this.tablists) {
      //   console.log(this.tablists[i])
      //   if (i === num) {
      //     this.tablists[i].active = true
      //   } else {
      //     this.tablists[i].active = false
      //   }
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../assets/css/tableData.scss');
.monitor {
  position: relative;
  padding: 10px;
  background-color: #fff;
  margin: 10px;
  height: 700px;
  // .tab {
  //   // text-align: center;
  // }
  .tab-cont {
    .tab-title {
      border-bottom: 1px solid #eee;
      height: 30px;
      font-size: 12px;
      li {
        a {
          font-size: 20px;
        }
        float: left;
        padding: 0 10px;
        line-height: 30px;
        cursor: pointer;
      }
      li:hover {
        color: #409EFF;
      }
    }
    .tab-list {

    }
  }
}
.btn {
  padding: 6px 15px;
}
.active {
  background-color: #d5e9ff;
  color: #409eff;
  border-radius: 4px 4px 0 0;
}
</style>
