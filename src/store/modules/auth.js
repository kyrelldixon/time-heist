import { Auth } from '../../firebase/auth'

const state = {
  isLoggedIn: false,
}

const actions = {
  login({ commit }, { email, password }) {
    return Auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      commit('setIsLoggedIn', true)
    })
    .catch(err => { throw err })
  },
  logout({ commit }) {
    return Auth.signOut()
    .then(() => {
      commit('setIsLoggedIn', false)
    })
    .catch(err => { throw err })
  },
}

const mutations = {
  setIsLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  }
}

export default {
  state,
  actions,
  mutations,
}