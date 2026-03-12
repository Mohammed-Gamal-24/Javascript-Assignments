const movie = {
  name: "Inception",
  year: 2010,
  ratings: {
    imdb: 8.8,
    rottenTomatoes: "87%",
    metacritic: 74,
  },
  boxOffice: {
    budget: "$160M",
    openingWeekend: "$62.7M",
    worldwide: "$829.9M",
  },
  actors: ["Leonardo DiCaprio", "Tom Hardy", "Joseph Gordon-Levitt"],
};

const {name: title, year: releaseYear, ratings, boxOffice, actors} = movie
const {imdb: i, rottenTomatoes: rt, metacritic: mc} = ratings
const {budget, openingWeekend, worldwide} = boxOffice

// ========== Separator ==========

// [1]
console.log(title)
console.log(releaseYear)

// ========== Separator ==========

// [2]
console.log(i)
console.log(rt)
console.log(mc)

// ========== Separator ==========

// [3]

console.log(Object.keys(boxOffice))

const [firstKey, , lastKey] = Object.keys(boxOffice)
console.log(`The first key is: ${firstKey}, And the last key is ${lastKey}`)

const [firstValue, , lastValue] = Object.values(boxOffice)
console.log(`The first Value is: ${firstValue}, And the Value key is ${lastValue}`)

// ========== Separator ==========

// [4]

/*
  boxOffice: {
    budget: "$160M",
    openingWeekend: "$62.7M",
    worldwide: "$829.9M",
  },
*/

const [bd, , ] = Object.values(boxOffice)
console.log(bd)
// ========== Separator ==========

// [5]

const [[firstRatingEntry, firstRatingValue], , ] = Object.entries(ratings)
console.log(`${firstRatingEntry}: ${firstRatingValue}`)

// ========== Separator ==========

// [6]

// Normal way
// const lastActor = actors[actors.length - 1]
// console.log(lastActor)

// Using Destructuring

const [, , lastActor] = actors
console.log(lastActor)

// ========== Separator ==========
//-- Exercise

// The Wanted Output

console.log(`Movie: ${title} (${releaseYear})`)
console.log(`Ratings: ${Object.entries(ratings)}`)
console.log(`Box Office Keys: ${firstKey}, ${lastKey}`)
console.log(`Budget: ${bd}`)
console.log(`First Rating Entry: ${firstRatingEntry}: ${firstRatingValue}`)
console.log(`Last Actor: ${lastActor}`)

console.log(`Ratings: ${Object.entries(ratings).join(" | ")}`)

// for (const [key, value] of Object.entries(movie)) {
//   console.log(`The key is ${key}, and the Value is ${value}`)
//   if (key === ratings) {
//     for (const [innerKey, innerValue] of Object.entries(ratings)) {
//       console.log(`The key is ${innerKey}, and the Value is ${innerValue}`)
//     }
//   }
//   else {
//     for (const [innerKeyb, innerValueb] of Object.entries(ratings)) {
//       console.log(`The key is ${innerKeyb}, and the Value is ${innerValueb}`)
//     }
//   }
// }

/*

*/

/*
Movie: Inception (2010)
Ratings: IMDb=8.8 | Rotten=87% | MetaCritic=74
Box Office Keys: budget , worldwide
Budget: $160M
First Rating Entry: imdb: 8.8
Last Actor: Joseph Gordon-Levitt
*/

console.log("Hello from VS Code + Node.js!");
