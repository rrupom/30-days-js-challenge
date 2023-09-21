const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async () => {
  const catNames = [];
  const response = await fetch(catsAPI);
  const data = await response.json();

  data.forEach((cat) => {
    catNames.push({
      name: cat.name,
    });
  });

  console.log(catNames);
};

fetchData();
