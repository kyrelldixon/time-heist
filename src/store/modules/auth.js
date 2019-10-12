import { Auth } from '../../firebase/auth'

const getUserInfo = (firebaseUser) => ({
  id: firebaseUser.uid,
  name: firebaseUser.displayName,
  email: firebaseUser.email,
  profilePicture: firebaseUser.photoURL,
})

const state = {
  currentUser: null,
}

const actions = {
  login({ commit }, { email, password }) {
    commit('setIsLoading', true)
    return Auth.signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      commit('setCurrentUser', getUserInfo(user))
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
      // user is automatically logged in when account is registered
      // so update state to reflect that
      commit('setCurrentUser', getUserInfo(user))
      commit('setIsLoading', false)
    })
    .catch(err => {
      commit('setIsLoading', false)
      throw err
    })
  },
  autoLoginUser({ commit }, user) {
    commit('setCurrentUser', getUserInfo(user))
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