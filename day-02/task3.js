let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

let challenge = "30 Days Of JavaScript";
console.log(challenge.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));

console.log(challenge.match(/a/gi));
console.log(challenge.match("a"));
