<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
// import { mapState, mapGetters } from 'vuex';
export default {
  components: {
    ListItem,
  },
  // created() {
  //    bus.$emit('start:spinner');
  //    setTimeout(() => {
  //     this.$store.dispatch('FETCH_ASKS')
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
  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])
    // ...mapGetters({
    //   askItems : 'fetchedAsk'
    // })
  // },
  // computed: {
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // }
  //   ...mapState({
  //     fetchedAsk : state => state.asks
  //   })
  // },
  // created() {
  //   this.$store.dispatch('FETCH_ASKS');
  // }

</script>

