<template>
  <div class="user">
    <div class="u_cont" v-if="show == '1'">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-button class="btn-color" @click="submitForm('ruleForm')" icon="el-icon-search">搜索</el-button>
        <el-button class="btn-color" icon="el-icon-plus" @click="addBtn()">添加</el-button>
      </el-form>
      <!-- 添加 -->
      <transition name="fade" >
      <el-form :model="addForm" :rules="addRules" ref="addForm" label-width="80px" class="addRuleForm" label-position="left" v-show="showAdd">
        <el-form-item label="标题" prop="title" class="little">
          <el-input v-model="addForm.title" placeholder="请输入部门名称"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content" class="little">
          <el-input v-model="addForm.content" placeholder="请输入部门全称"></el-input>
        </el-form-item>
        <el-button class="btn-color" @click="addFrom('addForm')">提交</el-button>
        <el-button class="btn-color" >取消</el-button>
      </el-form>
      </transition>
      <!-- 修改 -->
      <transition name="fade" >
      <el-form :model="updateForm" :rules="updateRules" ref="updateForm" label-width="80px" class="updateRuleForm" label-position="left" v-show="showUpdate">
        <el-form-item label="标题" prop="title" class="little">
          <el-input v-model="updateForm.title" placeholder="请输入部门名称"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content" class="little">
          <el-input v-model="updateForm.content" placeholder="请输入部门全称"></el-input>
        </el-form-item>
        <el-button class="btn-color" @click="updateFrom('updateForm')">提交</el-button>
        <el-button class="btn-color" >取消</el-button>
      </el-form>
      </transition>
      <!-- 表格 -->
      <el-table :data="tableData" height="650" border style="width: 100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <el-table-column type="index" width="60"></el-table-column>
          <el-table-column sortable :show-overflow-tooltip="true" prop="id" label="主键id" > </el-table-column>
          <el-table-column sortable :show-overflow-tooltip="true" prop="title" label="标题"> </el-table-column>
          <el-table-column sortable :show-overflow-tooltip="true" prop="type" label="类型" > </el-table-column>
          <el-table-column sortable :show-overflow-tooltip="true" prop="content"  label="内容" > </el-table-column>
          <el-table-column sortable :show-overflow-tooltip="true" prop="createtime"  label="创建时间" v-if="false"> </el-table-column>
          <el-table-column sortable :show-overflow-tooltip="true" prop="creater"  label="创建人" v-if="false"> </el-table-column>
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
        title: '总经理',
        type: '总经理',
        content: '总经理',
        createtime: '总经理',
        creater: '总经理'
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
