import { fetchAskList, fetchItem, fetchJobsList, fetchNewsList, fetchUserInfo, fetchList } from '../api/index.js';
export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                //구조상 actions에서 state로 바로 데이터를 바인딩 할 수 없다.
                //actions에서는 mutations을 거쳐 state로 가기 때문에
                //mutations에서 이를 담아주는 함수를 실행해야함.
                //actions에서는 mutations에 접근할 수 있게 context가 제공된다.
                //context.commit으로 해당 mutations에 접근할 수 있다.
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASKS', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            //디스트럭쳐링 ({ })
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ITEM({ commit }, item) {
        fetchItem(item)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(error => console.log(error));
    }
}