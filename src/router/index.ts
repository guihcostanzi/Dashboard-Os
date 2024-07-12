import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'painelOS',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PainelOS.vue')
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: () => import('../views/Configuration.vue')
    },
  ]
})

router.beforeEach(async (to) => {

  if (to.path != '/' && to.path != '/configuration') {
    router.push("/")
  }

})

export default router
