import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home/home'
import Broadcast from '@/components/pages/Broadcast/broadcast'
import Group from '@/components/pages/Group/group'
import Audio from '@/components/pages/Audio/audio'
import Mine from '@/components/pages/Mine/mine'
Vue.use(Router)

 let router=new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('@/components/pages/login')
    },
    {
      path: '/audio',
      name: 'audio',
      component: Audio,
      children:[
        {
        path: 'movies',
        name: 'movies',
        component:()=>import('@/components/pages/Audio/movies'),
      },
      {
        path: 'read',
        name: 'read',
        component:()=>import('@/components/pages/Audio/read'),
      },
      {
        path: 'city',
        name: 'city',
        component:()=>import('@/components/pages/Audio/city'),
      },
      {
        path: 'music',
        name: 'music',
        component:()=>import('@/components/pages/Audio/music'),
      },
      {
        path: 'tv',
        name: 'tv',
        component:()=>import('@/components/pages/Audio/tv'),
      },
    ]
    },
  ]
})
// // //路由全局前置守卫
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   console.log('beforeach', to, from);
//   if (to.path == '/home') { next() } else {
//     let islogin = true
//     if (islogin) { 
//       alert('已登录') 
//     }else{
//       alert('未登录，回到home')
//       next({path:'/home'})
//     }
//   }
// })

const originalPush = Router.prototype.push
  Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

 export default router
