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

  it('testing', function(){
    expect( 'a' ).toBe( 'a' );
  });
});
