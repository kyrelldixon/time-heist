import { Auth } from '../../firebase/auth'

const state = {
  isLoggedIn: false,
}

const actions = {
  login({ commit }, { email, password }) {
    commit('setIsLoading', true)
    return Auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      commit('setIsLoggedIn', true)
      commit('setIsLoading', false)
    })
    .catch(err => { 
      commit('setIsLoading', false)
      throw err
    })
  },
  logout({ commit }) {
    commit('setIsLoading', true)
    return Auth.signOut()
    .then(() => {
      commit('setIsLoggedIn', false)
      commit('setIsLoading', false)
    })
    .catch(err => { 
      commit('setIsLoading', false)
      throw err
    })
  },
  register({ commit }, { email, password }) {
    commit('setIsLoading', true)
    return Auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      // user is automatically logged in when account is registered
      // so update state to reflect that
      commit('setIsLoggedIn', true)
      commit('setIsLoading', false)
    })
    .catch(err => {
      commit('setIsLoading', false)
      throw err
    })
  }
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