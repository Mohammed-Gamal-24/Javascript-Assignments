let start = 0;
let swappedName = "elZerO";
// Output "ELzERo"

let result = ""

for (; start < swappedName.length; start++) {
  let letter = swappedName[start]
  if (letter === letter.toLowerCase()) {
    letter = letter.toUpperCase()
  }
  else if (letter === letter.toUpperCase()) {
    letter = letter.toLowerCase()
  }
  result += letter
}
console.log(result);

// 

// let start = 0;
// let swappedName = "elZerO";
// Output "ELzERo"

// let result = "";

for (; start < swappedName.length; start++) {
      result += swappedName[start] === swappedName[start].toLowerCase()
        ? swappedName[start].toUpperCase()
        : swappedName[start].toLowerCase();
    }
    //  الحرف اللي هيطلع هيتخزن في قيمة المتغير

    console.log(result); // "ELzERo"

    //_____________________

let text = "abc123XYZ";
// Output => ABC123xyz

let textResult = "";

for (let i = 0; i < text.length; i++) {
    textResult += text[i] === text[i].toLowerCase()
    ? text[i].toUpperCase()
    : text[i].toLowerCase()
}
console.log(textResult)