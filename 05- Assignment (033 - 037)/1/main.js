// Test Case 1 -- 009
// Test Case 2 -- let num = 20; // "020"
// Test Case 3 -- let num = 110; // "110"
let num = 94; 
num < 10 ? console.log(`00${num}`) 
: num > 10 && num < 100 ? console.log(`0${num}`) 
: num >= 100 ? console.log(`${num}`) 
: console.log("Unknown")