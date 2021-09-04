<template>
  <el-row type="flex" class="row-bg" justify="center" style="padding-top: 100px">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">

      <el-form-item prop="username" label="账号">
        <el-input v-model="ruleForm.username" placeholder="请输入邮箱或手机登录"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-button-group>
        <el-button type="primary" @click="submitForm('ruleForm')" style="width: 400px">提交</el-button>
      </el-button-group>

      <el-form-item>
        <el-link type="primary" href="/#/register">还没有账号？马上注册&nbsp;&nbsp;</el-link>
        <el-link type="info" href="/#/reset">&nbsp;&nbsp;忘记密码</el-link>
      </el-form-item>

    </el-form>
  </el-row>
</template>

<script>
  import { Api } from '@/api/interface' // 引入接口
  export default {
    name: "Login",
    data() {

      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };

      return {
        ruleForm: {
          pass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateUser, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let postData = {username: this.ruleForm.username,password:this.ruleForm.pass} // 请求参数
            Api('GetToken',postData).then(data => {
              if(data.status==0){
                localStorage.setItem('accessToken',data.data)
                this.$message({
                    message: '恭喜你，登录成功',
                    type: 'success'
                });

                //登录成功后通知父组件，让父组件通知其他组件
                this.$emit('childFn', data.data);

                this.$router.push({ path: '/me' });
              }
              console.log(data.data)
            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
