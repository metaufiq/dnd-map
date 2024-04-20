import LoginView from '@/views/Login/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { PATH } from './constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PATH.HOME,
      name: 'home',
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
