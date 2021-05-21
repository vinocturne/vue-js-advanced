<template>
  <div>
    <ul class="ask-item">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">
          {{item.points}}
        </div>
        <div>
        <p class="ask-title">
          <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
        </p>
        <small class="link-text">
          {{item.time_ago}} by {{item.user}}
        </small>
        </div>
      </li>
    </ul>
       <!-- <p v-for="item in fetchedAsk">
           <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
        <small>{{item.time_ago}} by {{item.user}}</small>
      </p> -->
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

<style scoped>
.ask-item {
  margin : 0;
  padding: 0;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>