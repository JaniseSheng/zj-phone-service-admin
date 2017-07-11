<template>
  <el-radio-group v-model="radio" :class="$style['allowArrears']">
   <el-radio :label="1">允许</el-radio>
   <el-radio :label="0">不允许</el-radio>
 </el-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radio: '1'
    }
  },
  props: ['userInfo']
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
