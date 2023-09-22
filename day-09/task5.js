const countries = require("./countries");

function getCountries(size, fromFirst = true) {
  let arr = [];

  if (fromFirst) {
    for (let i = 0; i < size; i++) {
      arr.push(countries[i]);
    }
  } else {
    for (let i = countries.length - 1, j = 0; j < size; j++, i--) {
      arr.push(countries[i]);
    }
  }

  return arr;
}

console.log(getCountries(10, false));
