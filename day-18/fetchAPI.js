const url = "https://restcountries.com/v2/all";

fetch(url)
  .then((result) => {
    return result.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
