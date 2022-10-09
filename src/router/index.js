import Vue from 'vue'
import VueRouter from 'vue-router'

import desktop from '@/views/desktop'
import cv from '@/views/cv'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/desktop',
    component: desktop
  },
  {
    path: '/',
    redirect: '/descktop',
    component: desktop
  },
  {
    path: '/descktop',
    name: 'descktop',
    component: desktop
  },
  {
    path: '/cv',
    name: 'cv',
    component: cv
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
