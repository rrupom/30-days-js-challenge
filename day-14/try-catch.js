try {
  let lastName = "talukder";
  let fullName = firstName + " " + lastName;
} catch (error) {
  console.log("The name of the error : ", error.name);
  console.log("Error message: ", error.message);
} finally {
  console.log("In any case I will be executed");
}
