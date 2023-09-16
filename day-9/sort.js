const numbers = [9.81, 3.14, 100, 37];

const numbers2 = [...numbers];
console.log(numbers2.sort());
console.log(numbers2.sort((a, b) => a - b));
console.log(numbers2);
const numbers3 = [...numbers];
console.log(numbers3.sort((a, b) => b - a));
