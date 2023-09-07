let sentence =
  "You cannot end a sentence with because because because is a conjunction";
// console.log(sentence.indexOf("because"));
let first = sentence.indexOf("because");
console.log(first);
// console.log(sentence.lastIndexOf("because"));
let last = sentence.lastIndexOf("because") + "because".length;
console.log(last);
console.log(sentence.substring(first, last));
