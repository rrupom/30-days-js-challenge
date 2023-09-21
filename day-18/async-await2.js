const url = "https://restcountries.com/v2/all";

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.log(err.message);
  }
};

fetchData();
