function createPopup() {
  // إنشاء العناصر
  const popup = document.createElement("div");
  const heading = document.createElement("h3");
  const text = document.createElement("p");
  const closeBtn = document.createElement("span");

  // إضافة الكلاسات
  popup.className = "popup";
  heading.className = "heading";
  text.className = "text";
  closeBtn.className = "close";

  // المحتوى النصي
  heading.textContent = "Welcome";
  text.textContent = "Welcome To Elzero Web School";
  closeBtn.textContent = "x";

  // تنسيق الـ Popup
  popup.style.cssText = `
    font-family: Arial, sans-serif;
    background-color: rgb(237 237 237);
    text-align: center;
    width: 500px;
    margin: 50px auto;
    padding: 15px 0;
    border: 1px solid #0000007a;
    position: relative;
  `;

  // تنسيق زر الإغلاق
  closeBtn.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: absolute;
    top: -13px;
    right: -13px;
    width: 26px;
    height: 26px;
    color: white;
    border-radius: 50%;
    cursor: pointer;
  `;

  // تجميع العناصر
  popup.append(heading, text, closeBtn);
  document.body.appendChild(popup);

  // عند الضغط على زر الإغلاق
  closeBtn.addEventListener("click", () => popup.remove());
}

// تشغيل الـ Popup بعد 5 ثواني
setTimeout(createPopup, 5000);
