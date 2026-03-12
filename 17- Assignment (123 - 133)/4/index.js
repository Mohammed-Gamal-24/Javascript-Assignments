let theNumber = 100020003000;

// Needed Output => Spread Operator + Set => 123 (Number)

let stepOne = String(theNumber)
console.log(stepOne)

let stepTwo = [...new Set (Array.from(stepOne).sort())];
console.log(stepTwo)

// let noZero = stepTwo.filter(el => el !== "0");
// console.log(noZero)

stepTwo.shift()
console.log(stepTwo)

// console.log(+stepTwo.join(""))

let lastStep = +stepTwo.join("")
console.log(lastStep)

// ========== Separator ==========
// let theNumber = 100020003000;

let resultInOneLine = +[...new Set(Array.from(String(theNumber)).sort())].join("")
console.log(resultInOneLine)
// we don't need to make a function to remove Zero
// => because any number starts with 0 will be deleted automatically as it has no a real value