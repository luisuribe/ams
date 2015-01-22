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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the search directive');
      }
    };
  });
