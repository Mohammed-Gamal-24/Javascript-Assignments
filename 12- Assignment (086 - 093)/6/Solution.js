let number = document.querySelector("[type='number']");
let text = document.querySelector("[type='text']");
let select = document.querySelector("select");
let submitBtn = document.querySelector("[type='submit']");
let results = document.querySelector(".results");

results.style.cssText = `
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

submitBtn.onclick = function (e) {
  e.preventDefault(); // منع الفورم من إعادة التحميل
  results.innerHTML = ""; // امسح اللي قبل كده

  for (let i = 1; i <= number.value; i++) {
    // إنشاء العنصر حسب الاختيار
    let myElement = document.createElement(select.value.toLowerCase());

    myElement.className = "box";
    myElement.title = "Element";
    myElement.id = `id-${i}`;

    myElement.style.cssText = `
      color: white;
      background-color: #f44336;
      text-align: center;
      padding: 5px 0;
      border-radius: 5px;
      width: 100px;
    `;

    let resultText = document.createTextNode(text.value);
    myElement.appendChild(resultText);

    results.appendChild(myElement);
  }
};
