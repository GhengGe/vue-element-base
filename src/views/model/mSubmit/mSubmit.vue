<template>
  <div class="mSubmit">
    <!-- <transition name="fade"> -->
    <div class="i_cont" v-if="show == '1'">
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
        <el-table-column prop="id" label="id" v-if="uncheckList.id" align="center"></el-table-column>
        <el-table-column prop="name" label="模型名称" v-if="uncheckList.name" align="center"></el-table-column>
        <el-table-column prop="code" label="模型编码" v-if="uncheckList.code" align="center"></el-table-column>
        <el-table-column prop="type" label="模型格式" v-if="uncheckList.type" align="center"></el-table-column>
        <el-table-column prop="creater" label="创建人" v-if="uncheckList.creater" align="center"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" v-if="uncheckList.create_time" align="center"></el-table-column>
        <el-table-column prop="versio" label="版本号" v-if="uncheckList.versio" align="center"></el-table-column>
        <el-table-column prop="commit_time" label="提交日期" v-if="uncheckList.commit_time" align="center"></el-table-column>
        <el-table-column prop="plan_num" label="计划数量" v-if="uncheckList.plan_num" align="center"></el-table-column>
        <el-table-column prop="commit_unit" label="交付单位" v-if="uncheckList.commit_unit" align="center"></el-table-column>
        <el-table-column prop="result_time" label="产出日期" v-if="uncheckList.result_time" align="center"></el-table-column>
        <el-table-column prop="result_num" label="产出数量" v-if="uncheckList.result_num" align="center"></el-table-column>
        <el-table-column prop="tips" label="备注" v-if="uncheckList.tips" align="center"></el-table-column>
        <el-table-column prop="down_model" label="下载模型" v-if="uncheckList.down_model" align="center"></el-table-column>
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
import msAdd from './mSubmitAdd'
import msUpdate from './mSubmitUpdate'
export default {
  data () {
    return {
      show: '1',
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
      tableData: [
        { id: '52',
          name: '52',
          code: '52',
          type: '52',
          creater: '52',
          create_time: '52',
          versio: '52',
          commit_time: '52',
          plan_num: '52',
          commit_unit: '52',
          result_time: '52',
          result_num: '52',
          tips: '52',
          down_model: '52'
        }
      ],
      // 筛选按钮的数据列表，与table表头的数据一致
      tableList: [
        {
          label: 'id',
          value: 'id',
          checked: false
        }, {
          label: 'name',
          value: '模型名称',
          checked: true
        }, {
          label: 'code',
          value: '模型编码',
          checked: true
        }, {
          label: 'type',
          value: '模型格式',
          checked: true
        }, {
          label: 'creater',
          value: '创建人',
          checked: false
        }, {
          label: 'create_time',
          value: '创建时间',
          checked: true
        }, {
          label: 'commit_time',
          value: '提交日期',
          checked: true
        }, {
          label: 'versio',
          value: '版本',
          checked: true
        }, {
          label: 'plan_num',
          value: '计划数量',
          checked: true
        }, {
          label: 'commit_unit',
          value: '交付单位',
          checked: true
        }, {
          label: 'result_time',
          value: '产出日期',
          checked: true
        }, {
          label: 'down_model',
          value: '下载模型',
          checked: true
        }, {
          label: 'result_num',
          value: '产出数量',
          checked: false
        }, {
          label: 'tips',
          value: '备注',
          checked: false
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
    msAdd,
    msUpdate
  },
  // 页面加载自动运行函数
  mounted: function () {
    this.filter()
  },
  methods: {
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
.mSubmit {
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
