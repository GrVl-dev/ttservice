import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'requests',
    meta: {layout: 'main'},
    component: () => import('../views/Requests')
  },
  {
    path: '/analitics',
    name: 'analitics',
    meta: {layout: 'main'},
    component: () => import('../views/Analitics')
  },
  {
    path: '/company',
    name: 'company',
    meta: {layout: 'main'},
    component: () => import('../views/Company')
  },
  {
    path: '/objects',
    name: 'objects',
    meta: {layout: 'main'},
    component: () => import('../views/Objects')
  },
  {
    path: '/workers',
    name: 'workers',
    meta: {layout: 'main'},
    component: () => import('../views/Workers')
  },
  {
    path: '/materials',
    name: 'materials',
    meta: {layout: 'main'},
    component: () => import('../views/Materials')
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
