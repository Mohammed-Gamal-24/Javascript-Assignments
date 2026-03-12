let students = [
  {name: "Ali", score: 45},
  {name: "Sara", score: 70},
  {name: "Omar", score: 55}
];
// المطلوب: تحقق إذا في أي طالب راسب (score < 50)
//  to check if there a student failed (their grade less than 50)

let check = students.some((e) => e.score < 50)

console.log(check)