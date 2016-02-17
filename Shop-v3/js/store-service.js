/**
 * http://usejsdoc.org/
 */

/*
 *  NG server-communication service-components
 *  
 *  $http      --> XHR
 *  $resource  --> To consume REST API
 *  
 * 
 */

(function() {

	var app = angular.module('storeService', []);

	app.factory('productService', function($q,$http) {
		var defer=$q.defer();
		var url="products.json";
		return {
			loadAll : function() {
				var promise=$http.get(url);
				promise.then(function(result){
					defer.resolve(result.data);
				});
				return defer.promise;
			},
			load : function(id) {

			},
			save : function(newProduct) {

			},
			update : function(product) {

			},
			remove : function(id) {

			}
		};

	});

})();
