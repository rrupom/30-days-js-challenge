function outerFunction() {
  let count = 0;

  function plusOne() {
    count++;
    return count;
  }

  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne,
    minusOne: minusOne,
  };
}

const { plusOne, minusOne } = outerFunction();
console.log(plusOne());
console.log(plusOne());
console.log(minusOne());
console.log(minusOne());
