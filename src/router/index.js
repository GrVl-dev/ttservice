import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/task'
  },
  {
    path: '/task',
    name: 'tasks',
    meta: {
      layout: 'main',
      pageName: 'Заявки'
    },
    component: () => import('../views/Tasks')
  },
  {
    path: '/analitics',
    name: 'analitics',
    meta: {
      layout: 'main',
      pageName: 'Аналитика'
    },
    component: () => import('../views/Analitics')
  },
  {
    path: '/company',
    name: 'company',
    meta: {
      layout: 'main',
      pageName: 'Компании'
    },
    component: () => import('../views/Company')
  },
  {
    path: '/objects',
    name: 'objects',
    meta: {
      layout: 'main',
      pageName: 'Объекты | оборудование'
    },
    component: () => import('../views/Objects')
  },
  {
    path: '/workers',
    name: 'workers',
    meta: {
      layout: 'main',
      pageName: 'Сотрудники'
    },
    component: () => import('../views/Workers')
  },
  {
    path: '/materials',
    name: 'materials',
    meta: {
      layout: 'main',
      pageName: 'Материалы'
    },
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
