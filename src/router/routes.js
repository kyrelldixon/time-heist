import Leaderboard from '../pages/Leaderboard'
import Landing from '../pages/Landing'
import Register from '../pages/Register'
import Login from '../pages/Login'
import TripDetails from '../pages/TripDetails'
import CreateTrip from '../pages/CreateTrip'

import store from '../store'

export default [
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
      // requiresAuth: true,
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
  {
    path: '/create',
    component: CreateTrip,
    meta: {
      // requiresAuth: true,
    },
  },
  {
    path: '/trip/:id',
    component: TripDetails,
    meta: {
      // requiresAuth: true,
    },
  },
]