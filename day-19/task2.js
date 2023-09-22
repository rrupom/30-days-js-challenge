function outerFunction(num1, num2) {
  function add() {
    let sum = num1 + num2;
    return sum;
  }

  function multiply() {
    let ans = num1 * num2;
    return ans;
  }

  function divide() {
    let ans;
    if (num1 > num2) {
      ans = num1 / num2;
    } else {
      ans = num2 / num1;
    }
    return ans;
  }

  return {
    add,
    multiply,
    divide,
  };
}

const { add, multiply, divide } = outerFunction(30, 15);

console.log(add());
console.log(multiply());
console.log(divide());
