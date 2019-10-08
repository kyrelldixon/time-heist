import VueRouter from 'vue-router'

import Leaderboard from './pages/Leaderboard'
import Landing from './pages'
import Register from './pages/Register'
import Login from './pages/Login'

import store from './store'

const routes = [
  {
    path: '/',
    component: Landing,
    beforeEnter: (to, from, next) => {
      // the new homepage is '/home' if you are logged in
      // so this will always redirect there
      if (store.state.auth.isLoggedIn) {
        next('/home')
        return
      }
      next()
    }
  },
  {
    path: '/home',
    component: Leaderboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.isLoggedIn) {
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