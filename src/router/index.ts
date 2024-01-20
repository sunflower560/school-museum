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
    },
    {
      path: '/school-history-uniforms',
      name: 'school-history-uniforms',
      meta:{
        layout:{
          default:'empty-layout'
        }
      },
      component: () => import('@/pages/common/HistorySchoolUniformsPage.vue')
    }
  ]
})

export default router
