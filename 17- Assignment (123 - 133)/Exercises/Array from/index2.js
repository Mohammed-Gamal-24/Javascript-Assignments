let str = "mmmmaaarrrkkk";
// Wanted => ["m", "a", "r", "k"]

let result = new Set(str)
// console.log(result)
console.log(Array.from(result))