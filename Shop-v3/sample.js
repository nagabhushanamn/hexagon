/**
 * http://usejsdoc.org/
 */

console.log(JSON.stringify([ {
	name : 'Laptop',
	price : 148000,   // number
	description : 'New Model',
	canBuy : true,
	notAvailable : false,
	make:Date.now(),
	reviews:[
	         {stars:5,author:'nag@gmail.com',body:'good one..'},
	         {stars:2,author:'indu@gmail.com',body:'too costly..'}
	         ]
}, {
	name : 'Mobile',
	price : 28000,
	description : 'New Model',
	canBuy : true,
	notAvailable : false,
	make:Date.now(),
	reviews:[
	         {stars:5,author:'nag@gmail.com',body:'good one..'},
	         {stars:2,author:'indu@gmail.com',body:'too costly..'}
	         ]
} ]));