const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async () => {
  const catsWithAverageWeight = [];

  const response = await fetch(catsAPI);
  const cats = await response.json();

  cats.forEach((cat) => {
    const { metric } = cat.weight;
    const m = metric.split(/[ -]+/);
    const first = +m[0];
    const last = +m[m.length - 1];

    catsWithAverageWeight.push({
      name: cat.name,
      averageWeight: (first + last) / 2,
    });
  });

  console.log(catsWithAverageWeight);
};

fetchData();
