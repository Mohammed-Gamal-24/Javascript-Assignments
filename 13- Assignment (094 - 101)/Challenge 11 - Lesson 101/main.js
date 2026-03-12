document.body.style.cssText = `
    font-family: arial;
    background-color: #ececec;
    margin: 0;
`;

/* Header */
let header = document.createElement("header")
header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: #ffffff;
`

let logo = document.createElement("div")
logo.className = "Logo"
logo.textContent = "Elzero"
logo.style.color = "#23a96e"
logo.style.fontWeight = "bold"
logo.style.fontSize = "1.2rem"

let menu = document.createElement("ul")
menu.className = "Menu"
menu.style.cssText = `
    list-style: none;
    display: flex;
    gap: 15px;
    color: #a7a7a7;
`

/* Separator */

let menuItemOne = document.createElement("li")
menuItemOne.className = "Menu-Item-1"
menuItemOne.textContent = "Home"

// let textItemOne = document.createTextNode("Home")
// menuItemOne.appendChild(textItemOne)

let menuItemTwo = document.createElement("li")
menuItemTwo.className = "Menu-Item-2"
menuItemTwo.textContent = "About"

let menuItemThree = document.createElement("li")
menuItemThree.className = "Menu-Item-3"
menuItemThree.textContent = "Service" 

let menuItemFour = document.createElement("li")
menuItemFour.className = "Menu-Item-4"
menuItemFour.textContent = "Contact"

/* Separator */

menu.append(menuItemOne, menuItemTwo, menuItemThree, menuItemFour)

header.appendChild(logo)

header.appendChild(menu)

document.body.appendChild(header)

/* body */
let content = document.createElement("div")
content.className = "Content"
content.style.cssText = `
    display: flex;
    justify-content: space-evenly;
    row-gap: 15px;
    flex-wrap: wrap;
    padding: 20px 0;
`

let j = 1
for (let i = 0; i < 15; i++) {
    let product = document.createElement("div")
    product.className = "product"
    product.style.cssText = `
        flex-basis: 31%;
        text-align: center;
        padding: 15px 0;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `
    let spanNumber = document.createElement("span")
    spanNumber.textContent = `${j}` 
    spanNumber.style.cssText = `
        font-size: 1.3rem
    `
    let spanText = document.createElement("span")
    spanText.textContent = `Product`
    spanText.style.cssText = `
        color: #a7a7a7;
    `
    product.append(spanNumber, spanText)
    content.append(product)
    j++
}
document.body.appendChild(content)

/* Footer */
let footer = document.createElement("footer")
footer.textContent = "Copyright 2021"
footer.style.cssText = `
    background-color: #23a96e;
    color: white;
    display: flex;
    justify-content: center;
    padding: 15px;
`
document.body.appendChild(footer)