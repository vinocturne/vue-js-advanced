<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
import bus from '../utils/bus.js';
// import { mapState, mapGetters } from 'vuex';
export default {
  components: {
    ListItem,
  },
  // mounted() {
  //   //완료된 시점에 시행하는 라이프사이클 함수
  //   bus.$emit('end:spinner');
  //   믹스인으로 재활용 가능
  // }
  mixins: [ListMixin]
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

