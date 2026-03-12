let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  // Wanted Output => arr = [1, 4, 5, 6, 5, 6, 7, 8]

arr.copyWithin(1, 3, 6)
console.log(arr)