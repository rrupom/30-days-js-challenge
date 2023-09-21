class Person {
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    console.log(month);
  }

  saySomething() {
    console.log("I am say something in Person class");
  }
}

class Child extends Person {
  saySomething() {
    console.log("I am say something in Child class");
  }
}

const s1 = new Person();
const s2 = new Child();
s1.saySomething();
s2.saySomething();
