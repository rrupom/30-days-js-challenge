const allTitles = document.querySelectorAll("h1");
console.log(allTitles);

allTitles.forEach((title) => console.log(title));

allTitles[3].classList = "title";
allTitles[3].id = "fourth-title";

allTitles[3].setAttribute("class", "title");
allTitles[3].setAttribute("id", "fourth-title");

console.log(allTitles[3].classList);

allTitles[3].textContent =
  "My name is Rakib. I want to become a good software engineer.";

// adding styles
allTitles.forEach((title, index) => {
  title.style.fontSize = "24px";
  if (index % 2 === 0) {
    title.style.color = "white";
    title.style.backgroundColor = "black";
    title.style.font = "20px";
  } else {
    title.style.color = "black";
    title.style.backgroundColor = "white";
    title.style.fontSize = "30px";
  }
});
