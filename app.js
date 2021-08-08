var http = require('http');
var port = 3000;

var app = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
	res.end("resume\n");
});
app.listen(port);
console.log('Server running at 3000 port')