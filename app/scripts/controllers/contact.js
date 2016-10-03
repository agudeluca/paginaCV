'use strict';

/**
 * @ngdoc function
 * @name agustindelucaApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the agustindelucaApp
 */
angular.module('agustindelucaApp')
  .controller('ContactCtrl', function ($scope, $http, $window) {
     $scope.form = {};
  $scope.processForm = function() {
    $http({
      method  : 'POST',
      url     : 'http://agustindeluca.com/angularSender.php',
      data    : $scope.form,
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(){
  		$window.alert('Thank you for the feedback. We will get back to you if required');
  		$scope.form = {};
        console.log();
    });

      // console.log($scope.formData);
  };
   
  });
