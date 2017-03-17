a = 1;
console.log(a);
/*var b = require("./home.js")
console.log(b.add(3, 4));*/
var http = require("http");
//console.log(http)
//引入mysql第三方模块
var mysql = require("mysql");
//进行数据库连接
var connection = mysql.createConnection({
	host: "localhost",
	user: "Even",
	password: "123456789",
	database: "test"
});
//执行连接
connection.connect();
http.createServer(function(request, response) {
	response.setHeader("Access-Control-Allow-Origin", "*");
	var obj = {
		name: "wscat",
		age: 0
	}

	connection.query("SELECT * FROM class", function(error, results, fields) {
		if(error) throw error;
		console.log("The solution is:", results);
		
		obj.lists = results
		console.log(obj)
		connection.end();
		response.end(JSON.stringify(obj))
	});	
}).listen(6431);
console.log("服务器启动")