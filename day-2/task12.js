let person =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";

let pattern = /\d+/g;
let incomes = person.match(pattern);
let totalIncome = 0;

for (i in incomes) {
  totalIncome += Number(incomes[i]);
}
console.log(totalIncome);
