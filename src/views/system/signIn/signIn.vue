<template>
  <div class="user">
    <!-- 表单 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
      <el-form-item label="日志名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入日志名称"></el-input>
      </el-form-item>
      <el-form-item label="起止日期" prop="date" >
        <el-date-picker
        v-model="ruleForm.date"
        type="datetimerange"
        format="yyyy-MM-dd hh:mm:ss"
        value-format="yyyy-MM-dd hh:mm:ss"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-button class="btn-color" @click="submitForm('ruleForm')" icon="el-icon-search">搜索</el-button>
      <el-button class="btn-color" icon="el-icon-delete">清空日志</el-button>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableData" height="650" border style="width: 100%" >
      <el-table-column sortable :show-overflow-tooltip="true" prop="id"  label="主键"> </el-table-column>
      <el-table-column sortable :show-overflow-tooltip="true" prop="logname"  label="日志名称" > </el-table-column>
      <el-table-column sortable :show-overflow-tooltip="true" prop="userid" label="管理员id" > </el-table-column>
      <el-table-column sortable :show-overflow-tooltip="true" prop="createtime" label="创建时间"  > </el-table-column>
      <el-table-column sortable :show-overflow-tooltip="true" prop="succeed" label="是否执行成功" > </el-table-column>
      <el-table-column sortable :show-overflow-tooltip="true" prop="message"  label="具体消息" > </el-table-column>
      <el-table-column sortable :show-overflow-tooltip="true" prop="ip"  label="登录ip" > </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        date: []
      },
      rules: {},
      tableData: [
        {id: '162', logname: '超级管理员', userid: '1', createtime: '24', succeed: '是', message: '13456555', ip: '192.168.1.1'}
      ]
    }
  },
  // 页面加载自动运行函数
  mounted: function () {
  },
  methods: {
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
