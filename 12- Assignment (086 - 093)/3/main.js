// let usd = document.getElementsByClassName("result")[0].textContent[1]
// let egyLe = document.getElementsByClassName("result")[0].textContent[18]

// let mainInput = document.getElementsByName("dollar")[0]
let mainInput = document.querySelector("[name='dollar']")
// let mainDiv = document.querySelector("[class='result']")
let mainDiv = document.querySelector(".result")


// mainInput.oninput = function() {
//   let usd = mainInput.value
//   let egp = usd * 47.51;
//   mainDiv.textContent =`{${usd}} USD Dollar = {${egp.toFixed(2)}} Egyptian Pound`
// }

mainInput.oninput = function() {
  mainDiv.textContent = `{${mainInput.value}} USD Dollar = {${(mainInput.value * 47.50).toFixed(2)}} Egyptian Pound`
} 