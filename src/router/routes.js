import Login from '@/views/login'
import layout from '@/views/layout'
import home from '@/views/home'
import welcome from '@/views/home/welcome'

import test from '@/views/debug/test'
import components from '@/views/debug/components'
import NotFound from '@/views/notFound'

const routes=[
  // 登录
  { path: '/login', component: Login },
  // 首页
  {
    path: '/',
    component: layout,
    name:'首页块',
    children: [
      // 欢迎
      // { path: '/', component: Welcome },
      { 
        path: '/', 
        component: home,
        name:'home',
        children:[
          {
            path: '/',
            name:'welcome', 
            component: welcome
          }
        ] 
      },
      // 调试页
      // { path: '/test', component: test },
    ]
  },
  {
    path: '/css',
    name:'css学习',
    component: layout,
    children: [
      { 
        path: '/', 
        component:()=>import("@/views/debug"),
        name:'目录',
      },
      // 调试页
      { 
        path: '/grid', 
        component: ()=>import("@/views/css/grid"),
        name:'grid布局',
      },
    ]
  },
  {
    path: '/debug',
    name:'调试块',
    component: layout,
    children: [
      { 
        path: '/', 
        component:()=>import("@/views/debug"),
        name:'debug',
      },
      // 调试页
      { 
        path: '/test', 
        component: test,
        name:'测试',
      },
      { 
        path: '/components', 
        component: components,
        name:'组件' 
      },
    ]
  },
  {
    path: '/demo',
    name:'测试',
    component: layout,
    children: [
      { 
        path: '/lunpan', 
        component:()=>import("@/views/demo/lunpan"),
        name:'轮盘',
      },
    ]
  },
  // 404处理
  { path: '*', component: NotFound }
]

export default routes