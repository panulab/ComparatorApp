'use strict';

var app = angular.module("epicApp");

app.controller('EpicController', function($scope, CommonServices) {

	$scope.newList1 = "";
	$scope.newList2 = "";

	$scope.list1 = [];
	$scope.list2 = [];

	$scope.shareItems = [];
	$scope.notInList1 = [];

	$scope.addToList1 = function() {
		
		if ($scope.list1.length == 5000) {
			alert("Max number of items is 5000");
		} else if (CommonServices.FindItemBinarySearch($scope.list1, $scope.newList1) > -1) {
			alert("El elemento ya existe en la lista 1");
		} else {
			$scope.list1.push($scope.newList1);
			
			$scope.list1.sort(function(a, b){
				if(a < b) return -1;
				if(a > b) return 1;
				return 0;
			});
			
			$scope.newList1 = "";
		}
	};

	$scope.addToList2 = function() {
		if ($scope.list2.length == 5000) {
			alert("Max number of items is 5000");
		} else if (CommonServices.FindItemBinarySearch($scope.list2, $scope.newList2) > -1) {
			alert("El elemento ya existe en la lista 2");
		} else {
			$scope.list2.push($scope.newList2);
			
			$scope.list2.sort(function(a, b){
				if(a < b) return -1;
				if(a > b) return 1;
				return 0;
			});
			
			$scope.newList2 = "";
		}
	};

	$scope.processList = function() {

		$scope.shareItems = [];
		$scope.notInList1 = [];

		angular.forEach($scope.list2, function(value, key) {
			if (CommonServices.FindItemBinarySearch($scope.list1, value) > -1) {
				$scope.shareItems.push(value);
			} else {
				$scope.notInList1.push(value);
			}
		});
	};

});