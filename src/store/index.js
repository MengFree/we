// import Vue from 'Vue'
// import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

// Vue.use(Vuex)

const state = {
    fuck: 'damn!!',
    name: null,
}

export default {
    state: state,
    actions: actions,
    mutations: mutations
}