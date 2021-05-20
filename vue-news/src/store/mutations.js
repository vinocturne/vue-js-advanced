export default {
    //state로 데이터를 넘기기 때문에 첫 인자는 무조건 state로 해야한다.
  SET_NEWS(state, news) {
      state.news = news;
  },
  SET_ASKS(state, asks) {
      state.asks = asks;
  },
  SET_JOBS(state, jobs) {
      state.jobs = jobs;
  },
  SET_USER(state, user) {
      state.user = user;
  },
  SET_ITEM(state, item) {
      state.item = item;
  }
}