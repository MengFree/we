var axios = require("axios")

export var login = function(params) {
    return axios({
        url: "/api/login",
        method: "post",
        data: params,
        $title: "登录"
    })
}
export var signup = function(params) {
    return axios({
        url: "/api/signup",
        method: "post",
        data: params,
        $title: "注册"
    })
}