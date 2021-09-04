<template>
  <div style="width: 100%;margin: auto;">
    <Menu></Menu>

    <div style="float:left;width: 100%;height: 800px;background: #F5F7FA;padding-top: 20px;margin-top: 140px;padding-bottom: 100px">

      <div style="width: 1200px;height: 712px;background: #FFFFFF;opacity: 1;border-radius: 0px;margin: auto;padding-top: 50px;">

        <el-row style="padding-left: 30px;padding-right: 30px;height: 50px" id="search">
          <el-input placeholder="搜索我的订单" v-model="addForm.keyword"  style="height: 50px">
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
        </el-row>

        <el-row style="height: 80px">
          <p style="font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;text-align: left;padding-left: 30px">我的订单</p>
        </el-row>

        <el-row style="padding-left: 30px;padding-right: 30px">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first">
            </el-tab-pane>
            <el-tab-pane label="待支付" name="second"></el-tab-pane>
            <el-tab-pane label="运输中" name="third"></el-tab-pane>
            <el-tab-pane label="已完成" name="fourth"></el-tab-pane>
            <el-tab-pane label="已取消" name="fine"></el-tab-pane>
            <el-tab-pane label="待评价" name="six"></el-tab-pane>
          </el-tabs>

        </el-row>

        <el-row style="width: 100%;float: left">
            <img :src="me1" id="before_login">
        </el-row>

        <el-row style="width: 100%;padding-top: 20px;float: left;" >
          <p style="width: 100%;text-align: center;height: 24px;font-size: 16px;font-family: Source Han Sans CN;font-weight: 400;color: #081833;" >{{login_msg}}</p>

          <div style="width: 800px;text-align: center;margin-left: auto;margin-right: auto;">
            <el-button  style="color: white;font-size:24px;font-weight: 400;border: #163172;width: 280px;height: 68px;background: #1E56A0;opacity: 1;border-radius: 34px;" @click="doLogin">{{btn_msg}}</el-button>
          </div>
        </el-row>


      </div>

    </div>


    <el-dialog :title="dialogTitle" width="400px" :visible.sync="dialogVisible" center>
      <div style="width: 200px;margin: auto;height: 200px;border: 2px solid #081833" >
        <div ref="qrCodeUrl_d" id="wx_qrcode"></div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { TokenApi } from '@/api/interface' // 引入接口
  import { Api } from '@/api/interface' // 引入接口
  import Menu from "@/components/Menu";
  import QRCode from 'qrcodejs2'

  export default {
    name: "Me",
    data() {
      return {
        me1:require('@/assets/me1.png'),
        fromto:require('@/assets/formto.png'),
        loginbg: {
          backgroundImage:'url(' + require('@/assets/order1.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          color: '#fff',
        },
        dialogVisible:false,
        dialogTitle:'微信扫码登录',
        btn_msg:'登录/注册',
        login_msg:'暂无订单，登录/注册后可查询您的订单',
        activeName: 'first',
        state:'',
        addForm: {
          keyword:null,
          type:null,
          page:0
        },
      }
    },
    components: {
      Menu
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitForm(formName){

      },
      obj(url){
        return {
          text: url, // 需要转换为二维码的内容
          width: 200,
          height: 200,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        }
      },
      doLogin(){
        this.dialogVisible = true;
        setTimeout(this.isState,2000);
      },
      getToken(user_info){
        localStorage.setItem('nickname',user_info.nickname)
        localStorage.setItem('headimgurl',user_info.headimgurl)
        let postData = {nickName: user_info.nickname,openid:user_info.openid,avatarUrl:user_info.headimgurl} // 请求参数
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
      },
      isState(){

        Api('isState',{state: this.state}).then(data => {
          if(data.status==0){
            this.getToken(data.data);
          }else{
            console.log(data.data)
            setTimeout(this.isState,2000);
          }
        })

      }
    },
    created() {

    },
    updated(){
      // 生成二维码要放在这里，因为是在model中生成的，不然报错
      document.getElementById("wx_qrcode").innerHTML = "";
      this.state = "test1122";
      var qr_url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3e600dba9088d037&redirect_uri=https%3A%2F%2Fapi1.travelsender.com%2Fapi%2Fv1%2FgetOpenid&response_type=code&scope=snsapi_userinfo&state="+this.state+"#wechat_redirect";
      var qr = new QRCode(this.$refs.qrCodeUrl_d, this.obj(qr_url));
    },

  }
</script>
<style scoped>


  .item{
    width: 1080px;
    height: 162px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    opacity: 1;
    border-radius: 4px;
    margin: auto;
  }
  .item .left{
    width: 60%;float: left;padding-top: 20px;
  }
  .item .right{
    width: 40%;float: left;
  }
  .left .title{
    text-align: left;
    padding-left: 30px;height: 40px;line-height: 40px;
  }
  .left .content{
    width: 100%;
    padding-left: 30px;
  }
  .content .first{
    width: 35%;float: left;
  }
  .content .second{
    width: 30%;float: left;text-align: center;
  }
  .content .third{
    width: 35%;float: left;
  }
  .content .p1{
    border-left: 3px solid rgba(30, 86, 160, 1);
    text-align: left;padding-left: 10px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #2E2E2E;
  }

  .content .p3{
    border-left: 3px solid rgba(232, 163, 54, 1);
  }
  .content .p2{
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ADADAD;
    line-height: 0px;
    text-align: left;padding-left: 10px;
  }
  .content .p4{
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ADADAD;
    line-height: 0px;
    text-align: left;;
  }
  .status{
    float: left;
    height: 100%;
    line-height: 122px;
    width: 30%;
  }
  .options{
    float: left;
    height: 100%;
    line-height: 162px;
    width: 70%;
    text-align: right;
  }
  .status p{
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #2E2E2E;
  }
  .options button{
    width: 94px;
    height: 38px;
    background: #FFFFFF;
    border: 1px solid #1E56A0;
    color: #1E56A0;
    opacity: 1;
    border-radius: 4px;
    margin-right: 15px;
  }
</style>
<style>
  body{
    background: #FFFFFF;
  }
  #search .el-input__inner{
    height: 50px;line-height: 50px;
  }

  #search input{
    height: 50px;line-height: 50px;
  }

</style>
