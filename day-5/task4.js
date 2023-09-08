console.log("Printing only even number : ");
for (let i = 0; i <= 100; i += 2) {
  process.stdout.write(i + " ");
}

console.log("\n----> ---->");

console.log("Printing only odd number : ");
for (let i = 1; i < 100; i += 2) {
  process.stdout.write(i + " ");
}
