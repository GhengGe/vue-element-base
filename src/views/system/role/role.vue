<template>
  <div class="user">
    <!-- 表单 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入角色名称"></el-input>
      </el-form-item>
      <el-button class="btn-color" @click="submitForm('ruleForm')" icon="el-icon-search">搜索</el-button>
      <el-button class="btn-color" icon="el-icon-plus" @click="addBtn()">添加</el-button>
    </el-form>
    <!-- 添加 -->
    <transition name="fade" >
    <el-form :model="addForm" :rules="addRules" ref="addForm" label-width="80px" class="addRuleForm" label-position="left" v-show="showAdd">
      <el-form-item label="角色名称" prop="name" class="little">
        <el-input v-model="addForm.name" placeholder="请输入角色名称"></el-input>
      </el-form-item>
      <el-form-item label="   别名" prop="tips" class="little">
        <el-input v-model="addForm.tips" placeholder="请输入别名"></el-input>
      </el-form-item>
      <el-form-item label="上级角色" prop="pid" class="little">
        <el-input v-model="addForm.pid" placeholder="请输入上级角色"></el-input>
      </el-form-item>
      <!-- <el-form-item label="   排序" prop="num" class="little">
        <el-input v-model="addForm.num" placeholder="请输入角色名称"></el-input>
      </el-form-item> -->
      <el-form-item label="部门名称" prop="deptid" class="little">
        <el-input v-model="addForm.deptid" placeholder="请输入部门名称"></el-input>
      </el-form-item>
      <el-button class="btn-color" @click="addFrom('addForm')">提交</el-button>
      <el-button class="btn-color" >取消</el-button>
    </el-form>
    </transition>
    <!-- 修改 -->
    <transition name="fade" >
    <el-form :model="updateForm" :rules="updateRules" ref="updateForm" label-width="80px" class="updateRuleForm" label-position="left" v-show="showUpdate">
      <el-form-item label="角色名称" prop="name" class="little">
        <el-input v-model="updateForm.name" placeholder="请输入角色名称"></el-input>
      </el-form-item>
      <el-form-item label="   别名" prop="tips" class="little">
        <el-input v-model="updateForm.tips" placeholder="请输入别名"></el-input>
      </el-form-item>
      <el-form-item label="上级角色" prop="pid" class="little">
        <el-input v-model="updateForm.pid" placeholder="请输入上级角色"></el-input>
      </el-form-item>
      <!-- <el-form-item label="   排序" prop="num" class="little">
        <el-input v-model="updateForm.num" placeholder="请输入角色名称"></el-input>
      </el-form-item> -->
      <el-form-item label="部门名称" prop="deptid" class="little">
        <el-input v-model="updateForm.deptid" placeholder="请输入部门名称"></el-input>
      </el-form-item>
      <el-button class="btn-color" @click="updateFrom('updateForm')">提交</el-button>
      <el-button class="btn-color" >取消</el-button>
    </el-form>
    </transition>
    <!-- 表格 -->
    <el-table :data="tableData" height="650" border style="width: 100%" >
        <el-table-column sortable :show-overflow-tooltip="true" prop="num"  width="排序"> </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="id"  width="id" v-if="false"> </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="name" label="名称" > </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="pid" label="上级角色"  > </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="deptid" label="所在部门" > </el-table-column>
        <el-table-column sortable :show-overflow-tooltip="true" prop="tips"  label="别名" > </el-table-column>
        <el-table-column fixed="right" label="操作" width="250px">
          <template slot-scope="scope">
            <el-button type="primary" size="small"  title="修改" icon="el-icon-edit" @click="updateBtn(scope.$index, scope.row)">修改</el-button>
            <el-button type="danger" size="small"  title="删除" icon="el-icon-delete">删除</el-button>
            <el-button type="warning" size="small"  title="权限配置" icon="el-icon-s-custom">权限配置</el-button>
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
        name: ''
      },
      rules: {},
      addForm: {
        name: '',
        tips: '',
        pid: '',
        deptid: ''
      },
      addRules: {},
      updateForm: {
        name: '',
        tips: '',
        pid: '',
        deptid: ''
      },
      updateRules: {},
      tableData: [
        {num: '1', name: '超级管理员', pid: '0', deptid: '24', tips: 'administrator'}
      ]
    }
  },
  // 页面加载自动运行函数
  mounted: function () {
  },
  methods: {
    submitForm () {},
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
