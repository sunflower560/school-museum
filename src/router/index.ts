import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      meta:{
        layout:{
          default:'main-layout'
        }
      },
      component: () => import('@/pages/MainPage.vue')
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: () => import('@/pages/NotFoundPage.vue')
    },
    {
      path: '/museum-exhibition',
      name: 'museum-exhibition',
      meta:{
        layout:{
          default:'main-layout'
        }
      },
      component: () => import('@/pages/common/MuseumExhibition.vue')
    },
    {
      path: '/school-history',
      name: 'school-history',
      meta:{
        layout:{
          default:'main-layout'
        }
      },
      component: () => import('@/pages/common/SchoolHistory.vue')
    },
    {
      path: '/school-history-uniforms',
      name: 'school-history-uniforms',
      meta:{
        layout:{
          default:'main-layout'
        }
      },
      component: () => import('@/pages/common/HistorySchoolUniformsPage.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if(!to.name) {
    next({ name: 'notfound' })
    return
  }
  next()
})

export default router
