const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const flag = names.every((country) => typeof country === "string");
console.log(flag);

function customEery(arr) {
  let flag = true;

  const country = [...arr];

  console.log(country);

  for (let i of country) {
    if (typeof i !== "string") {
      flag = false;
      break;
    }
  }

  return flag;
}

console.log(customEery(names));
