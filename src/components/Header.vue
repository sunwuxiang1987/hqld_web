<template>
    <div>
<!--    <el-row type="flex" justify="center" :style="style3" v-if="activeIndex=='3'">-->
<!--        <div class="page_width">-->
<!--            <el-menu-->
<!--                    :default-active="activeIndex"-->
<!--                    class="el-menu-demo"-->
<!--                    mode="horizontal"-->
<!--                    @select="handleSelect"-->
<!--                    text-color="#FFFFFF"-->
<!--                    active-text-color="#FFFFFF"-->
<!--                    style="padding-left: 20px;font-weight: bold;height: 80px;"-->
<!--            >-->
<!--                <el-menu-item >-->
<!--                    <el-image :src="logo" style="width: 150px;padding-top: 20px" fit="contain"></el-image>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="1" style="margin-right: 50px;margin-left: 50px">首页</el-menu-item>-->
<!--                <el-menu-item index="2" style="margin-right: 50px">服务介绍</el-menu-item>-->
<!--                <el-menu-item index="3" style="margin-right: 50px">在线下单</el-menu-item>-->
<!--                <el-menu-item index="4" style="margin-right: 50px">案例展示</el-menu-item>-->
<!--&lt;!&ndash;                <el-menu-item index="6" style="margin-right: 50px">资质认证</el-menu-item>&ndash;&gt;-->
<!--                <el-menu-item index="7" style="margin-right: 50px">旅递达人</el-menu-item>-->
<!--                <el-menu-item index="8" style="margin-right: 50px">商务合作</el-menu-item>-->
<!--                <el-menu-item index="9" style="margin-right: 50px">关于旅递</el-menu-item>-->
<!--            </el-menu>-->
<!--        </div>-->
<!--    </el-row>-->
    <el-row type="flex" justify="center" :style="style">
        <div class="page_width">
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="#FFFFFF"
                    active-text-color="#FFFFFF"
                    style="padding-left: 20px;font-weight: bold;height: 80px;"
            >
                <el-menu-item >
                    <el-image :src="logo" style="width: 150px;padding-top: 20px" fit="contain"></el-image>
                </el-menu-item>
                <el-menu-item index="1" style="margin-right: 50px;margin-left: 50px">首页</el-menu-item>
                <el-menu-item index="2" style="margin-right: 50px">服务介绍</el-menu-item>
                <el-menu-item index="3" style="margin-right: 50px">在线下单</el-menu-item>
                <el-menu-item index="4" style="margin-right: 50px">案例展示</el-menu-item>
<!--                <el-menu-item index="6" style="margin-right: 50px">资质认证</el-menu-item>-->
                <el-menu-item index="7" style="margin-right: 50px">旅递达人</el-menu-item>
                <el-menu-item index="8" style="margin-right: 50px">商务合作</el-menu-item>
                <el-menu-item index="9" style="margin-right: 50px">关于旅递</el-menu-item>

            </el-menu>
        </div>
    </el-row>
    </div>
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
                activeIndex: localStorage.getItem("activeIndex")?localStorage.getItem("activeIndex"):"1",
                logo:require('@/assets/newlogo.png'),
                style:"position: fixed;z-index: 999;left:0px;width: 100%;background: rgba(11,14,17,0) ",
                style2:"position: fixed;z-index: 999;left:0px;width: 100%;background: rgba(11,14,17,0) ",
                style3:"position: fixed;z-index: 999;left:0px;width: 100%;background: rgba(30, 86, 160, 1) ",
                //token:localStorage.getItem("accessToken")
            };
        },
        methods: {
            mounted(){
                window.addEventListener('scroll',this.handleScroll) // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
            },
            handleScroll(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
                //let offsetTop = document.querySelector('#app').offsetTop;  // 要滚动到顶部吸附的元素的偏移量
                //this.isFixed = scrollTop > offsetTop ? true : false;  // 如果滚动到顶部了，this.isFixed就为true
                var index = localStorage.getItem("activeIndex")
                if(index != '3'){
                    if(scrollTop > 100) {
                        this.style = 'position: fixed;z-index: 999;left:0px;width: 100%;background: rgba(11,14,17,0.5) '

                    }else{
                        this.style = 'position: fixed;z-index: 999;left:0px;width: 100%;background: rgba(11,14,17,0) '
                    }
                }
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                localStorage.setItem("activeIndex",key);
                if(key == 1){
                    this.style = this.style2
                    this.$router.push({ path: '/index' });
                }else if(key == 2){
                    this.style = this.style2
                    this.$router.push({ path: '/service' });
                }else if(key == 3){
                    this.style = this.style3
                    var token = localStorage.getItem("accessToken")
                    if(token){
                        this.$router.push({ path: '/order' });
                    }else{
                        this.$router.push({ path: '/order_login' });
                    }
                }else if(key == 4){
                    this.style = this.style2
                    this.$router.push({ path: '/case' });
                }else if(key == 5){
                    this.style = this.style2
                    this.$router.push({ path: '/travel' });
                }else if(key == 6){
                    this.style = this.style2
                    this.$router.push({ path: '/zz' });
                }else if(key == 7){
                    this.style = this.style2
                    this.$router.push({ path: '/daren' });
                }else if(key == 8){
                    this.style = this.style2
                    this.$router.push({ path: '/share' });
                }else if(key == 9) {
                    this.style = this.style2
                    this.$router.push({path: '/about'});
                }
                // }else if(key == 4){
                //     this.$message({
                //         message: '该功能模块维护中',
                //         type: 'success'
                //     });
                // }else if(key == 5){
                //     this.$message({
                //         message: '该功能模块维护中',
                //         type: 'success'
                //     });
                // }
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
            this.mounted();
            if(this.activeIndex == '3'){
                this.style = this.style3
            }else{
                this.style = this.style2
            }
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
        font-size: 16px;
        height: 70px;
        line-height: 80px;
        padding: 0 10px;
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
