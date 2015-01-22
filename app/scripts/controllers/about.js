'use strict';

/**
 * @ngdoc function
 * @name tmbdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tmbdApp
 */
angular.module('tmbdApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
