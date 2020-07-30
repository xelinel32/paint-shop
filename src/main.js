import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import Loader from '@/components/loader/Loader'
import '../node_modules/reset-css/sass/_reset.scss'
import './assets/styles/style.scss'

Vue.config.productionTip = false

Vue.component('Loader', Loader)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
