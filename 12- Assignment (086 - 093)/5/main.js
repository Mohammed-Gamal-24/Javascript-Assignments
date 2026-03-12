/*
<img decoding="async" src="#" alt="One" />
<img decoding="async" src="#" />
<img decoding="async" src="#" alt="Three" />
<img decoding="async" src="#" />
<img decoding="async" src="#" />

// Output
<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Old" />
<img decoding="async" src="#" alt="Elzero New" />
<img decoding="async" src="#" alt="Elzero New" />
*/


let images = document.querySelectorAll("img")

    console.log(images[i].getAttribute("alt"))

for (let i = 0; i < images.length ;i++) {
    // if (images[i].attributes.alt.value !== "") {
    if (images[i].hasAttribute("alt")) {
        images[i].setAttribute("alt", "Old")
    }
    else {
        images[i].setAttribute("alt", "Elzero New")
    }
}

// images[i].getAttribute("alt") !== null