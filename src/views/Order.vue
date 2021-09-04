<template>
  <div style="width: 100%;margin: auto;">
    <Menu></Menu>
    <el-row style="width: 100%;height: 566px;background-size: 100% 100%;padding-top: 50px;float: left;margin-top: 140px" :style="loginbg">
      <p style="width: 100%;text-align: center;height: 48px;font-size: 68px;font-family: Source Han Sans CN;font-weight: 400;color: #081833;">在线发布需求</p>
      <p style="width: 100%;text-align: center;height: 24px;font-size: 24px;font-family: Source Han Sans CN;font-weight: 400;color: #081833;">填写信息 极速服务</p>
      <div style="width: 800px;text-align: center;margin-left: auto;margin-right: auto;margin-top: 50px">
        <el-button  style="color: white;font-size:24px;font-weight: 400;border: #163172;width: 280px;height: 68px;background: #1E56A0;opacity: 1;border-radius: 34px;">在线下单</el-button>
      </div>
    </el-row>

    <div style="float:left;width: 100%;height: 1100px;background: #F5F7FA;padding-top: 50px">
      <div style="width: 1000px;height: 1012px;background: #FFFFFF;opacity: 1;border-radius: 0px;margin: auto;padding: 20px 120px">

        <p style="text-align:center;height: 32px;font-size: 32px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;opacity: 1;">在线下单</p>
        <el-form ref="form" :model="addForm" label-width="120px">

          <el-row style="width: 100%;height: 43px;line-height: 43px;margin-bottom: 20px">
            <img :src="form" style="float: left"><span style="float: left;margin-left: -200px;font-size: 20px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;">始发信息</span>
          </el-row>

<!--          <el-col :span="12">-->
            <el-form-item label="始发地联系人:" style="width: 50%;display: inline-block">
              <el-input v-model="addForm.from_name"  placeholder="请填写始发地联系人"></el-input>
            </el-form-item>
<!--          </el-col>-->
<!--          <el-col :span="12">-->
            <el-form-item label="手机号码:" style="width: 50%;display: inline-block">
              <el-input v-model="addForm.from_phone" placeholder="请填写手机号码"></el-input>
            </el-form-item>
<!--          </el-col>-->
          <el-form-item label="省市选择:" >
            <v-distpicker @selected="from_city" style="float: left"></v-distpicker>
          </el-form-item>
          <el-form-item label="详细地址:">
            <el-input v-model="addForm.from_address"  placeholder="请填写详细地址"></el-input>
          </el-form-item>


          <el-row style="width: 100%;height: 43px;line-height: 43px;margin-bottom: 20px">
            <img :src="form" style="float: left"><span style="float: left;margin-left: -200px;font-size: 20px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;">接收信息</span>
          </el-row>

<!--          <el-col :span="12">-->
            <el-form-item label="目的地联系人：" style="width: 50%;display: inline-block">
              <el-input v-model="addForm.to_name"  placeholder="请填写目的地联系人"></el-input>
            </el-form-item>
<!--          </el-col>-->
<!--          <el-col :span="12">-->
            <el-form-item label="手机号码：" style="width: 50%;display: inline-block">
              <el-input v-model="addForm.to_phone"  placeholder="请填写手机号码"></el-input>
            </el-form-item>
<!--          </el-col>-->
          <el-form-item label="省市选择:" >
            <v-distpicker @selected="to_city" style="float: left"></v-distpicker>
          </el-form-item>
          <el-form-item label="详细地址：">
            <el-input v-model="addForm.to_address"  placeholder="请填写详细地址"></el-input>
          </el-form-item>


          <el-row style="width: 100%;height: 43px;line-height: 43px;margin-bottom: 20px">
            <img :src="form" style="float: left"><span style="float: left;margin-left: -200px;font-size: 20px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;">物品信息</span>
          </el-row>

          <el-form-item label="物品类型：">
            <el-select v-model="addForm.cid" placeholder="请选择" style="width: 100%">
              <el-option v-for="(item, index) in cidData" :key="index" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物品重量(Kg)：">
            <el-input v-model="addForm.weight" placeholder="请填写重量（单位:kg）"></el-input>
          </el-form-item>


<!--          <el-col :span="12">-->
            <el-form-item label="期望取件时间：" style="width: 50%;display: inline-block">
              <el-date-picker
                      v-model="addForm.begin_time"
                      type="datetime"
                      placeholder="选择日期时间" style="width: 100%">
              </el-date-picker>
            </el-form-item>
<!--          </el-col>-->
<!--          -->
<!--          <el-col :span="12">-->
            <el-form-item label="期望送达时间：" style="width: 50%;display: inline-block">
              <el-date-picker
                      v-model="addForm.finish_time"
                      type="datetime"
                      placeholder="选择日期时间" style="width: 100%">
              </el-date-picker>
            </el-form-item>
<!--          </el-col>-->


          <el-form-item label="备注说明：">
            <el-input type="textarea" v-model="addForm.describe"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 20px;margin-left: 0px" >

          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm" style="width: 280px;height: 58px;background: #1E56A0;opacity: 1;border-radius: 29px;font-size: 24px">提交</el-button>
      </div>

    </div>

    <el-dialog :title="dialogTitle" width="400px" :visible.sync="dialogVisible" center :before-close="handleClose">
      <div style="width: 350px;margin: auto;height: 150px;border: 2px solid #081833;font-size: 26px" >
        <p style="text-align: center;color: hsla(37, 79%, 56%, 1)">下单成功</p>
        <p style="text-align: center;color: hsla(37, 79%, 56%, 1)"><span style="font-size: 18px;color: #8c939d">合计金额</span>￥{{price}}</p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="gotopay" style="width: 200px;height: 48px;background: #1E56A0;opacity: 1;border-radius: 24px;font-size: 20px;color: white">立即支付</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import { TokenApi } from '@/api/interface' // 引入接口
  import { Api } from '@/api/interface' // 引入接口
  import Menu from "@/components/Menu";
  import VDistpicker from 'v-distpicker' // https://distpicker.unie.fun/这是插件官网，可以去看详细文档

  export default {
    name: "Order",
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
        form:require('@/assets/form.png'),
        loginbg: {
          backgroundImage:'url(' + require('@/assets/order1.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          color: '#fff',
        },
        cidData:{},
        addForm: {
          from_phone:'',
          to_phone:'',
          from_address: "",
          to_address: "",
          from_name:'',
          to_name:'',
          weight:null,
          describe:'',
          finish_time:'',
          begin_time:'',
          insure:'',
          imgs:'',
          cid:'',
          fid:0,
          tid:0,
        },
        from_code:{
          province:null,
          city:null,
          area:null,
        },
        to_code:{
          province:null,
          city:null,
          area:null,
        },
        dialogVisible:false,
        dialogTitle:'订单支付',
        price:'0',
        order_id:null,
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
      Menu,VDistpicker
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitForm(formName){
        if(!this.from_code.province || !this.to_code.province){
          this.$message({
            message: '请选择省市',
            type: 'error'
          });
          return;
        }
        this.addFromAddr();
        if(!this.addForm.fid) {
          this.addFromAddr();
        }else if(!this.addForm.tid){
          this.addToAddr()
        }else if(this.addForm.fid && this.addForm.tid){
         this.AddOrder()
        }

      },
      from_city(data){
        console.log(data.province.code)
        this.from_code.province = data.province.code
        this.from_code.city = data.city.code
        this.from_code.area = data.area.code
      },
      to_city(data){
        console.log(data.province.value + data.city.value + data.area.value)
        this.to_code.province = data.province.code
        this.to_code.city = data.city.code
        this.to_code.area = data.area.code
      },
      addFromAddr(){
        var address  = this.from_code
        address.name = this.addForm.from_name
        address.phone = this.addForm.from_phone
        address.address = this.addForm.from_address
        TokenApi(this,'Address',address).then(data => {
          if(data.status==0){
            this.addForm.fid = data.data;
            if(!this.addForm.tid){
              this.addToAddr()
            }else{
              //已通过其他方式获得了tid
              this.AddOrder()
            }
          }else{
            this.$message({
              message: data.data.data,
              type: 'error'
            });
          }
          console.log(data.data)
        })
      },
      addToAddr(){
        var address  = this.to_code
        address.name = this.addForm.to_name
        address.phone = this.addForm.to_phone
        address.address = this.addForm.to_address
        TokenApi(this,'Address',address).then(data => {
          if(data.status==0){
            this.addForm.tid = data.data;
            this.AddOrder()
          }else{
            this.$message({
              message: data.data.data,
              type: 'error'
            });
          }
          console.log(data.data)
        })
      },
      AddOrder(){
        TokenApi(this,'AddOrder',this.addForm).then(data => {
          if(data.status==0){
            this.$message({
              message: '下单成功，请及时支付',
              type: 'success'
            });
            this.order_id = data.data
            this.GetPrice()
          }else{
            this.$message({
              message: data.data.data,
              type: 'error'
            });
          }
          console.log(data.data)
        })
      },
      CategoryList(){
        Api('CategoryList',this.addForm).then(data => {
          if(data.status==0){
            this.cidData = data.data
          }else{
            this.$message({
              message: data.data.data,
              type: 'error'
            });
          }
          console.log(data.data)
        })
      },
      GetPrice(){
        Api('OrderDetail',{id:this.order_id}).then(data => {
          if(data.status==0){
            this.price = data.data.price
            this.dialogVisible = true
          }else{
            this.$message({
              message: data.data.data,
              type: 'error'
            });
          }
          console.log(data.data)
        })
      },
      gotopay(){
        console.log("here")
      },
      handleClose(done) {
        this.$message({
          message: '关闭后可以到订单中心继续支付',
          type: 'success'
        });
      }
    },
    created() {
      this.CategoryList()
    }

  }
</script>

<style scoped>
  body{
    background: #FFFFFF;
  }
</style>
