<template>
  <div>

    {{info}}
    <el-input placeholder="请输入内容" v-model="input" class="input-with-select" >
      <el-select v-model="select" slot="prepend" clearable placeholder="请选择" @change="schanged">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>

  export default {
    name: "Test",
    data() {
      return {
        select:'',
        input:'',
        visible: false,
        info:null
      };
    },

    methods: {
      schanged(val){
        //console.log(this.select)
        //console.log('操作人选中项发生变化', val)
        this.$forceUpdate()

      },
      // getData() {
      //   let postData = {type: 'ethusdt'} // 请求参数
      //   BtcUsdt(postData).then(data => {
      //     this.info = data
      //   })
      // }
      getData() {
        let code = '600888';
        let postData = {select:'date,open,high,low,close,volume',begin:-300,end:-1} // 请求参数
        // StockData(postData,code).then(data => {
        //   console.log(data.kline)
        //   this.info = data;
        // })
        // StockData(postData,code).then(data => {
        //   console.log(data.kline)
        //   this.stock_data = data;
        //   return data.kline;
        // })
        this.$jsonp('http://yunhq.sse.com.cn:32041//v1/sh1/dayk/600888?select=date,open,close,low,high,volume&begin=-300&end=-1').then((res) =>{
          console.log(res.result)
          //this.stock_data = res;
          // res = eval("("+res+")");
          // return res.kline;
          //return res.result;
        })
        // this.$http.get('http://yunhq.sse.com.cn:32041//v1/sh1/dayk/600888?select=date,open,close,low,high,volume&begin=-300&end=-1').then((response) => {
        //   console.log(response)
        // }, (error) => {
        //   console.log('error:', error)
        // })
        // var self = this
        // $.ajax({
        //   url: 'http://yunhq.sse.com.cn:32041//v1/sh1/dayk/600888?select=date,open,close,low,high,volume&begin=-300&end=-1',
        //   type: 'GET',
        //   dataType: 'JSONP',
        //   success: function (res) {
        //     // self.data = res.result
        //     console.log(res.result.kline)
        //     this.info = res.result;
        //   }
        // })
      }
    }
  }
</script>

<style>

</style>
