const countriesAPI = "https://restcountries.com/v2/all";

const fetchData = async () => {
  const countryDetail = [];
  const response = await fetch(countriesAPI);
  const data = await response.json();
  data.forEach((country) => {
    countryDetail.push({
      name: country.name,
      capital: country.capital,
      languages: country.languages,
      area: country.area,
    });
  });

  console.log(countryDetail);
};

fetchData();
