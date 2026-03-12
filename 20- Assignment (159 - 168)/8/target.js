import * as modOne from "./module.js"; // باسمائها المستوردة فقط 
import calc, { numOne, numTwo, numThree } from './module.js'

// const {a: numOne, b: numTwo, c: numThree} = modOne; // destructuring with alias
// Alias => اسم مستعار

console.log(modOne.numOne)
console.log(modOne.numTwo)
console.log(modOne.numThree)
console.log(modOne.default(1, 2, 3))
console.log(calc(1, 2, 3))

console.log(calc(numOne, numTwo, numThree)); // 60
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60