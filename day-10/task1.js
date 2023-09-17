const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

const emptySet = new Set();

const numbers = new Set();

for (let i = 0; i < 10; i++) {
  numbers.add(i);
}

console.log(numbers);

let remoteElement = 9;

numbers.delete(remoteElement);
console.log(numbers);

// clearning set
numbers.clear();

console.log(countries);
countries.push("Bangladesh");
countries.push("Japan");
console.log(countries);

const countrySet = new Set(countries);
console.log(countrySet);

const countryMap = new Map();

for (let country of countries) {
  countryMap.set(country, country.length);
}

console.log(countryMap);
