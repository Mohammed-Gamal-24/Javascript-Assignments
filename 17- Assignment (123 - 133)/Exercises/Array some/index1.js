let numbers = [1, 2, 3, 4, 5];
//  to check if there is a number greater than 3

// let check = numbers.some(function (e) {
//   return e > 3
// })

let check = numbers.some((e) => e > 3)

console.log(check)