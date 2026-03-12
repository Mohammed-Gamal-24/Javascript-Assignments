function ageInTime(theAge) { 
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge * 12} Months`)
    console.log(`${theAge * 52} Weeks`)
    console.log(`${theAge * 365} Days`)
    console.log(`${theAge * 365 * 24} Hours`)
    console.log(`${theAge * 365 * 1440} Minutes`)
    console.log(`${theAge * 365 * 86400} Seconds`)
  }
  else {
    console.log(`Age Out Of Range`)
  }
}

// Needed Output 
ageInTime(38); // Months Example => 456 Months
ageInTime(110); // // Age Out Of Range 