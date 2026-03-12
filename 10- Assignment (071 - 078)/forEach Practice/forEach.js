/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll("ul li");

// console.log(allLis)

// let allDivs = document.querySelectorAll(".content div");
// // console.log(ele.innerHTML)


// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // Remove Active Class From All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To This Element
//     this.classList.add("active");
//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

// let allLis = document.querySelectorAll("ul li");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // allLis.forEach(function (ele) {
//     //   ele.classList.remove("active")
//     // })
//     this.classList.add("active")
//   };
// });


// let allLists = document.querySelectorAll("ul li")

// allLists.forEach(function (ele) {
//   ele.onclick = function () {
//     this.classList.add("active")
//   }
// })


// lists.forEach(function (ele) {
  //   ele.onclick = function () {
    //     lists.forEach(function (ele) {
      //       ele.classList.remove("active")
      //     })
      //     this.classList.add("active") 
      //   }
      // })
      

let lists = document.querySelectorAll("ul li")

lists.forEach(function (ele) {
  ele.onclick = function () {
    lists.forEach(function (ele) {
      ele.classList.remove("active")
    })
    this.classList.add("active")
  }
})


let allDivs = document.querySelectorAll(".content div")

allDivs.forEach(function (ele) {
  ele.onclick = function () {
    this.style.display = "none"
  }
})