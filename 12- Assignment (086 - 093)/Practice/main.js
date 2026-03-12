// 1. إنشاء العناصر الرئيسية
for (let i = 0; i < 100 ; i++) {
  let mainDiv = document.createElement("div");
  let mainHeading = document.createElement("h3");
  let mainParagraph = document.createElement("p");
  let Number = `${i + true}`
  let textOne = document.createTextNode(`Heading Text ${Number}`);
  let textTwo = document.createTextNode("The Whole Description");
  mainDiv.className = "product"
  
  mainDiv.appendChild(mainHeading)
  
  mainHeading.appendChild(textOne)
  // Number.style.cssText = `
  //   color: "black"
  //   `
  mainHeading.appendChild(mainParagraph)
  
  mainParagraph.appendChild(textTwo)
  
  mainDiv.style.cssText = `
    width: 200px;
    margin: 8px;
    display: inline-block;
    background-color: #E91E63;
    color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: black 3px 2px 8px
  `;
  document.body.appendChild(mainDiv)
} 

//

// // 1. إنشاء العناصر الرئيسية
// let mainDiv = document.createElement("div");
// let mainHeading = document.createElement("h3");
// let mainParagraph = document.createElement("p");

// // 2. تعيين الكلاس للعنصر الأب (بدلاً من محاولة إضافته كعنصر)
// mainDiv.className = "product"; // أو mainDiv.classList.add("product");

// // 3. إنشاء العقد النصية
// let headingText = document.createTextNode("Heading Text"); // تم تعديل الاسم للتوضيح
// let mainParagraphText = document.createTextNode("Paragraph Text"); // تم تعديل الاسم للتوضيح

// // 4. بناء الهيكل الداخلي: إضافة النص إلى العنصر الخاص به
// mainHeading.appendChild(headingText);
// mainParagraph.appendChild(mainParagraphText);

// // 5. بناء هيكل الأب: إضافة العنوان والفقرة داخل الـ div
// mainDiv.appendChild(mainHeading);
// mainDiv.appendChild(mainParagraph); // الفقرة تأتي بعد العنوان

// // 6. إضافة الهيكل بالكامل إلى الصفحة
// document.body.appendChild(mainDiv);
