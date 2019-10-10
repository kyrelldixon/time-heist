const state = {
  trips: [
    {
      id: 2,
      title: "Digital Nomad Paradise",
      city: "Chiang Mai",
      votes: 42,
    },
    {
      id: 1,
      title: "The Best Vacation Ever",
      city: "Paris",
      votes: 57,
    },
    {
      id: 3,
      title: "Becoming Batman",
      city: "Gotham",
      votes: 23,
    },
  ],
}

const getters = {
  getTripById: state => id => {
    return state.trips.find(trip => trip.id === id)
  },
  sortedTrips: state => {
    return [...state.trips].sort((a, b) => b.votes - a.votes)
  },
}

const actions = {
  upVote({ commit }, id) {
    commit('incrementTripVotes', id)
  },
}

const mutations = {
  incrementTripVotes(state, id) {
    state = state.trips.map(trip => {
      if (trip.id === id) {
        trip.votes++
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