// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

let assign = new Date(0)

assign.setFullYear(1980)

assign.setHours(0)

// assign.setTime(1000) => Milliseconds
assign.setSeconds(1)

// assign.setDay() => There's no method
console.log(assign)