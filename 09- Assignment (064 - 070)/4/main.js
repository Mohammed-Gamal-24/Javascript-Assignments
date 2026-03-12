// function specialMix(...data) {
//   let result = 0;
//   let foundNumber = false; // علشان نعرف إذا في أرقام ولا لأ

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       result += data[i];
//       foundNumber = true;
//     }
//     else if (typeof data[i] === "string") {
//       let num = parseInt(data[i]); // عشان منفضلش كل شوية نكتب parseInt(data[i])
//       if (!Number.isNaN(num)) {
//         result += num;
//         foundNumber = true;
//       }
//     }
//   }

//   return foundNumber ? result : "All Are Strings";
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix(-10, 10)); // 0 ✅
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


// 

function specialMix(...data) {
  let result = 0; // عشان اجمع الارقام في الاخر
  let foundNumber = false; // علشان نعرف إذا في أرقام ولا لأ
  
  for (let i = 0; i < data.length; i++) {
    let item = parseInt(data[i])
    if (!Number.isNaN(item)) {
      result += item;
      foundNumber = true;
    }
    // else if (Number.isNaN(item)) { // ملوش لازمة عشان لو ملقاش الشرط ال1 مش هيعمل اي حاجة
    // else {
    //   continue
    // } 
  }
    return foundNumber ? result : "All Are Strings";
}


console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix(-10, 10)); // 0 ✅
console.log(specialMix("Test", "Cool", "Test")); // All Are Strings

//

// function specialMix(...data) {
  // let result = 0; // لتجميع كل الأرقام اللي هنلاقيها
  // let foundNumber = false; // علشان نعرف هل لقيت رقم فعلاً ولا كله Strings

  // لوب يلف على كل عنصر جوه المصفوفة data
  // for (let i = 0; i < data.length; i++) {
    // let item = parseInt(data[i]); // نحاول نحول العنصر الحالي لرقم صحيح

    // لو الرقم بعد التحويل مش NaN
    // if (!Number.isNaN(item)) {
      // result += item;        // نجمعه في result
      // foundNumber = true;    // نعلم إننا لقينا رقم
    // }

    // لو طلع NaN (يعني مفيش أرقام في العنصر) → مش هيدخل الشرط، واللوب هيكمل لوحده
    // علشان كده مش محتاج نكتب else أو continue
  // }

  // في الآخر: لو لقينا أرقام → نرجع مجموعهم
  // لو ملقيناش أرقام خالص → نرجع "All Are Strings"
  // return foundNumber ? result : "All Are Strings";
// }

// ✅ تجارب العملية:
// console.log(specialMix(10, 20, 30));                // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix(-10, 10));                   // 0
// console.log(specialMix("Test", "Cool", "Test"));    // All Are Strings