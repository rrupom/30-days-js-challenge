const metric = "5 - 8";
const m = metric.split(/[ -]+/);
let first = +m[0];
let last = +m[m.length - 1];
console.log(first, last);
console.log((first + last) / 2);
