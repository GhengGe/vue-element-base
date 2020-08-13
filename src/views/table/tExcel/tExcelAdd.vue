<template>
  <div class="add">
    <span class="el-icon-back back" @click="back()"> 返回</span>
    <h3>&nbsp;&nbsp;&nbsp;添加记录</h3>
    <el-form :model="addForm"  :rules="addFormRules" ref="addFormRef" label-width="94px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="链接ID" prop="id">
            <el-input v-model="addForm.id" placeholder="请输入链接ID" >链接ID</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户代码" prop="custom_code">
            <el-input v-model="addForm.custom_code" placeholder="请输入客户代码" >客户代码</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="关键字" prop="keyword">
            <el-input v-model="addForm.keyword" placeholder="关键字" >关键字</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="搜集IP" prop="ip">
            <el-input v-model="addForm.ip" placeholder="搜集IP" >搜集IP</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="页面标题" prop="title">
            <el-input v-model="addForm.title" placeholder="请输入页面标题" >页面标题</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="搜集时间" prop="craw_time">
            <el-input v-model="addForm.craw_time" placeholder="请输入搜集时间" >搜集时间</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="搜索引擎" prop="searchtype">
            <el-input v-model="addForm.searchtype" placeholder="请输入搜索引擎" >搜索引擎</el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户端" prop="agent">
            <el-input v-model="addForm.agent" placeholder="请输入客户端" >客户端</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="协议类型" prop="urltype">
            <el-select v-model="addForm.urltype" placeholder="请选择协议类型">
              <el-option label="Https" value="1"></el-option>
              <el-option label="Http" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="检查人" prop="examiner">
            <el-input v-model="addForm.examiner" placeholder="请输入检查人" >检查人</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="链接类型" prop="isad">
            <el-select v-model="addForm.isad" placeholder="请选择链接类型">
              <el-option label="广告" value="1"></el-option>
              <el-option label="资讯" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="Url" prop="url">
            <el-input v-model="addForm.url" placeholder="请输入Url" >Url</el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="状态" prop="status">
            <el-select v-model="addForm.status" placeholder="请选择状态">
              <el-option label="未检查" value="1"></el-option>
              <el-option label="有效" value="2"></el-option>
              <el-option label="无效" value="3"></el-option>
              <el-option label="校正" value="4"></el-option>
            </el-select>
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
