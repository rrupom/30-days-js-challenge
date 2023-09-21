const countriesAPI = "https://restcountries.com/v2/all";

const fetchData = async () => {
  let languageArray = [];

  const response = await fetch(countriesAPI);
  const countries = await response.json();

  countries.forEach((country) => {
    const languages = country.languages;
    for (let lang of languages) {
      languageArray.push(lang.name);
    }
  });

  const languageSet = new Set(languageArray);
  console.log(languageSet);
  console.log(
    "The number of official language in the word is : ",
    languageSet.size
  );
};

fetchData();
