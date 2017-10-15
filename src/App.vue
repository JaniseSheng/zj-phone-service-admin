<template>
<div id="app">
  <ui-header />
  <el-menu  class="el-menu-demo" mode="horizontal" >
    <el-menu-item index="1">
      <router-link to="/base-service" style="display: inline-block">基础服务维护</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/customer-service" style="display: inline-block">客户维护</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/order-service" style="display: inline-block">订单维护</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/data-chart-view" style="display: inline-block">仪表盘</router-link>
    </el-menu-item>
  </el-menu>
  <div :class="$style['main-wrapper']">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import uiHeader from '@/components/ui-header'
export default {
  components: {
    uiHeader
  }
}
</script>
<style lang='less'>
@import "./styles/global";
#app {
    width: 1200px;
    margin: auto;
}
</style>

<style lang="less" module>
@import "./styles/color";
.main-wrapper {
  padding: 1rem;
  border: 1px solid @ruddy;
}
</style>
