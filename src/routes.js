import Leaderboard from './pages/Leaderboard'
import Landing from './pages'
import Register from './pages/Register'

const routes = [
  { path: '/', component: Landing },
  { path: '/home', component: Leaderboard },
  { path: '/register', component: Register },
]

export default routes