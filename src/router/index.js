import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

const Hello = r => require.ensure([], () => r(require('../components/Hello')), 'Hello')
const login = r => require.ensure([], () => r(require('../components/login')), 'login')
const signup = r => require.ensure([], () => r(require('../components/signup')), 'signup')
const home = r => require.ensure([], () => r(require('../components/home')), 'home')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '*',
        redirect: '/'
    }, {
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/signup',
        name: 'signup',
        component: signup
    }, {
        path: '/home',
        name: 'home',
        component: home
    }],
    mode: 'history', //路由模式
    strict: true,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    }
})