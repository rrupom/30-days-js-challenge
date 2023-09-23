const url = "https://restcountries.com/v2/all";

document.body.style.margin = "0";

const fetchData = async () => {
  const response = await fetch(url);
  const countries = await response.json();
  countries.forEach((country) => {
    // console.log(country.name);
    let div = document.createElement("div");
    div.textContent = country.name;
    div.style.fontSize = "20px";
    div.style.display = "inline-block";
    div.style.padding = "10px";
    div.style.border = "2px solid red";
    div.style.margin = "5px";
    div.style.backgroundColor = "yellow";
    div.style.color = "black";
    div.style.fontWeight = "bold";
    div.style.height = "100px";
    div.style.minWidth = "100px";
    document.body.style.textAlign = "center";
    document.body.appendChild(div);
  });
};

fetchData();
