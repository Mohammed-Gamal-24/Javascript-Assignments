let lis = document.querySelectorAll("ul li")
let exp = document.querySelector(".experiment")


// window.localStorage.clear()

// if (window.localStorage.getItem("color")) {
if (window.localStorage.color) {
    // exp.style.backgroundColor = window.localStorage.color
    exp.style.backgroundColor = window.localStorage.color // غيره للون اللي متخزن في localStorage
    lis.forEach((li) => {
        li.classList.remove("active")
    })
    document.querySelector(`[data-color=${window.localStorage.color}]`).classList.add("active")

} else {
    console.log("No")
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataset.color)
        lis.forEach((li) => {
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        // add the color to local Storage
        window.localStorage.setItem("color", e.currentTarget.dataset.color)
        exp.style.backgroundColor = window.localStorage.color
    })
})