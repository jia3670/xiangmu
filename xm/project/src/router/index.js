import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'

  },{
    name:'login',
    path: "/login",
    component:Login,
    meta: {
      title:'管理员登录'
     }
  },{
    name:'reg',
    path:'/reg',
    component:()=>import ('../views/Reg/index'),
    meta:{
      title:'新用户注册(管理员不能注册)'
    }
  },
  {
    name:'main',
    path:'/main',
    component:()=>import('../views/Main/index'),
    redirect: '/main/home',
    children:[
      {
        name:'home',
        path:'home',
        component:()=>import('../views/Home/index'),
        meta: {
          title:'管理首页'
         }
      },
      {
        name:'goods',
        path:'goods',
        component: () => import ('../views/Goods/index'),
        meta: {
          title:'商品管理'
         }
      },
      {
        name:'ucenter',
        path:'ucenter',
        component: () => import ('../views/Ucenter/index'),
        meta: {
          title:'用户中心'
         }
      },
      {
        name:'about',
        path:'about',
        component: () => import ('../views/About/index'),
        meta: {
          title:'关于我们'
         }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
