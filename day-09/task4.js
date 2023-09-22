const countries = require("./countries");

const characters = [];

for (i = 65; i < 91; i++) {
  characters.push(String.fromCharCode(i));
}

function categorizeCountries(countries) {
  const countriesAndFirstLetter = [];
  const characterAndLength = [];

  characters.forEach((character) => {
    let countryList = countries.filter((country) =>
      country.startsWith(character)
    );
    if (countryList.length > 0) {
      countriesAndFirstLetter.push({
        firstLetter: character,
        countryList: countryList.sort(),
        numberOfCountries: countryList.length,
      });

      characterAndLength.push({
        firstLetter: character,
        numberOfCountries: countryList.length,
      });
    }
  });

  console.log(characterAndLength);

  //   console.log(countriesAndFirstLetter);
}

categorizeCountries(countries);
