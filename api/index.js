var router = require("express").Router(),
    fs = require("fs"),
    path = require("path"),
    oss = require("../models/oss"),
    formidable = require("formidable"),
    con = require("../db/sql"),
    md5 = require("md5")
var config = require("../config/oss")
module.exports = router
var rs = {
        response: function(code, msg, body) {
            if (typeof code === "object") {
                body = code
                code = null
            }
            if (code == "unlogin") {
                code = -404
                msg = "未登录/登录超时！"
                body = null
            }
            if (code == "error") {
                code = -110
                msg = "服务器访问错误！"
                body = null
            }
            if (code == "params") {
                code = -120
                msg = "缺少必要参数！" + msg
                body = null
            }
            if (code == "noPermission") {
                code = -140
                msg = "无权访问"
                body = null
            }
            var result = {
                meta: {
                    code: code || 200,
                    msg: msg || "success"
                },
                body: body || null
            }
            return result
        }
    }
    // 上传图片
router.post("/uploadimg", (req, res) => {
    var form = new formidable.IncomingForm() //创建上传表单
    form.encoding = "utf-8" //设置编辑
    var uploadPath = config.oss.img_root_url
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath)
    }
    form.uploadDir = uploadPath //设置上传目录
    form.keepExtensions = true //保留后缀
    form.maxFieldsSize = 200 * 1024 * 1024 //文件大小
    form.parse(req, function(err, fields, files) {
        if (err) {
            return res.send(rs.response("error"))
        }
        var localUrl = files.IMG.path
        var newName = new Date().getTime() + "-" + parseInt(Math.random() * 100000000) + path.extname(localUrl)
        var newPath = path.join(uploadPath, newName)
        fs.renameSync(localUrl, newPath) //重命名
        oss.deal_oss(newPath, function(err, result) {
            if (!err) {
                fs.unlink(newPath, function(err) {
                    if (!err) {
                        console.log("文件:" + localUrl + "删除成功！")
                    }
                })
                console.log("上传图片成功")
                console.log("result", result)
                return res.send(rs.response({ url: result, base: config.oss.aliyun_oss_url }))
            } else {
                return res.send(rs.response("error"))
            }
        })
    })
})

router.get("/login", (req, res) => {
    console.log(req.query.email, md5(req.query.password))
    con("SELECT * from user where `email`=? AND `password`=?", [req.query.email, md5(req.query.password)])
        .then(rows => {
            console.log(rows)
            if (rows.length) {
                req.session.user = {
                    id: rows[0].user_id,
                    userName: rows[0].username,
                    email: rows[0].email
                }
                return res.json({ code: 200, msg: "登录成功", body: req.session.user })
            }
            res.json({ code: -110, msg: "找不到该用户", body: null })
        }).catch(err => {
            console.log(err)
            res.json(rs.response(-110, "数据库连不上啊！！！！！"))
        })
})
router.get("/signup", (req, res) => {
    console.log(req.query.name, req.query.email, md5(req.query.password))
    con("select `user_id` from user where `email`=?", [req.query.email])
        .then(rows1 => {
            console.log(rows1)
            if (rows1.length) {
                throw new Error(111)
            }
            return con("select `user_id` from user where `username`=?", [req.query.name])
        }).then(rows1 => {
            console.log(rows1)
            if (rows1.length) {
                throw new Error(112)
            }
            return con("insert into user (`email`,`password`,`username`,`roleid`) values (?,?,?,?)", [req.query.email, md5(req.query.password), req.query.name, 2])
        }).then(rows2 => {
            console.log(rows2)
            if (rows2.length) {
                return con("SELECT * from user where `user_id`=?", [rows2[0].insertId])
            }
            throw new Error(113)
        }).then(rows3 => {
            console.log(rows3)
            if (rows3.length) {
                req.session.user = {
                    id: rows3[0].user_id,
                    userName: rows3[0].username,
                    email: rows3[0].email
                }
                return res.json({ code: 200, msg: "注册成功", body: req.session.user })
            }
            throw new Error('注册失败')
        }).catch(err => {
            console.log(err)
            var msg = "数据库连接错误！！",
                code = -110,
                ob = {
                    111: "邮箱已被占用",
                    112: "用户名已被占用",
                    113: "注册失败"
                }
            console.log(isNaN(err.message), err.message)
            if (!isNaN(err.message)) {
                msg = ob[err.message]
                code = '-' + err.message
            }
            res.json(rs.response(code, msg))
        })
})