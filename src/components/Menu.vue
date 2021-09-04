<template>
  <el-row type="flex" justify="center" :style="style" >
    <div style="width: 1180px">
      <el-menu
              :default-active="menuIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              text-color="#FFFFFF"
              active-text-color="#FFFFFF"
              style="font-weight: bold;height: 60px;"
      >
        <el-menu-item index="1" style="margin-right: 50px;margin-left: 50px">在线下单</el-menu-item>
        <el-menu-item index="2" style="margin-right: 50px">我的订单</el-menu-item>
        <el-menu-item style="float: right">
          <span>欢迎您：{{nickname}}</span>
        </el-menu-item>

      </el-menu>
    </div>
  </el-row>

</template>

<script>
  export default {
    name: "Header",

    props: {
      token:{
        type: String,
        default:localStorage.getItem("accessToken")
      }
    },
    data() {
      return {
        isFixed:false,
        logo:require('@/assets/newlogo.png'),
        style:"position: fixed;z-index: 999;left:0px;top:80px;width: 100%;height:60px;background: rgba(8, 24, 51, 1) ",
        menuIndex: localStorage.getItem("menuIndex"),
        nickname: localStorage.getItem("nickname")?localStorage.getItem("nickname"):"请登录"
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        localStorage.setItem('menuIndex',key)
        var token = localStorage.getItem("accessToken")
        if(key == 1){
          if(token){
            this.$router.push({ path: '/order' });
          }else{
            this.$router.push({ path: '/order_login' });
          }
        }else if(key == 2){
          if(token){
            this.$router.push({ path: '/me' });
          }else{
            this.$router.push({ path: '/me_login' });
          }
        }
      },
      //登录用router-link 这里注册把跳转写到JS
      register(){
        this.$router.push({ path: '/register' });
      },
      logout(){
        localStorage.setItem('accessToken','');
        //退出后通知父组件，让父组件通知其他组件
        //父组件收到后又传回来通知变动
        this.$emit('childFn', "");

        this.$message({
          message: '您已退出登录',
          type: 'success'
        });
        this.$router.push({ path: '/index' });
      }
    },
    created() {
      // this.mounted();
    }

  }
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-menu{
    border: none;
    background: none;
  }
  .el-menu-item{
    font-size: 15px;
    height: 50px;
    line-height: 60px;
    padding:0 5px;
  }

  .el-menu-item:hover{
    background: none !important;
  }
  .el-menu-item:focus{
    background: none !important;
  }

  .el-menu-item:first-child:hover{
    background: none !important;
  }

</style>
