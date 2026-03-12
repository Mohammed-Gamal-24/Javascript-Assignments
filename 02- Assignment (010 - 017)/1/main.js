var numberOne = 10;
var numberTwo = 20;

console.log(numberOne + "" + numberTwo) // 1 => 1020
console.log(String(numberOne) + String(numberTwo)); // 1 => 1020  
console.log(typeof (String(numberOne) + String(numberOne))); // 2 => 1020 typeof String
console.log(typeof (numberOne + "" + numberTwo)); // 2 => 1020 typeof String
console.log(`${numberOne}${numberTwo}`); // 1 => 1020  
console.log(typeof "String(numberOne) + String(numberTwo)"); // 2 => 1020 typeof String

console.log(`${numberOne}${numberTwo}`); // 3 => 1020 - Template Literals

console.log(typeof `${numberOne}${numberTwo}`); // 4 => String Template Literals

console.log(numberTwo + "\n" + numberOne); // 5 + 6
console.log(`${numberTwo}
${numberOne}`); // 7 + 8
