/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

// process.stdin.pipe(process.stdout);

// var ws=fs.createWriteStream("out.txt");
// process.stdin.pipe(ws);
//		

// var rs=fs.createReadStream("out.txt");
// rs.pipe(process.stdout);

// var rs=fs.createReadStream("out.txt");
// var ws=fs.createWriteStream("new-out.txt");
// rs.pipe(ws);

// legacy style
var rs = fs.createReadStream("out.txt");
var ws = fs.createWriteStream("new-out.txt");

rs.setEncoding('utf8');
var totalReadCount = 0;
rs.on('data', function(chunk) {
	console.log(chunk.length);
	totalReadCount++;
	ws.write(chunk);
	rs.pause();
	setTimeout(function() {
		rs.resume();
	}, 5000);
	
});
rs.on('end', function() {
	console.log('no more data to read..');
	console.log(totalReadCount);
});
