import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: "/home",
            component: () => import("@/views/home"),
            meta: {
                title: "card",
                keepAlive: true
            },
        }, {
            path: "/login",
            name: "/login",
            component: () => import("@/views/login"),
            meta: {
                title: "card",
                keepAlive: true
            },
        }, {
            path: "/",
            component: Layout,
            redirect: "/",
            children: [
                {
                    path: '/create',
                    name: 'createCard',
                    component: () => import("@/views/createCard"),
                    meta: {
                        title: "card",
                        keepAlive: true
                    }
                },{
                    path: '/list',
                    name: 'list',
                    component: () => import("@/views/tradeList"),
                    meta: {
                        title: "card",
                        keepAlive: true
                    }
                },{
                    path: '/recharge',
                    name: 'recharge',
                    component: () => import("@/views/rechargeCard"),
                    meta: {
                        title: "card",
                        keepAlive: true
                    }
                }
            ]
        }
    ]

})
