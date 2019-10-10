const state = {
  trips: [
    {
      id: 2,
      title: "Digital Nomad Paradise",
      city: "Chiang Mai",
      likes: 42,
    },
    {
      id: 1,
      title: "The Best Vacation Ever",
      city: "Paris",
      likes: 57,
    },
    {
      id: 3,
      title: "Becoming Batman",
      city: "Gotham",
      likes: 23,
    },
  ],
}

const getters = {
  getTripById: state => id => {
    return state.trips.find(trip => trip.id === id)
  },
  sortedTrips: state => {
    return [...state.trips].sort((a, b) => b.likes - a.likes)
  },
}

const actions = {
  upVote({ commit }, id) {
    commit('incrementTripLikes', id)
  },
}

const mutations = {
  incrementTripLikes(state, id) {
    state = state.trips.map(trip => {
      if (trip.id === id) {
        trip.likes++
      }
      return trip
    })
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}