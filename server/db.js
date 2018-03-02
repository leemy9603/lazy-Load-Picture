var mysql = require('mysql');
//连接是数据库的配置
function connectServer(){
	var conn = mysql.createConnection({
		 	host:"127.0.0.1",
		 	user: 'root',
		 	pssword: '',
		 	port:'3306',
		 	database:'pic'
	});
	return conn;
}
exports.connect = connectServer;