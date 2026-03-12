// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

let start = 1;
let end = 6;
let breaker = 2;

for (; start <= end; start++) {
  console.log(start)
  for (let i = breaker; i <= (breaker * breaker); i+= breaker) {
    console.log(`-- ${i}`)
  }
}