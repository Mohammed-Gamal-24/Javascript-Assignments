/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
function showDetails(username, age , status) {

  let result = [username, age , status]
  for (let i = 0; i < result.length; i++) {
    if (typeof(result[i]) === "string") {
      username = result[i];
    }
    else if (typeof(result[i]) === "number") {
      age = result[i];
    }
    else if (typeof(result[i]) === "boolean") {
      status = result[i];
      if (status === true) {
      status = "Available";
      }
      else {status = "Unavailable";}
      // else if (status === false) {
      // status = "Unavailable";
      // }
    }
  }
  console.log(`Hello ${username}, Your age Is ${age}, You Are ${status} For Hire`)
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// 

console.log(`______________________`)

function showDetails(username, age , status) {

  let result = [username, age , status]
  for (let i = 0; i < result.length; i++) {
    typeof(result[i]) === "string" ? username = result[i] : ""
    typeof(result[i]) === "number" ? age = result[i] : "" 
    typeof(result[i]) === "boolean"
    ? (status = result[i] ? "Available" : "Unavailable")
    : ""
  }
  console.log(`Hello ${username}, Your age Is ${age}, You Are ${status} For Hire`)
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"