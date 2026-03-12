let div = document.querySelector("div")

function countDown() {
    div.textContent -= 1
    if (div.innerHTML === "0") {
        // div.textContent = "Fuck you"
        clearInterval(counter)
    }
}

let counter = setInterval(countDown, 1000)