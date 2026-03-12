let ages = [12, 18, 25, 30];
//  to check if there number less than 18

let check = ages.some((e) => e < 18)

// Another Solution

let checkNumber = ages[1]
let check2 = ages.some( function (e) {
  return e < this
}, checkNumber)
console.log(check2)
console.log(check)