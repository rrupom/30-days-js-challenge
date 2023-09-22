const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const countryLength = countries.map((country) => country.length);
console.log(countryLength);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sqNumbers = numbers.map((number) => number ** 2);
console.log(sqNumbers);

const upperCountries = countries.map((country) => country.toUpperCase());
console.log(upperCountries);

const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesWithLand);

const countriesWithSixCharacter = countries.filter(
  (country) => country.length === 6
);
console.log(countriesWithSixCharacter);
const countriesWithE = countries.filter((country) => country.startsWith("E"));
console.log(countriesWithE);
