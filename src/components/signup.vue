<template>
    <div class="login">
        <h1>signup</h1>
        <div class="form">
            <group>
                <x-input title="username" placeholder="" v-model="user.name"></x-input>

                <x-input title="email" placeholder="" v-model="user.email"></x-input>

                <x-input title="password" placeholder="" v-model="user.password" :type="'password'"></x-input>
            </group>
            <div class="cg">
                <group>
                    <x-button @click.native="signup()" type="primary">signup</x-button>
                </group>
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
import { XInput, Group, XButton, Cell, Spinner } from 'vux'
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'signup',
    components: {
        XInput,
        XButton,
        Group,
        Cell,
        Spinner
    },
    data() {
        return {
            msg: 'false',
            user: {
                password: '',
                email: '',
                name: ''
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
                name: !!this.user.name.trim(),
                email: emailRE.test(this.user.email),
                password: !!this.user.password.trim(),
                lenght: this.user.password.trim().length >= 6
            }
        },
        isValid: function() {
            var validation = this.validation
            var op = {
                name: 'username is empty !',
                email: 'please get a right email!',
                password: 'password is empty !',
                lenght: 'password min length >= 6 '
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
            'SHIT', 'LOGIN', 'SIGNUP'
        ]),
        damn() {
            this.SHIT();
        },
        signup() {
            var that=this
            if (this.isValid) {
                return this.$vux.toast.text(this.isValid, 'top')
            }
            this.SIGNUP(this.user).then(res => {
                console.log(res.meta.msg)
                this.$vux.toast.show({
                    text: res.meta.msg,
                    onHide() {
                        that.$router.push('/home');
                    }
                })
            }).catch(res => {
                console.log(res)
                this.$vux.toast.text(res, 'top')
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
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
