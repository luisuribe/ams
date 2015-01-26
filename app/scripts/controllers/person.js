'use strict';

/**
 * @ngdoc function
 * @name tmbdApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the tmbdApp
 */
angular.module('tmbdApp')
  .controller('PersonCtrl', function ($scope, tmdb, $routeParams, $q) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.results = {
        person: [],
        movies: [],
        worksWith: []
    }

    $scope.limit = 5;

    // loadMore function
    $scope.loadMore = function() {
        $scope.limit += 5;
    }

    tmdb.getConfiguration().then(function(result){
        $scope.configuration = result;
    });

    tmdb.getPersonInfo($routeParams.param).then(function(result){
        $scope.results.person = result;
    });

    tmdb.getMovieList($routeParams.param).then(function(result){
        $scope.results.movies = result;

        var promise;
        var dfd         = $q.defer();
        var castRelated = [];

        dfd.resolve();
        promise = dfd.promise;

        angular.forEach(result.cast, function(movie) {
            promise = tmdb.getMovieCredits(movie.id).then(function(response) {
                for (var actor in response.cast) {
                    if (response.cast.hasOwnProperty(actor) && $routeParams.param != response.cast[actor].id) {
                        if (castRelated[response.cast[actor].id] === undefined) {
                            castRelated[response.cast[actor].id]          = [];
                            castRelated[response.cast[actor].id]['id']    = response.cast[actor].id;
                            castRelated[response.cast[actor].id]['value'] = 1;
                            castRelated[response.cast[actor].id]['name']  = response.cast[actor].name;
                        } else {
                            castRelated[response.cast[actor].id]['value'] += 1;
                        }

                    }
                }
                return castRelated;
            });
        });

        return promise.then(function() {
            for (var i in castRelated) {
                if (castRelated.hasOwnProperty(i)) {
                    $scope.results.worksWith.push({id: i, val: castRelated[i]['value'], name: castRelated[i]['name']});
                }
            }

            $scope.results.worksWith.sort(function(a,b) {
                return b.val - a.val;
            });

        });

    });

});
