<template>
    <div>
        <x-header>
            <span>overwrite-left</span>
            <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;">left</x-icon>
        </x-header>
        <group title="dasda">
            <cell title="title" value="value"></cell>
        </group>
    </div>
</template>

<script type='text/javascript'>
import {  Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
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

    },
    mounted() {
    },
    beforeDestroy() {

    },
    watch: {

    },
    computed: {
        ...mapState([]),
    },
    data() {
        return {
            showMenu: false,
            menus: {
                'language.noop': '<span class="menu-title">Language</span>',
                'zh-CN': '中文',
                'en': 'English'
            },
            drawerVisibility: true,
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

</style>