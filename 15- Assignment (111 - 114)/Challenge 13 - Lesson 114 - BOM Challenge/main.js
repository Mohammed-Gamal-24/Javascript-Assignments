let text = document.querySelector('[type="text"]')
let add = document.querySelector(".add")
let tasks = document.querySelector(".tasks")
let localArray = []

if (window.localStorage.getItem("Items")) {
    localArray = window.localStorage.getItem("Items").split(","); // نحول النص لمصفوفة
    localArray.forEach(item => creation(item)); // نعرض كل عنصر
}

add.addEventListener("click", (e) => {
    e.preventDefault();
    if (!text.value) return;

    creation(text.value);        // نضيفه للصفحة
    localArray.push(text.value); // نضيفه للمصفوفة
    window.localStorage.setItem("Items", localArray); // نخزن المصفوفة كنص مفصول بفواصل
    text.value = "";
});

function creation(value) { // Parameter
    let newItem = document.createElement("div");
    let deleteBtn = document.createElement("button")
    // newItem.textContent = window.localStorage.getItem
    newItem.textContent = text.value
    newItem.className = "task"
    tasks.append(newItem)
    newItem.style.cssText = `
        background-color: white;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    newItem.append(deleteBtn)
    deleteBtn.textContent = "Delete"
    deleteBtn.style.cssText = `
        background-color: red;
        color: white;
        border-radius: 5px;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
    `
    deleteBtn.addEventListener("click", function () {
        let index = localArray.indexOf(value); // نحدد موقع العنصر
        if (index !== -1) { // (index > -1) 
            localArray.splice(index, 1); // نحذفه من المصفوفة
        }
        window.localStorage.setItem("Items", localArray); // نحدث التخزين
        this.parentElement.remove(); // نحذفه من الصفحة
    });
}