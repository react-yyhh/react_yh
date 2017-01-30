// var express = require('express');
// var path = require('path');
// var app = express();
// // var session = require('express-session');
// //配置文件
// // var settings = require('./settings');
// // var cookieParser = require('cookie-parser');
// // var bodyParser = require('body-parser');
// // //解析cookie req.cookie
// // var cookieParser = require('cookie-parser');
// // app.use(express.static(__dirname));
// // //online-API
// // // global.API = 'http://114.215.80.72:4545';

// // //dev-API
// // global.API = 'http://localhost:3000';
// // //加密
// // var utils =require('./utils/md5');
// // var user = require('./routes/user');

// // app.all('*', function(req, res, next) {
// //     res.header("Access-Control-Allow-Origin", "*");
// //     //
// //     res.header("Access-Control-Allow-Headers", "content-type");
// //     //
// //     res.header("Content-Type", "application/json;charset=utf-8");
// //     next();
// // });
// // // app.use(bodyParser.json({ 'type':'*/*'}));
// // // parse application/json
// // app.use(bodyParser.json())

// app.use('*',function (req,res) {
//    res.sendFile(__dirname+'/index.html')
// })


// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });



// app.listen('3000',function () {
//     console.log('listen 3000 port')
// })


var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

// 相当于通过本地node服务代理请求到了http://cnodejs.org/api
var proxy = [{
    path: '/api/*',
    target: 'https://cnodejs.org',
    host: 'cnodejs.org'
}];

//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: proxy,
    stats: {
        colors: true
    },
});

//将其他路由，全部返回index.html
server.app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

server.listen(3000);