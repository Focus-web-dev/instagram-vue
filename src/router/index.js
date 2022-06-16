import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
