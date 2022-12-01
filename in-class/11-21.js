/* In class November 21 */

const teacherNames = ["Matina", "Jamal"];

teacherNames.forEach((name, index) => {
  console.log(`teacher at index ${index} is ${name}`);
});

const printTeacher = (name, index) => {
  console.log(`teacher at index ${index} is ${name}`);
};

teacherNames.forEach(printTeacher);

const studentGrades = [50, 50, 60, 10];
const curvedGrades = studentGrades.map((grade) => {
  return grade + 40;
});
console.log(curvedGrades);
