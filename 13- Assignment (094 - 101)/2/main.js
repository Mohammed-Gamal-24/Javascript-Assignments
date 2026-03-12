let addInput = document.querySelector("input.classes-to-add")
let removeInput = document.querySelector("input.classes-to-remove")
let Current = document.querySelector("[title='Current']")
let Showsection = document.querySelector("[class='classes-list']").lastElementChild
let span = document.createElement("span")

// window.onload = function () {
//     addInput.focus()
//     section.innerHTML = "No Classes To Show"

// }

// addInput.onblur = function () {
//     let firstInputValue = addInput.value.trim();
//     if (firstInputValue !== "") {
//         Current.classList.add(firstInputValue)
//     }

//     section.append(firstInputValue)
//     // section.textContent += `${added  Value} `
//     // firstInputValue = ""
//     if (Current.classList.length === 2) {
//         let noClasses = document.createElement("div.noClasses")
//         noClasses.textContent = "No Classes To Show"
//         section.appendChild(noClasses)
//     }
// }

// removeInput.onblur = function () {
//     let secondInputValue = removeInput.value
//     Current.classList.remove(secondInputValue.toLowerCase())
//     section.remove(secondInputValue.toLowerCase())
// }


// =============== AI Solution ===============

window.onload = function () {
  addInput.focus();
};

// 🟩 لما نضيف كلاس
addInput.onblur = function () {
  let addedValue = addInput.value.trim(); // نشيل المسافات

  if (addedValue !== "") {
    // نضيف الكلاس
    Current.classList.add(addedValue);

    // نحذف رسالة "No Classes To Show" لو كانت موجودة
    let msg = Showsection.querySelector(".noClasses");
    if (msg) msg.remove();

    // نعرض الكلاس الجديد
    let span = document.createElement("span");
    span.textContent = addedValue;
    Showsection.appendChild(span);

    // نفرغ الخانة بعد الإضافة
    addInput.value = "";
  }
};

// 🟥 لما نحذف كلاس
removeInput.onblur = function () {
  let removedValue = removeInput.value.trim();

  if (removedValue !== "") {
    // نحذف الكلاس من العنصر
    Current.classList.remove(removedValue);

    // نحذف اسمه من القائمة المعروضة
    let spans = Showsection.querySelectorAll("span");
    spans.forEach(span => {
      if (span.textContent === removedValue) span.remove();
    });

    // لو مفيش أي كلاس في العنصر بعد الحذف
    if (Current.classList.length === 0) {
      let msg = document.createElement("div");
      msg.className = "noClasses";
      msg.textContent = "No Classes To Show";
      Showsection.appendChild(msg);
    }

    // نفرغ الخانة بعد الحذف
    removeInput.value = "";
  }
};
