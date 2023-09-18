const str = "I love JavaScript";
const pattern = /love/gi;

let result = str.match(pattern);
let result2 = str.search(pattern);

console.log(result);
console.log(result2);
