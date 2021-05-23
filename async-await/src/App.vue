<template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items" v-bind:key="item"> {{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
// import { handleException } from './utils/handler.js';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    //Promise 기반
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if(response.data.id === 1) {
          axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(response => {
            this.items = response.data;
          });
        }
      })
      .catch(error => console.log(error));
    },
    //async await 기반
    async loginUser1() {
      //오류 캐치는 자바처럼 try-catch 블록을 사용한다.
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if(response.data.id === 1) {
        var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.items = list.data;
        }
      } catch (error) {
        // handleException(error); // 핸들러를 생성해 에러에 대해 다룰 수도 있다.
        console.log(error);
      }
      
    }
  }
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
