<template>
  <div class="user">
    <div class="u_cont" v-if="show == '1'">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入文章标题"></el-input>
        </el-form-item>
        <el-button class="btn-color" @click="submitForm('ruleForm')" icon="el-icon-search">搜索</el-button>
        <el-button class="btn-color" icon="el-icon-plus" @click="addBtn()">添加</el-button>
      </el-form>
      <!-- 表格 -->
      <el-table :data="tableData" height="650" border style="width: 100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <el-table-column type="index" width="60"></el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="id" label="主键id" v-if="false"> </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="title" label="标题" width="100px"> </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="author"  label="作者" width="100px"> </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="content"  label="内容" > </el-table-column>
          <el-table-column :show-overflow-tooltip="true" prop="createtime"  label="创建时间" v-if="false"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="250px">
            <template slot-scope="scope">
              <el-button type="primary" size="small"  title="修改" icon="el-icon-edit" @click="updateBtn(scope.$index, scope.row)">修改</el-button>
              <el-button type="danger" size="small"  title="删除" icon="el-icon-delete">删除</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
    <ms-add v-if="show == '2'" @child="showTable"></ms-add>
    <ms-update v-if="show == '3'" @child="showTable"></ms-update>
  </div>
</template>
<script>
import msAdd from './noticeAdd'
import msUpdate from './noticeUpdate'
export default {
  data () {
    return {
      show: '1',
      showAdd: false, // 显示隐藏添加表单
      showUpdate: false, // 显示隐藏修改表单
      ruleForm: {
        name: '',
        date: []
      },
      rules: {},
      addForm: {
        title: '',
        content: ''
      },
      addRules: {},
      updateForm: {
        title: '',
        content: ''
      },
      updateRules: {},
      tableData: [ {
        id: 3,
        title: '再别康桥',
        author: '徐志摩',
        content: '轻轻的我走了，正如我轻轻的来；我轻轻的招手，作别西天的云彩。那河畔的金柳，是夕阳中的新娘；波光里的艳影，在我的心头荡漾。软泥上的青荇，油油的在水底招摇；在康河的柔波里，我甘心做一条水草！那榆荫下的一潭，不是清泉，是天上虹；揉碎在浮藻间，沉淀着彩虹似的梦。寻梦？撑一支长篙，向青草更青处漫溯；满载一船星辉，在星辉斑斓里放歌。但我不能放歌，悄悄是别离的笙箫；夏虫也为我沉默，沉默是今晚的康桥！悄悄的我走了，正如我悄悄的来；我挥一挥衣袖，不带走一片云彩。'
      }]
    }
  },
  components: {
    msAdd, msUpdate
  },
  // 页面加载自动运行函数
  mounted: function () {
  },
  methods: {
    addBtn () {
      this.show = '2'
      // this.showAdd = true
      // this.showUpdate = false
    },
    showTable (res) {
      this.show = res
    },
    updateBtn () {
      this.show = '3'
      // this.showUpdate = true
      // this.showAdd = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../../assets/css/tableData.scss');
.user {
  position: relative;
  padding: 10px 20px;
  h4 {
    background-color: #e6e6e6;
    line-height: 35px;
    padding-left: 15px;
    font-weight: 500;
  }
  .btn {
    .el-button{
      padding: 8px 12px;
      margin-bottom: 15px;
    }
    .el-button--success {
      background-color: #1ab394;
      border-color: #1ab394;
    }
    span{
      .el-button{
        padding: 9px 12px;
      }
    }
  }
}
.el-form-item{
  margin-right: 20px;
}
</style>
