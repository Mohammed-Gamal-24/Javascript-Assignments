let obj = { 0: "A", 1: "B", 2: "C", length: 3 };
// Wanted Output => ["C", "B", "A"]

// let result = Array.from((Object.values(obj).reverse())).filter((e) => isNaN(e))
let result = Object.values(obj).reverse().filter((e) => isNaN(e))
// "Object.values" turns Object into Array  
console.log(result)