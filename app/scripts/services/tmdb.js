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



  });