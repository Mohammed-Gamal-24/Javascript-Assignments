function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`)
  }
  else if ((secondNum !== undefined && operation === undefined) || (operation === 'add')) {
    return firstNum + secondNum
  }
  else if (operation === 'subtract') {
    return firstNum - secondNum
  }
  else if (operation === 'multiply') {
    return firstNum * secondNum
  }
}

    
  // Needed Output
  calculate(20); // Second Number Not Found

  let result2 = calculate(20, 30);
  console.log(result2) // 50
  
  let result3 = calculate(20, 30, 'add'); // 50
  console.log(result3) // 50

  let result4 = calculate(20, 30, 'subtract');
  console.log(result4) // -10

  let result5 = calculate(20, 30, 'multiply'); // 600
  console.log(result5)