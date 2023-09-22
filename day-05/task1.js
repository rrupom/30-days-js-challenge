let numberOfLines = 7;

// pattern printing approach 1
for (let i = 1; i <= numberOfLines; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("#");
  }
  process.stdout.write("\n");
}

console.log("-------");

// approach 2

for (let i = 1; i <= numberOfLines; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
}
