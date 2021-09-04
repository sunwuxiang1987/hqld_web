<template>
    <div style="width: 100%;margin: auto;">
        <Menu></Menu>

        <div style="float:left;width: 100%;height: 800px;background: #F5F7FA;padding-top: 20px;margin-top: 140px;padding-bottom: 100px">

            <div style="width: 1200px;height: 712px;background: #FFFFFF;opacity: 1;border-radius: 0px;margin: auto;padding-top: 20px;">

                <el-row style="margin-bottom: 20px" >
                    <img :src="goback" style="width: 32px;float: left;margin-left: 60px;margin-right: 10px" @click="go_back"><span style="line-height: 32px;float: left;font-size: 28px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;" @click="go_back">返回订单列表</span>
                </el-row>

                <el-row>
                    <div class="content" style="margin: auto;width: 1080px;font-size: 30px">
                        <div class="before">
                            <p v-if="item.status === 1" style="color: #E8A336">[待付款]</p>
                            <p v-if="item.status === 2" style="color: hsla(214, 68%, 37%, 1)">[已付款]</p>
                            <p v-if="item.status === 3" style="color: #081833">[运输中]</p>
                            <p v-if="item.status === 4" style="color: #1e56a0">[已完成]</p>
                            <p v-if="item.status === 8" style="color: gray">[已退款]</p>
                            <p v-if="item.status === 9" style="color: gray">[已取消]</p>
                        </div>
                        <div class="first">
                            <p class="p1" style="border: none">{{item.from_city}}</p>
                        </div>
                        <div class="second">
                            <div style="width: 100%;float: left;text-align: left;line-height: 93px"><img :src="fromto" ></div>
                        </div>
                        <div class="third">
                            <p class="p1" style="border: none">{{item.to_city}}</p>
                        </div>
                        <div class="after">
                            <p style="text-align: right;color: hsla(37, 79%, 56%, 1)"><span style="font-size: 18px;color: #8c939d">合计金额</span>￥{{item.price}}</p>
                        </div>
                    </div>
                </el-row>

                <el-row style="height: 80px">
                    <p style="font-size: 26px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;text-align: left;padding-left: 60px">地址信息</p>
                </el-row>

                <el-row style="padding-left: 30px;padding-right: 30px;">

                    <div class="item" style="height: 80px !important;padding-top: 10px">
                        <div style="width: 50%;float: left;">
                            <img :src="fromimg" style="width: 58px;float: left;margin-left: 50px">
                            <div style="float: left;padding-left: 20px;width: 400px">
                                <p style="line-height: 0px;text-align: left;font-size: 18px">{{item.from_name}}&nbsp;&nbsp;&nbsp;{{item.from_phone}}</p>
                                <p style="text-align: left;font-size: 16px">{{item.from_info}}</p>
                            </div>
                        </div>

                        <div style="width: 50%;float: left">
                            <img :src="toimg" style="width: 58px;float: left">
                            <div style="float: left;padding-left: 20px;width: 400px">
                                <p style="line-height: 0px;text-align: left;font-size: 18px">{{item.to_name}}&nbsp;&nbsp;&nbsp;{{item.to_phone}}</p>
                                <p style="text-align: left;font-size: 16px">{{item.to_info}}</p>
                            </div>
                        </div>
                    </div>

                </el-row>

                <el-row style="height: 80px">
                    <p style="font-size: 26px;font-family: Source Han Sans CN;font-weight: 400;color: #2E2E2E;text-align: left;padding-left: 60px">物品信息</p>
                </el-row>

                <el-row style="padding-left: 30px;padding-right: 30px">

                    <div class="item">
                        <div class="title" style="margin-top: 8px">
                            <el-col :span="12">
                            <span style="color: #ADADAD;margin-right: 5px">单号</span>
                            <span>{{item.order_no}}</span>
                            </el-col>
                            <el-col :span="12">
                            <span style="color: #ADADAD;margin-right: 5px">下单时间</span>
                            <span>{{item.created_at}}</span>
                            </el-col>
                        </div>
                        <div class="title">
                            <el-col :span="12">
                                <span style="color: #ADADAD;margin-right: 5px">物品</span>
                                <span>{{item.c_name}}</span>
                            </el-col>
                            <el-col :span="12">
                                <span style="color: #ADADAD;margin-right: 5px">完成时间</span>
                                <span>{{item.completed_at}}</span>
                            </el-col>
                        </div>
                        <div class="title">
                            <el-col :span="12">
                                <span style="color: #ADADAD;margin-right: 5px">重量</span>
                                <span>{{item.weight}}</span>
                            </el-col>
                            <el-col :span="12">
                                <span style="color: #ADADAD;margin-right: 5px">备注</span>
                                <span>{{item.descript}}</span>
                            </el-col>
                        </div>

                    </div>


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
        name: "Detail",
        data() {
            return {
                me1:require('@/assets/me1.png'),
                fromimg:require('@/assets/fromimg.png'),
                toimg:require('@/assets/toimg.png'),
                fromto:require('@/assets/formto.png'),
                goback:require('@/assets/goback.png'),

                loginbg: {
                    backgroundImage:'url(' + require('@/assets/order1.png') + ')',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    color: '#fff',
                },

                tableData: [],
                item:null,
                addForm: {
                    keyword:null,
                    address: "",
                    type:null,
                    page:0
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
            getDetail(oid){
                TokenApi(this,'OrderDetail',{id:oid}).then(data => {
                    if(data.status==0){
                        this.item = data.data
                    }else{
                        this.$message({
                            message: data.data.data,
                            type: 'error'
                        });
                    }
                    console.log(data.data)
                })
            },
            go_back(){
                this.$router.go(-1);//返回上一层
            }
        },
        created() {
            let oid = localStorage.getItem("detail_id")
            if(oid){
                this.getDetail(oid);
            }
        }

    }
</script>
<style scoped>
    .item{
        width: 1080px;
        height: 120px;
        background: #FFFFFF;
        border: 1px solid #E5E5E5;
        opacity: 1;
        border-radius: 4px;
        margin: auto;
    }
    .item .left{
        width: 60%;float: left;padding-top: 20px;
    }
    .item .right{
        width: 40%;float: left;
    }
    .title{
        text-align: left;
        padding-left: 30px;height: 35px;line-height: 35px;
    }
    .left .content{
        width: 100%;
        padding-left: 30px;
    }
    .content .before{
        width: 15%;float: left;
    }
    .content .after{
        width: 20%;float: left;
    }
    .content .first{
        width: 25%;float: left;
    }
    .content .second{
        width: 15%;float: left;text-align: center;
    }
    .content .third{
        width: 25%;float: left;
    }
    .content p{

        text-align: left;
        font-size: 28px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #2E2E2E;
    }

    .content .p1{
        border-left: 3px solid rgba(30, 86, 160, 1);
        text-align: left;padding-left: 10px;
        font-size: 28px;
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

