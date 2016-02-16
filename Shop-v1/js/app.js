/**
 * http://usejsdoc.org/
 */

var storeModule=angular.module('store', []);

// Controller
storeModule.controller('StoreController', function($scope) {
	// load products ( from server or local storage )
	// this.product=item;
	//$scope.product=item;  // View Model
	$scope.products=items;
});


// Model
var items = [ {
	name : 'Laptop',
	price : 14800,
	description : 'New Model',
	canBuy : true,
	notAvailable : false
}, {
	name : 'Mobile',
	price : 28000,
	description : 'New Model',
	canBuy : true,
	notAvailable : false
} ];

// using DOM ( Imperative Programming )
// document.querySelectorAll('h4')[0].innerHTML=item.name;
// document.querySelectorAll('h4')[1].innerHTML=item.price;
// document.querySelectorAll('p')[0].innerHTML=item.description;


















