<template>
  <div>
      <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
    // ...mapGetters({
    //   askItems : 'fetchedAsk'
    // })
  },
  // computed: {
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // }
  //   ...mapState({
  //     fetchedAsk : state => state.asks
  //   })
  // },
  created() {
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>