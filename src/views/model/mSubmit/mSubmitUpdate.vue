<template>
  <div class="update">
    <span class="el-icon-back back" @click="back()"> 返回</span>
    <h3>&nbsp;&nbsp;&nbsp;修改模型</h3>
    <el-form :model="updateForm"  :rules="updateFormRules" ref="updateFormRef" label-width="94px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="模型名称" prop="name">
            <el-input v-model="updateForm.name" placeholder="请输入模型名称" >模型名称</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="模型编码" prop="code">
            <el-input v-model="updateForm.code" placeholder="请输入模型编码" >模型编码</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="模型格式" prop="type">
             <el-select v-model="updateForm.type" placeholder="请选择模型格式">
                <el-option label="A型" value="1"></el-option>
                <el-option label="B型" value="2"></el-option>
              </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="创建时间" prop="create_time">
            <el-input v-model="updateForm.create_time" placeholder="创建时间" >创建时间</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="提交日期" prop="commit_time">
            <el-input v-model="updateForm.commit_time" placeholder="提交日期" >提交日期</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产出数量" prop="result_num">
            <el-input v-model="updateForm.result_num" placeholder="请输入产出数量" >产出数量</el-input>
          </el-form-item>
        </el-col>
      </el-row>
       <el-row>
        <el-col :span="12">
          <el-form-item label="交付单位" prop="commit_unit">
            <el-input v-model="updateForm.commit_unit" placeholder="请输入交付单位" >交付单位</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产出日期" prop="result_time">
            <el-input v-model="updateForm.result_time" placeholder="请输入产出日期" >产出日期</el-input>
          </el-form-item>
        </el-col>
      </el-row>
       <el-row>
         <el-col :span="12">
          <el-form-item label="产出数量" prop="result_num">
            <el-input v-model="updateForm.result_num" placeholder="请输入产出数量" >产出数量</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注" prop="tips">
            <el-input v-model="updateForm.tips" placeholder="请输入备注" >备注</el-input>
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
      updateForm: {},
      updateFormRules: {}
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
.update {
  max-width: 950px;
  margin: 0 auto;
  padding: 20px 0 50px 0;
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
