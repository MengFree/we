import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

const Hello = r => require.ensure([], () => r(require('../components/Hello')), 'Hello')
const login = r => require.ensure([], () => r(require('../components/login')), 'login')
const signup = r => require.ensure([], () => r(require('../components/signup')), 'signup')
const home = r => require.ensure([], () => r(require('../components/home')), 'home')
const test = r => require.ensure([], () => r(require('../components/test')), 'test')
const test1 = r => require.ensure([], () => r(require('../components/test1')), 'test1')

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
        component: home,
        children: [{
            path: '',
            name: 'test',
            component: test,
        }, {
            path: 'test1',
            name: 'test1',
            component: test1,
        }]
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