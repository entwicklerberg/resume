import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/descktop',
    component: () => import('../views/descktop')
  },
  {
    path: '/',
    redirect: '/descktop',
    component: () => import('../views/descktop')
  },
  {
    path: '/descktop',
    name: 'descktop',
    component: () => import('../views/descktop')
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
