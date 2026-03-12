/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// Arrow function
let names = function (...challenges) {
  // challenges.length 
  return `String [${challenges.join("], [")}] => Done !`;
}

// Arrow Function
// let namesArrow = (...challenges) => `String [${challenges.join("], [")}] => Done !`;

// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// console.log(namesArrow("Osama", "Mohamed", "Ali", "Ibrahim"));

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output


// let calc = (one, two, ...nums) => myNumbers.pop();
// let calc = (one, two, ...nums) => "???";

// let myNumbers = [20, 50, 10, 60];

// // let calc = (one, two, ...nums) => (myNumbers.shift() + myNumbers.pop())

// let calc = function (one, two, ...nums) {
//   return (myNumbers.shift() + myNumbers.pop())
// }


// console.log(calc(10, myNumbers[true], "???")); // 80

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + +nums
// 
// let calc = function (one, two, ...nums) {
//   return (myNumbers.shift() + myNumbers.pop())
// }


console.log(calc(20, 50, 10)); // 80