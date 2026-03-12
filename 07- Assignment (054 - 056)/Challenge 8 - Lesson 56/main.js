/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar", "Owas", "Soso"];
let adminsCount = myAdmins.indexOf("Stop")
document.write(`<div>We Have ${adminsCount} Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  document.write(`<hr> The Admin For Team ${i + +true} is ${myAdmins[i]}`)
  document.write(`<h3>Team Members:</h3>`)
    let counter = 1;
    for (let j = 0; j < myEmployees.length; j++) {
      if (myEmployees[j].startsWith(myAdmins[i][0])) {
        document.write(`<p> - ${counter} ${myEmployees[j]} </p>`)
        counter++
      }
    }
}