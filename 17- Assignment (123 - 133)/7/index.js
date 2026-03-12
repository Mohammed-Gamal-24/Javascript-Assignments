let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
// => [1, 2, 3, 4, 5, 6]

let wayOne = ([...numsOne, ...numsTwo])
  console.log(wayOne)

  // ========== Separator ==========
let wayTwo = [...numsOne] // مصفوفة بداخل قيمة مصفوفة اخرى 
wayTwo.push(...numsTwo)
  console.log(wayTwo)

  // ========== Separator ==========
let wayThree = []
  for (let i = 0; i < numsOne.length; i++) {
    wayThree.push(numsOne[i])
  }
  for (let i = 0; i < numsTwo.length; i++) {
    wayThree.push(numsTwo[i])
  }
  console.log(wayThree)
  
  // ========== Separator ==========
let concat = numsOne.concat(numsTwo)
  console.log(concat)
  
  // ========== Separator ==========
let flat = [numsOne, numsTwo].flat()
  console.log(flat)

  // ========== Separator ==========
let reduce = [numsOne, numsTwo].reduce((acc, curr) => acc.concat(curr))
  console.log(reduce)