// ========== How To turn an Object To Map ==========
// Syntax => let map = new Map(Object.entries(object))

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let result = new Map(Object.entries(myInfo))
console.log(result)
console.log(result.size)
console.log(result.has("role"))

// ========== Separator ==========
// let result = new Map([
//   ["username", "Osama"],
//   ["role", "Admin"],
//   ["country", "Egypt"]
// ])
// console.log(result)