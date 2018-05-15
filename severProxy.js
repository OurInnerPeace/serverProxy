const http = require('http');
const c = require('child_process')
const url = require('url');

http.createServer(function (request, response) {

	console.log("请求已接收。");
	console.log("处理中...");
    var status = "Success";
	var urlObj = url.parse(request.url);
	try {
		var param = urlObj.path.slice(1, urlObj.path.length);
		var paramArr = param.split("=");
		if (paramArr[0] === "address" && paramArr[1]) {
			// open default browser
			console.log("处理完成！");
			console.log(paramArr[1]);
			console.log("网页打开中...");
			c.exec("start " + paramArr[1]);
		} else {
			status = "Failed!";
		}
	
	} catch (e) {
		status = "Failed!";
	}

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(status);
	console.log("全部处理结束！");
}).listen(9519);

console.log("Server running at http://127.0.0.1:9519/");
