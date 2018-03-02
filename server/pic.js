var express = require('express');
var path = require('path');
//var favicon = require('server-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var lazyLoad = express();
//路由信息,存放在./routes目录下
var art = require('./routes/index.js');//文章接口
lazyLoad.use(bodyParser.json());
lazyLoad.use(bodyParser.urlencoded({extended:false}));
//lazyLoad.use(express.static(path.join(_dirname,'src')));
lazyLoad.use('/lazyLoad/index',art);//在lazyLoad中注册article接口
lazyLoad.listen(3000);
console.log('success listen at port 3000....');

