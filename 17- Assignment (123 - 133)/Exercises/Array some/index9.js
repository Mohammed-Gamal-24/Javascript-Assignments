let products = [
  {name: "Phone", price: 500},
  {name: "Laptop", price: 1500},
  {name: "Mouse", price: 50}
];
// المطلوب: تحقق إذا في أي منتج سعره فوق 1000
//  to check if there is a product's price greater 1000

let check = products.some((e) => e.price > 1000)

console.log(check)