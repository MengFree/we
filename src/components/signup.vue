<template>
    <div class="login">
        <h1 class="title">signup</h1>
        <div class="form">
            <group>
                <x-input title="username" placeholder="" v-model="user.name">
                    <span slot="label" style="padding-right:10px;display:block;">
                        <x-icon type="ios-contact" size="30" class="ion-color"></x-icon>
                        <font class="label-ion">username</font>
                    </span>
                </x-input>

                <x-input title="email" placeholder="" v-model="user.email">
                    <span slot="label" style="padding-right:10px;display:block;color: #42b983;">
                        <x-icon type="ios-email-outline" size="30" class="ion-color"></x-icon>
                        <font class="label-ion">email</font>
                    </span>
                </x-input>

                <x-input title="password" placeholder="" v-model="user.password" :type="'password'" @on-enter="signup">
                    <span slot="label" style="padding-right:10px;display:block;">
                        <x-icon type="ios-locked-outline" size="30" class="ion-color"></x-icon>
                        <font class="label-ion">password</font>
                    </span>
                </x-input>
            </group>
            <div class="cg">
                <group>
                    <x-button @click.native="signup" type="primary">
                        <span class="btn-ion">
                            <x-icon type="android-upload" size="25"></x-icon>
                        </span>
                        signup
                    </x-button>
                </group>
            </div>
        </div>

        <ul class="links">
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
import { mapState, mapActions } from 'vuex';

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
            var that = this
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

.cg {
    width: 80%;
    margin: 0 auto;
}

.links {
    text-align: center;
    display: flex;
    li {
        flex: 1;
        list-style: none;
        padding-top: 15px;
        a {
            color: #42b983;
        }
    }
}


</style>
