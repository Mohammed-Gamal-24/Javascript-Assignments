let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// Line 1
if (num3 > num1 && typeof(num3) !== typeof(num1)) {
    console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number`)
} 
else {
  console.log("Error")
}

// Line 2
if (num3 > num1 && num3 == num2 && typeof(num3) !== typeof(num2)) {
    console.log(`30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number`)
} 
else {
  console.log("Error")
}

// Line 3
if (num3 !== num1 && typeof(num3) !== typeof(num2)) {
    console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`)
} 
else {
  console.log("Error")
}
// يجب فحص نوع البيانات والقيمة بنفسك لأن البيانات يمكن ان يتغير نوعها وقيمتها