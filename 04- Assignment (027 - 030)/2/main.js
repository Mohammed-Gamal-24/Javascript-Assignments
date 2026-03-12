/*
لديك بعض المتغيرات عبارة عن كلمة ومجموعة حروف
في السطر الأول تأكد أن الحرف Z موجود داخل الكلمة وان النتيجة التي ستخرج هي true
في السطر الثاني تأكد أن الكلمة تبدا بالحرف E وأن النتيجة التي ستخرج هي true
في السطر الثالث تأكد أن الكلمة تنتهي بالحرف o وأن النتيجة التي ستخرج هي true
لاحظ حالة الأحرف Capital And Small
غير مسموح التلاعب بالمتغيرات

*/

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(); // True
console.log(); // True
console.log(); // True

console.log(`${word.substr(0, 2)}${letterZ.toLocaleUpperCase()}${word.slice(3)} ${word.includes("zero")}`)

console.log(word.includes("z")); // true

console.log(`${letterE.toLocaleUpperCase()}${word.substr(1, 5)} ${word.startsWith("E")}`)

console.log(word.startsWith("E")); // true

console.log(`${letterE}${word.slice(1, 5)}${letterO} ${word.endsWith("o")}`) // elzerO true

console.log(`${word.slice(0, 5)}${letterO.toLowerCase()} ${word.endsWith("o")}`) // Elzero true

console.log(word.endsWith("o")); // true