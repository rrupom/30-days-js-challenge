let sum = 0;

const numbers = [1, 2, 3, 4, 5];

let value = numbers.forEach((num) => (sum += num));
let value2 = numbers.forEach((num) => console.log(num));
console.log(sum, value);
