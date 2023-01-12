const add = function(number1,number2) {
	return number1 + number2
};

const subtract = function(number1,number2) {
	return number1 - number2
};

const sum = function(myArray) {
	let counter = 0;
  for(let item of myArray){
    counter += item;
  } return counter
};

const multiply = function(myArray) {
  let firstMultiplier = myArray[0];
  for (let i = 1; i < myArray.length; i++) {
    firstMultiplier *= myArray[i];
    
  }
  return firstMultiplier
};

const power = function(base,power) {
	return base ** power
};

const factorial = function(num) {
	if(num == 0){
    return 1
  }else{
    let base = num;
    for(let i = base - 1; i > 1; i--){
      base *= i
    }
    return base
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
