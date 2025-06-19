import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import regist from '@/components/Regist'
import companyInfo from '@/components/companyInfo'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
  mode: 'history', // 使用history模式
  base: '/platform-path/', // 设置基路径
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/Regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/companyInfo',
      name: 'companyInfo',
      component: companyInfo
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})
