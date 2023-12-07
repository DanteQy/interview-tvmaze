import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/show/:id',
      name: 'Show',
      component: () => import('../views/ShowDetailsView.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: () => import('../views/PageNotFoundView.vue'),
    }
  ]
})

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'

export default router
