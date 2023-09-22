const firstPara = document.querySelector("p");
console.log(firstPara);

const paragraphsByQuerySlector = document.querySelectorAll("p");
console.log(paragraphsByQuerySlector);

const paragraphsByTagName = document.getElementsByTagName("p");
console.log(paragraphsByTagName);

const secondPara = document.querySelector("#id2");
console.log(secondPara);

paragraphsByQuerySlector[paragraphsByQuerySlector.length - 1].textContent =
  "This is fifth paragraph";
paragraphsByQuerySlector.forEach((paragraph, index) => {
  console.log(paragraph.textContent);
});

paragraphsByQuerySlector.forEach((paragraph) => {
  paragraph.classList.add("hello");
});

paragraphsByQuerySlector.forEach((paragraph) => {
  paragraph.setAttribute("src", "http://www.google.com/");
});

paragraphsByQuerySlector.forEach((paragraph, index) => {
  paragraph.style.fontSize = "24px";
  if (index % 2 == 0) {
    paragraph.style.color = "slateblue";
  } else {
    paragraph.style.color = "salmon";
  }
});

// setting text content

paragraphsByQuerySlector.forEach((paragraph, index) => {
  if (index % 2 == 0) {
    paragraph.textContent = "This paragraph is in even position";
  } else {
    paragraph.textContent = "This paragraph is in odd position";
  }
});
