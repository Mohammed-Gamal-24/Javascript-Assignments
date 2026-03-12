let userMap = new Map([
  ["name", "Ahmed"],
  ["age", 25],
  ["country", "Egypt"]
]);

let result = Object.fromEntries(userMap)
console.log(result)
console.log(typeof result)
console.log(result.name) // Value of the first element