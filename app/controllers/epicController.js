'use strict';

var app = angular.module("epicApp", []);

app.controller('EpicController', function($scope) {

	$scope.newList1 = "";
	$scope.newList2 = "";

	$scope.list1 = [];
	$scope.list2 = [];

	$scope.shareItems = [];
	$scope.notInList1 = [];

	$scope.addToList1 = function() {
		
		if ($scope.list1.length == 5000) {
			alert("Max number of items is 5000");
		} else if ($scope.list1.indexOf($scope.newList1) > -1) {
			alert("El elemento ya existe en la lista 1");
		} else {
			$scope.list1.push($scope.newList1);
			$scope.newList1 = "";
		}
	};

	$scope.addToList2 = function() {
		if ($scope.list2.length == 5000) {
			alert("Max number of items is 5000");
		} else if ($scope.list2.indexOf($scope.newList2) > -1) {
			alert("El elemento ya existe en la lista 2");
		} else {
			$scope.list2.push($scope.newList2);
			$scope.newList2 = "";
		}
	};

	$scope.processList = function() {

		$scope.shareItems = [];
		$scope.notInList1 = [];

		angular.forEach($scope.list2, function(value, key) {
			if ($scope.list1.indexOf(value) > -1) {
				$scope.shareItems.push(value);
			} else {
				$scope.notInList1.push(value);
			}
		});
	};

});