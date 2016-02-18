/**
 * http://usejsdoc.org/
 */

var events = require('events');
var util=require("util");

var EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

// ee.on('some-event', function() {
// console.log('handling some-event..');
// });
//
//
// ee.emit('some-event');
// ee.emit('some-event');

// ----------------------------------

// ee.on('new-user', function(data) {
// console.log(data.name+" joined into session");
// });
//
// ee.emit('new-user',{name:'nag'});
// ee.emit('new-user',{name:'riya'});

// ----------------------------------
//
// ee.setMaxListeners(15);
//
// ee.on('some-event',function(){console.log('handler-1')});
// ee.on('some-event',function(){console.log('handler-2')});
// ee.on('some-event',function(){console.log('handler-3')});
// ee.on('some-event',function(){console.log('handler-4')});
// ee.on('some-event',function(){console.log('handler-5')});
// ee.on('some-event',function(){console.log('handler-6')});
// ee.on('some-event',function(){console.log('handler-7')});
// ee.on('some-event',function(){console.log('handler-8')});
// ee.on('some-event',function(){console.log('handler-9')});
// ee.on('some-event',function(){console.log('handler-10')});
// ee.on('some-event',function(){console.log('handler-11')});
//
// ee.emit('some-event');

// -----------------------------------------------------
//
// ee.once('some-event', function() {
// console.log('once...');
// });
//
// ee.emit('some-event');
// ee.emit('some-event');

// ------------------------------------------------------

// ee.on('some-event',function(){console.log('handler-10')});
// ee.on('some-event',function(){console.log('handler-11')});
//
// ee.removeAllListeners('some-event');
//
// ee.emit('some-event')

// ------------------------------------------------------
//
// function f1(){
// console.log('f1');
// }
// function f2(){
// console.log('f2');
// }
//
// ee.on('some-event', f1);
// ee.on('some-event', f2);
//
// ee.removeListener('some-event', f1);
//
// ee.on('some-event', f1);
// ee.on('some-event', f2);
//
//
// ee.emit('some-event');

// ------------------------------------------------------

// module-1
//
//function Door() {
//	vat thhat=this;
//	this.open = function() {
//		console.log('door opened...');
//		that.emit('open');
//	};
//	this.close = function() {
//		console.log('door closed..');
//		that.emit('close');
//	};
//}
//util.inherits(Door, EventEmitter);
//
//
//// module-2
//function Light(){
//	door.on('open', function() {
//		console.log('Light On....');
//	});
//	door.on('close', function() {
//		console.log('Light Off....');
//	});
//}
//
//
//var door=new Door();
//var light=new Light();
//
//setTimeout(function() {
//	door.open();
//}, 5000);
//
//setTimeout(function() {
//	door.close();
//}, 15000);
//

//--------------------------------------

var http=require("http");
var server=http.createServer();


server.on('request', function() {
	console.log('rquest received....');
	//resp.end('Have Lunch....');
});

//server.listen(8080);
server.emit('request');
















