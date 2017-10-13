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
.title{
text-align: center;
    padding: 22px;
    color: #42b983;
    border-radius: 4px;
    list-style: none;
    text-align: center;
    // font-weight: normal;
    // font-size: 32px;
    cursor: pointer;

}

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

.label-ion {
    line-height: 35px;
    vertical-align: text-bottom;
    height: 100%;
    display: inline-block;
    width: 80px;
    color: #42b983;
}
.btn-ion {
    display: inline;
    vertical-align: middle;
    svg {
        fill: #fff;
        vertical-align: middle;
    }
}

.ion-color {
    fill: #42b983;
}
</style>