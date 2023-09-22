const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const sum = products
  .map((product) => product.price)
  .filter((price) => price !== "" && price !== " ")
  .reduce((acc, cur) => acc + cur, 0);

console.log(sum);

const product = products.reduce((acc, cur) => {
  return {
    price:
      cur.price === " " || cur.price === "" ? acc.price : acc.price + cur.price,
  };
});
console.log(product.price);
