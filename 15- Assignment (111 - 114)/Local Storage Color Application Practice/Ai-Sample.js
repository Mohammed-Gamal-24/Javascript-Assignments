/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

const lis = document.querySelectorAll("ul li");
const exp = document.querySelector(".experiment");
const storedColor = localStorage.getItem("color"); // to store the color

// Apply saved color if exists
if (storedColor) {
  exp.style.backgroundColor = storedColor;
  lis.forEach(li => li.classList.remove("active"));
  document.querySelector(`[data-color="${storedColor}"]`).classList.add("active");
}

// Handle click event
lis.forEach(li => li.addEventListener("click", e => {
  const color = e.currentTarget.dataset.color; // the clicked color
  lis.forEach(li => li.classList.remove("active"));
  e.currentTarget.classList.add("active");
  exp.style.backgroundColor = color;
  localStorage.setItem("color", color);
}));
