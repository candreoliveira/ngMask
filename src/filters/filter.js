(function() {
  'use strict';
  angular.module('ngMask')
      .filter('mask', ['MaskService', 'ngMaskConfig', function (MaskService, ngMaskConfig) {
        return function (value, pMask) {
			var regex;

			if (typeof ngMaskConfig.alias[pMask] != 'undefined') {
				regex = ngMaskConfig.alias[pMask];
				if (typeof regex == 'object') {
					regex = regex.mask;
				}
				
				if (typeof regex == 'function') {
					regex = regex(value);
				}
			} else {
				regex = pMask;
			}

            var maskService = MaskService.create();

            maskService.generateRegex({
                mask: regex
            });

            var options = maskService.getOptions();
            var viewValue = maskService.getViewValue(value);

            //Valor com os divisores da mÃ¡scara
            var viewValueWithDivisors = viewValue.withDivisors(true);

            //Valor sem os divisores da mÃ¡scara
            var viewValueWithoutDivisors = viewValue.withoutDivisors(true);

            return viewValueWithDivisors;
        }
    }]);
})();