import { Auth } from '../../firebase/auth'

const state = {
  currentUser: null,
}

const actions = {
  login({ commit }, { email, password }) {
    commit('setIsLoading', true)
    return Auth.signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      const currentUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
      }
      commit('setCurrentUser', currentUser)
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
      commit('setCurrentUser', null)
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
    .then(({ user }) => {
      const currentUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
      }
      // user is automatically logged in when account is registered
      // so update state to reflect that
      commit('setCurrentUser', currentUser)
      commit('setIsLoading', false)
    })
    .catch(err => {
      commit('setIsLoading', false)
      throw err
    })
  }
}

const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user
  }
}

const getters = {
  isLoggedIn: ({ currentUser }) => currentUser !== null
}

export default {
  state,
  actions,
  getters,
  mutations,
}