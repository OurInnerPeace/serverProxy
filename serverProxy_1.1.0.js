const http = require('http');
const c = require('child_process')
const url = require('url');

http.createServer(function (request, response) {

    console.log("请求已接收。");
    console.log("处理中...");
    var status = "Success";
    try {
        var url_parts = url.parse(request.url,true);
        var params = url_parts.query;
        console.log("address: " + params.address);
        console.log("browser: " + params.browser);
        if (params.address) {
            console.log("处理完成！");
            console.log("网页打开中...");
            try {
                if (params.browser === "chrome") {
                    // use chrome 
                    console.log("open chrome browser");
                    c.exec('start "" "chrome" "' + params.address + '"');
                } else if (params.browser === "iexplore") {
                    // use IE
                    console.log("open iexplore browser");
                    c.exec('start "" "iexplore" "' + params.address + '"');
                } else {
                    // use default browser
                    console.log("open default browser");
                    c.exec("start " + params.address);
                }
            } catch (e) {
                try {
                    // use default browser
                    c.exec("start " + params.address);
                } catch (e) {
                    status = "Failed";
                    console.log("open browser failed");
                    console.log(e);
                }
            }
        } else {
            status = "Failed";
        }
    } catch (e) {
        status = "Failed";
    }

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(status);
    console.log("全部处理结束！");
}).listen(9519);

console.log("Server running at http://127.0.0.1:9519/");
