<template>
    <div class="body" style="height:100%;">
        <drawer width="200px;" :show.sync="drawerVisibility" :show-mode="showModeValue" :placement="showPlacementValue" :drawer-style="{'background-color':'#35495e', width: '200px'}">
            <div slot="drawer">
                <group title="Drawer demo(beta)">
                    <cell title="test" link="/home" value="演示" @click.native="drawerVisibility = false">
                    </cell>
                    <cell title="test1" link="/home/test1" @click.native="drawerVisibility = false">
                    </cell>
                </group>
            </div>
            <view-box ref="viewBox" body-padding-bottom="55px">
                <x-header>
                    <span @click="toggleMenu" slot="overwrite-left">
                        <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
                    </span>
                    <span>{{title}}</span>
                </x-header>
                <transition :name="'vux-pop-in'">
                    <router-view class="router-view"></router-view>
                </transition>
            </view-box>
        </drawer>
    </div>
</template>

<script type='text/javascript'>
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
    directives: {
        TransferDom
    },
    components: {
        Radio,
        Group,
        Cell,
        Badge,
        Drawer,
        ButtonTab,
        ButtonTabItem,
        ViewBox,
        XHeader,
        Tabbar,
        TabbarItem,
        Loading,
        Actionsheet,
    },
    methods: {
        toggleMenu() {
            this.drawerVisibility = !this.drawerVisibility;
        }
    },
    mounted() {
    },
    beforeDestroy() {

    },
    watch: {

    },
    computed: {
        ...mapState([]),
        title(){
            var $name=this.$route.name,
            list= {
                test:'测试',
                test1:'测试1',
                test:'测试',
                test:'测试',
                test:'测试',
            };
            var title=list[$name]||'danm';
            return title;
        }
    },
    data() {
        return {
            drawerVisibility: false,
            menus: {
                'language.noop': '<span class="menu-title">Language</span>',
                'zh-CN': '中文',
                'en': 'English'
            },
            drawerVisibility: false,
            showMode: 'push',
            showModeValue: 'push',
            showPlacement: 'left',
            showPlacementValue: 'left',
            isLoading: false,
            direction: 'no'
        }
    }
}
</script>

<style lang="less">
.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>