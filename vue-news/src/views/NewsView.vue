<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  }, 
  // mounted() {
  //   //완료된 시점에 시행하는 라이프사이클 함수
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin]
  // created() {
  //    bus.$emit('start:spinner');
  //    setTimeout(() => {
  //     this.$store.dispatch('FETCH_NEWS')
  //    .then(() => {
  //      console.log('fetched');
  //      bus.$emit('end:spinner');
  //    })
  //    .catch((error) => {
  //      console.log(error);
  //    });
  //    }, 3000);
  // }
}
</script>
<style>
</style>