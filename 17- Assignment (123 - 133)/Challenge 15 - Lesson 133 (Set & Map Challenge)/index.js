let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// numbers - Boolean - Arrays Indexes - Loops - Higher Order Functions 
// Needed Output => 210
// we can use Length for only one time and * , set, spread operator

// 3 * 70 = 210 => Number
console.log(Math.max(...n1) * [...n1, ...n2].length)
console.log(typeof(Math.max(...n1) * [...n1, ...n2].length))