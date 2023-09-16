const countries = require("./countries-data");

function preprocessing(countries) {
  countries.sort(function (a, b) {
    if (a.population < b.population) return 1;
    return -1;
  });
}

function mostPopulatedCountries(countres, size) {
  preprocessing(countres);

  let answer = [];

  for (let i = 0; i < size; i++) {
    answer.push({
      country: countres[i].name,
      population: countres[i].population,
    });
  }

  return answer;
}

console.log(mostPopulatedCountries(countries, 10));
console.log(mostPopulatedCountries(countries, 3));
