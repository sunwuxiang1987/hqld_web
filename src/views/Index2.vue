<template>
  <div>
    <el-carousel height="798px">
      <el-carousel-item v-for="(item, index) in imagesData" :key="index">
        <el-image :src="item.img" style="width: 100%" fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>

    <el-row type="flex" class="row-bg" justify="center" style="padding: 50px 0px;position:absolute;top:100px;left:30%;z-index: 900">
      <div class="page_width" >
        <div class="top-adv">
          <p class="top-adv-max" style="font-size: 70px"> 跨城帮带  就选旅递</p>
          <p class="top-adv-min" style="font-size: 30px">帮取，帮送，全国当日达！</p>
          <p class="top-adv-tel" style="font-size: 40px">Tel:400-0129-068</p>
          <p class="top-adv-min" style="font-size: 30px">手机识别  小程序快捷下单</p>
          <img src="http://www.travelsender.com/uploads/mini.png" style="width:200px;margin-left:400px;margin-top:-210px">
        </div>
      </div>
    </el-row>

    <Search></Search>


    <el-row type="flex" class="row-bg" justify="center" style="margin:0px;padding: 0px">
      <div class="person ">
        <div class="page_width">
          <div class="title">
            <p class="title-max">
              多场景 多选择
            </p>
            <p class="title-min">
              多渠道运力支持，满足更多需求
            </p>
          </div>

          <div class="person-content">
            <div class="person-content-tab">
              <ul>
                <li class="person-content-tab-hover" id="tab-person">个人</li>
                <li id="tab-enterprise" class="">企业</li>
              </ul>
            </div>
            <div class="person-content-tab-content">
              <ul class="tab-person" style="padding: 0px">
                <li>
                  <div class="person-content-tab-content-img">
                    <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/zhu -3.png">
                  </div>
                  <p>文件与证件</p>
                </li>
                <li>
                  <div class="person-content-tab-content-img">
                    <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/yifu 100100.png">
                  </div>
                  <p>服装与配饰</p>
                </li>
                <li>
                  <div class="person-content-tab-content-img">
                    <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/dianzichanping 100100.png">
                  </div>
                  <p>电子产品</p>
                </li>
                <li style="margin-right: 0">
                  <div class="person-content-tab-content-img">
                    <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/shengxian 100100.png">
                  </div>
                  <p>食品与生鲜</p>
                </li>
              </ul>
              <ul class="tab-enterprise" hidden="" style="display: none;">
                <li>
                  <div class="person-content-tab-content-img">
                    <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/dayingji%20100100.png">
                  </div>
                  <p>打印机</p>
                </li>
                <li>
                  <div class="person-content-tab-content-img">
                    <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/yiyao%20100100.png">
                  </div>
                  <p>医药</p>
                </li>
                <li>
                  <div class="person-content-tab-content-img">
                    <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/zhengjian%20100100.png">
                  </div>
                  <p>证件</p>
                </li>
                <li style="margin-right: 0">
                  <div class="person-content-tab-content-img">
                    <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/gengduo.png">
                  </div>
                  <p>更多</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </el-row>


    <el-row type="flex" class="row-bg" justify="center" style="margin:0px;background-color: #FAFAFA;padding: 0px">
    <div class="picture">
      <div class="page_width">
        <div class="title">
          <p class="title-max">
            用心服务 专业保障
          </p>
          <p class="title-min">
            精细化旅递服务，用专业保障客户
          </p>
        </div>
        <div class="picture-content">
          <ul style="padding: 0px">
            <li class="picture-content-bottom0">
              <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/juxing%2011%20%208.png">
              <div class="picture-content-bottom">
              </div>
              <div class="picture-content-bottom1">
                <div class="picture-content-bottom-title">安心</div>
                <div class="picture-content-bottom-subtitle">运单全流程实时监控</div>
              </div>
            </li>
            <li>
              <img class="picture-content-img" src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/juxing 11  9.png">
              <div class="picture-content-bottom">
              </div>
              <div class="picture-content-bottom1">
                <div class="picture-content-bottom-title">放心</div>
                <div class="picture-content-bottom-subtitle">大平台金融服务</div>
              </div>
            </li>
            <li class="picture-content-right0">
              <img class="picture-content-img" src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/1.png">
              <div class="picture-content-bottom">
              </div>
              <div class="picture-content-bottom1">
                <div class="picture-content-bottom-title">高效</div>
                <div class="picture-content-bottom-subtitle">实时动态匹配最优路径
                </div>
              </div>
            </li>
            <li class="picture-content-bottom0">
              <img class="picture-content-img" src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/juxing%2011%20%2011.png">
              <div class="picture-content-bottom">
              </div>
              <div class="picture-content-bottom1">
                <div class="picture-content-bottom-title">便捷</div>
                <div class="picture-content-bottom-subtitle">一对一两端快捷取、送</div>
              </div>
            </li>
            <li class="picture-content-bottom0 picture-content-right0">
              <img class="picture-content-img" src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/b6346e89ad9ec5ec29e9a48cae88aae.png">
              <div class="picture-content-bottom">
              </div>
              <div class="picture-content-bottom1">
                <div class="picture-content-bottom-title">科技</div>
                <div class="picture-content-bottom-subtitle">对接公安系统人脸识别鉴定所有达人</div>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
    </el-row>



    <el-row type="flex" class="row-bg" justify="center" style="padding: 50px 0px;">
      <div class="page_width" >

        <div class="cooperation">
          <div class="content">
            <div class="title">
              <p class="title-max">
                专业可靠的合作伙伴
              </p>
              <p class="title-min">
                与众多知名企业合作，扩大了企业服务半径，提高企业服务品质
              </p>
            </div>
            <div class="cooperation-partner">
              <ul style="padding: 0px">
                <li><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/034ca1dbe655aebc9a101403670607c8.png"></li>
                <li><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/6d5d560f2ba517ca581efbc86f29d05e.png"></li>
                <li><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/weixingongzhongpingtai.png"></li>
                <li><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/8f04007221699ebb0256e3d9c1694111.png"></li>
                <li class="cooperation-partner-margin0"><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/2761b30310099a6a0fc7cc3d8b76aa46.png"></li>

                <li><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/download.png"></li>
                <li><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/8adfdfeb308479c7928b3b0ea228a7ab.png"></li>
                <li><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/730e0cf3d7ca7bcb6dc33d1ab2096b63f624a84f.png"></li>
                <li><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/3b8db7626326c9d9bcb277e14703f294.png"></li>
                <li class="cooperation-partner-margin0"><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/d31b0ef41bd5ad6ea40700f68dcb39dbb6fd3c2b.png">
                </li>
              </ul>
            </div>
            <div class="title">
              <p class="title-max">
                旅递产品
              </p>
              <p class="title-min">
                在微信搜索小程序“环球旅递”或关注我们的公众号
              </p>
            </div>
            <div class="cooperation-product">
              <div class="cooperation-product-code">
                <div class="cooperation-product-code-back">微信小程序</div>
                <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/xiaochengxu_code.png">
              </div>
              <div class="cooperation-product-code" style="left: 300px">
                <div class="cooperation-product-code-back">微信公众号</div>
                <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/wechat_code.png"></div>
              <div class="cooperation-product-picture">
                <div style="float: left">
                  <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/zhu 56.png">
                </div>
                <div style="float: left;position: relative;top: 158px">
                  <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/zhu 57.png">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </el-row>


  </div>
</template>
<script>
  import { Api } from '@/api/interface' // 引入接口
  import Search from "@/components/Search";
  export default {
    name: "Index2",
    data(){
      return{
        imagesData: [
          {
            img: require('@/assets/banner.png'),
            href: ""
          }],
        tableData: []
      }
    },
    components: {
      Search
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
      this.getBanner();
    }
  }
</script>

<style scoped>
.body{
  background: #FFFFFF;
}
  .el-carousel__item{
    background-color: #fafafa;
    border-radius: 5px;
  }

  .top-adv{
    color: white;
    text-align: left;
    width: 800px;
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
