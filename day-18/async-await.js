const square = async function (n) {
  return n * n;
};

async function main() {
  const value = await square(3);
  console.log(value);
}

main();
