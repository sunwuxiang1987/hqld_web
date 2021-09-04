<template>
  <div style="width: 100%;margin: auto;">

    <div style="float:left;width: 100%;height: 800px;background: #F5F7FA;padding-top: 50px;margin-top: 140px;padding-bottom: 100px">

      <div style="width: 1000px;height: 712px;background: #FFFFFF;opacity: 1;border-radius: 0px;margin: auto;padding-top: 100px;">
        <el-row style="width: 376px;height: 127px;line-height: 127px;margin-bottom: 20px;padding-top: 50px;margin-left: auto;margin-right: auto;">
          <img :src="success1" style="width: 166px;float: left;margin-right: 10px">
          <span style="width:200px;float:left;font-size: 20px;font-family: Source Han Sans CN;font-weight: 400;color: #49C791;">授权成功！正在登录</span>
        </el-row>

      </div>

    </div>

  </div>
</template>

<script>
  import { Api } from '@/api/interface' // 引入接口
  // import { getUrlKey } from '@/api/units' // 引入接口

  export default {
    name: "LoginSuccess",
    data() {
      return {
        success1:require('@/assets/success1.png'),
        addForm: {
          code:null,
          state: null
        },
      }
    },
    methods:{
      getOpenid(){
        // let postData = {code: this.addForm.username,state:this.addForm.pass} // 请求参数
        Api('getOpenid',this.addForm).then(data => {
          console.log(data.data)
        })
      }
    },
    created() {
      this.addForm.code = this.$route.query.code;//getUrlKey("code",window.location.href);
      this.addForm.state = this.$route.query.state;//getUrlKey("state",window.location.href);
      if(this.addForm.code && this.addForm.state){
        this.getOpenid()
        // console.log(this.addForm.code)
      }
    }

  }
</script>

<style scoped>
  body{
    background: #FFFFFF;
  }
</style>
