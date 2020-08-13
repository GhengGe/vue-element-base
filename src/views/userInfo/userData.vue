<template>
  <div class="userData">
    <el-row :gutter="20">
      <el-col :sm="7" :xm="24">
       <div class="box">
          <h4>About me</h4>
          <div class="info">
            <div class="img">
              <img src="../../assets/img/tou.gif" alt="头像">
              <p class="name">路飞</p>
              <p>超级管理员</p>
            </div>
            <h5><i class="el-icon-user"></i> 详细信息</h5>
            <p><span>性别: &nbsp;&nbsp;</span> {{ info.sex }}</p>
            <p><span>生日: &nbsp;&nbsp;</span> {{ info.birthday }}</p>
            <p><span>账号: &nbsp;&nbsp;</span> {{ info.account}}</p>
            <p><span>邮箱: &nbsp;&nbsp;</span> {{ info.email }}</p>
            <p><span>电话: &nbsp;&nbsp;</span> {{ info.phone }}</p>
            <h5><i class="el-icon-user"></i> 技能</h5>
            <p>vue</p>
            <el-progress :percentage="percentage" color="#1989fa"></el-progress>
            <p>js</p>
            <el-progress :percentage="percentage" color="#5cb87a"></el-progress>
            <p>ts</p>
            <el-progress :percentage="percentage" color="#6f7ad3"></el-progress>
          </div>
       </div>
      </el-col>
      <el-col :sm="17" :xm="24">
        <div class="box" style="padding: 20px 10px;">
          <el-tabs v-model="activeName"  @tab-click="handleClick">
            <el-tab-pane label="时间线" name="first">
              <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </el-tab-pane>
            <el-tab-pane label="修改信息" name="second">
              <el-form :model="form"  :rules="formRules" ref="formRef" label-width="94px" class="demo-ruleForm">
                <el-row>
                  <el-col :md="12" :xm="24">
                    <el-form-item label="账户" prop="account">
                      <!-- <el-input v-model="form.account"  placeholder="请点击上传苹果应用商店图标" disabled></el-input> -->
                      <el-upload
                        action="#"
                        accept="image/png,image/gif,image/jpg,image/jpeg"
                        list-type="picture-card"
                        :limit= "num"
                        :auto-upload="false"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>
                    </el-form-item>
                  </el-col>
                  <el-col :md="12" :xm="24">
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :md="12" :xm="24">
                    <el-form-item label="密码" prop="password">
                      <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password>密码</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :md="12" :xm="24">
                    <el-form-item label="确认密码" prop="salt">
                      <el-input type="password"  v-model="form.salt" placeholder="请确认密码" show-password>确认密码</el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :md="12" :xm="24">
                    <el-form-item label="角色" prop="roleid">
                      <el-input v-model="form.roleid" placeholder="请输入角色" >角色</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :md="12" :xm="24">
                    <el-form-item label="姓名" prop="name">
                      <el-input v-model="form.name" placeholder="请输入姓名" >姓名</el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :md="12" :xm="24">
                    <el-form-item label="电话" prop="phone">
                      <el-input v-model="form.phone" placeholder="请输入电话" >电话</el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :md="12" :xm="24">
                  </el-col>
                </el-row>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="修改密码" name="three">
              修改密码
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      info: {
        sex: '' || '未知',
        birthday: '' || '未知',
        account: '' || '无',
        email: '' || '无',
        phone: '' || '无'
      },
      activeName: 'first',
      form: {
        account: '',
        name: '',
        password: '',
        salt: '',
        roleid: '',
        phone: ''
      },
      formRules: {},
      dialogImageUrl: '',
      dialogVisible: false,
      num: 1,
      percentage: 30
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event);
    },
    handleFileUpload () {},
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
.userData {
  margin: 10px;
  .el-col {
    padding: 0 10px;
    .box {
      background-color: #fff;
      h4 {
        font-size: 16px;
        line-height: 60px;
        padding-left: 15px;
        border-bottom: 1px solid #eee;
      }
      .info {
        padding: 15px;
        .img {
          text-align: center;
          img {
            width: 105px;
            height: 105px;
            border-radius: 50%;
          }
        }
        h5 {
          margin-top: 25px;
          font-size: 15px;
          color: #999;
          border-bottom: 1px solid #eee;
          line-height: 30px;
        }
        span {
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
