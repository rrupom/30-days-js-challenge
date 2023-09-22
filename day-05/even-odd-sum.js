let evensum = 0;

for (let i = 2; i <= 100; i += 2) {
  evensum += i;
}

let oddsum = 0;
for (let i = 1; i < 100; i += 2) {
  oddsum += i;
}

let sum = [];
sum.push(evensum);
sum.push(oddsum);

console.log(sum);
