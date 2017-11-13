<template>
  <el-radio-group v-model="radio" :class="$style['allowArrears']" @change='handleChange'>
   <el-radio :label="1">允许</el-radio>
   <el-radio :label="0">不允许</el-radio>
 </el-radio-group>
</template>

<script>
import {api_account_status_edit} from '@/api/customer-service'

export default {
  data() {
    return {
      radio: '1'
    }
  },
  props: ['userInfo'],
  methods: {
    handleChange(val){
      api_account_status_edit({
        userId: this.userInfo.user_id,
        allowArrears: val
      }).then(res=> {
        console.log(res);
      })
    }
  }
}
</script>

<style lang="less" module>
.allowArrears {
    & :global(.el-input) {
        margin-bottom: 0.5rem;
    }
    & :global(.el-select) {
        width: 100%;
    }
}
</style>
