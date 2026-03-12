let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  const [{title, age, available, skills: [, lastSkill]}, , ] = myFriends
  console.log(`${title}`)
  console.log(`${age}`)
  if (available === true) {
  console.log("available")
  }
  else {
  console.log("Not available")
  }
  console.log(`${lastSkill}`)
}

else if (chosen === 2) {
  const [, {title, age, available, skills: [, lastSkill]}, ] = myFriends
  console.log(`${title}`)
  console.log(`${age}`)
  if (available === true) {
  console.log("available")
  }
  else {
  console.log("Not available")
  }
  console.log(`${lastSkill}`)
}

else if (chosen === 3) {
  const [, , {title, age, available, skills: [, lastSkill]}] = myFriends
  console.log(`${title}`)
  console.log(`${age}`)
  if (available === true) {
  console.log("available")
  }
  else {
  console.log("Not available")
  }
  console.log(`${lastSkill}`)
}