import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import '../node_modules/reset-css/sass/_reset.scss'
import './assets/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
