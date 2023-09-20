console.assert(4 < 3, "This condition is false");
console.assert(4 > 3, "This condition must be true");

for (let i = 0; i <= 10; i++) {
  let errorMessage = `${i} is not even`;
  console.log("this # is ", i);
  console.assert(i % 2 == 0, { number: i, errorMessage: errorMessage });
}
