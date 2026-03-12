//set
window.localStorage.setItem("color", "red") 
window.localStorage.fontSize = "1.2rem";
window.localStorage["backgroundColor"] = "black"

// get 
console.log(localStorage.getItem("color"))
console.log(localStorage.fontSize)
console.log(localStorage["backgroundColor"])

// Print the item => معرفة اسم مفتاح حسب ترتيبه
  // console.log(window.localStorage.key(index))
  console.log(window.localStorage.key(2))

// Remove One Item from Local Storage
window.localStorage.removeItem("color")

// Remove all Items
// window.localStorage.clear()