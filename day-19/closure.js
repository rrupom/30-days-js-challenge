function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}

const innerFunction = outerFunction();
console.log(innerFunction());
console.log(innerFunction());
console.log(innerFunction());
