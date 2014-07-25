'use strict';

angular.module('ngMask')
  .directive('mask', ['$log', '$timeout', 'PatternService', 'SelectorService', function($log, $timeout, PatternService, SelectorService){
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: function($element, $attrs, transclude){
        return function($scope, $element, $attrs, controller){
          var patternService = PatternService.create(),
              patterns       = patternService.getPatterns(),
              mask           = patternService.generateMask($attrs.mask, $attrs.repeat),
              element        = $element,
              separators     = $attrs.clean === "true" ? patternService.generateSeparators(mask, patterns) : undefined;

          $element.on('focus input click keydown paste', function(){
            SelectorService.setCaretPosition(this, mask, this.value, patterns);
          });

          function parser(values){
            if(!values){ return undefined; }

            var array_mask  = mask.split(''),
                input       = patternService.compose(mask, values, patterns).substr(0, mask.length),
                invalid     = false,
                output      = '';

            for(var i=0; i<input.length; i++){
              var pattern  = patterns[array_mask[i]],
                  value    = input[i];

              if(pattern && !pattern.test(value)){
                invalid = true;
                //break;
                //output  += ' ';
                output += value;
              } else if(!pattern || (pattern && pattern.test(value))){
                output += value;
              }
            }

            if(invalid || (output.length < mask.length)){
              controller.$setValidity('mask', false);
            } else {
              controller.$setValidity('mask', true);
            }

            if(values !== output){
              controller.$setViewValue(output, 'input');
              controller.$render();
            }

            if(!separators){
              return output;
            } else {
              return output.replace(RegExp(('[' + separators.join('') + ']'), 'gi'), '');
            }
          }

          controller.$parsers.push(parser);
        };
      }
    };
  }]);