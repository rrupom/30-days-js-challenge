let sentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love";

let pattern = /love/g;

console.log(sentence.match(pattern).length);

let sentence2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence2.match(/because/g).length);
