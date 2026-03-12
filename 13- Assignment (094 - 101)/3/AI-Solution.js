// حذف الـ <p>
document.getElementsByTagName("p")[0].remove();

// تحديد العنصر الحالي
const currentDiv = document.querySelector(".our-element");

// ===== إنشاء عنصر البداية =====
const startDiv = document.createElement("div");
startDiv.className = "start";
startDiv.title = "Start Element";
startDiv.textContent = "Start";
startDiv.setAttribute("data-value", "Start");

// إدراج عنصر البداية قبل العنصر الحالي
currentDiv.before(startDiv);

// ===== إنشاء عنصر النهاية =====
const endDiv = document.createElement("div");
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.textContent = "End";
endDiv.setAttribute("data-value", "End");

// إدراج عنصر النهاية بعد العنصر الحالي
currentDiv.after(endDiv);
