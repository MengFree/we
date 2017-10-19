var session = require("express-session")
var cookieParser = require("cookie-parser")
var config = require("./config")

var path = require("path")
var express = require("express")
var proxyMiddleware = require("http-proxy-middleware")
var bodyParser = require("body-parser")
var port = 8888
var proxyTable = config.dev.proxyTable

var app = express()

process.env.NODE_ENV = "production"
    // proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    var options = proxyTable[context]
    if (typeof options === "string") {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})
app.use(cookieParser())
app.use(session({
    secret: "12345",
    name: "testapp", //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, //设置maxAge是ms，即1天后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));
// app.use(xmlparser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
// handle fallback for HTML5 history API
app.use(require("connect-history-api-fallback")())

// serve webpack bundle output
// app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// app.use(hotMiddleware)

// serve pure static assets
// var staticPath = path.posix.join("/", "./dist", "./static")
// console.log(staticPath)
// app.use(staticPath, express.static("./static"))
// var p = express()
// p.param('id', function(req, res, next, id) {
//     console.log(id)
//     req.session.idss = id
//     console.log('CALLED ONLY ONCE');
//     next();
// })

// p.get('/user/:id', function(req, res, next) {
//     console.log('although this matches');
//     next();
// });

// p.get('/user/:id', function(req, res) {
//     console.log('and this matches too');
//     res.end('msg');
//     console.log(req.session.idss)
// });
// app.use("/pp", p)
// app.use("*", function(req, res, next) {
//     console.log(req.baseUrl)
//     next();
// });
var uri = "http://localhost:" + port

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})
app.use(express.static(path.join(__dirname, 'dist')));
console.log("> Starting dev server...", uri)
var route = require("./api/")
app.use("/api", route)
app.use('/', function(req, res, next) {
    res.redirect('/index.html')
});

var server = app.listen(port)

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}