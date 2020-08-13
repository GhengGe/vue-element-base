<template>
    <div class="user">
        <h3>用户管理</h3>
        <div class="user-cont">
          <div class="organiza">
              <h4>组织机构</h4>
              <el-tree
                :data="data"
                node-key="id"
                default-expand-all
                :props="defaultProps">
              </el-tree>
          </div>
           <div class="data">
             <!-- 表单 -->
             <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" label-position="left">
              <el-form-item label="用户名称" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入用户名称"></el-input>
              </el-form-item>
              <el-form-item label="起止日期" prop="date" required>
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
              <el-button class="btn-color" @click="resetForm('ruleForm')" icon="el-icon-delete">重置</el-button>
            </el-form>
            <!-- 按钮 -->
            <div class="btn">
              <div class="fl clearfix">
                <el-button class="btn-opera" icon="el-icon-plus" @click="addDialogFormVisible = true">添加</el-button>
                <!-- <el-button class="btn-opera" icon="el-icon-edit">修改</el-button>
                <el-button class="btn-opera" icon="el-icon-delete">删除</el-button>
                <el-button class="btn-opera" icon="el-icon-refresh">重置密码</el-button>
                <el-button class="btn-opera" icon="el-icon-warning-outline">冻结</el-button>
                <el-button class="btn-opera" icon="el-icon-circle-check">解除冻结</el-button>
                <el-button class="btn-opera" icon="el-icon-s-custom">角色分配</el-button> -->
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
                  <!-- <el-button plain icon="el-icon-s-operation"><i class="el-icon-caret-bottom"></i></el-button> -->
                </el-button-group>
              </div>
            </div>
            <!-- 表格 -->
            <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              :current-page.sync="currentPage"
              height="550" border style="width: 100%" >
                <el-table-column type="index" width="60"></el-table-column>
              <el-table-column prop="roleid" label="roleid" header-align="center" v-if="uncheckList.account" align="center" sortable v-show="false"></el-table-column>
              <el-table-column prop="account" label="账号" header-align="center" v-if="uncheckList.account" align="center" sortable></el-table-column>
              <el-table-column prop="name" label="姓名" header-align="center" v-if="uncheckList.name" align="center" sortable></el-table-column>
              <el-table-column prop="phone" label="电话" header-align="center"  v-if="uncheckList.phone" align="center" sortable></el-table-column>
              <el-table-column prop="createTime" label="创建时间" header-align="center" v-if="uncheckList.createTime" align="center" sortable></el-table-column>
              <el-table-column prop="status" label="状态" header-align="center" v-if="uncheckList.status" align="center" sortable></el-table-column>
              <el-table-column fixed="right" label="操作" width="110px">
                <template slot-scope="scope">
                  <el-button v-if="frozen" type="success"   size="small"  title="冻结" icon="el-icon-circle-check" @click="frozenUser()">冻结</el-button>
                  <el-button v-else type="danger"  size="small"  title="解除冻结" icon="el-icon-s-custom" @click="unfrozenUser()">解除冻结</el-button>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="250px">
                <template slot-scope="scope">
                  <el-button type="primary" round size="small"  title="修改" icon="el-icon-edit" @click="updateDialogFormVisible = true"></el-button>
                  <el-button type="danger" round size="small"  title="删除" icon="el-icon-delete" @click="deleteUser()"></el-button>
                  <el-button type="info" round size="small"  title="重置密码" icon="el-icon-lock" @click="resetPass()"></el-button>
                  <!-- <el-button round size="small"  title="冻结" icon="el-icon-warning-outline"></el-button>
                  <el-button type="success" round  size="small"  title="解除冻结" icon="el-icon-circle-check"></el-button> -->
                  <el-button type="warning" round size="small"  title="角色分配" icon="el-icon-s-custom" @click="roleAssign()"></el-button>
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
            <!-- 添加 -->
            <el-dialog title="添加管理员" :visible.sync="addDialogFormVisible" @close="addDialogClosed" class="modal"  width="700px" :close-on-click-modal="false">
              <el-form :model="addForm"  :rules="addFormRules" ref="addFormRef" label-width="94px" class="demo-ruleForm">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="账户" prop="account">
                      <el-input v-model="addForm.account" placeholder="请输入账户" >账户</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="addForm.name" placeholder="请输入姓名" >姓名</el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="密码" prop="password">
                      <el-input type="password" v-model="addForm.password" placeholder="请输入密码" show-password>密码</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="确认密码" prop="salt">
                      <el-input type="password"  v-model="addForm.salt" placeholder="请确认密码" show-password>确认密码</el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="角色" prop="roleid">
                      <el-input v-model="addForm.roleid" placeholder="请输入角色" >角色</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="电话" prop="phone">
                      <el-input v-model="addForm.phone" placeholder="请输入电话" >电话</el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- <el-form-item label="部门" prop="productId">
                    <el-input v-model="addForm.productId">部门</el-input>
                </el-form-item>
                <el-form-item label="推广位" prop="gameid" hidden>
                    <el-input v-model="addForm.gameid" >推广位</el-input>
                </el-form-item> -->
              </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="addDialogFormVisible = false">取 消</el-button>
                    <el-button type="primary"  @click="addUser('addFormRef')">确 定</el-button>
                </div>
            </el-dialog>
            <!-- 修改 -->
            <el-dialog title="修改" :visible.sync="updateDialogFormVisible" @close="updateDialogClosed" class="modal"  width="700px" :close-on-click-modal="false">
              <el-form :model="updateForm"  :rules="updateFormRules" ref="updateFormRef" label-width="94px" class="demo-ruleForm">
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="账户" prop="account">
                      <el-input v-model="updateForm.account" placeholder="请输入账户" >账户</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="updateForm.name" placeholder="请输入姓名" >姓名</el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="密码" prop="password">
                      <el-input type="password" v-model="updateForm.password" placeholder="请输入密码" show-password>密码</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="确认密码" prop="salt">
                      <el-input type="password"  v-model="updateForm.salt" placeholder="请确认密码" show-password>确认密码</el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <el-form-item label="角色" prop="roleid">
                      <el-input v-model="updateForm.roleid" placeholder="请输入角色" >角色</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="电话" prop="phone">
                      <el-input v-model="updateForm.phone" placeholder="请输入电话" >电话</el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- <el-form-item label="部门" prop="productId">
                    <el-input v-model="updateForm.productId">部门</el-input>
                </el-form-item>
                <el-form-item label="推广位" prop="gameid" hidden>
                    <el-input v-model="updateForm.gameid" >推广位</el-input>
                </el-form-item> -->
              </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="updateDialogFormVisible = false">取 消</el-button>
                    <el-button type="primary"  @click="updateUser('updateFormRef')">确 定</el-button>
                </div>
            </el-dialog>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      frozen: false, // 冻结
      data: [{
        id: 1,
        label: '顶级',
        children: [{
          id: 4,
          label: '总公司',
          children: [{
            id: 9,
            label: '开发部'
          }, {
            id: 10,
            label: '运营部'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      ruleForm: {
        name: '',
        date: []
      },
      rules: {},
      tableData: [
        {account: '1', name: 'cg', phone: 'cg', createTime: 'cg', status: 'cg'}
      ],

      // 筛选按钮的数据列表，与table表头的数据一致
      tableList: [
        {
          label: 'order',
          value: '账号'
        }, {
          label: 'name',
          value: '姓名'
        }, {
          label: 'phone',
          value: '电话'
        }, {
          label: 'createTime',
          value: '创建时间'
        }, {
          label: 'zhuantai',
          value: '状态'
        }],
      // 筛选列选中的数据列表
      checkList: [],
      // 控制筛选列显示隐藏
      uncheckList: {},
      currentPage: 1,
      pagesize: 10,
      total: 1,
      addDialogFormVisible: false, // 添加对话框
      addForm: {
        account: '',
        name: '',
        password: '',
        salt: '',
        roleid: '',
        phone: ''
      },
      addFormRules: {},
      updateDialogFormVisible: false, // 修改对话框
      updateForm: {
        account: '',
        name: '',
        password: '',
        salt: '',
        roleid: '',
        phone: ''
      },
      updateFormRules: {}
    }
  },
  // 页面加载自动运行函数
  mounted: function () {
    this.filter()
    // this.getTableData()
  },
  methods: {
    // 用户列表渲染
    getTableData () {
      this.$http.post('/mgr/list', { }).then((res) => {
        this.tableData = res
      }).catch(err => {
        if (err) {
          console.log(err)
        }
        alert('请求失败')
      })
    },
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
    },
    // 添加
    // 监听添加用户对话框的关闭事件
    addDialogClosed () {
      this.$refs.addFormRef.resetFields()
    },
    addUser () {
      // this.$http.post('/login', {
      //   username: this.username,
      //   password: this.password
      // }).then((res) => {
      //   console.log(res)
      // }).catch(err => {
      //   if (err) {
      //     console.log(err)
      //   }
      //   alert('请求失败')
      // })
    },
    // 修改
    updateDialogClosed () {
      this.$refs.updateFormRef.resetFields()
    },
    updateUser () {},
    // 删除
    deleteUser () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 重置密码
    resetPass () {},
    // 角色分配
    roleAssign () {},
    // 冻结
    frozenUser () {},
    // 解除冻结
    unfrozenUser () {}
  }
}
</script>
<style lang="scss" scoped>
@import url('../../assets/css/tableData.scss');
  .user{
    margin: 10px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    h3 {
      font-size: 18px;
      border-top: 4px solid #b7b5b5;
      border-bottom: 1px solid #ccc;
      padding-left: 15px;
      line-height: 48px;
    }
    .user-cont {
      position: relative;
      padding: 10px 20px;
      .organiza{
        width: 200px;
        position: absolute;
        border-radius: 8px;
        border: 1px solid #ccc;
        overflow: hidden;
        h4 {
          background-color: #e6e6e6;
          line-height: 35px;
          padding-left: 15px;
          font-weight: 500;
        }
        .el-tree {
          padding: 10px;
          padding-bottom: 50px;
        }
      }
      .btn {
        .el-button{
          padding: 8px 12px;
          margin-bottom: 15px;
        }
        .el-button--success {
          background-color: #81c3ff;
          border-color: #81c3ff;
        }
        span{
          .el-button{
            padding: 9px 12px;
          }
        }
      }
      .data{
        margin-left: 250px;
      }
    }
  }
  .el-form-item{
    margin-right: 20px;
  }
  .el-popper {
    .el-checkbox{
      display: block;
      margin-left: 20px;
    }
  }
  .el-input--suffix >>>.el-input__inner {
    padding-right: 15px!important;
  }
</style>
