let size = 5;
let arr = [];

while (true) {
  let number = Math.floor(Math.random() * 100);
  if (arr.includes(number)) continue;
  else arr.push(number);

  if (arr.length == 5) break;
}

console.log(arr);
