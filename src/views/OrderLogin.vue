<template>
  <div style="width: 100%;margin: auto;">
    <Menu></Menu>
    <el-row style="width: 100%;height: 566px;background-size: 100% 100%;padding-top: 50px;float: left;margin-top: 140px" :style="loginbg">
      <p style="width: 100%;text-align: center;height: 48px;font-size: 68px;font-family: Source Han Sans CN;font-weight: 400;color: #081833;">在线发布需求</p>
      <p style="width: 100%;text-align: center;height: 24px;font-size: 24px;font-family: Source Han Sans CN;font-weight: 400;color: #081833;">填写信息 极速服务</p>
      <div style="width: 800px;text-align: center;margin-left: auto;margin-right: auto;margin-top: 50px">
        <el-button  style="color: white;font-size:24px;font-weight: 400;border: #163172;width: 280px;height: 68px;background: #1E56A0;opacity: 1;border-radius: 34px;" @click="doLogin">登录/注册</el-button>
      </div>
    </el-row>

    <div style="float:left;width: 100%;height: 600px;background: #F5F7FA;padding-top: 50px">
      <div style="width: 1200px;height: 512px;background: #FFFFFF;opacity: 1;border-radius: 0px;margin: auto">
        <img :src="order2" style="margin-top: 56px">
        <p>请 <span style="color: rgba(30, 86, 160, 1);border-bottom: rgba(30, 86, 160, 1) 1px solid" @click="doLogin">登录</span> 后再进行在线下单</p>
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
  import QRCode from "qrcodejs2";
  export default {
    name: "OrderLogin",
    data() {
      var validateinput = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('输入不能为空'));
        } else {
          callback();
        }
      };
      return {
        order1:require('@/assets/order1.png'),
        order2:require('@/assets/order2.png'),
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
          number:0,
          address: "",
          type:null,
          weight:0
        },
        rules: {
          number: [
            { validator: validateinput, trigger: 'blur' }
          ],
          address: [
            { validator: validateinput, trigger: 'blur' }
          ]
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
  body{
    background: #FFFFFF;
  }
</style>
