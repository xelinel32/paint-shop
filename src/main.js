import Vue from 'vue'
import App from './App.vue'
import '../node_modules/reset-css/sass/_reset.scss'
import './assets/style.scss'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
