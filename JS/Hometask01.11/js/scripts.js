//Task 1

var result = 0;
for (var i = 1; i <= 100; i++)
	result+=i;
console.log(result);

//Task 2

function factorial(n) {
	if ( n > 1 ){
		return(n * factorial(n - 1));
	} else 
		return(1);
}

var n = prompt("Введите число");
var result = 1;
	for ( var i = n ; i >= 1; i-- )
		result *= i;
console.log(n + "!" + "=" + result);
	
//Task 3

function Hayes (y) {
	var steps = 0;
	var topseq = 0;
	while( y != 1) {
		steps++;
		if ( y > topseq )
			topseq = y;
		if ( (y % 2) == 0) {
			console.log(y/=2);
			
		} else {
			console.log(y = y*3 + 1);
		}
	}
	console.log(steps + " " + "Шагов было сделано");
	console.log("Вершина -" + " " + topseq);
}

var t = prompt("Введите число");
console.log(Hayes(t));	

	