const state = {
  trips: [
    {
      id: 2,
      title: 'Digital Nomad Paradise',
      city: 'Chiang Mai',
      state: 'Thailand',
      votes: 42,
      description: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 1,
      title: 'The Best Vacation Ever',
      city: 'Paris',
      state: 'France',
      votes: 57,
      description: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book.`
    },
    {
      id: 3,
      title: 'Becoming Batman',
      city: 'Gotham',
      state: 'New York',
      votes: 23,
      description: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type specimen book.`
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
  create({ commit }, trip) {
    commit('createTrip', trip)
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
    trip.id = Math.floor(Math.random() * 100000)
    trip.votes = 0
    state.trips = [...state.trips, trip]
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}