import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = { areaPkidSelected: "" };
const mutations = {
  receiveAreaPkidSelected(state, payload) {
    state.areaPkidSelected = payload.areaPkidSelected;
  },
};

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions: {},
  modules: {},
});
