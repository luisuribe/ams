'use strict';

/**
 * @ngdoc service
 * @name tmbdApp.tmdb
 * @description
 * # tmdb
 * Service in the tmbdApp.
 */
angular.module('tmbdApp')
  .service('tmdb', function ($http) {
// AngularJS will instantiate a singleton by calling "new" on this function

    var apiUrl = 'https://api.themoviedb.org/3/';
    var apiKey = 'e5cf2a625fce253f88d95dbc591aa803';

    // this.config = function(){
    //     var promise = $http.get( config.apiUrl + 'configuration?api_key=' + config.apiKey ).then(function (response) {
    //         return response.data.images;
    //     });
    //     return promise;
    // }

    this.doSearch = function($param){
        var promise = $http.get( apiUrl + 'search/person?query=' + $param + '&api_key=' + apiKey ).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.getPersonInfo = function($param) {
        var promise = $http.get( apiUrl + 'person/' + $param + '?api_key=' + apiKey ).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.getMovieList = function($param) {
        var promise = $http.get( apiUrl + 'person/' + $param + '/movie_credits?api_key=' + apiKey ).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.getMovieInfo = function($param) {
        var promise = $http.get( apiUrl + 'movie/' + $param + '?api_key=' + apiKey ).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.getMovieCredits = function($param) {
        var promise = $http.get( apiUrl + 'movie/' + $param + '/credits?api_key=' + apiKey ).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.getWorksWith = function($movies, $actor_id, $q) {


    //     for (var i in $movies.cast) {
    //         promise = promise.then(function() {
    //             return getMovieCredits(i);
    //         }).then(function(newValue) {
    //         // ...
    //         newValues.push(newValue);
    //     });
    // });

    // return promise.then(function() {
    //     return newValues;
    // });


        // var deferred = $q.defer();

        // var callback = function($movies, $actor_id) {
        //     for (var i in $movies.cast) {
        //         if ($movies.cast.hasOwnProperty(i)) {
        //             tmdb.getMovieCredits($movies.cast[i].id).then(function(response) {
        //                 for (var actor in response.cast) {
        //                     if (response.cast.hasOwnProperty(actor) && (response.cast[actor].id != $actor_id)) {
        //                         if (worksWith[response.cast[actor].id] === undefined) {
        //                             worksWith[response.cast[actor].id] = 1;
        //                         } else {
        //                             worksWith[response.cast[actor].id] += 1;
        //                         }
        //                     }
        //                 }
        //             })
        //         }
        //     }
        // };

        // callback($movies, $actor_id).then(function(){ console.log("ya" )});
        // deferred.done(callback);  // when the deferred is resolved, invoke the callback, you can chain many callbacks here if needed
        // deferred.resolve();
        // return deferred;

        // var worksWith = {};


        // var promise = $http.get( apiUrl + 'movie/' + $param + '?api_key=' + apiKey ).then(function (response) {
        //     return response.data;
        // });
        // return promise;
    }



  });