<template>
  <div class="login">
    <vue-particles
        color="#77ffff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="triangle"
        :particleSize="4"
        linesColor="#77ffff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="remove" class="bg"></vue-particles>
    <!--p style="color: #fff;text-align: right;padding: 20px 20px 0 0;">版本号：1.3</p> -->
    <!-- 登录表单区域 -->
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
      <h1>CG</h1>
      <h3>欢迎使用后台管理</h3>
      <!-- 用户名 -->
      <el-form-item prop="username">
        <el-input v-model.trim="loginForm.username" prefix-icon="el-icon-user" placeholder="用户名" autofocus="autofocus"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password" class="password">
        <el-input
          v-model="loginForm.password"
          prefix-icon="el-icon-lock"
          :type="passwordType"
          show-password
          placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">记住我</el-checkbox>
      </el-form-item>
      <!-- 按钮区域 -->
      <el-form-item class="btns">
        <el-button type="primary" @click.prevent="login" @keyup.13.native.prevent="keyCode">登录</el-button>
        <!-- <el-button type="info" @click="resetLoginForm">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: false,
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: '',
        password: '',
        key: '',
        loginType: '',
        loginToken: '',
        userId: ''
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' }
          // { min: 3, max: 10, message: '长度在 3 到 30 个字符', trigger: 'blur' },
          // { pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '格式不正确',trigger: 'blur'}
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      },
      passwordType: 'password'
    }
  },
  created () {
    var _this = this
    document.onkeydown = function (e) {
      let key = window.event.keyCode
      if (key === 13) {
        _this.keyCode()
      }
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      // this.$nextTick(() => {
      //   this.$refs.password.focus()
      // })
    },
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      // this.$router.push('/home')
      if (/^[1][3][0-9]{9}$/.test(this.loginForm.username)) {
        // 是否是手机
        this.loginForm.loginType = '1'
      } else if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.loginForm.username)) {
        // 是否是邮箱
        this.loginForm.loginType = '4'
      } else {
        this.loginForm.loginType = '5'
      }
      this.$router.push('/home')
      // post
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
      // get
      // this.$http.get('/roles/getPersonnelInfoRoles', {
      //   params: {
      //     key: 'value'
      //   }
      // }).then((res) => {
      //   console.log(res)
      // }).catch((err) => {
      //   if (err) {
      //     console.log(err)
      //   }
      //   alert('请求失败')
      // })
    },
    keyCode () {
      console.log('键盘事件')
      this.login()
    }
  }
}

</script>
<style lang='scss' scoped>
.bg{
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.login{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #243342;
  background: url("../../assets/img/bg.jpg") no-repeat;
  // background-size: 100% 100%;
  .el-form {
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    box-shadow: 2px 3px 17px 2px #364c639e;
    padding: 20px 30px;
    h1 {
      font-size: 170px;
      font-weight: 800;
      line-height: 170px;
      color: #f3fdfd;
      letter-spacing: -10px;
      text-align: center;
      text-shadow: 0px 0px 13px #a4f7ff;
    }
    h3{
      margin: 20px 0;
      color: #a9a6a6;
    }
    .el-button--primary{
      width: 100%;
    }
    .el-checkbox:last-of-type {
      float: left;
    }
  }
}
>>>.el-input__inner {
  background-color: #40667138!important;
  caret-color: white;
  color: #fff;
}
.el-checkbox {
  color: #fff;
}
>>>.el-checkbox__input.is-checked+.el-checkbox__label {
  color: #8edffa!important;
}
</style>
