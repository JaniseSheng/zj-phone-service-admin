import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import baseService from '@/pages/base-service'
import addNewService from '@/pages/base-service/add-new-service'
import editServiceType from '@/pages/base-service/edit-service-type'
import levelManage from '@/pages/base-service/level-manage'
import customerService from '@/pages/customer-service'
import orderService from '@/pages/order-service'
import dataChartView from '@/pages/data-chart-view'
Vue.use(Router)

export default new Router({
  routes: [
    /**
    * 登陆页面
    **/
    {
      path: '/',
      name: 'login',
      component: login
    },
    /**
    * 基础服务
    **/
    {
      path: '/base-service',
      name: 'baseService',
      component: baseService,
      children: [
        {
          path: 'add-new-service',
          component: addNewService
        },
        {
          path: 'edit-service-type',
          component: editServiceType
        },
        {
          path: 'level-manage',
          component: levelManage
        }
      ]
    },
    /**
    * 客户服务
    **/
    {
      path: '/customer-service',
      name: 'customerService',
      component: customerService
    },
    /**
    * 订单服务
    **/
    {
      path: '/order-service',
      name: 'orderService',
      component: orderService
    },
    /**
    * 数据仪表盘
    **/
    {
      path: '/data-chart-view',
      name: 'dataChartView',
      component: dataChartView
    }
  ]
})
