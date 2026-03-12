let data = [
  {id: 1, tags: ["js", "html"]},
  {id: 2, tags: ["css", "design"]},
  {id: 3, tags: ["node", "js"]}
];

// المطلوب: تحقق إذا في أي عنصر يحتوي على "js" في الـ tags
//  to check if there is tag of any element contains "js"

let check = data.some((e) => e.tags.includes("js"))

console.log(check)