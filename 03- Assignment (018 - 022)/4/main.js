let points = 10;

// Write Your Code Here
console.log(--points - +true); // 8
console.log(--points - "-".length); // 8
console.log(points - -~true); // 8
console.log(--points - ~~true); // 8

// Write Your Code Here
console.log(++points + -~true); // 13
console.log(++points + ++[true][0]); // 13
console.log(++points + (true + true)); // 13
console.log(++points + Math.abs(~true)) // 13
console.log(points + "***".length) // 13
