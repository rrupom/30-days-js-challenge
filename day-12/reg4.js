const txt = "This regular expression example was made in December 6,  2019.";

const pattern = /\b\w{4}\b/g;
const pattern2 = /\b[a-zA-Z]{4}\b/g;
const pattern3 = /\d{1,4}/g;

console.log(txt.match(pattern));
console.log(txt.match(pattern2));
console.log(txt.match(pattern3));
