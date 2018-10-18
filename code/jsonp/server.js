var http = require('http');
//引入url模块解析url字符串
var url = require('url');
//引入querystring模块处理query字符串
var querystring = require('querystring');

//创建新的HTTP服务器
var server = http.createServer();
//通过request事件来响应request请求
server.on('request',function(req, res){
    var urlPath = url.parse(req.url).pathname;
    var qs = querystring.parse(req.url.split('?')[1]);
    //4同源服务下 针对jsonp请求 做处理 
    if(urlPath === '/jsonp' && qs.callback){
        res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
        var data = {
            "name": "i am from server by jsonp!"
        };
        data = JSON.stringify(data);
        var callback = qs.callback+'('+data+');';
        res.end(callback);
    }
    else{
        console.log('req.url is '+req.url,'url.parse(req.url).pathname' +url.parse(req.url).pathname);
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
        res.end('Hell World\n');    
    }    
});
//监听8080端口
server.listen('8080');
//用于提示我们服务器启动成功
console.log('Server running!');