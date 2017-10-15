<template>
<div class="login-wrapper">
  <div class="login-form">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="userName">
        <el-input type="text" v-model="loginForm.userName" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>
<script>
import {
  mobile,
  empty
} from '@/lib/validator'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.loginForm.pass !== '') {
          this.$refs.loginForm.validateField('pass');
        }
        callback();
      }
    };

    return {
      loginForm: {
        userName: '18116191921',
        pass: ''
      },
      rules: {
        userName: mobile(),
        pass: empty('密码不能为空')
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (this.loginForm.userName == '18116191921' && this.loginForm.pass == '123456') {
          this.$message.success('登陆成功！');
          this.$router.push({
            name: 'baseService'
          })
        } else {
          this.$message.error('账号密码错误！');
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.login-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: snow;
}
.login-form {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 640px;
    height: 320px;
    margin: auto;
}
</style>
