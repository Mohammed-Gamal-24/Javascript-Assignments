// Output
2
3
4

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

mix.shift(); // حذف أول عنصر (1)

for (; start < mix.length; start++) {
  if (typeof mix[start] === "number") {
    console.log (mix[start]);
  }
}