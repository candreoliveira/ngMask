describe('ComparatorService', function (){
  var service;

  beforeEach(function(){
    angular.module('test', ['ngMask']);
    module('test');
  });

  beforeEach(function (){
    inject(function(ComparatorService) {
      service = ComparatorService;
    });
  });


  describe('Min function', function (){
    it('should return min lenght of two arrays', function(){
      var a = [1,2,3],
          b = [0,5];

      expect( service.min(a,b) ).toEqual( 2 );

    });
  });

  describe('Max function', function (){
    it('should return max lenght of two arrays', function(){
      var a = [1,2,3],
          b = [0,5];

      expect( service.max(a,b) ).toEqual( 3 );

    });
  });
});
