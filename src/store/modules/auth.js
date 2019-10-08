const state = {
  isLoggedIn: false,
}

const actions = {
  login({ commit }) {
    commit('setIsLoggedIn', true)
  },
  logout({ commit }) {
    commit('setIsLoggedIn', false)
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