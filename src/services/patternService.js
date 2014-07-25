'use strict';

angular.module('ngMask')
  .factory('PatternService', ['ComparatorService', function(ComparatorService){
    function createPatternService(){
      var patterns = {
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
        },
        optionals = [],
        full_pattern, mask, separators;

      function generateSeparators(mask, patterns){
        var output = []

        for(var i=0; i<mask.length; i++){
          var pattern = patterns[mask[i]];

          if(!pattern){
            output.push(('\\' + mask[i]));
          }
        }

        separators = output;
        return output;
      }

      function removeQuestionMark(mk){
        var output = "";
        if(mk && (mk.indexOf('?') > -1)){
          var index = mk.indexOf('?'),
              array_mask = mk.split('');

          optionals.push(index);
          array_mask.splice(index, 1);
          output = array_mask.join('');
          output = removeQuestionMark(output);
        } else {
          output = mk;
        }

        return output;
      }

      function generateFullPattern(){
        var patt = '';

        mask = removeQuestionMark(mask);
        for(var i=0; i<mask.length; i++){
          var pattern = patterns[mask[i]];

          if(optionals.indexOf(i) > -1){
            patt += pattern + '?';
          } else {
            patt += pattern;
          }
        }

        full_pattern = RegExp(patt.replace(/\//g, ''));
        return mask;
      }

      function generateMask(mk, repeat){
        var output = '';

        if(mk.length === 1 && repeat){
          for(var i=0; i<parseInt(repeat); i++){
            output += mk;
          }
        } else {
          output = mk;
        }

        mask = output;
        return output;
      }

      function getPatterns(){
        return patterns;
      }

      function getSeparators(){
        return separators;
      }

      function getMask(){
        return mask;
      }

      function getOptionals(){
        return optionals;
      }

      function getFullPattern(){
        return full_pattern;
      }

      function compose(mask, values, patterns){
        var val = values,
            length = ComparatorService.min(mask, values);

        for(var i=0; i<length; i++){
          var pattern = patterns[mask[i]];

          if(!pattern && (val[i] !== mask[i])){
            var tmp = val.split('');
            tmp.splice(i, 0, mask[i]);

            val = compose(mask, tmp.join(''), patterns);
            break;
          }
        }

        return val;
      }

      return {
        getPatterns: getPatterns,
        getSeparators: getSeparators,
        getMask: getMask,
        getFullPattern: getFullPattern,
        getOptionals: getOptionals,
        generateMask: generateMask,
        generateSeparators: generateSeparators,
        compose: compose
      }
    }

    return {
      create: createPatternService
    }

  }]);