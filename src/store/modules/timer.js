const state = {
  totalSeconds: 1500,
};

const getters = {};

const actions = {};

const mutations = {
  setTotalSeconds: (state, totalSeconds) => {
    state.totalSeconds = totalSeconds;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
