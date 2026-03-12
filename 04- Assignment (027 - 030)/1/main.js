/*
لديك متغير يحتوي على String
المطلوب جلب أول حرف من ال String
يجب تنفيذ الحل ب 6 طرق مختلفة
يجب عدم تكرار اي حل ويجب إستعمال المتغير فقط
يجب التأكد أن الحرف صغير Small Letter
واحد من الحلول تأكد أنه يقوم بتكرار الحرف المأخوذ 3 مرات

*/
let userName = "Elzero";

console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substr(3, 1)); // e

console.log(userName[3].repeat(3)); // eee
console.log(userName.charAt(3).repeat(3)); // eee
console.log(userName.slice(3, 4).repeat(3)); // eee
console.log(userName.substring(3, 4).repeat(3)); // eee
console.log(userName.substr(3, 1).repeat(3)); // eee