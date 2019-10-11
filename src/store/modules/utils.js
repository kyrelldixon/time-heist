const state = {
  isLoading: false,
}

const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  }
}

export default {
  state,
  mutations,
}