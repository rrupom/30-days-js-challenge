const txt = "This regular expression example was made in December 6,  2019.";

const pattern = /^this/gi;
const pattern2 = /[^A-Za-z,.]+/g;
console.log(txt.match(pattern));
console.log(txt.match(pattern2));
