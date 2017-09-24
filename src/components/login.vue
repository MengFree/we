<template>
    <div class="login">
        <h1>login</h1>
        <div class="form">
            <div class="row">
                <label for="">email</label>
                <input v-model="user.email" type="text" name="" id="" />
            </div>
            <div class="row">
                <label for="">password</label>
                <input v-model="user.password" type="password" name="" id="" />
            </div>
            <div class="row">
                <button @click="LOGIN(user)">login</button>
            </div>
        </div>
        <ul>
            <li>
                <router-link to="/Hello">Hello</router-link>
            </li>
            <li>
                <router-link to="/signup">signup</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    
import {mapState,mapActions,mapMutations} from 'vuex';

export default {
    name: 'login',
    data() {
        return {
            msg: 'false',
            user: {
                password:'',
                email:''
            }
        }
    },
    computed:{
        ...mapState([
            'fuck'
        ]),
    },
    methods: {
        ...mapActions([
				'SHIT','LOGIN'
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
