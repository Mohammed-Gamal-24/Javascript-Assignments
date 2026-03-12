// <div class="our-element">Our Element</div>

let parag = document.getElementsByTagName("p")[0]
parag.remove();


let div = document.querySelector("div.our-element")

// ============ Creation ============

// (1)
/* 
<div class="start" title="Start Element" data-value="Start">Start</div>
*/
let start = document.createElement("div")
start.className = "start"
start.title = "Start Element"
start.textContent = "Start"
start.setAttribute("data-value", "Start") // simple Technique

/*
let attr = document.createAttribute("data-value")
attr.value = "Start"
start.setAttributeNode(attr) // أضافة الاتربيوت للعنصر
*/

div.before(start)

// (2)
/*
// <div class="end" title="End Element" data-value="End">End</div>
*/
let end = document.createElement("div")
end.className = "end"
end.title = "End Element"
end.textContent = "End"
// end.setAttribute("data-value", "End")
/*
let endAttr = document.createAttribute("data-value")
endAttr.value = "End"
end.setAttributeNode(endAttr)
*/

div.after(end)

