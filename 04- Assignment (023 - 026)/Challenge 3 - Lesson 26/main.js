/*
  Number Challenge 26
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log();
console.log(parseInt(Math.min(a, b, c, d))); // 2
console.log(Math.trunc(Math.min(a, b, c, d))); // 2
console.log(Math.floor(Math.min(a, b, c, d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(); // 10000
console.log((a ** parseInt(d))) // 1000
console.log((Math.pow(a, parseInt(d)))) // 1000
console.log(Math.trunc(d) * Math.pow(a, 2) / Math.abs(~true)) // 10000
console.log(Math.pow(a, 2)) // 10000
console.log(Math.sqrt(a ** 4)) // 10000
console.log(Math.sqrt(Math.pow(a, 4)))
console.log(Math.pow(a, Math.abs(~true))) // 10000
console.log(Math.trunc(d) * Math.pow(a, 2) / Math.trunc(d)) // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d)) // 2
console.log(Math.floor(d)) // 2
console.log(Math.trunc(d)) // 2
console.log(Math.floor(d)) // 2

/*
let b = 2_00.5;
let d = 2.4;
*/

// Use Variables b + d To Get This Valus
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Number((parseInt(b) / Math.ceil(d)).toFixed(2))); // 66.67 => Number
console.log(); // 67 => Number

console.log(Math.round((parseInt(b) / Math.ceil(d)).toFixed(2))); // 67 Number
console.log(Math.ceil(parseInt(b) / Math.ceil(d))); // 67 Number
console.log(Number((parseInt(b) / Math.ceil(d)).toFixed(0))); // 67 Number
// toFixed(0) مش هيهحط ولا رقم بعد العلامة العشرية

