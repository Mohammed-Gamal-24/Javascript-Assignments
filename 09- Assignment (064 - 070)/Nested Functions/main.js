function sayMessage(firstName, lastName) {
  let message = `Hello`
  function concatMesgs() { // Nested Function
    message = `${message} ${firstName} ${lastName}`;
  }
  concatMesgs()
  return message 
}
console.log(sayMessage("Mohammed", "Gamal"))

// 

// Example 2 

// function sayMessage(firstName, lastName) {
//   let message = `Hello`
//   function concatMesgs() { // Nested Function
//     return `${message} ${firstName} ${lastName}`;
//   }
//   return concatMesgs() 
// }
// console.log(sayMessage("Mohammed", "Gamal"))

// Example 3

// function sayMessage(firstName, lastName) {
//   let message = `Hello`
//   function concatMesgs() { // Nested Function
//     function getfullName() {
//       return `${firstName} ${lastName}`
//     }
//     return `${message} ${getfullName()}`;
//   }
//   return concatMesgs()
// }
// console.log(sayMessage("Mohammed", "Gamal"))