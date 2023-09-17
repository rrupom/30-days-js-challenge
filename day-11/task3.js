const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertedArrayToObject(students) {
  const newStudents = [];

  for (const [name, skills, scores] of students) {
    newStudents.push({
      name,
      skills,
      scores,
    });
  }

  return newStudents;
}

console.log(convertedArrayToObject(students));
