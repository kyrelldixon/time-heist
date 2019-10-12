import store from '../store'

function lazyLoad(page){
  return() => import(`../pages/${page}.vue`)
}

export default [
  {
    path: '/',
    component: lazyLoad('Landing'),
    beforeEnter: (to, from, next) => {
      // the new homepage is '/home' if you are logged in
      // so this will always redirect there
      if (store.getters.isLoggedIn) {
        next('/home')
        return
      }
      next()
    }
  },
  {
    path: '/home',
    component: lazyLoad('Leaderboard'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/register',
    component: lazyLoad('Register'),
  },
  {
    path: '/login',
    component: lazyLoad('Login'),
  },
  {
    path: '/create',
    component: lazyLoad('CreateTrip'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/trip/:id',
    component: lazyLoad('TripDetails'),
    meta: {
      requiresAuth: true,
    },
  },
]