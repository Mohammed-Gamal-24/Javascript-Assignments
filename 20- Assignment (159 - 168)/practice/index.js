// console.log(Date.parse("1998-02-24"))

// let birthday = new Date(888278400000)
// console.log(birthday)

// let date2 = new Date(1998, 1, 24, 23)
// console.log(date2)



// Separation

// start timing
// let start = new Date()
let start = performance.now()

// operation

// for (let i = 1; i <= 1e5; i++) {
//   let div = document.createElement("div")
//   div.textContent = i
//   document.body.appendChild(div)
// }

// end timing
// let end = new Date()
let end = performance.now()

// duration taken
let duration = end - start

console.log(`Duration Timing: ${end - start} ms`)

performance.mark("A")
performance.mark("B")

console.log(performance.measure("A to B", "A", "B"))