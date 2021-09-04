<template>
  <div>
    <Header v-bind:token="token" @childFn="parentFn"></Header>
    <div id="app" :style="height">
      <router-view @childFn="parentFn"/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "@/components/Footer";
  import Header from "@/components/Header";
  export default {
    name: 'App',
    data(){
      return {
        token:localStorage.getItem("accessToken"),
        height:{minHeight:(document.documentElement.clientHeight-61-297)+"px"}
      }
    },
    components: {
      Footer,
      Header
    },
    methods:{
      /**
       * 从router-view这个子组件中返回的值，作为登录标记传给另外的组件使用
       * 在组件使用时通过@childFn="parentFn"绑定事件接收函数
       * @param token
       */
      parentFn(token){
        this.token = token
        console.log('from childFn:'+token)
      },

    }
    // updated() {
    //   this.height = document.documentElement.clientHeight-61-297;
    //   console.log(this.height)
    // }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  body{
    margin: 0px;
    background: #FFFFFF;
  }
  .page_width{
    width: 1920px;
  }
  .page_width_item{
    width: 1120px;
  }
</style>
