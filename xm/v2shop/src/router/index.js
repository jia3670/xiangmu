/** vue-router 路由模块封装 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Login from '../views/Login/index'
const routes = [
    {
        path: '/',
        redirect: '/login'
    }, {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            title: '管理员登录'
        }
    }, {
        name: 'main',
        path: '/main',
        component: () => import('../views/Main/index'),
        redirect: '/main/home',
        children: [
            {
                name: 'home',
                path: 'home',
                component: () => import('../views/Home/index'),
                meta: {
                    title: '管理员首页'
                }
            },
            {
                name: 'menus',
                path: 'menus',
                component: () => import('../views/Menus/index'),
                meta: {
                    title: '菜单管理页面'
                }
            },
            {
                name: 'roles',
                path: 'roles',
                component: () => import('../views/Roles/index'),
                meta: {
                    title: '角色管理页面'
                }
            },
            {
                name: 'admins',
                path: 'admins',
                component: () => import('../views/Admins/index'),
                meta: {
                    title: '管理员管理首页'
                }
            }, {
                name: 'cates',
                path: 'cates',
                component: () => import('../views/Cates/index'),
                meta: {
                    title: '商品分类页面'
                }
            }, {
                name: 'specs',
                path: 'specs',
                component: () => import('../views/Specs/index'),
                meta: {
                    title: '商品规格页面'
                }
            }, {
                name: 'goods',
                path: 'goods',
                component: () => import('../views/Goods/index'),
                meta: {
                    title: '商品管理页面'
                }
            },
            {
                name: 'member',
                path: 'member',
                component: () => import('../views/Member/index'),
                meta: {
                    title: '会员管理页面'
                }
            },
            {
                name: 'banners',
                path: 'banners',
                component: () => import('../views/Banners/index'),
                meta: {
                    title: '轮播图管理页面'
                }
            }, {
                name: 'seckills',
                path: 'seckills',
                component: () => import('../views/SecKills/index'),
                meta: {
                    title: '秒杀活动管理页面'
                }
            }, {
                name: '404',
                path: '*',
                component: () => import('../views/404/index'),
                meta: {
                    title: '资源访问错误'
                }
            },

        ]
    }
]
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
    console.log(to, from);
    next()
})
export default router