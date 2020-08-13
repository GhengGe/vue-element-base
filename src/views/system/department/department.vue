<template>
  <div class="user">
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
      <el-form-item label="部门名称" prop="simplename" class="little">
        <el-input v-model="addForm.simplename" placeholder="请输入部门名称"></el-input>
      </el-form-item>
      <el-form-item label="部门全称" prop="fullname" class="little">
        <el-input v-model="addForm.fullname" placeholder="请输入部门全称"></el-input>
      </el-form-item>
      <el-form-item label="上级部门" prop="pid" class="little">
        <el-input v-model="addForm.pid" placeholder="请输入上级部门"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="tips" class="little">
        <el-input v-model="addForm.tips" placeholder="请输入备注"></el-input>
      </el-form-item>
      <el-button class="btn-color" @click="addFrom('addForm')">提交</el-button>
      <el-button class="btn-color" >取消</el-button>
    </el-form>
    </transition>
    <!-- 修改 -->
    <transition name="fade" >
    <el-form :model="updateForm" :rules="updateRules" ref="updateForm" label-width="80px" class="updateRuleForm" label-position="left" v-show="showUpdate">
       <el-form-item label="部门名称" prop="simplename" class="little">
        <el-input v-model="updateForm.simplename" placeholder="请输入部门名称"></el-input>
      </el-form-item>
      <el-form-item label="部门全称" prop="fullname" class="little">
        <el-input v-model="updateForm.fullname" placeholder="请输入部门全称"></el-input>
      </el-form-item>
      <el-form-item label="上级部门" prop="pid" class="little">
        <el-input v-model="updateForm.pid" placeholder="请输入上级部门"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="tips" class="little">
        <el-input v-model="updateForm.tips" placeholder="请输入备注"></el-input>
      </el-form-item>
      <el-button class="btn-color" @click="updateFrom('updateForm')">提交</el-button>
      <el-button class="btn-color" >取消</el-button>
    </el-form>
    </transition>
    <!-- 表格 -->
    <el-table :data="tableData" height="450" border style="width: 100%" row-key="id" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column type="index" width="60"></el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="id" label="主键id" > </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="simplename" label="部门简称"> </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="fullname" label="部门全称" > </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="tips"  label="备注" > </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="pid"  label="父部门id" v-if="false"> </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="pids"  label="父级ids" v-if="false"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="250px">
          <template slot-scope="scope">
            <el-button type="primary" size="small"  title="修改" icon="el-icon-edit" @click="updateBtn(scope.$index, scope.row)">修改</el-button>
            <el-button type="danger" size="small"  title="删除" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showAdd: false, // 显示隐藏添加表单
      showUpdate: false, // 显示隐藏修改表单
      ruleForm: {
        name: '',
        date: []
      },
      rules: {},
      addForm: {
        simplename: '',
        fullname: '',
        pid: '',
        tips: ''
      },
      addRules: {},
      updateForm: {
        simplename: '',
        fullname: '',
        pid: '',
        tips: ''
      },
      updateRules: {},
      tableData: [ {
        id: 3,
        simplename: '总经理',
        fullname: '总经理',
        tips: '总经理',
        children: [{
          id: 31,
          simplename: '2016-05-01',
          fullname: '王小虎',
          tips: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          simplename: '2016-05-01',
          fullname: '王小虎',
          tips: '上海市普陀区金沙江路 1519 弄'
        }]
      }]
    }
  },
  // 页面加载自动运行函数
  mounted: function () {
  },
  methods: {
    addBtn () {
      this.showAdd = true
      this.showUpdate = false
    },
    updateBtn () {
      this.showUpdate = true
      this.showAdd = false
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
