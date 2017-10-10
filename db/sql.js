var mysql = require("mysql"),
    queues = require("mysql-queues"),
    dbConfig = require("./db.config")

function getConnection() {
    var connection = mysql.createConnection({
        host: dbConfig["host"],
        port: 3306,
        user: dbConfig["user"],
        password: dbConfig["password"],
        database: dbConfig["db"],
        charset: "UTF8_GENERAL_CI",
        debug: false
    })
    queues(connection, true)
    connection.connect()
    return connection
}

function query(sql, params) {
    var q = new Promise((resolve, reject) => {
        let connection = getConnection()
        connection.query(sql, params, function(err, rows, fields) {
            connection.end()
            console.log('sql = ', this.sql)
            if (err) {
                return reject(err)
            }
            var json = JSON.parse(JSON.stringify(rows))
            resolve(json, fields)
        })
    })
    return q
}
module.exports = query