/*
    String Challenge
    All Solutions Must Be In One Chain
    You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
// console.log(a.slice(2, charAt(6)));
console.log(a.charAt(2).toLocaleUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(); // HHHHHHHH
console.log(a.substr(-4, 1).toLocaleUpperCase().repeat(8));

// Return Array
console.log(); // ["Elzero"]
console.log(a.split(" Web School", 1))

// Use Only "substr" Method + Template Literals In Your Solution
console.log(); // Elzero School
console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`);
console.log(a.substr(0, 6) + " " + a.substr(-6, 6));

// Solution Must Be Dynamic Because String May Changes
console.log(); // eLZERO WEB SCHOOl
console.log(a[0].toLowerCase() + a.slice(1, -1).toUpperCase() + a.charAt(a.length - 1).toLowerCase());
console.log(`${a[0].toLowerCase()}${a.slice(1, -1).toUpperCase()}${a.charAt(a.length - 1).toLowerCase()}`);