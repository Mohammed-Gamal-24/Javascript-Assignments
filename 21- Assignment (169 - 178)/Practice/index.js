// JSON Object
const jsonObject = `{
  "name": "Mohammed",
  "age": 28,
  "married": false,
  "numberOfChildren": null,
  "skills": ["HTML", "CSS", "Javascript"],
  "work": {
    "company": "Tech Solutions",
    "position": "Frontend Developer",
    "yearsExperience": 5
  }
}`

// const jsonObject2 = '{"name": "Mohammed", "age": 28, "married": false, "numberOfChildren": null, "skills": ["HTML", "CSS", "Javascript"], "work": {"company": "Tech Solutions", "position": "Frontend Developer", "yearsExperience": 5} }';

// const jsonObject3 = '{\
//   "name": "Mohammed",\
//   "age": 28,\
//   "married": false,\
//   "numberOfChildren": null,\
//   "skills": ["HTML", "CSS", "Javascript"],\
//   "work": {\
//     "company": "Tech Solutions",\
//     "position": "Frontend Developer",\
//     "yearsExperience": 5\
//   }\
// }'

// console.log(jsonObject);
// console.log(typeof jsonObject);
// console.log(typeof jsonObject2);
// console.log(typeof jsonObject3);

const jsonToJs = JSON.parse(jsonObject) // JSON TO JS Object
console.log(jsonToJs);
console.log(typeof jsonToJs);

// jsonToJs["age"] = 30;
// console.log(jsonToJs);
// console.log(typeof jsonToJs);

// const jsToJson = JSON.stringify(jsonToJs) // JS Object TO JSON
// console.log(jsToJson);
// console.log(typeof jsToJson);

// =============================

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts")
request.send();
console.log(request);

// console.log(request.onreadystatechange) // The Value = > null

request.onreadystatechange = function () {
  // console.log(request.readyState) // 4
  // console.log(request.status) // 200
  if (this.readyState === 4 && this.status === 200) {
    console.log(`The Response Text is : ${this.responseText}`) // text
    let jsData = JSON.parse(this.responseText) // JSON TO JS Object
    console.log(jsData)
    for (let i = 0;i < jsData.length; i++) {
      let div = document.createElement("div")
      let text = document.createTextNode(jsData[i].id)
      div.appendChild(text)
      document.body.appendChild(div)
    }
  }
}

// let secondRequest = new XMLHttpRequest();
// secondRequest.open("Get", "info.json")
// secondRequest.send()
// console.log(secondRequest)

// secondRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText)
//     let info = JSON.parse(this.responseText)
//     console.log(info)
//   }
// }