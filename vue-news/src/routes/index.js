import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', //mode: history는 localhost뒤에 /#/을 삭제해주는 역할
  routes: [
    {
        path: '/',
        redirect: '/news'
    },
    {
        //path: url에 대한 정보
        path: '/news',
        name: 'news',
        //component : url 주소로 갔을 때 표시될 컴포넌트
        component: NewsView, //mixin을 사용할때에는 그냥 component로 사용
        // component: createListView('NewsView') 하이오더컴포넌트에서는 이런식으로 중간 컴포넌트를 하나 더 만듬
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
             store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                  console.log('fetched');
                  // bus.$emit('end:spinner');
                  next();
                })
                .catch((error) => {
                    console.log(error);
        });
        // console.log('to: ', to);
        // console.log('from: ', from);
        // console.log('next: ', next);
        next(); // next를 호출 해줘야만 해당 url로 이동 가능
        }
    },
    {
      path: '/ask',
      name: 'ask',
        // this.$route를 통해 분기문을 만들 때 기본 속성인 name을 이용해 분기점을 만들기 위함
        // component: createListView('AskView')
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
             store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                  console.log('fetched');
                  // bus.$emit('end:spinner');
                  next();
                })
                .catch((error) => {
                    console.log(error);
        });
      }
    },
    {
        path: '/jobs',
        name: 'jobs',
        // component: createListView('JobsView')
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
             store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                  console.log('fetched');
                  // bus.$emit('end:spinner');
                  next();
                })
                .catch((error) => {
                    console.log(error);
        });
      }
      },
    {
        path: '/item/:id',
        component: ItemView
    },
    {
        path: '/user/:id',
        component: UserView
    },
    
  ]
});