const state = {
  isTokenValid: false,
};

const getters = {};

const actions = {};

const mutations = {
  setTokenValid: (state) => {
    state.isTokenValid = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
