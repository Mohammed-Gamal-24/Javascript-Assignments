let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

  // فلترة الأسماء اللي مش بتبدأ بالحرف اللي في letter
let filtered = friends.filter(name => !name.toLowerCase().startsWith(letter));

// طباعة الأسماء مع الترقيم
let counter = +true;
for (let i = (+true - +true); i < filtered.length; i++) {
  console.log(`${counter++} => ${filtered[i]}`);
}
//
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// 
/*
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

// let counter = +true

friends.shift()
  for (i= (friends.length - friends.length); i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) {
      continue;
    }
    else {
        console.log(`${counter++} => ${friends[i]}`);
    }
  }