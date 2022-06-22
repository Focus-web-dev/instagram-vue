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
    component: () => import('../pages/ProfilePage.vue'),
  },
  {
    path: '/post/:nickname/:id',
    name: 'PostPage',
    params: { nickname: 'public', id: 'public' },
    component: () => import('../pages/PostPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
