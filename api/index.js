var router = require('express').Router(),
    request = require('request'),
    // moment = request('moment'),
    fs = require('fs'),
    path = require('path'),
    oss = require('../models/oss'),
    formidable = require('formidable');
var config = require('../config/oss');
module.exports = router;
var rs = {
        response: function(code, msg, body) {
            if (typeof code === 'object') {
                body = code;
                code = null;
            }
            if (code == 'unlogin') {
                code = -404;
                msg = '未登录/登录超时！';
                body = null;
            }
            if (code == 'error') {
                code = -110;
                msg = '服务器访问错误！';
                body = null;
            }
            if (code == 'params') {
                code = -120;
                msg = '缺少必要参数！' + msg;
                body = null;
            }
            if (code == 'noPermission') {
                code = -140;
                msg = '无权访问';
                body = null;
            }
            var result = {
                meta: {
                    code: code || 200,
                    msg: msg || 'success'
                },
                body: body || null
            };
            return JSON.stringify(result);
        }
    }
    // 上传图片
router.post('/uploadimg', (req, res) => {
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    var uploadPath = config.oss.img_root_url;
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath);
    }
    form.uploadDir = uploadPath; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 200 * 1024 * 1024; //文件大小
    form.parse(req, function(err, fields, files) {
        if (err) {
            return res.send(rs.response('error'));
        }
        var localUrl = files.IMG.path;
        var newName = new Date().getTime() + '-' + parseInt(Math.random() * 100000000) + path.extname(localUrl);
        var newPath = path.join(uploadPath, newName);
        fs.renameSync(localUrl, newPath); //重命名
        oss.deal_oss(newPath, function(err, result) {
            if (!err) {
                fs.unlink(newPath, function(err) {
                    if (!err) {
                        console.log('文件:' + localUrl + '删除成功！');
                    }
                })
                console.log('上传图片成功');
                console.log('result', result);
                return res.send(rs.response({ url: result, base: config.oss.aliyun_oss_url }));
            } else {
                return res.send(rs.response('error'));
            }
        });
    });
});

router.get('/test', (req, res) => {
    res.end('end !!!!!!!!!!!!!!!!!!!');
})