let selects = document.querySelectorAll("select")
let p = document.querySelector("p")

/*
p.style.fontFamily = "open sans"
p.style.color = "red"
p.style.fontSize = "16px"
*/

if (window.localStorage.getItem("font-family") || window.localStorage.getItem("color") || window.localStorage.getItem("font-size")) {
    selects[0].value = `${window.localStorage.getItem("font-family")}`;
    selects[1].value = `${window.localStorage.getItem("color")}`;
    selects[2].value = parseInt(window.localStorage.getItem("font-size"));
    p.style.cssText= `
    font-family: ${window.localStorage.getItem("font-family")};
    color: ${window.localStorage.getItem("color")};
    font-size: ${window.localStorage.getItem("font-size")};
    `
}

selects.forEach((select) => {
    select.addEventListener("change", function () {
        if (this.name === "font-family") {
            p.style.fontFamily = this.value
            window.localStorage.setItem("font-family", this.value)
        }
        if (this.name === "color") {
            p.style.color = this.value
            window.localStorage.setItem("color", this.value)
        }
        if (this.name === "font-size") {
            // p.style.fontSize = `${this.value}px`
            p.style.fontSize = this.value + "px"
            window.localStorage.setItem("font-size", `${this.value}px`)
        }
    })
})