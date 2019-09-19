import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import Layout from './components/Layout'

import './assets/styles/tailwind.css'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Layout),
}).$mount('#app')
