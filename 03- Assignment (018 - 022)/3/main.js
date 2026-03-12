let num = "10";

// Solution One
console.log(+num + +num) // 20

// Solution Two
console.log(+num * (+true + +true)); // 20

// Solution Three
console.log(+num + (+true * +num)) // 20

// Solution Four
console.log(+num * "--".length) // 20

// Solution Five
console.log(+num * ++[true][0]) // 20 

// Solution Six
console.log(+num * -~true); // 20

// Solution Seven
console.log(+num * Math.abs(~true)); // 20