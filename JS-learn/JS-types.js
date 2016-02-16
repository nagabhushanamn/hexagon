/**
 * http://usejsdoc.org/
 */
// console.log('hello...');
// simple types
// string
//
// var name="nag";
// var s='abc';
// console.log(typeof name);
// console.log(typeof s);
// ----------------------------------------
// number
// var count=10;
// var cost=12.12;
// console.log(typeof count);
// console.log(typeof cost);
//

// ----------------------------------------
// boolean
var found = true;

// ----------------------------------------

// undefined

// var v;
// console.log(typeof v);
//

// ----------------------------------------

// null

// var o=null;
// console.log(typeof o);

// ----------------------------------------

// var v=null;
//
// console.log(v===null);
//

// ----------------------------------------

// Reference Types --> objects

/*
 * how to create objects ?
 * 
 * syntax
 * 
 * new CF();
 * 
 * e.g
 * 
 * new Object();
 * 
 * 
 */
//
// var person=new Object();
// person.name='Nag';
// person.age=32;
// person.doWork=function(){
// console.log('teaching JS');
// };
//
// console.log(person.name);
// person.doWork();
//
//
// delete person.age;
//
// console.log(person.age);
// -------------------------------------------
/*
 * Built-in Types ---------------
 * 
 * Object Array RegExp Function
 * 
 * 
 */

// a. Object
var person = new Object();
person.name = 'Nag';
person.age = 32;
person.doWork = function() {
	console.log('teaching JS');
};

// literal style
var newPerson = {
	name : 'Nag',
	age : 32,
	doWork : function() {
		console.log('teaching JS')
	}
};

// ----------------------------------------------

// b. Array

var arr = new Array();
arr[0] = 10;
arr.push(20);

// LLiteral style

var newArray = [ 10, 20 ];

// ----------------------------------------------

// 3. RegExp

var re = new RegExp("\\d");
console.log(re.test('abc'));

// literal style
var newRe = /\d/;
console.log(newRe.test('abc'));

// ----------------------------------------------

// 4 Function

var add = new Function("n1", "n2", "var result=n1+n2;return result;");
console.log(add(12, 13));

// .literal style

function add(n1, n2) {
	var result = n1 + n2;
	return result;
}
console.log(add(12, 13));

//-----------------------------------------

// How to access obj properties ?

var person={
		name:'Nag',
		'full-name':'Nagabhushanam N'
};

console.log(person.name);
console.log(person['name']);

console.log(person['full-name']);

//---------------------------------------------


// Primitves as objects

var name='Nag';
var newName=name.toUpperCase();
/*
 *  var temp=new String(name);
 *  var newName=temp.toUpperCase();
 *  temp=null;
 * 
 */


//var s=new String('abc'); // never do it

//------------------------------

//Quiz

/*
 *  in JS , falsy values
 *  
 *  false,null,undefined,0,""
 * 
 */

var boo=new Boolean(false);
if(boo){
	console.log('break');
}
else{
	console.log('no break');
}




























