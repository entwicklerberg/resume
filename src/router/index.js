import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/desktop',
    component: () => import('../views/desktop')
  },
  {
    path: '/',
    redirect: '/desktop',
    component: () => import('../views/desktop')
  },
  {
    path: '/desktop',
    name: 'desktop',
    component: () => import('../views/desktop')
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import('../views/cv')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
