'use strict';
angular.module('app', ['ngMask', 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ngMask.html'
      })
      .when('/ngMask', {
        templateUrl: 'views/ngMask.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);
