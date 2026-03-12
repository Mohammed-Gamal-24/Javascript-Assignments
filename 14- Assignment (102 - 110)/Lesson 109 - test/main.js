let btn = document.querySelector("button")
let popUp = window.open("", "Message", "width=300,height=300,left=300,top=150")

function openNewWindow() {
  popUp = window.open("", "Message", "width=250,height=250,left=300,top=150")
  popUp.document.write("بتدوس على ايه ي خول")
}

btn.addEventListener("click", openNewWindow)
