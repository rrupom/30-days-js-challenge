const person = {
  firstName: "Rakib",
  lastName: "Talukder",
  age: 23,
  country: "Bangladesh",
  city: "Sirajganj",
};

const personJSON = JSON.stringify(person, undefined, 2);
localStorage.setItem("person", personJSON);
