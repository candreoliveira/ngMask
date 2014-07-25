'use strict';

angular.module('ngMask')
  .factory('ComparatorService', [function(){
    function minLength(a, b){
      return a.length < b.length ? a.length : b.length;
    }

    function maxLength(a, b){
      return a.length > b.length ? a.length : b.length;
    }

    return {
      min: minLength,
      max: maxLength
    }
  }]);