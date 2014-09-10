'use strict';

angular.module('ngMask')
  .directive('mask', ['$log', 'PatternService', 'SelectorService', function($log, PatternService, SelectorService){
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: function($element, $attrs){ 
        return {
          post: function($scope, $element, $attrs, controller, transcludeFn){
            var patternService = PatternService.create(),
                patterns       = patternService.getPatterns(),
                mask           = patternService.generateMask($attrs.mask, $attrs.repeat),
                element        = $element,
                separators     = $attrs.clean === "true" ? patternService.generateSeparators(mask, patterns) : undefined;

            function parser(values) {
              if(!values){ return undefined; }

              var array_mask  = mask.split(''),
                  input       = patternService.compose(mask, values.toString(), patterns).substr(0, mask.length),
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

            $element.on('focus input click keydown paste', function() {
              SelectorService.setCaretPosition(this, mask, this.value, patterns);
            });

            controller.$parsers.push(parser);

            // Register the watch to observe remote loading or promised data
            // Deregister calling returned function
            var watcher = $scope.$watch($attrs.ngModel, function (newValue, oldValue) {
              if (angular.isDefined(newValue)) {
                parser(newValue);
                watcher();
              }
            });

            // $evalAsync from a directive, it should run after the DOM has been manipulated by Angular, but before the browser renders
            // $evalAsync from a controller, it should run before the DOM has been manipulated by Angular (and before the browser renders) -- rarely do you want this
            // using $timeout, it should run after the DOM has been manipulated by Angular, and after the browser renders (which may cause flicker in some cases)
            if($attrs.ngValue) {
              $scope.$evalAsync(function( $scope ) {
                parser($attrs.ngValue);
              });
            }
          }
        }
      }
    }
  }]);