'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebarSearch',function() {
    return {
      templateUrl:'/bundles/pixicore/scripts/directives/sidebar/sidebar-search/sidebar-search.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope){
        $scope.selectedMenu = 'home';
      }
    }
  });
