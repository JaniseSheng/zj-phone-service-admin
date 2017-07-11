<template>
<transition name="modal">
  <div :class="$style['modal-mask']">
    <div :class="$style['modal-wrapper']">
      <div :class="$style['modal-container']" :style="'width:' + width + 'px'">
        <p style="text-align:right; padding-bottom:.5rem; border-bottom: 1px solid red;margin-bottom:.5rem"><span style="float: left; line-height: 36px;">{{title}}</span><el-button @click="handleClose">关闭</el-button></p>
        <slot></slot>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '300'
    },
    title: ''
  },
  methods: {
    handleClose(){
      this.$emit('update:isShow', false)
    }
  }
}
</script>

<style lang="less" module>
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.model-bg {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 12px 24px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
