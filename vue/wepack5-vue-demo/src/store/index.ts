import { createStore } from "vuex";

export default createStore({
  state: {
    project: {
      id: 0
    }
  },
  mutations: {
    CHANGE_PROJECT(state, data) {
      state.project.id = data.id
    }
  },
  actions: {},
  modules: {}
});
 