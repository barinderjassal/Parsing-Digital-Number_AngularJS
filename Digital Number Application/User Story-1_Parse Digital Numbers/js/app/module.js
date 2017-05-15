var app = angular.module('numberApp', ['ngFileSaver']);

app.controller('numberController', ['$scope', 'FileSaver', 'Blob', function ($scope, FileSaver, Blob) {
	
	/*
	 *  Here user will download the parsed numbers
	 */
	$scope.download = function () {
		
        var data = new Blob([$scope.output], {
            type: 'text/plain;charset=utf-8'
        });
        
        FileSaver.saveAs(data, 'parsedInvoices.txt', true);
    };
	
}])