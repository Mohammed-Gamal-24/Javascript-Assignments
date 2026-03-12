let input = document.querySelector(".name")

// input.addEventListener("blur", () => {
//     window.sessionStorage.setItem("name", input.value)
// })

if (window.sessionStorage.getItem("name")) {
    input.value = window.sessionStorage.getItem("name")
}

input.addEventListener("blur", function() {
    window.sessionStorage.setItem("name", this.value)
})