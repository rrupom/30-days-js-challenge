const person = {
  name: "Rakib",
  hometown: "Sirajganj",
  skills: "Javascript",
};

const json = JSON.stringify(person);
// console.log(json);

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`;

// const usersObj = JSON.parse(usersText, (key, value) => {
//   let newValue =
//     typeof value == "string" && key != "email" ? value.toUpperCase() : value;
//   return newValue;
// });

const usersObj = JSON.parse(usersText, (key, value) => {
  //   console.log("Value : ", value);
  return new Date().getMilliseconds();
});

console.log(usersObj);
