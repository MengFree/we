var path = require("path"),
    rootPath = path.normalize(__dirname + '/..');


module.exports = {
    oss: {
        'region': 'oss-cn-qingdao',
        'accessKeySecret': 'E9emtyKEtkfCzQ5ILc20kHJEG1k39M',
        'accessKeyId': 'LTAITcyQT3mb1UVF',
        'bucket': 'uat-wolianw-goods',
        'aliyun_oss_url': 'http://uat-wolianw-goods.oss-cn-qingdao.aliyuncs.com/',
        // 上传图片
        'img_root_url': path.join(rootPath, '/public/pcweb/uploadimg'), //需要自己手动在项目目录下创建/public/pcweb 文件夹
    }
};