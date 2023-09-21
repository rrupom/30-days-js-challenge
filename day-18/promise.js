const doSomething = new Promise((resolve, reject) => {
  setTimeout(() => {
    let skills = ["html", "css", "js"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

doSomething
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
