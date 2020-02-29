import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Main',
        component: Main,
        children: [{
                path: '/Main/Goods',
                name: 'Goods',
                component: () =>
                    import ('../views/Goods.vue')
            },
            {
                path: '/Main/Comment',
                name: 'Comment',
                component: () =>
                    import ('../views/Comment.vue')
            },
            {
                path: '/Main/Shops',
                name: 'Shops',
                component: () =>
                    import ('../views/Shops.vue')
            },
            {
                path: '/Main/ShopCar',
                name: 'ShopCar',
                component: () =>
                    import ('../views/ShopCar.vue')
            }
        ]

    }]
})