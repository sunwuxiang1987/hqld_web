<template>
  <div style="width: 100%;margin: auto;">
    <Menu></Menu>

    <div style="float:left;width: 100%;min-height: 800px;background: #F5F7FA;padding-top: 20px;margin-top: 140px;padding-bottom: 100px">

      <div style="width: 1200px;min-height: 712px;background: #FFFFFF;opacity: 1;border-radius: 0px;margin: auto;padding-top: 50px;">

        <el-row style="padding-left: 30px;padding-right: 30px;height: 50px" id="search">
          <el-input placeholder="搜索我的订单" v-model="addForm.keyword"  style="height: 50px">
            <el-button slot="append" icon="el-icon-search" @click="submitForm('addForm')">搜索</el-button>
          </el-input>
        </el-row>

        <el-row style="height: 80px">
          <p style="font-size: 30px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;text-align: left;padding-left: 30px">我的订单</p>
        </el-row>

        <el-row style="padding-left: 30px;padding-right: 30px;margin-bottom: 20px">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="0">
              <div v-for="(item, index) in listData" :key="index">

                <div class="item">
                  <div class="left">
                    <div class="title">
                      <span style="color: #ADADAD;margin-right: 5px">物品</span>
                      <span>{{item.c_name}}</span>
                      <span style="margin-left:200px;color: #ADADAD;margin-right: 5px">下单时间</span>
                      <span>{{item.created_at}}</span></div>
                    <div class="content">
                      <div class="first">
                        <p class="p1">{{item.from_city}}</p>
                        <p class="p2">{{item.from_name}}&nbsp;&nbsp;&nbsp;{{item.from_phone}}</p>
                      </div>
                      <div class="second">
                        <div style="width: 100%;float: left;text-align: left;line-height: 68px"><img :src="fromto" ></div>
                        <p class="p4" v-if="item.status === 1">待付款</p>
                        <p class="p4" v-if="item.status === 2">已付款</p>
                        <p class="p4" v-if="item.status === 3">运输中</p>
                        <p class="p4" v-if="item.status === 4">已完成</p>
                        <p class="p4" v-if="item.status === 8">已退款</p>
                        <p class="p4" v-if="item.status === 9">已取消</p>
                      </div>
                      <div class="third">
                        <p class="p1 p3">{{item.to_city}}</p>
                        <p class="p2">{{item.to_name}}&nbsp;&nbsp;&nbsp;{{item.to_phone}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="status">
<!--                      状态:1.待付款，2已付款，3运输中，4.已完成，8.已退款，9.已撤销-->
                      <p v-if="item.status === 1" style="color: #E8A336;">￥{{item.price}}</p>
                      <p v-if="item.status === 2">已付款</p>
                      <p v-if="item.status === 3">运输中</p>
                      <p v-if="item.status === 4">已完成</p>
                      <p v-if="item.status === 8">已退款</p>
                      <p v-if="item.status === 9">已取消</p>
                    </div>
                    <div class="options">
                      <el-button v-if="item.status === 1" @click="gotopay(item.id)" style="color: #E8A336;border: 1px #E8A336 solid">立即付款</el-button>
                      <el-button v-if="item.status === 9 || item.status === 4 || item.status ===8 || item.status ===2" @click="once_again">再来一单</el-button>
                      <el-button v-if="item.status === 3" @click="finish_order(item.id)">确认送达</el-button>
                      <el-button  @click="order_detail(item.id)">订单详情</el-button>
                    </div>
                  </div>
                </div>

              </div>

            </el-tab-pane>
            <el-tab-pane label="待支付" name="1">
              <div v-for="(item, index) in listData" :key="index">

                <div class="item">
                  <div class="left">
                    <div class="title">
                      <span style="color: #ADADAD;margin-right: 5px">物品</span>
                      <span>{{item.c_name}}</span>
                      <span style="margin-left:200px;color: #ADADAD;margin-right: 5px">下单时间</span>
                      <span>{{item.created_at}}</span></div>
                    <div class="content">
                      <div class="first">
                        <p class="p1">{{item.from_city}}</p>
                        <p class="p2">{{item.from_name}}&nbsp;&nbsp;&nbsp;{{item.from_phone}}</p>
                      </div>
                      <div class="second">
                        <div style="width: 100%;float: left;text-align: left;line-height: 68px"><img :src="fromto" ></div>
                        <p class="p4" v-if="item.status === 1">待付款</p>
                        <p class="p4" v-if="item.status === 2">已付款</p>
                        <p class="p4" v-if="item.status === 3">运输中</p>
                        <p class="p4" v-if="item.status === 4">已完成</p>
                        <p class="p4" v-if="item.status === 8">已退款</p>
                        <p class="p4" v-if="item.status === 9">已取消</p>
                      </div>
                      <div class="third">
                        <p class="p1 p3">{{item.to_city}}</p>
                        <p class="p2">{{item.to_name}}&nbsp;&nbsp;&nbsp;{{item.to_phone}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="status">
                      <!--                      状态:1.待付款，2已付款，3运输中，4.已完成，8.已退款，9.已撤销-->
                      <p v-if="item.status === 1" style="color: #E8A336;">￥{{item.price}}</p>
                      <p v-if="item.status === 2">已付款</p>
                      <p v-if="item.status === 3">运输中</p>
                      <p v-if="item.status === 4">已完成</p>
                      <p v-if="item.status === 8">已退款</p>
                      <p v-if="item.status === 9">已取消</p>
                    </div>
                    <div class="options">
                      <el-button v-if="item.status === 9 || item.status === 4 || item.status ===8 || item.status ===2" @click="once_again">再来一单</el-button>
                      <el-button v-if="item.status === 3" @click="finish_order(item.id)">确认送达</el-button>
                      <el-button v-if="item.status === 1" @click="gotopay(item.id)" style="color: #E8A336;border: 1px #E8A336 solid">立即付款</el-button>
                      <el-button  @click="order_detail(item.id)">订单详情</el-button>
                    </div>
                  </div>
                </div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="运输中" name="3">
              <div v-for="(item, index) in listData" :key="index">

                <div class="item">
                  <div class="left">
                    <div class="title">
                      <span style="color: #ADADAD;margin-right: 5px">物品</span>
                      <span>{{item.c_name}}</span>
                      <span style="margin-left:200px;color: #ADADAD;margin-right: 5px">下单时间</span>
                      <span>{{item.created_at}}</span></div>
                    <div class="content">
                      <div class="first">
                        <p class="p1">{{item.from_city}}</p>
                        <p class="p2">{{item.from_name}}&nbsp;&nbsp;&nbsp;{{item.from_phone}}</p>
                      </div>
                      <div class="second">
                        <div style="width: 100%;float: left;text-align: left;line-height: 68px"><img :src="fromto" ></div>
                        <p class="p4" v-if="item.status === 1">待付款</p>
                        <p class="p4" v-if="item.status === 2">已付款</p>
                        <p class="p4" v-if="item.status === 3">运输中</p>
                        <p class="p4" v-if="item.status === 4">已完成</p>
                        <p class="p4" v-if="item.status === 8">已退款</p>
                        <p class="p4" v-if="item.status === 9">已取消</p>
                      </div>
                      <div class="third">
                        <p class="p1 p3">{{item.to_city}}</p>
                        <p class="p2">{{item.to_name}}&nbsp;&nbsp;&nbsp;{{item.to_phone}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="status">
                      <!--                      状态:1.待付款，2已付款，3运输中，4.已完成，8.已退款，9.已撤销-->
                      <p v-if="item.status === 1">待付款</p>
                      <p v-if="item.status === 2">已付款</p>
                      <p v-if="item.status === 3">运输中</p>
                      <p v-if="item.status === 4">已完成</p>
                      <p v-if="item.status === 8">已退款</p>
                      <p v-if="item.status === 9">已取消</p>
                    </div>
                    <div class="options">
                      <el-button v-if="item.status === 9 || item.status === 4 || item.status ===8 || item.status ===2" @click="once_again">再来一单</el-button>
                      <el-button v-if="item.status === 3" @click="finish_order(item.id)">确认送达</el-button>
                      <el-button v-if="item.status === 1" @click="gotopay(item.id)" style="color: #E8A336;border: 1px #E8A336 solid">立即付款</el-button>
                      <el-button  @click="order_detail(item.id)">订单详情</el-button>
                    </div>
                  </div>
                </div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="4">
              <div v-for="(item, index) in listData" :key="index">

                <div class="item">
                  <div class="left">
                    <div class="title">
                      <span style="color: #ADADAD;margin-right: 5px">物品</span>
                      <span>{{item.c_name}}</span>
                      <span style="margin-left:200px;color: #ADADAD;margin-right: 5px">下单时间</span>
                      <span>{{item.created_at}}</span></div>
                    <div class="content">
                      <div class="first">
                        <p class="p1">{{item.from_city}}</p>
                        <p class="p2">{{item.from_name}}&nbsp;&nbsp;&nbsp;{{item.from_phone}}</p>
                      </div>
                      <div class="second">
                        <div style="width: 100%;float: left;text-align: left;line-height: 68px"><img :src="fromto" ></div>
                        <p class="p4" v-if="item.status === 1">待付款</p>
                        <p class="p4" v-if="item.status === 2">已付款</p>
                        <p class="p4" v-if="item.status === 3">运输中</p>
                        <p class="p4" v-if="item.status === 4">已完成</p>
                        <p class="p4" v-if="item.status === 8">已退款</p>
                        <p class="p4" v-if="item.status === 9">已取消</p>
                      </div>
                      <div class="third">
                        <p class="p1 p3">{{item.to_city}}</p>
                        <p class="p2">{{item.to_name}}&nbsp;&nbsp;&nbsp;{{item.to_phone}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="status">
                      <!--                      状态:1.待付款，2已付款，3运输中，4.已完成，8.已退款，9.已撤销-->
                      <p v-if="item.status === 1">待付款</p>
                      <p v-if="item.status === 2">已付款</p>
                      <p v-if="item.status === 3">运输中</p>
                      <p v-if="item.status === 4">已完成</p>
                      <p v-if="item.status === 8">已退款</p>
                      <p v-if="item.status === 9">已取消</p>
                    </div>
                    <div class="options">
                      <el-button v-if="item.status === 9 || item.status === 4 || item.status ===8 || item.status ===2" @click="once_again">再来一单</el-button>
                      <el-button v-if="item.status === 3" @click="finish_order(item.id)">确认送达</el-button>
                      <el-button v-if="item.status === 1" @click="gotopay(item.id)" style="color: #E8A336;border: 1px #E8A336 solid">立即付款</el-button>
                      <el-button  @click="order_detail(item.id)">订单详情</el-button>
                    </div>
                  </div>
                </div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="已取消" name="9">
              <div v-for="(item, index) in listData" :key="index">

                <div class="item">
                  <div class="left">
                    <div class="title">
                      <span style="color: #ADADAD;margin-right: 5px">物品</span>
                      <span>{{item.c_name}}</span>
                      <span style="margin-left:200px;color: #ADADAD;margin-right: 5px">下单时间</span>
                      <span>{{item.created_at}}</span></div>
                    <div class="content">
                      <div class="first">
                        <p class="p1">{{item.from_city}}</p>
                        <p class="p2">{{item.from_name}}&nbsp;&nbsp;&nbsp;{{item.from_phone}}</p>
                      </div>
                      <div class="second">
                        <div style="width: 100%;float: left;text-align: left;line-height: 68px"><img :src="fromto" ></div>
                        <p class="p4" v-if="item.status === 1">待付款</p>
                        <p class="p4" v-if="item.status === 2">已付款</p>
                        <p class="p4" v-if="item.status === 3">运输中</p>
                        <p class="p4" v-if="item.status === 4">已完成</p>
                        <p class="p4" v-if="item.status === 8">已退款</p>
                        <p class="p4" v-if="item.status === 9">已取消</p>
                      </div>
                      <div class="third">
                        <p class="p1 p3">{{item.to_city}}</p>
                        <p class="p2">{{item.to_name}}&nbsp;&nbsp;&nbsp;{{item.to_phone}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="status">
                      <!--                      状态:1.待付款，2已付款，3运输中，4.已完成，8.已退款，9.已撤销-->
                      <p v-if="item.status === 1">待付款</p>
                      <p v-if="item.status === 2">已付款</p>
                      <p v-if="item.status === 3">运输中</p>
                      <p v-if="item.status === 4">已完成</p>
                      <p v-if="item.status === 8">已退款</p>
                      <p v-if="item.status === 9">已取消</p>
                    </div>
                    <div class="options">
                      <el-button v-if="item.status === 9 || item.status === 4 || item.status ===8 || item.status ===2" @click="once_again">再来一单</el-button>
                      <el-button v-if="item.status === 3" @click="finish_order(item.id)">确认送达</el-button>
                      <el-button v-if="item.status === 1" @click="gotopay(item.id)" style="color: #E8A336;border: 1px #E8A336 solid">立即付款</el-button>
                      <el-button  @click="order_detail(item.id)">订单详情</el-button>
                    </div>
                  </div>
                </div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="已退款" name="8">
              <div v-for="(item, index) in listData" :key="index">

                <div class="item">
                  <div class="left">
                    <div class="title">
                      <span style="color: #ADADAD;margin-right: 5px">物品</span>
                      <span>{{item.c_name}}</span>
                      <span style="margin-left:200px;color: #ADADAD;margin-right: 5px">下单时间</span>
                      <span>{{item.created_at}}</span></div>
                    <div class="content">
                      <div class="first">
                        <p class="p1">{{item.from_city}}</p>
                        <p class="p2">{{item.from_name}}&nbsp;&nbsp;&nbsp;{{item.from_phone}}</p>
                      </div>
                      <div class="second">
                        <div style="width: 100%;float: left;text-align: left;line-height: 68px"><img :src="fromto" ></div>
                        <p class="p4" v-if="item.status === 1">待付款</p>
                        <p class="p4" v-if="item.status === 2">已付款</p>
                        <p class="p4" v-if="item.status === 3">运输中</p>
                        <p class="p4" v-if="item.status === 4">已完成</p>
                        <p class="p4" v-if="item.status === 8">已退款</p>
                        <p class="p4" v-if="item.status === 9">已取消</p>
                      </div>
                      <div class="third">
                        <p class="p1 p3">{{item.to_city}}</p>
                        <p class="p2">{{item.to_name}}&nbsp;&nbsp;&nbsp;{{item.to_phone}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="right">
                    <div class="status">
                      <!--                      状态:1.待付款，2已付款，3运输中，4.已完成，8.已退款，9.已撤销-->
                      <p v-if="item.status === 1">待付款</p>
                      <p v-if="item.status === 2">已付款</p>
                      <p v-if="item.status === 3">运输中</p>
                      <p v-if="item.status === 4">已完成</p>
                      <p v-if="item.status === 8">已退款</p>
                      <p v-if="item.status === 9">已取消</p>
                    </div>
                    <div class="options">
                      <el-button v-if="item.status === 9 || item.status === 4 || item.status ===8 || item.status ===2" @click="once_again">再来一单</el-button>
                      <el-button v-if="item.status === 3" @click="finish_order(item.id)">确认送达</el-button>
                      <el-button v-if="item.status === 1" @click="gotopay(item.id)" style="color: #E8A336;border: 1px #E8A336 solid">立即付款</el-button>
                      <el-button  @click="order_detail(item.id)">订单详情</el-button>
                    </div>
                  </div>
                </div>

              </div>
            </el-tab-pane>
          </el-tabs>

        </el-row>

        <div id="null_order">
        <el-row style="width: 100%;float: left">
          <img :src="me1">
        </el-row>
        <el-row style="width: 100%;padding-top: 20px;float: left;" >
          <p style="width: 100%;text-align: center;height: 24px;font-size: 16px;font-family: Source Han Sans CN;font-weight: 400;color: #081833;" >没有找到订单</p>
        </el-row>
        </div>

        <el-row style="margin-top: 30px;height: 90px">
          <el-pagination
                  background
                  :hide-on-single-page="ishide"
                  layout="prev, pager, next"
                  @current-change="handleCurrentChange"
                  :page-size="5"
                  :total="list_count">
          </el-pagination>
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
    name: "Me",
    data() {
      var validateinput = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('输入不能为空'));
        } else {
          callback();
        }
      };
      return {
        me1:require('@/assets/me1.png'),
        fromto:require('@/assets/formto.png'),
        loginbg: {
          backgroundImage:'url(' + require('@/assets/order1.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          color: '#fff',
        },
        ishide:true,
        activeName: '0',
        listData: [],
        list_count:0,
        addForm: {
          keyword:null,
          status:0,
          page:1,
          pagesize:5
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
        console.log(tab.name);
        this.addForm.status = tab.name
        this.getOrderList()
      },
      submitForm(formName){
        console.log(this.addForm.keyword)
        this.getOrderList()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        if(this.addForm.page != val){
          this.addForm.page = val;
          this.getOrderList()
        }
      },
      getOrderList(){
        // let postData = {token: this.token,status:status} // 请求参数
        TokenApi(this,'UserOrder',this.addForm).then(data => {
          if(data.status==0){
            this.listData = data.data.data
            this.list_count = data.data.count
            if(this.list_count == 0){
              document.getElementById("null_order").style.display = "block";
            }else{
              document.getElementById("null_order").style.display = "none";
            }
          }
          console.log(data.data)
        })
      },
      gotopay(oid){
        console.log(oid)
      },
      finish_order(oid){
        TokenApi(this,'CompleteOrder',{id:oid}).then(data => {
          if(data.status==0){
            this.$message({
              message: data.data.data,
              type: 'success'
            });
          }else{
            this.$message({
              message: data.data.data,
              type: 'error'
            });
          }
          console.log(data.data)
        })
      },
      once_again() {
        localStorage.setItem('menuIndex', '1')
        this.$router.push({path: '/order'});
      },
      order_detail(oid){
        localStorage.setItem('detail_id', oid)
        this.$router.push({path: '/detail'});
      }

    },
    created() {
      this.getOrderList()
    }

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
    margin-top: 30px;
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
  #search .el-input__inner{
    height: 50px;line-height: 50px;
  }

  #search input{
    height: 50px;line-height: 50px;
  }
</style>
