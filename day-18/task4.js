const countriesAPI = "https://restcountries.com/v2/all";

const fetchData = async (size) => {
  const largestCountries = [];
  const response = await fetch(countriesAPI);
  const countries = await response.json();

  countries.forEach((country) => {
    if (typeof country.area != "undefined") {
      largestCountries.push({
        name: country.name,
        area: country.area,
      });
    }
  });

  largestCountries.sort(function (a, b) {
    if (b.area > a.area) return 1;
    else return -1;
  });

  console.log(largestCountries.slice(0, size));
};

fetchData(20);
