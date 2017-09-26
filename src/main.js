// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'
import astore from './store/'
import Vuex from 'vuex'
import axios from 'axios'
router.beforeEach(function(to, from, next) {
    if (!store.state.uid && !(to.name == 'Hello' || to.name == 'login' || to.name == 'signup')) {
        return next({
            path: '/login'
        })
    }
    next()
})

Vue.use(Vuex);
var store = new Vuex.Store(astore);
console.log(astore.state);

Vue.config.productionTip = false
    /* eslint-disable no-new */
Vue.prototype.$http = axios;
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});