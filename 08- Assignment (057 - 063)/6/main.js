function multiply(...part4) {
  let result = 1
  for (let i = 0; i < part4.length; i++) {
    if (typeof part4[i] === "string") {
      continue;
    }
    else if (part4[i] % 1 !== 0) {
      part4[i] = Math.trunc(part4[i])
    }
    result *= part4[i]
  }
  console.log(result)
} 

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000