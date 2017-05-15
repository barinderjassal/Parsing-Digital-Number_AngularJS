app.directive('readFile', ['ParseNumberFactory', function (ParseNumberFactory) {
	return {
		restrict: 'A',
		scope: {
			inputFromFile: '=',
			outputToFile: '='
		},
		link: function(scope, elem, attrs) {
			
			if (!window.FileReader) {
				return;
			}
			
			elem.on('change', function (changeEvent) {
				var reader = new FileReader();
				reader.readAsText((changeEvent.srcElement || changeEvent.target).files[0]);
				reader.onload = function(loadEvent) {
					scope.inputFromFile = loadEvent.target.result;
					scope.outputToFile = ParseNumberFactory.getParsedNumbers(scope.inputFromFile);
					scope.$apply();
				}
			});
			
		}
		
	};
}]);