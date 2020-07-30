import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import Loader from '@/components/loader/Loader'
import '../node_modules/reset-css/sass/_reset.scss'
import './assets/styles/style.scss'

Vue.config.productionTip = false

Vue.component('Loader', Loader)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
