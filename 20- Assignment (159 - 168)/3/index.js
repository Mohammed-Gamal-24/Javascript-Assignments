// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"

let now = new Date()
console.log(now.getMonth())

now.setDate(now.getDate() - now.getDate())
console.log(now)

// "Previous Month Is April And Last Day Is 30"
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

console.log(`Previous Month Is ${months[now.getMonth()]} And Last Day Is ${now.getDate()}`)

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

console.log(`Last day was ${days[new Date().getDay() - 1]}`)