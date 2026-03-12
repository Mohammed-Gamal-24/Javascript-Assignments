let prompt = window.prompt("Print Number From – To", "Example: 5-20")

// promptValue = prompt.split("-").sort( function (a, b) {
//     return a - b
// })

// promptValue = prompt.split("-").sort((a, b) => a - b)
promptValue = prompt.split("-").map(Number).sort((a, b) => a - b) // Arrow Function

for (let i = Math.min(...promptValue); i <= Math.max(...promptValue) ; i++) {
    let output = document.createElement("div") // عنصر جديد في كل مرة
    output.textContent = `${i}` // قيمة العنصر الجديد
    document.body.append(output) // اضافة العنصر الجديد في كل مرة للصفحة
}

console.log(promptValue) // => For testing

/*
let test = [5, 10, 15, 20, 30, 40]

let min = Math.min(...test)
let max = Math.max(...test)

console.log(min) // => 5
console.log(max) // => 40
*/