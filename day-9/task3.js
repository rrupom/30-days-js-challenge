const products = [
  { product: "tea", price: "" },
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
];

const value = products.reduce((acc, cur) => {
  console.log(acc, cur);
  if (acc.price === "" && acc.price === " ") {
    return {
      price: 0,
    };
  } else if (acc.price === "" || acc.price === " ") {
    return {
      price: cur.price,
    };
  } else if (cur.price === "" || cur.price === " ") {
    return {
      price: acc.price,
    };
  } else {
    return {
      price: acc.price + cur.price,
    };
  }
});

console.log(value.price);
