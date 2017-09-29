import * as types from './mutation-types.js'
// import firebase from '../serve/'

export default {
    [types.SHIT]({ commit, state }) {
        commit(types.SHIT, 'fucker')
    },
    [types.LOGIN]({ commit, state }, data) {
        console.log(data);
        return new Promise(function(resolve, reject) {
            if (data.email && data.password) {
                commit(types.LOGIN, data);
                resolve('done');
            } else {
                reject('damn');
            }
        });
        // return firebase.auth()
        //     .signInWithEmailAndPassword(data.email, data.password)
        //     .then(user => {
        //         console.log(user);
        //         var uid = user.uid;
        //         commit(types.LOGIN, uid);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         if (error.code == "auth/wrong-password") {
        //             console.log(`${data.email} 密码错误！`)
        //         }
        //     });
    },
    [types.SIGNUP]({ commit, state }, data) {
        console.log(data);
        commit(types.SIGNUP, data);
        // firebase.auth()
        //     .createUserWithEmailAndPassword(data.email, data.password).catch(function(error) {
        //         // Handle Errors here.
        //         console.log(error);
        //         if (error.code == "auth/email-already-in-use") {
        //             console.log(`${data.email} 已经注册请直接登录`)
        //         }
        //     }).then(data => {
        //         console.log(data);
        //     });
    }

}