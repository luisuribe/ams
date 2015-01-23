'use strict';

/**
 * @ngdoc directive
 * @name tmbdApp.directive:search
 * @description
 * # search
 */
angular.module('tmbdApp')
  .directive('search', function () {
    return {
      templateUrl: 'views/search.html',
      restrict: 'E',
      controller: 'SearchCtrl',
      scope: {}
    };
  });
