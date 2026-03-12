/*
اعمل Function اسمها sumEven
تستقبل أي عدد من الـ Parameters (مش معروف كام).
تتجاهل أي قيمة تكون String.
لو القيمة Float → حوّلها لـ Integer (قص الجزء العشري).
من بين الأرقام كلها، اجمع الأعداد الزوجية بس.
لو مفيش أعداد زوجية ترجع 0.
 */

// function sumEven(...number) {
  // let result = 0
  // for (let i = 0; i < number.length; i++) {
  //   if (typeof number[i] === "string") {
  //     continue
  //   }
  // // //   else if (number[i] % 1 !== 0) {
  // // //     number[i] = Math.trunc(number[i])
  // // //   }
  //   else if (number[i] % 2 === 0) {
  //     result += number[i]
  //   }
  //   // else {
  //   //   console.log(0)
  //   // }
    // console.log(result)
  // }
  // Your Code Here
  // }
// }

function sumEven(...number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] === "string") {
      continue
    }
    // if (number[i] % 1 !== 0) 
    else if (!Number.isInteger(number[i])) {
      number[i] = Math.trunc(number[i])
      if (number[i] % 2 === 0) {
        result += number[i]
      }
    }
    else if (number[i] % 2 === 0) {
      result += number[i]
    }
  }
  console.log(result)
}


// Needed Output
sumEven(10, 15, 20);        // 30   (10 + 20)
sumEven("A", 7, 12, "B");   // 12   (12 بس)
sumEven(11.8, 14.2, 9);     // 14   (11.8 → 11 يتشال، 14.2 → 14 ينضاف)
sumEven("X", "Y");          // 0