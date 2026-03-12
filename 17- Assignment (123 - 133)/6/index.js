let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// First Step =>    [10, 15, 6, "A", "B", "C", "D", "E"];
// Needed Output = > ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// ========= Separator =========
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// First Step =>    [20, 10, 15, 6, "A", "B", "C", "D", "E"];
// Needed Output => ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// ========= Separator =========
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// First Step =>    [10, 1, "Z", "Y", "A", "D", "E"];
// Needed Output => ["Z", "Y", "Z", "Y", "A", "D", "E"]

// ========= Separator =========
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// First Step =>    [10, 15, 6, "A", "B", "C", "D", "E"];
// Needed Output => ["A", "B", "C", "A", "B", "C", "D", "E"];

// ========= Separator =========

let str = Array.from(chars.filter((e) => typeof(e) === "string"))
// console.log(str)
let nums = Array.from(chars.filter((e) => typeof(e) === "number"))
// console.log(...nums, `The length is: ${nums.length}`)

let result = [...nums, ...str]
// console.log(...nums, `The length is: ${nums.length}`)

// ========= Separator =========

// Syntax => array.copyWithin(target, start = 0, end = array.length)
console.log(`The first Step is [${result}]`)
console.log(result.copyWithin(0, nums.length, nums.length + nums.length))