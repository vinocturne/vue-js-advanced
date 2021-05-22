<template>
  <div>
      <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in this.$store.state.jobs" class="post">
        <div class="points">
          {{ item.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class = "link-text">
            {{item.time_ago}} by
            <a :href="item.url">
              {{item.domain}}
            </a>
          </small>
        </div>       
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
  components : {
    ListItem,
  },
  // created() {
  //    bus.$emit('start:spinner');
  //    setTimeout(() => {
  //     this.$store.dispatch('FETCH_JOBS')
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

