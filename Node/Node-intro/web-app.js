/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(req, resp) {
	
	console.log('New request accepted....');
	
	 resp.writeHead(200, {'Content-Type':'application/pdf'});
	// resp.end("Hello");

	var rs=fs.createReadStream('The Principles of Object-Oriented JavaScript.pdf');
	rs.on('data',function(chunk){
		resp.write(chunk);
	});
	rs.on('end',function(){
		resp.end();
	});
	
	
});

server.listen(8080, function() {
	console.log('http server listening on http://127.0.0.1:8080');
});