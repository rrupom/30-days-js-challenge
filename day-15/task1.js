class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  makeSound() {
    return `${this.type} is making sound`;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, type) {
    super(name, age, color, legs);
    this.type = "Dog";
  }

  makeSound() {
    return "I am making sound in the dog class";
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
    this.type = "Cat";
  }

  makeSound() {
    return "I am making sound in the cat class";
  }
}

const dog = new Dog("dog", 3, "green", 4);
console.log(dog.makeSound());

const cat = new Cat("cat", 2, "black", 3);
console.log(cat.makeSound());
