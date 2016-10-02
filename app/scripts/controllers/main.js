'use strict';

/**
 * @ngdoc function
 * @name agustindelucaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agustindelucaApp
 */

angular.module('agustindelucaApp')
  .controller('MainCtrl', function ($scope, $http) {
		$scope.proyectos = [];

		$http.get('http://agustindeluca.com/panel/wp-json/wp/v2/posts').then(function(respuesta){
        angular.forEach(respuesta.data, function(proyectos) {
        	$scope.proyectos.push(proyectos);
        	console.log($scope.proyectos);
		});
    });
  });
