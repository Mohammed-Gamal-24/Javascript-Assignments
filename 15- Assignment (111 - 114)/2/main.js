let inputs = document.querySelectorAll("input")
let select = document.querySelector("select")


if (window.sessionStorage.getItem("name") || window.sessionStorage.getItem("age") || window.sessionStorage.getItem("email") || window.sessionStorage.getItem("country")) {
  inputs[0].value = sessionStorage.getItem("name")
  inputs[1].value = sessionStorage.getItem("age")
  inputs[2].value = sessionStorage.getItem("email")
  select.value = sessionStorage.getItem("country")
}

inputs.forEach((input) => {
  input.addEventListener("change", function () {
    if (input.name === "name") {
      window.sessionStorage.setItem("name", this.value)
    }
    if (input.name === "age") {
      window.sessionStorage.setItem("age", this.value)
    }
    if (input.name === "email") {
      window.sessionStorage.setItem("email", this.value)
    }
  })
})

select.onchange = function () {
  window.sessionStorage.setItem("country", select.value)
}