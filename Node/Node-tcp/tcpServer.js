/**
 * http://usejsdoc.org/
 */

var net = require('net');

var tcpServer = net.createServer(function(socket) {
	console.log('connection established...');
	socket.on('end', function() {
		console.log('connectiom disconnected..');
	});
	socket.on('data', function(data) {
		console.log('data received from tcp client - '+data);
		socket.write("server reply : "+data);
	});
});

tcpServer.listen(8111, function() {
	console.log('server started and listening....');
});
