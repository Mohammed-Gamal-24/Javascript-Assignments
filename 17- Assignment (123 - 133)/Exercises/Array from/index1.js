let str = "A1B2C3D4";
// Wanted => ["A", "B", "D"]

// let result = Array.from(str).filter(function (e) {
//   return isNaN(e)
// })

// let result = Array.from(str).filter((e) => isNaN(e))

let result = Array.from(str, ((e) => isNaN(e) ? e : null))
let mapped = result.filter(Boolean) // only true
console.log(mapped)

// let result = Array.from(str, (e) => isNaN(e) ? e : null)
// console.log(result)