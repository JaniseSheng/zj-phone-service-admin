// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './vuex/store'
import Element from 'element-ui'

/* 使用 element-ui */
Vue.use(Element)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable */
new Vue({el: '#app', router, store, template: '<App/>', components: {
    App
  }})
