<template>
  <el-row type="flex" justify="center" style="margin:0px;background-color: #FAFAFA;">
    <div class="page_width" style="background: url('https://www.logicalthinksoft.com/image/index/x_backImg.png') center no-repeat">
      <div style="line-height: 25px;height: 45px"><h3>多功能搜索引擎</h3></div>

      <el-form :inline="true" :model="formInline" status-icon :rules="rules" ref="formInline" class="demo-form-inline">
        <el-form-item label="搜索">
          <el-input style="width: 380px" v-model="formInline.info" placeholder="请输入搜索关键词"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('formInline')">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

  </el-row>
</template>

<script>
  import {Api} from '@/api/interface' // 引入接口
  export default {
    name: "Form",
    data(){
      return{
        formInline: {
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
                  message: '功能维护中',
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
