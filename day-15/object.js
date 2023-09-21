class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person = new Person("Rakib", "Talukder", 250, "BD", "Sirahganj");
console.log(person);
