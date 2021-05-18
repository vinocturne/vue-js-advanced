//어플리케이션의 구조를 알 수 있는 구조도가 보여야한다.
import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
