<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by <router-link v-bind:to = "`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
          </small>
        </div>
      </li>
      
    </ul>

  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     users : []
  //   }
  // },
  created() {
   this.$store.dispatch('FETCH_NEWS');

    // //axios를 불러오면 new Promise 객체가 생성이되어 then과 catch로 데이터를 조작할 수 있다.
    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    // .then(function(response) {
    //   console.log(response);
    //   //var vm = this를 생성하지 않고 this.user만 쓰게되면
    //   //콜백 자체가 this 바인딩이 현재의 뷰 컴포넌트를 바라보지 않기 때문에 오류가 난다.
    //   //이를 방지하기 위해 뷰 모델을 this로 생성해주어야 한다.
    //   // this.user = response.data;
    //   vm.users = response.data;
    // })
    // .catch(function(error) {
    //   console.log(error);
    // })
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>