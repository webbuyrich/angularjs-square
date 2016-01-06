var app = angular.module('myApp', []);

app.service('mathService', function(){

	this.add = function(a, b){
		return a + b;
	}

	this.subtract = function(a, b){
		return a - b;
	}

	this.multiply = function(a, b){
		return a * b;
	}

	this.multiply = function(a, b){
		return a / b;
	}

});

app.service('calcService', function(mathService){

	this.square = function(a){
		return mathService.multiply(a, a);
	}

	this.cube = function(a){
		return mathService.multiply(a, mathService.multiply(a, a));
	}

});

app.controller('calcController', function($scope, calcService){

	$scope.doSquare = function(){

		$scope.answer = calcService.square($scope.number);
	}

	$scope.doCube = function(){

		$scope.answer = calcService.cube($scope.number);
	}

});