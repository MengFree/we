var Waterline = require("waterline")

Waterline.Collection.extend({
    identity: "user", //模型名，默认对应表名，你也可以通过tableName 属性来配置对应的表名
    connection: "myLocalMysql", //所采有的数据库连接
    schema: true,
    attributes: {
        name: "string",
        user_id: "number",
        username: "string",
        email: "string",
        roleid: "string",
    }
})

module.exports = Waterline