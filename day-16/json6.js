const person = {
  name: "Amirul",
  city: "Sylhet",
  age: 24,
};

// const text = JSON.stringify(person, ["name"], 2);

const user = {
  firstName: "Rakib",
  lastName: "Talukder",
  country: "Bangladesh",
  city: "Sirajganj",
  email: "rakib.t.rupom@gmail.com",
  isLoggedIn: true,
  points: 30,
  age: 24,
};

const text = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(text);
