let myString = "EElllzzzzzzzeroo";

// Elzero => filter

let result = myString
  .split("")
  .filter(function(element, index, array) {
    return array.indexOf(element) === index
    // return array.lastIndexOf(element) === index;
      // element = العنصر الحالي
      // index = رقم مكانه
      // array = المصفوفة كلها
  }).join("")
  console.log(result)