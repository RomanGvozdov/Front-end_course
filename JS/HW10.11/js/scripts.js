// Task1
/*var t = prompt('Enter the string', 'abcEnglishdef');

function checkSring(str){
	return ~((str).toLowerCase().indexOf('english'));
}

console.log(checkSring(t));

//Task2
var stn = prompt('Enter the string', 'abcEnglishdef');
var subStn = prompt('Enter the subString', 'English');
	
function checkString2(str, subStr){
	
	return ~((str).toLowerCase().indexOf(subStr.toLowerCase()));
}
console.log(checkString2(stn, subStn));

//Task3
console.log(generateRange(1, 10, 3));
function generateRange (min, max, step) {
	var result = [];
	if( step > 0 && min < max) {
		for (var i = min; i <= max; i += step){
			result.push(i);
		}
	} else
		console.log("error");
	return result;
}*/


//Task4
var str1 = ['abrtrt', 'fg', 'dhg', 'jfdhdfdfdf', 'aer', 'rdgdhcth'];
var str2 = ['codewars', 'java', 'javascript'];
var str3 = ['apple', 'cat', 'planet'];

function cutIt (arr){
	len = arr.length;
	var shortest = arr[0].length;
	for (var i = 1; i < len; i++) {
		if (shortest > arr[i].length)
			shortest = arr[i].length;
	}
	for ( var j = 0; j < len; j++){
		arr[j]=(arr[j].substring(0, shortest));
	}
	return arr;
}
console.log(cutIt(str2));
			
		
	
	

	
