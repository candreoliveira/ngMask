describe('MaskService', function (){
  var service,
      maskService,
      $q,
      $rootScope;

  beforeEach(function(){
    angular.module('test', ['ngMask']);
    module('test');
  });

  beforeEach(function (){
    inject(function(MaskService, _$q_, _$rootScope_) {
      service = MaskService;
      $q = _$q_;
      $rootScope = _$rootScope_;
    });
  });

  beforeEach(function (){
    maskService = service.create();
  });

  describe('create function', function (){
    it('should create new instance of maskService', function(){
      expect( maskService.generateRegex ).toBeDefined();
      expect( maskService.getOptions ).toBeDefined();
      expect( maskService.getViewValue ).toBeDefined();
      expect( maskService.getRegex ).toBeDefined();
      expect( maskService.removeDivisors ).toBeDefined();
      expect( maskService.getFirstWrongPosition ).toBeDefined();
      expect( maskService.removeWrongPositions ).toBeDefined();
    });
  });

  describe('generateRegex function', function (){
    it('should create regex, divisors, options, indexes - mask: 9 repeat: 5', function(){
      var repeat = 5;
      var promise = maskService.generateRegex({
        mask: '9',
        // repeat mask expression n times
        repeat: '' + repeat,
        // clean model value - without divisors
        clean: undefined,
        // limit length based on mask length
        limit: 'true',
        // how to act with a wrong value
        restrict: 'select', //select, reject, accept
        // set validity mask
        validate: 'true',
        // default model value
        model: undefined,
        // default input value
        value: undefined
      });

      promise.then(function() {
        var nineRegex = '';
        for (var i = 0; i < repeat; i++) {
          nineRegex += '([0-9])';
          expect( maskService.getRegex(i).source ).toBe('^' + nineRegex + '$');
        };

        expect( maskService.getOptions().maskWithoutOptionals ).toBe('99999');
      });

      // Propagate promise resolution to 'then' functions using $apply().
      $rootScope.$apply();
    });

    it('should create regex, divisors, options, indexes - mask: 39/19/9999', function(){
      var promise = maskService.generateRegex({
        mask: '39/19/9999',
        // repeat mask expression n times
        repeat: undefined,
        // clean model value - without divisors
        clean: undefined,
        // limit length based on mask length
        limit: 'true',
        // how to act with a wrong value
        restrict: 'select', //select, reject, accept
        // set validity mask
        validate: 'true',
        // default model value
        model: undefined,
        // default input value
        value: undefined
      });

      promise.then(function(fullOptions) {
        var oneRegex = '([0-1])';
        var threeRegex = '([0-3])';
        var barRegex = '(\\/)';
        nineRegex = '([0-9])';
        expect( maskService.getRegex(0).source ).toBe('^' + threeRegex + '$');
        expect( maskService.getRegex(1).source ).toBe('^' + threeRegex + nineRegex + '$');
        expect( maskService.getRegex(2).source ).toBe('^' + threeRegex + nineRegex + barRegex + '$');
        expect( maskService.getRegex(3).source ).toBe('^' + threeRegex + nineRegex + barRegex + oneRegex + '$');
        expect( maskService.getRegex(4).source ).toBe('^' + threeRegex + nineRegex + barRegex + oneRegex + nineRegex + '$');
        expect( maskService.getRegex(5).source ).toBe('^' + threeRegex + nineRegex + barRegex + oneRegex + nineRegex + barRegex + '$');
        expect( maskService.getRegex(6).source ).toBe('^' + threeRegex + nineRegex + barRegex + oneRegex + nineRegex + barRegex + nineRegex + '$');

        expect( fullOptions.divisors ).toEqual([2, 5]);
        expect( fullOptions.divisorElements ).toEqual({
          '2': '/',
          '5': '/'
        });
        expect( fullOptions.optionalIndexes ).toEqual([]);
        expect( fullOptions.optionalDivisors ).toEqual({});
        expect( fullOptions.optionalDivisorsCombinations ).toEqual([]);
      });

      // Propagate promise resolution to 'then' functions using $apply().
      $rootScope.$apply();
    });
  });

  describe('getOptions function', function (){
    it('should return options object passed to generateRegex', function(){
      maskService.generateRegex({
        mask: '9',
        // repeat mask expression n times
        repeat: '5',
        // clean model value - without divisors
        clean: undefined,
        // limit length based on mask length
        limit: 'true',
        // how to act with a wrong value
        restrict: 'select', //select, reject, accept
        // set validity mask
        validate: 'true',
        // default model value
        model: undefined,
        // default input value
        value: undefined
      });

      expect( maskService.getOptions() ).toBeDefined();
      expect( maskService.getOptions().mask ).toBe('9');
      expect( maskService.getOptions().repeat ).toBe('5');
      expect( maskService.getOptions().clean ).toBeUndefined();
      expect( maskService.getOptions().limit ).toBe('true');
      expect( maskService.getOptions().restrict ).toBe('select');
      expect( maskService.getOptions().validate ).toBe('true');
      expect( maskService.getOptions().model ).toBeUndefined();
      expect( maskService.getOptions().value ).toBeUndefined();
      expect( maskService.getOptions().maskWithoutOptionals ).toBe('99999');

      maskService.generateRegex({
        mask: '9?.9?',
        // repeat mask expression n times
        repeat: undefined,
        // clean model value - without divisors
        clean: undefined,
        // limit length based on mask length
        limit: 'false',
        // how to act with a wrong value
        restrict: 'reject', //select, reject, accept
        // set validity mask
        validate: 'true',
        // default model value
        model: undefined,
        // default input value
        value: '9.9'
      });

      expect( maskService.getOptions() ).toBeDefined();
      expect( maskService.getOptions().mask ).toBe('9?.9?');
      expect( maskService.getOptions().repeat ).toBeUndefined();
      expect( maskService.getOptions().clean ).toBeUndefined();
      expect( maskService.getOptions().limit ).toBe('false');
      expect( maskService.getOptions().restrict ).toBe('reject');
      expect( maskService.getOptions().validate ).toBe('true');
      expect( maskService.getOptions().model ).toBeUndefined();
      expect( maskService.getOptions().value ).toBe('9.9');
      expect( maskService.getOptions().maskWithoutOptionals ).toBe('9.9');
    });
  });
});
