<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li>
                <a href="#" @click="damn">{{fuck}}</a>
            </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li>
                <router-link to="/login">login</router-link>
            </li>
            <li>
                <router-link to="/signup">signup</router-link>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
            </li>
        </ul>
    </div>
</template>

<script>
    
import {mapState,mapActions,mapMutations} from 'vuex';

export default {
    name: 'Hello',
    data() {
        return {
            msg:'false',
        }
    },
    computed:{
        ...mapState([
            'fuck'
        ]),
    },
    methods: {
        ...mapActions([
				'SHIT'
			]),
        damn() {
            this.SHIT();
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
