<template>
  <div>
      <!-- 하이 오더 컴포넌트로 NewsView, JobsView, AskView가 다 똑같기 때문에
      이를 하이오더 컴포넌트로 묶어줄 수 있다.
      ListView 하나로 세 가지 같은 행동을 하는 컴포넌트를 묶는 것이다. -->
      <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
    components: {
        ListItem,
    }
}
</script>

<style>

</style>