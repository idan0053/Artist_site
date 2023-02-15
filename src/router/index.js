import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/storeView.vue')
    },
    {
      path: '/tour',
      name: 'tour',
      component: () => import('../views/tourView.vue')
    }
  ]
})

export default router
