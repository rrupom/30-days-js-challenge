const doSomething = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["html", "css", "js"];
    if (skills.includes("node")) {
      resolve(skills);
    } else {
      reject("Something is wrong with");
    }
  }, 2000);
});

doSomething
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
