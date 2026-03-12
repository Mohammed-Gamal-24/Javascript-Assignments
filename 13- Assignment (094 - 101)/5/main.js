// this.addEventListener("click", function () {
//     console.log(`This Is ${this.tagName}`)
// })

document.body.addEventListener("click", function (e) {
    console.log(`This Is ${e.target.tagName}`)
    // console.log(`This Is ${e.target.tagName.toLowerCase()}`)
})