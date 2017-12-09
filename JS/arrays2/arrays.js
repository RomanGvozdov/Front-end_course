(function(exports) {
  "use strict";

  /*
   1. Write a simple JavaScript program to join all elements of the following array into a string.
   Set second argument as choisen separator (e.g. - ";" , "," , "+"). By default must be ",".
   Sample array : myColor = ["Red", "Green", "White", "Black"];
   Expected Output :
   "Red,Green,White,Black"
   "Red,Green,White,Black"
   "Red+Green+White+Black"
   */
  function join(array, separator) {
		var str= "";
		var k = array.length;
		if(!separator){
			separator = ",";
		}
		for (var i = 0; i < k; i++)
		{
			if (i == (k - 1)){
				str+=array[i];
			} else {
				str+=array[i] + separator;
			}
		}
	return str;
  }

  /*
   2. Write a JavaScript program to sort the items of an array.
   Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
   Sample Output : -4,-3,1,2,3,5,6,7,8
   */
  function sort(array) {                            
     var n = array.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (array[j+1] < array[j])
           { var t = array[j+1]; 
			 array[j+1] = array[j];
			 array[j] = t; 
			 }
        }
     }                     
    return array; 
  }

  /*
   3. Write a JavaScript program which accept a string as input and swap the case of each character.
   For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
   */
  function swapLetter(string) {
	  if ( typeof(string) !== "string"){
		  throw new Error ('Error: first argument not a string');
	  }
	  var newstr = "";
	  var l = string.length;
	  for (var i = 0; i < l; i++){
		  if(string[i] === string[i].toLowerCase()) {
            newstr += string[i].toUpperCase();
		} else {
            newstr += string[i].toLowerCase();
        }
    }
	return newstr;
  }

  exports.arrays = {
    join              : join,
    sort              : sort,
    swapLetter        : swapLetter
  };
})(this);
