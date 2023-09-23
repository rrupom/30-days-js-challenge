const ul = document.querySelector("ul");

const lists = document.querySelectorAll("li");

for (let list of lists) {
  ul.removeChild(list);
}
