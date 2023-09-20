const countries = [
  "Bangladesh",
  "India",
  "Pakistan",
  "Nepal",
  "Bhutan",
  "Mongolia",
  "China",
  "Japan",
  "Maldives",
  "Indonesia",
];

let count = countries.length;
let count2 = 0;

console.time("while");
while (count) {
  count--;
}
console.timeEnd("while");

console.time("for");
for (let i = 0; i < count; i++) {
  count2++;
}
console.timeEnd("for");

console.time("for of");
for (let country of countries) {
  count2++;
}
console.timeEnd("for of");

console.time("for each");
countries.forEach((country) => count2++);
console.timeEnd("for each");
