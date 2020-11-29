import Vue from 'vue'
import VueRouter from 'vue-router'
import Requests from '../views/Requests.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'requests',
    meta: {layout: 'main'},
    component: Requests
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '*',
    meta: {layout: 'empty'},
    component: () => import('../views/NotFoundComponent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
