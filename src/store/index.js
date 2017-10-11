// import Vue from "Vue"
// import Vuex from "vuex"

import mutations from "./mutations"
import actions from "./actions"

// Vue.use(Vuex)

const state = {
    loading: 0,
    fuck: "damn!!",
    user: {
        // name: null,
        // uid: null,
        // email: null
        name: "free",
        uid: 1,
        email: "mfr452@qq.com"
    }
}

export default {
    state: state,
    actions: actions,
    mutations: mutations
}