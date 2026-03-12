let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

// filter + map

let solution = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele))
  })
  .map(function (ele) {
    return -ele
  })

console.log(solution)