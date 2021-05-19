import Vue from 'vue';
import Vuex from 'vuex';
import { fetchAskList, fetchJobsList, fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    news: [],
    asks : [],
    jobs : []
  },
  mutations: {
      //state로 데이터를 넘기기 때문에 첫 인자는 무조건 state로 해야한다.
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_ASKS(state, asks) {
        state.asks = asks;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    }
  },
  actions : {
      FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response);
            //구조상 actions에서 state로 바로 데이터를 바인딩 할 수 없다.
            //actions에서는 mutations을 거쳐 state로 가기 때문에
            //mutations에서 이를 담아주는 함수를 실행해야함.
            //actions에서는 mutations에 접근할 수 있게 context가 제공된다.
            //context.commit으로 해당 mutations에 접근할 수 있다.
            context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log(error);
        });
      },
      FETCH_ASKS(context) {
          fetchAskList()
          .then(response => {
              context.commit('SET_ASKS', response.data);
          })
          .catch(error => {
              console.log(error);
          })
      },
      FETCH_JOBS(context) {
          fetchJobsList()
          .then(response => {
              context.commit('SET_JOBS', response.data);
          })
          .catch(error => {
              console.log(error);
          })
      }
  }
});