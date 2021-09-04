<template>
  <div style="width: 100%;margin: auto;">
    <Menu></Menu>

    <div style="float:left;width: 100%;height: 800px;background: #F5F7FA;padding-top: 50px;margin-top: 140px;padding-bottom: 100px">

      <div style="width: 1000px;height: 712px;background: #FFFFFF;opacity: 1;border-radius: 0px;margin: auto;padding-top: 100px;">
        <el-row style="width: 376px;height: 127px;line-height: 127px;margin-bottom: 20px;padding-top: 50px;margin-left: auto;margin-right: auto;">
          <img :src="success1" style="width: 166px;float: left;margin-right: 10px">
          <span style="width:200px;float:left;font-size: 20px;font-family: Source Han Sans CN;font-weight: 400;color: #49C791;">下单成功！请等待接单</span>
        </el-row>

        <el-row style="width: 100%;float: left">
          <img :src="success2" style="margin-top: 30px">
        </el-row>


      </div>

    </div>

  </div>
</template>

<script>
  import { TokenApi } from '@/api/interface' // 引入接口
  import { Api } from '@/api/interface' // 引入接口
  import Menu from "@/components/Menu";
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
        success0:require('@/assets/success0.png'),
        success1:require('@/assets/success1.png'),
        success2:require('@/assets/success2.png'),
        loginbg: {
          backgroundImage:'url(' + require('@/assets/order1.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          color: '#fff',
        },

        activeUsdt:0,
        fee:0.05,
        realGet:0.000000,
        activeName: 'first',
        tableData: [],
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
      submitForm(formName){

      },

    },
    created() {
    }

  }
</script>

<style scoped>
  body{
    background: #FFFFFF;
  }
</style>
