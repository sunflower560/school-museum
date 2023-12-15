import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      meta:{
        layout:{
          default:'empty-layout'
        }
      },
      component: () => import('@/pages/common/MainPage.vue')
    },
    {
      path: '/test',
      name: 'test',
      meta:{
        layout:{
          default:'empty-layout'
        }
      },
      component: () => import('@/pages/common/TestPage.vue')
    }
  ]
})

export default router
