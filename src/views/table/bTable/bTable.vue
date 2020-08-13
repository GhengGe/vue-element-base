<template>
  <div class="btable">
    <!-- <transition name="fade"> -->
    <div class="i_cont" v-if="show == '1'">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
        <el-form-item label="页面代码" prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入页面代码"></el-input>
        </el-form-item>
        <el-form-item label="停留时间" prop="res_time">
          <el-input v-model="ruleForm.res_time" placeholder="请输入停留时间"></el-input>
        </el-form-item>
        <el-form-item label="日志类型" prop="journal_type">
          <el-select v-model="ruleForm.journal_type" placeholder="请选择日志类型">
            <el-option label="全部类型" value="1"></el-option>
            <el-option label="访问记录" value="2"></el-option>
            <el-option label="点击记录" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间范围" prop="date">
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
          <!-- <el-button class="btn-color" icon="el-icon-plus">添加</el-button> -->
      </el-form>
      <!-- 按钮 -->
      <div class="btn">
        <div class="fl clearfix">
          <el-button class="btn-opera" icon="el-icon-plus" @click="addModel()">添加</el-button>
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
                :current-page.sync="currentPage" height="550" border style="width: 100%" >
        <el-table-column type="index" width="60" label="序号"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="id" label="ID" v-if="uncheckList.id" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="accip" label="访问IP" v-if="uncheckList.accip" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="ucode" label="页面代码" v-if="uncheckList.ucode" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="cid" label="城市编号" v-if="uncheckList.cid" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="cname" label="地区名称" v-if="uncheckList.cname" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="type" label="访问类型" v-if="uncheckList.type" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.type == 1" class="ta_btn" style="background-color:#bdb7ff">访问</span>
            <span v-else class="ta_btn" style="background-color:#ffc107;">点击</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="action" label="动作描述" v-if="uncheckList.action" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="remain" label="停留(秒)" v-if="uncheckList.remain" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="useragent" label="终端类型" v-if="uncheckList.useragent" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="create_time" label="上报时间" v-if="uncheckList.create_time" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100px">
          <template slot-scope="scope">
            <el-button type="primary" round size="small"  title="修改" icon="el-icon-edit" @click="updateModel()"></el-button>
            <el-button type="danger" round size="small"  title="删除" icon="el-icon-delete" @click="deleteModel()"></el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column v-for="item in tableList" :key="item" :prop="item.lable" :label="item.value" header-align="center"  align="center"></el-table-column> -->
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
    <!-- </transition> -->
    <!-- <transition name="fade"> -->
    <ms-add v-if="show == '2'" @child="showTable"></ms-add>
    <!-- </transition> -->
    <!-- <transition name="fade"> -->
    <ms-update v-if="show == '3'" @child="showTable"></ms-update>
    <!-- </transition> -->
  </div>
</template>
<script>
import msAdd from './bTableAdd'
import msUpdate from './bTableUpdate'
export default {
  data () {
    return {
      show: '1',
      ruleForm: {
        code: '',
        res_time: '',
        journal_type: [],
        date: []
      },
      rules: {},
      tableData: [
        { id: '52',
          accip: '52',
          ucode: '52',
          cid: '52',
          cname: '52',
          type: '1',
          action: '52',
          remain: '52',
          useragent: '52',
          create_time: '52'
        }
      ],
      // 筛选按钮的数据列表，与table表头的数据一致
      tableList: [
        {
          label: 'id',
          value: 'ID',
          checked: false
        }, {
          label: 'accip',
          value: '访问IP',
          checked: true
        }, {
          label: 'ucode',
          value: '页面代码',
          checked: true
        }, {
          label: 'cid',
          value: '城市编号',
          checked: false
        }, {
          label: 'cname',
          value: '地区名称',
          checked: true
        }, {
          label: 'type',
          value: '访问类型',
          checked: true
        }, {
          label: 'action',
          value: '动作描述',
          checked: true
        }, {
          label: 'remain',
          value: '停留时间',
          checked: true
        }, {
          label: 'useragent',
          value: '终端类型',
          checked: true
        }, {
          label: 'create_time',
          value: '上报时间',
          checked: true
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
  components: {
    msAdd, msUpdate
  },
  // 页面加载自动运行函数
  mounted: function () {
    this.filter()
  },
  methods: {
    // 搜索
    submitForm (formName) {
      this.$refs[formName].validate(async valid => {
        // if (!valid) {
        //   this.$message.error('校验不通过')
        //   return
        // }
        // this.$http.post('/mgr/list', { }).then((res) => {
        //   this.tableData = res
        // }).catch(err => {
        //   if (err) {
        //     console.log(err)
        //   }
        //   alert('请求失败')
        // })
      })
    },
    // 添加
    addModel () {
      this.show = '2'
    },
    showTable (res) {
      this.show = res
    },
    // 修改
    updateModel () {
      this.show = '3'
    },
    // 删除
    deleteModel () {},
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
          if (this.tableList[index].checked === true) {
            this.checkList.push(table.label)
          } else {
            // console.log(table.label)
          }
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
.btable {
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
