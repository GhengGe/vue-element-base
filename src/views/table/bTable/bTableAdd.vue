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
          <el-form-item label="访问类型" prop="type">
             <el-select v-model="addForm.type" placeholder="请选择访问类型">
                <el-option label="浏览" value="1"></el-option>
                <el-option label="点击" value="2"></el-option>
                <el-option label="停留" value="3"></el-option>
              </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="动作描述" prop="action">
            <el-input v-model="addForm.action" placeholder="请输入动作描述" >动作描述</el-input>
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
          <el-form-item label="上报时间" prop="create_time">
            <el-input v-model="addForm.create_time" placeholder="请输入上报时间" >上报时间</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
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
