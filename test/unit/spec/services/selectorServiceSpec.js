describe('SelectorService', function (){
  var service;

  beforeEach(function(){
    angular.module('test', ['ngMask']);
    module('test');
  });

  beforeEach(function (){
    inject(function(SelectorService) {
      service = SelectorService;
    });
  });


  describe('SetSelectionRange function', function (){
    var Input = function (){};
    Input.prototype.setSelectionRange = function (s, e){};
    Input.prototype.focus = function (){};

    it('should set focus and apply range', function(){
      var input = new Input();
      spyOn(input, 'focus');
      spyOn(input, 'setSelectionRange');

      service.setSelectionRange(input, 0, 1);

      expect(input.setSelectionRange).toHaveBeenCalledWith(0, 1);
      expect(input.focus).toHaveBeenCalled();
    });

    var Input2 = function (){};
    Input2.prototype.setSelectionRange = undefined;
    Input2.prototype.createTextRange = function (){};

    var Range = function(){};
    Range.prototype.collapse  = function(a){};
    Range.prototype.moveEnd   = function(c,e){};
    Range.prototype.moveStart = function(c,s){};
    Range.prototype.select    = function(){};

    it('should call createTextRange', function(){
      var input = new Input2();
      var range = new Range();

      spyOn(input, 'createTextRange').andReturn(range);
      spyOn(range, 'collapse');
      spyOn(range, 'moveEnd');
      spyOn(range, 'moveStart');
      spyOn(range, 'select');

      service.setSelectionRange(input, 0, 1);

      expect(input.createTextRange).toHaveBeenCalled();

      expect(range.select).toHaveBeenCalled();
      expect(range.collapse).toHaveBeenCalledWith(true);
      expect(range.moveStart).toHaveBeenCalledWith('character', 0);
      expect(range.moveEnd).toHaveBeenCalledWith('character', 1);
    });
  });
});
