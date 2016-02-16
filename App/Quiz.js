/**
 * http://usejsdoc.org/
 */


function f(){
	console.log('hello.....');
	var name='Nag';
	try{
		setTimeout(function() {
			console.log('after timeout...');
			//throw new Error('oops..');
			console.log(name+" back after 5s");
		}, 5000);
	}catch (e) {
		console.log('i caught '+e.message);
	}
}
f();







