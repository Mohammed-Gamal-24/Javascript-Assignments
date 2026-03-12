let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero => Map + Reduce
// Join & Filter => (Forbidden)

// let result = mix.map(function(element){
//   return isNaN(element) ? element : "";
// }).reduce(function(acc, curr) {
//   // return `${acc}${curr}`
//   return acc + curr
// })

// arrow functions
let result = mix
  .map(element => isNaN(element) ? element : "")
  .reduce((acc, curr) => acc + curr)

console.log(result)