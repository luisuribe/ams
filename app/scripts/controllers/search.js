'use strict';

/**
 * @ngdoc function
 * @name tmbdApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the tmbdApp
 */
angular.module('tmbdApp')
  .controller('SearchCtrl', function ($scope, tmdb, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.view = {
        searchPhrase: '',
        results:       []
    };

    $scope.doSearch = function(query) {
        if ( query.length >= 3 ) {
            tmdb.doSearch(query).then(function(result){
                $scope.results = result.results;
            });
        } else {
            $scope.view.results = [];
        }
    };

    $scope.goToPerson = function($actor) {
        $location.path('/person/' + $actor.id);
    }
});
