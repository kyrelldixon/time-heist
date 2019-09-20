import Leaderboard from './pages/Leaderboard'
import Landing from './pages'
import Register from './pages/Register'
import Login from './pages/Login'

const routes = [
  { path: '/', component: Landing },
  { path: '/home', component: Leaderboard },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
]

export default routes