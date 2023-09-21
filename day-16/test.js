function add() {
  console.log("add function", arguments.callee.caller);
  return 2 + 3;
}

function addThree() {
  //   console.log("add three fucntion", this);
  return add() + 4;
}

console.log(addThree());
