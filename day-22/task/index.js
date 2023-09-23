for (let i = 0; i <= 100; i++) {
  let div = document.createElement("div");
  let ans = isPrime(i);
  if (ans) {
    div.style.backgroundColor = "red";
  } else if (i % 2 == 0) {
    div.style.backgroundColor = "green";
  } else {
    div.style.backgroundColor = "yellow";
  }

  div.style.textAlign = "center";
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.display = "inline-block";
  div.style.padding = "10px";
  div.style.margin = "5px";
  div.textContent = i;
  document.body.appendChild(div);
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n == 2 || n == 3) {
    return true;
  }

  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}
