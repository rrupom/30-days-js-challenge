let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set([...a, ...b]);
let copyC = new Set(c);

console.log(A, B, C, copyC);
