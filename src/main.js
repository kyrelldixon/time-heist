import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'
import Layout from './components/Layout'

import './assets/styles/tailwind.css'

Vue.use(VueRouter)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Layout),
}).$mount('#app')
