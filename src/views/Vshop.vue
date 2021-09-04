<template>
  <div>

    <el-carousel height="500px">
      <el-carousel-item v-for="(item, index) in imagesData" :key="index">
        <el-image :src="item.img" style="width: 100%" fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>


    <Form></Form>

  </div>
</template>
<script>
  import { Api } from '@/api/interface' // 引入接口
  import Form from "@/components/Form";
  export default {
    name: "Index",
    data(){
      return{
        formInline: {
          user: '',
          region: ''
        },
        imagesData: [
          {
            img: require('@/assets/banner.png'),
            href: ""
          }],
        noticeData: [
          {
            title: '最新公共',
            content: '这是最新的公告内容',
            href: ""
          },
          {
            title: '最新公共',
            content: '这是最新的公告内容',
            href: ""
          },
          {
            title: '最新公共',
            content: '这是最新的公告内容',
            href: ""
          }],
        tableData: []
      }
    },
    components: {
      Form
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        localStorage.setItem("pair",JSON.stringify(row))
        this.$router.push({ path: '/trade' });
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      getList(){
        let postData = {} // 请求参数
        Api('GetCurrencyMatche',postData).then(data => {
          if(data.status==0){
            var list = data.data
            for(var i=0; i < list.length; i++){
              if(list[i].data){
                this.tableData.push({
                  id:list[i].id,
                  currency_id: list[i].currency_id,
                  legal_id: list[i].legal_id,
                  pair: list[i].name,
                  price: list[i].data.close,
                  change: '1.5%',
                  tth:list[i].data.volume,
                  min_price: list[i].data.low,
                  max_price: list[i].data.high})
              }
            }
          }
          console.log(data.data)
        })
      },
      onSubmit(){

      }
    },
    created() {
      this.getList();
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

/*.el-carousel__item:nth-child(2n) {*/
/*    background-color: #99a9bf;*/
/*  }*/

/*  .el-carousel__item:nth-child(2n+1) {*/
/*    background-color: #d3dce6;*/
/*  }*/
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
    text-align: left;
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
</style>
