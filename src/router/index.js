import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import store from '@/components/store/store'
import live from '@/components/live/live'
import mine from '@/components/mine/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/live',
      name: 'live',
      component: live
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
