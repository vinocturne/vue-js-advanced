import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

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
        component: NewsView
    },
    {
        path: '/ask',
        name: 'ask',
        // this.$route를 통해 분기문을 만들 때 기본 속성인 name을 이용해 분기점을 만들기 위함
        component: AskView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
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