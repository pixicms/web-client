'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('timeline',function() {
    return {
        templateUrl:'/bundles/pixicore/scripts/directives/timeline/timeline.html',
        restrict: 'E',
        replace: true,
    }
  });
