/*
  Array Challenge
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.reverse().slice((counter - true)));
// or 
console.log(my.reverse().slice((--counter)));
// or
console.log(my.reverse())
console.log(my.splice(zero, -~true))
console.log(my)
// or
console.log(my.reverse().slice(-~true));
// or 
console.log(my.reverse().slice(my.length / 3));
// or 
let start = my.indexOf("Osama"); // عشان اخزن متغير بقيمة 3
console.log(my.reverse().slice(start)); // استخدام قيمة المتغير

// ______________________________

my = ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.reverse().slice(-counter, counter)) // ["Elham", "Mazero"]

console.log(my.reverse().slice((counter - true)));
console.log(my.reverse().slice(-counter, -true))



// ______________________________

my = ["Elham", "Mazero"];

console.log(`${my[zero].slice(zero, --counter)}${my[++zero].slice(counter)}`)
// "Elzero"

// ______________________________

console.log(); // "rO"

console.log(`${my[1][4]}${my[1][5].toUpperCase()}`) // rO

// my = ["Elham", "Mazero"]
// let zero = 0;
// let counter = 3;
console.log(`${my[my.indexOf("Mazero")][my[zero].length - true]}${my[my.indexOf("Mazero")] [my[zero].length].toUpperCase()}`) // rO




/*

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

*/
console.log(my.reverse().slice((counter - true))); 
// ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(-counter, -true))
my = my.slice(-counter, -true)
// ["Elham", "Mazero"];


console.log(`${my[zero].slice(zero, --counter)}${my[++zero].slice(counter)}`)
// "Elzero"

console.log(`${my[zero][my[zero].length - counter]}${my[zero][my[zero].length - true].toUpperCase()}`) // rO
// rO