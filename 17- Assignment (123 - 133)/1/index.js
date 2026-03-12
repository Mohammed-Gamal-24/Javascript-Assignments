// Needed Output
// Set(3) {10, 20, 2}
// 2

// let setOfNumbers = new Set([10])
let setOfNumbers = new Set().add(10)
setOfNumbers.add(20).add(setOfNumbers.size)
// setOfNumbers.add(setOfNumbers.size)
console.log(setOfNumbers)

// let iterator = setOfNumbers.values()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next()) // => 

// to access the last element in Set => First of all we have to turn it into an array

console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1])
//or
// console.log([...setOfNumbers][setOfNumbers.size - 1])
// or
// console.log([...setOfNumbers].pop())