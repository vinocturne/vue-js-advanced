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
export default {
  components : {
    ListItem,
  },
  created() {
     this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

