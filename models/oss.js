'use strict';

var fs = require('fs'),
    co = require('co'),
    path = require('path'),
    OSS = require('ali-oss');
var config = require('../config/oss');
var client = new OSS({
    region: config.oss.region,
    accessKeySecret: config.oss.accessKeySecret,
    accessKeyId: config.oss.accessKeyId,
    bucket: config.oss.bucket
});
require('babel-polyfill');

exports.deal_oss = function(localurl, callback) {
    co(function*() {
        localurl = path.normalize(localurl);
        // var destUrl = localurl.replace(rootUrl + path.sep, "");
        var destUrl = path.basename(localurl);
        var stream = fs.createReadStream(localurl);
        var result = yield client.putStream(destUrl, stream);
        console.log("OSS 图片上传结果:");
        console.log(result);
        if (result.res && result.res.status === 200) {
            return callback(null, destUrl);
        } else {
            console.log(result);
            return callback(err);
        }
    }).catch(function(err) {
        return callback(err);
    });
};