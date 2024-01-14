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
      path: '/school-history',
      name: 'school-history',
      meta:{
        layout:{
          default:'empty-layout'
        }
      },
      component: () => import('@/pages/common/SchoolHistory.vue')
    }
  ]
})

export default router
