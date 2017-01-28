// 数据库连接对象
var mysql=require('mysql');
var settings=require('../settings');

var {host,user,password,database}=settings;
var db=mysql.createConnection({host,user,password,database});
export db;