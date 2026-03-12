function itsMe() {
  return `Iam A Normal Function`;
}

let resultOne = () => `Iam A Normal Function`;

// =
console.log(resultOne()); // Iam A Normal Function


//___________________

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// =

let result = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(result("https", "elzero", "org"));


