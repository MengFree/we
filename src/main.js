// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router/"
import astore from "./store/"
import Vuex from "vuex"
import axios from "./serve/axios"
import { ToastPlugin } from "vux"

// import "./style/main.css"
import "./style/main.less"
router.beforeEach(function(to, from, next) {
    if (!store.state.user.uid && !(to.name == "Hello" || to.name == "login" || to.name == "signup")) {
        return next({
            path: "/login"
        })
    }
    next()
})
const FastClick = require("fastclick")
FastClick.attach(document.body)
Vue.use(Vuex)
Vue.use(ToastPlugin)
var store = new Vuex.Store(astore)
Vue.config.productionTip = false
    /* eslint-disable no-new */
Vue.prototype.$http = axios
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: { App }
})
export default store