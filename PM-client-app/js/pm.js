/**
 * http://usejsdoc.org/
 */

(function(){
	
	var pmModule=angular.module('pm', ['ngRoute']);
	
	pmModule.config(function($routeProvider) {
		

		$routeProvider
		.when('/', {
			templateUrl : 'templates/pm-home.html'
		}).when('/view-all', {
			templateUrl : 'templates/pm-grid.html',
			controller : "ViewController"
		}).when('/add-new', {
			templateUrl : 'templates/pm-product-form.html',
			controller : "SaveController"
		}).when('/edit/:prodId', {
			templateUrl : 'templates/pm-product-form.html',
			controller : "ViewAndEditController"
		});

		
	});
	
	
	pmModule.controller('ViewController', function($scope,pmService,$route) {
		
		pmService.loadAll()
		.then(function(items){
			$scope.products=items;
		});
		
		$scope.remove=function(id){
			pmService.remove(id)
			.then(function(){
				$route.reload();
			});
		};
		
	});
	
	pmModule.controller('SaveController', function($scope,pmService,$location) {
		$scope.product={};
		$scope.save=function(){
			pmService.save($scope.product)
			.then(function(item){
				$scope.product={};
				$scope.message=item.name+" saved ";
				$location.path('view-all');
			});
		};
	});
	
	pmModule.controller('ViewAndEditController', function($scope,pmService,$location,$routeParams) {
		
		if($routeParams.prodId){
			pmService.loadById($routeParams.prodId)
			.then(function(item){
				$scope.product=item;
			});
		}
		
		$scope.save=function(){
			pmService.update($scope.product)
			.then(function(item){
				$scope.product={};
				$scope.message=item.name+"updated ";
				$location.path('view-all');
			});
		};
	});
	

	pmModule.factory('pmService', function($q, $http) {
	
		var url = "http://localhost:3000/api/products";
		
		return {
			loadAll : function() {
				var defer = $q.defer();
				$http.get(url).then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
			},
			save : function(newProduct) {
				var defer = $q.defer();
				newProduct.notAvailable = false;
				newProduct.make = Date.now();
				$http.post(url, newProduct).then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
			},
			remove : function(id) {
				var defer = $q.defer();
				$http['delete'](url + "/" + id).then(function(result) {
					defer.resolve();
				});
				return defer.promise;
			},
			loadById : function(id) {
				var defer = $q.defer();
				$http.get(url + "/" + id).then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
			},
			update : function(product) {
				var defer = $q.defer();
				product.notAvailable = false;
				product.make = Date.now();
				$http.put(url, product).then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
	
			}
	
		};
	});
	
	
})();