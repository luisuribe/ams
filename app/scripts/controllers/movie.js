'use strict';

/**
 * @ngdoc function
 * @name tmbdApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the tmbdApp
 */
angular.module('tmbdApp')
  .controller('MovieCtrl', function ($scope, tmdb, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.results = {
        movie: [],
    }

    tmdb.getMovieInfo($routeParams.param).then(function(result){
        $scope.results.movie = result;
    });

  });
