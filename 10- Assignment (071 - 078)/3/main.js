let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero


let result = myArray.flat().join("")

// let result = myArray.reduce(function (acc, currEleValu) {
//   return acc + (Array.isArray(currEleValu) ? currEleValu.join("") : currEleValu)
// })

console.log(result)