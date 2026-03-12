let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
switch (day) {
    case "   friday  " :
        console.log(`${day.trim()[0].toUpperCase()}${day.trim().slice(1, 6)}`)
}

// _________________________

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
// Output => "No Appointments Available"

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
    break;
    default :
        console.log("Error")
}

// _________________________

let day = "Monday";
let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

switch (day) {
    case "Monday" :
    case "Thursday" :
        console.log("Available Appointments are From 10:00 AM To 5:00 PM");
    break;
}

// _________________________

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"
switch (day) {
    case "Tuesday" :
        console.log("Available Appointment is From 10:00 AM To 6:00 PM");
    break;
}

// _________________________


let day = "Wednesday";
// Output => "From 10:00 AM To 5:00 PM"

switch (day) {
    case "Wednesday" :
        console.log("Available Appointment is From 10:00 AM To 7:00 PM");
    break;
}

// _________________________


let day = "World";
// Output => "Its Not A Valid Day"

let day = "World";
// Output => "Its Not A Valid Day"

switch (day) {
    case "World" :
        console.log("Its Not A Valid Day");
    break;
}



/* */


switch (day) {
    case "   friday  " :
      console.log(`${day.trim()[0].toUpperCase()}${day.trim().slice(1, 6)}`)
    break;

    case "Friday":
    case "Saturday":
    case "Sunday":
      console.log("No Appointments Available");
    break;

    case "Monday" :
    case "Thursday" :
      console.log("Available Appointments are From 10:00 AM To 5:00 PM");
    break;

    case "Tuesday" :
      console.log("Available Appointment is From 10:00 AM To 6:00 PM");
    break;

    case "Wednesday" :
      console.log("Available Appointment is From 10:00 AM To 7:00 PM");
    break;
    
    case "World" :
      console.log("Its Not A Valid Day");
    break;

    default :
      console.log("WTF is That !")
}
