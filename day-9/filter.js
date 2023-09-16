const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

const countryLand = countries.filter((country) => country.includes("land"));
console.log(countryLand);

const countryWithIA = countries.filter((country) => country.endsWith("ia"));
console.log(countryWithIA);
