(function() {
  'use strict';
  angular.module('ngMask')
      .filter('mask', ['MaskService', function (MaskService) {
        return function (value, pMask) {
            var regex
            switch (pMask) {
                case 'cpf':
                    regex = '999.999.999-99'; break;
                case 'cnpj':
                    regex = '99.999.999/9999-99'; break;
                case 'cep':
                    regex = '99.999-999'; break;
                case 'tel':
                    if (value.length == 8 || value.length == 9) {
                        regex = '9?9999-9999'; //Sem DDD
                    } else {
                        regex = '(99) 9?9999-9999'; //Com DDD
                    }
                    break;
                case 'date':
                    regex = '39/19/2999'; break;
                default:
                    regex = pMask; break;
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