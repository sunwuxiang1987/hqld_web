<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm" >

      <el-button-group style="padding-bottom: 20px;padding-top: 50px">
        <el-button :type="emailType" @click="setEmail"><i class="el-icon-message"></i>邮箱注册</el-button>
        <el-button :type="mobileType" @click="setMobile"><i class="el-icon-phone"></i>手机注册</el-button>
      </el-button-group>
      <el-form-item prop="email" v-if="isEmail">
        <el-input v-model="ruleForm.email" placeholder="请输入Email账号"></el-input>
      </el-form-item>
      <el-form-item prop="mobile" v-else>
        <el-input placeholder="请输入手机号码" v-model="ruleForm.mobile" class="input-with-select">
          <el-select v-model="ruleForm.area" slot="prepend" placeholder="请选择">
            <el-option label="+86" value="1"></el-option>
            <el-option label="+1" value="2"></el-option>
            <el-option label="+81" value="3"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item  prop="vcode">
        <el-col :span="14">
          <el-input v-model="ruleForm.v_code" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :span="10">
          <el-button @click="getVcode" :disabled="disable">{{codeInfo}}</el-button>
        </el-col>
      </el-form-item>
      <el-form-item  prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item  prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再输入一次"></el-input>
      </el-form-item>
      <el-form-item  prop="code">
        <el-input v-model.number="ruleForm.code" placeholder="请输入邀请码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-checkbox v-model="ruleForm.checked">同意用户使用协议</el-checkbox>
      </el-form-item>

      <el-button-group>
        <el-button type="primary" @click="submitForm('ruleForm')" style="width: 400px">提交</el-button>
      </el-button-group>

      <el-form-item>
        <el-link href="/#/login" type="primary">已有账号？登录</el-link>
      </el-form-item>

    </el-form>
  </el-row>

</template>

<script>

  import { Api } from '@/api/interface' // 引入接口

  export default {
    name: "Register",
    data() {
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Code不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 10000) {
              callback(new Error('错误'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        token:null,
        isEmail:1,
        disable:false,
        emailType:'primary',
        mobileType:'',
        codeInfo:'Get Code',
        ruleForm: {
          email: '',
          mobile: '',
          area: '',
          pass: '',
          checkPass: '',
          code: '',
          v_code: '',
          checked:true
        },
        rules: {

          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          v_code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let username = '';
            if(this.isEmail){
              username = this.ruleForm.email;
              if(!username){
                this.$message.error('请输入正确邮箱账号');
                return
              }
            }else{
              username = this.ruleForm.mobile;
              if(!username){
                this.$message.error('请输入正确手机号');
                return
              }
            }
            let postData = {username: username,password:this.ruleForm.pass,v_code:this.ruleForm.v_code,i_code:this.rules.code,type:this.isEmail} // 请求参数
            Api('Register',postData).then(data => {
              if(data.status==0){
                this.$message({
                  message: '恭喜你，注册成功',
                  type: 'success'
                });
                this.$router.push({ path: '/login' });
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
      },
      setEmail(){
        this.isEmail = true
        this.emailType = 'primary'
        this.mobileType = ''
      },
      setMobile(){
        this.isEmail = false
        this.mobileType = 'primary'
        this.emailType = ''
      },
      getVcode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.disable = true;
          this.GetVerifyCode();
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
              this.codeInfo = 'ReGet after ' + this.count + ' s';
            } else {
              clearInterval(this.timer);
              this.timer = null;
              this.disable = false;
              this.codeInfo = 'ReGet code';
            }
          }, 1000)
        }
      },
      GetVerifyCode(){
        var account = '';
        if(this.isEmail){
          account = this.ruleForm.email
        }else{
          account = this.ruleForm.mobile
        }
        let postData = {username: account,area:this.ruleForm.area,action:'register'} // 请求参数
        Api('GetVerifyCode',postData).then(data => {
          if(data.status==0){
            this.$message({
              message: '验证码已发送',
              type: 'success'
            });
          }
          console.log(data.data)
        })
      }
    },
    created() {
      this.token = localStorage.getItem("accessToken")
      if(this.token){
        console.log("token"+this.token)
      }else{
        console.log("has no token")
      }
    }
  }
</script>

<style scoped>

</style>
