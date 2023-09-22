const data = require("./countries-data");

data.sort(function (a, b) {
  if (b.name > a.name) return 1;
});

data.sort(function (a, b) {
  if (b.capital > a.capital) return 1;
});
data.sort(function (a, b) {
  if (b.population > a.population) return 1;
});
function firstTenCoutries() {
  const countries = [];

  for (let i = 0; i < 10; i++) {
    countries.push(data[i]);
  }

  console.log(countries);
}

firstTenCoutries();
