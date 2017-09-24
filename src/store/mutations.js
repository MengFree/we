import * as types from './mutation-types.js'
export default {
    [types.SHIT](state, msg) {
        state.fuck = msg;
    },
    [types.LOGIN](state, data) {
        state.name = data.name;
    },
    [types.SIGNUP](state, data) {
        state.name = data.name;
    },
}