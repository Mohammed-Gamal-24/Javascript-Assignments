let start = 10;
let end = 0;
let stop = 3;

/* 
Output

10
09
08
07
06
05
04
03
*/


for (; start >= stop; start--) {
  if (start.toString().length > true) {
    console.log(start);
  } else {
    console.log(`${end}${start}`);
  }
}