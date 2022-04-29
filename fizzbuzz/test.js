function testNum(a) {
	  let result;
	  if (a%5 = 0) {
		  result = 'Buzz';
		}
	else if (a%3 = 0){
	        result = 'Fizz';
	      }
	else if (a%5 = 0 && a%3) {
		result = 'FizzBuzz';
	}
	  return result;
}

console.log(testNum(15));
