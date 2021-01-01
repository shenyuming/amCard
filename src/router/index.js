import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            name: "/home",
            redirect: "/home",
            component: () => import("@/views/home"),
            meta: {
                title: "KAB00M",
                keepAlive: true
            },
        }, {
            path: "/home",
            name: "/home",
            component: () => import("@/views/home"),
            meta: {
                title: "KAB00M",
                keepAlive: true
            },
        }
    ]

})
