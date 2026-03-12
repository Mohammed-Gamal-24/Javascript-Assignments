let number = document.querySelector("[type='number']")
let text = document.querySelector("[type='text']")
let select = document.querySelector("select")
let submitBtn = document.querySelector("[type='submit']")
let results = document.querySelector(".results")

results.style.cssText = `
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 100%;
`

/*

// Output
النتيجة المطلوبة داخل ال results div هي كالتالي حسب العدد الذي إخترته وحسب نوع العنصر

<div class="box" title="Element" id="id-1">Hello</div>
<div class="box" title="Element" id="id-2">Hello</div>
<div class="box" title="Element" id="id-3">Hello</div>
*/

submitBtn.onclick = function (e) {
  e.preventDefault(); // منع الفورم من إعادة التحميل
  results.innerHTML = ""; // امسح كل اللي قبل كدا
  for (let i = 0; i < Number(number.value) ; i++) {
    let myElements = document.createElement(select.value.toLowerCase())
    myElements.className = "box"
    myElements.title = "Element"
    myElements.id = `id-${i + +true}`
    myElements.style.cssText = `
    color: white;
    background-color: #F44336;
    text-align: center;
    padding: 10px 0;
    border-radius: 5px;
    width: 200px;
    `;

    let resultText = document.createTextNode(text.value)
    
    myElements.appendChild(resultText)
    results.appendChild(myElements)
  }
}
// document.body.results.appendChild(myElements.repeat(number.value))
  // submitBtn.onblur = function () {
    //   // e.preventDefault();
    
    //   myElements.style.cssText = `
    //     display: none;
//   `
// }

// /*




// //

// /*
// //  <div class="results"></div>
// let divOne = document.querySelector("div")
// // divOne.removeAttribute("class")
// */

// /*

// //  <div class="results"></div>
// let divOne = document.querySelector("div")

// // Directly
// divOne.className = "Directly"
// console.log(divOne.getAttribute("class"))  // Directly

// // Change Attributes With Methods
// divOne.setAttribute("class", "SetAttribute")

// console.log(divOne.getAttribute("class")) // SetAttribute

// */