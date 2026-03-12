let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions


// if (haystack.includes("JS")) {

if (haystack.includes("JS") === true) {
	console.log("Found")
}

// _____________________

haystack.includes("JS") ? console.log("Found") : console.log("Error")

// _____________________

switch (haystack.includes(needle)) {

	case true:
		console.log("Found")
	break;
    
	case false:
		console.log("Error");
}