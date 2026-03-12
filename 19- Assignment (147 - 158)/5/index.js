// Don't Edit Here
const myObj = {
  username: "Elzero",
  id: 100, // Read-Only
  score: 1000,
  country: "Egypt",
};

// => Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    enumerable: false,
  },
  // country: {
  //   writable: false,
  //   enumerable: false,
  //   configurable: false,
  // },
})

myObj.score = 500;
delete myObj.country

// Don't Edit Here
for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

// Don't Edit Here
console.log(myObj);

// Needed Output
/*
"username => Elzero"
"score => 1000"
{username: 'Elzero', score: 1000, id: 100}
*/