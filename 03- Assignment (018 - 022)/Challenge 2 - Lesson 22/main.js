/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

// [1]
console.log(++a + +b++ + +c++ - +a++); // = 100
console.log(11 + 20 + 80 - 11); // = 100
/* 
++a = 11
+
+b++ = 20
+c++ = 80
-
+a++ = 11
Result ==> 100
*/

// [2]
console.log(++a + -b + +c++ - -a++ + +a);
console.log(11 + -20 + 80 - -11 + 12); // = 94
console.log(11 - 20 + 80 + 11 + 12); // = 94
/* 
++a = 11
+
-b = -20
- + = -
+c++ = 80
- - = +
-a++ = -11
+a = 12
Result ==> 94
*/

// [3]
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 97
console.log(79 + 20 + (9 * 20) - (21 * 9) + 8 - 1); // 97

/*

--c = 79
+b = 20
--a = 9
+b++ = 20
+b = 21
a = 9
--a = 8
+true = 1
Result ==> 97
*/

/*
  [+] => Addition Operator
  [-] => Subtraction Operator
  [*] => Multiplication Operator

  ++a => Pre Increment
  a++ => Post Increment

  --a => Pre Decrement
  a-- => Post Decrement

  +value => Unary Plus
  -value => Unary Negation
*/

/*
  Challenge 2
*/

  let d = "-100";
  let e = "20";
  let f = 30;
  let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(Math.abs(d) * +e); // 2000

console.log(); // 173
console.log((++g * ++e) + ++f + -d); // 173
console.log((Math.abs(~true) * ++e) + ++f + -d); // 173 
console.log(("++").length * ++e + ++f + -d); // 173 
