'use strict';
describe('Directive: mask', function() {
  var $scope;
  var compileAndDigest;

  beforeEach(angular.mock.module('ngMask'));

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();

    compileAndDigest = function(inputHtml, scope) {
      var inputElm = angular.element(inputHtml);
      $compile(inputElm)(scope);
      scope.$digest();
      return inputElm;
    };
  }));

  it('should leave ngModel pristine with undefined model value', function() {
    $scope.myModel = undefined;
    compileAndDigest('<form name="myForm"><input name="myInput" ng-model="myModel" mask="* *" /></form>', $scope);
    expect($scope.myForm.myInput.$pristine).toBe(true);
    expect($scope.myForm.myInput.$dirty).toBe(false);
  });

  it('should leave ngModel pristine with predefined model value', function() {
    $scope.myModel = 'some value';
    compileAndDigest('<form name="myForm"><input name="myInput" ng-model="myModel" mask="* *" /></form>', $scope);
    expect($scope.myForm.myInput.$pristine).toBe(true);
    expect($scope.myForm.myInput.$dirty).toBe(false);
  });

});