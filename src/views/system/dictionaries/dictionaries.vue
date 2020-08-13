<template>
  <div class="dict">
    <!-- <div class="opera">
       添加
      <el-form :model="addForm" :rules="addRules" ref="addForm" label-width="80px" class="addRuleForm" label-position="left" v-show="showAdd">
        <el-form-item label="类型名称" prop="name">
          <el-input v-model="addForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="类型编码" prop="code">
          <el-input v-model="addForm.code" placeholder="请输入部门全称"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="tips">
          <el-input v-model="addForm.tips" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-button class="btn-color" @click="addFrom('addForm')">提交</el-button>
        <el-button class="btn-color" >取消</el-button>
      </el-form>
      修改
      <el-form :model="updateForm" :rules="updateRules" ref="updateForm" label-width="80px" class="updateRuleForm" label-position="left" v-show="showUpdate">
        <el-form-item label="类型名称" prop="name">
          <el-input v-model="updateForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="类型编码" prop="code">
          <el-input v-model="updateForm.code" placeholder="请输入部门全称"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="tips">
          <el-input v-model="updateForm.tips" placeholder="请输入备注"></el-input>
        </el-form-item>
        <el-button class="btn-color" @click="updateFrom('updateForm')">提交</el-button>
        <el-button class="btn-color" >取消</el-button>
      </el-form>
    </div> -->
    <!-- 表单 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-button class="btn-color" @click="submitForm('ruleForm')" icon="el-icon-search">搜索</el-button>
        <!-- <el-button class="btn-color" icon="el-icon-plus">添加</el-button> -->
    </el-form>
    <!-- 按钮 -->
    <div class="btn">
      <div class="fl clearfix">
        <el-button class="btn-opera" icon="el-icon-plus">添加</el-button>
        <!-- <el-button class="btn-opera" icon="el-icon-edit">修改</el-button>
        <el-button class="btn-opera" icon="el-icon-delete">删除</el-button>
        <el-button class="btn-opera" icon="el-icon-s-custom">权限配置</el-button> -->
      </div>
      <div class="fr clearfix">
        <el-button-group>
          <el-button plain icon="el-icon-refresh-right"></el-button>
          <!-- //筛选按钮 -->
          <el-popover
                placement="bottom"
                title="列筛选"
                width="160"
                trigger="click">
              <el-checkbox-group v-model="checkList" @change="filter">
              <el-checkbox v-for ="(item,index) in tableList" :label="item.label" :key="index">{{item.value}}</el-checkbox>
              </el-checkbox-group>
              <el-button size="small" plain slot="reference" icon="el-icon-s-operation"><i class="el-icon-caret-bottom"></i></el-button>
          </el-popover>
        </el-button-group>
      </div>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" height="650" border style="width: 100%" >
        <el-table-column type="id" label="主键id" header-align="center"
      v-if="uncheckList.id" align="center" sortable></el-table-column>
      <el-table-column prop="name" label="名称" header-align="center"
      v-if="uncheckList.name" align="center" sortable></el-table-column>
      <el-table-column prop="code" label="详情" header-align="center"
      v-if="uncheckList.code" align="center" sortable></el-table-column>
      <el-table-column prop="pid" label="父级字典" header-align="center"
      v-if="uncheckList.pid" align="center" sortable></el-table-column>
      <el-table-column prop="tips" label="备注" header-align="center"
      v-if="uncheckList.tips" align="center" sortable></el-table-column>
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
      addForm: {
        id: '',
        name: '',
        code: '',
        pid: '',
        tips: ''
      },
      addRules: {},
      updateForm: {
        id: '',
        name: '',
        code: '',
        pid: '',
        tips: ''
      },
      updateRules: {},
      tableData: [],
      // 筛选按钮的数据列表，与table表头的数据一致
      tableList: [
        {
          label: 'id',
          value: '主键id'
        }, {
          label: 'name',
          value: '名称'
        }, {
          label: 'code',
          value: '详情'
        }, {
          label: 'pid',
          value: '父级字典'
        }, {
          label: 'tips',
          value: '提示'
        }],
      // 筛选列选中的数据列表
      checkList: [],
      // 控制筛选列显示隐藏
      uncheckList: {}
    }
  },
  // 页面加载自动运行函数
  mounted: function () {
    this.filter()
  },
  methods: {
    // 控制隐藏显示的函数
    filter (val) {
      // 初始化数据
      if (val === undefined) {
        for (let index in this.tableList) {
          let table = this.tableList[index]
          this.checkList.push(table.label)
          this.uncheckList[table.label] = true
        }
      }
      // 数据准备
      for (let item in this.uncheckList) {
        this.uncheckList[item] = false
      }
      // 数据处理
      for (let index in this.checkList) {
        let name = this.checkList[index]
        if (name in this.uncheckList) {
          this.uncheckList[name] = true
        }
      }
      // 强制刷新
      this.$forceUpdate()
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../../assets/css/tableData.scss');
.dict {
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
