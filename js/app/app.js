'use strict';
var nlightweb = angular.module('nlightweb', ['ngRoute','ngSanitize']);


nlightweb.controller('mainCtrl',  function($scope,$http) {
	$scope.activationkey = "adfdgsdfdg"
	$scope.lightInfo = false;
  $scope.closeButton = function(){
		$scope.lightInfo = false;
	}
	$scope.light1Click = function(){

		var config = {headers: {
   'X-Mashape-Key': 'VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql'
        }
    };

		var page = "https://nibodha-nlight-v1.p.mashape.com/control/getinfo/1/dfdf";
    	  $http.get(page,config).success(function(response) {
    		  $scope.lightdetails = response;
    		  $scope.status = "on";
      	})

		$scope.lightInfo = true;
	}
	
	$scope.roundClickLeft = function(){
		 var config = {headers: {
   'X-Mashape-Key': 'VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql'
        }
    };
		
		var page = "https://nibodha-nlight-v1.p.mashape.com/control/blink/3/1/"+$scope.activationkey;
    	  $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})

	}

	$scope.roundClickRight = function(){
 var config = {headers: {
   'X-Mashape-Key': 'VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql'
        }
    };
		var page = "https://nibodha-nlight-v1.p.mashape.com/control/blink/1/1/"+$scope.activationkey;
    	  $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})
		
	}

	$scope.roundClickTop = function(){

		var config = {headers: {
   'X-Mashape-Key': 'VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql'
        }
    };


		var page = "https://nibodha-nlight-v1.p.mashape.com/control/blink/2/1/"+$scope.activationkey;

    	  $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})
		
	}

	$scope.roundClickBottom = function(){

		var config = {headers: {
   'X-Mashape-Key': 'VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql'
        }
    };


		var page = "https://nibodha-nlight-v1.p.mashape.com/control/blink/4/1/"+$scope.activationkey;
    	  $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "on";
      	})
		
	}

	$scope.onoffcontrol = function(){

		var config = {headers: {
   'X-Mashape-Key': 'VssIjowCahmshHMZUAD30M7T993dp1OJPrZjsn4pUVbA65Exql'
        }
    };


	var page = "https://nibodha-nlight-v1.p.mashape.com/control/blink/0/1/"+$scope.activationkey;
    	  if($scope.status =="on"){
    	  	 $http.get(page,config).success(function(response) {
    		  $scope.devices = response;
    		  $scope.status = "off";
      	})

    	  }
    	 
	}
});