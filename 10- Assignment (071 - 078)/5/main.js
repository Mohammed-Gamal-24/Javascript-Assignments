let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
// reduce
// initial value = 1

// Challenge – Reduce Only (Even × / Odd +)

let solution = nums
  .reduce(function (acc, currEleValu) {
    // return acc + currEleValu
    return (currEleValu % 2 !== 0 ? acc + currEleValu : acc * currEleValu)
  }, 1)

console.log(solution)