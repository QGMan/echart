import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import global from '@/components/api/global'
import shouye from '@/components/api/shouye'
import pie from '@/components/api/pie'
import radar from '@/components/api/Radar'
import todolist from '@/components/api/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/HelloWorld'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          name:'global',
          path:'/api/global',
          component:global
        },
        {
          name:'shouye',
          path:'/api/shouye',
          component:shouye
        },
        {
          name:'pie',
          path:'/api/pie',
          component:pie
        },
        {
          name:'radar',
          path:'/api/Radar',
          component:radar
        },
        {
          name:'todolist',
          path:'/api/todolist',
          component:todolist
        },
    ]
    }
  ]
})
