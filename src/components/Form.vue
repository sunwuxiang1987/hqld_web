<template>
  <el-row type="flex" justify="center" style="margin-top:30px;">
    <div class="page_width" style="background: url('https://www.logicalthinksoft.com/image/index/x_backImg.png') center no-repeat">
      <div style="line-height: 25px;height: 45px"><h3>提交您的APP、电商、物联定制需求，免费评估！</h3></div>

      <el-form :inline="true" :model="formInline" status-icon :rules="rules" ref="formInline" class="demo-form-inline">
        <el-form-item label="名称">
          <el-input v-model="formInline.name" placeholder="您的姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="formInline.mobile" placeholder="请留下您的电话或微信号"></el-input>
        </el-form-item>
        <el-form-item label="需求描述">
          <el-input style="width: 380px" v-model="formInline.info" placeholder="描述您的需求如APP开发，小程序开发等"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('formInline')">提交需求</el-button>
        </el-form-item>
      </el-form>
      <div style="line-height: 25px;height: 45px"><h4>     请认真填写需求信息，我们会在10分钟内与您取得联系。</h4></div>
    </div>

  </el-row>
</template>

<script>
  import {Api} from '@/api/interface' // 引入接口
  export default {
    name: "Form",
    data(){
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名噢~'));
        } else {
          callback();
        }
      };
      var validateMobile = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入联系方式噢~'));
        } else {
          callback();
        }
      };
      return{
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          mobile: [
            { validator: validateMobile, trigger: 'blur' }
          ]
        },
        formInline: {
          name: '',
          mobile: '',
          info: ''
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            Api('SubmitInfo',this.formInline).then(data => {
              if(data.status==0){

                this.$message({
                  message: '您的信息已提交，我们会尽快与您联系',
                  type: 'success'
                });

              }
              console.log(data.data)
            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
  }
</script>
