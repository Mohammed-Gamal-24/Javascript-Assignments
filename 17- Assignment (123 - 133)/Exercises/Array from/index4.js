let nums = [2, 4, 6, 8];
// Wanted => [1, 2, 3, 4]

let result = Array.from(nums, (e) => e % 2 === 0 ? e / 2 : e * 2)

console.log(result)