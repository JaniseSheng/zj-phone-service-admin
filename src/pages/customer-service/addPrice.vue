<template>
  <div :class="$style['addPrice']" v-if='userInfo'>
    <el-input placeholder="请输入内容" :value="userInfo.userName" :disabled="true">
      <template slot="prepend"><p style='width: 60px'>用户名:</p></template>
    </el-input>
    <el-input placeholder="请输入内容" :value="userInfo.remainMoney" :disabled="true">
      <template slot="prepend"><p style='width: 60px'>余 额:</p></template>
    </el-input>
    <el-input placeholder="输入金额" v-model="addPrice">
      <template slot="prepend"><p style='width: 60px'>充值金额:</p></template>
    </el-input>
    <el-select v-model="currentRecharge" placeholder="选择充值渠道">
      <el-option v-for="item in recharges" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-input :value='totalPrice' :disabled="true">
      <template slot="prepend"><p style='width: 60px'>总金额:</p></template>
    </el-input>
    <p style="text-align:center"><el-button type='success'>确定修改</el-button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recharges: [
        {value: '1', label: '微信'},
        {value: '2', label: '支付宝'},
        {value: '3', label: '银行转账'},
        {value: '4', label: '线下'}
      ],
      currentRecharge: '',
      addPrice: 0
    }
  },
  computed: {
    totalPrice: function(){
      return parseInt(this.userInfo.remainMoney) + parseInt(this.addPrice);
    }
  },
  props: ['userInfo']
}
</script>

<style lang="less" module>
.addPrice {
  & :global(.el-input) {
    margin-bottom: .5rem;
  }
  & :global(.el-select) {
    width: 100%;
  }
}
</style>
