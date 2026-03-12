let mainDiv = document.createElement("div")
mainDiv.className = "popUp"
mainDiv.style.cssText = `
    font-family: arial, sans-serif;
    background-color: rgb(237 237 237);
    text-align: center;
    width: 500px;
    margin: 50px auto;
    padding: 15px 0;
    border: 1px solid #0000007a;
    position: relative;
    display: none
`

    let h = document.createElement("h3")
    h.className = "heading"

    let p = document.createElement("p")
    p.className = "text"

    let x = document.createElement("span")
    x.className = "close"

    h.textContent = "Welcome"
    p.textContent = "Welcome To Elzero Web School"
    x.textContent = "x"
    x.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: absolute;
    top: -13px;
    right: -13px;
    width: 26px;
    height: 26px;
    color: white;
    border-radius: 50%;
    cursor: pointer
    `
mainDiv.append(h, p, x)
document.body.appendChild(mainDiv)

function show() {
    mainDiv.style.display = "block"
}

// function remove() {
//     mainDiv.style.display = "none"
// }

setTimeout(show, 5000)

// x.addEventListener("click", remove)

x.addEventListener("click", () => mainDiv.remove())