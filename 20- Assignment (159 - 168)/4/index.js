// Needed Output for example 

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

// String Date

console.log(new Date("1998-02-24"))
console.log(new Date("1998/02/24"))
console.log(new Date("1998.02.24"))


// Not String Date
console.log(new Date(1998, 1, 24))

// Date Variable
let birthday = new Date()
// birthday.setFullYear(1998, 1, 24)
// birthday.setHours(0, 0, 0)

// or 

birthday.setFullYear(1998)
birthday.setMonth(1)
birthday.setDate(24)
birthday.setSeconds(0)
birthday.setMinutes(0)
birthday.setHours(0)
// birthday.setHours(0, 0, 0)

console.log(birthday)