import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component:()=>import('../components/pages/mainPage/mainPage.vue')
    },
    {
      path: '/kinds',
      name: 'kinds',
      component:()=>import('../components/pages/kinds/kinds.vue')
    },
    {
      path: '/find',
      name: 'find',
      component:()=>import('../components/pages/find/find.vue')
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component:()=>import('../components/pages/shoppingCar/shoppingCar.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component:()=>import('../components/pages/mine/mine.vue')
    },
    
  ]
})


const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
