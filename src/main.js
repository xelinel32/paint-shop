import Vue from 'vue'
import App from './App.vue'
import './assets/style.scss'
import '../node_modules/reset-css/sass/_reset.scss'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
