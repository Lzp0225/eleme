import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

 const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: r => require.ensure([], () => r(require('../view/home/home')), 'home'),
      alias:'/'
    },
    {
      path: '/find',
      component: r => require.ensure([], () => r(require('../view/find/findIndex')), 'findIndex')
    },
    {
      path: '/order',
      component: r => require.ensure([], () => r(require('../view/order/orderIndex')), 'orderIndex')
    },
    {
      path: '/mine',
      component: r => require.ensure([], () => r(require('../view/mine/myIndex')), 'myIndex')
    },
    {
      path: '*', redirect: '/' //重定向             这里是如果访问路径没有匹配到路由的时候则重定向"/"
    }
  ]
})
export default router
