<template>
  <div id="app">
    <router-view></router-view>
    <div class="marsk" v-if="loading">
        <div class="marsk-content">
            <Spinner  :type="'ripple'"  :size="'60px'"></Spinner>
        </div>
    </div>
  </div>
</template>

<script>
import { Spinner } from 'vux'
import {mapState,mapActions} from 'vuex';
export default {
  name: 'app',
  components:{
    Spinner
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
.marsk{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    .marsk-content{
        position: absolute;
        top:30%;
        left: 0;
        right: 0;
        text-align: center;
    }
}
</style>