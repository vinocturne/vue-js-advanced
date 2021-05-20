<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url이 만약 news면 router-view에 NewsView가 뿌려진다. -->
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import ToolBar from './components/ToolBar.vue';
export default {
  components: {
    ToolBar
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
