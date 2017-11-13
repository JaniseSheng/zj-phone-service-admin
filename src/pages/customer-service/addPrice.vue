<template v-if='userInfo'>
<div :class="$style['rechargeValue']" v-if='userInfo'>
  <el-input placeholder="请输入内容" :value="userInfo.user_name" :disabled="true">
    <template slot="prepend"><p style='width: 60px'>用户名:</p></template>
  </el-input>
  <el-input placeholder="请输入内容" :value="userInfo.acc_balance" :disabled="true">
    <template slot="prepend"><p style='width: 60px'>余 额:</p></template>
  </el-input>
  <el-input placeholder="输入金额" v-model="rechargeValue">
    <template slot="prepend"><p style='width: 60px'>充值金额:</p></template>
  </el-input>
  <el-select v-model="rechargeSource" placeholder="选择充值渠道" style='width: 100%'>
    <el-option v-for="item in recharges" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
  <el-input :value='totalPrice' :disabled="true">
    <template slot="prepend"><p style='width: 60px'>总金额:</p></template>
  </el-input>
  <p style="text-align:center">
    <el-button type='success' @click='handleRechange'>确定修改</el-button>
  </p>
</div>
</template>

<script>
import {
  api_account_recharge
} from '@/api/customer-service'

export default {
  data() {
    return {
      recharges: [{
          value: '1',
          label: '微信'
        },
        {
          value: '2',
          label: '支付宝'
        },
        {
          value: '3',
          label: '银行转账'
        },
        {
          value: '4',
          label: '线下'
        }
      ],
      rechargeSource: '',
      rechargeValue: 0
    }
  },
  computed: {
    totalPrice: function() {
      return parseInt(this.userInfo.acc_balance) + parseInt(this.rechargeValue) || 0;
    }
  },
  props: ['userInfo'],
  methods: {
    handleRechange() {
      api_account_recharge({
        userId: this.userInfo.user_id,
        rechargeValue: this.rechargeValue,
        rechargeSource: this.rechargeSource
      }).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>

<style lang="less" module>
.rechargeValue {
    &:global(.el-input) {
        margin-bottom: 0.5rem;
    }
    &:global(.el-select) {
        width: 100%;
    }
}
</style>
