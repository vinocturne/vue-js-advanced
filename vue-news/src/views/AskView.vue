<template>
  <div>
       <p v-for="item in fetchedAsk">
           <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
           <!-- <a v-bind:href="item.url">
              {{ item.title }}
           </a> -->
        <small>{{item.time_ago}} by {{item.user}}</small>
      </p>
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