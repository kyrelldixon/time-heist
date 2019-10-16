import VueRouter from 'vue-router'

import routes from './routes'
import store from '../store'

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  // Prevent unauthorized route access by redirecting to login page
  // if user attempte to access a route that requires auth
  // while not logged in
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  }
  else {
    next() 
  }
})

export default router