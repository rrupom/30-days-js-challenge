function generateRandomID(idSize) {
  let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 1; i <= idSize; i++) {
    index = Math.floor(Math.random() * charset.length);
    id += charset[index];
  }

  return id;
}

let id6 = generateRandomID(6);
console.log(id6);

let id8 = generateRandomID(8);
console.log(id8);

console.log(generateRandomID(32));
console.log(generateRandomID(128));
