/**
 * http://usejsdoc.org/
 */

//var person={
//		name:'Nag',
//		age:32
//};


//--------

//if(person.name){
//	console.log('name exist on person');
//}
//if("name" in person){
//	console.log('name exist on person');
//}

//for(var prop in person){
//	if(person.hasOwnProperty(prop)){
//		console.log(prop+":"+person[prop]);
//	}
//}
//

//--------------------------------------

/*
 *  Js obj , can have 2 types of properties
 *  
 *  a. data property
 *  b. accessor property
 * 
 */
//var person={
//		_name:'Nag', // data property
//		set name(newName){
//			if(newName){
//				console.log('setting newName');
//				this._name=newName;
//			}
//		},
//		get name(){
//			console.log('geting name');
//			return this._name;
//		}
//};
//
//person.name='New Nag';
//console.log(person.name);

//-------------------------------------------
"use strict";

//var person={name:'Nag',age:32};
//Object.defineProperty(person, 'name', {configurable:false,writable:false});

//delete person.name;
//person.name='';

//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);
//
//console.log(person.name);
//

//-----------------------------------------------

// ES-6

var person={
		name:'Nag',
		sayName(){
			console.log('im '+this.name);
		}
};
person.sayName();













