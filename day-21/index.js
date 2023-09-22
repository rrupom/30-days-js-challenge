const allTitle = document.getElementsByClassName("title");

console.log(allTitle);
console.log(allTitle.length);

for (let i = 0; i < allTitle.length; i++) {
  console.log(allTitle[i]);
}

console.log(" ");

let firstTitle = document.querySelector("h1");
console.log(firstTitle, typeof firstTitle);

firstTitle = document.querySelector("#first-title");
console.log(firstTitle, typeof firstTitle);

firstTitle = document.querySelector(".title");
console.log(firstTitle);
