'use strict';
angular.module('app', ['ngMask', 'ngRoute'])
  .config(['$routeProvider', 'ngMaskConfig', function ($routeProvider, ngMaskConfig) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ngMask.html'
      })
      .when('/ngMask', {
        templateUrl: 'views/ngMask.html'
      })
      .otherwise({
        redirectTo: '/'
      });
	  
	  ngMaskConfig.alias = {
		'int': function (value) {
			if (typeof value == 'object') {
				value.repeat = '999';
			}
			return '9';
		},
		'cpf': {
			mask: '999.999.999-99',
			validate: function (strCPF) {
				var add, i, rev;
				strCPF = strCPF.replace(/[^\d]+/g, '');
				if (strCPF == '') return false;
				// Elimina CPFs invalidos conhecidos    
				if (strCPF.length != 11 ||
					strCPF == "00000000000" ||
					strCPF == "11111111111" ||
					strCPF == "22222222222" ||
					strCPF == "33333333333" ||
					strCPF == "44444444444" ||
					strCPF == "55555555555" ||
					strCPF == "66666666666" ||
					strCPF == "77777777777" ||
					strCPF == "88888888888" ||
					strCPF == "99999999999")
					return false;
				// validate first digit
				add = 0;
				for (i = 0; i < 9; i++)
					add += parseInt(strCPF.charAt(i)) * (10 - i);
				rev = 11 - (add % 11);
				if (rev == 10 || rev == 11)
					rev = 0;
				if (rev != parseInt(strCPF.charAt(9)))
					return false;
				// validate second digit 
				add = 0;
				for (i = 0; i < 10; i++)
					add += parseInt(strCPF.charAt(i)) * (11 - i);
				rev = 11 - (add % 11);
				if (rev == 10 || rev == 11)
					rev = 0;
				if (rev != parseInt(strCPF.charAt(10)))
					return false;
				return true;
			}
		},
		'tel': function (value) {
			if (typeof value == 'string' && value.length == 8 || value.length == 9) {
				return '9?9999-9999';
			}
			return '(99) 9?9999-9999';
		},
		'date': '39/19/2999'
	  };
  }])
  .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ]);
