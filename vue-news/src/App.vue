<template>
  <div id="app">
    <tool-bar></tool-bar>
    <!-- url이 만약 news면 router-view에 NewsView가 뿌려진다. -->
    <router-view></router-view>
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

</style>
