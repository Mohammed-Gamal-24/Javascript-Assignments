let div = document.querySelector("div")

function countDown() {
    // div.textContent -= 1
    div.textContent--;
    if (div.textContent == 5) {
        window.open("https://elzero.org/", "_blank", "width=400,height=400,left=400,top=100")
    }
    else if (div.textContent == 0) {
        clearInterval(counter)
        div.textContent = "اقفل الصفحة ي عشوائي"
    }
}

let counter = setInterval(countDown, 1000)