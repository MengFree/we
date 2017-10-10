<template>
    <div class="login">
        <h1>login</h1>
        <div class="form">
            <group>
                <x-input title="email" placeholder="I'm placeholder" v-model="user.email" ></x-input>
            </group>
            <group>
                <x-input title="password" placeholder="I'm placeholder" v-model="user.password" :type="'password'"></x-input>
            </group>
            <group>
                  <x-button  @click.native="login(user)"  type="primary">login</x-button>
            </group>
        </div>
        <ul>
            <li>
                <router-link to="/Hello">Hello</router-link>
            </li>
            <li>
                <router-link to="/signup">signup</router-link>
            </li>
            <li>
                <router-link to="/home">home</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'login',
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
                password: '',
                email: ''
            }
        }
    },
    computed: {
        ...mapState([
            'fuck'
        ]),
    },
    methods: {
        ...mapActions([
            'SHIT', 'LOGIN'
        ]),
        damn() {
            this.SHIT();
        },
        login(data) {
            this.LOGIN(data).then(data => {
                console.log(data);
                this.$router.push('/home');
            }, data => {
                console.log('error', data);
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
