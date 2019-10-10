import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import trips from './modules/trips'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    trips,
  },
})