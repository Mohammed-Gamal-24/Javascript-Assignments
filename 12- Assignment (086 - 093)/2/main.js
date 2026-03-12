let images = document.getElementsByTagName("img")
for (let i = 0; i < images.length; i++) {
    images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    images[i].alt = "Elzero Logo"
    // or    
        // images[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
        // images[i].setAttribute("alt", "Elzero Logo")
    images[i].style = "background-color: blue; margin-bottom: 10px; padding: 10px; border-radius: 10px";
}