let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * ++[true][0]); // 6

// Soultion Three
console.log(num * num - num); // 6

// Soultion Four
console.log(num * num - "---".length); // 6

// Solution Five
console.log(num + (+true + +true + +true)); // 6

// Solution Six
console.log(num * -~true); // 6

// Solution Seven
console.log(num * Math.abs(~true)); // 6