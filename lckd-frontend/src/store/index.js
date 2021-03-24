import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cookiesPolicy: false,
  },
  mutations: {
    setPolicy(state) {
      state.cookiesPolicy = !state.cookiesPolicy
    }
  },
  actions: {
    getPolicy(ctx) {
      ctx.commit("setPolicy");
    },
  },
  modules: {},
});
