const throwErrorExampleFun = () => {
  let message;
  let x = 12;
  try {
    if (x == "") throw "Empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10 && x < 11) throw "too high";
    else throw new Error("My name is rakib");
  } catch (err) {
    console.log(err.message);
  }
};

throwErrorExampleFun();
