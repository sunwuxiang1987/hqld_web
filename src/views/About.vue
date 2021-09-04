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
          <p class="top-adv-max" style="font-size: 79px;color: #0C244D;margin-bottom: 40px">联系我们</p>
          <p class="top-adv-min" style="font-size: 29px;color: #0C244D;margin-top: 0px">用眼、用心去服务</p>

        </div>
      </div>
    </el-row>


    <div style="margin-left: auto;margin-right: auto;width: 1200px;margin-bottom: 100px" >

      <el-row style="">
        <p style="width: 100%;text-align:left;height: 38px;font-size: 35px;font-family: PingFangSC;font-weight: 600;color: #333;line-height: 66px;">联系方式</p>
      </el-row>

      <el-row :style="contentbg" style="margin-left: auto;margin-right:auto;">
        <p style="text-align: left;width: 100%;height: 76px;font-size: 24px;font-family: PingFangSC;font-weight: 400;color: #333333;line-height: 56px;">联系电话： <br>400-0129-068</p>
        <br>
        <p style="text-align: left;width: 100%;height: 76px;font-size: 24px;font-family: PingFangSC;font-weight: 400;color: #333333;line-height: 56px;">E-mail： <br>info@ishansong.com</p>
        <br>
        <p style="text-align: left;width: 100%;height: 76px;font-size: 24px;font-family: PingFangSC;font-weight: 400;color: #333333;line-height: 56px;">公司地址：  <br>重庆市渝北区紫荆路159号伟岸•一品城1幢3-9</p>
      </el-row>



    </div>


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
        title:require('@/assets/title.png'),
        service:require('@/assets/service11.png'),
        phoneico:require('@/assets/phoneico.png'),
        sharebg: {
          backgroundImage:'url(' + require('@/assets/aboutbg.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          height:'594px',
          color: '#fff',
        },contentbg: {
          backgroundImage:'url(' + require('@/assets/aboutbg.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          height:'617px',
          width:'1103px',
          color: '#fff',
        },
        imagesData: [
          {
            img: require('@/assets/banner3_1.png'),
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
