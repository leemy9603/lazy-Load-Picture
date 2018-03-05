var express = require('express');
var user = require('../db.js');
var client = user.connect();
var mysql = require('mysql');
// var router = express.Router();
var app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
var select = {
	selectPic: function(client,callback){
		var sql =  'SELECT * FROM picture';
		client.query(sql,function(err,res,fields){
			if (err){
				console.log(err);
			} else{
				jsonWrite(callback,res);
			}
		});
	}
}

var jsonWrite = function(res,ret){
	console.log("ret" +  ret)
	if(typeof ret=== 'undefined'){
		res.json({code:'1',msg:'操作失败'});
	}else{
		res.json(ret);
	}
}

app.get('/selectPic',function(req,res){
	console.log(req)
	var params = req.body;
	select.selectPic(client,res);
});
module.exports = app;