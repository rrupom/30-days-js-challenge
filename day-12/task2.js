const text = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.`;

const pattern = /[-]?\d+/g;

let numbers = text.match(pattern);

numbers = numbers.map((number) => parseInt(number));
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers[numbers.length - 1] - numbers[0]);
