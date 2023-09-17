const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// a union b
let c = [...a, ...b];

let union = new Set(c);

c = Array.from(union);

console.log(union, c);

// a intersection b

let B = new Set(b);

let intersection = new Set(a.filter((number) => B.has(number)));
console.log(intersection);
