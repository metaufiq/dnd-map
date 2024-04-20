import { createRouter, createWebHistory } from 'vue-router'
import { PATH } from './constants'
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import LoginView from '@/views/Login/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATH.HOME,
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: PATH.LOGIN,
      name: 'login',
      component: LoginView
    },
    {
      path: PATH.ABOUT,
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
