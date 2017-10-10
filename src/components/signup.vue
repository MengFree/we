<template>
    <div class="login">
        <h1>signup</h1>
        <div class="form">
            <group>
                <x-input title="username" placeholder="" v-model="user.name" ></x-input>
            </group>
            <group>
                <x-input title="email" placeholder="" v-model="user.email" ></x-input>
            </group>
            <group>
                <x-input title="password" placeholder="" v-model="user.password" :type="'password'"></x-input>
            </group>
            <group>
                  <x-button  @click.native="signup(user)"  type="primary">signup</x-button>
            </group>
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
import { XInput, Group, XButton, Cell } from 'vux'
import {mapState,mapActions,mapMutations} from 'vuex';

export default {
    name: 'signup',
    components: {
        XInput,
        XButton,
        Group,
        Cell
    },
    data() {
        return {
            msg: 'false',
            user: {
                password:'',
                email: '',
                name:''
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
            this.SIGNUP(data).then(res => {
                console.log(res)
                console.log(res.meta.msg)
            }).catch(res => {
                console.log(res)
            })
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
