function createSelectBox(startYear, endYear) {

  document.write(`<label>Choose your date of Birth: <select>`)
    for (let i = startYear; i<= endYear ;i++) {
      document.write(`<option value="${i}">${i}</option>`)
    }
  document.write(`</select></label>`)
}

createSelectBox(2000, 2021);

// 

// function createSelectBox(startYear, endYear) {
//   // اعمل عنصر select
//   let selectBox = document.createElement("select");

//   // اعمل loop على السنين
//   for (let i = startYear; i <= endYear; i++) {
//     selectBox.innerHTML += `<option>${i}</option>`;
//   }

//   // ضيف الـ select للصفحة
//   document.body.appendChild(selectBox);
// }

// createSelectBox(2000, 2021);
