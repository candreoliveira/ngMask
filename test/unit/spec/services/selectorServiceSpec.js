describe('SelectorService', function (){
  var service, patterns = {
    '9': /[0-9]/,
    '8': /[0-8]/,
    '7': /[0-7]/,
    '6': /[0-6]/,
    '5': /[0-5]/,
    '4': /[0-4]/,
    '3': /[0-3]/,
    '2': /[0-2]/,
    '1': /[0-1]/,
    '0': /[0]/,
    '*': /./,
    'w': /\w/,
    'W': /\w/,
    'd': /\d/,
    'D': /\D/,
    's': /\s/,
    'S': /\S/,
    'b': /\b/,
    'A': /[A-Z]/,
    'a': /[a-z]/,
    'Z': /[A-ZÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
    'z': /[a-zçáàãâéèêẽíìĩîóòôõúùũüû]/,
    '@': /[a-zA-Z]/,
    '#': /[a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
    '%': /[0-9a-zA-zçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/
  };

  beforeEach(function(){
    angular.module('test', ['ngMask']);
    module('test');
  });

  beforeEach(function (){
    inject(function(SelectorService, PatternService) {
      service = SelectorService;
      patternService = PatternService;
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

  describe('setCaretPosition function', function (){
    var Input = function (){};
    Input.prototype.setSelectionRange = function (s, e){};
    Input.prototype.focus = function (){};

    it('should set apply caret', function(){
      var input  = new Input(),
          mask   = '33333',
          values = '33334';

      spyOn(input, 'setSelectionRange');
      service.setCaretPosition(input, mask, values, patterns);
      expect(input.setSelectionRange).toHaveBeenCalledWith(4, 5);
    });

    it('should set apply caret', function(){
      var input  = new Input(),
          mask   = '39/19/9999',
          values = '49/19/9999';

      spyOn(input, 'setSelectionRange');
      service.setCaretPosition(input, mask, values, patterns);
      expect(input.setSelectionRange).toHaveBeenCalledWith(0, 1);
    });

    it('should set apply caret', function(){
      var input  = new Input(),
          mask   = '119.961.307',
          values = '119a';

      spyOn(input, 'setSelectionRange');
      service.setCaretPosition(input, mask, values, patterns);
      expect(input.setSelectionRange).toHaveBeenCalledWith(4, 5);
    });

  });
});
