const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}

console.timeEnd("Regular for loop");

console.time("For Each");
countries.forEach((country) => {
  console.log(country[0], country[1]);
});
console.timeEnd("For Each");

console.time("For Of");

for (let country of countries) {
  console.log(country[0], country[1]);
}
console.timeEnd("For Of");
