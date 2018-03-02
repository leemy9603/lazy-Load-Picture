var express = require('express');
var user = require('../db.js');
var client = user.connect();
var mysql = require('mysql');
var router = express.Router();

var select = {
	selectArt: function(client,callback){
		var sql =  'SELECT * FROM article';
		client.query(sql,function(err,res,fields){
			if (err){
				console.log(err);
			} else{
				jsonWrite(callback,res);
			}
		});
	}
}

var remove = {
	removeArt: function(client,art,callback){
		var sql = 'DELETE FROM article WHERE artid ="'+art.artid+'"';
		client.query(sql,art,function(err,res){
			if (err){
				console.log(err);
			} else{
				jsonWrite(callback,res);
			}
		})
	}
}

var add = {
	addArt: function(client,art,callback){
		console.log(art);
		var sql = 'insert into article(art_title,art_reads,cre_time,art_content,uid,cate_name) values ("'+art.art_title+'",'+art.art_reads+',"'+art.cre_time+'","'+art.art_content+'",'+art.uid+',"'+art.cate_name+'")';
		client.query(sql,art,function(err,res){
			if (err){
				console.log(err);
			} else{
				jsonWrite(callback,res);
			}

		})
	}
}
var update = {
	updateArt: function(client,art,callback){
		var sql = 'UPDATE article SET art_title = "' + art.art_title +'", art_content ="' + art.art_content +'" WHERE artid = "'+ art.artid +'"';
		client.query(sql,art,function(err,res){
			if (err){
				console.log(err);
			} else{
				jsonWrite(callback,res);
			}

		})
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

router.post('/addArt',function(req,res){
	console.log(req)
	var params = req.body;
	add.addArt(client,params,res);
});

router.get('/add',function(req,res){
	res.end("add");
})
router.post('/selectArt',function(req,res){
	console.log(req)
	var params = req.body;
	select.selectArt(client,res);
});

router.post('/removeArt',function(req,res){
	console.log(req)
	var params = req.body;
	remove.removeArt(client,params,res);
});
module.exports = router;