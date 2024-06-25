const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (number) {
  return number * 2;
});

const tripled = numbers.map((number) => {
  return number * 3;
});

const square = numbers.map((number) => number * number);

console.log(doubled);
console.log(tripled);
console.log(square);

// filter
const evenNumbers = numbers.filter((number) => {
  return number % 2 == 0;
});

console.log(evenNumbers);

// reduce
const sum = numbers.reduce((cont, curr) => {
  let total = 0;
  total = cont + curr;
  return total;
}, 0);

console.log(sum);
