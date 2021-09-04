<template>
<!--  <div style="width: 1920px;margin: auto">-->
  <div style="width: 100%;margin: auto">
    <el-carousel height="1066px">
      <el-carousel-item v-for="(item, index) in imagesData" :key="index">
        <el-image :src="item.img" style="width: 100%" fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>

    <el-row type="flex" class="row-bg" justify="center" style="padding: 50px 0px;margin-top: -850px;margin-bottom: 500px;;z-index: 900">
      <div class="page_width">
        <div class="top-adv">
          <p class="top-adv-max" style="font-size: 29px;color: #081833;margin-bottom: 80px">官网在线发布需求   微信小程序  公众号  客户端下载</p>
          <p class="top-adv-min" style="font-size: 79px;color: #081833;margin-top: 0px">跨国跨省市旅递帮带当日达</p>
          <el-row>
            <el-button style="background: rgba(30, 86, 160, 0.3);font-weight: 400;color: white;border: #1E56A0" round>在线下单</el-button>

            <el-tooltip placement="bottom" effect="light">
            <div slot="content"><img :src="qrcode_1" style="width: 150px;height: 150px"></div>
            <el-button  round style="background: #1E56A0;color: white;font-weight: 400;border: #1E56A0">小程序下单</el-button>
            </el-tooltip>

            <el-tooltip class="item" effect="light" content="此功能正在发开中，敬请期待" placement="bottom">
              <el-button round style="border: #1E56A0 1px solid;color: #1E56A0;font-weight: 400;background:rgba(30, 86, 160, 0)">下载客户端</el-button>
            </el-tooltip>
          </el-row>
        </div>
      </div>
    </el-row>

    <el-row style="margin-top: 80px">
      <p style="width: 487px;margin:auto;height: 45px;font-size: 60px;font-family: PingFangSC;font-weight: 600;color: #1E56A0;line-height: 30px;opacity: 0.2;">CORE BUSINESS</p>
      <p style="width: 487px;margin-left:auto;margin-right:auto;margin-top:-50px;height: 38px;font-size: 40px;font-family: PingFangSC;font-weight: 600;color: #1E56A0;line-height: 66px;">我们的业务</p>
      <p style="width: 487px;height: 20px;margin-left:auto;margin-right:auto;margin-top:-30px;font-size: 20px;font-family: PingFangSC;font-weight: 400;color: #1E56A0;line-height: 66px;opacity: 0.6;">环球旅递专业为您服务</p>
    </el-row>
    <el-row style="padding-top: 40px">
      <div class="card" style="background: #FFFFFF;">
        <img :src="card_img_11">
        <p>跨城帮带</p>
        <img :src="card_img_12">
      </div>
      <div class="card" style="background: #1E56A0;margin-left: 75px;margin-right: 75px">
        <img :src="card_img_21">
        <p style="color: white">跨城帮买</p>
        <img :src="card_img_22">
      </div>
      <div class="card" style="background: #FFFFFF;">
        <img :src="card_img_31">
        <p>异地办事</p>
        <img :src="card_img_32">
      </div>
    </el-row>
    <el-row style="margin-top: 150px">
      <div style="width:430px;height:382px;display: inline-block">
        <p style="width: 100%;height: 23px;text-align: left;font-size: 24px;font-family: Source Han Sans CN;font-weight: 400;color: #265080;opacity: 0.8;">高效服务 帮带速达</p>
        <p style="width:100%;text-align: left;font-size: 42px;font-family: PingFangSC;font-weight: bold;color: #265080;">跨国跨省市定制化急件<br>帮带解决方案</p>
      </div>
      <div style="width:664px;height:382px;margin-left:40px;display: inline-block">
        <img :src="row_img_1" style="width: 100%;height: 100%">
      </div>

    </el-row>

    <el-row style="clear: both">
      <div style="width: 1160px;height: 600px;margin: auto">
        <div :style="cardbg">
          <img :src="row_img_3" style="margin: 50px" width="497px" height="517px">
        </div>
        <div style="width:430px;float: left;margin-left: 250px;padding-top: 150px">
          <p style="width: 100%;height: 23px;text-align: left;font-size: 24px;font-family: Source Han Sans CN;font-weight: 400;color: #265080;opacity: 0.8;">实现帮带高效极速当日达服务</p>
          <p style="width:100%;text-align: left;font-size: 42px;font-family: PingFangSC;font-weight: bold;color: #265080;">跨国跨省市便携式小物<br>件帮带撮合平台</p>
        </div>
      </div>

    </el-row>

    <el-row style="margin-top: 80px">
      <p style="width: 709px;margin:auto;height: 45px;font-size: 60px;font-family: PingFangSC;font-weight: 600;color: #1E56A0;line-height: 30px;opacity: 0.2;">Scene Classification</p>
      <p style="width: 487px;margin-left:auto;margin-right:auto;margin-top:-50px;height: 38px;font-size: 40px;font-family: PingFangSC;font-weight: 600;color: #1E56A0;line-height: 66px;">场景分类</p>
      <p style="width: 487px;height: 20px;margin-left:auto;margin-right:auto;margin-top:-30px;font-size: 20px;font-family: PingFangSC;font-weight: 400;color: #1E56A0;line-height: 66px;opacity: 0.6;">环球旅递专业为您服务</p>
    </el-row>


    <el-row class="page_width_item" style="margin: auto">
      <img :src="row_img_41" style="float: left">
      <span style="font-size: 20px;font-family: PingFangSC;font-weight: 400;color: #FFFFFF;line-height: 120px;float: left;margin-left: -80px;">个人</span>
    </el-row>


    <el-row style="padding-top: 40px">
      <div class="img_card" >
        <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/zhu -3.png">
        <p>文件与证件</p>
      </div>
      <div class="img_card" style="margin-left: 75px">
        <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/yifu 100100.png">
        <p>服装与配饰</p>
      </div>
      <div class="img_card" style="margin-left: 75px;margin-right: 75px">
        <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/dianzichanping 100100.png">
        <p>电子产品</p>
      </div>
      <div class="img_card" >
        <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/shengxian 100100.png">
        <p>食品与生鲜</p>
      </div>
    </el-row>

    <el-row class="page_width_item" style="margin: auto">
      <img :src="row_img_41" style="float: left">
      <span style="font-size: 20px;font-family: PingFangSC;font-weight: 400;color: #FFFFFF;line-height: 120px;float: left;margin-left: -80px;">企业</span>
    </el-row>





    <div class="page_width" :style="orderbg" style="background-position-x: -810px;background-position-y: -10px;margin-bottom: 100px">
      <el-row style="padding-top: 40px">
        <div class="img_card" >
          <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/dayingji%20100100.png">
          <p>打印机</p>
        </div>
        <div class="img_card" style="margin-left: 75px">
          <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/yiyao%20100100.png">
          <p>医药</p>
        </div>
        <div class="img_card" style="margin-left: 75px;margin-right: 75px">
          <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/zhengjian%20100100.png">
          <p>证件</p>
        </div>
        <div class="img_card" >
          <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/gengduo.png">
          <p>更多</p>
        </div>
      </el-row>
      <el-row style="margin-top: 80px;margin-bottom: 100px">
        <p style="width: 709px;margin:auto;height: 45px;font-size: 60px;font-family: PingFangSC;font-weight: 600;color: #1E56A0;line-height: 30px;opacity: 0.2;">SERVICE PROCESS</p>
        <p style="width: 487px;margin-left:auto;margin-right:auto;margin-top:-50px;height: 38px;font-size: 40px;font-family: PingFangSC;font-weight: 600;color: #1E56A0;line-height: 66px;">服务流程</p>
        <p style="width: 687px;height: 20px;margin-left:auto;margin-right:auto;margin-top:-30px;font-size: 20px;font-family: PingFangSC;font-weight: 400;color: #1E56A0;line-height: 66px;opacity: 0.6;">让急件，缩短城与城的距离，跨越市与市的界限，与你我紧密相连。</p>
      </el-row>
      <el-row class="page_width_item" style="margin: auto">
        <img :src="tipbg" style="float: left">
        <span style="font-size: 18px;font-family: PingFangSC;font-weight: 400;color: #3269A8;line-height: 30px;float: left;margin-left: -180px;">环球旅递下单指引</span>
      </el-row>
      <div style="margin-top: 80px;margin-bottom: 67px">
        <img :src="order_1" style="width: 930px">
      </div>
      <el-row class="page_width_item" style="margin: auto">
        <img :src="tipbg" style="float: left">
        <span style="font-size: 18px;font-family: PingFangSC;font-weight: 400;color: #3269A8;line-height: 30px;float: left;margin-left: -180px;">旅递达人服务流程</span>
      </el-row>
      <div style="margin-top: 80px">
        <img :src="order_2" style="width: 731px">
      </div>

    </div>


    <el-row class="page_width" :style="lastbg" style="margin-top: 150px;margin-bottom: 150px;margin-left: auto;margin-right: auto;">
      <div style="width: 60%;float: left;padding-top: 30px;">
        <p style="width: 562px;height: 45px;font-size: 46px;font-family: PingFangSC;font-weight: bold;color: #265080;line-height: 41px;margin-left: 300px">为您打造的全平台服务体系</p>
        <p style="width: 312px;height: 23px;font-size: 24px;font-family: PingFangSC;font-weight: 400;color: #265080;line-height: 20px;margin-left: 300px">只为满足您个性化使用习惯</p>
        <div class="img_card" >
          <img :src="gzh" style="width: 129px">
          <p style="color: #265080;">微信公众号</p>
        </div>
        <div class="img_card" >
          <img :src="qrcode_1" style="width: 129px">
          <p style="color: #265080;">小程序</p>
        </div>
      </div>
      <div :style="bottom_right_bg" style="margin-top:-60px">
        <img :src="phone" style="float:left;width: 379px;height: 671px">
        <img :src="img1" style="float:left;width: 245px;height: 441px;margin-left: -312px;margin-top: 100px">
        <img :src="img2" style="float:left;width: 309px;height: 530px;margin-top: 100px">
      </div>

    </el-row>

  </div>
</template>
<script>
  import { Api } from '@/api/interface' // 引入接口
  import Search from "@/components/Search";
  export default {
    name: "Index",
    data(){
      return{
        qrcode_1:require('@/assets/mini.png'),
        gzh:require('@/assets/wechat_code.png'),
        card_img_11:require('@/assets/card_11.png'),
        card_img_12:require('@/assets/card_12.png'),
        card_img_21:require('@/assets/card_21.png'),
        card_img_22:require('@/assets/card_22.png'),
        card_img_31:require('@/assets/card_31.png'),
        card_img_32:require('@/assets/card_12.png'),
        row_img_1:require('@/assets/row_img_1.png'),
        row_img_2:require('@/assets/row_img_2.png'),
        row_img_3:require('@/assets/row_img_3.png'),
        row_img_41:require('@/assets/row_img_41.png'),
        order_1:require('@/assets/order11.png'),
        order_2:require('@/assets/order22.png'),
        tipbg:require('@/assets/tipbg.png'),
        phone:require('@/assets/Phone.png'),
        img1:require('@/assets/img1.png'),
        img2:require('@/assets/img2.png'),
        round4:require('@/assets/round4.png'),
        btbg: {
          backgroundImage:'url(' + require('@/assets/bt03.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          color: '#fff',
        },
        lastbg: {
          backgroundImage:'url(' + require('@/assets/lastbg.png') + ')',
          backgroundRepeat:'no-repeat',
          // height:'498px',
          backgroundSize:'inherit',
          color: '#fff',
        },
        cardbg: {
          backgroundImage:'url(' + require('@/assets/row_img_2.png') + ')',
          backgroundRepeat:'no-repeat',
          // backgroundSize:'cover',
          width:'429px',height:'583px',float: 'left'
        },
        orderbg: {
          backgroundImage:'url(' + require('@/assets/orderbg.png') + ')',
          backgroundRepeat:'no-repeat',
          height:'1368px',
          // backgroundSize:'cover',
          margin:'auto'
        },
        bottom_right_bg:{
          backgroundImage:'url(' + require('@/assets/round4.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'inherit',
          width: '40%',float: 'right',height: '650px',margin_top: '-60px'
        },
        imagesData: [
          {
            img: require('@/assets/banner.png'),
            href: ""
          }],
        tableData: []
      }
    },
    components: {
      // Search
    },
    methods: {
      getBanner(){
        let postData = {} // 请求参数
        Api('getBannerList_web',postData).then(data => {
          if(data.status==0){
            this.imagesData = data.data;
            console.log(data.data)
          }
        })
      },
    },
    created() {
      // this.getBanner();
      localStorage.setItem("activeIndex",'1')
      localStorage.setItem("activeIndex",'1')
    }
  }
</script>

<style scoped>
.body{
  background: #FFFFFF;
}
  .el-carousel__item{
    background-color: #ffffff;
    border-radius: 5px;
  }

  .top-adv{
    color: white;
    text-align: center;
    /*width: 800px;*/
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 60px;
    line-height: 60px;
  }
  .row-bg {
    padding: 10px 0;
  }

  .card{
    width: 350px;
    height: 466px;
    /*float: left;*/
    display: inline-block;
    box-shadow: 0px 5px 60px 0px rgba(0, 33, 14, 0.1);
    border-radius: 0px 40px 40px 40px;
  }
  .card p{
    width: 100%;
    text-align: center;
    height: 28px;
    font-size: 28px;
    font-family: PingFangSC;
    font-weight: 600;
    color: #333333;
  }
  .card img{
    margin-top: 88px;
  }

.img_card{
  width: 250px;
  height: 206px;
  /*float: left;*/
  display: inline-block;
}

.img_card p{
  color: #332D0A;
}

  ul{
    list-style: none;
  }
  .ft12{
    font-size: 12px;
  }
  .mb15{
    margin-bottom: 15px;
  }

.box-card:hover
{
  background-color:#005de8;
  color: #FFFFFF;
}
  .el-avatar{
    width: 100px; height: 100px;margin-top: 40px;background: #FFFFFF;padding: 20px
  }
  .my_col{
    width: 290px;float: left;margin: 47px;
  }


.title {
  padding-top: 60px;
  text-align: left;
}

.title .title-max {
  padding-left: 8px;
  font-size: 30px;
  font-weight: bold;
  border-left: 4px solid #0764B5;
}

.title .title-min {
  font-size: 18px;
  color: #ccc;
}

/*个人企业*/
.person {
  height: 680px;
  background: white;
}


.person .person-content {
  height: 350px;
}

.person .person-content .person-content-tab {
  padding-top: 50px;
  height: 80px;
}

.person .person-content .person-content-tab ul {
  width: 200px;
  height: 80px;
  margin: auto;
}

.person .person-content .person-content-tab ul li {
  float: left;
  text-align: center;
  font-size: 28px;
  line-height: 40px;
  font-weight: bold;
  margin: 20px;
}

.person-content-tab-hover{
  color: #0764B5;
  border-bottom: 4px solid #0764B5;
}
/*.person .person-content .person-content-tab ul li:hover {
    color: #0764B5;
    border-bottom: 4px solid #0764B5;
}*/

.person .person-content .person-content-tab-content {

  padding-top: 35px;
  width: 100%;
}

.person .person-content .person-content-tab-content li {
  width: 180px;
  float: left;
  margin-right: 152px;
  text-align: center;
  color: #0764B5;
  font-family: Source Han Sans CN;
}


.person .person-content .person-content-tab-content .person-content-tab-content-img {
  border-radius: 180px;
  background: #F4F4F4;

}

.person .person-content .person-content-tab-content .person-content-tab-content-img img {
  width: 100px;
  height: 100px;
  margin: 40px;
}
/*用心服务 专业保障*/
.picture {
  height: 914px;
}

.picture .picture-content {
  height: 600px;
}

.picture .picture-content ul li .picture-content-img{
  height: 290px;
  width: 380px;
}

.picture .picture-content ul li {
  float: left;
  width: 380px;
  position: relative;
  margin: 0 20px 15px 0;
}

.picture .picture-content ul li.picture-content-right0 {
  margin-right: 0;
}

.picture .picture-content ul li.picture-content-bottom0 {
  margin-bottom: 0;
}

.picture .picture-content ul li .picture-content-bottom {
  width: 100%;
  height: 80px;
  text-align: center;
  position: absolute;
  bottom: 3px;
  background: #000;
  opacity: 0.5
}

.picture .picture-content ul li .picture-content-bottom1 {
  height: 80px;
  position: absolute;
  bottom: 3px;
  width: 100%;
  color: white;
  text-align: center
}

.picture .picture-content ul li .picture-content-bottom1 .picture-content-bottom-title {
  height: 42px;
  line-height: 42px;
  font-size: 28px;
}

.picture .picture-content ul li .picture-content-bottom1 .picture-content-bottom-subtitle {
  font-size: 18px;
  height: 18px;
  line-height: 18px;
}

/*合作伙伴*/
.cooperation {
  height: 1130px;
  background: white;
}

.cooperation .cooperation-partner {
  width: 100%;
  height: 200px;
}

.cooperation .cooperation-partner ul li {
  width: 212px;
  height: 80px;
  float: left;
  margin-right: 30px;
  margin-bottom: 30px;
  background: #F4F4F4;
  text-align: center;
}

.cooperation .cooperation-partner ul li img {
  margin: 19px 0;
  height: 42px;
}

.cooperation .cooperation-partner ul li.cooperation-partner-margin0 {
  margin: 0;
}

.cooperation .cooperation-product {
  height: 300px;
  width: 216px;
  position: relative;
}

.cooperation .cooperation-product .cooperation-product-code {
  position: absolute;
  top: 80px;
}

.cooperation .cooperation-product .cooperation-product-code img {
  width: 216px;
  height: 216px;
}

.cooperation-product-picture {
  position: absolute;
  width: 450px;
  height: 430px;
  top: 0px;
  left: 652px;
}

.cooperation .cooperation-product .cooperation-product-code-back {
  height: 46px;
  width: 130px;
  line-height: 35px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
  background-image: url("http://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/zhu 20.png");
}

</style>
