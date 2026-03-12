function data(userName = "Unknown", age = "Unknown", rate = 0, show = "Yes", ...skills) {
  document.write(`<div>`)

  document.write(`<h3>Welcome ${userName}<h3>`)
  document.write(`<p>Age: ${age}<p>`)
  document.write(`<p>Hour Rate: $${rate}<p>`)
  // document.write(`<p>Show: ${show}<p>`)
  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<p style = "color: blue" >Skills: ${skills.join(" | ")}<p>`)
    }
    else {
      document.write(`<p>No Skills<p>`)
    }
  }
  else {
    document.write(`<p>Skills: Are Hidden<p>`)
  }
  document.write(`</div>`)
}

// data("Jimmy", 28, 30, "Yes"); // No Skills
data("Jimmy", 28, 30, "Yes", "HTML", "CSS", "JavaScript");
// data();

// 

function motivationalMessage() {
  document.write("إن الله لا يضيع أجر المحسنين")
}

document.getElementById("sendData").onclick = motivationalMessage;

// document.getElementById("sendData").onclick = function () {
//   console.log("Done")
//   // document.write(`<p>ذاكر ي علق</p>`)
// };

setTimeout(function() {
  console.log("عامل ايه ي عمر")
}, 2000)
setTimeout(function() {
  console.log("مش هنذاكر بقى ونبطل منيكة")
}, 4000)
setTimeout(function() {
  console.log("بكلمك بجد")
}, 6000)

//

// let lines = ["Line 1", "Line 2", "Line 3", "Line 4"];

// for (let i = 0; i < lines.length; i++) {
//   setTimeout(function () {
//     console.log(lines[i]);
//   }, (i + 1) * 2000); // كل سطر بعد 2 ثانية عن اللي قبله
// }
