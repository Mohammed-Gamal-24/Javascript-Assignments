function getDetails(zName, zAge, zCountry) {
  function namePattern() {
      // return `${zName.slice(0, zName.indexOf(" "))}${zName.substr(zName.indexOf(" "), 2).toUpperCase()}.`
    let firstName = zName.slice(0, zName.indexOf(" ")); // الاسم الأول
    let secondName = zName.substr(zName.indexOf(" ") + 1, 1).toUpperCase(); // أول حرف من الاسم التاني
    return `${firstName} ${secondName}.`;
  }
  // namePattern();

  function ageWithMessage() {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  // ageWithMessage()

  function countryTwoLetters() {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
// countryTwoLetters()

  function fullDetails() {
    return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}` // () مهم جدااا
  }

  return fullDetails(); // Do Not Edit This
}

//

// function getDetails(zName, zAge, zCountry) {
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log(getDetails("Mahmoud kamel", "27 Is The Age", "Faisal"));
// 'Hello Mahmoud K., Your Age Is 27, You Live In FA'