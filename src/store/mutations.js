import * as types from './mutation-types.js'
export default {
    [types.SHIT](state, msg) {
        state.fuck = msg;
    },
    [types.LOGIN](state, data) {
        state.email = data.email;
        state.uid = data.id;
        state.name = data.userName;
        console.log(state);
    },
    [types.SIGNUP](state, data) {
        state.name = data.name;
    },
}