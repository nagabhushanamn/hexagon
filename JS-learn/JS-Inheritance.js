/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
	// this.sayName=function(){
	// console.log('im '+this.name);
	// };
}

Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};

var p1 = new Person('Nag', 32);
var p2 = new Person('Riya', 0.9);

p1.sayName();
p2.sayName();


var p11=Object.create(p1);
console.log(p11.name);
p11.name='New Nag';

console.log(p1.name);
console.log(p11.name);


// ES-6

var p21={
		__proto__:p1
};


















