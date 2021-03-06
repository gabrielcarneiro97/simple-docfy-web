(function() {
	'use strict';

	angular
		.module('simpleDocfyWebApp')
		.directive(
			'uppercase',
			function() {
				function updateModel(model, newVelue) {
					model.$setViewValue(newVelue);
					model.$render();
				}

				return {
					require: 'ngModel',
					restrict: 'A',
					link: function(scope, elem, attrs, ngModel) {
						var cleanVelue;

						scope.$watch(attrs.ngModel, function(value) {
							if (value) {
								cleanVelue = value.toUpperCase();
								updateModel(ngModel, cleanVelue);
							} else {
								cleanVelue = value;
							}
						});
					}
				};
			});

})();
