'use strict';
var nlightweb = angular.module('nlightweb', ['ngRoute','ngSanitize']);


nlightweb.controller('mainCtrl', ['$scope', function($scope) {
	$scope.lightInfo = false;
  $scope.closeButton = function(){
		$scope.lightInfo = false;
	}
	$scope.light1Click = function(){
		$scope.lightInfo = true;
	}
	
	$scope.roundClickLeft = function(){
		$scope.lightInfo = true;
	}
}]);