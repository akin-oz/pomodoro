import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import timer from '@/store/modules/timer';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    timer,
  },
});
