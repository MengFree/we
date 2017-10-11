import * as types from "./mutation-types.js"
export default {
    [types.SHIT](state, msg) {
        state.fuck = msg
    },
    [types.LOGIN](state, data) {
        state.user.email = data.email
        state.user.uid = data.id
        state.user.name = data.userName
    },
    [types.SIGNUP](state, data) {
        state.name = data.name
    },
    [types.LOADING](state, data) {
        if (data) {
            state.loading++
        } else {
            state.loading--
        }
    },
}