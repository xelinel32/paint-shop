import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import Loader from '@/components/loader/Loader'
import VuePageTransition from 'vue-page-transition'
import priceFormat from './fillters/priceFormat'
import PromotionCatalog from '@/components/catalog/Promotion'
import Paginate from 'vuejs-paginate'
import VueProgressBar from 'vue-progressbar'
import '../node_modules/reset-css/sass/_reset.scss'
import './assets/styles/style.scss'

Vue.config.productionTip = false

const options = {
  color: '#2ecc71',
  failedColor: 'red',
  thickness: '5px',
  transition: {
    speed: '0.1s',
    opacity: '0.2s',
    termination: 300,
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
}

Vue.use(VueProgressBar, options)
Vue.use(VuePageTransition)
Vue.component('Loader', Loader)
Vue.component('Promotion', PromotionCatalog)
Vue.component('paginate', Paginate)
Vue.filter('priceFormat', priceFormat)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
