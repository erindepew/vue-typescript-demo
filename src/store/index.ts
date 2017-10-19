import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  actions: {
    INCREMENT: function ({ commit }) {
      commit('UPDATE_COUNT', this.state.count + 1)
    },
    DECREMENT: function ({ commit }) {
      commit('UPDATE_COUNT', this.state.count - 1)
    }
  },

  mutations: {
    UPDATE_COUNT: (state, count) => {
      state.count = count;
    }
  },
})
export default store
