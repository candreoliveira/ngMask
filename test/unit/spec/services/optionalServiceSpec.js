describe('OptionalService', function (){
  var service;

  beforeEach(function(){
    angular.module('test', ['ngMask']);
    module('test');
  });

  beforeEach(function (){
    inject(function(OptionalService) {
      service = OptionalService;
    });
  });

  describe('function getOptionals', function () {
    it('should receive raw mask and return optional indexes', function() {
      var optional = service.getOptionals('6?6?6?6?.555?.444?');
      // mask: 6666.555.444
      expect(optional.fromMask()).toEqual([0,2,4,6,11,16]);
      expect(optional.fromMaskWithoutOptionals()).toEqual([0,1,2,3,7,11]);

      optional = service.getOptionals('(99) 9?9999-9999');
      // mask: (99) 99999-9999
      expect(optional.fromMask()).toEqual([5]);
      expect(optional.fromMaskWithoutOptionals()).toEqual([5]);

      optional = service.getOptionals('aaA*#@?aaA*#@?aaA*#@?');
      // mask: aaA*#@aaA*#@aaA*#@
      expect(optional.fromMask()).toEqual([5, 12, 19]);
      expect(optional.fromMaskWithoutOptionals()).toEqual([5, 11, 17]);
    });
  });

  describe('function removeOptionals', function () {
    it('should remove all ? char from mask', function() {
      var mask = service.removeOptionals('6?6?6?6?.555?.444?');
      // mask: 6666.555.444
      expect(mask).toEqual('6666.555.444');

      mask = service.removeOptionals('(99) 9?9999-9999');
      // mask: (99) 99999-9999
      expect(mask).toEqual('(99) 99999-9999');

      mask = service.removeOptionals('aaA*#@?aaA*#@?aaA*#@?');
      // mask: aaA*#@aaA*#@aaA*#@
      expect(mask).toEqual('aaA*#@aaA*#@aaA*#@');
    });
  });
});
