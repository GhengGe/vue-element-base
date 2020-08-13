<template>
  <div class="dict">
    <!-- 表单 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
      <el-form-item label="日志名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入日志名称"></el-input>
      </el-form-item>
      <el-form-item label="日志类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择日志类型">
          <el-option label="全部" value="1"></el-option>
          <el-option label="业务日志" value="2"></el-option>
          <el-option label="异常日志" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="起止日期" prop="date" >
        <el-date-picker
        v-model="ruleForm.date"
        type="datetimerange"
        format="yyyy-MM-dd hh:mm:ss"
        value-format="yyyy-MM-dd hh:mm:ss"
        start-placeholder="开始时间"
        end-placeholder="结束时间">
        </el-date-picker>
      </el-form-item>
      <el-button class="btn-color" @click="submitForm('ruleForm')" icon="el-icon-search">搜索</el-button>
        <!-- <el-button class="btn-color" icon="el-icon-plus">添加</el-button> -->
    </el-form>
    <!-- 按钮 -->
    <div class="btn">
      <div class="fl clearfix">
        <!-- <el-button class="btn-opera" icon="el-icon-plus">查看详情</el-button> -->
        <el-button class="btn-opera" icon="el-icon-plus">清空日志</el-button>
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
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                :current-page.sync="currentPage" height="650" border style="width: 100%" >
      <el-table-column prop="id" label="id" header-align="center" v-if="uncheckList.id" align="center" sortable></el-table-column>
      <el-table-column prop="logtype" label="日志类型" header-align="center" v-if="uncheckList.logtype" align="center" sortable></el-table-column>
      <el-table-column prop="logname" label="日志名称" header-align="center" v-if="uncheckList.logname" align="center" sortable></el-table-column>
      <el-table-column prop="userid" label="用户名称" header-align="center" v-if="uncheckList.userid" align="center" sortable></el-table-column>
      <el-table-column prop="classname" label="类名" header-align="center" v-if="uncheckList.classname" align="center" sortable></el-table-column>
      <el-table-column prop="method" label="方法名称" header-align="center" v-if="uncheckList.method" align="center" sortable></el-table-column>
      <el-table-column prop="createtime" label="创建时间" header-align="center" v-if="uncheckList.createtime" align="center" sortable></el-table-column>
      <el-table-column prop="succeed" label="是否成功" header-align="center" v-if="uncheckList.succeed" align="center" sortable></el-table-column>
      <el-table-column prop="message" label="备注" header-align="center" v-if="uncheckList.message" align="center" sortable></el-table-column>
      <el-table-column fixed="right" label="操作" width="100px">
          <template slot-scope="scope">
            <el-button size="small"  title="查看详情" @click="deleteModel()"> 查看详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 50, 100]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
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
      tableData: [{
        logtype: '1'
      }],
      // 筛选按钮的数据列表，与table表头的数据一致
      tableList: [
        {
          label: 'id',
          value: 'id'
        }, {
          label: 'logtype',
          value: '日志类型'
        }, {
          label: 'logname',
          value: '日志名称'
        }, {
          label: 'userid',
          value: '用户名称'
        }, {
          label: 'classname',
          value: '类名'
        }, {
          label: 'method',
          value: '方法名称'
        }, {
          label: 'createtime',
          value: '创建时间'
        }, {
          label: 'succeed',
          value: '是否成功'
        }, {
          label: 'message',
          value: '备注'
        }],
      // 筛选列选中的数据列表
      checkList: [],
      // 控制筛选列显示隐藏
      uncheckList: {},
      currentPage: 1,
      pagesize: 10,
      total: 1
    }
  },
  // 页面加载自动运行函数
  mounted: function () {
    this.filter()
  },
  methods: {
    // 分页
    handleSizeChange (val) {
      this.pagesize = val
    },
    handleCurrentChange (val) {
      this.currentPage = val
    },
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
