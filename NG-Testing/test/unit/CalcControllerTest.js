/**
 * http://usejsdoc.org/
 */
/*
 * UNIT-TESTING == AAA
 * 
 * A --> ARRANGE A --> ACT A --> ASSERT
 * 
 */

describe('calc-ctrl tests', function() {

	beforeEach(module('calculator'));

	var $controller;
	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	it('1+2=3', function() {
		var $scope = {};
		var controller = $controller('CalcController', {
			$scope : $scope
		});
		$scope.first = 1;
		$scope.second = 2;
		$scope.doArith();
		expect($scope.latest).toBe(3);

	});
	it('1-2=-1', function() {
		var $scope = {};
		var controller = $controller('CalcController', {
			$scope : $scope
		});
		$scope.first = 1;
		$scope.second = 2;
		$scope.operator = '-';
		$scope.doArith();
		expect($scope.latest).toBe(-1);
	});
	it('1*2=2', function() {
		var $scope = {};
		var controller = $controller('CalcController', {
			$scope : $scope
		});
		$scope.first = 1;
		$scope.second = 2;
		$scope.operator = '*';
		$scope.doArith();
		expect($scope.latest).toBe(2);
	});
	it('2/2=1', function() {
		var $scope = {};
		var controller = $controller('CalcController', {
			$scope : $scope
		});
		$scope.first = 2;
		$scope.second = 2;
		$scope.operator = '/';
		$scope.doArith();
		expect($scope.latest).toBe(1);
	});

});