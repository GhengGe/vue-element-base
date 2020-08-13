<template>
  <div class="add">
    <span class="el-icon-back back" @click="back()"> 返回</span>
    <h3>&nbsp;&nbsp;&nbsp;添加记录</h3>
    <el-form :model="addForm"  :rules="addFormRules" ref="addFormRef" label-width="94px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="addForm.title" placeholder="请输入标题" >标题</el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model="addForm.author" placeholder="请输入作者" >作者</el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <div id="editorMenu" class="editorMenu"></div>
        <div id="editor" class="editor"></div>
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button class="btn-opera" type="primary" @click="submit()">确定</el-button>
      <el-button class="btn-opera" type="primary" plain @click="back()">取消</el-button>
    </div>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
  data () {
    return {
      show: '1',
      addForm: {},
      addFormRules: {},
      editor: ''
    }
  },
  mounted () {
    this.editor = new E('#editorMenu', '#editor')
    this.editor.create()
  },
  methods: {
    back () {
      this.$emit('child', this.show)
    },
    submit () {
      this.editor.txt.html()// 获取富文本编辑器里面的内容
      this.editor.txt.text()
      console.log(this.editor.txt.html(), this.editor.txt.text())
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
.editorMenu {
  border: 1px solid #ccc;
}
.editor {
  margin-top: -1px;
  border: 1px solid #ccc;
  min-height: 400px;
  height: auto;
}
</style>
