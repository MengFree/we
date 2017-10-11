import * as types from "./mutation-types.js"
// import firebase from "../serve/"
import * as api from "../api/api"
export default {
    [types.SHIT]({ commit, state }) {
        commit(types.SHIT, "fucker")
    },
    [types.LOGIN]({ commit, state }, data) {
        return new Promise(function(resolve, reject) {
                if (data.email && data.password) {
                    api.login(data).then(res => {
                        if (res.data.meta.code == 200) {
                            commit(types.LOGIN, res.data.body)
                            resolve(res.data.meta.msg)
                        } else {
                            reject(res.data.meta.msg)
                        }
                    })
                } else {
                    reject("damn!!!!!")
                }
            })
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
        return new Promise(function(resolve, reject) {
            if (data.email && data.password) {
                api.signup(data).then(res => {
                    if (res.data.meta.code == 200) {
                        commit(types.LOGIN, res.data.body)
                        resolve(res.data)
                    } else {
                        reject(res.data.meta.msg)
                    }
                })
            } else {
                reject("damn!!!!!")
            }
        })


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
    },
    [types.LOADING]({ commit, state }, flag) {
        commit(types.LOADING, flag)
    }

}