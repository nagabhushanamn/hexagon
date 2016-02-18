/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

// Event

fs.open('Notes.txt', 'r', function(err, handle) {
	console.log('Notes.txt file opened..');

	if (err) {
		return;
	}

	var buffer = new Buffer(100000);

	fs.read(handle, buffer, 0, 100000, null, function(err, length) {

		if (err) {
			return;
		}
		console.log('Notes.txt file after read');
		console.log(buffer.toString('utf8', 0, length));

		fs.close(handle, function() {
		});

	});
});

// ----------------------------------

fs.open('app.js', 'r', function(err, handle) {
	console.log('app.js file opened..');

	if (err) {
		return;
	}

	var buffer = new Buffer(100000);

	fs.read(handle, buffer, 0, 100000, null, function(err, length) {

		if (err) {
			return;
		}
		console.log('app.js file after read');
		console.log(buffer.toString('utf8', 0, length));

		fs.close(handle, function() {
		});

	});

});