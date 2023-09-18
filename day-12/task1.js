const text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;

const pattern = /\d+/g;

const incomes = text.match(pattern);

let sum = 0;

for (let i of incomes) {
  sum += +i;
}
console.log(sum);
