'use strict';

/**
 * @ngdoc function
 * @name tmbdApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the tmbdApp
 */
angular.module('tmbdApp')
  .controller('PersonCtrl', function ($scope, tmdb, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.results = {
        person: [],
        movies: []
    }

    tmdb.getPersonInfo($routeParams.param).then(function(result){
        $scope.results.person = result;
    });

    tmdb.getMovieList($routeParams.param).then(function(result){
        $scope.results.movies = result;
    });

  });
