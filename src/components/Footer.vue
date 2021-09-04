<template>
<div>

  <div class="nav">
    <ul>
      <li id="wechat" class=""><img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/weixin -1.png">微信客服</li>
      <li id="qq" class="">
        <a href="https://wpa.qq.com/msgrd?v=3&amp;uin=2985882026&amp;site=qq&amp;menu=yes" target="new" style="color: rgb(0, 0, 0);">
          <img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/qq 2424.png">QQ客服
        </a>
      </li>
    </ul>
  </div>

    <div class="bottom">
      <div class="content">
        <div class="bottom-nav" style="padding-bottom: 0px">
          <ul>
            <li><a href="#">成为旅递达人</a>&nbsp;&nbsp;/&nbsp;&nbsp;</li>
            <li><a href="#">常见问题</a>&nbsp;&nbsp;/ &nbsp;&nbsp;</li>
            <li><a href="#">关于我们</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>环球旅递：跨国跨省市帮带撮合平台，便携式小件帮带极速当日达。</li>
          </ul>
        </div>
        <div class="bottom-contactinformation">
          <span>营业执照电话：<a href="tel:400-0129-068">400-0129-068</a></span>
          <span>企业邮箱：info@ishansong.com</span>
          <span>廉政举报邮箱：lzjb@ishansong.com</span>
          <span>联系地址：重庆市渝北区紫荆路159号伟岸•一品城1幢3-9</span>
        </div>
        <div class="bottom-record">
			<span><a href="https://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020200326120423000005655753-SAIC_SHOW_310000-2c9be8bd739a2a7f0173bfc7c70c22e6946&amp;signData=MEQCIAEtzrzmWbPN3vKAiTabOphy892kPN1p/r8LQXBBjrELAiAZQgmeq/3C8fN+9xdDPHMhJIzA2wBlFA7xcYxfW0a71w==" target="new">
				<img src="https://huanqiulvdi.oss-accelerate.aliyuncs.com/guanwang/liz.png" style="height: 30px">
			</a>
            </span>
          <span>重庆市旅递物流有限公司&nbsp;&nbsp;<a href="https://icp.chinaz.com/home/info?host=travelsender.com" target="new">渝ICP备2021007272号</a>
            </span>
        </div>
      </div>
    </div>
</div>

</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  ul{
    list-style: none;
    padding: 0px;
  }
  /*底部*/
  .bottom {
    height: 259px;
    color: #ccc;
    text-align: center;
    background: #081726;
    width: 100%;
    float: left;
  }

  .bottom .bottom-nav {
    padding: 50px 0;
    height: 27px;
    text-align: center;
  }

  .bottom .bottom-nav ul {
    width: 300px;
    margin: auto;
  }

  .bottom .bottom-nav ul li {
    float: left;
    color: white;
  }

  .bottom .bottom-nav ul li a {
    font-size: 16px;
    height: 27px;
    color: #ccc;
    line-height: 27px;
  }

  .bottom .bottom-contactinformation {

    font-size: 12px;
  }

  .bottom .bottom-contactinformation span {
    margin: 0 15px;
  }
  .bottom .bottom-contactinformation span a{
    color: #ccc;
  }

  .bottom .bottom-record {
    margin: 20px;
    line-height: 20px;
    font-size: 12px;
  }

  .bottom .bottom-record a {
    color: #ccc;
  }

  /*客服导航*/
  .nav {
    position: fixed;
    right: 0px;
    top: 450px;
    z-index: 999;
    width: 100px;
    height: 120px;
    background: white;
    text-align: left;

  }

  .nav ul li img {
    display: inline-block;
    vertical-align: middle
  }

  .nav ul li {
    cursor: pointer;
    height: 40px;
    font-size: 14px;
    padding-left: 5px;
    line-height: 40px;
  }
  .nav ul li a{
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: #000;
  }
  .nav-hover{
    background: #0764B5;
    color: white;
  }

</style>
