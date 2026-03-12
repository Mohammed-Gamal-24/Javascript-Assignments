/*
<div class="one" title="two">Two</div>
<div class="two" title="one">One</div>

// Output
<div class="one" title="one">One</div>
<div class="two" title="two">Two 2</div>
*/

let one = document.querySelector(".one")
let two = document.querySelector(".two")

one.setAttribute("title", one.attributes.class.value)
two.setAttribute("title", two.attributes.class.value)

let contextTwo = one.textContent // Two

one.textContent = two.textContent
two.textContent = `${contextTwo} ${document.body.querySelectorAll("div").length}`