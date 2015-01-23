'use strict';

/**
 * @ngdoc overview
 * @name tmbdApp
 * @description
 * # tmbdApp
 *
 * Main module of the application.
 */
angular
  .module('tmbdApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/person/:param', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl'
      })
      .when('/movie/:param', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
