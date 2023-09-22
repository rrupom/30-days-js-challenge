let year = document.getElementsByTagName("span");

let colors = ["blue", "green", "salmon", "orange", "yellow", "pink"];

setInterval(() => {
  let index = Math.floor(Math.random() * colors.length);
  year[0].style.color = colors[index];
}, 1000);

// creating time text
const time = document.createElement("div");
let date = new Date();
time.style.fontSize = "20px";

const target = document.getElementById("target");
target.insertAdjacentElement("afterend", time);

// text centering
document.body.style.textAlign = "center";

document.getElementById("lists").style.listStyle = "none";

// chaging color of time text every 1 second

setInterval(() => {
  let index = Math.floor(Math.random() * colors.length);
  time.style.backgroundColor = colors[index];
  time.style.padding = "10px";
  time.textContent = date.toLocaleTimeString();
}, 1000);

const challenges = document.querySelectorAll("li");
console.log(challenges);

challenges.forEach((challenge) => {
  challenge.style.padding = "10px";
  challenge.style.margin = "5px";
  if (challenge.textContent.toLowerCase().includes("Done".toLowerCase())) {
    challenge.style.backgroundColor = "green";
  } else if (
    challenge.textContent.toLowerCase().includes("Ongoing".toLowerCase())
  ) {
    challenge.style.backgroundColor = "yellow";
  } else {
    challenge.style.backgroundColor = "red";
  }
});
