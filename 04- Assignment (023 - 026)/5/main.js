let num = 10;

console.log((Number.isInteger(num)) + true); // 2
console.log(Number.isInteger(num) + !!num); // 2
// !!num => يحول أي قيمة ل1
// !![] => 1
console.log(Number.isInteger(num) + "a".length); // 2
