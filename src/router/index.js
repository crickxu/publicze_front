import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import regist from '@/components/Regist'
import companyInfo from '@/components/companyInfo'

Vue.use(Router)

export default new Router({
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
  ]
})
