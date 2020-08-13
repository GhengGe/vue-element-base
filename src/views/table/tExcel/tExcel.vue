<template>
  <div class="tExcel">
    <!-- <transition name="fade"> -->
    <div class="i_cont" v-if="show == '1'">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
        <el-form-item label="页面代码" prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入页面代码"></el-input>
        </el-form-item>
        <el-button class="btn-color" @click="submitForm('ruleForm')" icon="el-icon-search">搜索</el-button>
      </el-form>
      <!-- 按钮 -->
      <div class="btn">
        <div class="fl clearfix">
          <el-button class="btn-opera" icon="el-icon-plus" @click="addModel()">添加</el-button>
          <el-button class="btn-opera" icon="el-icon-download" @click="downloadExcel()">导出表格</el-button>
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
        <el-table-column :show-overflow-tooltip="true" prop="id" label="链接ID" v-if="uncheckList.id" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="keyword" label="关键字" v-if="uncheckList.keyword" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="ip" label="搜集IP" v-if="uncheckList.ip" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="title" label="页面标题" v-if="uncheckList.title" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="craw_time" label="搜集时间" v-if="uncheckList.craw_time" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="searchtype" label="搜索引擎" v-if="uncheckList.searchtype" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="agent" label="客户端" v-if="uncheckList.agent" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="urltype" label="协议类型" v-if="uncheckList.urltype" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.urltype == 1" class="ta_btn" style="background-color:#009688">Https</span>
            <span v-else class="ta_btn" style="background-color:#ffbf61">Http</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="examiner" label="检查人" v-if="uncheckList.examiner" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="isad" label="链接类型" v-if="uncheckList.isad" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.isad == 1" class="ta_btn" style="background-color:#8cd23a">广告</span>
            <span v-else class="ta_btn" style="background-color:#3ee9ff">资讯</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="status" label="状态" v-if="uncheckList.status" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 1" class="ta_btn" style="background-color:#2F4056">未检查</span>
            <span v-else class="ta_btn" style="background-color:#ff3d00;">检查中</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="url" label="Url" v-if="uncheckList.url" align="center">
          <template slot-scope="scope">
            <a :href="scope.row.url"
              target="_blank"
              class="buttonText">{{scope.row.url}}</a>
          </template>
        </el-table-column>
        <!-- <el-table-column v-for="item in tableList" :key="item" :prop="item.lable" :label="item.value" header-align="center"  align="center"></el-table-column> -->
        <el-table-column fixed="right" label="操作"  >
          <template slot-scope="scope">
            <a href="javascript:;" title="去检查" icon="el-icon-edit" @click="updateModel()">去检查</a>
            <!-- <el-button type="danger" round size="small"  title="删除" icon="el-icon-delete" @click="deleteModel()"></el-button> -->
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
    <!-- </transition> -->
    <!-- <transition name="fade"> -->
    <ms-add v-if="show == '2'" @child="showTable"></ms-add>
    <!-- </transition> -->
  </div>
</template>
<script>
import msAdd from './tExcelAdd'
import { export_json_to_excel as exportExcel } from '../../../vendor/export2Excel'
export default {
  data () {
    return {
      show: '1',
      ruleForm: {
        code: ''
      },
      rules: {},
      tableData: [
        { id: '52',
          keyword: '52',
          ip: '52',
          title: '52',
          craw_time: '52',
          searchtype: '1',
          agent: '52',
          urltype: '1',
          examiner: '52',
          isad: '1',
          status: '1',
          url: 'https://www.baidu.com'
        },
        {
          searchtype: '2',
          agent: '52',
          urltype: '2',
          examiner: '52',
          isad: '2',
          status: '2'
        }
      ],
      // 筛选按钮的数据列表，与table表头的数据一致
      tableList: [
        {
          label: 'ID',
          value: 'id',
          checked: false
        }, {
          label: 'keyword',
          value: '关键字',
          checked: true
        }, {
          label: 'ip',
          value: '搜集IP',
          checked: true
        }, {
          label: 'title',
          value: '页面标题',
          checked: false
        }, {
          label: 'craw_time',
          value: '搜集时间',
          checked: true
        }, {
          label: 'searchtype',
          value: '搜索引擎',
          checked: true
        }, {
          label: 'agent',
          value: '客户端',
          checked: true
        }, {
          label: 'urltype',
          value: '协议类型',
          checked: true
        }, {
          label: 'examiner',
          value: '检查人',
          checked: true
        }, {
          label: 'isad',
          value: '链接类型',
          checked: true
        }, {
          label: 'status',
          value: '状态',
          checked: true
        }, {
          label: 'url',
          value: 'Url',
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
    msAdd
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
    },
    // 点击下载表格
    downloadExcel () {
      this.$confirm('确定下载列表文件?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.export2Excel()
      }).catch(() => {
        this.$message.error('导出操作出现了异常')
      })
    },
    // 格式转换
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    // 数据写入excel   tHeader导出的表头名信息    fieldName表头字段名     tableData表格数据  excelName导出Excel名字
    export2Excel () {
      require.ensure([], () => {
        // const { export_json_to_excel } = require('@/vendor/export2Excel')// 这里必须使用绝对路径，使用@/+存放export2Excel的路径
        const tHeader = ['ID', '关键字', '搜集IP', '页面标题', '搜集时间', '搜索引擎', '客户端', '协议类型', '检查人', '链接类型', '状态', 'Url']
        const fieldName = ['id', 'keyword', 'ip', 'title', 'craw_time', 'searchtype', 'agent', 'urltype', 'examiner', 'isad', 'status', 'url']
        const data = this.formatJson(fieldName, this.tableData)
        exportExcel(tHeader, data, '引擎链接')// 导出的表格名称，根据需要自己命名
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../../assets/css/tableData.scss');
.tExcel {
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
