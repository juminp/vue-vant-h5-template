
import Vue from 'vue'
import VueRouter from 'vue-router'


const Main = () => import('../views/main/index.vue')
const Home = () => import('../views/main/home/index.vue')
const Classify = () => import('../views/main/classify/index.vue')
const Cart = () => import('../views/main/cart/index.vue')
const Orders = () => import('../views/main/orders/index.vue')
const User = () => import('../views/main/user/index.vue')

const Login = () => import('../views/login/index.vue')

const BASE_URL = '/' || process.env.BASE_URL

Vue.use(VueRouter)
const router = new VueRouter({
  // mode: 'history',
  base: BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        keepAlive: true,
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            keepAlive: true,
          },
        },
        {
          path: '/classify',
          name: 'classify',
          component: Classify,
          meta: {
            keepAlive: true,
          },
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart,
          meta: {
            keepAlive: true,
          },
        },
        {
          path: '/orders',
          name: 'orders',
          component: Orders,
          meta: {
            keepAlive: true,
          },
        },
        {
          path: '/user',
          name: 'user',
          component: User,
          meta: {
            keepAlive: true,
          },
        },
        {
          path: '',
          redirect: 'home'
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        keepAlive: true,
      },
    },
  ],
})

export default router
