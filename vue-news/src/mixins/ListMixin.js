// mixin
import bus from '../utils/bus.js';

export default {
    //재사용할 컴포넌트 옵션
    // created() {
    //     bus.$emit('start:spinner');
    //          this.$store.dispatch('FETCH_LIST', this.$route.name)
    //             .then(() => {
    //                 console.log('fetched');
    //                 bus.$emit('end:spinner');
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //     });
    // }
    mounted() {
    //완료된 시점에 시행하는 라이프사이클 함수
    bus.$emit('end:spinner');
  }
}

// // hoc
// export default function create() {
//     //재사용할 컴포넌트 옵션
// }