/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');
var oppressor = require("oppressor");

var httpServer = http.createServer();
httpServer.on('request', function(req, resp) {
	// resp.writeHead(200, {
	// 'Content-Type' : "application/pdf"
	// });
	var rs = fs.createReadStream('Node.js in Practice.pdf');
	rs.pipe(oppressor()).pipe(resp);

});
httpServer.listen(8080, function() {
	console.log('httpServer started...');
});