let divs = document.querySelectorAll("div")
let result = Array.from(divs)
console.log(result)

divs.forEach((div) => console.log(div.textContent))