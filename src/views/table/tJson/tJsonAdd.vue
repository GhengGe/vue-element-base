<template>
  <div class="add">
    <span class="el-icon-back back" @click="back()"> 返回</span>
    <h3>&nbsp;&nbsp;&nbsp;添加记录</h3>
    <el-form :model="addForm"  :rules="addFormRules" ref="addFormRef" label-width="94px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="ID" prop="id">
            <el-input v-model="addForm.id" placeholder="请输入ID" >ID</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="访问IP" prop="accip">
            <el-input v-model="addForm.accip" placeholder="请输入访问IP" >访问IP</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="页面代码" prop="type">
            <el-input v-model="addForm.type" placeholder="页面代码" >页面代码</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="提交姓名" prop="name">
            <el-input v-model="addForm.name" placeholder="请输入提交姓名" >提交姓名</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="提交电话" prop="phone">
            <el-input v-model="addForm.phone" placeholder="请输入提交电话" >提交电话</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="提交QQ" prop="qq">
            <el-input v-model="addForm.qq" placeholder="请输入提交QQ" >提交QQ</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="提交建议" prop="content">
            <el-input v-model="addForm.content" placeholder="请输入提交建议" >提交建议</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="终端类型" prop="useragent">
            <el-input v-model="addForm.useragent" placeholder="请输入终端类型" >终端类型</el-input>
          </el-form-item>
        </el-col>
      </el-row>
       <el-row>
        <el-col :span="12">
          <el-form-item label="状态" prop="status">
            <el-select v-model="addForm.status" placeholder="请选择状态">
              <el-option label="正常" value="1"></el-option>
              <el-option label="无效" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="提交时间" prop="create_time">
            <el-input v-model="addForm.create_time" placeholder="请输入提交时间" >提交时间</el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btn">
      <el-button class="btn-opera" type="primary">确定</el-button>
      <el-button class="btn-opera" type="primary" plain @click="back()">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: '1',
      addForm: {},
      addFormRules: {}
    }
  },
  methods: {
    back () {
      this.$emit('child', this.show)
    }
  }
}
</script>
<style lang="scss" scoped>
.add {
  max-width: 950px;
  margin: 0 auto;
  padding: 20px 0 100px 0;
  .back {
    color: #409eff;
    cursor: pointer;
  }
  .back:hover {
    color: #007dff;
  }
  h3 {
    line-height: 50px;
    margin: 20px 0;
    color: #444141;
  }
  .btn{
    text-align: right;
  }
}
.el-select {
  width: 100%!important;
}
</style>
