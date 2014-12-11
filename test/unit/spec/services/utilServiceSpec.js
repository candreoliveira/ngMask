describe('UtilService', function (){
  var service;

  beforeEach(function(){
    angular.module('test', ['ngMask']);
    module('test');
  });

  beforeEach(function (){
    inject(function(UtilService) {
      service = UtilService;
    });
  });

  describe('function uniqueArray', function () {
    it('should return an array without duplicated elements', function() {
      var uniqueArray = service.uniqueArray(['1', 1, 2, 4, 4, 1, '2']);
      expect(uniqueArray).toEqual(['1',2,4]);
    });
  });

  describe('function inArray', function () {
    it('should return true if element in array or false if not', function() {
      var inArray = service.inArray(6, [1,2,3]);
      expect(inArray).toBeFalsy();

      inArray = service.inArray(6, [0, '6']);
      expect(inArray).toBeFalsy();

      inArray = service.inArray(6, ['a',6]);
      expect(inArray).toBeTruthy();
    });
  });

  describe('function lazyProduct', function () {
    it('should execute callback function n times with all combinations', function() {
      var callback = jasmine.createSpy('callback');
      service.lazyProduct([[1,2], [3,4]], callback);
      expect(callback).toHaveBeenCalledWith(1,3);
      expect(callback).toHaveBeenCalledWith(1,4);
      expect(callback).toHaveBeenCalledWith(2,3);
      expect(callback).toHaveBeenCalledWith(2,4);

      expect(callback.calls.count()).toEqual(4);

      service.lazyProduct([['a',1], ['b',2]], callback);
      expect(callback).toHaveBeenCalledWith('a','b');
      expect(callback).toHaveBeenCalledWith('a',2);
      expect(callback).toHaveBeenCalledWith(1,'b');
      expect(callback).toHaveBeenCalledWith(1,2);

      expect(callback.calls.count()).toEqual(8);
    });
  });
});
