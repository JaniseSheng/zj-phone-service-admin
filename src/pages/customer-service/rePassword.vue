<template>
  <div :class="$style['rePassword']" v-if="userInfo">
    <p style="text-align: center; margin-bottom: .5rem">{{userInfo.userName}}</p>
    <el-input placeholder="请输入内容" v-model="oldpassword">
      <template slot="prepend"><p style='width: 60px'>老密码:</p></template>
    </el-input>
    <el-input placeholder="请输入内容" v-model="newpassword">
      <template slot="prepend"><p style='width: 60px'>新密码:</p></template>
    </el-input>
    <p style="text-align:center"><el-button type='success'>确定修改</el-button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldpassword: '',
      newpassword: ''
    }
  },
  props: ['userInfo']
}
</script>

<style lang="less" module>
.rePassword {
    & :global(.el-input) {
        margin-bottom: 0.5rem;
    }
    & :global(.el-select) {
        width: 100%;
    }
}
</style>
