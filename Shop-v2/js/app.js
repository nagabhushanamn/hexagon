/**
 * http://usejsdoc.org/
 */

var storeModule=angular.module('store', []);

// Controller
storeModule.controller('StoreController', function($scope,$filter) {
	// load products ( from server or local storage )
	// this.product=item;
	//$scope.product=item;  // View Model
	$scope.products=items;
	
	//-------------------------------
	
	console.log($filter('uppercase')('nag'));
	console.log($filter('priceDiscount')(1000,100));
	
	//---------------------------------------------
	
});

storeModule.controller('TabsController', function($scope) {
	$scope.tab=1;
	$scope.changeTab=function(tabValue){
		$scope.tab=tabValue;
	};
	$scope.isTabSelected=function(tabValue){
		return $scope.tab===tabValue;
	};
	
});

storeModule.controller('ReviewFormController', function($scope) {
	$scope.review={author:'nag@gmail.com'};
	$scope.saveNewReview=function(product){
		product.reviews.push($scope.review);
		$scope.review={author:'nag@gmail.com'};
	};
});

// Filter
storeModule.filter('priceDiscount', function() {
	return function(originalPrice,discount){
		//
		if(discount){
			return originalPrice-discount;
			return;
		}
		return originalPrice-1;
	};
});

// Directives
storeModule.directive('productTitle', function(){
	return {
		restrict: "E",
		replace:true,
		scope:false,
		templateUrl: "templates/product-title.html"
	};
});
storeModule.directive('productTabs', function(){
	return {
		restrict: "E",
		replace:true,
		scope:false,
		templateUrl: "templates/product-tabs.html"
	};
});
storeModule.directive('productReviewForm', function(){
	return {
		restrict: "E",
		replace:true,
		scope:false,
		templateUrl: "templates/product-review-form.html"
	};
});



// Model
var items = [ {
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
} ];

// using DOM ( Imperative Programming )
// document.querySelectorAll('h4')[0].innerHTML=item.name;
// document.querySelectorAll('h4')[1].innerHTML=item.price;
// document.querySelectorAll('p')[0].innerHTML=item.description;


















