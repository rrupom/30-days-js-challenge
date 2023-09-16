const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;

  function callback(number) {
    sum += number;
  }

  arr.forEach(callback);

  return sum;
}

console.log(sumArray(numbers));
