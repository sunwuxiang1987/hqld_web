<template>
  <div style="">
    <el-row type="flex" class="row-bg" justify="center">
      <div class="page_width">
        <el-form  :model="addForm" status-icon :rules="rules" ref="addForm">
          <el-row type="flex"  justify="center">

            <el-card class="box-card" style="margin-top:100px;width:880px;padding: 30px">

              <el-form-item label="出行类型" prop="currency">
                <el-select v-model="addForm.type" placeholder="请选择" style="width: 100%">
                  <el-option value="飞机" >飞机</el-option>
                  <el-option value="高铁" >高铁</el-option>
                  <el-option value="自驾" >自驾</el-option>
                </el-select>
              </el-form-item>

              <el-form-item  label="接单数量" prop="number">
                <el-input v-model="addForm.number" placeholder="最大接单数量"></el-input>
              </el-form-item>

              <el-form-item  label="方便携带重量" prop="number">
                <el-input v-model="addForm.weight" placeholder="最大携带物品重量"></el-input>
              </el-form-item>

            </el-card>
          </el-row>
          <el-row type="flex"  justify="center">
            <el-card class="box-card" style="margin: 10px 0px;width:880px;padding: 30px">

              <el-form-item label="备注信息" prop="address">
                <el-input v-model="addForm.info" placeholder="请输入备注信息"></el-input>
              </el-form-item>

              <el-form-item label="出发时间" prop="address">
                <el-input v-model="addForm.begin" placeholder="旅程出发时间"></el-input>
              </el-form-item>

              <el-form-item label="到达时间" prop="address">
                <el-input v-model="addForm.end" placeholder="旅程到达时间"></el-input>
              </el-form-item>

            </el-card>
          </el-row>
          <el-row type="flex"  justify="center">
            <el-card class="box-card" style="margin-bottom:100px;width:880px;padding: 30px">

              <el-form-item label="出发城市" prop="address">
                <el-input v-model="addForm.info" placeholder="请输入备注信息"></el-input>
              </el-form-item>

              <el-form-item label="到达城市" prop="address">
                <el-input v-model="addForm.begin" placeholder="上面获取物品的时间"></el-input>
              </el-form-item>


              <el-form-item>
                <el-button type="primary" @click="submitForm('addForm')" style="width: 100%;color: #333">确认旅程</el-button>
              </el-form-item>


            </el-card>
          </el-row>
        </el-form>
      </div>
    </el-row>

  </div>
</template>

<script>
  import { TokenApi } from '@/api/interface' // 引入接口
  import { Api } from '@/api/interface' // 引入接口
  export default {
    name: "Travel",
    data() {
      var validateinput = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('输入不能为空'));
        } else {
          callback();
        }
      };
      return {
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
    methods:{
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
