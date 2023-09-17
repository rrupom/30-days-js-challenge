let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((number) => B.has(number));
let C = new Set(c);
console.log(C);
