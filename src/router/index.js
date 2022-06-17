import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/profile/:nickname',
    name: 'ProfilePage',
    params: { nickname: 'public' },
    component: () => import('../pages/ProfilePage'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
