let theName = "Elzero";

// Needed Output => ['E', 'l', 'z', 'e', 'r', 'o']

  // ========== Way 1 ==========
let wayOne = Array.from(theName)
console.log(wayOne)

  // ========== Way 2 ==========
let wayTwo = theName.split("")
console.log(wayTwo)

  // ========== Way 3 ==========
let wayThree = []
for (let i = 0; i < theName.length; i++) {
  wayThree.push(theName[i])
}
console.log(wayThree)

  // ========== Way 4 ==========
let wayFour = Object.values(theName)
console.log(wayFour)

// ========== Way 5 ==========
let wayFive = [...theName]
console.log(wayFive)
