function isPrime(number) {
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}
console.log(2);
for (let i = 3; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
