const person = {
  firstName: "Rakib",
  lastName: "Talukder",
  age: 23,
  country: "Bangladesh",
  city: "Helsinki",
  skills: ["html", "css", "javascript", "react", "redux"],
};

for (const key in person) {
  console.log(key, person[key]);
}
