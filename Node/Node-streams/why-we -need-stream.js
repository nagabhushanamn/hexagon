/**
 * http://usejsdoc.org/
 */

// file
var net = require('net');
var fs = require('fs');


var tcpServer = net.createServer();
tcpServer.on('connection', function(socket) {
	console.log('connection...');

	// fs.readFile('big.mp4', function(err, data) {
	// if (err) {
	// return;
	// }
	// socket.write(data);
	// });

	// 
	var rs = fs.createReadStream('big.mp4'); // readStream

	// rs.on('data', function(chunk) {
	// socket.write(chunk);
	// });
	// rs.on('end',function(){
	// });
	rs.pipe(socket);

	socket.on('end', function() {
		console.log('disconnected...');
	});
	
});
tcpServer.listen(8000, function() {
	console.log('server listening...');
});
