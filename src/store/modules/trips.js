import tripsAPI from '@/api/trips'

const state = {
  trips: [],
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
  async getAllTrips({ commit }) {
    commit('setIsLoading', true)
    const trips = await tripsAPI.getTrips()
    commit('setTrips', trips)
    commit('setIsLoading', false)
  },
  async createTrip({ commit }, trip) {
    trip.votes = 1
    commit('setIsLoading', true)
    const newTrip = await tripsAPI.createTrip(trip)
    commit('setIsLoading', false)
    return newTrip.id
  },
  async upVoteTrip({ commit }, id) {
    // commit('setIsLoading', true)
    commit('incrementTripVotes', id)
    await tripsAPI.upVoteTrip(id)
    // commit('setIsLoading', false)
  }
}

const mutations = {
  incrementTripVotes(state, id) {
    state = state.trips.map(trip => {
      if (trip.id === id) {
        trip.votes++
      }
      return trip
    })
  },
  createTrip(state, trip) {
    state.trips = [...state.trips, trip]
  },
  setTrips(state, trips) {
    state.trips = trips
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}