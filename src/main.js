import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import Loader from '@/components/loader/Loader'
import VuePageTransition from 'vue-page-transition'
import priceFormat from './fillters/priceFormat'
import '../node_modules/reset-css/sass/_reset.scss'
import './assets/styles/style.scss'

Vue.config.productionTip = false

Vue.use(VuePageTransition)
Vue.component('Loader', Loader)
Vue.filter('priceFormat', priceFormat)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
