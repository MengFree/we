<template>
    <div class="login">
        <h1>login</h1>
        <div class="form">
            <group>
                <x-input title="email" placeholder="I'm placeholder" v-model="user.email"></x-input>
            </group>
            <group>
                <x-input title="password" placeholder="I'm placeholder" v-model="user.password" :type="'password'"></x-input>
            </group>
            <div class="cg">
                <group>
                    <x-button @click.native="login(user)" type="primary">login</x-button>
                </group>
            </div>
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
                password: 'a123456',
                email: 'mfr452@qq.com'
            }
        }
    },
    computed: {
        ...mapState([
            'fuck'
        ]),
        validation: function() {
            var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return {
                email: emailRE.test(this.user.email),
                password: !!this.user.password.trim(),
            }
        },
        isValid: function() {
            var validation = this.validation
            var op = {
                email: 'please get a right email!',
                password: 'password is empty !'
            }
            for (var key in validation) {
                if (validation.hasOwnProperty(key)) {
                    var flag = validation[key];
                    if (!flag) {
                        return op[key]
                    }
                }
            }
            return false
        }
    },
    methods: {
        ...mapActions([
            'SHIT', 'LOGIN'
        ]),
        damn() {
            this.SHIT();
        },
        login(data) {
            var that = this
            if (this.isValid) {
                return this.$vux.toast.text(this.isValid, 'top')
            }
            this.LOGIN(data).then(res => {
                console.log("res",res);
                this.$vux.toast.show({
                    text: res,
                    onHide() {
                        that.$router.push('/home');
                    }
                })
            }).catch(e => {
                this.$vux.toast.text(e, 'top')
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
.cg {
    width: 80%;
    margin: 0 auto;
}
</style>
