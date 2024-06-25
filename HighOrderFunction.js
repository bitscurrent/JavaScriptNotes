//The map, filter, and reduce are array methods (built-in higher-order functions). 

//map
//The map function takes a function as an argument and applies it to each element in the array. 
const triplet = numbers.map((number) => {
  return number * 3;
});

const square = numbers.map((number) => number * number);

console.log(doubled);
console.log(triplet);
console.log(square);

// filter
//The filter method also takes a function as an argument and filters out elements according to the logic provided in the function. 
});
const evenNumbers = numbers.filter((number) => {
  return number % 2 == 0;
});

console.log(evenNumbers);

// reduce
//The reduce method, on the other hand, takes two arguments inside its callback function: the accumulator and the current element.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (number) {
  return number * 2;
const sum = numbers.reduce((cont, curr) => {
  let total = 0;
  total = cont + curr;
  return total;
}, 0);

console.log(sum);
