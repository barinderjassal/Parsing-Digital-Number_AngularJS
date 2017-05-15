app.factory('ParseNumberFactory', function () {
	
	var indexCheckArrOfArrays = [[0,2,4], [0,1,2,3,4,6,7], [0,2,3,8], [0,2,3,6], [0,1,2,6,7], [0,2,5,6], [0,2,5], [0,2,3,4,6,7], [0,2], [0,2,6]];
	
/*
 * Following is the pattern of numbers along with their blank characters.
 * for example, for number 0, blank charcater will be on 0,2,4 indexes

	 _
	| | {0,2,4} , 
	|_|

	  | {0,1,2,3,4,6,7}
	  |
	 _ 
	 _|  {0,2,3,8}
	|_
	 _ 
	 _| 	{0,2,3,6}
	 _|

	|_| {0,1,2,6,7}
	  |
	 _
	|_  {0,2,5,6}
	 _|
	 _
	|_ {0,2,5}
	|_|
	 _ 
	  | {0,2,3,4,6,7}
	  |
	 _
	|_| {0,2}
	|_|
	 _
	|_| {0,2,6}
	 _|

*/

	var indexesOf = function (str) {
		var match,
			indexes = [];
		var regexp = new RegExp(/ /g);
		while (match = regexp.exec(str)) {
			indexes.push(match.index);
		}
		return indexes;
	};
	
	var factoryObj = {};
	
	factoryObj.getParsedNumbers = function (input) {
		
		var arrayOfCharacters= input.split('\n'),
			outputStr = '',
			count = 0;
		
		for (var i = 0; i < arrayOfCharacters.length;i = i+4) {
			
			var line1 = arrayOfCharacters[i],
				line2 = arrayOfCharacters[i+1],
				line3 = arrayOfCharacters[i+2];
			
			for (var j = 0; j < line1.length;j = j+3) {
				var stringOfCharacters = line1.substr(j, 3) + line2.substr(j, 3) + line3.substr(j, 3),
					blankIndexes = indexesOf(stringOfCharacters);
				
				for (var k = 0; k < indexCheckArrOfArrays.length; k++) {
					if (angular.equals(blankIndexes, indexCheckArrOfArrays[k])) {
						outputStr += k;
						break;
					}
				}
				count++;
				if (count && count%9 === 0) {
					outputStr += '\r\n';
				}
			}
		
		}
		return outputStr;
		 
	};
	return factoryObj;
	
});