const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const studentJSON = JSON.stringify(student, undefined, 2);
console.log(studentJSON);

const filteredStudent = JSON.stringify(
  student,
  ["firstName", "lastName", "skills"],
  2
);
console.log(filteredStudent);
