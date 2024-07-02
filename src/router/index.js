import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import regist from '@/components/Regist'
import picture from '@/components/picture'
import video from '@/components/video'

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
      path: '/video',
      name: 'video',
      component: video
    },
  ]
})
