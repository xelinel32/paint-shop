import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../layouts/MainWrapper.vue'),
    },
  ],
})

export default router
