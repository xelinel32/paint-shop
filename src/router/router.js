import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'catalog',
      path: '/',
      component: () => import('../views/Catalog.vue'),
      meta: {
        title: 'Paint Shop | Home',
      },
    },
    {
      name: 'managment',
      path: '/managment',
      component: () => import('../views/Managment.vue'),
      meta: {
        title: 'Paint Shop | Managment',
      },
    },
    {
      name: 'contact',
      path: '/contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        title: 'Paint Shop | Contact',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
