let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
"1 => Sayed"
"2 => Mahmoud"

// ممنوع إستخدام الأرقام نهائيا ويمكنك إستخدام قيم المتغيرات مع ما تعلمته لتنفيذ المطلوب
// يجب عدم طباعة الأرقام ولا الاسماء التي تبدأ بحرف A
// يجب إستخدام ال Loop While لعمل المطلوب



while (counter < friends.length) {
  if (typeof friends[counter] === "string" && !friends[counter].startsWith("A")) {
  document.write(`<p>${index + +true} => ${friends[counter]}</p>`)
  index++
  }
  counter++
}