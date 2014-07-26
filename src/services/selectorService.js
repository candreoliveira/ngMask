'use strict';

angular.module('ngMask')
  .factory('SelectorService', [function(){
    function wrongPosition(type, mask, values, patterns){
      if(!values){ return 0; }

      var pos = undefined;

      for(var i=0; i<values.length; i++){
        var value   = values[i],
            pattern = patterns[mask[i]];

        if(pattern && !pattern.test(value)){
          pos = i;

          if(type === 'first'){
            break;
          }
        }
      }

      return (pos === undefined) ? values.length : pos;
    }

    function getFirstWrongPosition(mask, values, patterns){
      return wrongPosition('first', mask, values, patterns);
    }

    function getLastWrongPosition(mask, values, patterns){
      return wrongPosition('last', mask, values, patterns);
    }

    function setSelectionRange(input, selectionStart, selectionEnd){
      if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
      } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
      }
    }

    function setCaretPosition(element, mask, values, patterns){
      // Set cursor on first wrong element
      var pos = getFirstWrongPosition(mask, values, patterns);
      setSelectionRange(element, pos, (pos+1));
    }

    return {
      setCaretPosition: setCaretPosition,
      setSelectionRange: setSelectionRange
    }
  }]);