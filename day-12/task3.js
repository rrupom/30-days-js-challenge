function is_valid_variaable(variable) {
  const matches = variable.match(/^[0-9]|-+/g);
  if (matches === null) console.log("True");
  else console.log("False");
}

is_valid_variaable("my_name");
is_valid_variaable("my-name");
is_valid_variaable("2ismy");
is_valid_variaable("-mynameis");
is_valid_variaable("_helloRakib");
