const countries = require("./countries-data");

function preprocessing(countries, uniqueLanguages, languageWithNumber) {
  // creating unique language list
  countries.forEach((country) => {
    uniqueLanguages.add(...country.languages);
  });

  // for each language create object how many countries use that language

  uniqueLanguages.forEach((language) => {
    let counryList = countries.filter(
      (country) => country.languages.indexOf(language) !== -1
    );

    if (counryList.length > 0) {
      languageWithNumber.push({
        country: language,
        count: counryList.length,
      });
    }
  });

  // sort languageWithNumber by count
  languageWithNumber.sort(function (a, b) {
    if (b.count > a.count) return 1;
    return -1;
  });
}

function mostSpokenLanguages(countries, size) {
  const uniqueLanguages = new Set();
  const languageWithNumber = [];
  preprocessing(countries, uniqueLanguages, languageWithNumber);

  const answer = [];

  for (let i = 0; i < size; i++) {
    answer.push(languageWithNumber[i]);
  }

  return answer;
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
