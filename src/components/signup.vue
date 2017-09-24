<template>
    <div class="login">
        <h1>signup</h1>
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
                <button @click="signup(user)">signup</button>
            </div>
        </div>
        <ul>
            <li>
                <router-link to="/Hello">Hello</router-link>
            </li>
            <li>
                <router-link to="/login">login</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    
import {mapState,mapActions,mapMutations} from 'vuex';

export default {
    name: 'signup',
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
				'SHIT','LOGIN','SIGNUP'
			]),
        damn() {
            this.SHIT();
        },
        signup(data) {
            console.log(data);
            this.SIGNUP(data)
        }
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
