var axios = require("axios")

export var login = function(params) {
    return axios.get("/api/login", {
        params: params,
        $title: "登录"
    })
}
export var signup = function(params) {
    return axios.get("/api/signup", {
        params: params,
        $title: "注册"
    })
}