<template>
<div class="order-service">
  <div :class="$style.title">
    <el-date-picker v-model="dataValue" type="datetimerange" :picker-options="pickerOptions" placeholder="选择时间范围" align="right">
    </el-date-picker>
    <el-tag type="primary">总共100条数据</el-tag>
    <el-pagination layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
  <el-table :data="tableData" border max-height='680' style="width: 100%">
    <el-table-column prop="createDate" label="下单日期" width="120" />
    <el-table-column prop="userName" label="用户名" width="90" />
    <el-table-column prop="orderId" label="订单ID" width="120" />
    <el-table-column prop="IMEI" label="IMEI" width="140" />
    <el-table-column prop="serviceContet" label="服务内容" width="180" />
    <el-table-column prop="needtimes" label="预计时间" width="100" />
    <el-table-column prop="result" label="状态" width="160" />
    <el-table-column prop="status" label="结果" width="120">
      <template scope="scope">
          <el-tag type='success'>{{scope.row.status | orderStatus}}</el-tag>
        </template>
    </el-table-column>

    <el-table-column prop="update" label="更新日期" width="120" />
    <el-table-column prop="price" label="订单金额" width="100" />
    <el-table-column prop="status" label="操作" width="100" fixed='right'>
      <template scope="scope">
              <el-button type="success" size="small" @click="modelShow = true">编辑</el-button>
        </template>
    </el-table-column>
  </el-table>
  <uiModal v-if='modelShow' width=1000 :isShow.sync="modelShow" title='订单状态变更操作'>
    <el-table :data="orderData" style="width: 100%">
      <el-table-column prop="orderId" label="订单" width="80">
      </el-table-column>
      <el-table-column prop="orderdate" label="下单日期" width="120">
      </el-table-column>
      <el-table-column prop="username" label="用户名">
      </el-table-column>
      <el-table-column prop="imei" label="IMEI / SN">
      </el-table-column>
      <el-table-column prop="price" label="订单金额">
      </el-table-column>
      <el-table-column prop="servicename" label="服务分类">
      </el-table-column>
    </el-table>
    <p style="margin: .5rem 0">服务名称：<span> ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概率</span><span style="margin-left:1rem">预计时间：</span>1~3小时</p>
    <el-steps :space="200" :active="progress" :finish-status="finishStatus">
      <el-step title="等待"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="完成"></el-step>
      <el-step title="失败已退款"></el-step>
      <el-step title="失败不退款"></el-step>
    </el-steps>
    <p style="margin: 1rem 0; padding: .5rem 0; text-align: center; background-color:#f893c9; color: white">请择选订单最新状态</p>
    <el-row>
      <el-col :span="12" style="padding-right: 1rem">
        <div class="grid-content bg-purple">
          <p>
            <el-button type='warning' @click="progress = 1; finishStatus = 'success'">等待</el-button>
            <el-button type='info' @click="progress = 2; finishStatus = 'success'">进行中</el-button>
            <el-button type='success' @click="progress = 3; finishStatus = 'success'">完成</el-button>
          </p>
          <p style="margin: 1rem 0; padding: .5rem 0; text-align: center; background-color:#6A6A6A; color: white">退款操作</p>
          <p style="margin-bottom: 1rem">
            <el-radio-group v-model="refuseRadio" @change='hangeRadioChange'>
              <el-radio :label="4">退款</el-radio>
              <el-radio :label="5">不退款</el-radio>
            </el-radio-group>
          </p>
          <p style="position: relative; padding-left: 80px;" v-if="refuseRadio == 1">
            <span style="position: absolute; width:80px; left:0;text-align:center;line-height: 32px;">退款金额：</span>
            <el-input v-model="refusePrice" placeholder="请输入退款金额"></el-input>
          </p>

        </div>
      </el-col>
      <el-col :span="12" style="padding-left: 1rem">
        <div class="grid-content bg-purple-light">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" :autosize="{ minRows: 6}" v-model="orderResult">
          </el-input>
        </div>
      </el-col>
    </el-row>
    <p style="margin: 1rem 0; text-align: center">
      <el-button type='success' style="width: 240px">确定</el-button>
    </p>
  </uiModal>
</div>
</template>

<script>
import uiModal from '@/components/ui-modal';
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      dataValue: '',
      tableData: [{
        createDate: '2017-12-03',
        orderId: '7788162721',
        userName: 'janise001',
        IMEI: '#112313213137789',
        serviceContet: 'ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概率 ',
        needtimes: '1-3天',
        result: '###uuuusssskkhkii#',
        status: '1',
        update: '2017-12-05',
        price: '50.00'
      }, {
        createDate: '2017-12-03',
        orderId: '7788162721',
        userName: 'janise001',
        IMEI: '#112313213137789',
        serviceContet: 'ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概率 ',
        needtimes: '1-3天',
        result: '###uuuusssskkhkii#',
        status: '2',
        update: '2017-12-05',
        price: '50.00'
      }, {
        createDate: '2017-12-03',
        orderId: '7788162721',
        userName: 'janise001',
        IMEI: '#112313213137789',
        serviceContet: 'ATT iPhone active on another account 美版ATT 被其他用户激活状态官解 高概率 ',
        needtimes: '1-3天',
        result: '###uuuusssskkhkii#',
        status: '0',
        update: '2017-12-05',
        price: '50.00'
      }],
      orderData: [{
        orderId: '#1122',
        orderdate: '2017-05-02',
        username: 'janisesheng',
        imei: '#hhhsssasdq',
        price: '55.00',
        servicename: 'yuioqwsdfdw'
      }],
      progress: 1,
      finishStatus: 'success',
      refuseRadio: '',
      refusePrice: '20.00',
      orderResult: 'fghjkgiolknguiklhgyuioplkjhgyuiotyuiougtyuiopaa',
      modelShow: false
    }
  },
  filters: {
    orderStatus: function(value) {
      switch (value) {
        case '1':
          return '已经完成'
          break;
        case '2':
          return '已经拒绝'
          break;
        case '3':
          return '进行中'
          break;
        default:
          return '申请中'
      }
    }
  },
  components: {
    uiModal
  },
  methods: {
    hangeRadioChange(e){
      this.finishStatus = 'error';
      this.progress = e;
    }
  }

}
</script>

<style lang='less' module>
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
