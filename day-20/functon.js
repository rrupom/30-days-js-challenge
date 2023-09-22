const printFullName = (firstName, lastName) => firstName + " " + lastName;

console.log(printFullName("Rakib", "Talukder"));

const square = (n) => n * n;
console.log(square(3));

const hexaColor = () => {
  const str = "0123456789abcdef";
  let hexa = "";
  let index;

  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};

console.log(hexaColor());
