/**
 * http://usejsdoc.org/
 */

//"use strict"

/*
 * 
 * 2 ways to create func objects in JS
 * 
 * a. function declaration b. function expression
 * 
 */

// a. function declaration
// console.log(add(12,13));
//
// function add(n1,n2){
// return n1+n2;
// }
// console.log(add(12,13));
// ---------------------------------
// function expression
// console.log(add(12,13));
// var add=function(n1,n2){return n1+n2;};
// console.log(add(12,13));
// ---------------------------------
// function as values
// function sayHello(){
// console.log('Hello...');
// }
//
//
// var sayHi=sayHello;
//
// sayHi();

// ---------------------------------
// functions as arguments

// function sayHello(greet) {
// if(greet){
// greet();
// return;
// }
// console.log('ola..');
// }
//
// //sayHello();
// sayHello(function(){console.log('hello....');})
//
//
// var arr=[1,3,5,7,9,2,4,6,8,10];
// arr.sort(function(a,b){return b-a;});
// console.log(arr);

// ---------------------------------
// function as return values
// function teach(){
// console.log('teach...');
// function learn(){
// console.log('learn..');
// }
// return learn;
// }
//
// var learnFunc=teach();
// learnFunc();
//

// ---------------------------------

//
// function reflect(arg1){
// console.dir(arguments);
// return arguments[0]+" "+arguments[1]+" "+arguments[2];
// }
//
// console.log(reflect(12,13,14));

// ---------------------------------

// var - scope
/*
 * 
 * func --> variable hoisting/lifting-up
 * 
 * 
 */

//var i = 100;
//function display() {
//	var i;
//	console.log(i);
//	i = 200;
//}
//display();
//
//// soln : use 'single-var' design pattern


// ---------------------------------

// Quiz


//function f(){
//	"use strict";
//	{
//		let i=100;  // block scope variable
//	}
//	
//	console.log(i);
//	
//}
//f();

//function f(){
//	var i;
//	if(0){
//		var i=100;
//	}
//	console.log(i);
//}

//---------------------------------------------

//function f(){
//	 var v=200;
//}
//f();
//console.log(v);


//---------------------------------------------

// 'this' keyword

/*
 *  why we need 'this' keyword JS lang ?
 * 
 * 
 */
//
//var person={
//		name:'Nag',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};
////person.sayName();
//
//var oldPerson=person;
//person={name:'Riya'};
//
//oldPerson.sayName();

//-------------------------------------------------
//global.name='GLOBAL';
//function sayNameForAll(){
//	var name="FUNC";
//	console.log('im '+this.name);
//}
//
////var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
////var p2={name:'Riya',sayName:function(){console.log('im '+this.name);}};
//
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Riya',sayName:sayNameForAll};
//
//
//sayNameForAll(); // im ??  : function invocation ( this --> global  )
//p1.sayName();    // im Nag : method invocation   ( this --> invoker )
//p2.sayName();    // im Riya

//---------------------------------------------------------


//var greetUtil={
//		sayName:function(message,from){
//			console.log(message+' im '+this.name+"-"+from);
//		}
//};
//
//
//var p1={name:'Nag'};
//var p2={name:'Riya'};
//
//// eager
//
//greetUtil.sayName.call(p1,'Hello','bangalore');
//greetUtil.sayName.call(p2,'Hi','chennai');
//
//// lazy ( on -event )
//
//
//var newF=greetUtil.sayName.bind(p1,'Hello','bangalore');
//
//// on hungry
////newF();

//---------------------------------------------------------



function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayname=function(){
		console.log('im '+this.name);
	};
}

//var p1=new Person('Nag',32);    // constructor ( this ---> new-object )
//var p2=new Person('Riya',0.9);

Person('Abc',100);

//---------------------------------------------

/*
 * 
 *  In JS , we can invoke function in 4 ways
 *  
 *  1. function invocation    ( this --> global  )
 *  2. method invocation      ( this --> invoker )
 *  3. call/bind invocation   ( this --> arg-obj )
 *  4. constructor invocation ( this --> new -obj )
 * 
 */


//---------------------------------------------

// FUNCTION CLOSURE


//function tng(){
//	console.log('tng....');
//	var info='JS Notes';
//	function learn(){
//			console.log('learning...'+info);
//	}
//	return learn;
//}
//
//var learnFunc=tng();
//learnFunc();
//learnFunc();

//---------------------------------

// practical example of closure

// module - counter
//
//function init(){
//	// private  ( encapsulation )
//	var count=0;
//	// public  ( abstraction )
//	return{
//		doCount:function(){
//			count+=1;
//		},
//		getCount:function(){
//			return count;
//		}
//	};
//}
//var counter=init();

//---------------------------

var counter=(function(){
	var count=0;
	// public  ( abstraction )
	return{
		doCount:function(){
			count+=1;
		},
		getCount:function(){
			return count;
		}
	};
})();



//---------------------

counter.doCount();
counter.doCount();


console.log(counter.getCount());






















