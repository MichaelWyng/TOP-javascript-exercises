const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, curr) => product * curr, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a < 0) return "Factorial is not defined for negative numbers.";
  if (a === 0) return 1;

  return Array.from({ length: a }, (_, i) => i + 1)
    .reduce((acc, curr) => acc * curr, 1);
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
