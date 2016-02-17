/**
 * http://usejsdoc.org/
 */

(function() {

	var storeModule = angular.module('store', [ 'storeService' ]);

	// Controller
	storeModule.controller('StoreController', function($scope, $filter,productService) {
		var promise=productService.loadAll();
		promise.then(function(items){
			$scope.products=items;
		});
	});

	storeModule.controller('TabsController', function($scope) {
		$scope.tab = 1;
		$scope.changeTab = function(tabValue) {
			$scope.tab = tabValue;
		};
		$scope.isTabSelected = function(tabValue) {
			return $scope.tab === tabValue;
		};

	});

	storeModule.controller('ReviewFormController', function($scope) {
		$scope.review = {
			author : 'nag@gmail.com'
		};
		$scope.saveNewReview = function(product) {
			product.reviews.push($scope.review);
			$scope.review = {
				author : 'nag@gmail.com'
			};
		};
	});

	// Filter
	storeModule.filter('priceDiscount', function() {
		return function(originalPrice, discount) {
			//
			if (discount) {
				return originalPrice - discount;
				return;
			}
			return originalPrice - 1;
		};
	});

	// Directives
	storeModule.directive('productTitle', function() {
		return {
			restrict : "E",
			replace : true,
			scope : false,
			templateUrl : "templates/product-title.html"
		};
	});
	storeModule.directive('productTabs', function() {
		return {
			restrict : "E",
			replace : true,
			scope : false,
			templateUrl : "templates/product-tabs.html"
		};
	});
	storeModule.directive('productReviewForm', function() {
		return {
			restrict : "E",
			replace : true,
			scope : false,
			templateUrl : "templates/product-review-form.html"
		};
	});

})();
