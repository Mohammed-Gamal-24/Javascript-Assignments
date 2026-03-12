// let elzero = document.querySelector("div").lastChild.trim() // Error => عقدة نصية (Text Node)

// let elzero = document.querySelector("div").lastChild.textContent.trim()
// console.log(elzero)

let elzero = document.querySelector("div").lastChild.nodeValue.trim();
console.log(elzero);

/*
    .textContent → نستخدمها مع العناصر (elements).
    .nodeValue أو .data → نستخدمها مع العقد النصية (text nodes).
*/