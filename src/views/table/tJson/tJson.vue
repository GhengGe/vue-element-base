<template>
  <div class="tJson">
    <!-- <transition name="fade"> -->
    <div class="i_cont" v-if="show == '1'">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
        <el-form-item label="页面代码" prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入页面代码"></el-input>
        </el-form-item>
        <el-button class="btn-color" @click="submitForm('ruleForm')" icon="el-icon-search">搜索</el-button>
          <!-- <el-button class="btn-color" icon="el-icon-plus">添加</el-button> -->
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
        <el-table-column :show-overflow-tooltip="true" prop="id" label="ID" v-if="uncheckList.id" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="aid" label="访问ID" v-if="uncheckList.aid" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="accip" label="访问IP" v-if="uncheckList.accip" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="name" label="提交姓名" v-if="uncheckList.name" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="phone" label="提交电话" v-if="uncheckList.phone" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="qq" label="提交QQ" v-if="uncheckList.qq" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="content" label="提交建议" v-if="uncheckList.content" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="useragent" label="终端类型" v-if="uncheckList.useragent" align="center"></el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="status" label="状态" v-if="uncheckList.status" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 1" class="ta_btn" style="background-color:#67C23A">正常</span>
            <span v-else class="ta_btn" style="background-color:#E6A23C;">无效</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="create_time" label="提交时间" v-if="uncheckList.create_time" align="center"></el-table-column>
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
  </div>
</template>
<script>
import msAdd from './tJsonAdd'
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
          aid: '52',
          accip: '52',
          name: '52',
          phone: '52',
          qq: '52',
          content: '52',
          useragent: '52',
          status: '1',
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
          label: 'aid',
          value: '访问ID',
          checked: true
        }, {
          label: 'accip',
          value: '访问IP',
          checked: true
        }, {
          label: 'name',
          value: '提交姓名',
          checked: false
        }, {
          label: 'phone',
          value: '提交电话',
          checked: true
        }, {
          label: 'qq',
          value: '提交QQ',
          checked: true
        }, {
          label: 'content',
          value: '提交建议',
          checked: true
        }, {
          label: 'useragent',
          value: '终端类型',
          checked: true
        }, {
          label: 'status',
          value: '状态',
          checked: true
        }, {
          label: 'create_time',
          value: '提交时间',
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
    }
    // 将表格导为JSOM格式
    // changeJSON(){
    //   var dataJSON = []//新建对象，用来存储所有数据
    //   // 定义列名
    //   var id, aid, gameid, accip, name, phone, qq, content, useragent, status
    //   $(".tJson table tr").each(function (trindex, tritem) {//遍历每一行
    //     if(trindex > 0) {   // 过滤掉表头
    //       var tableData={};  // 该行的数据
    //       $(tritem).find("td").each(function (tdIndex, tditem) {
    //         // 遍历每一行的td 并存入
    //         //当天td的值，再根据tdIndex设置属性
    //         var tdValue = $(tditem).text()
    //         if (tdIndex == 1) {//第0列是code
    //             tableData.id = tdValue
    //         }
    //         if (tdIndex == 2) {
    //             tableData.aid = tdValue
    //         }
    //         if (tdIndex == 3) {
    //             tableData.gameid = tdValue
    //         }
    //         if (tdIndex == 4) {
    //             tableData.accip = tdValue
    //         }
    //         if (tdIndex == 5) {
    //             tableData.name = tdValue
    //         }
    //         if (tdIndex == 6) {
    //             tableData.phone = tdValue
    //         }
    //         if (tdIndex == 7) {
    //             tableData.qq = tdValue
    //         }
    //         if (tdIndex == 8) {
    //             tableData.content = tdValue
    //         }
    //         if (tdIndex == 9) {
    //             tableData.useragent = tdValue
    //         }
    //         if (tdIndex == 10 ){
    //             tableData.status = tdValue
    //         }
    //       })
    //       dataJSON.push(tableData)//将每一行的数据存入
    //     }
    //   })
    //   this.dataJSON = dataJSON
    // }
  }
}
</script>
<style lang="scss" scoped>
@import url('../../../assets/css/tableData.scss');
.tJson {
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
