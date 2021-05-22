<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import { mapState, mapGetters } from 'vuex';
export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('FETCH_ASKS');
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
}
</script>

