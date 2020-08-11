import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  linkExactActiveClass: '',
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/catalog',
    },
    {
      name: 'catalog',
      path: '/catalog',
      component: () => import('../views/Catalog.vue'),
      props: true,
      meta: {
        title: 'Paint Shop | Home',
      },
    },
    {
      name: 'product',
      path: '/catalog/:viewName',
      component: () => import('../views/Product.vue'),
      props: true,
      meta: {
        title: 'Paint Shop | Product - ',
      },
      beforeEnter(to, from, next) {
        if (to.params.viewName) {
          let currProd = to.params.viewName
          document.title = to.meta.title = `Paint Shop | Product - ${currProd}`
          next()
        } else {
          next()
        }
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
    {
      name: 'cartpage',
      path: '/cart',
      component: () => import('../views/CartPage.vue'),
      props: true,
      meta: {
        title: 'Paint Shop | Cart',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (typeof to.meta.title !== 'undefined') {
    document.title = to.meta.title
    next()
  } else {
    document.title = 'Paint Shop'
  }
})

export default router
