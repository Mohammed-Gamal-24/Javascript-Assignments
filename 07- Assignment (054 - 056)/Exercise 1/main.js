let numbers = [5, 12, 8, 21, 44, 3, 18];
/*
12 => Even
21 => Odd
44 => Even
18 => Even
*/

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 10 ) {
//     if (numbers[i] % 2 === 0) {
//       console.log(`${numbers[i]} => Even`)
//     }
//     else {
//       console.log(`${numbers[i]} => Odd`)
//     }
//   }
// }

//

// for (let i = 0; i < numbers.length; i++) {
//   console.log(
//     numbers[i] > 10 
//       (numbers[i] % 2 === 0 
//       ? `${numbers[i]} => Even`
//       : `${numbers[i]} => Odd`
//   )
// }

// 

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 10) { 
//     console.log(
//       numbers[i] % 2 === 0 
//         ? `${numbers[i]} => Even`
//         : `${numbers[i]} => Odd`
//     )
//   }
// }

//

// for (let i = 0; i < numbers.length; i++) {
//   console.log(
//     numbers[i] > 10 
//       ? numbers[i] % 2 === 0 
//         ? `${numbers[i]} => Even`
//         : `${numbers[i]} => Odd`
//       : null
//   )
// }

// 

for (let i = 0; i < numbers.length; i++) {
  numbers[i] > 10 &&
    console.log(
      numbers[i] % 2 === 0 
        ? `${numbers[i]} => Even`
        : `${numbers[i]} => Odd`
  )
}



//

// let students = ["Ahmed", "Sara", "Ali", "Aser", "Mona", "Samer", "Amr", "Nada", "Omar"];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].length > 3) {
//     if (students[i].startsWith("A")) {
//       console.log(`${students[i]} => VIP`)
//     }
//       else {
//         console.log(`${students[i]} => Normal`)
//       }
//   }
// }


let students = ["Ahmed", "Sara", "Ali", "Aser", "Mona", "Samer", "Amr", "Nada", "Omar"];
for (let i = 0; i < students.length; i++) {
  if (students[i].length > 3) {
    students[i].startsWith("A")
        ? (`${students[i]} => VIP`)
        : (`${students[i]} => Normal`)
    }
}

// 

for (let i = 0; i < students.length; i++) {
  students[i].length > 3 &&
    console.log(
        students[i].startsWith("A")
        ? `${students[i]} => VIP`
        : `${students[i]} => Normal`
    )
}

//

