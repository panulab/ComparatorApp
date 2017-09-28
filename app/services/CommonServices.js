'use strict';

var app = angular.module("epicApp");

app.service('CommonServices', function() {

	this.FindItemBinarySearch = function (items, match) {
     
      var low = 0;
      var high = items.length -1;
           
      while (low <= high) {
          var mid = parseInt((low + high) / 2);

          var current = items[mid];
         
          if (current > match) {
             high = mid - 1;
           } else if (current < match) {
              low = mid + 1;
            } else {
              return mid;
           }   
      }       
      
      return -1;
    }

});