<template>
  <el-radio-group v-model="radio" :class="$style['status']">
   <el-radio :label="1">启动</el-radio>
   <el-radio :label="0">停用</el-radio>
 </el-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: ''
    }
  },
  props: ['userInfo']
}
</script>

<style lang="less" module>
.status {
    & :global(.el-input) {
        margin-bottom: 0.5rem;
    }
    & :global(.el-select) {
        width: 100%;
    }
}
</style>
