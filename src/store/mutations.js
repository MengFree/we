import * as types from './mutation-types.js'
export default {
    [types.SHIT](state, msg) {
        state.fuck = msg;
    },
    [types.LOGIN](state, uid) {
        state.uid = uid;
    },
    [types.SIGNUP](state, data) {
        state.name = data.name;
    },
}