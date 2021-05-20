import Vue from 'vue';
import Vuex from 'vuex';
//모듈화
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    news: [],
    asks : [],
    jobs : [],
    user : []
  },
  getters: {
    fetchedAsk(state) {
        return state.asks;
    }
  },
  mutations,
  actions
});